import type { Metadata } from "next";

import { CardGrid } from "@/components/shared/CardGrid";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Academics and Research | Shifa International Hospitals",
  description:
    "Academic and research programs including postgraduate training, nursing education, and clinical research.",
  alternates: { canonical: "https://www.shifa.com.pk/academics-research" },
};

export default function AcademicsResearchPage() {
  return (
    <main>
      <HeroSection
        data={{
          headline: "Advancing Medicine. Training Tomorrow's Healers.",
          subheadline:
            "Shifa is a recognized institution for postgraduate medical education and clinical research.",
          backgroundType: "gradient",
          ctas: [
            { label: "Training Programs", href: "#programs", variant: "primary" },
            { label: "Research Publications", href: "#research", variant: "ghost" },
          ],
        }}
      />
      <SectionWrapper
        title="Academic Programs"
        description="CPSP-recognized tracks and multidisciplinary clinical education."
        className="scroll-mt-24"
      >
        <div id="programs" />
        <CardGrid
          items={[
            { id: "postgrad", title: "Postgraduate Medical Training", description: "Residency and fellowship programs across specialities." },
            { id: "nursing", title: "Nursing Education", description: "Clinical nursing pathways in institutional collaboration." },
            { id: "allied", title: "Allied Health Training", description: "Structured training in radiology, lab, physiotherapy, and pharmacy." },
            { id: "cme", title: "CME and Workshops", description: "Ongoing specialist masterclasses and clinical workshops." },
          ]}
        />
      </SectionWrapper>
      <SectionWrapper title="Research and Publications" description="Evidence-based clinical research and ethics oversight.">
        <div id="research" className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
          <ul className="space-y-2">
            <li>Clinical research programs led by consultant physicians.</li>
            <li>Contributions to national and international peer-reviewed journals.</li>
            <li>Institutional review board oversight for protocol governance.</li>
          </ul>
          <p className="mt-4 font-medium">Contact: academics@shifa.com.pk</p>
        </div>
      </SectionWrapper>
    </main>
  );
}
