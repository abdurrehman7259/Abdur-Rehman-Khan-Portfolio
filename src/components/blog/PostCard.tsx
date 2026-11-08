import Link from "next/link";
import { Clock } from "lucide-react";
import { formatDate, type Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-panel group flex flex-col overflow-hidden rounded-xl transition hover:-translate-y-1 hover:shadow-cyber-glow-sm"
    >
      {post.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.coverImage} alt="" loading="lazy" className="aspect-video w-full object-cover" />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-cyber-card font-mono text-3xl text-cyber-accent/40">
          &lt;/&gt;
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded border border-cyber-accent/30 bg-cyber-accentMuted px-2 py-0.5 font-mono text-xs text-cyber-accent">
              {t}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-white transition group-hover:text-cyber-accent">{post.title}</h2>
        <p className="line-clamp-3 flex-1 text-sm text-cyber-muted">{post.excerpt}</p>
        <div className="flex items-center gap-3 font-mono text-xs text-cyber-muted">
          <span>{formatDate(post.createdAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readingTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
