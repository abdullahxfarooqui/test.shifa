import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import type { SiteGraphSchema } from "@/lib/schema-types";
import { stringifySchema } from "@/lib/schema-types";

const description =
  "Shifa International Hospitals is the best JCI-accredited hospital in Islamabad, Pakistan. Expert consultants across 45+ specialties including oncology, cardiology, neurology, orthopedics, and transplant services.";

export const metadata: Metadata = {
  title: { absolute: "Best Hospital in Islamabad | JCI-Accredited | Shifa International Hospitals" },
  description,
  keywords: [
    "best hospital in Islamabad",
    "JCI accredited hospital Pakistan",
    "Shifa International Hospitals",
    "hospital Islamabad",
    "specialist doctors Islamabad",
    "cancer treatment Pakistan",
    "cardiac surgery Islamabad",
    "neurology hospital Pakistan",
  ],
  alternates: {
    canonical: "https://www.shifa.com.pk",
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
        alternateName: "Shifa International",
        url: "https://www.shifa.com.pk",
        logo: "https://www.shifa.com.pk/Shifa-logo.png",
        image: "https://www.shifa.com.pk/Shifa-logo.png",
        telephone: "+92-51-8464646",
        email: "info@shifa.com.pk",
        foundingDate: "1987",
        numberOfBeds: 600,
        description: "JCI-accredited quaternary care hospital in Islamabad, Pakistan with 45+ medical specialties, advanced diagnostics, and internationally trained consultant physicians.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pitras Bukhari Road, H-8/4",
          addressLocality: "Islamabad",
          addressRegion: "Islamabad Capital Territory",
          postalCode: "44000",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 33.6844,
          longitude: 73.0479,
        },
        openingHours: "Mo-Su 00:00-24:00",
        priceRange: "$$",
        currenciesAccepted: "PKR",
        paymentAccepted: "Cash, Credit Card, Insurance",
        medicalSpecialty: [
          "Oncology",
          "Cardiology",
          "Neurology",
          "Orthopedics",
          "Transplant Surgery",
          "Endocrinology",
          "Nephrology",
          "Gastroenterology",
          "Pulmonology",
          "Radiology",
        ],
        availableService: [
          { "@type": "MedicalTherapy", name: "Cancer Treatment" },
          { "@type": "MedicalTherapy", name: "Cardiac Surgery" },
          { "@type": "MedicalTherapy", name: "Organ Transplant" },
          { "@type": "MedicalTherapy", name: "Neurosurgery" },
        ],
        accreditation: "Joint Commission International (JCI) Gold Seal",
        sameAs: [
          "https://www.facebook.com/ShifaInternationalHospitals",
          "https://twitter.com/shifahospitals",
          "https://www.linkedin.com/company/shifa-international-hospitals",
        ],
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
