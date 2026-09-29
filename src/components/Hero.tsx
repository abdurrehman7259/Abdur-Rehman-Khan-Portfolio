"use client";

import { Basics } from "@/types/portfolio";
import { CyberOrb } from "./CyberOrb";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  FileCode2,
} from "lucide-react";

interface HeroProps {
  basics: Basics;
}

export function Hero({ basics }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden cyber-radial-glow"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-card border border-cyber-accent/40 shadow-[0_0_15px_rgba(0,242,255,0.15)] mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-green" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyber-accent">
                {basics.availability}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
              Abdur Rehman{" "}
              <span className="text-cyber-accent inline-block drop-shadow-[0_0_20px_rgba(0,242,255,0.4)]">
                Khan
              </span>
            </h1>

            {/* Headline / Role */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-lg sm:text-xl font-medium text-cyber-muted font-mono">
              <span>{basics.headline}</span>
              <span className="text-cyber-border hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 text-sm text-cyber-muted/80">
                <MapPin className="w-4 h-4 text-cyber-accent" />
                {basics.location.region}, {basics.location.country}
              </span>
            </div>

            {/* Summary description */}
            <p className="text-base sm:text-lg text-cyber-muted leading-relaxed max-w-2xl mb-8">
              {basics.summary}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-cyber-accent text-cyber-bg font-mono font-bold text-sm tracking-wide hover:bg-cyber-accentHover hover:shadow-[0_0_25px_rgba(0,242,255,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-cyber-card border border-cyber-border text-cyber-text font-mono font-medium text-sm hover:border-cyber-accent hover:text-cyber-accent transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
              >
                <FileCode2 className="w-4 h-4" />
                <span>View Work</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-5 pt-4 border-t border-cyber-border/70 w-full">
              <span className="font-mono text-xs text-cyber-muted uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                {basics.profiles.map((profile) => (
                  <a
                    key={profile.network}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,242,255,0.3)]"
                    title={profile.network}
                    aria-label={profile.network}
                  >
                    {profile.network === "LinkedIn" ? (
                      <Linkedin className="w-4 h-4" />
                    ) : (
                      <Github className="w-4 h-4" />
                    )}
                  </a>
                ))}

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${basics?.email || "donabdurrehman12@gmail.com"}&su=SOC%20Internship%20Opportunity%20-%20Abdur%20Rehman%20Khan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,242,255,0.3)] cursor-pointer"
                  title="Send Email"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Visual Cyber Orb */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <CyberOrb />
          </div>
        </div>
      </div>
    </section>
  );
}
