import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Notes from what I build and learn."
      lead="Short posts on agentic development, the projects above, and security practice."
    >
      <Link
        href="/blog"
        className="inline-flex h-12 items-center gap-2 rounded-lg border border-line bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-ink"
      >
        Read the blog <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Section>
  );
}
