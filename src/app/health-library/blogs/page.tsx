import type { Metadata } from "next";

import { NewsEventsClient } from "@/components/news/NewsEventsClient";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { newsCategories } from "@/data/shifa-pages";

export const metadata: Metadata = {
  title: { absolute: "Health Blogs | Patient Education | Shifa International Hospitals" },
  description: "Evidence-based health articles, specialist insights, and patient education from Shifa International Hospitals in Islamabad. Browse topics across oncology, cardiology, diabetes, neurology, and more.",
  keywords: ["health blogs Pakistan", "hospital health articles Islamabad", "Shifa health library", "patient education Pakistan"],
  alternates: { canonical: "https://www.shifa.com.pk/health-library/blogs" },
  openGraph: {
    title: "Health Blogs | Patient Education | Shifa International Hospitals",
    description: "Evidence-based health articles, specialist insights, and patient education from Shifa International Hospitals in Islamabad.",
    url: "https://www.shifa.com.pk/health-library/blogs",
    siteName: "Shifa International Hospitals",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Blogs | Shifa International Hospitals",
    description: "Evidence-based health articles and specialist insights from Shifa International Hospitals.",
  },
};

export default function BlogsPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-gradient-to-br from-[#f5f9ff] via-white to-[#eef6ff]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="inline-flex rounded-full bg-[#e6f0fb] px-3 py-1 text-xs font-semibold tracking-wide text-[#0b5fa5]">
            Health Library
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">Health Blogs</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Evidence-based patient education, prevention guidance, and specialist insights curated for families in Pakistan.
          </p>
        </div>
      </section>

      <SectionWrapper description="Filter by category and language.">
        <NewsEventsClient categories={newsCategories} />
      </SectionWrapper>
    </main>
  );
}
