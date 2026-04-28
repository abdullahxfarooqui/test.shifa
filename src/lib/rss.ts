import type { Article } from "@/types/shifa";

const stripCdata = (value: string) => value.replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "").trim();

function pickCategory(raw: string): Article["category"] {
  const lower = raw.toLowerCase();
  if (lower.includes("heart") || lower.includes("cardio")) return "cardiology";
  if (lower.includes("neuro")) return "neurology";
  if (lower.includes("onco")) return "oncology";
  if (lower.includes("women") || lower.includes("female")) return "womens-health";
  if (lower.includes("children") || lower.includes("pediatric")) return "paediatrics";
  if (lower.includes("elder")) return "elderly-care";
  if (lower.includes("nutrition")) return "nutrition";
  if (lower.includes("symptom")) return "symptoms";
  if (lower.includes("diagnos")) return "diagnosis";
  return "general";
}

export function parseRssFeed(xml: string): Article[] {
  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

  return items.map((item, index) => {
    const title = stripCdata(item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "Untitled");
    const link = item.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ?? "https://www.shifa.com.pk/health-library";
    const description = stripCdata(item.match(/<description>([\s\S]*?)<\/description>/)?.[1] ?? "");
    const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? new Date().toUTCString();
    const categoryRaw = stripCdata(item.match(/<category>([\s\S]*?)<\/category>/)?.[1] ?? "general");
    const image = item.match(/<media:content[^>]*url=\"([^\"]+)\"/)?.[1] ?? "";

    return {
      id: `rss-${index}`,
      slug: link.split("/").filter(Boolean).pop() ?? `article-${index}`,
      title,
      excerpt: description.replace(/<[^>]+>/g, "").slice(0, 180),
      content: description,
      category: pickCategory(categoryRaw),
      language: /[\u0600-\u06FF]/.test(title) ? "ur" : "en",
      author: "Shifa News",
      publishedAt: new Date(pubDate).toISOString(),
      featuredImage: image,
      tags: [categoryRaw],
      readingTimeMinutes: 3,
      type: "news",
      sourceUrl: link,
    };
  });
}
