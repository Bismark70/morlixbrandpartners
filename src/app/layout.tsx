import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
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
    "We combine strategic thinking, creative expertise and digital technology to help businesses and organisations build stronger brands, expand their digital presence and achieve sustainable growth.",
  keywords: [
    "brand development",
    "digital solutions",
    "social media management",
    "web design and maintenance",
    "digital marketing",
    "SEO",
    "email marketing automation",
    "brand strategy",
    "creative design",
    "AI automation",
    "Morlix Brand",
  ],
  authors: [{ name: site.legalName }],
  icons: {
    icon: "/favicon-64.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${site.legalName} — ${site.tagline}`,
    description:
      "We combine strategic thinking, creative expertise and digital technology to help businesses and organisations build stronger brands, expand their digital presence and achieve sustainable growth.",
    siteName: site.legalName,
    type: "website",
    images: [{ url: "/logo-full.png", width: 720, height: 479 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: "Building Brands. Advancing Business",
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
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
