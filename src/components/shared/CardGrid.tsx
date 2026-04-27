import Link from "next/link";

type CardItem = {
  id: string;
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  meta?: string;
};

type CardGridProps = {
  items: CardItem[];
  columns?: 2 | 3 | 4;
};

export function CardGrid({ items, columns = 3 }: CardGridProps) {
  const classes =
    columns === 4
      ? "md:grid-cols-2 xl:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={`grid gap-4 ${classes}`}>
      {items.map((item) => {
        const content = (
          <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            {item.meta ? <p className="mt-3 text-xs font-semibold uppercase text-[#0b5fa5]">{item.meta}</p> : null}
          </article>
        );

        if (!item.href) {
          return <div key={item.id}>{content}</div>;
        }

        return (
          <Link
            key={item.id}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className="block"
          >
            {content}
          </Link>
        );
      })}
    </div>
  );
}
