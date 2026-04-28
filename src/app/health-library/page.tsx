import type { Metadata } from "next";
import { HealthLibraryHub } from "@/components/health-library/HealthLibraryHub";
import { healthLibrarySeo } from "@/data/shifa-pages";

export const metadata: Metadata = {
  title: { absolute: healthLibrarySeo.title },
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
  return <HealthLibraryHub />;
}
