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
          text: "Shifa International Hospitals offers 45+ medical specialties across surgical, medical, diagnostic, and critical care disciplines. Key departments include Oncology, Cardiology, Neurology, Orthopedics, Transplant Services, Endocrinology, Nephrology, Gastroenterology, Pulmonology, and advanced Radiology and Imaging. Each specialty is led by FCPS and fellowship-trained consultants and supported by dedicated nursing, diagnostics, and rehabilitation teams operating from the main Islamabad campus.",
        },
      },
      {
        "@type": "Question",
        name: "How to choose the right specialist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start by identifying your primary symptom — for example, chest pain directs you to Cardiology, joint problems to Orthopedics, and hormonal issues to Endocrinology. The Shifa website provides specialty descriptions, consultant profiles with qualifications and availability, and an online booking system. You can also call our helpline at 051-8464646 to speak with a patient services advisor who will guide you to the right department based on your clinical situation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer second opinions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Shifa International Hospitals provides formal second-opinion consultations across all major specialties. Patients who have received a diagnosis or treatment recommendation elsewhere can request a review of their case, including pathology reports, imaging studies, and prior treatment records. Our consultants offer independent assessments to confirm, refine, or propose alternatives to the existing plan. Appointments can be booked online or by contacting the relevant specialty department directly through the patient services team.",
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