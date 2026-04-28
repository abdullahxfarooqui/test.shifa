import { NextRequest, NextResponse } from "next/server";

const LCP_WARN_MS = 2500;
const CLS_WARN = 0.1;
const INP_WARN_MS = 200;

export async function POST(request: NextRequest) {
  const metric = await request.json() as {
    name: string;
    value: number;
    rating: string;
    id: string;
    navigationType: string;
    url: string;
  };

  const { name, value, rating, url } = metric;

  if (process.env.NODE_ENV === "development") {
    console.log(`[web-vitals] ${name} = ${value} (${rating}) — ${url}`);
  }

  const exceeds =
    (name === "LCP" && value > LCP_WARN_MS) ||
    (name === "CLS" && value > CLS_WARN) ||
    (name === "INP" && value > INP_WARN_MS);

  if (exceeds) {
    console.warn(`[web-vitals WARN] ${name} = ${value} exceeds threshold — page: ${url}`);
  }

  return NextResponse.json({ ok: true });
}
