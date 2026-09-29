"use client";

import { Project } from "@/types/portfolio";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Trophy,
  ShieldAlert,
  Terminal,
  Flame,
  Globe,
} from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const getProjectIcon = (title: string, index: number) => {
    if (title.includes("ARK.SEC") || title.includes("Portfolio")) {
      return <Globe className="w-5 h-5 text-cyber-accent" />;
    }
    if (title.includes("Keylog") || title.includes("Client-Server")) {
      return <Terminal className="w-5 h-5 text-cyber-accent" />;
    }
    if (title.includes("CTF") || title.includes("Labs")) {
      return <ShieldAlert className="w-5 h-5 text-cyber-accent" />;
    }
    if (title.includes("Tangoline") || title.includes("E-Commerce")) {
      return <Trophy className="w-5 h-5 text-yellow-400" />;
    }
    return <FolderGit2 className="w-5 h-5 text-cyber-accent" />;
  };

  const getBadge = (title: string, index: number) => {
    if (title.includes("ARK.SEC") || title.includes("Portfolio")) {
      return {
        text: "Production App",
        color: "border-cyber-accent/40 text-cyber-accent bg-cyber-accent/10",
      };
    }
    if (title.includes("Keylog") || title.includes("Client-Server")) {
      return {
        text: "Offensive / Systems",
        color: "border-red-500/40 text-red-400 bg-red-500/10",
      };
    }
    if (title.includes("CTF") || title.includes("Labs")) {
      return {
        text: "CTF & Labs",
        color: "border-cyan-400/40 text-cyan-300 bg-cyan-400/10",
      };
    }
    if (title.includes("Tangoline") || title.includes("E-Commerce")) {
      return {
        text: "Award Winner",
        color: "border-yellow-400/40 text-yellow-400 bg-yellow-400/10",
      };
    }
    return {
      text: "Featured Project",
      color: "border-cyber-accent/40 text-cyber-accent bg-cyber-accent/10",
    };
  };

  return (
    <section id="projects" className="py-24 relative bg-cyber-bg border-t border-cyber-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="font-mono text-sm text-cyber-accent font-semibold">
            03.
          </div>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-[1px] bg-cyber-border flex-grow max-w-md" />
        </div>

        {/* Projects Grid: 2 columns for 4 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const badge = getBadge(project.title, index);
            return (
              <div
                key={project.title}
                className="rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 shadow-sm hover:shadow-[0_8px_30px_rgba(0,242,255,0.12)]"
              >
                <div className="p-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center group-hover:border-cyber-accent/40 transition-colors">
                      {getProjectIcon(project.title, index)}
                    </div>
                    <span
                      className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badge.color}`}
                    >
                      {badge.text}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-lg font-bold text-white mb-3 group-hover:text-cyber-accent transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-cyber-muted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Outcome Highlight Box */}
                  <div className="p-3 rounded-lg bg-cyber-surface/80 border border-cyber-border/70 mb-5">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-cyber-accent font-semibold flex items-center gap-1.5 mb-1">
                      <Flame className="w-3 h-3 text-cyber-accent" /> Key Outcome
                    </div>
                    <p className="text-xs text-cyber-text/90 italic">
                      &quot;{project.outcome}&quot;
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tech Stack & Action Links */}
                <div className="p-6 pt-0 mt-auto">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-cyber-accent/5 border border-cyber-accent/20 text-cyber-accent font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-cyber-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <a
                        href={project.codeUrl || "https://github.com/abdurrehman7259"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-white hover:text-cyber-accent transition-colors group/link"
                      >
                        <Github className="w-3.5 h-3.5 text-cyber-muted group-hover/link:text-cyber-accent transition-colors" />
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-cyber-accent hover:underline transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-[11px] text-cyber-muted/60">
                      PRJ_0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
