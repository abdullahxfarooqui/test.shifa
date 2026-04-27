import type { ContactForm } from "@/types/shifa";
import { saveContact } from "@/lib/mock-db";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactForm>;

  if (!body.name || !body.email || !body.phone || !body.subject || !body.message) {
    return Response.json({ error: "Missing required contact fields." }, { status: 400 });
  }

  const record = saveContact({
    name: body.name,
    email: body.email,
    phone: body.phone,
    subject: body.subject,
    department: body.department,
    message: body.message,
  });

  return Response.json({ success: true, record }, { status: 201 });
}
