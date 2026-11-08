import type { Metadata } from "next";
import { BlogList } from "@/components/blog/BlogList";
import { BlogHeader } from "@/components/blog/BlogHeader";

export const metadata: Metadata = {
  title: "Blog | Abdur Rehman Khan",
  description: "Write-ups, CTF notes and cybersecurity learnings by Abdur Rehman Khan.",
};

export default function BlogPage() {
  return (
    <div className="cyber-grid-bg min-h-screen">
      <BlogHeader />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          The <span className="accent-glow">Blog</span>
        </h1>
        <p className="mt-2 text-cyber-muted">Write-ups, CTF notes and security learnings.</p>
        <BlogList />
      </main>
    </div>
  );
}
