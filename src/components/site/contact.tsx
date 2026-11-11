"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { site, services, whatsappLink } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  email: z.string().email("Please enter a valid email address").max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)").max(5000),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
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
        description: "Please try again, or reach us directly on WhatsApp.",
        variant: "destructive",
      });
    }
  }

  const channels = [
    {
      icon: Mail,
      label: "Email us",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Phone,
      label: "Call us",
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us instantly",
      href: whatsappLink("Hello Morlix Brand Partners, I'd like to make an enquiry."),
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s build{" "}
              <span className="text-gradient-flame">what&apos;s next</span> for your brand.
            </>
          }
          description="Tell us where your organization is and where you want it to be. We'll respond with practical, tailored next steps."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* ——— Contact channels ——— */}
          <div className="flex flex-col gap-4">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 0.07}>
                <a
                  href={channel.href}
                  target={channel.label === "WhatsApp" ? "_blank" : undefined}
                  rel={channel.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500/40 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-ocean-500 text-white shadow-md shadow-navy-700/20 transition-transform duration-300 group-hover:scale-105">
                    <channel.icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {channel.label}
                    </span>
                    <span className="block font-display text-base font-semibold text-navy-800">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.22}>
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy-700">
                    <MapPin className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Where we work</p>
                    <p className="font-display text-base font-semibold text-navy-800">{site.location}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-4 border-t border-border pt-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy-700">
                    <Clock className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Response time</p>
                    <p className="font-display text-base font-semibold text-navy-800">{site.responseNote}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ——— Form ——— */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-xl shadow-navy-900/[0.07] sm:p-9">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-flame" aria-hidden="true" />

              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    <CheckCircle2 className="h-8 w-8 text-flame-600" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy-800">
                    Thank you — your message is in!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    We&apos;ve received your enquiry and will respond within one
                    business day. Need urgent attention? Message us on WhatsApp anytime.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <Button asChild className="rounded-full bg-gradient-flame text-white shadow-lg shadow-flame-500/25">
                      <a href={whatsappLink("Hello Morlix Brand Partners, I just sent an enquiry through your website.")} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" />
                        Continue on WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" className="rounded-full border-navy-700/25 text-navy-800" onClick={() => setSubmitted(false)}>
                      Send another message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-navy-800">
                        Full name <span className="text-flame-600">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Jane Mensah"
                        autoComplete="name"
                        className="h-11 rounded-xl"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-navy-800">
                        Email address <span className="text-flame-600">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        autoComplete="email"
                        className="h-11 rounded-xl"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-navy-800">
                        Phone / WhatsApp <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+233 55 000 0000"
                        autoComplete="tel"
                        className="h-11 rounded-xl"
                        {...register("phone")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium text-navy-800">
                        I&apos;m interested in
                      </Label>
                      <select
                        id="service"
                        className="h-11 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/60"
                        {...register("service")}
                      >
                        <option value="">Not sure yet — advise me</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-navy-800">
                      Tell us about your project <span className="text-flame-600">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="What are you building, improving, or trying to achieve? Any timelines or goals worth mentioning?"
                      className="resize-none rounded-xl"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-full bg-gradient-flame text-base text-white shadow-lg shadow-flame-500/30 transition-transform hover:scale-[1.01] disabled:opacity-70 sm:w-auto sm:px-10"
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
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    By submitting, you agree to be contacted about your enquiry. We
                    treat your details with strict confidentiality.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
