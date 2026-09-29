"use client";

import { EducationItem, Certificate, Language } from "@/types/portfolio";
import {
  GraduationCap,
  Calendar,
  Award,
  Languages,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";

interface EducationProps {
  education: EducationItem[];
  certificates: Certificate[];
  languages: Language[];
}

export function Education({
  education,
  certificates,
  languages,
}: EducationProps) {
  return (
    <section
      id="education"
      className="py-24 relative bg-cyber-surface/40 border-t border-cyber-border/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="font-mono text-sm text-cyber-accent font-semibold">
            04.
          </div>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Educational Path & Certifications
          </h2>
          <div className="h-[1px] bg-cyber-border flex-grow max-w-md" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7">
            <h3 className="font-mono text-base font-bold text-white mb-8 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyber-accent" />
              Academic Trajectory
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyber-border/80 space-y-10 ml-2">
              {education.map((item, idx) => (
                <div key={item.institution} className="relative group">
                  {/* Glowing Node Marker */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyber-card border-2 border-cyber-accent group-hover:scale-125 group-hover:shadow-[0_0_12px_#00f2ff] transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent mx-auto mt-0.5" />
                  </div>

                  {/* Institution & Degree */}
                  <div className="p-6 rounded-xl bg-cyber-card border border-cyber-border group-hover:border-cyber-accent/40 transition-all duration-300 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-cyber-accent" />
                        <h4 className="font-mono text-lg font-bold text-white group-hover:text-cyber-accent transition-colors">
                          {item.institution}
                        </h4>
                      </div>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-cyber-accent bg-cyber-accent/10 px-2.5 py-0.5 rounded border border-cyber-accent/30">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-cyber-text/90 mb-4">
                      {item.studyType} •{" "}
                      <span className="text-cyber-muted">{item.area}</span>
                    </div>

                    {/* Details list */}
                    <div className="pt-3 border-t border-cyber-border/40">
                      <div className="font-mono text-[11px] text-cyber-muted uppercase tracking-wider mb-2">
                        {item.detailsLabel}
                      </div>
                      <ul className="space-y-1.5 list-none p-0 m-0">
                        {item.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-xs text-cyber-muted flex items-start gap-2"
                          >
                            <span className="text-cyber-accent mt-0.5">▹</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certificates & Languages */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Certificates */}
            <div>
              <h3 className="font-mono text-base font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyber-accent" />
                Verified Certifications
              </h3>

              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-5 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/40 transition-all duration-300 group flex items-start gap-4 shadow-sm hover:shadow-[0_4px_20px_rgba(0,242,255,0.08)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center shrink-0 group-hover:border-cyber-accent/40 transition-colors">
                      <Sparkles className="w-5 h-5 text-cyber-accent" />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyber-accent transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-cyber-muted mt-1">
                        Issued by:{" "}
                        <span className="text-cyber-text font-medium">
                          {cert.issuer}
                        </span>
                      </p>
                      <div className="inline-flex items-center gap-1 text-[11px] text-cyber-green mt-2 font-mono">
                        <CheckCircle2 className="w-3 h-3" /> Credential Completed
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-mono text-base font-bold text-white mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5 text-cyber-accent" />
                Languages
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-4 rounded-xl bg-cyber-card border border-cyber-border"
                  >
                    <div className="font-mono text-sm font-bold text-white">
                      {lang.language}
                    </div>
                    <div className="text-xs text-cyber-accent mt-0.5 font-mono">
                      {lang.fluency}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
