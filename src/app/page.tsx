import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Audiences } from "@/components/site/audiences";
import { About } from "@/components/site/about";
import { Positioning } from "@/components/site/positioning";
import { CtaBanner } from "@/components/site/cta-banner";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { site, services } from "@/lib/site";

/* Organization structured data — helps search engines understand the brand */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  slogan: site.tagline,
  email: site.email,
  description:
    "MORLIX is a brand development and digital solutions company delivering integrated services that help businesses and organisations strengthen their identity, communicate effectively and compete in an evolving digital environment.",
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
      <main className="flex-1 animate-page-enter">
        <Hero />
        <Services />
        <Audiences />
        <About />
        <Positioning />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
