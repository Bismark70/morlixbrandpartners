"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
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
          ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(10,33,64,0.25)] backdrop-blur-lg border-b border-border dark:bg-navy-950/90 dark:border-white/10 dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-white/75 backdrop-blur-md border-b border-white/40 dark:bg-navy-950/60 dark:border-white/10"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-[76px]">
        {/* Logo */}
        <Link href="/" aria-label={site.legalName} className="flex items-center gap-2.5">
          <span className="dark:rounded-xl dark:bg-white dark:p-1">
            <Image
              src="/logo-full.png"
              alt={`${site.legalName} logo`}
              width={158}
              height={105}
              priority
              className="h-11 w-auto md:h-[52px]"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy-800/80 transition-colors hover:bg-secondary hover:text-navy-800 dark:text-slate-200/80 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild className="rounded-full bg-gradient-flame text-white shadow-lg shadow-flame-500/30 hover:opacity-90">
            <Link href="/contact">
              <CalendarCheck className="h-4 w-4" />
              Book a Free Consultation
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" className="rounded-full border-navy-700/25 text-navy-800 dark:border-white/15 dark:bg-white/5 dark:text-slate-200" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
            <SheetHeader className="border-b border-border px-6 py-5">
              <SheetTitle asChild>
                <div>
                  <span className="dark:rounded-xl dark:bg-white dark:p-1">
                    <Image
                      src="/logo-full.png"
                      alt={`${site.legalName} logo`}
                      width={140}
                      height={93}
                      className="h-11 w-auto"
                    />
                  </span>
                  <span className="sr-only">{site.legalName}</span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-secondary dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border px-2 pt-5">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-medium text-navy-800 dark:text-slate-200">
                    Appearance
                  </span>
                  <ThemeToggle />
                </div>
                <SheetClose asChild>
                  <Button asChild className="h-12 rounded-full bg-gradient-flame text-white shadow-lg shadow-flame-500/30">
                    <Link href="/contact">
                      <CalendarCheck className="h-4 w-4" />
                      Book a Free Consultation
                    </Link>
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
