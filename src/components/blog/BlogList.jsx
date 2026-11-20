"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { PostCard } from "./PostCard";

/** Search and tag filters over posts the server already loaded. Nothing is fetched in the browser. */
export function BlogList({ posts }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");

  const tags = useMemo(() => Array.from(new Set(posts.flatMap((p) => p.tags))).sort(), [posts]);
  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return posts.filter(
      (p) =>
        (!tag || p.tags.includes(tag)) &&
        (!s || p.title.toLowerCase().includes(s) || p.excerpt.toLowerCase().includes(s)),
    );
  }, [posts, q, tag]);

  return (
    <div className="mt-10 sm:mt-12">
      <div className="relative max-w-md">
        <label htmlFor="post-search" className="sr-only">
          Search posts
        </label>
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          id="post-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posts..."
          className="h-11 w-full rounded-full border border-line bg-surface pl-10 pr-4 text-sm text-ink shadow-card focus:border-accent"
        />
      </div>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
          {["", ...tags].map((t) => (
            <button
              key={t || "All posts"}
              type="button"
              onClick={() => setTag(t)}
              aria-pressed={tag === t}
              className={`inline-flex items-center rounded-full border px-3 py-1 text-sm transition-colors ${
                tag === t
                  ? "border-accent bg-accent font-medium text-white"
                  : "border-line bg-paper text-body hover:border-accent hover:text-accent"
              }`}
            >
              {t || "All posts"}
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
