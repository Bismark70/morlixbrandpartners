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

const values: { label: string; icon: LucideIcon }[] = [
  { label: "Innovation", icon: Lightbulb },
  { label: "Creativity", icon: Sparkles },
  { label: "Excellence", icon: Award },
  { label: "Integrity", icon: ShieldCheck },
  { label: "Collaboration", icon: Handshake },
  { label: "Adaptability", icon: RefreshCw },
  { label: "Impact", icon: HeartHandshake },
];

const difference = [
  {
    icon: Layers,
    title: "One integrated ecosystem",
    text: "Branding, design, technology, marketing, and strategy — under one roof.",
  },
  {
    icon: Users,
    title: "A partner, not a vendor",
    text: "We understand your goals before recommending anything.",
  },
  {
    icon: Target,
    title: "Built to grow with you",
    text: "Support at every stage, from first idea to full transformation.",
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

        {/* ——— Difference + values (compact band) ——— */}
        <Reveal className="mt-16">
          <div className="rounded-3xl border border-border bg-white p-7 shadow-sm sm:p-9">
            <div className="grid gap-7 md:grid-cols-3">
              {difference.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-flame-600">
                    <item.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-800">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
              <ul className="flex flex-wrap items-center gap-2" aria-label="Our core values">
                {values.map((value) => (
                  <li
                    key={value.label}
                    className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-navy-700"
                  >
                    <value.icon className="h-3.5 w-3.5 text-flame-600" aria-hidden="true" />
                    {value.label}
                  </li>
                ))}
              </ul>
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-flame-600">
                Our promise — build for today, prepare for tomorrow.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
