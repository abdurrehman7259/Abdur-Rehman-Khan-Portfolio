import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { formatPostDate } from "@/lib/posts-public";
import { BlogImage } from "./BlogImage";
import { CopyLinkButton } from "./CopyLinkButton";
import { Markdown } from "./Markdown";

/** A published post, rendered on the server. Drafts never reach this component (see posts-public.js). */
export function PostView({ post }) {
  return (
    <article>
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-accent">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All posts
      </Link>
      <h1 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{post.title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs text-muted">
        <span>{formatPostDate(post.createdAt)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" aria-hidden="true" /> {post.readingTime} min read
        </span>
        <CopyLinkButton />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span
            key={t}
            className="rounded border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent-strong"
          >
            {t}
          </span>
        ))}
      </div>
      {post.coverImage && (
        <div className="mt-8 overflow-hidden rounded-xl border border-line">
          <BlogImage src={post.coverImage} alt="" priority />
        </div>
      )}
      <div className="mt-8">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
