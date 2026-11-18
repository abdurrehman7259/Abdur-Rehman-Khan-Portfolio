import { ArrowUpRight, Github, Lock } from "lucide-react";
import type { EarlierWork, Project } from "@/types/portfolio";
import { Section } from "./Section";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong"
    >
      {children}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent-strong">
          {project.status}
        </span>
        <span className="text-sm text-muted">{project.context}</span>
      </div>

      <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-body">{project.summary}</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">My role</h4>
          <p className="mt-2 text-sm leading-relaxed text-body">{project.role}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">What it does and how</h4>
          <ul className="mt-2 space-y-2">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-body">
                <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech} className="chip text-xs">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-5">
          {project.liveUrl && (
            <ExternalLink href={project.liveUrl}>
              Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </ExternalLink>
          )}
          {project.codeUrl && (
            <ExternalLink href={project.codeUrl}>
              <Github className="h-4 w-4" aria-hidden="true" /> Code
            </ExternalLink>
          )}
          {!project.codeUrl && project.linkNote && (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" /> {project.linkNote}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects({ projects, earlierWork }: { projects: Project[]; earlierWork: EarlierWork[] }) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Real projects, built with a real process."
      lead="What each product does, my role in it, and how the agents and checks were set up."
    >
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <h3 className="mt-14 font-display text-lg font-semibold text-ink">Earlier work</h3>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {earlierWork.map((item) => (
          <li key={item.title} className="card flex flex-col p-5">
            <h4 className="font-display text-base font-semibold text-ink">{item.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-body">{item.description}</p>
            <p className="mt-3 text-xs text-muted">{item.stack.join(" · ")}</p>
            {(item.liveUrl || item.codeUrl) && (
              <div className="mt-4 flex gap-5">
                {item.liveUrl && (
                  <ExternalLink href={item.liveUrl}>
                    Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </ExternalLink>
                )}
                {item.codeUrl && (
                  <ExternalLink href={item.codeUrl}>
                    <Github className="h-4 w-4" aria-hidden="true" /> Code
                  </ExternalLink>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
