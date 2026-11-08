"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bold, Code, Heading2, ImageIcon, Italic, Link2, List, Quote, Video } from "lucide-react";
import { getPost, savePost, slugify } from "@/lib/posts";
import { Markdown } from "./Markdown";

const field =
  "w-full rounded-lg border border-cyber-border bg-cyber-card px-3 py-2 text-sm text-white outline-none focus:border-cyber-accent";

export function PostEditor({ id }: { id: string }) {
  const router = useRouter();
  const isNew = id === "new";
  const [loaded, setLoaded] = useState(isNew);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const area = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isNew) return;
    getPost(id)
      .then((p) => {
        if (!p) return setError("Post not found.");
        setTitle(p.title);
        setSlug(p.slug);
        setExcerpt(p.excerpt);
        setCoverImage(p.coverImage);
        setTags(p.tags.join(", "));
        setContent(p.content);
        setPublished(p.published);
        setLoaded(true);
      })
      .catch((e) => setError(e.message));
  }, [id, isNew]);

  /** Wrap the selection (or insert a snippet) at the cursor. */
  function insert(before: string, after = "", placeholder = "") {
    const el = area.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e } = el;
    const sel = content.slice(s, e) || placeholder;
    const next = content.slice(0, s) + before + sel + after + content.slice(e);
    setContent(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(s + before.length, s + before.length + sel.length);
    });
  }

  async function save(publish: boolean) {
    setError("");
    const finalSlug = slugify(slug || title);
    if (!title.trim()) return setError("Title is required.");
    if (!finalSlug) return setError("Slug is required.");
    if (!content.trim()) return setError("Content is required.");
    setSaving(true);
    try {
      await savePost({
        isNew,
        slug: finalSlug,
        title: title.trim(),
        excerpt: excerpt.trim() || content.replace(/[#*`>\[\]!()-]/g, "").slice(0, 160).trim(),
        content,
        coverImage: coverImage.trim(),
        tags: tags.split(",").map((t) => t.trim().toLowerCase()).filter(Boolean),
        published: publish,
      });
      router.push("/admin");
    } catch (e) {
      setError((e as Error).message);
      setSaving(false);
    }
  }

  if (!loaded) return <p className={error ? "text-cyber-red" : "font-mono text-cyber-muted"}>{error || "Loading..."}</p>;

  const tool = "rounded border border-cyber-border p-2 text-cyber-muted hover:border-cyber-accent hover:text-cyber-accent";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/admin" className="inline-flex items-center gap-1 text-sm text-cyber-muted hover:text-cyber-accent">
          <ArrowLeft className="h-4 w-4" /> Dashboard
        </Link>
        <h1 className="text-xl font-bold text-white">{isNew ? "New post" : "Edit post"}</h1>
      </div>

      <input className={`${field} text-lg font-semibold`} placeholder="Post title" value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (isNew && !slugTouched) setSlug(slugify(e.target.value));
        }} />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block font-mono text-xs text-cyber-muted">SLUG (URL)</label>
          <input className={field} value={slug} disabled={!isNew}
            onChange={(e) => { setSlug(slugify(e.target.value)); setSlugTouched(true); }} />
        </div>
        <div>
          <label className="mb-1 block font-mono text-xs text-cyber-muted">TAGS (comma separated)</label>
          <input className={field} placeholder="ctf, linux, web" value={tags} onChange={(e) => setTags(e.target.value)} />
        </div>
        <div>
          <label className="mb-1 block font-mono text-xs text-cyber-muted">COVER IMAGE URL</label>
          <input className={field} placeholder="https://..." value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
        </div>
        <div>
          <label className="mb-1 block font-mono text-xs text-cyber-muted">EXCERPT (optional)</label>
          <input className={field} maxLength={200} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className={tool} title="Heading" onClick={() => insert("## ", "", "Heading")}><Heading2 className="h-4 w-4" /></button>
        <button type="button" className={tool} title="Bold" onClick={() => insert("**", "**", "bold")}><Bold className="h-4 w-4" /></button>
        <button type="button" className={tool} title="Italic" onClick={() => insert("_", "_", "italic")}><Italic className="h-4 w-4" /></button>
        <button type="button" className={tool} title="Link" onClick={() => insert("[", "](https://)", "text")}><Link2 className="h-4 w-4" /></button>
        <button type="button" className={tool} title="List" onClick={() => insert("\n- ", "", "item")}><List className="h-4 w-4" /></button>
        <button type="button" className={tool} title="Quote" onClick={() => insert("\n> ", "", "quote")}><Quote className="h-4 w-4" /></button>
        <button type="button" className={tool} title="Code block" onClick={() => insert("\n```bash\n", "\n```\n", "code")}><Code className="h-4 w-4" /></button>
        <button type="button" className={tool} title="Image" onClick={() => insert("\n![alt text](", ")\n", "https://image-url")}><ImageIcon className="h-4 w-4" /></button>
        <button type="button" className={tool} title="YouTube video (paste a URL on its own line)" onClick={() => insert("\n\n", "\n\n", "https://www.youtube.com/watch?v=VIDEO_ID")}><Video className="h-4 w-4" /></button>
        <div className="ml-auto flex rounded-lg border border-cyber-border p-0.5 md:hidden">
          {(["write", "preview"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`rounded px-3 py-1 font-mono text-xs ${tab === t ? "bg-cyber-accent text-cyber-bg" : "text-cyber-muted"}`}>{t}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <textarea ref={area} value={content} onChange={(e) => setContent(e.target.value)}
          placeholder="Write in Markdown. Put a YouTube link on its own line to embed the video."
          className={`${field} h-[60vh] resize-y font-mono ${tab === "preview" ? "hidden md:block" : ""}`} />
        <div className={`h-[60vh] overflow-auto rounded-lg border border-cyber-border bg-cyber-surface p-4 ${tab === "write" ? "hidden md:block" : ""}`}>
          {content.trim() ? <Markdown content={content} /> : <p className="text-sm text-cyber-muted">Live preview appears here.</p>}
        </div>
      </div>

      {error && <p className="text-sm text-cyber-red">{error}</p>}

      <div className="flex flex-wrap items-center gap-3">
        <button disabled={saving} onClick={() => save(true)} className="rounded-lg bg-cyber-accent px-5 py-2 font-mono text-sm font-semibold text-cyber-bg hover:bg-cyber-accentHover disabled:opacity-50">
          {published ? "Update & keep published" : "Publish"}
        </button>
        <button disabled={saving} onClick={() => save(false)} className="rounded-lg border border-cyber-border px-5 py-2 font-mono text-sm text-cyber-text hover:border-cyber-accent disabled:opacity-50">
          Save as draft
        </button>
      </div>
    </div>
  );
}
