import { NextRequest } from "next/server";

import { doctorDirectory } from "@/data/doctors-directory";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const specialty = params.get("specialty")?.toLowerCase() ?? "";
  const city = params.get("city")?.toLowerCase() ?? "";
  const gender = params.get("gender")?.toLowerCase() ?? "";
  const availability = params.get("availability") ?? "";
  const query = params.get("q")?.toLowerCase() ?? "";
  const page = Number(params.get("page") ?? "1");
  const pageSize = Number(params.get("pageSize") ?? "12");

  const filtered = doctorDirectory.filter((doctor) => {
    const matchesSpecialty = !specialty || doctor.departmentSlug.toLowerCase().includes(specialty) || doctor.specialty.toLowerCase().includes(specialty);
    const matchesCity = !city || doctor.location === city;
    const matchesGender = !gender || doctor.gender === gender;
    const matchesAvailability = !availability || doctor.availability.includes(availability);
    const matchesQuery = !query || doctor.name.toLowerCase().includes(query);
    return matchesSpecialty && matchesCity && matchesGender && matchesAvailability && matchesQuery;
  });

  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return Response.json({ items, total: filtered.length, page, pageSize });
}
