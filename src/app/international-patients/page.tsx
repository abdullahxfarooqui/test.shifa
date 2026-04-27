import type { Metadata } from "next";

import { CardGrid } from "@/components/shared/CardGrid";
import { ContactBand } from "@/components/shared/ContactBand";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { StepProcess } from "@/components/shared/StepProcess";
import {
  internationalPatientsHero,
  internationalPatientsSeo,
  internationalServices,
  internationalStats,
} from "@/data/shifa-pages";

export const metadata: Metadata = {
  title: { absolute: internationalPatientsSeo.title },
  description: internationalPatientsSeo.description,
  keywords: internationalPatientsSeo.keywords,
  alternates: { canonical: internationalPatientsSeo.canonical },
  openGraph: {
    title: internationalPatientsSeo.title,
    description: internationalPatientsSeo.description,
    url: internationalPatientsSeo.canonical,
    type: "website",
  },
};

export default function InternationalPatientsPage() {
  return (
    <main>
      <HeroSection data={internationalPatientsHero} />
      <SectionWrapper title="At a Glance">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {internationalStats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-3xl font-bold text-slate-900">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper title="International Service Lines">
        <CardGrid
          items={internationalServices.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
          }))}
        />
      </SectionWrapper>
      <SectionWrapper title="Patient Journey">
        <StepProcess
          steps={[
            { step: 1, title: "Submit Medical Documents", description: "Share your case details and reports." },
            { step: 2, title: "Receive Free Quote", description: "Case review and estimate from the team." },
            { step: 3, title: "Book and Confirm", description: "Confirm travel and consultation planning." },
            { step: 4, title: "Treatment and Follow-up", description: "In-person care with remote follow-up support." },
          ]}
        />
      </SectionWrapper>
      <ContactBand phone="+44 121 790 1777" whatsapp="https://wa.me/447777672222" extra="info@shifaglobal.uk" />
    </main>
  );
}
