import type { Metadata } from "next";

import { HealthCalculators } from "@/components/shared/HealthCalculators";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: { absolute: "Health Calculators — BMI, Diabetes & Heart Risk | Shifa International Hospitals" },
  description: "Free online health calculators from Shifa International Hospitals: BMI, blood pressure risk, diabetes risk score, and heart age. Evidence-based tools for patients in Pakistan.",
  keywords: ["BMI calculator Pakistan", "diabetes risk calculator", "heart age calculator", "blood pressure risk tool Islamabad"],
  alternates: { canonical: "https://www.shifa.com.pk/health-library/calculators" },
  openGraph: {
    title: "Health Calculators — BMI, Diabetes & Heart Risk | Shifa International Hospitals",
    description: "Free online health calculators from Shifa International Hospitals: BMI, blood pressure risk, diabetes risk score, and heart age.",
    url: "https://www.shifa.com.pk/health-library/calculators",
    siteName: "Shifa International Hospitals",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Calculators | Shifa International Hospitals",
    description: "Free BMI, diabetes risk, heart age, and blood pressure calculators for patients in Pakistan.",
  },
};

export default function CalculatorsPage() {
  return (
    <main>
      <SectionWrapper title="Health Calculators" description="Interactive risk and wellness tools.">
        <HealthCalculators />
      </SectionWrapper>
    </main>
  );
}
