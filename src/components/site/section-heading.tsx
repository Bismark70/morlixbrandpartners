import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title?: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Consistent section header: eyebrow chip → display title → lead paragraph.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
          dark
            ? "border-white/15 bg-white/5 text-glow-amber"
            : "border-flame-500/25 bg-accent text-flame-600"
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-glow-amber" : "bg-flame-500")} />
        {eyebrow}
      </span>
      {title ? (
        <h2
          className={cn(
            "mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]",
            dark ? "text-white" : "text-navy-800 dark:text-slate-100"
          )}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-muted-foreground",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
