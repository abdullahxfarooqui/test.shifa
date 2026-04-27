"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { FormField } from "@/types/shifa";

type FormBuilderProps = {
  fields: FormField[];
  submitLabel: string;
  onSubmit: (values: Record<string, string>) => Promise<void>;
  className?: string;
};

export function FormBuilder({ fields, submitLabel, onSubmit, className }: FormBuilderProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const updateValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      await onSubmit(values);
      setMessage("Submitted successfully.");
      setValues({});
    } catch {
      setMessage("Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className ?? "rounded-2xl border border-slate-200 bg-white p-5"}>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className={`flex flex-col gap-1 text-sm font-medium text-slate-700 ${field.type === "textarea" ? "md:col-span-2" : ""}`}>
            {field.label}
            {field.type === "select" ? (
              <select
                required={field.required}
                value={values[field.name] ?? ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
              >
                <option value="">Select</option>
                {(field.options ?? []).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                required={field.required}
                value={values[field.name] ?? ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                placeholder={field.placeholder}
                className="min-h-28 rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            ) : (
              <input
                type={field.type}
                required={field.required}
                value={values[field.name] ?? ""}
                onChange={(event) => updateValue(field.name, event.target.value)}
                placeholder={field.placeholder}
                className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
              />
            )}
          </label>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : submitLabel}
        </Button>
        {message ? <p className="text-sm text-slate-600">{message}</p> : null}
      </div>
    </form>
  );
}
