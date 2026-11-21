import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { VisionMission } from "@/components/site/vision-mission";

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
          </div>

          {/* Vision & Mission — click a card to reveal the text */}
          <Reveal delay={0.1}>
            <VisionMission />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
