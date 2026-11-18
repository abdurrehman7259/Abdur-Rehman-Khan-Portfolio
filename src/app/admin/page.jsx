"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { Download, Eye, LogOut, Pencil, Plus, Trash2 } from "lucide-react";
import { auth } from "@/lib/firebase";
import { deletePost, formatDate, getAllPosts } from "@/lib/posts";
import { AdminGuard } from "@/components/blog/AdminGuard";
import { BlogHeader } from "@/components/blog/BlogHeader";

function Dashboard() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState("");

  const load = useCallback(() => {
    getAllPosts()
      .then(setPosts)
      .catch((e) => setError(e.message));
  }, []);
  useEffect(load, [load]);

  /**
   * Saves every post (drafts included) as JSON. The sha256 field is a checksum of the "posts" array as
   * written, so a later check can tell whether the backup was changed or damaged.
   */
  async function downloadBackup() {
    if (!posts) return;
    const body = JSON.stringify(posts);
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(body));
    const sha256 = Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
    const exportedAt = new Date().toISOString();
    const file = `{"format":"portfolio-blog-backup/1","exportedAt":"${exportedAt}","count":${posts.length},"sha256":"${sha256}","posts":${body}}\n`;
    const url = URL.createObjectURL(new Blob([file], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `blog-backup-${exportedAt.slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function remove(p) {
    if (!confirm(`Delete "${p.title}"? This cannot be undone.`)) return;
    try {
      await deletePost(p.slug);
      load();
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-ink">Dashboard</h1>
        <div className="flex gap-3">
          <Link
            href="/admin/editor/new"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cyber-accent px-4 py-2 font-mono text-sm font-semibold text-cyber-bg hover:bg-cyber-accentHover"
          >
            <Plus className="h-4 w-4" aria-hidden="true" /> New post
          </Link>
          <button
            type="button"
            onClick={downloadBackup}
            disabled={!posts}
            className="inline-flex items-center gap-1.5 rounded-lg border border-cyber-border px-4 py-2 text-sm text-cyber-muted hover:border-cyber-accent hover:text-cyber-accent disabled:opacity-50"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> Download backup
          </button>
          <button
            onClick={() => signOut(auth)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-cyber-border px-4 py-2 text-sm text-cyber-muted hover:border-cyber-red hover:text-cyber-red"
          >
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
                <p className="truncate font-semibold text-ink">{p.title}</p>
                <p className="mt-1 flex items-center gap-3 font-mono text-xs text-cyber-muted">
                  <span className={p.published ? "text-cyber-green" : "text-cyber-yellow"}>
                    {p.published ? "PUBLISHED" : "DRAFT"}
                  </span>
                  <span>{formatDate(p.createdAt)}</span>
                  <span>/{p.slug}</span>
                </p>
              </div>
              <div className="flex gap-2">
                {/* Public pages show published posts only; preview drafts in the editor. */}
                {p.published && (
                  <Link
                    href={`/blog/${p.slug}`}
                    className="rounded border border-cyber-border p-2 text-cyber-muted hover:text-cyber-accent"
                    aria-label={`View "${p.title}" on the blog`}
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
                <Link
                  href={`/admin/editor/${p.slug}`}
                  className="rounded border border-cyber-border p-2 text-cyber-muted hover:text-cyber-accent"
                  aria-label={`Edit "${p.title}"`}
                >
                  <Pencil className="h-4 w-4" aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={() => remove(p)}
                  className="rounded border border-cyber-border p-2 text-cyber-muted hover:text-cyber-red"
                  aria-label={`Delete "${p.title}"`}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
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
    <div className=" min-h-screen">
      <BlogHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <AdminGuard>
          <Dashboard />
        </AdminGuard>
      </main>
    </div>
  );
}
