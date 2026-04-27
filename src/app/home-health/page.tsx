import type { Metadata } from "next";

import { CardGrid } from "@/components/shared/CardGrid";
import { ContactBand } from "@/components/shared/ContactBand";
import { HeroSection } from "@/components/shared/HeroSection";
import { FormBuilder } from "@/components/shared/FormBuilder";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { StepProcess } from "@/components/shared/StepProcess";
import { homeHealthHero, homeHealthSeo, homeHealthServices } from "@/data/shifa-pages";

export const metadata: Metadata = {
  title: homeHealthSeo.title,
  description: homeHealthSeo.description,
  keywords: homeHealthSeo.keywords,
  alternates: { canonical: homeHealthSeo.canonical },
};

export default function HomeHealthPage() {
  return (
    <main>
      <HeroSection data={homeHealthHero} />
      <SectionWrapper title="Services">
        <CardGrid
          items={homeHealthServices.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            meta: item.availability,
          }))}
          columns={4}
        />
      </SectionWrapper>
      <SectionWrapper title="How It Works">
        <StepProcess
          steps={[
            { step: 1, title: "Call or Book Online", description: "Use 051-111-111-567 or eshifa.org." },
            { step: 2, title: "Confirm Service", description: "Team confirms service details and slot." },
            { step: 3, title: "Care at Home", description: "Qualified clinical staff visit your location." },
            { step: 4, title: "Digital Follow-up", description: "Receive digital prescriptions and reports." },
          ]}
        />
      </SectionWrapper>
      <SectionWrapper title="Book Home Health Service">
        <FormBuilder
          fields={[
            { name: "service", type: "select", label: "Select Service", required: true, options: homeHealthServices.map((item) => item.title) },
            { name: "patientName", type: "text", label: "Patient Name", required: true },
            { name: "phone", type: "tel", label: "Phone Number", required: true },
            { name: "address", type: "textarea", label: "Home Address", required: true },
            { name: "city", type: "select", label: "City", required: true, options: ["Islamabad", "Rawalpindi", "Lahore"] },
            { name: "preferredDate", type: "date", label: "Preferred Date", required: true },
          ]}
          submitLabel="Continue to eShifa"
          redirectUrl="https://eshifa.org"
        />
      </SectionWrapper>
      <ContactBand phone="051-111-111-567" whatsapp="https://wa.me/925111111567" extra="24/7 eShifa" />
    </main>
  );
}
