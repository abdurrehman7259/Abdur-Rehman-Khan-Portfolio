"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { Eye, LogOut, Pencil, Plus, Trash2 } from "lucide-react";
import { auth } from "@/lib/firebase";
import { deletePost, formatDate, getAllPosts, type Post } from "@/lib/posts";
import { AdminGuard } from "@/components/blog/AdminGuard";
import { BlogHeader } from "@/components/blog/BlogHeader";

function Dashboard() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(() => {
    getAllPosts().then(setPosts).catch((e) => setError(e.message));
  }, []);
  useEffect(load, [load]);

  async function remove(p: Post) {
    if (!confirm(`Delete "${p.title}"? This cannot be undone.`)) return;
    try {
      await deletePost(p.slug);
      load();
    } catch (e) {
      setError((e as Error).message);
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <div className="flex gap-3">
          <Link href="/admin/editor/new" className="inline-flex items-center gap-1.5 rounded-lg bg-cyber-accent px-4 py-2 font-mono text-sm font-semibold text-cyber-bg hover:bg-cyber-accentHover">
            <Plus className="h-4 w-4" /> New post
          </Link>
          <button onClick={() => signOut(auth)} className="inline-flex items-center gap-1.5 rounded-lg border border-cyber-border px-4 py-2 text-sm text-cyber-muted hover:border-cyber-red hover:text-cyber-red">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>
      {error && <p className="mt-4 text-cyber-red">{error}</p>}
      {!posts ? (
        <p className="mt-8 font-mono text-cyber-muted">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="mt-8 text-cyber-muted">No posts yet. Create your first one.</p>
      ) : (
        <ul className="mt-8 space-y-3">
          {posts.map((p) => (
            <li key={p.slug} className="glass-panel flex flex-wrap items-center justify-between gap-3 rounded-xl p-4">
              <div className="min-w-0">
                <p className="truncate font-semibold text-white">{p.title}</p>
                <p className="mt-1 flex items-center gap-3 font-mono text-xs text-cyber-muted">
                  <span className={p.published ? "text-cyber-green" : "text-cyber-yellow"}>
                    {p.published ? "PUBLISHED" : "DRAFT"}
                  </span>
                  <span>{formatDate(p.createdAt)}</span>
                  <span>/{p.slug}</span>
                </p>
              </div>
              <div className="flex gap-2">
                <Link href={`/blog/${p.slug}`} className="rounded border border-cyber-border p-2 text-cyber-muted hover:text-cyber-accent" aria-label="View">
                  <Eye className="h-4 w-4" />
                </Link>
                <Link href={`/admin/editor/${p.slug}`} className="rounded border border-cyber-border p-2 text-cyber-muted hover:text-cyber-accent" aria-label="Edit">
                  <Pencil className="h-4 w-4" />
                </Link>
                <button onClick={() => remove(p)} className="rounded border border-cyber-border p-2 text-cyber-muted hover:text-cyber-red" aria-label="Delete">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function AdminPage() {
  return (
    <div className="cyber-grid-bg min-h-screen">
      <BlogHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <AdminGuard>
          <Dashboard />
        </AdminGuard>
      </main>
    </div>
  );
}
