import type { Metadata } from "next";

import { CardGrid } from "@/components/shared/CardGrid";
import { HeroSection } from "@/components/shared/HeroSection";
import { FormBuilder } from "@/components/shared/FormBuilder";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: { absolute: "Corporate Health Services | Shifa International Hospitals" },
  description: "Corporate health packages, executive screening, and employee wellness programs.",
  alternates: { canonical: "https://www.shifa.com.pk/corporate" },
};

export default function CorporatePage() {
  return (
    <main>
      <HeroSection
        data={{
          headline: "Investing in Your Team's Health",
          subheadline: "Tailored employee wellness and screening with specialist support.",
          backgroundType: "gradient",
          ctas: [
            { label: "Get a Corporate Package", href: "#contact", variant: "primary" },
            { label: "View Packages", href: "#packages", variant: "ghost" },
          ],
        }}
      />
      <SectionWrapper title="Corporate Benefits">
        <CardGrid
          items={[
            { id: "absenteeism", title: "Reduced Absenteeism", description: "Early detection lowers sick days and long-term costs." },
            { id: "priority", title: "Priority Access", description: "Priority booking across 45+ specialities." },
            { id: "onsite", title: "Flexible On-site Options", description: "Basic screenings and awareness sessions at your office." },
            { id: "insurance", title: "Insurance Panel", description: "Panel integration with major health insurance providers." },
          ]}
        />
      </SectionWrapper>
      <SectionWrapper title="Packages" className="scroll-mt-24">
        <div id="packages" />
        <CardGrid
          items={[
            {
              id: "basic",
              title: "Basic Corporate Package",
              description: "Blood profile, diabetes screen, blood pressure, and physician consultation.",
              meta: "Call for pricing",
            },
            {
              id: "essential",
              title: "Essential Corporate Package",
              description: "Expanded blood profile, hepatitis and thyroid screening, cardiac risk review.",
              meta: "Call for pricing",
            },
            {
              id: "comprehensive",
              title: "Comprehensive Corporate Package",
              description: "Full diagnostics, nutrition consult, and executive report.",
              meta: "Call for pricing",
            },
          ]}
        />
      </SectionWrapper>
      <SectionWrapper title="Corporate Inquiry" className="scroll-mt-24">
        <div id="contact" />
        <FormBuilder
          fields={[
            { name: "companyName", type: "text", label: "Company Name", required: true },
            { name: "contactPerson", type: "text", label: "Contact Person", required: true },
            { name: "email", type: "email", label: "Business Email", required: true },
            { name: "phone", type: "tel", label: "Phone Number", required: true },
            {
              name: "employeeCount",
              type: "select",
              label: "Employees",
              options: ["1-50", "51-200", "201-500", "500+"],
              required: true,
            },
            { name: "message", type: "textarea", label: "Additional Requirements" },
          ]}
          submitLabel="Request Corporate Quote"
        />
      </SectionWrapper>
    </main>
  );
}
