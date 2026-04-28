import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Link from "next/link";

import { BlogDetailClient } from "@/components/blog/BlogDetailClient";
import { articleEnhancements } from "@/data/article-enhancements";
import { healthArticles } from "@/data/health-articles";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export async function generateStaticParams() {
  return healthArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = healthArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found | Shifa Hospitals" };
  }

  return {
    title: { absolute: `${article.title} | Shifa International Hospitals` },
    description: article.excerpt,
    alternates: { canonical: `https://www.shifa.com.pk/health-library/blogs/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.shifa.com.pk/health-library/blogs/${slug}`,
      siteName: "Shifa International Hospitals",
      type: "article",
      ...(article.featuredImage
        ? {
            images: [{ url: article.featuredImage, alt: article.title }],
          }
        : {}),
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = healthArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const enhancement = articleEnhancements[slug] || {
    keyStats: [{ value: "Read", label: "This Article", description: "For health insights" }],
  };

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Health Library", href: "/health-library" },
    { name: "Blogs", href: "/health-library/blogs" },
    { name: article.title, href: `/health-library/blogs/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />
      <div className="mx-auto max-w-[980px] px-4 pt-6 lg:px-6">
        <Breadcrumb crumbs={crumbs} />
      </div>
      <BlogDetailClient article={article} enhancement={enhancement} />
      <div className="mx-auto max-w-[980px] px-4 pb-12 lg:px-6">
        <div className="rounded-2xl bg-[#0B5FA5] p-6 text-white">
          <h2 className="text-xl font-bold">Speak to a Specialist</h2>
          <p className="mt-2 text-sm text-blue-100">
            Shifa International Hospitals offers expert consultations across 45+ specialties in Islamabad.
            Book an appointment or browse our specialists.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/book-appointment" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0B5FA5]">
              Book Appointment
            </Link>
            <Link href="/doctors" className="rounded-xl border border-white/40 px-4 py-2 text-sm font-semibold text-white">
              Find a Doctor
            </Link>
            <Link href="/specialities" className="rounded-xl border border-white/40 px-4 py-2 text-sm font-semibold text-white">
              Browse Specialties
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
