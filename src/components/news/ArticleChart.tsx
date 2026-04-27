"use client";

import dynamic from "next/dynamic";

import type { ArticleChart as ArticleChartType } from "@/data/article-enhancements";

const ArticleChartInner = dynamic(() => import("@/components/news/ArticleChartInner"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="h-[320px] animate-pulse rounded-xl bg-slate-100" />
    </div>
  ),
});

type ArticleChartProps = {
  chart: ArticleChartType;
};

export function ArticleChart({ chart }: ArticleChartProps) {
  return <ArticleChartInner chart={chart} />;
}
