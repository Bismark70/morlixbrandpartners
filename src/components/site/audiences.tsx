import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { audience } from "@/lib/site";

export function Audiences() {
  return (
    <section id="audiences" className="relative scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Work With"
          description="We provide strategic and digital solutions to organisations across different industries and stages of growth."
        />

        <Reveal delay={0.08} className="mt-12">
          <ul
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
            aria-label="Who we work with"
          >
            {audience.map((item) => (
              <li
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500/40 hover:shadow-md sm:p-5 dark:border-white/10 dark:bg-card"
              >
                <span
                  className="inline-block h-2 w-2 shrink-0 rotate-45 rounded-[2px] bg-gradient-flame transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium leading-snug text-navy-800 transition-colors duration-300 group-hover:text-navy-900 sm:text-[15px] dark:text-slate-100">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
