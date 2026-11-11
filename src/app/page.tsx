import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { About } from "@/components/site/about";
import { Faq } from "@/components/site/faq";
import { CtaBanner } from "@/components/site/cta-banner";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { site, services } from "@/lib/site";

/* Organization structured data — helps search engines understand the brand */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phone,
  description:
    "Brand development, digital solutions, and business innovation company — combining strategy, creativity, technology, marketing, and data to build stronger brands.",
  knowsAbout: services.map((s) => s.title),
  areaServed: "Worldwide",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <About />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
