export interface SocialProfile {
  network: "LinkedIn" | "GitHub";
  username: string;
  url: string;
}

export interface Basics {
  name: string;
  shortName: string;
  /** Small label above the hero heading. */
  role: string;
  /** One sentence: what I do and why it matters. */
  headline: string;
  intro: string;
  current: string;
  /** Plain summary for search engines and structured data. */
  summary: string;
  focusTags: string[];
  location: { region: string; country: string };
  email: string;
  availability: string;
  profiles: SocialProfile[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface About {
  heading: string;
  lead: string;
  paragraphs: string[];
  pillars: Pillar[];
  bringsTitle: string;
  brings: string[];
  quote: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  context: string;
  status: string;
  summary: string;
  role: string;
  points: string[];
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
  /** Shown when there is no public link. */
  linkNote?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detailsLabel: string;
  details: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
}

export interface Language {
  language: string;
  fluency: string;
}

export interface PortfolioData {
  basics: Basics;
  stats: Stat[];
  about: About;
  skills: SkillGroup[];
  process: ProcessStep[];
  projects: Project[];
  education: EducationItem[];
  certificates: Certificate[];
  languages: Language[];
}
