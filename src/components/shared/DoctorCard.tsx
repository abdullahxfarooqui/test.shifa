import Image from "next/image";
import Link from "next/link";

import type { DoctorRecord } from "@/types/shifa";
import { Button } from "@/components/ui/button";

type DoctorCardProps = {
  doctor: DoctorRecord;
};

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="relative h-48 overflow-hidden rounded-xl">
        <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{doctor.name}</h3>
      <p className="text-sm font-medium text-[#0b5fa5]">{doctor.specialty}</p>
      <p className="mt-1 text-sm text-slate-600">{doctor.experience}</p>
      <div className="mt-4 flex gap-2">
        <Button asChild size="sm">
          <Link href={doctor.profileUrl}>View Profile</Link>
        </Button>
        <Button asChild size="sm" variant="secondary">
          <Link href={`/book-appointment?doctor=${doctor.slug}`}>Book</Link>
        </Button>
      </div>
    </article>
  );
}
