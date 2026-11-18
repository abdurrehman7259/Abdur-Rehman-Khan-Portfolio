import type { About as AboutData } from "@/types/portfolio";
import { Section } from "./Section";

export function About({ about }: { about: AboutData }) {
  return (
    <Section id="about" eyebrow="About" title={about.heading} lead={about.lead}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div className="space-y-5 text-base leading-relaxed text-body sm:text-[17px]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="space-y-3">
          {about.pillars.map((pillar, i) => (
            <div key={pillar.title} className="card flex gap-4 p-5">
              <span className="font-display text-sm font-semibold text-accent">0{i + 1}</span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{about.bringsTitle}</h3>
          <ul className="mt-4 space-y-3">
            {about.brings.map((item) => (
              <li key={item} className="flex gap-3 text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <blockquote className="border-l-2 border-accent pl-5 font-display text-xl font-medium leading-snug text-ink">
          {about.quote}
        </blockquote>
      </div>
    </Section>
  );
}
