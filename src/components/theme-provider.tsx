"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Class-based theming (`.dark` on <html>).
 * defaultTheme stays "light" — the site's original design — and visitors
 * can flip to dark with the navbar toggle. Choice persists in localStorage.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
