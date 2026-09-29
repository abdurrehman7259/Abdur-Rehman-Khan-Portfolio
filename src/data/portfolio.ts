import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  basics: {
    name: "Abdur Rehman Khan",
    shortName: "ARK",
    label: "Cybersecurity Student",
    headline: "Cybersecurity Student | Aspiring SOC Analyst",
    summary:
      "Cybersecurity student with hands-on experience in Linux environments, vulnerability assessment and university CTFs, including cryptography challenges. I have a strong coding foundation in C/C++, OOP and data structures and algorithms, and I've built projects of my own, including a client-server system in C++ and Python. I'm seeking an internship in security operations where I can apply these skills and grow within a professional team.",
    location: {
      country: "Pakistan",
      countryCode: "PK",
      region: "Karachi",
    },
    email: "donabdurrehman12@gmail.com",
    phone: "0310-0104905",
    availability: "Available for Internships",
    leadershipNote:
      "Turning hands-on security practice — CTFs, vulnerability labs, and independent projects — into a SOC Analyst or Security Operations internship.",
    profiles: [
      {
        network: "LinkedIn",
        username: "Abdur Rehman Khan",
        url: "https://www.linkedin.com/in/abdur-rehman-khan-4b4baa328/",
        icon: "linkedin",
      },
      {
        network: "GitHub",
        username: "abdurrehman7259",
        url: "https://github.com/abdurrehman7259",
        icon: "github",
      },
    ],
  },
  about: {
    intro: [
      "I learn security through hands-on practice. In isolated lab environments, I analyze system behaviors, identify misconfigurations and vulnerabilities, and inspect network traffic. In university CTFs, I work through cryptography and data analysis challenges to sharpen my defensive and analytical intuition.",
      "I complement that security practice with solid software engineering foundations. Alongside building client-server networking systems in C++ and Python, I developed a responsive e-commerce platform that was awarded Best Project of the Month at Aptech. Understanding software and network protocols from the inside out enables me to better detect anomalies and assess threats.",
      "I am excited to bring this hands-on lab experience and engineering background into a dedicated Security Operations Center (SOC) team. I am actively seeking an internship where I can contribute to threat monitoring, log and traffic analysis, and incident triage alongside experienced security analysts.",
    ],
    strengths: [
      "C/C++, Python, and Bash scripting",
      "Network packet capture & traffic inspection with Wireshark and Nmap",
      "Vulnerability assessment across simulated targets (Metasploitable)",
      "CTF competitor — cryptography, protocol analysis, and security puzzles",
      "Competitive programmer — Coders Cup (algorithms, rapid problem-solving)",
    ],
    leadershipPillars: [
      {
        title: "Foundation",
        description:
          "Strong grounding in C/C++, networking protocols, and systems architecture — key foundations for analyzing endpoint telemetry and logs.",
        icon: "code",
      },
      {
        title: "Practice",
        description:
          "Hands-on packet analysis with Wireshark, network scanning with Nmap, and vulnerability assessments across dedicated lab environments.",
        icon: "shield",
      },
      {
        title: "Direction",
        description:
          "Targeting a SOC Analyst internship to contribute to real-time threat monitoring, alert triage, and security operations.",
        icon: "target",
      },
    ],
    metrics: [
      {
        value: "Cybersecurity",
        label: "Bachelor's focus",
      },
      {
        value: "2",
        label: "Certificates earned",
      },
      {
        value: "Internship",
        label: "Actively seeking (SOC Operations)",
      },
    ],
  },
  skills: [
    {
      category: "Security Tools",
      description: "Network monitoring, packet analysis, and system assessment",
      items: [
        "Burp Suite",
        "Nmap",
        "Wireshark",
        "Kali Linux",
        "Metasploitable",
      ],
    },
    {
      category: "Cybersecurity Concepts",
      description: "Defensive operations, traffic mechanics, and system security",
      items: [
        "Log & Traffic Analysis",
        "Vulnerability Assessment",
        "Cryptography",
        "Network Packet Capture (PCAP)",
        "Active Directory Basics",
      ],
    },
    {
      category: "Programming",
      description: "Systems programming, scripting, and automation",
      items: ["C", "C++", "Python", "Bash Scripting"],
    },
    {
      category: "CS Fundamentals",
      description: "Core computer science principles and environments",
      items: [
        "Data Structures & Algorithms",
        "OOP (Object-Oriented Programming)",
        "Linux Environments",
      ],
    },
    {
      category: "Web Development",
      description: "Modern frontend architecture and responsive web standards",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
      ],
    },
  ],
  projects: [
    {
      title: "ARK.SEC — Modern Cybersecurity Portfolio",
      description:
        "Designed and built a high-performance, responsive cybersecurity portfolio and interactive terminal showcase featuring real-time skill search, active scrollspy navigation, and custom cyber aesthetics.",
      outcome:
        "Architected with Next.js 15 App Router, TypeScript, and Tailwind CSS with sub-second page loads and zero layout shift.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      codeUrl: "https://github.com/abdurrehman7259",
      liveUrl: "https://github.com/abdurrehman7259",
    },
    {
      title: "Client-Server Network & Endpoint Communication System",
      description:
        "Engineered a multi-tier client-server system emphasizing low-level socket communication, systems programming in C++ and Python, and network/endpoint traffic mechanics. Implemented bidirectional data exchange over TCP sockets, scripted process automation, and integrated network discovery to analyze host traffic and connectivity.",
      outcome:
        "Demonstrated practical mastery of socket communication protocols, endpoint execution mechanics, and network traffic flows between client and server architectures.",
      stack: ["C++", "Python", "Sockets", "Nmap", "Network Protocols"],
      codeUrl: "https://github.com/abdurrehman7259",
    },
    {
      title: "Security Labs & CTF Practice",
      description:
        "Hands-on vulnerability assessment, network traffic inspection, and protocol analysis using Burp Suite, Nmap, Wireshark, and Kali Linux against targets like Metasploitable, alongside university CTF competitions covering cryptography and secure communication challenges.",
      outcome:
        "Built practical experience in traffic analysis, vulnerability assessment, and cryptographic principles in controlled lab environments.",
      stack: [
        "Burp Suite",
        "Nmap",
        "Wireshark",
        "Kali Linux",
        "Metasploitable",
      ],
      codeUrl: "https://github.com/abdurrehman7259",
    },
    {
      title: "Tangoline — E-Commerce Website",
      description:
        "Developed a responsive e-commerce website for computer equipment and gaming products, with product comparison and detailed specifications.",
      outcome:
        "Won Best Project of the Month at Aptech and qualified for Aptech Vision.",
      stack: ["HTML", "CSS", "JavaScript", "jQuery"],
      codeUrl: "https://github.com/abdurrehman7259",
    },
  ],
  certificates: [
    {
      name: "Cybersecurity & Ethical Hacking",
      issuer: "NED Academy",
    },
    {
      name: "Web Development",
      issuer: "Aptech Learning",
    },
  ],
  education: [
    {
      institution: "GU-Tech",
      area: "Computer Science",
      studyType: "Bachelor of Science (BS) — Continuing",
      period: "2026 — Present",
      detailsLabel: "Focus Areas",
      details: [
        "Transferred here after completing two years of a Cybersecurity degree at FAST-NUCES",
        "Cybersecurity (intended specialization)",
        "Computer Networks",
        "Operating Systems",
      ],
      startDate: "2026-09-01",
    },
    {
      institution: "FAST-NUCES",
      area: "Cybersecurity",
      studyType: "Bachelor of Science (BS) — First two years completed",
      period: "2023 — 2025",
      detailsLabel: "Coursework Focus",
      details: [
        "Cybersecurity Fundamentals",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Networking",
      ],
      startDate: "2023-08-01",
      endDate: "2025-09-01",
    },
    {
      institution: "Govt. Delhi College",
      area: "Pre-Engineering",
      studyType: "FSc",
      period: "2021 — 2023",
      detailsLabel: "Level",
      details: ["Higher Secondary / Intermediate Pre-Engineering"],
      startDate: "2021-01-01",
      endDate: "2023-01-01",
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Fluent (Professional Working)",
    },
    {
      language: "Urdu",
      fluency: "Native",
    },
  ],
};
