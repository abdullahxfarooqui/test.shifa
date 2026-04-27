"use client";

type FilterOption = {
  value: string;
  label: string;
};

type FilterField = {
  id: string;
  label: string;
  options?: FilterOption[];
  placeholder?: string;
  type: "select" | "text";
};

type FilterBarProps = {
  fields: FilterField[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
};

export function FilterBar({ fields, values, onChange }: FilterBarProps) {
  return (
    <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-2 xl:grid-cols-5">
      {fields.map((field) => (
        <label key={field.id} className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          {field.label}
          {field.type === "select" ? (
            <select
              value={values[field.id] ?? ""}
              onChange={(event) => onChange(field.id, event.target.value)}
              className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
            >
              {(field.options ?? []).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={values[field.id] ?? ""}
              onChange={(event) => onChange(field.id, event.target.value)}
              placeholder={field.placeholder}
              className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
            />
          )}
        </label>
      ))}
    </div>
  );
}
