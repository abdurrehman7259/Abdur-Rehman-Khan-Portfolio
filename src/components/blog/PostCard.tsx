import Link from "next/link";
import { Clock } from "lucide-react";
import { formatPostDate, type PublicPost } from "@/lib/posts-public";
import { BlogImage, isServableImage } from "./BlogImage";

export function PostCard({ post }: { post: PublicPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card group flex flex-col overflow-hidden transition hover:-translate-y-1"
    >
      {post.coverImage && isServableImage(post.coverImage) ? (
        <div className="relative aspect-video w-full">
          <BlogImage src={post.coverImage} alt="" fill sizes="(max-width: 640px) 100vw, 360px" className="object-cover" />
        </div>
      ) : (
        <div aria-hidden="true" className="flex aspect-video w-full items-center justify-center bg-paper font-mono text-3xl text-accent/40">
          &lt;/&gt;
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent-strong">
              {t}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-ink transition group-hover:text-accent">{post.title}</h2>
        <p className="line-clamp-3 flex-1 text-sm text-muted">{post.excerpt}</p>
        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          <span>{formatPostDate(post.createdAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" /> {post.readingTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
