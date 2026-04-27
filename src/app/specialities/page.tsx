import type { Metadata } from "next";
import { SpecialitiesPageView } from "@/components/specialities/specialities-page";

const description =
  "Explore 45+ medical specialties at Shifa International Hospitals with expert consultants, advanced diagnostics, and coordinated treatment pathways in Pakistan.";

export const metadata: Metadata = {
  title: { absolute: "Medical Specialties in Islamabad | 45+ Departments | Shifa International Hospitals" },
  description,
  alternates: {
    canonical: "/specialities",
  },
  openGraph: {
    title: "Medical Specialties at Shifa International Hospitals",
    description,
    url: "https://www.shifa.com.pk/specialities",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Specialties at Shifa International Hospitals",
    description,
  },
};

export default function SpecialitiesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What specialties are available at Shifa International Hospitals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shifa offers 45+ specialties, including oncology, cardiology, neurology, orthopedics, transplant services, and advanced diagnostics.",
        },
      },
      {
        "@type": "Question",
        name: "How to choose the right specialist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use symptom-based triage and doctor search filters by specialty and availability to connect with the right consultant.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer second opinions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, specialist second-opinion consultations are available for treatment planning and complex diagnoses.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SpecialitiesPageView />
    </>
  );
}