# Abdur Rehman Khan — Cybersecurity Portfolio

A modern, high-performance portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed specifically with an offensive & defensive cyber-tech aesthetic, subtle glassmorphism, responsive navigation, and modular component architecture.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** `Inter` (UI Sans) & `JetBrains Mono` (Cyber Tech Monospace)
- **SEO & Structured Data:** OpenGraph, Twitter Cards, Semantic Schema.org JSON-LD

---

## 📁 Project Architecture

```text
├── src/
│   ├── app/
│   │   ├── globals.css         # Cyber neon theme, scrollbars, matrix grids
│   │   ├── layout.tsx          # Root layout, Google Fonts, SEO metadata
│   │   ├── page.tsx            # Main page assembly + Schema.org JSON-LD
│   │   └── icon.svg            # Custom ARK.SEC Cyber Shield Favicon
│   ├── components/
│   │   ├── Navbar.tsx          # Glassmorphic header, scrollspy, mobile drawer
│   │   ├── Hero.tsx            # Introduction, status badge, action CTA buttons
│   │   ├── CyberOrb.tsx        # High-tech cybernetic orb with telemetry chips
│   │   ├── About.tsx           # Narrative, core pillars, metric stat cards
│   │   ├── Skills.tsx          # Technical arsenal with search & category filters
│   │   ├── Projects.tsx        # Featured offensive/defensive projects & CTF labs
│   │   ├── Education.tsx       # Academic timeline & verified certificates
│   │   ├── Contact.tsx         # Interactive contact card with one-click copy
│   │   ├── Footer.tsx          # Cyber-footer with back-to-top button
│   │   └── ScrollProgress.tsx  # Viewport reading progress indicator
│   ├── data/
│   │   └── portfolio.ts        # Fully-typed portfolio data source
│   └── types/
│       └── portfolio.ts        # TypeScript interfaces for all data structures
├── public/                     # Static assets
├── tailwind.config.ts          # Custom cyber color palette and animations
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
├── .eslintrc.json              # Next.js Core Web Vitals ESLint rules
└── package.json
```

---

## ⚡ Features

1. **Cyber-Dark Aesthetic**: Deep obsidian backgrounds (`#0a0b10`), cyber-cyan glow accents (`#00f2ff`), matrix grid patterns, and glassmorphism.
2. **Interactive Technical Arsenal**: Filter skills by category (*Security Tools*, *Programming*, *Cybersecurity Concepts*, *CS Fundamentals*) or search in real time.
3. **One-Click Contact & Copy Feedback**: Instant clipboard copying for email and phone number with visual confirmation.
4. **Active Scroll Spy Navigation**: Sticky header automatically detects which section is currently in view and highlights it.
5. **SEO & Structured Data**: Built-in Schema.org `Person` and `ProfilePage` JSON-LD data for maximum discoverability by search engines.
6. **Mobile Responsive**: Custom mobile navigation drawer with smooth transitions.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

### 5. Run Lint Check
```bash
npm run lint
```

---

## 🛡️ License & Copyright
© 2024–Present ARK.SEC | Abdur Rehman Khan. All rights reserved.

## Blog (Firebase)

Admin-only blog built with Firebase Auth + Firestore. Visitors read posts at `/blog`; only the admin can log in at `/admin/login` to create, edit, publish or delete posts.

Features: Markdown editor with live preview, toolbar, YouTube embeds (paste a YouTube link on its own line), images, code syntax highlighting, tags, search, cover image, draft/publish, reading time.

### Setup
1. Create a Firebase project. Enable **Authentication > Email/Password** and add one user (the admin).
2. Create a **Firestore** database (production mode).
3. Add a Web app (Project settings > Your apps) and copy its config into `.env.local` (see `.env.example`). Set `NEXT_PUBLIC_ADMIN_EMAIL` to the admin email.
4. Copy the admin user's UID (Authentication > Users) into `firestore.rules` (replace `REPLACE_WITH_ADMIN_UID`) and paste the rules in Firestore > Rules > Publish.
5. `npm run dev`, then visit `/admin/login`.

### Deploy (Vercel)
Add the same `NEXT_PUBLIC_*` variables under Project > Settings > Environment Variables, then redeploy. Also add your Vercel domain to Firebase Authentication > Settings > Authorized domains.
