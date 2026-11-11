import Link from "next/link";
import {
  Share2,
  Palette,
  CodeXml,
  TrendingUp,
  MailPlus,
  Compass,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "social-media-management": Share2,
  "creative-design-brand-identity": Palette,
  "web-design-development": CodeXml,
  "digital-marketing": TrendingUp,
  "email-marketing-automation": MailPlus,
  "brand-strategy-marketing": Compass,
};

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="bg-dots-light absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Six capabilities.{" "}
              <span className="text-gradient-ocean">One integrated partner.</span>
            </>
          }
          description="We start with the six services every growing organization needs most — each one built to work with the others, so your brand, platforms and marketing pull in the same direction."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, i) => {
            const Icon = icons[service.slug] ?? Share2;
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-flame-500/40 hover:shadow-[0_24px_50px_-20px_rgba(10,33,64,0.28)]">
                  {/* hover top accent */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-flame transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  {/* ghost number */}
                  <span
                    className="pointer-events-none absolute -right-2 -top-5 font-display text-[5.5rem] font-bold leading-none text-navy-700/[0.06] transition-colors duration-300 group-hover:text-flame-500/10"
                    aria-hidden="true"
                  >
                    {service.num}
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-ocean-500 text-white shadow-md shadow-navy-700/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-600">
                      {service.num} / {service.code}
                    </p>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold leading-snug text-navy-800">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Included in ${service.title}`}>
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-navy-700"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`#contact`}
                    className={cn(
                      "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-flame-600"
                    )}
                  >
                    Start with this service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Future-facing note */}
        <Reveal delay={0.1} className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These are our launch services. As{" "}
            <span className="font-semibold text-navy-700">Morlix Brand Partners</span>{" "}
            grows, our full ecosystem — software solutions, AI & automation, data
            intelligence, and more — will be added to serve you at every stage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
