import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { site, services } from "@/lib/site";

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main — compact single band */}
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1fr_0.9fr] lg:gap-10">
          {/* Brand */}
          <div className="flex items-start gap-3">
            <Image
              src="/logo-emblem.png"
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 shrink-0"
            />
            <div>
              <p className="font-display text-base font-bold leading-tight tracking-wide">
                MORLIX <span className="text-gradient-flame">BRAND PARTNERS</span>
              </p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50">
                Strategy · Creativity · Technology · Innovation · Impact
              </p>
              <p className="mt-3 text-sm font-semibold text-glow-amber">
                {site.tagline}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/85">
              Company
            </h3>
            <ul className="mt-3.5 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-glow-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services — two-column grid keeps the footer short */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/85">
              Services
            </h3>
            <ul className="mt-3.5 grid gap-x-4 gap-y-2 sm:grid-cols-1 lg:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/#services"
                    className="text-sm text-white/60 transition-colors hover:text-glow-amber"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — email only */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/85">
              Get In Touch
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="group mt-3.5 flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-glow-amber"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40 group-hover:text-glow-amber" aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-4 sm:flex-row">
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
