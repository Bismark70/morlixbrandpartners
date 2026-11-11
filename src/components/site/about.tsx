import {
  Lightbulb,
  Sparkles,
  Award,
  ShieldCheck,
  Handshake,
  RefreshCw,
  HeartHandshake,
  Layers,
  Users,
  Target,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const values: { label: string; icon: LucideIcon; blurb: string }[] = [
  { label: "Innovation", icon: Lightbulb, blurb: "Open to new ideas, technologies, and ways of solving problems." },
  { label: "Creativity", icon: Sparkles, blurb: "Strong ideas change how organizations communicate and compete." },
  { label: "Excellence", icon: Award, blurb: "Quality and professionalism in every assignment." },
  { label: "Integrity", icon: ShieldCheck, blurb: "Trust earned through honesty, transparency, and accountability." },
  { label: "Collaboration", icon: Handshake, blurb: "We work alongside clients, not simply for them." },
  { label: "Adaptability", icon: RefreshCw, blurb: "Solutions that evolve as fast as digital environments do." },
  { label: "Impact", icon: HeartHandshake, blurb: "We care about the value our work creates, not the project count." },
];

const difference = [
  {
    icon: Layers,
    title: "One integrated ecosystem",
    text: "Branding, design, technology, marketing, data, innovation, and strategy — connected under one organization instead of scattered across providers.",
  },
  {
    icon: Users,
    title: "A partner, not a vendor",
    text: "We work alongside you to understand ambitions and challenges before recommending anything — solutions aligned with your real objectives.",
  },
  {
    icon: Target,
    title: "Built to grow with you",
    text: "From idea to launch, launch to growth, growth to transformation — support for every stage of your organization's journey.",
  },
];

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
                  That is where <strong className="font-semibold text-navy-800">Morlix Brand Partners</strong> comes
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
              <blockquote className="mt-8 rounded-2xl border border-flame-500/20 bg-white p-6 shadow-sm">
                <Quote className="h-5 w-5 text-flame-500" aria-hidden="true" />
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-navy-800">
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
              <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flame-600">Our Mission</p>
                <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-navy-800">
                  To empower organizations through innovative technology, creative
                  excellence, strategic marketing, and integrated brand solutions
                  that transform ideas into measurable impact.
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        {/* ——— Our Difference ——— */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Our Difference"
            title={
              <>
                Why organizations choose{" "}
                <span className="text-gradient-flame">Morlix</span>
              </>
            }
            description="The digital industry is crowded with companies offering individual services. We take a broader approach — capabilities that usually live in separate companies, working together as one."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {difference.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <article className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-flame-600">
                    <item.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ——— Core values ——— */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Our Core Values"
            title="The principles behind every project"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.label} delay={(i % 4) * 0.06} className="h-full">
                <article className="group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-navy-700/30 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-white">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-800">{value.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{value.blurb}</p>
                </article>
              </Reveal>
            ))}
            {/* Brand promise tile completes the grid */}
            <Reveal delay={0.18} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-2xl bg-gradient-flame p-6 text-white shadow-lg shadow-flame-500/25">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">Our Brand Promise</p>
                <p className="mt-4 font-display text-lg font-bold leading-snug">
                  We help organizations build for today while preparing for tomorrow.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
