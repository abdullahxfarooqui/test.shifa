import type { Metadata } from "next";

import { OncologyPage } from "@/components/oncology/oncology-page";

const description =
  "Get expert oncology care in Islamabad at Shifa Cancer Center with advanced diagnostics, multidisciplinary treatment, and compassionate support from diagnosis to recovery.";

export const metadata: Metadata = {
  title: { absolute: "Oncology | Cancer Care in Islamabad | Shifa International Hospitals" },
  description,
  keywords: [
    "oncology in islamabad",
    "cancer treatment pakistan",
    "shifa oncology",
    "radiation oncology",
    "medical oncology",
    "cancer diagnostics",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/specialities/oncology",
  },
  openGraph: {
    title: "Oncology | Shifa International Hospitals – Cancer Care in Islamabad",
    description,
    url: "https://www.shifa.com.pk/specialities/oncology",
    siteName: "Shifa International Hospitals",
    type: "website",
    locale: "en_PK",
    images: [
      {
        // TODO: replace with real Shifa photography
        url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=80",
        width: 1800,
        height: 1000,
        alt: "South Asian oncology specialist at Shifa Cancer Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oncology | Shifa International Hospitals – Cancer Care in Islamabad",
    description,
    images: [
      // TODO: replace with real Shifa photography
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=80",
    ],
  },
};

export default function OncologySpecialtyPage() {
  return <OncologyPage />;
}