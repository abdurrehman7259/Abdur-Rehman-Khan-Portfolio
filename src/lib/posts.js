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

const COL = "posts";

function toDate(v) {
  return v instanceof Timestamp ? v.toDate() : null;
}

function fromDoc(id, d) {
  return {
    slug: id,
    title: d.title ?? "",
    excerpt: d.excerpt ?? "",
    content: d.content ?? "",
    coverImage: d.coverImage ?? "",
    tags: d.tags ?? [],
    published: Boolean(d.published),
    readingTime: d.readingTime ?? 1,
    createdAt: toDate(d.createdAt),
    updatedAt: toDate(d.updatedAt),
  };
}

const byNewest = (a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0);

export function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function calcReadingTime(markdown) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Public pages read published posts on the server instead: see src/lib/posts-public.js.

/** Admin: all posts including drafts. */
export async function getAllPosts() {
  const snap = await getDocs(collection(db, COL));
  return snap.docs.map((d) => fromDoc(d.id, d.data())).sort(byNewest);
}

export async function getPost(slug) {
  const snap = await getDoc(doc(db, COL, slug));
  return snap.exists() ? fromDoc(snap.id, snap.data()) : null;
}

export async function savePost(input) {
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

export async function deletePost(slug) {
  await deleteDoc(doc(db, COL, slug));
}

export function formatDate(d) {
  return d ? d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "";
}
