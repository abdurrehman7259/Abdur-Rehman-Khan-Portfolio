import { ArrowRight, MapPin } from "lucide-react";
import type { Basics, Stat } from "@/types/portfolio";

export function Hero({ basics, stats }: { basics: Basics; stats: Stat[] }) {
  return (
    <section aria-labelledby="hero-title" className="pt-6 sm:pt-10">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="card p-6 sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            <div>
              <p className="eyebrow">{basics.role}</p>
              <h1
                id="hero-title"
                className="mt-5 font-display text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
              >
                {basics.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">{basics.intro}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{basics.current}</p>

              <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Focus areas">
                {basics.focusTags.map((tag) => (
                  <li key={tag} className="chip font-medium text-ink">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
                >
                  See my projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-line bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  Contact me
                </a>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted sm:ml-3">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {basics.location.region}, {basics.location.country}
                </span>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-3 self-center sm:grid-cols-3 lg:grid-cols-1" aria-label="Highlights">
              {stats.map((stat) => (
                <li key={stat.label} className="rounded-xl border border-line bg-paper/60 px-5 py-4">
                  <p className="font-display text-2xl font-semibold text-ink">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
