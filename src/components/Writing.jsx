import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="How I build software, from requirements to release."
      lead="Posts on my end-to-end workflow: requirement gathering, user stories, agentic workflows, CI pipelines, Docker, and security built into every step."
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
