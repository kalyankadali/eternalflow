import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  other: {
    "theme-color": "#fff7ed",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-ef-accent focus:px-3.5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ef-on-accent"
          >
            Skip to content
          </a>
          <LocalBusinessJsonLd />
          <SiteHeader />
          <div className="flex flex-1 flex-col pb-24 md:pb-0">
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
          <WhatsAppFab />
          <StickyMobileBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
