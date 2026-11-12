import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description:
    "Reach Morlix Brand Partners by email or send us a message about your project. We typically respond within one business day.",
  openGraph: {
    title: `Contact ${site.legalName} — Book a Free Consultation`,
    description:
      "Tell us where your organization is and where you want it to be. We'll respond with practical, tailored next steps.",
    siteName: site.legalName,
    type: "website",
    images: [{ url: "/logo-full.png", width: 720, height: 479 }],
  },
};

/* ContactPage structured data — helps search engines surface our contact details */
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.legalName}`,
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://morlixbrandpartners.com"}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: site.legalName,
    email: site.email,
    areaServed: "Worldwide",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        {/* ——— Page hero ——— */}
        <section className="relative overflow-hidden bg-gradient-navy pb-14 pt-28 text-white sm:pb-16 sm:pt-36">
          <div className="bg-dots absolute inset-0" aria-hidden="true" />
          <div
            className="absolute -left-24 top-0 h-[300px] w-[300px] rounded-full bg-ocean-500/25 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="absolute -right-16 bottom-0 h-[260px] w-[260px] rounded-full bg-flame-500/20 blur-[120px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              <Link href="/" className="transition-colors hover:text-glow-amber">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-glow-amber">Contact</span>
            </nav>

            <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s build{" "}
              <span className="text-gradient-flame">what&apos;s next</span> for your brand.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Tell us where your organization is and where you want it to be.
              We&apos;ll respond with practical, tailored next steps — {site.responseNote.toLowerCase()}
            </p>
          </div>
        </section>

        {/* ——— Channels + form ——— */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
