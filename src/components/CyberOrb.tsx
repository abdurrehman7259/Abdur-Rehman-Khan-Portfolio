"use client";

import { Shield, Terminal, Binary, Radio } from "lucide-react";

export function CyberOrb() {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center select-none">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-cyber-accent/15 rounded-full filter blur-3xl animate-pulse-glow" />

      {/* Outer Rotating Cyber Ring */}
      <div className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-cyber-accent/25 animate-spin-slow" />

      {/* Middle Rotating Tech Ring */}
      <div className="absolute inset-10 sm:inset-12 rounded-full border border-cyan-400/20 border-t-cyber-accent/80 border-b-cyber-accent/40 animate-reverse-spin-slow" />

      {/* Inner Concentric Circle */}
      <div className="absolute inset-20 sm:inset-24 rounded-full border border-cyber-accent/30 bg-cyber-card/40 backdrop-blur-sm" />

      {/* Core Glowing Orb */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-cyan-600/30 via-cyber-accent/20 to-transparent flex items-center justify-center border border-cyber-accent/60 shadow-[0_0_50px_rgba(0,242,255,0.4)]">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyber-surface border border-cyber-accent flex items-center justify-center shadow-[0_0_25px_rgba(0,242,255,0.6)]">
          <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-cyber-accent animate-pulse" />
        </div>
      </div>

      {/* Floating Cyber Badges / Telemetry */}
      <div className="absolute -top-2 left-6 sm:left-10 bg-cyber-surface/90 border border-cyber-accent/40 rounded-full px-3 py-1.5 flex items-center gap-2 backdrop-blur-md shadow-lg shadow-black/50">
        <Radio className="w-3.5 h-3.5 text-cyber-green animate-pulse" />
        <span className="font-mono text-[11px] text-cyber-text tracking-wide">
          SOC // ACTIVE LABS
        </span>
      </div>

      <div className="absolute bottom-4 -left-2 sm:left-2 bg-cyber-surface/90 border border-cyber-accent/40 rounded-full px-3 py-1.5 flex items-center gap-2 backdrop-blur-md shadow-lg shadow-black/50">
        <Terminal className="w-3.5 h-3.5 text-cyber-accent" />
        <span className="font-mono text-[11px] text-cyber-text tracking-wide">
          C++ / PYTHON / LINUX
        </span>
      </div>

      <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 bg-cyber-surface/90 border border-cyber-accent/40 rounded-full px-3 py-1.5 flex items-center gap-2 backdrop-blur-md shadow-lg shadow-black/50">
        <Binary className="w-3.5 h-3.5 text-yellow-400" />
        <span className="font-mono text-[11px] text-cyber-text tracking-wide">
          CTF // CRYPTO
        </span>
      </div>
    </div>
  );
}
