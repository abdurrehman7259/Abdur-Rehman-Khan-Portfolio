import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Navbar";
import { portfolioData } from "@/data/portfolio";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Logo name={portfolioData.basics.name} compact />
        <nav aria-label="Blog" className="flex items-center gap-5 text-sm">
          <Link href="/blog" className="text-body hover:text-accent">
            Blog
          </Link>
          <Link href="/" className="inline-flex items-center gap-1 text-body hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}
