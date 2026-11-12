import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="bg-dots-light absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Six capabilities.{" "}
              <span className="text-gradient-ocean">One integrated partner.</span>
            </>
          }
          description="Click a capability to see how we deliver it — each service is built to work with the others, so your brand, platforms and marketing pull in the same direction."
        />

        <Reveal delay={0.05} className="mt-12">
          <Accordion
            type="single"
            collapsible
            defaultValue={services[0].slug}
            className="space-y-4"
          >
            {services.map((service) => (
              <AccordionItem
                key={service.slug}
                value={service.slug}
                className="group rounded-2xl border border-border bg-white px-5 shadow-sm transition-all duration-300 hover:border-navy-700/30 hover:shadow-md data-[state=open]:border-transparent data-[state=open]:bg-navy-800 data-[state=open]:shadow-xl data-[state=open]:shadow-navy-900/25 sm:px-7"
              >
                <AccordionTrigger className="gap-4 py-5 hover:no-underline [&>svg]:hidden sm:py-6">
                  {/* Left: number / category / title */}
                  <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-600 transition-colors duration-300 group-data-[state=open]:text-glow-amber">
                      {service.num} / {service.code}
                    </span>
                    <span className="font-display text-lg font-bold leading-snug text-navy-800 transition-colors duration-300 group-data-[state=open]:text-white sm:text-xl">
                      {service.title}
                    </span>
                  </span>

                  {/* Right: plus / minus toggle */}
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-700/20 text-navy-700 transition-all duration-300 group-data-[state=open]:border-glow-amber/50 group-data-[state=open]:bg-white/10 group-data-[state=open]:text-glow-amber"
                    aria-hidden="true"
                  >
                    <Plus className="h-5 w-5 group-data-[state=open]:hidden" strokeWidth={2.2} />
                    <Minus className="hidden h-5 w-5 group-data-[state=open]:block" strokeWidth={2.2} />
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-6">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-data-[state=open]:text-white/70 sm:text-[15px]">
                    {service.description}
                  </p>

                  <ul
                    className="mt-4 flex flex-wrap gap-1.5"
                    aria-label={`Included in ${service.title}`}
                  >
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-navy-700 transition-colors duration-300 group-data-[state=open]:bg-white/10 group-data-[state=open]:text-white/80"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-flame-600 group-data-[state=open]:text-glow-amber group-data-[state=open]:hover:text-glow-amber"
                  >
                    Start with this service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* Future-facing note */}
        <Reveal delay={0.1} className="mt-8 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These are our launch services — our full ecosystem (software, AI &
            automation, data intelligence and more) will be added as Morlix grows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
