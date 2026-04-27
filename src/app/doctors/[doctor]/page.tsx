import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { conditions, doctors, getDoctorBySlug, getSpecialtyBySlug } from "@/lib/medical-data";
import type { PhysicianSchema } from "@/lib/schema-types";
import { stringifySchema } from "@/lib/schema-types";

type DoctorPageProps = {
  params: Promise<{
    doctor: string;
  }>;
};

export async function generateStaticParams() {
  return doctors.map((item) => ({ doctor: item.slug }));
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const { doctor } = await params;
  const item = getDoctorBySlug(doctor);

  if (!item) {
    return {
      title: "Doctor Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: { absolute: `${item.specialty} in Islamabad | ${item.name} | Shifa International Hospitals` },
    description: item.summary,
    alternates: {
      canonical: `/doctors/${item.slug}`,
    },
    openGraph: {
      title: `${item.specialty} in Islamabad | ${item.name} | Shifa International`,
      description: item.summary,
      url: `https://www.shifa.com.pk/doctors/${item.slug}`,
      type: "profile",
      locale: "en_PK",
      images: [{ url: item.image, alt: item.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.specialty} in Islamabad | ${item.name} | Shifa International`,
      description: item.summary,
      images: [item.image],
    },
  };
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { doctor } = await params;
  const item = getDoctorBySlug(doctor);

  if (!item) {
    notFound();
  }

  const specialty = getSpecialtyBySlug(item.departmentSlug);
  const relatedConditions = conditions.filter((condition) => condition.relatedDoctorSlugs.includes(item.slug));

  const physicianSchema: PhysicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: item.name,
    medicalSpecialty: item.specialty,
    worksFor: {
      "@type": "Hospital",
      name: "Shifa International Hospitals",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    url: `https://www.shifa.com.pk/doctors/${item.slug}`,
  };

  return (
    <main className="bg-[var(--brand-bg)] pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(physicianSchema) }}
      />

      <section className="mx-auto max-w-[1080px] px-4 pt-16 lg:px-6">
        <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-35px_rgba(2,6,23,0.62)] md:grid-cols-[320px_1fr]">
          <div className="relative h-[320px] overflow-hidden rounded-2xl border border-slate-200">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{item.name}</h1>
            <p className="mt-2 text-lg font-semibold text-[#0B5FA5]">{item.specialty}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">{item.summary}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Experience</p>
                <p className="mt-1 font-semibold">{item.experience}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Availability</p>
                <p className="mt-1 font-semibold">{item.availability}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/book-appointment" className="rounded-xl bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white">
                Book Appointment
              </Link>
              <Link href="/specialities" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
                Browse Specialties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1080px] px-4 lg:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold">Qualifications</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {item.qualifications.map((qualification) => (
                <li key={qualification}>• {qualification}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold">Procedures Performed</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {item.procedures.map((procedure) => (
                <li key={procedure}>• {procedure}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1080px] px-4 lg:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Related Care Pathways</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-4">
              <h3 className="font-semibold">Department</h3>
              {specialty ? (
                <>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{specialty.title}</p>
                  <Link
                    href={specialty.slug === "oncology" ? "/specialities/oncology" : `/specialities/${specialty.slug}`}
                    className="mt-2 inline-flex text-sm font-semibold text-[#0B5FA5]"
                  >
                    View Specialty
                  </Link>
                </>
              ) : (
                <p className="mt-2 text-sm text-[var(--text-muted)]">Department information will be updated soon.</p>
              )}
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-4">
              <h3 className="font-semibold">Related Conditions</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {relatedConditions.map((condition) => (
                  <li key={condition.slug}>
                    <Link href={`/conditions/${condition.slug}`} className="font-semibold text-[#E53935]">
                      {condition.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
