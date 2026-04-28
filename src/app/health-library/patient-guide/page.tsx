import Link from "next/link";
import type { Metadata } from "next";

import { SectionWrapper } from "@/components/shared/SectionWrapper";

const guides = [
  { slug: "dengue-fever", title: "Dengue Fever" },
  { slug: "diabetes-management", title: "Diabetes Management" },
  { slug: "hypertension", title: "Hypertension" },
  { slug: "stroke-awareness", title: "Stroke Awareness" },
  { slug: "knee-pain", title: "Knee Pain" },
];

export const metadata: Metadata = {
  title: { absolute: "Patient Guide A–Z | Conditions & Symptoms | Shifa International Hospitals" },
  description: "A to Z patient guides covering dengue fever, diabetes, hypertension, stroke, and knee pain. Trusted health education from Shifa International Hospitals, Islamabad.",
  keywords: ["patient guide Pakistan", "health guide Islamabad", "dengue fever guide", "diabetes patient education Pakistan"],
  alternates: { canonical: "https://www.shifa.com.pk/health-library/patient-guide" },
  openGraph: {
    title: "Patient Guide A–Z | Conditions & Symptoms | Shifa International Hospitals",
    description: "A to Z patient guides covering dengue fever, diabetes, hypertension, stroke, and knee pain.",
    url: "https://www.shifa.com.pk/health-library/patient-guide",
    siteName: "Shifa International Hospitals",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Guide | Shifa International Hospitals",
    description: "Patient education guides covering dengue fever, diabetes, hypertension, stroke, and knee pain.",
  },
};

export default function PatientGuidePage() {
  return (
    <main>
      <SectionWrapper title="Patient Guide A to Z" description="Condition and symptom guidance from Shifa health education resources.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/health-library/patient-guide/${guide.slug}`} className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-800 hover:text-[#0b5fa5]">
              {guide.title}
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
