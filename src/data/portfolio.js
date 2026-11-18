// Certificate previews: compressed, watermarked, metadata-free copies in public/certificates/ (view-only).
const certificates = {
  ned: {
    name: "Cyber Security & Ethical Hacking",
    kind: "Certificate of Competence · 2-month certification programme",
    issuer: "NED Academy · PITP, Government of Sindh",
    date: "Jan – Mar 2026",
    image: {
      src: "/certificates/ned-cyber-security-ethical-hacking.webp",
      width: 1400,
      height: 1035,
      alt: "Certificate of Competence awarded to Abdur Rehman Khan by NED Academy and the People's Information Technology Programme, Government of Sindh, for the 2-month Cyber Security and Ethical Hacking programme held from 12 January to 6 March 2026.",
    },
  },
  codersCup: {
    name: "Coders Cup 2024 · Finalist",
    kind: "ACM interuniversity speed programming competition. Team Jalaibee qualified for the final round.",
    issuer: "ACM NUCES Karachi",
    date: "2024",
    note: "Certificate of participation shown; proof of the final round is available on request.",
    image: {
      src: "/certificates/coders-cup-2024.webp",
      width: 1400,
      height: 999,
      alt: "Certificate of Participation in the ACM Coder's Cup 2024, an interuniversity speed programming competition, presented to Abdur Rehman Khan.",
    },
  },
  aptech: {
    name: "Web Designing project of the month",
    kind: "Certificate of Appreciation for outstanding performance in the Web Designing project (Tangoline)",
    issuer: "Aptech Learning, North Nazimabad Center",
    date: "January 2022",
    image: {
      src: "/certificates/aptech-web-designing-appreciation.webp",
      width: 959,
      height: 1400,
      alt: "Certificate of Appreciation from Aptech Learning, North Nazimabad Center, awarded to Abdur Rehman Khan for outstanding performance in the Web Designing project for the month of January 2022.",
    },
  },
};

export const portfolioData = {
  basics: {
    name: "Abdur Rehman Khan",
    shortName: "ARK",
    role: "Computer Science Student · Agentic Software Development",
    /** Short label above the hero heading. */
    eyebrow: "Agentic software development",
    snapshot: "Studying Computer Science at GU-Tech and building software with agent pipelines.",
    headline: "I build real products with AI agents, organised like a small engineering team.",
    intro:
      "Computer Science student in Karachi. I gather the requirements, write the user stories, and run AI coding agents through a pipeline of planning, building, review, testing and security checks.",
    current:
      "Recent work: a NASA Space Apps game built on real solar-storm data, and Unsak, a live offline-first app for students.",
    summary:
      "Computer Science student in Karachi who builds software with agentic AI workflows: requirements and user stories, agents and sub-agents, skills, hooks and model routing, gated delivery pipelines, and full-stack JavaScript, React, Next.js, Node.js and PostgreSQL, with security and privacy built in.",
    focusTags: ["Multi-agent workflows", "Spec-driven delivery", "Full-stack JavaScript"],
    location: { region: "Karachi", country: "Pakistan" },
    email: "donabdurrehman12@gmail.com",
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
      "I build software the way a small engineering team does. Requirements come first, then user stories, then an agent workflow where each agent has a clear role, owns specific files, works from a written brief, and must pass checks before anything merges.",
      "Security and privacy are part of that pipeline, not an afterthought: access rules on the server, security headers, privacy pages that match what the code really does, and accessibility checks on every page.",
    ],
    pillars: [
      {
        title: "Plan",
        description: "Requirements, user stories with IDs and a decision log, written before any code.",
      },
      {
        title: "Orchestrate",
        description: "Agents with set roles, sub-agents, skills, hooks, and the right model for each task.",
      },
      {
        title: "Verify",
        description: "Review, tests, accessibility and security gates on every story.",
      },
    ],
    bringsTitle: "What I bring to a team",
    brings: [
      "Agentic workflows: agents, sub-agents, skills, hooks and model routing",
      "Spec-driven delivery: requirements, user stories, sprints, gates and a Definition of Done",
      "Full-stack web development with JavaScript, React, Next.js, Node.js and PostgreSQL",
      "Security and privacy by design: server-side access rules, security headers and OWASP checks",
    ],
    quote: "AI makes code fast. Process makes it trustworthy.",
  },

  skills: [
    {
      category: "Agentic AI",
      items: [
        "AI coding agents",
        "Multi-agent orchestration",
        "Sub-agents",
        "Skills & hooks",
        "Model & effort routing",
        "Generative AI",
      ],
    },
    {
      category: "Process",
      items: [
        "Requirement gathering",
        "User stories",
        "Sprints & gates",
        "Spec docs & ADRs",
        "Definition of Done",
        "Code review",
        "CI pipelines",
        "Git & GitHub",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML & CSS", "PWA"],
    },
    {
      category: "Backend & Data",
      items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Firebase", "Socket.io"],
    },
    {
      category: "Languages",
      items: ["JavaScript", "Python", "C++", "C", "SQL"],
    },
    {
      category: "Security",
      items: [
        "OWASP Top 10",
        "Security headers & CSP",
        "Access rules & RLS",
        "Dependency audits",
        "Burp Suite",
        "Nmap",
        "Wireshark",
      ],
    },
  ],

  process: [
    {
      title: "Specify",
      description: "Requirements, product spec and user stories with IDs. Every decision goes in a log.",
    },
    {
      title: "Plan",
      description: "A planning agent splits each story into parts, each with an owner and a list of files.",
    },
    {
      title: "Build",
      description: "Builder agents work from written briefs, only in the files they own.",
    },
    {
      title: "Review",
      description:
        "Every change is reviewed against the story and the standards. Rejected work goes back with a fix brief.",
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
      role: "Product owner, game designer and pitch lead in a three-person team. I defined the game rules, the data rules and the pipeline that built it.",
      points: [
        "Designed the core mechanic: share 10 power units a day across life support, shields and science while real solar events hit the base",
        "Used real NASA flare and storm records; archived data is labelled, and every science fact links to its NASA source",
        "Child-safe from day one: no accounts, cookies or tracking, and live NASA data fetched through our own server so no player's IP reaches a third party",
        "Ran the build as a gated pipeline: file ownership per agent, written task briefs, four time-boxed gates, a usability sprint from playtests and a security audit with every finding fixed",
      ],
      stack: ["Next.js", "React", "JavaScript", "Zod", "NASA DONKI API", "Serverless functions"],
      liveUrl: "https://junior-astronaut-mission-trainer-eight.vercel.app",
      linkNote: "Private repository",
    },
    {
      title: "Unsak Digital Companion",
      context: "Student digital well-being app",
      status: "Live",
      summary:
        "A mobile-first app that helps students build better phone habits: a 30-day challenge, a bedtime wind-down, a scam-message check and people to talk to.",
      role: "Solo project, from user research to launch. I ran the Design Thinking research, wrote the requirements and module contract, and set up the pipeline that built and tested it.",
      points: [
        "Features came from user interviews and journey maps, not guesses",
        "Privacy by design: personal data stays on the phone, with data export and account deletion that only ever acts on the user's own account",
        "Privacy and terms page written from what the code really does, with automated tests that fail if the two drift apart",
        "Security headers, a strict content policy and 170+ automated tests; works offline and installs to the home screen",
      ],
      stack: ["JavaScript", "PWA", "Service worker", "Supabase Auth"],
      liveUrl: "https://unsak.vercel.app",
      codeUrl: "https://github.com/abdurrehman7259/Unsak",
    },
    {
      title: "This portfolio",
      context: "Personal site and blog",
      status: "Live",
      summary:
        "The site you are reading, built to the same launch checklist I use for every project: privacy, security and accessibility checked before release.",
      role: "Designed and built end to end, including the private admin area for the blog.",
      points: [
        "Blog pages are rendered on the server, so visitors' browsers never load Firebase: no cookies, no browser storage, nothing sent to Google",
        "Security headers and a content policy on every route; framework kept patched against known vulnerabilities",
        "Zero automated accessibility violations (WCAG 2.1 AA) on every page, at desktop and phone size",
        "Verified backups: the blog exports with a SHA-256 checksum and a script that checks it",
      ],
      stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Firebase"],
      liveUrl: "https://abdur-rehman-khan-portfolio.vercel.app",
      codeUrl: "https://github.com/abdurrehman7259/Abdur-Rehman-Khan-Portfolio",
    },
    {
      title: "Tangoline",
      context: "Aptech Learning · Web Designing project",
      status: "Award",
      summary:
        "A responsive e-commerce website for computer equipment and gaming products, where shoppers browse the catalogue, compare products side by side and read detailed specifications.",
      role: "Designed and built it as my web design project at Aptech. It was recognised as the outstanding Web Designing project of the month (January 2022).",
      points: [
        "Product catalogue for computer equipment and gaming gear",
        "Side-by-side product comparison",
        "Detailed specifications for every product",
        "Responsive layout for phones, tablets and desktops",
      ],
      stack: ["HTML", "CSS", "JavaScript", "jQuery"],
      certificate: certificates.aptech,
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
  ],

  certificates: [certificates.ned, certificates.codersCup, certificates.aptech],

  languages: [
    { language: "English", fluency: "Professional working" },
    { language: "Urdu", fluency: "Native" },
  ],
};
