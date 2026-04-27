"use client";

import { useEffect, useMemo, useState } from "react";

import { DoctorCard } from "@/components/shared/DoctorCard";
import { FilterBar } from "@/components/shared/FilterBar";
import type { DoctorRecord } from "@/types/shifa";

type DoctorDirectoryClientProps = {
  heading?: string;
};

type DoctorsApiResponse = {
  items: DoctorRecord[];
  total: number;
  page: number;
  pageSize: number;
};

const PAGE_SIZE = 12;

export function DoctorDirectoryClient({ heading }: DoctorDirectoryClientProps) {
  const [filters, setFilters] = useState({
    specialty: "",
    city: "",
    gender: "",
    availability: "",
    q: "",
  });
  const [page, setPage] = useState(1);
  const [data, setData] = useState<DoctorsApiResponse>({ items: [], total: 0, page: 1, pageSize: PAGE_SIZE });

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.specialty) params.set("specialty", filters.specialty);
    if (filters.city) params.set("city", filters.city);
    if (filters.gender) params.set("gender", filters.gender);
    if (filters.availability) params.set("availability", filters.availability);
    if (filters.q) params.set("q", filters.q);
    params.set("page", String(page));
    params.set("pageSize", String(PAGE_SIZE));

    fetch(`/api/doctors?${params.toString()}`)
      .then((res) => res.json())
      .then((json: DoctorsApiResponse) => setData(json));
  }, [filters, page]);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(data.total / PAGE_SIZE)), [data.total]);

  return (
    <div className="space-y-6">
      {heading ? <h2 className="text-2xl font-bold text-slate-900">{heading}</h2> : null}
      <FilterBar
        fields={[
          {
            id: "specialty",
            label: "Specialty",
            type: "select",
            options: [
              { value: "", label: "All" },
              { value: "cardiology", label: "Cardiology" },
              { value: "oncology", label: "Oncology" },
              { value: "neurology", label: "Neurology" },
              { value: "endocrinology", label: "Endocrinology" },
            ],
          },
          {
            id: "city",
            label: "City",
            type: "select",
            options: [
              { value: "", label: "All" },
              { value: "islamabad", label: "Islamabad" },
              { value: "faisalabad", label: "Faisalabad" },
            ],
          },
          {
            id: "gender",
            label: "Gender",
            type: "select",
            options: [
              { value: "", label: "Any" },
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ],
          },
          {
            id: "availability",
            label: "Availability",
            type: "select",
            options: [
              { value: "", label: "Any Day" },
              { value: "Monday", label: "Monday" },
              { value: "Tuesday", label: "Tuesday" },
              { value: "Wednesday", label: "Wednesday" },
              { value: "Thursday", label: "Thursday" },
              { value: "Friday", label: "Friday" },
              { value: "Saturday", label: "Saturday" },
              { value: "Sunday", label: "Sunday" },
            ],
          },
          {
            id: "q",
            label: "Search by Name",
            type: "text",
            placeholder: "Type doctor name...",
          },
        ]}
        values={filters}
        onChange={(name, value) => {
          setPage(1);
          setFilters((prev) => ({ ...prev, [name]: value }));
        }}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.items.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      {data.items.length === 0 ? <p className="text-sm text-slate-600">No doctors matched your filters.</p> : null}

      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-sm text-slate-600">
          Page {page} of {totalPages}
        </p>
        <button
          type="button"
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page >= totalPages}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
