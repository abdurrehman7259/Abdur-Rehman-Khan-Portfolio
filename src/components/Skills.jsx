import { Section } from "./Section";

export function Skills({ skills }) {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A working stack across agents, process and code."
      lead="Tools and methods I have used in real projects, grouped by what they do."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="card p-6">
            <h3 className="font-display text-base font-semibold text-ink">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
