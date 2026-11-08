"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { getPublishedPosts, type Post } from "@/lib/posts";
import { isFirebaseConfigured } from "@/lib/firebase";
import { PostCard } from "./PostCard";
import { SetupNotice } from "./SetupNotice";

export function BlogList() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    getPublishedPosts().then(setPosts).catch((e) => setError(e.message));
  }, []);

  const tags = useMemo(() => Array.from(new Set((posts ?? []).flatMap((p) => p.tags))).sort(), [posts]);
  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return (posts ?? []).filter(
      (p) =>
        (!tag || p.tags.includes(tag)) &&
        (!s || p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s))
    );
  }, [posts, q, tag]);

  if (!isFirebaseConfigured) return <div className="mt-10"><SetupNotice /></div>;
  if (error) return <p className="mt-10 text-cyber-red">Failed to load posts: {error}</p>;
  if (!posts) return <p className="mt-10 font-mono text-cyber-muted">Loading...</p>;

  return (
    <div className="mt-8">
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyber-muted" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posts..."
          className="w-full rounded-lg border border-cyber-border bg-cyber-card py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-cyber-accent"
        />
      </div>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {["", ...tags].map((t) => (
            <button
              key={t || "all"}
              onClick={() => setTag(t)}
              className={`rounded border px-3 py-1 font-mono text-xs transition ${
                tag === t
                  ? "border-cyber-accent bg-cyber-accent text-cyber-bg"
                  : "border-cyber-border text-cyber-muted hover:border-cyber-accent hover:text-cyber-accent"
              }`}
            >
              {t || "all"}
            </button>
          ))}
        </div>
      )}
      {filtered.length === 0 ? (
        <p className="mt-10 text-cyber-muted">No posts found.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
