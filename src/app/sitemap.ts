import type { MetadataRoute } from "next";

import { conditions, doctors } from "@/lib/medical-data";
import { specialtyPageConfig } from "@/lib/specialty-page-config";
import { healthArticles } from "@/data/health-articles";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.shifa.com.pk");

const PATIENT_GUIDE_SLUGS = [
  "dengue-fever",
  "diabetes-management",
  "hypertension",
  "stroke-awareness",
  "knee-pain",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/specialities`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/health-library`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/doctors`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/international-patients`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/patient-portal`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/home-health`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/corporate`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/academics-research`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/search`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
    { url: `${SITE_URL}/specialities/oncology`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/health-library/blogs`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${SITE_URL}/health-library/patient-guide`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/health-library/calculators`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/health-library/interviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
  ];

  const specialtyRoutes: MetadataRoute.Sitemap = Object.values(specialtyPageConfig).map((s) => ({
    url: s.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const doctorRoutes: MetadataRoute.Sitemap = doctors.map((d) => ({
    url: `${SITE_URL}/doctors/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const conditionRoutes: MetadataRoute.Sitemap = conditions.map((c) => ({
    url: `${SITE_URL}/conditions/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = healthArticles.map((a) => ({
    url: `${SITE_URL}/health-library/blogs/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const guideRoutes: MetadataRoute.Sitemap = PATIENT_GUIDE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/health-library/patient-guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...specialtyRoutes,
    ...doctorRoutes,
    ...conditionRoutes,
    ...articleRoutes,
    ...guideRoutes,
  ];
}
