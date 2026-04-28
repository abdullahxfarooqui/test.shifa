"use client";

import { useReportWebVitals } from "next/web-vitals";
import { reportWebVitals } from "@/lib/vitals";

export function WebVitalsReporter() {
  useReportWebVitals(reportWebVitals);
  return null;
}
