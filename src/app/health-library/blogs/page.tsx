import type { Metadata } from "next";

import { NewsEventsClient } from "@/components/news/NewsEventsClient";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { newsCategories } from "@/data/shifa-pages";

export const metadata: Metadata = {
  title: "Health Blogs | Health Library",
  description: "Browse health blog entries and educational stories from Shifa content channels.",
  alternates: { canonical: "https://www.shifa.com.pk/health-library/blogs" },
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
