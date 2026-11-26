"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type VisionMissionCardProps = {
  tone: "navy" | "light";
  title: string;
  children: React.ReactNode;
};

/**
 * Collapsible Vision / Mission card — the heading is always visible,
 * the body only appears once the card is clicked.
 */
function VisionMissionCard({ tone, title, children }: VisionMissionCardProps) {
  const [open, setOpen] = useState(false);
  const navy = tone === "navy";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl transition-shadow duration-300",
        navy
          ? "bg-gradient-navy text-white shadow-xl shadow-navy-900/25"
          : "border border-border bg-white shadow-sm dark:border-white/10 dark:bg-card"
      )}
    >
      {navy && <div className="bg-dots absolute inset-0 opacity-70" aria-hidden="true" />}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative flex w-full items-center justify-between gap-4 p-8 text-left"
      >
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            navy ? "text-glow-amber" : "text-flame-600"
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
            navy
              ? "border-white/40 text-white"
              : "border-navy-700/20 text-navy-700 dark:border-white/15 dark:text-slate-200"
          )}
          aria-hidden="true"
        >
          <Plus className={cn("h-4.5 w-4.5", open && "hidden")} strokeWidth={2.2} />
          <Minus className={cn("h-4.5 w-4.5", !open && "hidden")} strokeWidth={2.2} />
        </span>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p
            className={cn(
              "px-8 pb-8 font-display text-xl font-semibold leading-relaxed",
              navy ? "text-white" : "text-navy-800 dark:text-slate-100"
            )}
          >
            {children}
          </p>
        </div>
      </div>
    </article>
  );
}

export function VisionMission() {
  return (
    <div className="flex flex-col gap-5 lg:pt-4">
      <VisionMissionCard tone="navy" title="Our Vision">
        To become a leading global brand development and digital solutions
        company, recognised for driving business growth through strategic
        innovation, creativity and technology.
      </VisionMissionCard>
      <VisionMissionCard tone="light" title="Our Mission">
        To equip businesses and organisations with strategic branding, creative
        communication and integrated digital solutions that strengthen their
        market presence and advance their objectives.
      </VisionMissionCard>
    </div>
  );
}
