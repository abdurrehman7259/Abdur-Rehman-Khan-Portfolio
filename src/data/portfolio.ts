import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  basics: {
    name: "Abdur Rehman Khan",
    shortName: "ARK",
    role: "Computer Science Student · Agentic Software Development",
    headline: "I build real products with AI agents, organised like a small engineering team.",
    intro:
      "Computer Science student in Karachi. I write the specs and user stories, then direct AI coding agents through planning, building, review, testing and security checks.",
    current:
      "Recent work: a NASA Space Apps game built on real solar-storm data, and Unsak, a live offline-first app for students.",
    summary:
      "Computer Science student in Karachi who builds software with AI agents: agent sub-agents, skills and hooks, a second coding agent, user stories, gated delivery pipelines, and full-stack TypeScript, React, Next.js, Node.js and PostgreSQL.",
    focusTags: ["Multi-agent workflows", "Spec-driven delivery", "Full-stack TypeScript"],
    location: { region: "Karachi", country: "Pakistan" },
    email: "donabdurrehman12@gmail.com",
    phone: "0310-0104905",
    availability: "Open to conversations about software and agentic AI.",
    profiles: [
      {
        network: "LinkedIn",
        username: "Abdur Rehman Khan",
        url: "https://www.linkedin.com/in/abdur-rehman-khan-4b4baa328/",
      },
      {
        network: "GitHub",
        username: "abdurrehman7259",
        url: "https://github.com/abdurrehman7259",
      },
    ],
  },

  stats: [
    { value: "NASA", label: "Space Apps Challenge 2026 team entry" },
    { value: "Live", label: "Unsak, an offline-first app for students" },
    { value: "6", label: "Gated steps from user story to merged code" },
  ],

  about: {
    heading: "Engineering discipline, applied to AI-built software.",
    lead: "AI agents write code quickly. My job is to make that code planned, reviewed and tested.",
    paragraphs: [
      "I started in cybersecurity, with lab work and CTFs, and moved toward building software. Most of my work now is agentic development: AI coding agents with clear roles, files they own, written task briefs, and checks they must pass before anything merges.",
      "I have used this setup on a NASA Space Apps hackathon game, a live student well-being app and this portfolio.",
    ],
    pillars: [
      {
        title: "Plan",
        description: "Specs, user stories with IDs and a decision log, written before any code.",
      },
      {
        title: "Orchestrate",
        description: "Agents with set roles, sub-agents, skills, and the right model for each task.",
      },
      {
        title: "Verify",
        description: "Review, tests, accessibility and security gates on every story.",
      },
    ],
    bringsTitle: "What I bring to a team",
    brings: [
      "Multi-agent setups with coding agents (sub-agents, skills, hooks)",
      "Spec-driven delivery: user stories, sprints, gates and a Definition of Done",
      "Full-stack web development with TypeScript, React, Next.js, Node.js and PostgreSQL",
      "A security mindset from lab work, CTFs and OWASP reviews",
    ],
    quote: "AI makes code fast. Process makes it trustworthy.",
  },

  skills: [
    {
      category: "Agentic AI",
      items: [
        "the coding agent",
        "Sub-agents",
        "Skills & hooks",
        "a second coding agent",
        "Multi-agent orchestration",
        "Model & effort routing",
      ],
    },
    {
      category: "Process",
      items: [
        "User stories",
        "Sprints & gates",
        "Spec docs & ADRs",
        "Definition of Done",
        "Code review",
        "Git & GitHub",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "PWA"],
    },
    {
      category: "Backend & Data",
      items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Firebase", "Socket.io"],
    },
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "C++", "C", "SQL"],
    },
    {
      category: "Security",
      items: ["OWASP Top 10", "Burp Suite", "Nmap", "Wireshark", "Kali Linux"],
    },
  ],

  process: [
    {
      title: "Specify",
      description: "Product spec, requirements and user stories with IDs. Every decision goes in a log.",
    },
    {
      title: "Plan",
      description: "The tech-lead agent splits a story into parts, each with an owner and a list of files.",
    },
    {
      title: "Build",
      description: "builder agent and other builder agents work from written briefs, only in the files they own.",
    },
    {
      title: "Review",
      description: "lead agent reviews every diff. Rejected work goes back with a written fix brief.",
    },
    {
      title: "Test & audit",
      description: "Tests, accessibility, device and OWASP security checks run as blocking gates.",
    },
    {
      title: "Merge",
      description: "Only after the QA gate passes. Sensitive changes wait for my sign-off.",
    },
  ],

  projects: [
    {
      title: "Moon Base Cadets",
      context: "NASA Space Apps Challenge 2026",
      status: "Hackathon",
      summary:
        "A browser game for children aged 7–12. Players run a Moon or Mars base for 10 days while real solar flares and storms from NASA's DONKI records hit it.",
      role: "Product owner and game designer in a three-person team. the coding agent was tech lead and frontend engineer; builder agent was backend engineer.",
      points: [
        "Written file ownership per agent, task briefs and result files for every backend job",
        "Four time-boxed gates across the hackathon weekend, tracked on a task board",
        "Every science fact links to a NASA source; game rules are labelled as game rules",
        "No accounts, cookies or tracking, because the players are children",
      ],
      stack: ["React", "TypeScript", "Vite", "Zod", "NASA DONKI API", "Serverless functions"],
      linkNote: "Private repository",
    },
    {
      title: "Unsak Digital Companion",
      context: "Student digital well-being app",
      status: "Live",
      summary:
        "A mobile-first app that helps students build better phone habits: a 30-day challenge, a bedtime wind-down, a scam-message check and people to talk to.",
      role: "Started as a Design Thinking course project with user interviews and journey maps. lead agent wrote the module contract and builder agent built the modules in parallel.",
      points: [
        "Sign-in with Google or a 6-digit email code",
        "Personal data stays on the device, with export in Settings",
        "Works offline and installs to the home screen",
      ],
      stack: ["JavaScript", "PWA", "Service worker", "Supabase Auth"],
      liveUrl: "https://unsak.vercel.app",
      linkNote: "Private repository",
    },
  ],

  earlierWork: [
    {
      title: "This portfolio",
      description: "Personal site with an admin-only blog.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      liveUrl: "https://abdur-rehman-khan-portfolio.vercel.app",
      codeUrl: "https://github.com/abdurrehman7259/Abdur-Rehman-Khan-Portfolio",
    },
    {
      title: "Tangoline",
      description: "E-commerce site for computer and gaming products. Best Project of the Month at Aptech.",
      stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      title: "Client-server system",
      description: "TCP socket communication between a C++ client and a Python server.",
      stack: ["C++", "Python", "Sockets"],
    },
    {
      title: "Security labs and CTFs",
      description: "Vulnerability assessment on practice targets and university CTF cryptography challenges.",
      stack: ["Burp Suite", "Nmap", "Wireshark", "Kali Linux"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science (BS), Computer Science",
      institution: "GU-Tech",
      period: "2026 – Present",
      detailsLabel: "Focus areas",
      details: ["Computer Networks", "Operating Systems", "Cybersecurity"],
    },
    {
      degree: "FSc, Pre-Engineering",
      institution: "Govt. Delhi College",
      period: "2021 – 2023",
      detailsLabel: "Level",
      details: ["Higher Secondary"],
    },
  ],

  certificates: [
    { name: "Cybersecurity & Ethical Hacking", issuer: "NED Academy" },
    { name: "Web Development", issuer: "Aptech Learning" },
  ],

  languages: [
    { language: "English", fluency: "Professional working" },
    { language: "Urdu", fluency: "Native" },
  ],
};
