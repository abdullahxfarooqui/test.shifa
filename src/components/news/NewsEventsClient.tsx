"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { FilterBar } from "@/components/shared/FilterBar";
import type { Article, ArticleCategory, NewsCategory } from "@/types/shifa";

type NewsEventsClientProps = {
  categories: NewsCategory[];
};

type NewsResponse = {
  items: Article[];
  total: number;
  page: number;
  pageSize: number;
};

export function NewsEventsClient({ categories }: NewsEventsClientProps) {
  const [category, setCategory] = useState("");
  const [lang, setLang] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState<NewsResponse>({ items: [], total: 0, page: 1, pageSize: 9 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (lang) params.set("lang", lang);
    params.set("page", String(page));
    params.set("pageSize", "9");

    fetch(`/api/news?${params.toString()}`, { signal: controller.signal })
      .then((res) => res.json())
      .then((json: NewsResponse) => setData(json))
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [category, lang, page]);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(data.total / data.pageSize || 1)), [data.total, data.pageSize]);
  const featuredArticle = data.items[0] ?? null;
  const remainingArticles = data.items.slice(1);

  const categoryOptions = useMemo(() => {
    const listedCategories = new Set(data.items.map((item) => item.category));
    const options = categories
      .filter((entry) => listedCategories.has(entry.slug as ArticleCategory))
      .map((entry) => ({ value: entry.slug, label: entry.label }));

    if (category && !options.some((option) => option.value === category)) {
      const fallbackLabel = categories.find((entry) => entry.slug === category)?.label ?? category.replace(/-/g, " ");
      options.unshift({ value: category, label: fallbackLabel });
    }

    return [{ value: "", label: "All" }, ...options];
  }, [categories, category, data.items]);

  const languageOptions = useMemo(() => {
    const listedLanguages = Array.from(new Set(data.items.map((item) => item.language))).sort();
    const labelMap: Record<string, string> = {
      en: "English",
      ur: "Urdu",
    };

    const options = listedLanguages.map((value) => ({
      value,
      label: labelMap[value] ?? value.toUpperCase(),
    }));

    if (lang && !options.some((option) => option.value === lang)) {
      options.unshift({ value: lang as "en" | "ur", label: labelMap[lang] ?? lang.toUpperCase() });
    }

    return [{ value: "", label: "All" }, ...options];
  }, [data.items, lang]);

  return (
    <div className="space-y-6">
      <FilterBar
        fields={[
          {
            id: "category",
            label: "Category",
            type: "select",
            options: categoryOptions,
          },
          {
            id: "lang",
            label: "Language",
            type: "select",
            options: languageOptions,
          },
        ]}
        values={{ category, lang }}
        onChange={(name, value) => {
          setIsLoading(true);
          setPage(1);
          if (name === "category") setCategory(value);
          if (name === "lang") setLang(value);
        }}
      />

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-slate-100" />
          ))}
        </div>
      ) : null}

      {!isLoading && featuredArticle ? (
        (() => {
          const isExternal = Boolean(featuredArticle.sourceUrl && !featuredArticle.sourceUrl.includes("/health-library/blogs/"));
          const href = isExternal ? featuredArticle.sourceUrl! : `/health-library/blogs/${featuredArticle.slug}`;

          return (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="inline-flex rounded-full bg-[#fef2f2] px-3 py-1 text-xs font-semibold tracking-wide text-[#C8102E]">
                Featured
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="font-semibold uppercase text-[#C8102E]">{featuredArticle.category.replace(/-/g, " ")}</span>
                <span>•</span>
                <span>{featuredArticle.readingTimeMinutes} min read</span>
                <span>•</span>
                <span>{new Date(featuredArticle.publishedAt).toLocaleDateString("en-PK", { year: "numeric", month: "short", day: "numeric" })}</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">{featuredArticle.title}</h2>
              <p className="mt-3 max-w-4xl text-base text-slate-600">{featuredArticle.excerpt}</p>
              <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="mt-5 inline-flex items-center rounded-lg bg-[#C8102E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9B0C23] transition"
              >
                Read featured article →
              </Link>
            </article>
          );
        })()
      ) : null}

      {!isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {remainingArticles.map((article) =>
            (() => {
              const isExternal = Boolean(article.sourceUrl && !article.sourceUrl.includes("/health-library/blogs/"));
              const href = isExternal ? article.sourceUrl! : `/health-library/blogs/${article.slug}`;

              return (
                <article key={article.id} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-semibold uppercase tracking-wide text-[#C8102E]">{article.category.replace(/-/g, " ")}</span>
                    <div className="flex gap-3">
                      <span>{article.readingTimeMinutes} min read</span>
                      <span>{new Date(article.publishedAt).toLocaleDateString("en-PK", { month: "short", day: "numeric" })}</span>
                    </div>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 group-hover:text-[#C8102E]">{article.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">{article.category.replace(/-/g, " ")}</span>
                    {isExternal ? <span className="rounded-full bg-amber-50 px-2 py-1 text-amber-700">External</span> : null}
                  </div>
                  <Link
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="mt-5 inline-block text-sm font-semibold text-[#C8102E] hover:text-[#9B0C23] transition"
                  >
                    Read full article →
                  </Link>
                </article>
              );
            })(),
          )}
        </div>
      ) : null}

      {!isLoading && data.items.length === 0 ? <p className="text-sm text-slate-600">No news items available for selected filters.</p> : null}

      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => {
            setIsLoading(true);
            setPage((prev) => Math.max(1, prev - 1));
          }}
          disabled={page === 1 || isLoading}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-slate-600">
          Page {page} of {totalPages}
        </span>
        <button
          type="button"
          onClick={() => {
            setIsLoading(true);
            setPage((prev) => Math.min(totalPages, prev + 1));
          }}
          disabled={page >= totalPages || isLoading}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
