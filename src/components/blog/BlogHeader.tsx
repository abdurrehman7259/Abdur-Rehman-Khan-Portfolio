import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cyber-border bg-cyber-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-cyber-accent/30 bg-cyber-card text-cyber-accent transition group-hover:border-cyber-accent">
            <ShieldAlert className="h-4 w-4" />
          </div>
          <span className="font-mono text-lg font-bold text-white">
            <span className="text-cyber-accent">ARK</span>
            <span className="text-cyber-muted">.SEC</span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/blog" className="text-cyber-muted hover:text-cyber-accent">
            Blog
          </Link>
          <Link href="/" className="inline-flex items-center gap-1 text-cyber-muted hover:text-cyber-accent">
            <ArrowLeft className="h-3.5 w-3.5" /> Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}
