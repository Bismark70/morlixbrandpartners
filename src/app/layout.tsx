import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://morlixbrandpartners.com"
  ),
  title: {
    default: `${site.legalName} — Brand Development, Digital Solutions & Innovation`,
    template: `%s | ${site.legalName}`,
  },
  description:
    "Morlix Brand Partners is a brand development, digital solutions, and business innovation company — combining strategy, creativity, technology, marketing, and data to build stronger brands and meaningful digital growth.",
  keywords: [
    "brand development",
    "digital solutions",
    "social media management",
    "web design and development",
    "digital marketing",
    "SEO",
    "email marketing automation",
    "brand strategy",
    "creative design",
    "Morlix Brand Partners",
  ],
  authors: [{ name: site.legalName }],
  icons: {
    icon: "/favicon-64.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${site.legalName} — ${site.tagline}`,
    description:
      "Strategy. Creativity. Technology. Innovation. Impact. We help organizations build stronger brands and operate more effectively in an increasingly digital world.",
    siteName: site.legalName,
    type: "website",
    images: [{ url: "/logo-full.png", width: 720, height: 479 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description:
      "Brand development, digital solutions, and business innovation — under one partner.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a2140",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
