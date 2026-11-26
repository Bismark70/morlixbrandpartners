"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section className="relative overflow-hidden bg-gradient-navy text-white">
      {/* Decorative layers */}
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-40 top-24 h-[480px] w-[480px] rounded-full bg-ocean-500/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-flame-500/20 blur-[140px]"
        aria-hidden="true"
      />
      {/* Fine top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow-amber/60 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 pb-16 pt-32 md:pt-40 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:pb-24">
          {/* ——— Copy ——— */}
          <div>
            <motion.div {...item(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-glow-amber">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Brand • Digital • Innovation Partner
              </span>
            </motion.div>

            <motion.h1
              {...item(0.08)}
              className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.6rem]"
            >
              Building Brands.
              <br />
              <span className="text-gradient-flame">Advancing Business</span>
            </motion.h1>

            <motion.p {...item(0.16)} className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              We combine strategic thinking, creative expertise and digital
              technology to help businesses and organisations build stronger
              brands, expand their digital presence and achieve sustainable
              growth.
            </motion.p>

            {/* Pillars */}
            <motion.ul {...item(0.24)} className="mt-7 flex flex-wrap gap-2" aria-label="Our pillars">
              {site.pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/80"
                >
                  {pillar}
                </li>
              ))}
            </motion.ul>

            <motion.div {...item(0.32)} className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-13 rounded-full bg-gradient-flame px-7 text-base text-white shadow-xl shadow-flame-600/30 transition-transform hover:scale-[1.02]">
                <Link href="/contact">
                  <CalendarCheck className="h-5 w-5" />
                  Book a Free Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-white/25 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#services">
                  Explore Our Services
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* ——— Emblem with orbit ——— */}
          <motion.div
            {...item(0.2)}
            className="relative mx-auto hidden w-full max-w-[440px] sm:block lg:max-w-[520px]"
            aria-hidden="true"
          >
            <div className="relative aspect-square">
              {/* glow */}
              <div className="absolute inset-8 rounded-full bg-ocean-400/20 blur-3xl" />
              {/* rotating orbit ellipse — a nod to the logo swoosh */}
              <svg
                viewBox="0 0 500 500"
                className="animate-orbit absolute inset-0 h-full w-full"
                style={{ animationDuration: "30s" }}
              >
                <defs>
                  <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbae3c" />
                    <stop offset="55%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#e8481d" />
                  </linearGradient>
                </defs>
                <ellipse
                  cx="250"
                  cy="250"
                  rx="238"
                  ry="118"
                  fill="none"
                  stroke="url(#orbitGrad)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray="1300 240"
                  transform="rotate(-18 250 250)"
                />
              </svg>
              <div className="absolute inset-[52px] rounded-full border border-white/10" />
              <div className="absolute inset-[52px] rounded-full border border-dashed border-glow-amber/25" />
              {/* emblem */}
              <div className="absolute inset-0 flex items-center justify-center p-16">
                <div className={reduce ? "" : "animate-float"}>
                  <Image
                    src="/logo-emblem.png"
                    alt=""
                    width={440}
                    height={440}
                    priority
                    className="h-auto w-full max-w-[300px] drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)] lg:max-w-[340px]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
