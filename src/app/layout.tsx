import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://abdur-rehman-khan-portfolio.vercel.app";
const title = "Abdur Rehman Khan | Agentic Software Development | Karachi, Pakistan";
const description =
  "Computer Science student in Karachi who builds real products with AI agents: agent sub-agents and skills, a second coding agent, user stories and gated delivery, with full-stack TypeScript, React, Next.js, Node.js and PostgreSQL.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Abdur Rehman Khan",
    "Agentic AI",
    "the coding agent",
    "a second coding agent",
    "Multi-agent development",
    "Software engineering",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Karachi",
  ],
  authors: [{ name: "Abdur Rehman Khan", url: "https://github.com/abdurrehman7259" }],
  creator: "Abdur Rehman Khan",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Abdur Rehman Khan | Agentic Software Development",
    description,
    siteName: "Abdur Rehman Khan",
  },
  twitter: {
    card: "summary",
    title: "Abdur Rehman Khan | Agentic Software Development",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f2f6f8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} min-h-screen font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
