import type { Metadata } from "next";

import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: { absolute: "Doctor Interviews | Specialist Insights | Shifa International Hospitals" },
  description: "Watch and read expert health interviews from Shifa International Hospitals consultants. Specialist guidance on cancer, heart disease, diabetes, neurology, and more.",
  keywords: ["doctor interviews Pakistan", "specialist health advice Islamabad", "Shifa doctors insights"],
  alternates: { canonical: "https://www.shifa.com.pk/health-library/interviews" },
  openGraph: {
    title: "Doctor Interviews | Specialist Insights | Shifa International Hospitals",
    description: "Expert health interviews from Shifa International Hospitals consultants covering cancer, heart disease, diabetes, neurology, and more.",
    url: "https://www.shifa.com.pk/health-library/interviews",
    siteName: "Shifa International Hospitals",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor Interviews | Shifa International Hospitals",
    description: "Watch specialist health interviews from Shifa consultants across oncology, cardiology, diabetes, and neurology.",
  },
};

export default function InterviewsPage() {
  return (
    <main>
      <SectionWrapper title="Doctor Interviews" description="Expert conversations and health guidance from specialists.">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          Doctor interview content is published by Shifa International Hospitals specialists. New interviews are added regularly across oncology, cardiology, neurology, diabetes, and patient wellness topics.
        </div>
      </SectionWrapper>
    </main>
  );
}
