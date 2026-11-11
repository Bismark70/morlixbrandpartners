import Image from "next/image";
import { Mail, Phone, MessageCircle, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { site, services, whatsappLink } from "@/lib/site";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
  { label: "Instagram", href: site.social.instagram, icon: Instagram },
  { label: "Facebook", href: site.social.facebook, icon: Facebook },
  { label: "X (Twitter)", href: site.social.x, icon: Twitter },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.7fr_0.9fr_1fr] lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-emblem.png"
                alt=""
                width={56}
                height={56}
                className="h-13 w-13"
              />
              <div>
                <p className="font-display text-lg font-bold leading-tight tracking-wide">
                  MORLIX <span className="text-gradient-flame">BRAND PARTNERS</span>
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                  Strategy · Creativity · Technology · Innovation · Impact
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              A brand development, digital solutions, and business innovation
              company — helping organizations build stronger brands and operate
              more effectively in an increasingly digital world.
            </p>
            <p className="mt-4 font-display text-sm font-semibold text-glow-amber">
              {site.tagline}
            </p>
            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:border-flame-500/60 hover:bg-flame-500/15 hover:text-glow-amber"
                >
                  <s.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white/85">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-glow-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white/85">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-glow-amber"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white/85">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={`mailto:${site.email}`} className="group flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-glow-amber">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40 group-hover:text-glow-amber" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-glow-amber">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40 group-hover:text-glow-amber" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("Hello Morlix Brand Partners!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-glow-amber"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/40 group-hover:text-glow-amber" aria-hidden="true" />
                  WhatsApp us directly
                </a>
              </li>
              <li className="text-sm text-white/60">{site.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-xs text-white/45">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-xs font-medium tracking-[0.18em] text-white/45">
            THINK STRATEGICALLY · BUILD CONFIDENTLY · GROW SUSTAINABLY
          </p>
        </div>
      </div>
    </footer>
  );
}
