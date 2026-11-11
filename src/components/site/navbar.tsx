"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(10,33,64,0.25)] backdrop-blur-lg border-b border-border"
          : "bg-white/75 backdrop-blur-md border-b border-white/40"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-[76px]">
        {/* Logo */}
        <Link href="/" aria-label={site.legalName} className="flex items-center gap-2.5">
          <Image
            src="/logo-full.png"
            alt={`${site.legalName} logo`}
            width={158}
            height={105}
            priority
            className="h-11 w-auto md:h-[52px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy-800/80 transition-colors hover:bg-secondary hover:text-navy-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-navy-700/25 text-navy-800 hover:bg-secondary hover:text-navy-800"
          >
            <a href={whatsappLink("Hello Morlix Brand Partners, I'd like to make an enquiry.")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button asChild className="rounded-full bg-gradient-flame text-white shadow-lg shadow-flame-500/30 hover:opacity-90">
            <a href="#contact">
              <CalendarCheck className="h-4 w-4" />
              Book a Free Consultation
            </a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" className="rounded-full" aria-label="Open menu">
              <Menu className="h-5 w-5 text-navy-800" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
            <SheetHeader className="border-b border-border px-6 py-5">
              <SheetTitle asChild>
                <div>
                  <Image
                    src="/logo-full.png"
                    alt={`${site.legalName} logo`}
                    width={140}
                    height={93}
                    className="h-11 w-auto"
                  />
                  <span className="sr-only">{site.legalName}</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border px-2 pt-5">
                <SheetClose asChild>
                  <Button asChild className="h-12 rounded-full bg-gradient-flame text-white shadow-lg shadow-flame-500/30">
                    <a href="#contact">
                      <CalendarCheck className="h-4 w-4" />
                      Book a Free Consultation
                    </a>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="outline" className="h-12 rounded-full border-navy-700/25 text-navy-800">
                    <a href={whatsappLink("Hello Morlix Brand Partners, I'd like to make an enquiry.")} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
