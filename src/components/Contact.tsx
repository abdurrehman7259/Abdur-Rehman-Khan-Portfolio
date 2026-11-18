import { Github, Linkedin, Mail } from "lucide-react";
import type { Basics } from "@/types/portfolio";
import { Section } from "./Section";

export function Contact({ basics }: { basics: Basics }) {
  const linkedin = basics.profiles.find((p) => p.network === "LinkedIn");
  const github = basics.profiles.find((p) => p.network === "GitHub");

  const rows = [
    { icon: Mail, label: "Email", value: basics.email, href: `mailto:${basics.email}` },
    linkedin && { icon: Linkedin, label: "LinkedIn", value: linkedin.username, href: linkedin.url },
    github && { icon: Github, label: "GitHub", value: github.username, href: github.url },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href: string }[];

  return (
    <Section id="contact" eyebrow="Contact" title={basics.availability}>
      <div className="card grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-base leading-relaxed text-body sm:text-lg">
            Email is the quickest way to reach me. LinkedIn and GitHub have more about my work.
          </p>
          <p className="mt-3 text-sm text-muted">
            Based in {basics.location.region}, {basics.location.country}.
          </p>
          <a
            href={`mailto:${basics.email}`}
            className="mt-7 inline-flex h-12 items-center gap-2 rounded-lg bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> Email me
          </a>
        </div>

        <ul className="min-w-0 divide-y divide-line rounded-xl border border-line">
          {rows.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-paper sm:gap-4 sm:px-5"
              >
                <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="w-16 shrink-0 text-sm text-muted sm:w-20">{label}</span>
                <span className="min-w-0 text-sm font-medium text-ink [overflow-wrap:anywhere]">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
