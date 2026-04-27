import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Coming Soon",
  robots: {
    index: false,
    follow: false,
  },
};

type CatchAllPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const { slug } = await params;
  const label = slug.map((part) => part.replace(/-/g, " ")).join(" / ");

  return (
    <main className="bg-[var(--brand-bg)]">
      <section className="mx-auto max-w-[960px] px-4 py-20 lg:px-6">
        <div className="rounded-3xl bg-white p-8 text-center shadow-[0_18px_48px_-32px_rgba(15,23,42,0.55)] sm:p-12">
          <h1 className="text-3xl font-bold text-[var(--text-dark)]">Page in Progress</h1>
          <p className="mt-4 text-[var(--text-muted)]">
            The section <span className="font-semibold text-[var(--text-dark)]">{label}</span> is being prepared.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-[var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}