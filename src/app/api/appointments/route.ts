import type { AppointmentForm } from "@/types/shifa";
import { saveAppointment } from "@/lib/mock-db";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<AppointmentForm>;

  if (!body.patientName || !body.phone || !body.specialty || !body.preferredDate || !body.preferredTime || !body.location || !body.visitType) {
    return Response.json({ error: "Missing required appointment fields." }, { status: 400 });
  }

  const record = saveAppointment({
    patientName: body.patientName,
    phone: body.phone,
    email: body.email,
    specialty: body.specialty,
    preferredDoctor: body.preferredDoctor,
    preferredDate: body.preferredDate,
    preferredTime: body.preferredTime,
    location: body.location,
    visitType: body.visitType,
    notes: body.notes,
  });

  return Response.json({ success: true, record }, { status: 201 });
}
