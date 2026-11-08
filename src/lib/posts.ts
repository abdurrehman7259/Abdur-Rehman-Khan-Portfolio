import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags: string[];
  published: boolean;
  readingTime: number;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export type PostInput = Omit<Post, "createdAt" | "updatedAt" | "readingTime"> & {
  isNew: boolean;
};

const COL = "posts";

function toDate(v: unknown): Date | null {
  return v instanceof Timestamp ? v.toDate() : null;
}

function fromDoc(id: string, d: Record<string, unknown>): Post {
  return {
    slug: id,
    title: (d.title as string) ?? "",
    excerpt: (d.excerpt as string) ?? "",
    content: (d.content as string) ?? "",
    coverImage: (d.coverImage as string) ?? "",
    tags: (d.tags as string[]) ?? [],
    published: Boolean(d.published),
    readingTime: (d.readingTime as number) ?? 1,
    createdAt: toDate(d.createdAt),
    updatedAt: toDate(d.updatedAt),
  };
}

const byNewest = (a: Post, b: Post) =>
  (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0);

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function calcReadingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Public: published posts only (matches the Firestore rule). */
export async function getPublishedPosts(): Promise<Post[]> {
  const snap = await getDocs(query(collection(db, COL), where("published", "==", true)));
  return snap.docs.map((d) => fromDoc(d.id, d.data())).sort(byNewest);
}

/** Admin: all posts including drafts. */
export async function getAllPosts(): Promise<Post[]> {
  const snap = await getDocs(collection(db, COL));
  return snap.docs.map((d) => fromDoc(d.id, d.data())).sort(byNewest);
}

export async function getPost(slug: string): Promise<Post | null> {
  const snap = await getDoc(doc(db, COL, slug));
  return snap.exists() ? fromDoc(snap.id, snap.data()) : null;
}

export async function savePost(input: PostInput): Promise<void> {
  const ref = doc(db, COL, input.slug);
  if (input.isNew && (await getDoc(ref)).exists()) {
    throw new Error("A post with this slug already exists.");
  }
  const data = {
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    coverImage: input.coverImage,
    tags: input.tags,
    published: input.published,
    readingTime: calcReadingTime(input.content),
    updatedAt: serverTimestamp(),
    ...(input.isNew ? { createdAt: serverTimestamp() } : {}),
  };
  await setDoc(ref, data, { merge: true });
}

export async function deletePost(slug: string): Promise<void> {
  await deleteDoc(doc(db, COL, slug));
}

export function formatDate(d: Date | null): string {
  return d
    ? d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
    : "";
}
