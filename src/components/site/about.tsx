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
                  Strategy Meets Creativity.{" "}
                  <span className="text-gradient-ocean">Technology Drives Growth.</span>
                </>
              }
            />
            <Reveal delay={0.08}>
              <div className="mt-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  <strong className="font-semibold text-navy-800 dark:text-slate-100">MORLIX</strong> is a brand
                  development and digital solutions company delivering integrated
                  services that help businesses and organisations strengthen their
                  identity, communicate effectively and compete in an evolving
                  digital environment.
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
