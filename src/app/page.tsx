import { portfolioData } from "@/data/portfolio";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.basics.name,
    alternateName: portfolioData.basics.shortName,
    jobTitle: portfolioData.basics.label,
    description: portfolioData.basics.summary,
    url: "https://abdurrehmankhan.dev",
    email: portfolioData.basics.email,
    telephone: portfolioData.basics.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: portfolioData.basics.location.region,
      addressCountry: portfolioData.basics.location.country,
    },
    sameAs: portfolioData.basics.profiles.map((p) => p.url),
    knowsAbout: portfolioData.skills.flatMap((s) => s.items),
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ScrollProgress />
      <Navbar />

      <main className="min-h-screen cyber-grid-bg relative selection:bg-cyber-accent selection:text-black">
        <Hero basics={portfolioData.basics} />
        <About about={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Education
          education={portfolioData.education}
          certificates={portfolioData.certificates}
          languages={portfolioData.languages}
        />
        <Contact basics={portfolioData.basics} />
      </main>

      <Footer basics={portfolioData.basics} />
    </>
  );
}
