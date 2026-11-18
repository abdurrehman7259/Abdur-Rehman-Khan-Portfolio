import typography from "@tailwindcss/typography";

// Light, calm palette. Values live in globals.css as CSS variables.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        surface: token("surface"),
        line: token("line"),
        ink: token("ink"),
        body: token("body"),
        muted: token("muted"),
        accent: {
          DEFAULT: token("accent"),
          strong: token("accent-strong"),
          soft: token("accent-soft"),
        },
        // Older names still used by the blog and admin pages.
        cyber: {
          bg: token("paper"),
          surface: token("surface"),
          card: token("surface"),
          cardHover: token("paper"),
          border: token("line"),
          accent: token("accent"),
          accentHover: token("accent-strong"),
          accentMuted: token("accent-soft"),
          text: token("body"),
          muted: token("muted"),
          green: token("ok"),
          red: token("danger"),
          yellow: token("warn"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(15 28 36 / 0.04), 0 8px 24px -12px rgb(15 28 36 / 0.12)",
        "cyber-card": "0 1px 2px rgb(15 28 36 / 0.04), 0 8px 24px -12px rgb(15 28 36 / 0.12)",
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [typography],
};
export default config;
