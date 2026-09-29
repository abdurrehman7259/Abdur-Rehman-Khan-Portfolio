"use client";

import { Shield, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Basics } from "@/types/portfolio";

interface FooterProps {
  basics: Basics;
}

export function Footer({ basics }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-cyber-surface border-t border-cyber-border/70 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyber-accent" />
              <span className="font-mono text-base font-bold text-white">
                <span className="text-cyber-accent">ARK</span>.SEC
              </span>
              <span className="text-cyber-muted text-xs font-mono">• Abdur Rehman Khan</span>
            </div>
            <p className="text-xs text-cyber-muted font-mono">
              Built with Next.js, React, TypeScript &amp; Cyber-Security Mindset.
            </p>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            {basics.profiles.map((p) => (
              <a
                key={p.network}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-colors"
                aria-label={p.network}
              >
                {p.network === "LinkedIn" ? (
                  <Linkedin className="w-3.5 h-3.5" />
                ) : (
                  <Github className="w-3.5 h-3.5" />
                )}
              </a>
            ))}

            <a
              href={`mailto:${basics.email}`}
              className="w-8 h-8 rounded bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cyber-border/40 text-center text-[11px] font-mono text-cyber-muted/60">
          © {new Date().getFullYear()} ARK.SEC | All rights reserved. Confidentiality &amp; Integrity preserved.
        </div>
      </div>
    </footer>
  );
}
