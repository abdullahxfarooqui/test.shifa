import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogDetailClient } from "@/components/blog/BlogDetailClient";
import { articleEnhancements } from "@/data/article-enhancements";
import { healthArticles } from "@/data/health-articles";

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

  return <BlogDetailClient article={article} enhancement={enhancement} />;
}
