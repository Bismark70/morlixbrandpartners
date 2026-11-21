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
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-gradient-navy py-20 sm:py-28">
      <div className="bg-dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Services" tone="dark" />

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
                className="group rounded-2xl border border-border bg-white px-5 shadow-sm transition-all duration-300 hover:border-navy-700/25 hover:bg-secondary hover:shadow-md dark:border-white/10 dark:bg-card dark:hover:border-white/20 dark:hover:bg-white/[0.08] data-[state=open]:border-transparent data-[state=open]:bg-[linear-gradient(120deg,#fbae3c_0%,#f97316_45%,#e8481d_100%)] data-[state=open]:shadow-xl data-[state=open]:shadow-flame-600/30 sm:px-7"
              >
                <AccordionTrigger className="gap-4 py-5 hover:no-underline [&>svg]:hidden sm:py-6">
                  {/* Left: title */}
                  <span className="flex min-w-0 flex-1 flex-col items-start">
                    <span className="font-display text-lg font-bold leading-snug text-navy-800 transition-colors duration-300 group-data-[state=open]:text-white sm:text-xl dark:text-slate-100">
                      {service.title}
                    </span>
                  </span>

                  {/* Right: plus / minus toggle */}
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy-700/20 text-navy-700 transition-all duration-300 group-data-[state=open]:border-white/50 group-data-[state=open]:bg-white/15 group-data-[state=open]:text-white dark:border-white/15 dark:text-slate-300"
                    aria-hidden="true"
                  >
                    <Plus className="h-5 w-5 group-data-[state=open]:hidden" strokeWidth={2.2} />
                    <Minus className="hidden h-5 w-5 group-data-[state=open]:block" strokeWidth={2.2} />
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-6">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-data-[state=open]:text-white/85 sm:text-[15px]">
                    {service.description}
                  </p>

                  <ul
                    className="mt-4 flex flex-wrap gap-1.5"
                    aria-label={`Included in ${service.title}`}
                  >
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-navy-700/15 bg-white px-2.5 py-1 text-[11px] font-medium text-navy-700 transition-colors duration-300 group-data-[state=open]:border-transparent group-data-[state=open]:bg-white/15 group-data-[state=open]:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:group-data-[state=open]:border-transparent dark:group-data-[state=open]:bg-white/15 dark:group-data-[state=open]:text-white"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-flame-600 group-data-[state=open]:text-white group-data-[state=open]:hover:text-white/75 dark:text-slate-300 dark:hover:text-flame-400 dark:group-data-[state=open]:text-white dark:group-data-[state=open]:hover:text-white/75"
                  >
                    Start with this service
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
