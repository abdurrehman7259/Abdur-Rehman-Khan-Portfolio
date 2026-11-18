import type { Certificate, EducationItem, Language } from "@/types/portfolio";
import { Section } from "./Section";

interface EducationProps {
  education: EducationItem[];
  certificates: Certificate[];
  languages: Language[];
}

export function Education({ education, certificates, languages }: EducationProps) {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation and credentials.">
      <div className={`grid gap-4 ${education.length > 1 ? "lg:grid-cols-2" : ""}`}>
        {education.map((item) => (
          <div key={item.institution} className="card p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{item.period}</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">{item.degree}</h3>
            <p className="mt-1 text-body">{item.institution}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{item.detailsLabel}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {item.details.map((d) => (
                <li key={d} className="chip">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="card p-6 sm:p-7">
          <h3 className="font-display text-base font-semibold text-ink">Certificates</h3>
          <ul className="mt-4 divide-y divide-line">
            {certificates.map((c) => (
              <li key={c.name} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0">
                <span className="text-body">{c.name}</span>
                <span className="text-sm text-muted">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6 sm:p-7">
          <h3 className="font-display text-base font-semibold text-ink">Languages</h3>
          <ul className="mt-4 divide-y divide-line">
            {languages.map((l) => (
              <li key={l.language} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0">
                <span className="text-body">{l.language}</span>
                <span className="text-sm text-muted">{l.fluency}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
