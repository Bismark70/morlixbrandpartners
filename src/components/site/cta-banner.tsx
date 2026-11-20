import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 text-white sm:py-24">
      {/* decor */}
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-ocean-500/25 blur-[120px]" aria-hidden="true" />
      <div className="absolute -right-20 top-0 h-[300px] w-[300px] rounded-full bg-flame-500/20 blur-[120px]" aria-hidden="true" />
      {/* orbit decoration */}
      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="animate-orbit absolute -right-24 -top-24 h-80 w-80 opacity-30"
        style={{ animationDuration: "40s" }}
      >
        <defs>
          <linearGradient id="ctaOrbit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbae3c" />
            <stop offset="100%" stopColor="#e8481d" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="180" ry="90" fill="none" stroke="url(#ctaOrbit)" strokeWidth="6" transform="rotate(-18 200 200)" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Ready to elevate <span className="text-gradient-flame">your brand?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Book a free consultation — we&apos;ll understand where your organization
            stands, where you want to go, and map the practical steps to get there.
          </p>
          <div className="mt-9 flex justify-center">
            <Button asChild size="lg" className="h-13 rounded-full bg-gradient-flame px-8 text-base text-white shadow-xl shadow-flame-600/30 transition-transform hover:scale-[1.02]">
              <Link href="/contact">
                <CalendarCheck className="h-5 w-5" />
                Book a Free Consultation
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
