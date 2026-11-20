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
      <h1 className="font-display text-[1.9rem] font-bold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[2.4rem]">{post.title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
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
            className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent-strong"
          >
            {t}
          </span>
        ))}
      </div>
      {post.coverImage && (
        <div className="mt-8 overflow-hidden rounded-3xl border border-line shadow-card">
          <BlogImage src={post.coverImage} alt="" priority />
        </div>
      )}
      <div className="mt-8">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
