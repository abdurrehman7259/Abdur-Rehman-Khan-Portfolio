import Link from "next/link";
import { Clock } from "lucide-react";
import { formatPostDate } from "@/lib/posts-public";
import { BlogImage, isServableImage } from "./BlogImage";

export function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card group flex flex-col overflow-hidden transition hover:-translate-y-1"
    >
      {post.coverImage && isServableImage(post.coverImage) ? (
        <div className="relative aspect-video w-full">
          <BlogImage
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 360px"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-video w-full items-center justify-center bg-paper font-display text-3xl font-semibold text-accent/40"
        >
          &lt;/&gt;
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent-strong"
            >
              {t}
            </span>
          ))}
        </div>
        <h2 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">{post.title}</h2>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <div className="flex items-center gap-3 border-t border-line pt-4 text-xs text-muted">
          <span>{formatPostDate(post.createdAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" /> {post.readingTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
