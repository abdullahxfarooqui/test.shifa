type Step = {
  step: number;
  title: string;
  description: string;
};

type StepProcessProps = {
  steps: Step[];
};

export function StepProcess({ steps }: StepProcessProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((item) => (
        <li key={item.step} className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#0b5fa5]">Step {item.step}</p>
          <h3 className="mt-1 font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
