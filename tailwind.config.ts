import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0a0b10",
          surface: "#0f111a",
          card: "#121624",
          cardHover: "#161b2e",
          border: "rgba(255, 255, 255, 0.08)",
          accent: "#00f2ff",
          accentHover: "#38f6ff",
          accentMuted: "rgba(0, 242, 255, 0.15)",
          text: "#e6edf3",
          muted: "#8b949e",
          green: "#00ff88",
          red: "#ff3b5c",
          yellow: "#ffd166",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "cyber-glow": "0 0 25px rgba(0, 242, 255, 0.35)",
        "cyber-glow-sm": "0 0 12px rgba(0, 242, 255, 0.25)",
        "cyber-card": "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "pulse-glow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [typography],
};
export default config;
