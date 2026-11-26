import { Plus } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

/* The four connected capabilities named in the positioning statement */
const capabilities = ["Strategy", "Communication", "Technology", "Execution"];

export function Positioning() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      {/* soft glow accents */}
      <div
        className="absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-flame-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-ocean-500/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionHeading
          eyebrow="Why Morlix"
          title={
            <>
              More Than Services.{" "}
              <span className="text-gradient-flame">A Strategic Approach to Growth.</span>
            </>
          }
        />

        <Reveal delay={0.08}>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              At MORLIX, we understand that successful brands require more than
              individual creative or digital services. They require a coordinated
              approach that connects strategy, communication, technology and
              execution.
            </p>
            <p>
              Our integrated approach enables clients to access complementary
              expertise through one professional service partner.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div
            className="mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-3"
            aria-label="What we connect"
          >
            {capabilities.map((capability, i) => (
              <span key={capability} className="flex items-center gap-x-2">
                <span className="rounded-full border border-navy-700/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-800 shadow-sm dark:border-white/10 dark:bg-card dark:text-slate-100">
                  {capability}
                </span>
                {i < capabilities.length - 1 && (
                  <Plus className="h-3.5 w-3.5 text-flame-500" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
