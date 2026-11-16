"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  User,
  ChevronDown,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/reveal";
import { site, services } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  email: z.string().email("Please enter a valid email address").max(200),
  service: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)").max(5000),
});

type FormValues = z.infer<typeof formSchema>;

const inputClass =
  "h-12 rounded-xl border-border bg-muted/40 pl-10 text-[15px] transition-colors placeholder:text-muted-foreground/60 focus-visible:border-flame-500/60 focus-visible:ring-2 focus-visible:ring-flame-500/25";

function FieldIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <Icon
      className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground/70"
      aria-hidden="true"
    />
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", service: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send");
      }
      setSubmitted(true);
      reset();
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out — we'll get back to you within one business day.",
      });
    } catch {
      toast({
        title: "Could not send your message",
        description: "Please try again in a moment, or email us directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="relative bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* ——— Email-first contact column ——— */}
          <div className="flex flex-col gap-4">
            <Reveal>
              <a
                href={`mailto:${site.email}?subject=Project%20enquiry%20for%20Morlix%20Brand`}
                className="group relative block overflow-hidden rounded-3xl bg-gradient-navy p-7 text-white shadow-xl shadow-navy-900/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/30 sm:p-8"
              >
                <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
                <span
                  className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-flame-500/25 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
                    <Mail className="h-6 w-6 text-glow-amber" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    Email us — the fastest way to reach us
                  </p>
                  <p className="mt-2 break-all font-display text-xl font-bold leading-snug sm:text-2xl">
                    {site.email}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-flame-500/90 group-hover:ring-flame-400/50">
                    Open your mail app
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.06}>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#25d366]/40 hover:shadow-xl hover:shadow-[#25d366]/10 dark:border-white/10 dark:bg-card dark:hover:border-[#25d366]/50 sm:p-8"
              >
                <span
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#25d366]/10 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#25d366]/10 ring-1 ring-[#25d366]/25 transition-transform duration-300 group-hover:scale-105">
                    <MessageCircle className="h-6 w-6 text-[#25d366]" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Chat with us on WhatsApp
                  </p>
                  <p className="mt-2 font-display text-xl font-bold leading-snug text-navy-800 dark:text-slate-100 sm:text-2xl">
                    {site.whatsapp}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25d366]/10 px-4 py-2 text-sm font-semibold text-navy-800 dark:text-slate-100 ring-1 ring-[#25d366]/30 transition-colors duration-300 group-hover:bg-[#25d366] group-hover:text-white">
                    Start a chat
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6 dark:border-white/10 dark:bg-card">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy-700 dark:bg-white/10 dark:text-slate-200">
                    <MapPin className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Where we work</p>
                    <p className="font-display text-base font-semibold text-navy-800 dark:text-slate-100">{site.location}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-4 border-t border-border pt-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy-700 dark:bg-white/10 dark:text-slate-200">
                    <Clock className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Response time</p>
                    <p className="font-display text-base font-semibold text-navy-800 dark:text-slate-100">{site.responseNote}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ——— Form ——— */}
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-navy-900/[0.07] dark:border-white/10 dark:bg-card dark:shadow-black/40">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-flame" aria-hidden="true" />

              {submitted ? (
                <div className="flex min-h-[560px] flex-col items-center justify-center px-6 text-center" role="status">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    <CheckCircle2 className="h-8 w-8 text-flame-600" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy-800 dark:text-slate-100">
                    Thank you — your message is in!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    We&apos;ve received your enquiry and will respond within one
                    business day. You can also write to us directly at{" "}
                    <a href={`mailto:${site.email}`} className="font-semibold text-flame-600 hover:underline">
                      {site.email}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    className="mt-7 rounded-full border-navy-700/25 text-navy-800 dark:text-slate-100 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <div className="p-7 sm:p-9">
                  {/* Form header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-flame-600">
                        Start a project
                      </p>
                      <h3 className="mt-1.5 font-display text-2xl font-bold text-navy-800 dark:text-slate-100">
                        Tell us about your project
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-navy-800 dark:text-slate-100">
                      <Clock className="h-3.5 w-3.5 text-flame-600" aria-hidden="true" />
                      Reply within 1 business day
                    </span>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-navy-800 dark:text-slate-100">
                          Full name <span className="text-flame-600">*</span>
                        </Label>
                        <div className="relative">
                          <FieldIcon icon={User} />
                          <Input
                            id="name"
                            placeholder="Jane Mensah"
                            autoComplete="name"
                            className={inputClass}
                            aria-invalid={!!errors.name}
                            {...register("name")}
                          />
                        </div>
                        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-navy-800 dark:text-slate-100">
                          Email address <span className="text-flame-600">*</span>
                        </Label>
                        <div className="relative">
                          <FieldIcon icon={Mail} />
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            autoComplete="email"
                            className={inputClass}
                            aria-invalid={!!errors.email}
                            {...register("email")}
                          />
                        </div>
                        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium text-navy-800 dark:text-slate-100">
                        I&apos;m interested in
                      </Label>
                      <div className="relative">
                        <select
                          id="service"
                          className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-border bg-muted/40 px-4 text-[15px] text-foreground shadow-none outline-none transition-colors hover:border-navy-700/30 focus-visible:border-flame-500/60 focus-visible:ring-2 focus-visible:ring-flame-500/25"
                          {...register("service")}
                        >
                          <option value="">Not sure yet — advise me</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground/70"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <Label htmlFor="message" className="text-sm font-medium text-navy-800 dark:text-slate-100">
                          Tell us about your project <span className="text-flame-600">*</span>
                        </Label>
                        <span className="text-xs text-muted-foreground">A few sentences is plenty</span>
                      </div>
                      <Textarea
                        id="message"
                        rows={9}
                        placeholder="What are you building, improving, or trying to achieve? Any timelines or goals worth mentioning?"
                        className="min-h-[210px] resize-none rounded-xl border-border bg-muted/40 text-[15px] transition-colors placeholder:text-muted-foreground/60 focus-visible:border-flame-500/60 focus-visible:ring-2 focus-visible:ring-flame-500/25"
                        aria-invalid={!!errors.message}
                        {...register("message")}
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                    </div>

                    <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground sm:max-w-[15rem]">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-navy-700/50 dark:text-slate-400" aria-hidden="true" />
                        Your details stay private — used only to respond to your enquiry.
                      </p>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 shrink-0 rounded-full bg-gradient-flame px-9 text-base text-white shadow-lg shadow-flame-500/30 transition-transform hover:scale-[1.02] disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
