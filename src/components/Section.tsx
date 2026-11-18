import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, lead, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-16 sm:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="section-title mt-3 max-w-3xl">
          {title}
        </h2>
        {lead && <p className="section-lead">{lead}</p>}
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
