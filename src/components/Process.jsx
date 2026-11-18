import { Section } from "./Section";

export function Process({ steps }) {
  return (
    <Section
      id="process"
      eyebrow="How I work"
      title="From user story to merged code, with a gate at every step."
      lead="The same pipeline runs for every feature, so the same input always gets the same checks."
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="card p-6">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-paper font-display text-sm font-semibold text-accent">
              {i + 1}
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-ink">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
