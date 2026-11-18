import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export const metadata = {
  title: "Privacy | Abdur Rehman Khan",
  description: "What this website loads, what it does not collect, and who to contact.",
};

const sections = [
  {
    title: "No tracking",
    body: "This site uses no analytics, advertising or tracking pixels. Fonts are served from this site, not from Google Fonts.",
  },
  {
    title: "Cookies and browser storage",
    body: "This site sets no cookies and stores nothing in your browser. That is why there is no cookie banner. (The private admin area, used only by me, keeps my own sign-in in my browser.)",
  },
  {
    title: "Hosting",
    body: "The site is hosted on Vercel. Like any web host, Vercel processes your IP address and basic request data to deliver the pages and keep the service secure.",
  },
  {
    title: "Blog",
    body: "Blog posts are stored in Google Firebase (Cloud Firestore), but this site's server reads them and sends you finished pages. Your browser does not contact Firebase or Google. Photos from Unsplash or Firebase Storage are also fetched by this site's server and served from this site. An image from any other website is shown as a link and loads only if you open it.",
  },
  {
    title: "Videos",
    body: "YouTube videos in posts do not load until you press Play. Only then does YouTube (Google) receive your IP address.",
  },
  {
    title: "Contact",
    body: "If you email me, I use your message and address only to reply. Ask me any time and I will delete our correspondence.",
  },
];

export default function PrivacyPage() {
  const { basics } = portfolioData;

  return (
    <>
      <Navbar name={basics.name} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="eyebrow">Privacy</p>
          <h1 className="section-title mt-3">What this site loads and collects.</h1>
          <p className="section-lead">
            Short version: nothing is tracked, nothing is stored in your browser, and your browser contacts only this
            site unless you press Play on a video or open an outside link.
          </p>

          <div className="mt-10 space-y-4">
            {sections.map((s) => (
              <section key={s.title} className="card p-6">
                <h2 className="font-display text-base font-semibold text-ink">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-body">{s.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">
            Questions:{" "}
            <a href={`mailto:${basics.email}`} className="text-accent hover:text-accent-strong">
              {basics.email}
            </a>
          </p>
        </div>
      </main>
      <Footer name={basics.name} />
    </>
  );
}
