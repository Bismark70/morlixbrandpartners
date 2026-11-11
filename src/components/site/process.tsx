import {
  Search,
  Route,
  PenTool,
  Rocket,
  BarChart3,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { processSteps } from "@/lib/site";

const stepIcons: LucideIcon[] = [Search, Route, PenTool, Rocket, BarChart3, RefreshCw];

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
      {/* decor */}
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-ocean-500/15 blur-[130px]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="How We Work"
          title={
            <>
              A process built for outcomes,{" "}
              <span className="text-gradient-flame">not one-size-fits-all.</span>
            </>
          }
          description="We do not believe in applying the same solution to every client. Every engagement moves through six deliberate stages — so what we build is relevant, practical, and aligned with real objectives."
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal key={step.num} delay={(i % 3) * 0.08} className="h-full">
                <li className="group relative h-full">
                  <div className="glass-navy relative h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-glow-amber/40 hover:bg-white/[0.08]">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-glow-amber transition-colors duration-300 group-hover:border-glow-amber/40">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span
                        className="font-display text-4xl font-bold text-white/10 transition-colors duration-300 group-hover:text-glow-amber/40"
                        aria-hidden="true"
                      >
                        {step.num}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {step.description}
                    </p>
                    {/* connector arrow on desktop */}
                    {i < processSteps.length - 1 ? (
                      <span
                        className="absolute -right-4 top-1/2 hidden h-px w-3 bg-gradient-to-r from-glow-amber/60 to-transparent lg:block"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
