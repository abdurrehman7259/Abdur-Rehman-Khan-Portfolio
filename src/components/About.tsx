"use client";

import { About as AboutType } from "@/types/portfolio";
import {
  Code2,
  Shield,
  Target,
  CheckCircle2,
  GraduationCap,
  Award,
  Briefcase,
} from "lucide-react";

interface AboutProps {
  about: AboutType;
}

export function About({ about }: AboutProps) {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code2 className="w-5 h-5 text-cyber-accent" />;
      case "shield":
        return <Shield className="w-5 h-5 text-cyber-accent" />;
      case "target":
        return <Target className="w-5 h-5 text-cyber-accent" />;
      default:
        return <Shield className="w-5 h-5 text-cyber-accent" />;
    }
  };

  const getMetricIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-cyber-accent" />;
      case 1:
        return <Award className="w-5 h-5 text-cyber-accent" />;
      case 2:
        return <Briefcase className="w-5 h-5 text-cyber-accent" />;
      default:
        return <Award className="w-5 h-5 text-cyber-accent" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-cyber-bg border-t border-cyber-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="font-mono text-sm text-cyber-accent font-semibold">
            01.
          </div>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-cyber-border flex-grow max-w-md" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story & Pillars */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="space-y-4 text-cyber-muted text-base sm:text-lg leading-relaxed">
              {about.intro.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="pt-4">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-accent" />
                Core Philosophy & Pillars
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {about.leadershipPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-[0_4px_20px_rgba(0,242,255,0.1)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center mb-4 group-hover:border-cyber-accent/40 transition-colors">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <h4 className="font-mono text-base font-semibold text-white mb-2 group-hover:text-cyber-accent transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-cyber-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Strengths List */}
            <div className="p-6 rounded-xl bg-cyber-surface/60 border border-cyber-border">
              <h4 className="font-mono text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyber-accent">▶</span> Hands-on Strengths & Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {about.strengths.map((str, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-cyber-muted">
                    <CheckCircle2 className="w-4 h-4 text-cyber-accent shrink-0 mt-0.5" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Highlight Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyber-muted mb-2">
              Key Metrics
            </h3>

            {about.metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className="p-6 rounded-xl bg-cyber-card border border-cyber-border hover:border-cyber-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,255,0.12)] group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-center group-hover:border-cyber-accent/40 transition-colors">
                    {getMetricIcon(idx)}
                  </div>
                  <span className="font-mono text-xs text-cyber-muted">METRIC_0{idx + 1}</span>
                </div>
                <div className="font-mono text-2xl font-bold text-cyber-accent mb-1 group-hover:drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]">
                  {metric.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyber-muted">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
