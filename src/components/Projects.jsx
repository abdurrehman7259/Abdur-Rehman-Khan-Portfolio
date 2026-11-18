import { ArrowUpRight, Github, Lock } from "lucide-react";

import { CertificateViewer } from "./CertificateViewer";
import { Section } from "./Section";

function ExternalLink({ href, children }) {
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

function ProjectCard({ project }) {
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
        <div className="flex shrink-0 flex-wrap items-center gap-5">
          {project.certificate && <CertificateViewer certificate={project.certificate} />}
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

export function Projects({ projects }) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Real projects, built with a real process."
      lead="What each product does, the decisions I made, and how the pipeline and checks were set up."
    >
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
