"use client";

import { Children, isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export function getYouTubeId(url: string): string | null {
  const m = url.match(
    /^https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
}

function YouTube({ id }: { id: string }) {
  return (
    <div className="not-prose my-6 aspect-video w-full overflow-hidden rounded-lg border border-cyber-border shadow-cyber-card">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube video"
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
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
      className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:text-white
      prose-a:text-cyber-accent prose-a:no-underline hover:prose-a:underline
      prose-strong:text-white prose-code:text-cyber-accent prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-cyber-surface prose-pre:border prose-pre:border-cyber-border
      prose-blockquote:border-cyber-accent prose-blockquote:text-cyber-muted
      prose-img:rounded-lg prose-img:border prose-img:border-cyber-border
      prose-th:text-white prose-td:text-cyber-text"
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
