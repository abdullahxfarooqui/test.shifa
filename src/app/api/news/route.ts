import { NextRequest } from "next/server";

import { healthArticles } from "@/data/health-articles";
import { parseRssFeed } from "@/lib/rss";

export const revalidate = 3600;

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category")?.toLowerCase() ?? "";
  const language = request.nextUrl.searchParams.get("lang")?.toLowerCase() ?? "";
  const page = Number(request.nextUrl.searchParams.get("page") ?? "1");
  const pageSize = Number(request.nextUrl.searchParams.get("pageSize") ?? "9");

  let rssItems: typeof healthArticles = [];

  try {
    const response = await fetch("https://shifanews.com/feed", {
      next: { revalidate: 3600 },
      headers: { "user-agent": "Mozilla/5.0" },
    });

    if (response.ok) {
      const xml = await response.text();
      rssItems = parseRssFeed(xml);
    }
  } catch {
    // RSS feed unavailable — fall back to local articles only
  }

  const allItems = [...healthArticles, ...rssItems];

  const filtered = allItems.filter((item) => {
    const categoryMatch = !category || item.category === category;
    const languageMatch = !language || item.language === language;
    return categoryMatch && languageMatch;
  });

  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return Response.json({ items, total: filtered.length, page, pageSize });
}
