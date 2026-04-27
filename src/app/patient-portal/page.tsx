import type { Metadata } from "next";

import { CardGrid } from "@/components/shared/CardGrid";
import { ContactBand } from "@/components/shared/ContactBand";
import { HeroSection } from "@/components/shared/HeroSection";
import { FormBuilder } from "@/components/shared/FormBuilder";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { patientPortalFeatures, patientPortalHero, patientPortalSeo } from "@/data/shifa-pages";

export const metadata: Metadata = {
  title: patientPortalSeo.title,
  description: patientPortalSeo.description,
  keywords: patientPortalSeo.keywords,
  alternates: { canonical: patientPortalSeo.canonical },
  openGraph: {
    title: patientPortalSeo.title,
    description: patientPortalSeo.description,
    url: patientPortalSeo.canonical,
    siteName: "Shifa International Hospitals",
    type: "website",
  },
};

export default function PatientPortalPage() {
  return (
    <main>
      <HeroSection data={patientPortalHero} />
      <SectionWrapper title="Portal Services" description="Patient-facing digital services available through Shifa portal.">
        <CardGrid
          items={patientPortalFeatures.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
          }))}
        />
      </SectionWrapper>
      <SectionWrapper title="Sign In Gateway" description="Submit here to continue to patientportal.shifa.com.pk.">
        <FormBuilder
          fields={[
            { name: "username", label: "Username / Patient ID", type: "text", required: true },
            { name: "password", label: "Password", type: "password", required: true },
          ]}
          submitLabel="Continue to Portal"
          onSubmit={async () => {
            window.open("https://patientportal.shifa.com.pk", "_blank", "noopener,noreferrer");
          }}
        />
      </SectionWrapper>
      <ContactBand phone="051-8464646" whatsapp="https://wa.me/92518464646" extra="Emergency: 051-846-4646" />
    </main>
  );
}
