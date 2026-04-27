import type { AppointmentForm, ContactForm } from "@/types/shifa";

type AppointmentRecord = AppointmentForm & {
  id: string;
  createdAt: string;
};

type ContactRecord = ContactForm & {
  id: string;
  createdAt: string;
};

const appointments: AppointmentRecord[] = [];
const contacts: ContactRecord[] = [];

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export function saveAppointment(payload: AppointmentForm) {
  const record: AppointmentRecord = {
    ...payload,
    id: makeId("appt"),
    createdAt: new Date().toISOString(),
  };
  appointments.push(record);
  return record;
}

export function saveContact(payload: ContactForm) {
  const record: ContactRecord = {
    ...payload,
    id: makeId("contact"),
    createdAt: new Date().toISOString(),
  };
  contacts.push(record);
  return record;
}

export function getAppointments() {
  return appointments;
}

export function getContacts() {
  return contacts;
}

const users = [{ id: "patient-1", username: "patient", password: "shifa123" }];

export function authenticateUser(username: string, password: string) {
  return users.find((user) => user.username === username && user.password === password) ?? null;
}

export function issueMockJwt(userId: string) {
  const payload = `${userId}:${Date.now()}`;
  return Buffer.from(payload).toString("base64url");
}
