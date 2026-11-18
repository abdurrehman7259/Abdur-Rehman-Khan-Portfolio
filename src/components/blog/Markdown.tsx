"use client";

import { Children, isValidElement, useState, type ReactNode } from "react";
import { Play } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export function getYouTubeId(url: string): string | null {
  const m = url.match(
    /^https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
}

/**
 * Click-to-load: nothing is requested from YouTube (Google) until the reader
 * chooses to play, so visitors' IP addresses are not sent there without consent.
 */
function YouTube({ id }: { id: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="not-prose my-6 aspect-video w-full overflow-hidden rounded-lg border border-cyber-border shadow-cyber-card">
      {loaded ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-paper p-6 text-center">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-accent-strong"
          >
            <Play className="h-4 w-4" aria-hidden="true" /> Play video
          </button>
          <p className="max-w-sm text-xs text-muted">
            Playing loads the video from YouTube (Google), which receives your IP address.{" "}
            <a
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent"
            >
              Open on YouTube
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

/** If a paragraph contains only a YouTube link, return its video id. */
function soleYouTubeId(children: ReactNode): string | null {
  const arr = Children.toArray(children);
  if (arr.length !== 1) return null;
  const c = arr[0];
  if (typeof c === "string") return getYouTubeId(c.trim());
  if (isValidElement<{ href?: string }>(c) && c.props.href) return getYouTubeId(c.props.href);
  return null;
}

export function Markdown({ content }: { content: string }) {
  return (
    <div
      className="prose max-w-none prose-headings:font-semibold prose-headings:text-ink
      prose-a:text-cyber-accent prose-a:no-underline hover:prose-a:underline
      prose-strong:text-ink prose-code:text-cyber-accent prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-cyber-surface prose-pre:border prose-pre:border-cyber-border
      prose-blockquote:border-cyber-accent prose-blockquote:text-cyber-muted
      prose-img:rounded-lg prose-img:border prose-img:border-cyber-border
      prose-th:text-ink prose-td:text-cyber-text"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          p({ children }) {
            const id = soleYouTubeId(children);
            return id ? <YouTube id={id} /> : <p>{children}</p>;
          },
          a({ href, children }) {
            const external = href?.startsWith("http");
            return (
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {children}
              </a>
            );
          },
          // eslint-disable-next-line @next/next/no-img-element
          img: ({ src, alt }) => <img src={typeof src === "string" ? src : ""} alt={alt ?? ""} loading="lazy" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
