import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Education } from "@/components/Education";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const siteUrl = "https://abdur-rehman-khan-portfolio.vercel.app";

export default function Home() {
  const { basics } = portfolioData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: basics.name,
    alternateName: basics.shortName,
    jobTitle: "Computer Science Student",
    description: basics.summary,
    url: siteUrl,
    email: basics.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: basics.location.region,
      addressCountry: basics.location.country,
    },
    sameAs: basics.profiles.map((p) => p.url),
    knowsAbout: portfolioData.skills.flatMap((s) => s.items),
  };

  return (
    <>
      {/* "<" is escaped so no value can ever close the script tag early. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar name={basics.name} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero basics={basics} stats={portfolioData.stats} />
        <About about={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} earlierWork={portfolioData.earlierWork} />
        <Process steps={portfolioData.process} />
        <Education
          education={portfolioData.education}
          certificates={portfolioData.certificates}
          languages={portfolioData.languages}
        />
        <Writing />
        <Contact basics={basics} />
      </main>
      <Footer name={basics.name} />
    </>
  );
}
