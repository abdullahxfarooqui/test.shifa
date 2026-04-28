import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

const guideContent: Record<string, { title: string; intro: string }> = {
  "dengue-fever": {
    title: "Dengue Fever",
    intro: "Dengue awareness and prevention guidance from Shifa health education references.",
  },
  "diabetes-management": {
    title: "Diabetes Management",
    intro: "Lifestyle, monitoring, and treatment adherence guidance for diabetes care.",
  },
  hypertension: {
    title: "Hypertension",
    intro: "Blood pressure control basics and when to consult specialist care.",
  },
  "stroke-awareness": {
    title: "Stroke Awareness",
    intro: "Recognize warning signs and seek urgent treatment pathways.",
  },
  "knee-pain": {
    title: "Knee Pain",
    intro: "Common causes, non-surgical care options, and when surgery is considered.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = guideContent[slug];
  if (!item) return { title: "Guide Not Found" };
  return {
    title: `${item.title} | Patient Guide`,
    description: item.intro,
    alternates: { canonical: `https://www.shifa.com.pk/health-library/patient-guide/${slug}` },
  };
}

export default async function PatientGuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = guideContent[slug];

  if (!item) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Health Library", href: "/health-library" },
    { name: "Patient Guide", href: "/health-library/patient-guide" },
    { name: item.title, href: `/health-library/patient-guide/${slug}` },
  ];

  return (
    <main>
      <BreadcrumbSchema crumbs={crumbs} />
      <div className="mx-auto max-w-[980px] px-4 pt-6 lg:px-6">
        <Breadcrumb crumbs={crumbs} />
      </div>
      <SectionWrapper title={item.title} description={item.intro}>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          This page is structured for CMS-backed patient guide content under the health library architecture.
        </div>
      </SectionWrapper>
    </main>
  );
}
