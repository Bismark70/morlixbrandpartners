import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ——— Story + Vision/Mission ——— */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={
                <>
                  Built for a world that{" "}
                  <span className="text-gradient-ocean">no longer stands still.</span>
                </>
              }
            />
            <Reveal delay={0.08}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Having a logo, a website, or a social media account is no longer
                  enough. Organizations need a clear identity, a professional digital
                  presence, effective communication, the right technology, and
                  strategies that translate visibility into meaningful results.
                </p>
                <p>
                  That is where <strong className="font-semibold text-navy-800 dark:text-slate-100">Morlix Brand</strong> comes
                  in. We believe branding, technology, marketing, creativity, data,
                  and strategy should work together — a company&apos;s website should
                  reflect its brand, its social media should communicate a consistent
                  identity, and its data should inform decisions.
                </p>
                <p>
                  When these elements work together, digital presence becomes more
                  than visibility.{" "}
                  <span className="font-semibold text-flame-600">
                    It becomes a genuine business asset.
                  </span>
                </p>
              </div>
            </Reveal>

            {/* Philosophy quote */}
            <Reveal delay={0.14}>
              <blockquote className="mt-8 rounded-2xl border border-flame-500/20 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-card">
                <Quote className="h-5 w-5 text-flame-500" aria-hidden="true" />
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-navy-800 dark:text-slate-100">
                  Think strategically. Build confidently. Grow sustainably.
                </p>
                <footer className="mt-2 text-sm text-muted-foreground">
                  Our long-term ambition: a leading African brand development,
                  digital solutions, and innovation company with global relevance.
                </footer>
              </blockquote>
            </Reveal>
          </div>

          {/* Vision & Mission cards */}
          <div className="flex flex-col gap-5 lg:pt-4">
            <Reveal delay={0.1}>
              <article className="group relative overflow-hidden rounded-2xl bg-gradient-navy p-8 text-white shadow-xl shadow-navy-900/25">
                <div className="bg-dots absolute inset-0 opacity-70" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glow-amber">Our Vision</p>
                  <p className="mt-4 font-display text-xl font-semibold leading-relaxed">
                    To become a globally recognized brand development, digital
                    solutions, and innovation company — empowering organizations to
                    thrive, transform, and lead in the digital economy.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.18}>
              <article className="rounded-2xl border border-border bg-white p-8 shadow-sm dark:border-white/10 dark:bg-card">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flame-600">Our Mission</p>
                <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-navy-800 dark:text-slate-100">
                  To empower organizations through innovative technology, creative
                  excellence, strategic marketing, and integrated brand solutions
                  that transform ideas into measurable impact.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
