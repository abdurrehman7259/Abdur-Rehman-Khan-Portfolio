# Abdur Rehman Khan — Portfolio

Personal portfolio and blog. It presents my projects (Moon Base Cadets, Unsak and this site) and how I build software with agentic AI workflows: requirements, user stories, agents and sub-agents, gated delivery pipelines, and security and privacy by design.

**Live site:** https://abdur-rehman-khan-portfolio.vercel.app
**Blog:** https://abdur-rehman-khan-portfolio.vercel.app/blog

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, JavaScript (ES modules)
- **Styling:** Tailwind CSS with `@tailwindcss/typography`; a light theme defined as CSS variables in `src/app/globals.css`
- **Fonts:** Sora (headings) and Inter (body) through `next/font`
- **Blog back end:** Firebase Authentication and Cloud Firestore
- **Blog content:** `react-markdown`, `remark-gfm`, `rehype-highlight`
- **Icons:** Lucide React
- **SEO:** Open Graph metadata and Schema.org `Person` JSON-LD

## Project structure

```text
src/
├── app/
│   ├── globals.css        # Colour tokens and shared component classes
│   ├── layout.jsx         # Fonts and SEO metadata
│   ├── page.jsx           # Home page assembly and JSON-LD
│   ├── blog/              # Public blog: list and post pages
│   └── admin/             # Admin only: login, dashboard, editor
├── components/
│   ├── Navbar.jsx         # Sticky header and mobile menu
│   ├── Section.jsx        # Shared section layout (label, title, lead)
│   ├── Hero.jsx           # Headline, intro and highlight numbers
│   ├── About.jsx
│   ├── Skills.jsx         # Skills grouped by area
│   ├── Projects.jsx       # Project case studies (incl. Tangoline)
│   ├── CertificateViewer.jsx # View-only certificate preview (dialog, no download)
│   ├── Process.jsx        # How I work: the story-to-merge pipeline
│   ├── Education.jsx      # Education, certificates, languages
│   ├── Writing.jsx        # Link to the blog
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── blog/              # Blog list, post view, editor, Markdown renderer
├── data/portfolio.js      # All page content
├── lib/                   # Firebase setup, post CRUD, auth hook
Resume.json                # The same content as data/portfolio.js, as JSON
firestore.rules            # Firestore security rules (admin-only writes)
```

To change the text on the site, edit `src/data/portfolio.js`.

**Certificates:** `public/certificates/` holds compressed (about 75–135 KB), watermarked, metadata-free WebP copies, never the original scans. They are shown in a view-only dialog with no download link; right-click, drag and long-press saving are blocked. Keep originals offline.

## Blog (Firebase)

Visitors read posts at `/blog`. Only the admin can sign in at `/admin/login` to create, edit, publish or delete posts.

**Privacy by design:** the public blog pages are rendered on the server (`src/lib/posts-public.js`, Firestore REST API, refreshed every 60 s). Visitors' browsers never load Firebase, so no cookies or browser storage are set and visitor IPs are not sent to Google. Photos from `images.unsplash.com` and `firebasestorage.googleapis.com` go through Next.js image optimisation and are served from this domain; images from any other host are shown as links (`src/components/blog/BlogImage.jsx`, keep its list in sync with `next.config.mjs`). YouTube embeds load only after Play.

Blog features: Markdown editor with live preview, YouTube embeds (a YouTube link on its own line), images, code highlighting, tables, tags, search and tag filters, cover images, drafts, reading-time estimate and a copy-link button.

| Route | Access | Purpose |
|---|---|---|
| `/blog` | Public | Published posts with search and tag filters (server-rendered) |
| `/blog/[slug]` | Public | Single published post (server-rendered); preview drafts in the editor |
| `/admin/login` | Public | Admin sign-in (Firebase email/password) |
| `/admin` | Admin | Dashboard: view, edit, delete posts |
| `/admin/editor/[id]` | Admin | Markdown editor with live preview (`new` to create) |

**Security:** admin-only access is enforced by Firestore Security Rules ([firestore.rules](firestore.rules)), not only the UI. Anyone can read published posts; only the admin's UID can create, edit, delete or read drafts. The UI also signs out any non-admin account.

### Firebase setup

1. Create a Firebase project. Enable **Authentication > Email/Password** and add one user (the admin).
2. Create a **Firestore** database (production mode).
3. Add a Web app (Project settings > Your apps) and copy its config into `.env.local` (see `.env.example`). Set `NEXT_PUBLIC_ADMIN_EMAIL` to the admin email.
4. Copy the admin user's UID (Authentication > Users) into `firestore.rules` (replace `REPLACE_WITH_ADMIN_UID`) and publish the rules in Firestore > Rules.
5. Run `npm run dev`, then visit `/admin/login`.

### Deploy (Vercel)

Add the same `NEXT_PUBLIC_*` variables under Project > Settings > Environment Variables, then redeploy. Also add your Vercel domain to Firebase Authentication > Settings > Authorized domains.

## Getting started

```bash
npm install        # install dependencies
npm run dev        # development server at http://localhost:3000
npm run build      # production build
npm start          # start production server
npm run lint       # lint check
```

## License

The code is MIT-licensed: see [LICENSE](LICENSE).

The personal content is not covered by that licence and stays © Abdur Rehman Khan, all rights reserved: the profile text in `src/data/portfolio.js` and `Resume.json`, the certificate images in `public/certificates/`, the blog posts and the photos. Please do not reuse it as your own portfolio.
