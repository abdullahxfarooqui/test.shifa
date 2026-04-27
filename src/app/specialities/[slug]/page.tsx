import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { notFound } from "next/navigation";

import { getAllSpecialtySlugs, getSpecialtyTemplateData } from "@/lib/specialty-page-config";

type SpecialtyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllSpecialtySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SpecialtyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyTemplateData(slug);

  if (!specialty) {
    return {
      title: "Specialty Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: { absolute: `${specialty.name} | Shifa International Hospitals` },
    description: specialty.tagline,
    alternates: {
      canonical: `/specialities/${specialty.slug}/islamabad`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SpecialtyDetailPage({ params }: SpecialtyPageProps) {
  const { slug } = await params;
  const specialty = getSpecialtyTemplateData(slug);

  if (!specialty) {
    notFound();
  }

  permanentRedirect(`/specialities/${specialty.slug}/islamabad`);
}
