import Image from "next/image";
import Link from "next/link";

import { doctors } from "@/lib/medical-data";

type RelatedDoctorsProps = { departmentSlug: string; specialtyTitle: string };

export function RelatedDoctors({ departmentSlug, specialtyTitle }: RelatedDoctorsProps) {
  const related = doctors.filter((d) => d.departmentSlug === departmentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mx-auto mt-10 max-w-[980px] px-4 lg:px-6">
      <h2 className="text-2xl font-bold text-[var(--text-dark)]">
        Meet Our {specialtyTitle} Specialists
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {related.map((doctor) => (
          <Link
            key={doctor.slug}
            href={`/doctors/${doctor.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-40 overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                // TODO: replace with real Shifa photography
              />
            </div>
            <p className="mt-3 font-semibold text-slate-900">{doctor.name}</p>
            <p className="text-sm text-[#0B5FA5]">{doctor.specialty}</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">{doctor.experience} experience</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
