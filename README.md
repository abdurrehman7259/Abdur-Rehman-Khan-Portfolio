# Abdur Rehman Khan — Cybersecurity Portfolio

A modern, high-performance portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed with an offensive & defensive cyber-tech aesthetic, subtle glassmorphism, responsive navigation, and modular component architecture. It includes an **admin-only blog powered by Firebase**.

**Live site:** https://abdur-rehman-khan-portfolio.vercel.app
**Blog:** https://abdur-rehman-khan-portfolio.vercel.app/blog

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/typography`
- **Backend (blog):** [Firebase](https://firebase.google.com/) Authentication + Cloud Firestore
- **Blog content:** `react-markdown`, `remark-gfm`, `rehype-highlight`
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
│   │   ├── icon.svg            # Custom ARK.SEC Cyber Shield Favicon
│   │   ├── blog/               # Public blog: list (page.tsx) + post ([slug])
│   │   └── admin/              # Admin only: login, dashboard, editor/[id]
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
│   │   ├── ScrollProgress.tsx  # Viewport reading progress indicator
│   │   └── blog/               # PostEditor, PostView, BlogList, PostCard, Markdown (YouTube embeds), AdminGuard
│   ├── lib/
│   │   ├── firebase.ts         # Firebase app, Auth and Firestore init
│   │   ├── posts.ts            # Firestore CRUD for blog posts
│   │   └── useAuth.ts          # Auth state hook (admin check)
│   ├── data/
│   │   └── portfolio.ts        # Fully-typed portfolio data source
│   └── types/
│       └── portfolio.ts        # TypeScript interfaces for all data structures
├── firestore.rules             # Firestore security rules (admin-only writes)
├── .env.example                # Firebase environment variable template
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
2. **Interactive Technical Arsenal**: Filter skills by category or search in real time.
3. **One-Click Contact & Copy Feedback**: Instant clipboard copying for email and phone number.
4. **Active Scroll Spy Navigation**: Sticky header highlights the section currently in view.
5. **SEO & Structured Data**: Schema.org `Person` JSON-LD for discoverability.
6. **Mobile Responsive**: Custom mobile navigation drawer.
7. **Admin-Only Blog**: Firebase-powered blog (see below).

---

## 📝 Blog (Firebase)

Visitors read posts at `/blog`. Only the admin can log in at `/admin/login` to create, edit, publish or delete posts.

**Blog features:** Markdown editor with live preview and formatting toolbar, YouTube embeds (paste a YouTube link on its own line), images, code syntax highlighting, tables, tags, search and tag filters, cover images, draft/publish, reading-time estimate, copy-link button.

### Routes

| Route | Access | Purpose |
|---|---|---|
| `/blog` | Public | Published posts with search and tag filters |
| `/blog/[slug]` | Public | Single post (drafts visible to the admin only) |
| `/admin/login` | Public | Admin sign-in (Firebase email/password) |
| `/admin` | Admin | Dashboard: view, edit, delete posts |
| `/admin/editor/[id]` | Admin | Markdown editor with live preview (`new` to create) |

### Security

Admin-only access is enforced by **Firestore Security Rules** ([firestore.rules](firestore.rules)), not just the UI: anyone can read published posts, and only the admin's UID can create, edit, delete or read drafts. The UI additionally signs out any non-admin account.

### Firebase setup
1. Create a Firebase project. Enable **Authentication > Email/Password** and add one user (the admin).
2. Create a **Firestore** database (production mode).
3. Add a Web app (Project settings > Your apps) and copy its config into `.env.local` (see `.env.example`). Set `NEXT_PUBLIC_ADMIN_EMAIL` to the admin email.
4. Copy the admin user's UID (Authentication > Users) into `firestore.rules` (replace `REPLACE_WITH_ADMIN_UID`) and publish the rules in Firestore > Rules.
5. Run `npm run dev`, then visit `/admin/login`.

### Deploy (Vercel)
Add the same `NEXT_PUBLIC_*` variables under Project > Settings > Environment Variables, then redeploy. Also add your Vercel domain to Firebase Authentication > Settings > Authorized domains.

---

## 🛠️ Getting Started

```bash
npm install        # install dependencies
npm run dev        # development server at http://localhost:3000
npm run build      # production build
npm start          # start production server
npm run lint       # lint check
```

---

## 🛡️ License & Copyright
© 2024–Present ARK.SEC | Abdur Rehman Khan. All rights reserved.
