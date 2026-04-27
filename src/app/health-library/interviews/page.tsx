import type { Metadata } from "next";

import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Doctor Interviews | Health Library",
  description: "Expert health guidance directly from Shifa clinical specialists.",
  alternates: { canonical: "https://www.shifa.com.pk/health-library/interviews" },
};

export default function InterviewsPage() {
  return (
    <main>
      <SectionWrapper title="Doctor Interviews" description="Expert conversations and health guidance from specialists.">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          Interview content is powered through the Shifa news ecosystem and can be linked from shifanews.com categories.
        </div>
      </SectionWrapper>
    </main>
  );
}
