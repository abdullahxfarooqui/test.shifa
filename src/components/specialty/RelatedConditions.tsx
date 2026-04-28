import Link from "next/link";

import { conditions } from "@/lib/medical-data";

type RelatedConditionsProps = { specialtySlug: string };

export function RelatedConditions({ specialtySlug }: RelatedConditionsProps) {
  const related = conditions.filter((c) => c.relatedSpecialtySlug === specialtySlug);

  if (related.length === 0) return null;

  return (
    <section className="mx-auto mt-10 max-w-[980px] px-4 lg:px-6">
      <h2 className="text-2xl font-bold text-[var(--text-dark)]">Conditions We Treat</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {related.map((condition) => (
          <Link
            key={condition.slug}
            href={`/conditions/${condition.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[#0B5FA5] hover:shadow-sm"
          >
            <p className="font-semibold text-slate-900">{condition.name}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)] line-clamp-2">{condition.description}</p>
            <span className="mt-2 inline-flex text-sm font-semibold text-[#E53935]">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
