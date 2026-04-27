import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shifa.com.pk"),
  title: {
    default: "Shifa International Hospitals | Healthcare with Compassion in Pakistan",
    template: "%s | Shifa International Hospitals",
  },
  description:
    "Shifa International Hospitals offers trusted tertiary care in Pakistan with advanced diagnostics, specialist treatment, and patient-centered services in Islamabad.",
  openGraph: {
    title: "Shifa International Hospitals | Healthcare with Compassion in Pakistan",
    description:
      "Explore specialist-led care, advanced diagnostics, and patient-first services at Shifa International Hospitals in Islamabad.",
    type: "website",
    locale: "en_PK",
    url: "https://www.shifa.com.pk",
    siteName: "Shifa International Hospitals",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifa International Hospitals | Healthcare with Compassion in Pakistan",
    description:
      "Explore specialist-led care, advanced diagnostics, and patient-first services at Shifa International Hospitals in Islamabad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--brand-bg)] font-sans text-[var(--text-dark)]">
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
