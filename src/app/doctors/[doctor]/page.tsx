import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { conditions, doctors, getDoctorBySlug, getSpecialtyBySlug } from "@/lib/medical-data";
import { PhysicianSchema } from "@/components/schema/PhysicianSchema";
import { DoctorAvatar } from "@/components/DoctorAvatar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

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

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: item.name, href: `/doctors/${item.slug}` },
  ];

  return (
    <main className="bg-[var(--brand-bg)] pb-20">
      <PhysicianSchema doctor={item} />
      <BreadcrumbSchema crumbs={crumbs} />

      <section className="mx-auto max-w-[1080px] px-4 pt-10 lg:px-6">
        <Breadcrumb crumbs={crumbs} />
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-[1080px] px-4 pt-6 lg:px-6">
        <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-35px_rgba(2,6,23,0.62)] md:grid-cols-[320px_1fr]">
          <div className="relative h-[320px] overflow-hidden rounded-2xl border border-slate-200">
            <DoctorAvatar src={item.image} name={item.name} priority />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{item.name}</h1>
            <p className="mt-2 text-lg font-semibold text-[#0B5FA5]">{item.specialty}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Experience</p>
                <p className="mt-1 font-semibold">{item.experience}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Availability</p>
                <p className="mt-1 font-semibold">{item.availability}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Languages</p>
                <p className="mt-1 font-semibold">{item.languages.join(", ")}</p>
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

      {/* About */}
      <section className="mx-auto mt-8 max-w-[1080px] px-4 lg:px-6">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-bold">About {item.name}</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{item.bio}</p>
          <p className="mt-3 text-xs text-slate-400">
            Last reviewed: <time dateTime={item.lastReviewed}>{new Date(item.lastReviewed).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</time>
          </p>
        </article>
      </section>

      {/* Qualifications & Procedures */}
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

      {/* Related care pathways */}
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

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-3 md:hidden">
        <Link
          href="/book-appointment"
          className="block w-full rounded-xl bg-[var(--brand-accent)] py-3 text-center text-sm font-semibold text-white"
        >
          Book Appointment
        </Link>
      </div>
    </main>
  );
}
