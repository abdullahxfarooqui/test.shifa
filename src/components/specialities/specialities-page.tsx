"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/medical-data";
import { getSpecialtyListingData } from "@/lib/specialty-listing";
import type { ListingCategory } from "@/types/shifa";
import { cn } from "@/lib/utils";

const filters: Array<"All" | ListingCategory> = ["All", "Surgical", "Medical", "Diagnostic", "Critical Care"];
const specialtyCatalog = getSpecialtyListingData();

const faqItems = [
  {
    q: "What specialties are available at Shifa International Hospitals?",
    a: "Shifa offers 45+ specialties, including oncology, cardiology, neurology, orthopedics, transplant services, and advanced diagnostics.",
  },
  {
    q: "How do I choose the right specialist?",
    a: "You can begin with symptom-based triage, then use our doctor search by specialty, availability, and treatment focus to book the right consultant.",
  },
  {
    q: "Do you offer second opinions?",
    a: "Yes. Specialist second-opinion consultations are available for complex diagnoses, treatment planning, and surgical decision support.",
  },
];

export function SpecialitiesPageView() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    return specialtyCatalog.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = activeFilter === "All" || item.category === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <main className="bg-[var(--brand-bg)] pb-20">
      <section className="relative isolate overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2200&q=80"
          alt="South Asian clinical team representing medical specialties at Shifa International Hospitals"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B5FA5]/88 to-[#1E88E5]/50" />
        <div className="relative mx-auto max-w-[1240px] px-4 py-20 text-white lg:px-6 lg:py-24">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Medical Specialties at Shifa International Hospitals
          </h1>
          <p className="mt-5 max-w-3xl text-blue-100">
            Comprehensive care across 45+ specialties with expert consultants and advanced treatment facilities.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-[1240px] px-4 lg:px-6">
        <div className="rounded-3xl bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.62)] sm:p-8">
          <h2 className="text-2xl font-bold">Search and Filter Specialties</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3">
              <Search className="h-4 w-4 text-[#0B5FA5]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Search by specialty"
              />
            </label>
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveFilter(item)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                    activeFilter === item
                      ? "border-[#E53935] bg-[#E53935] text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-[#0B5FA5] hover:text-[#0B5FA5]",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => {
              const doctor = doctors.find((entry) => entry.departmentSlug === item.slug) ?? doctors[0];

              return (
              <motion.article
                layout
                key={item.slug}
                id={item.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B5FA5]/80 via-[#0B5FA5]/35 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0B5FA5]">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <Button size="sm" asChild>
                      <Link href={`/specialities/${item.slug}/islamabad`}>
                        Explore
                      </Link>
                    </Button>
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#E53935]"
                    >
                      Doctors <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
              );
            })}
          </motion.div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fbff] p-6">
            <h2 className="text-2xl font-bold">Comprehensive Specialty Care in Pakistan</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
              Shifa International Hospitals provides one of the most comprehensive ranges of medical specialties in
              Pakistan, integrating tertiary care, advanced diagnostics, surgical services, and long-term follow-up
              under one quality-driven system. Patients searching for a trusted hospital in Islamabad can access
              specialist pathways that are organized around outcomes, safety, and speed of diagnosis. From complex
              oncology planning and cardiovascular interventions to neurological management and transplant evaluation,
              each pathway is supported by multidisciplinary collaboration and evidence-based protocols. Our teams work
              closely with radiology, pathology, and critical care to reduce delays and improve treatment continuity.
              For patients comparing options for advanced medical treatment Pakistan, Shifa offers specialist-led care
              backed by modern infrastructure, data-informed decision making, and patient communication designed for
              clarity. If you are looking for the best specialists in Pakistan for second opinions, surgery planning,
              or long-term management of chronic conditions, our integrated model connects you with the right consultant,
              related diagnostics, and condition-specific support in one coordinated journey.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-[#0B5FA5] p-6 text-white">
            <h2 className="text-2xl font-bold">Specialties FAQ</h2>
            <div className="mt-5 space-y-4">
              {faqItems.map((item) => (
                <article key={item.q} className="rounded-xl border border-white/20 bg-white/10 p-4">
                  <h3 className="font-semibold">{item.q}</h3>
                  <p className="mt-2 text-sm text-blue-100">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
