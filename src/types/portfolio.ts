export interface SocialProfile {
  network: string;
  username: string;
  url: string;
  icon: string;
}

export interface LocationInfo {
  country: string;
  countryCode: string;
  region: string;
}

export interface Basics {
  name: string;
  shortName: string;
  label: string;
  headline: string;
  summary: string;
  location: LocationInfo;
  email: string;
  phone: string;
  availability: string;
  leadershipNote: string;
  profiles: SocialProfile[];
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface About {
  intro: string[];
  strengths: string[];
  leadershipPillars: Pillar[];
  metrics: Metric[];
}

export interface SkillCategory {
  category: string;
  description?: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface EducationItem {
  institution: string;
  area: string;
  studyType: string;
  period: string;
  detailsLabel: string;
  details: string[];
  startDate?: string;
  endDate?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  url?: string;
}

export interface Language {
  language: string;
  fluency: string;
}

export interface PortfolioData {
  basics: Basics;
  about: About;
  skills: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
  education: EducationItem[];
  languages: Language[];
}
