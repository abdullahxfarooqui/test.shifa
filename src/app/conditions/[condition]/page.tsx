import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  conditions,
  doctors,
  getConditionBySlug,
  getSpecialtyBySlug,
  specialties,
} from "@/lib/medical-data";
import type { MedicalConditionSchema, FAQSchema } from "@/lib/schema-types";
import { stringifySchema } from "@/lib/schema-types";

type ConditionPageProps = {
  params: Promise<{
    condition: string;
  }>;
};

export async function generateStaticParams() {
  return conditions.map((item) => ({ condition: item.slug }));
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const { condition } = await params;
  const item = getConditionBySlug(condition);

  if (!item) {
    return {
      title: "Condition Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: item.seoTitle,
    description: item.description,
    alternates: {
      canonical: `/conditions/${item.slug}`,
    },
    openGraph: {
      title: item.seoTitle,
      description: item.description,
      url: `https://www.shifa.com.pk/conditions/${item.slug}`,
      type: "article",
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: item.seoTitle,
      description: item.description,
    },
  };
}

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { condition } = await params;
  const item = getConditionBySlug(condition);

  if (!item) {
    notFound();
  }

  const relatedSpecialty = getSpecialtyBySlug(item.relatedSpecialtySlug);
  const relatedDoctors = doctors.filter((doctor) => item.relatedDoctorSlugs.includes(doctor.slug));

  const medicalConditionSchema: MedicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: item.name,
    description: item.description,
    url: `https://www.shifa.com.pk/conditions/${item.slug}`,
    possibleTreatment: relatedSpecialty
      ? {
          "@type": "MedicalTherapy",
          name: `${relatedSpecialty.title} care pathway`,
        }
      : undefined,
  };

  const faqSchema: FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-[var(--brand-bg)] pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(medicalConditionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(faqSchema) }}
      />

      <section className="mx-auto max-w-[980px] px-4 pt-16 lg:px-6">
        <h1 className="text-balance text-4xl font-bold leading-tight text-[var(--text-dark)] sm:text-5xl">{item.name}</h1>
        <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">{item.description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link href="/specialities" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            Explore Specialties
          </Link>
          <Link href="/find-a-doctor" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            Find a Doctor
          </Link>
          <Link href="/book-appointment" className="rounded-full bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white">
            Book Appointment
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[980px] space-y-8 px-4 lg:px-6">
        {item.sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              {section.paragraphs.map((paragraph, idx) => (
                <p key={`${section.title}-${idx}`}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-10 max-w-[980px] px-4 lg:px-6">
        <div className="grid gap-4 rounded-2xl bg-white p-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Related Specialty</h2>
            {relatedSpecialty ? (
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{relatedSpecialty.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{relatedSpecialty.description}</p>
                <Link
                  href={relatedSpecialty.slug === "oncology" ? "/specialities/oncology" : `/specialities/${relatedSpecialty.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-[#0B5FA5]"
                >
                  View Specialty
                </Link>
              </div>
            ) : (
              <p className="mt-3 text-sm text-[var(--text-muted)]">Specialty details will be updated soon.</p>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold">Related Doctors</h2>
            <ul className="mt-3 space-y-3">
              {relatedDoctors.map((doctor) => (
                <li key={doctor.slug} className="rounded-xl border border-slate-200 bg-[#f8fbff] p-3">
                  <p className="font-semibold">{doctor.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{doctor.specialty}</p>
                  <Link href={`/doctors/${doctor.slug}`} className="mt-1 inline-flex text-sm font-semibold text-[#E53935]">
                    View Profile
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[980px] px-4 lg:px-6">
        <div className="rounded-2xl bg-[#0B5FA5] p-6 text-white">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {item.faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-white/20 bg-white/10 p-4">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-blue-100">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[980px] px-4 lg:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Continue Your Care Journey</h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Continue exploring specialist pathways, find doctors, and review related conditions for an informed
            treatment plan.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/specialities" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              Browse Specialties
            </Link>
            <Link href="/find-a-doctor" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              Search Doctors
            </Link>
            <Link href={`/conditions/${conditions[0]?.slug ?? "breast-cancer-treatment"}`} className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              More Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
