/**
 * Server-side reads of published blog posts, for the public /blog pages.
 *
 * Posts are fetched from Firestore's REST API on the server and sent to visitors as finished HTML, so a
 * visitor's browser never loads Firebase: nothing is written to their browser storage and their IP address
 * is not sent to Google. Firestore security rules still apply: these requests are unauthenticated, so only
 * published posts can be read. The admin area keeps using the Firebase SDK in src/lib/posts.js.
 *
 * Only import this file from server components.
 */

/** How often (seconds) the server refreshes posts. Edits appear on the public blog within this time. */
export const POSTS_REVALIDATE_SECONDS = 60;

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "";
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "";

export const isBlogConfigured = Boolean(PROJECT_ID && API_KEY);

const BASE = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(PROJECT_ID)}/databases/(default)/documents`;

const str = (v) => v?.stringValue ?? "";
const num = (v) => Number(v?.integerValue ?? v?.doubleValue ?? 0);

function fromDocument(doc) {
  const f = doc.fields ?? {};
  if (f.published?.booleanValue !== true) return null;
  return {
    slug: decodeURIComponent(doc.name.split("/").pop() ?? ""),
    title: str(f.title),
    excerpt: str(f.excerpt),
    content: str(f.content),
    coverImage: str(f.coverImage),
    tags: (f.tags?.arrayValue?.values ?? []).map(str).filter(Boolean),
    readingTime: Math.max(1, num(f.readingTime) || 1),
    createdAt: f.createdAt?.timestampValue ?? null,
  };
}

const byNewest = (a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? "");

const cacheOptions = { next: { revalidate: POSTS_REVALIDATE_SECONDS, tags: ["posts"] } };

/** Published posts, newest first. Throws if Firestore cannot be reached, so the page can say so. */
export async function fetchPublishedPosts() {
  if (!isBlogConfigured) return [];
  const res = await fetch(`${BASE}:runQuery?key=${encodeURIComponent(API_KEY)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: "posts" }],
        where: { fieldFilter: { field: { fieldPath: "published" }, op: "EQUAL", value: { booleanValue: true } } },
      },
    }),
    ...cacheOptions,
  });
  if (!res.ok) throw new Error(`Firestore answered ${res.status}`);
  const rows = await res.json();
  return rows
    .map((row) => (row.document ? fromDocument(row.document) : null))
    .filter((p) => p !== null)
    .sort(byNewest);
}

/** One published post, or null when it does not exist or is still a draft. */
export async function fetchPublishedPost(slug) {
  if (!isBlogConfigured || !/^[a-z0-9-]{1,120}$/.test(slug)) return null;
  const res = await fetch(`${BASE}/posts/${encodeURIComponent(slug)}?key=${encodeURIComponent(API_KEY)}`, cacheOptions);
  // 403: a draft (the rules refuse unauthenticated reads); 404: no such post.
  if (res.status === 403 || res.status === 404) return null;
  if (!res.ok) throw new Error(`Firestore answered ${res.status}`);
  return fromDocument(await res.json());
}

export function formatPostDate(iso) {
  return iso
    ? new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })
    : "";
}
