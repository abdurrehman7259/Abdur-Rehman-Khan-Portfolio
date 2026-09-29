import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdur Rehman Khan | Cybersecurity Portfolio & Aspiring SOC Analyst",
  description:
    "Cybersecurity student in Karachi with hands-on experience in Linux environments, vulnerability assessment, cryptography CTFs, C/C++, and Python. Actively seeking SOC / Penetration Testing internships.",
  keywords: [
    "Abdur Rehman Khan",
    "Cybersecurity",
    "SOC Analyst",
    "Penetration Testing",
    "Red Teaming",
    "Ethical Hacking",
    "CTF Competitor",
    "Burp Suite",
    "Nmap",
    "Wireshark",
    "C++",
    "Python",
    "Karachi Pakistan",
  ],
  authors: [{ name: "Abdur Rehman Khan", url: "https://github.com/abdurrehman7259" }],
  creator: "Abdur Rehman Khan",
  metadataBase: new URL("https://abdurrehmankhan.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdurrehmankhan.dev",
    title: "Abdur Rehman Khan | Cybersecurity Portfolio",
    description:
      "Cybersecurity student & aspiring SOC Analyst / Penetration Tester. Hands-on experience in Linux, vulnerability assessment, security tools, C/C++, and Python.",
    siteName: "ARK.SEC Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdur Rehman Khan | Cybersecurity Portfolio",
    description:
      "Cybersecurity student & aspiring SOC Analyst / Penetration Tester. Hands-on experience in Linux, vulnerability assessment, and security tools.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-cyber-bg text-cyber-text antialiased selection:bg-cyber-accent selection:text-black min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}
