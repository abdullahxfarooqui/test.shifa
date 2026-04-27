import type { Metadata } from "next";

import { HealthCalculators } from "@/components/shared/HealthCalculators";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Health Calculators | Health Library",
  description: "Interactive calculator hub for BMI, blood pressure risk, diabetes risk, and heart age.",
  alternates: { canonical: "https://www.shifa.com.pk/health-library/calculators" },
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
