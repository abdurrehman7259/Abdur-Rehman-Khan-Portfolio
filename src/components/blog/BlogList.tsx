"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { PublicPost } from "@/lib/posts-public";
import { PostCard } from "./PostCard";

/** Search and tag filters over posts the server already loaded. Nothing is fetched in the browser. */
export function BlogList({ posts }: { posts: PublicPost[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");

  const tags = useMemo(() => Array.from(new Set(posts.flatMap((p) => p.tags))).sort(), [posts]);
  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return posts.filter(
      (p) =>
        (!tag || p.tags.includes(tag)) &&
        (!s || p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s))
    );
  }, [posts, q, tag]);

  return (
    <div className="mt-8">
      <div className="relative max-w-md">
        <label htmlFor="post-search" className="sr-only">
          Search posts
        </label>
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          id="post-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posts..."
          className="w-full rounded-lg border border-line bg-surface py-2 pl-9 pr-3 text-sm text-ink focus:border-accent"
        />
      </div>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
          {["", ...tags].map((t) => (
            <button
              key={t || "all"}
              type="button"
              onClick={() => setTag(t)}
              aria-pressed={tag === t}
              className={`rounded border px-3 py-1 font-mono text-xs transition ${
                tag === t
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {t || "all"}
            </button>
          ))}
        </div>
      )}
      {filtered.length === 0 ? (
        <p className="mt-10 text-muted" role="status">
          No posts found.
        </p>
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
