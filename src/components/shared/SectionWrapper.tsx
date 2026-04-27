import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({ title, description, className, children }: SectionWrapperProps) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8", className)}>
      {(title || description) && (
        <div className="mb-6">
          {title ? <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2> : null}
          {description ? <p className="mt-2 max-w-3xl text-slate-600">{description}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
