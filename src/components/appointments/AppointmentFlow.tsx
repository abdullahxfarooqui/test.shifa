"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { specialtyOptions } from "@/data/doctors-directory";

const initialForm = {
  specialty: "",
  location: "islamabad",
  visitType: "first-visit",
  preferredDoctor: "",
  preferredDate: "",
  preferredTime: "morning",
  patientName: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  notes: "",
};

export function AppointmentFlow() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState<string | null>(null);

  const canProceed = useMemo(() => {
    if (step === 1) return Boolean(form.specialty && form.location && form.visitType);
    if (step === 3) return Boolean(form.preferredDate && form.preferredTime);
    if (step === 4) return Boolean(form.patientName && form.phone);
    return true;
  }, [form, step]);

  const updateField = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async () => {
    const payload = {
      patientName: form.patientName,
      phone: form.phone,
      email: form.email || undefined,
      specialty: form.specialty,
      preferredDoctor: form.preferredDoctor || undefined,
      preferredDate: form.preferredDate,
      preferredTime: form.preferredTime,
      location: form.location,
      visitType: form.visitType,
      notes: form.notes || undefined,
    };

    const response = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setMessage("Your appointment request has been received. Our team will call you within 1 business hour to confirm.");
      setStep(1);
      setForm(initialForm);
    } else {
      setMessage("Unable to submit booking right now. Please try WhatsApp fallback.");
    }
  };

  return (
    <div id="form" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Appointment Form</h2>
        <p className="text-sm text-slate-600">Step {step} of 4</p>
      </div>

      {step === 1 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Specialty
            <select className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" value={form.specialty} onChange={(e) => updateField("specialty", e.target.value)}>
              <option value="">Select specialty</option>
              {specialtyOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-slate-700">
            Hospital Location
            <select className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" value={form.location} onChange={(e) => updateField("location", e.target.value)}>
              <option value="islamabad">Islamabad</option>
              <option value="faisalabad">Faisalabad</option>
            </select>
          </label>
          <label className="text-sm font-medium text-slate-700 md:col-span-2">
            Visit Type
            <select className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" value={form.visitType} onChange={(e) => updateField("visitType", e.target.value)}>
              <option value="first-visit">First Visit</option>
              <option value="follow-up">Follow-up</option>
            </select>
          </label>
        </div>
      ) : null}

      {step === 2 ? (
        <label className="text-sm font-medium text-slate-700">
          Preferred Doctor (Optional)
          <input
            type="text"
            value={form.preferredDoctor}
            onChange={(e) => updateField("preferredDoctor", e.target.value)}
            placeholder="Search by name or leave blank"
            className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3"
          />
        </label>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Preferred Date
            <input type="date" value={form.preferredDate} onChange={(e) => updateField("preferredDate", e.target.value)} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Preferred Time
            <select className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" value={form.preferredTime} onChange={(e) => updateField("preferredTime", e.target.value)}>
              <option value="morning">Morning (8 AM-12 PM)</option>
              <option value="afternoon">Afternoon (12 PM-5 PM)</option>
              <option value="evening">Evening (5 PM-8 PM)</option>
            </select>
          </label>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Full Name
            <input type="text" value={form.patientName} onChange={(e) => updateField("patientName", e.target.value)} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Phone Number
            <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Email (Optional)
            <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Notes (Optional)
            <input type="text" value={form.notes} onChange={(e) => updateField("notes", e.target.value)} className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3" />
          </label>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <Button type="button" variant="secondary" disabled={step === 1} onClick={() => setStep((prev) => Math.max(1, prev - 1))}>
            Back
          </Button>
          {step < 4 ? (
            <Button type="button" onClick={() => setStep((prev) => Math.min(4, prev + 1))} disabled={!canProceed}>
              Next
            </Button>
          ) : (
            <Button type="button" onClick={submitForm} disabled={!canProceed}>
              Confirm Appointment
            </Button>
          )}
        </div>
        <Link
          href="https://wa.me/92518464646?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Shifa%20International%20Hospitals."
          className="text-sm font-semibold text-[#0b5fa5]"
          target="_blank"
          rel="noreferrer"
        >
          Prefer WhatsApp?
        </Link>
      </div>

      {message ? <p className="mt-4 rounded-lg bg-[#f0f9ff] px-3 py-2 text-sm text-slate-700">{message}</p> : null}
    </div>
  );
}
