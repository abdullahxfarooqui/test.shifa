import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import type { SiteGraphSchema } from "@/lib/schema-types";
import { stringifySchema } from "@/lib/schema-types";

const description =
  "Shifa International Hospitals: JCI-accredited care, 45+ specialties, and expert consultants in Islamabad and Faisalabad.";

export const metadata: Metadata = {
  title: { absolute: "Shifa International Hospitals | Healthcare in Pakistan" },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shifa International Hospitals | Healthcare in Pakistan",
    description,
    url: "https://www.shifa.com.pk",
    type: "website",
    locale: "en_PK",
    siteName: "Shifa International Hospitals",
    images: [
      {
        // TODO: replace with real Shifa photography
        url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1800&q=80",
        width: 1800,
        height: 1000,
        alt: "South Asian doctors providing patient care at Shifa International Hospitals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifa International Hospitals | Healthcare in Pakistan",
    description,
    images: [
      // TODO: replace with real Shifa photography
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1800&q=80",
    ],
  },
};

export default function Home() {
  const siteGraphSchema: SiteGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hospital",
        "@id": "https://www.shifa.com.pk/#organization",
        name: "Shifa International Hospitals",
        url: "https://www.shifa.com.pk",
        telephone: "+92-51-8464646",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pitras Bukhari Road, H-8/4",
          addressLocality: "Islamabad",
          addressRegion: "Islamabad Capital Territory",
          addressCountry: "PK",
        },
        medicalSpecialty: ["Oncology", "Cardiology", "Neurology", "Orthopedics"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.shifa.com.pk/#website",
        url: "https://www.shifa.com.pk",
        name: "Shifa International Hospitals",
        publisher: { "@id": "https://www.shifa.com.pk/#organization" },
        inLanguage: "en-PK",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.shifa.com.pk/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema(siteGraphSchema),
        }}
      />
      <HomePage />
    </>
  );
}
