import type { Metadata } from "next";

import { CardGrid } from "@/components/shared/CardGrid";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { healthLibraryHero, healthLibrarySections, healthLibrarySeo } from "@/data/shifa-pages";

export const metadata: Metadata = {
  title: healthLibrarySeo.title,
  description: healthLibrarySeo.description,
  keywords: healthLibrarySeo.keywords,
  alternates: { canonical: healthLibrarySeo.canonical },
  openGraph: {
    title: healthLibrarySeo.title,
    description: healthLibrarySeo.description,
    url: healthLibrarySeo.canonical,
    siteName: "Shifa International Hospitals",
    type: "website",
  },
};

export default function HealthLibraryPage() {
  return (
    <main>
      <HeroSection data={healthLibraryHero} />
      <SectionWrapper title="Explore Health Library">
        <CardGrid
          items={healthLibrarySections.map((item) => ({
            id: item.id,
            title: item.heading,
            description: item.subheading,
            href: item.href,
            external: item.external,
          }))}
        />
      </SectionWrapper>
    </main>
  );
}
