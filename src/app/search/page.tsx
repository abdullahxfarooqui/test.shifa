import type { Metadata } from "next";
import Link from "next/link";

import { conditions, doctors } from "@/lib/medical-data";
import { getSpecialtyListingData } from "@/lib/specialty-listing";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export const metadata: Metadata = {
  title: "Search | Shifa International Hospitals",
  description: "Search specialties, doctors, and condition guides at Shifa International Hospitals.",
  alternates: {
    canonical: "/search",
  },
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();
  const normalized = query.toLowerCase();

  const specialtyResults = query
    ? getSpecialtyListingData().filter(
        (item) => item.title.toLowerCase().includes(normalized) || item.description.toLowerCase().includes(normalized),
      )
    : [];

  const doctorResults = query
    ? doctors.filter(
        (item) =>
          item.name.toLowerCase().includes(normalized) ||
          item.specialty.toLowerCase().includes(normalized) ||
          item.summary.toLowerCase().includes(normalized),
      )
    : [];

  const conditionResults = query
    ? conditions.filter(
        (item) => item.name.toLowerCase().includes(normalized) || item.description.toLowerCase().includes(normalized),
      )
    : [];

  return (
    <main className="bg-[var(--brand-bg)] pb-20">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h1 className="text-4xl font-bold text-[var(--text-dark)]">Search</h1>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          Find specialties, doctors, and condition guides for patients across Islamabad, Rawalpindi, DHA, and Bahria
          Town.
        </p>

        <form action="/search" method="get" className="mt-6">
          <label htmlFor="q" className="sr-only">
            Search query
          </label>
          <input
            id="q"
            name="q"
            defaultValue={query}
            placeholder="Search specialty, doctor, or condition"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#0B5FA5]"
          />
        </form>
      </section>

      {query ? (
        <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Specialties ({specialtyResults.length})</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {specialtyResults.map((item) => (
                <Link
                  key={item.slug}
                  href={`/specialities/${item.slug}/islamabad`}
                  className="rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-slate-800 hover:border-[#0B5FA5] hover:text-[#0B5FA5]"
                >
                  {item.title}
                </Link>
              ))}
              {specialtyResults.length === 0 && <p className="text-sm text-[var(--text-muted)]">No specialties matched.</p>}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Doctors ({doctorResults.length})</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {doctorResults.map((item) => (
                <Link
                  key={item.slug}
                  href={`/doctors/${item.slug}`}
                  className="rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-slate-800 hover:border-[#0B5FA5] hover:text-[#0B5FA5]"
                >
                  {item.name} · {item.specialty}
                </Link>
              ))}
              {doctorResults.length === 0 && <p className="text-sm text-[var(--text-muted)]">No doctors matched.</p>}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Condition Guides ({conditionResults.length})</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {conditionResults.map((item) => (
                <Link
                  key={item.slug}
                  href={`/conditions/${item.slug}`}
                  className="rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-slate-800 hover:border-[#0B5FA5] hover:text-[#0B5FA5]"
                >
                  {item.name}
                </Link>
              ))}
              {conditionResults.length === 0 && <p className="text-sm text-[var(--text-muted)]">No conditions matched.</p>}
            </div>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-[var(--text-muted)]">
            Enter a search term to find specialties, doctors, or condition guides.
          </div>
        </section>
      )}
    </main>
  );
}
