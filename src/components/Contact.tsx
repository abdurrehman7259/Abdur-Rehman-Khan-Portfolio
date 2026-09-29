"use client";

import { useState } from "react";
import { Basics } from "@/types/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  Terminal,
  ShieldCheck,
} from "lucide-react";

interface ContactProps {
  basics: Basics;
}

export function Contact({ basics }: ContactProps) {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-cyber-bg border-t border-cyber-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="font-mono text-sm text-cyber-accent font-semibold">
            05.
          </div>
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="h-[1px] bg-cyber-border flex-grow max-w-md" />
        </div>

        {/* Contact Cyber Container */}
        <div className="relative rounded-2xl bg-gradient-to-br from-cyber-card via-cyber-surface to-[#0d101d] border border-cyber-border p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Ambient Corner Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyber-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-cyber-border/60">
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-muted">
              <Terminal className="w-4 h-4 text-cyber-accent" />
              <span>ark_sec@terminal:~/contact-session</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <h3 className="font-mono text-2xl sm:text-3xl font-bold text-white mb-3">
                  Let&apos;s Build Secure Systems
                </h3>
                <p className="text-base text-cyber-muted leading-relaxed">
                  {basics.availability} I am actively seeking an internship in
                  SOC operations, log analysis, and threat monitoring. Reach out
                  to discuss opportunities or collaborate on security projects.
                </p>
              </div>

              {/* Direct Details List */}
              <div className="space-y-4 pt-2">
                {/* Email with copy */}
                <div className="flex items-center justify-between p-3.5 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-accent/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyber-accent shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-cyber-text break-all">
                      {basics.email}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(basics.email, "email")}
                    className="ml-3 p-1.5 rounded text-cyber-muted hover:text-cyber-accent hover:bg-cyber-card transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyber-green">
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="flex items-center justify-between p-3.5 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-accent/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyber-accent shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-cyber-text">
                      {basics.phone}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(basics.phone, "phone")}
                    className="ml-3 p-1.5 rounded text-cyber-muted hover:text-cyber-accent hover:bg-cyber-card transition-colors shrink-0"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedType === "phone" ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyber-green">
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-lg bg-cyber-surface border border-cyber-border">
                  <MapPin className="w-4 h-4 text-cyber-accent shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-cyber-muted">
                    {basics.location.region}, {basics.location.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-cyber-surface/90 border border-cyber-border text-center gap-6">
              <div className="w-14 h-14 rounded-full bg-cyber-card border border-cyber-accent/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.25)]">
                <ShieldCheck className="w-7 h-7 text-cyber-accent" />
              </div>

              <div>
                <h4 className="font-mono text-lg font-bold text-white mb-1">
                  Ready to Connect?
                </h4>
                <p className="text-xs text-cyber-muted max-w-xs">
                  Click below to open your preferred mail client and send a message directly.
                </p>
              </div>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${basics?.email || "donabdurrehman12@gmail.com"}&su=SOC%20Internship%20Opportunity%20-%20Abdur%20Rehman%20Khan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-cyber-accent text-cyber-bg font-mono font-bold text-sm hover:bg-cyber-accentHover hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Email Directly</span>
                </a>

              {/* Social Profiles Grid */}
              <div className="flex items-center gap-4 pt-2">
                {basics.profiles.map((p) => (
                  <a
                    key={p.network}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-colors"
                  >
                    {p.network === "LinkedIn" ? (
                      <Linkedin className="w-3.5 h-3.5" />
                    ) : (
                      <Github className="w-3.5 h-3.5" />
                    )}
                    <span>{p.network}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}