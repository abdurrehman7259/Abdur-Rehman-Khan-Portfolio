"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Link2 } from "lucide-react";
import { formatDate, getPost, type Post } from "@/lib/posts";
import { isFirebaseConfigured } from "@/lib/firebase";
import { Markdown } from "./Markdown";
import { SetupNotice } from "./SetupNotice";

export function PostView({ slug }: { slug: string }) {
  const [post, setPost] = useState<Post | null | undefined>(undefined);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    // Drafts are rejected by Firestore rules for non-admins -> treated as not found.
    getPost(slug).then(setPost).catch(() => setPost(null));
  }, [slug]);

  useEffect(() => {
    if (post) document.title = `${post.title} | Abdur Rehman Khan`;
  }, [post]);

  if (!isFirebaseConfigured) return <SetupNotice />;
  if (post === undefined) return <p className="font-mono text-cyber-muted">Loading...</p>;
  if (post === null)
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">Post not found</h1>
        <Link href="/blog" className="mt-4 inline-block text-cyber-accent hover:underline">
          Back to blog
        </Link>
      </div>
    );

  return (
    <article>
      <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-cyber-muted hover:text-cyber-accent">
        <ArrowLeft className="h-4 w-4" /> All posts
      </Link>
      {!post.published && (
        <p className="mb-4 rounded border border-cyber-yellow/40 bg-cyber-yellow/10 px-3 py-2 font-mono text-xs text-cyber-yellow">
          DRAFT - only visible to you
        </p>
      )}
      <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{post.title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs text-cyber-muted">
        <span>{formatDate(post.createdAt)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" /> {post.readingTime} min read
        </span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="inline-flex items-center gap-1 hover:text-cyber-accent"
        >
          <Link2 className="h-3 w-3" /> {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span key={t} className="rounded border border-cyber-accent/30 bg-cyber-accentMuted px-2 py-0.5 font-mono text-xs text-cyber-accent">
            {t}
          </span>
        ))}
      </div>
      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.coverImage} alt="" className="mt-8 w-full rounded-xl border border-cyber-border" />
      )}
      <div className="mt-8">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
