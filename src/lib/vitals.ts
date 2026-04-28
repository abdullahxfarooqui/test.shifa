import type { Metric } from "web-vitals";

function sendToAPI(metric: Metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    id: metric.id,
    navigationType: metric.navigationType,
    url: typeof window !== "undefined" ? window.location.pathname : "",
  });

  const url = "/api/vitals";

  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
  } else {
    fetch(url, { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true });
  }
}

export async function reportWebVitals(metric: Metric) {
  sendToAPI(metric);
}
