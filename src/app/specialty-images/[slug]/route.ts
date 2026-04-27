import { getSpecialtyTemplateData } from "@/lib/specialty-page-config";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function hashToHue(input: string) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash) % 360;
}

function getSpecialtyCode(name: string) {
  const parts = name
    .split(/\s+/)
    .map((part) => part.replace(/[^A-Za-z]/g, ""))
    .filter(Boolean)
    .filter((part) => !["and", "of", "the"].includes(part.toLowerCase()));

  if (parts.length === 0) return "MED";
  if (parts.length === 1) return parts[0].slice(0, 4).toUpperCase();
  return parts
    .slice(0, 3)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function getTopicLabel(slug: string) {
  if (slug.includes("derma")) return "SKIN CARE";
  if (slug.includes("cardio") || slug.includes("heart")) return "HEART CARE";
  if (slug.includes("neuro")) return "BRAIN AND NERVE";
  if (slug.includes("nephro") || slug.includes("kidney")) return "KIDNEY CARE";
  if (slug.includes("oncology") || slug.includes("cancer")) return "CANCER CARE";
  if (slug.includes("ent") || slug.includes("audiology")) return "EAR NOSE THROAT";
  if (slug.includes("gastro") || slug.includes("hepat")) return "DIGESTIVE CARE";
  if (slug.includes("urology")) return "UROLOGY CARE";
  if (slug.includes("obstetric") || slug.includes("gynaec")) return "WOMEN HEALTH";
  if (slug.includes("paedi") || slug.includes("pediatric")) return "CHILD HEALTH";
  if (slug.includes("radio") || slug.includes("pathology") || slug.includes("lab")) return "DIAGNOSTICS";
  if (slug.includes("surgery")) return "SURGICAL CARE";
  if (slug.includes("transplant")) return "TRANSPLANT CARE";
  if (slug.includes("infectious")) return "INFECTION CARE";
  if (slug.includes("psychiatry")) return "MENTAL HEALTH";
  if (slug.includes("pulmon") || slug.includes("critical")) return "RESPIRATORY CARE";
  return "SPECIALTY CARE";
}

function getAccentToken(slug: string) {
  if (slug.includes("cardio") || slug.includes("heart")) return "M44 20c8 0 14 6 14 14 0 12-14 22-22 28C28 56 14 46 14 34c0-8 6-14 14-14 4 0 7 2 8 5 1-3 4-5 8-5z";
  if (slug.includes("neuro")) return "M20 44c0-8 6-14 14-14h10c8 0 14 6 14 14v4H20v-4zm8-12V20h8v12h-8zm16 0V24h8v8h-8z";
  if (slug.includes("derma")) return "M16 44c0-8 6-14 14-14h12c8 0 14 6 14 14v4H16v-4zm12-16c0-6 4-10 10-10s10 4 10 10";
  if (slug.includes("nephro") || slug.includes("kidney") || slug.includes("urology")) return "M36 18c8 10 14 16 14 24 0 10-7 18-14 18s-14-8-14-18c0-8 6-14 14-24z";
  if (slug.includes("oncology")) return "M24 22h24v6H24v-6zm4 10h16v6H28v-6zm-2 10h20v6H26v-6z";
  if (slug.includes("ent") || slug.includes("audiology")) return "M22 34c0-8 6-14 14-14 7 0 12 4 14 10-2-2-5-3-8-3-6 0-10 4-10 10 0 4 2 7 5 9-8-1-15-6-15-12z";
  if (slug.includes("radio") || slug.includes("pathology") || slug.includes("diagnostic")) return "M36 16l18 10v20L36 56 18 46V26l18-10zm0 8-10 6v12l10 6 10-6V30l-10-6z";
  if (slug.includes("surgery") || slug.includes("transplant")) return "M20 22h16v6H20v-6zm18 0h6v6h-6v-6zM24 32h20v6H24v-6zm-4 10h24v6H20v-6z";
  if (slug.includes("obstetric") || slug.includes("gynaec")) return "M24 42c0-10 8-18 18-18 8 0 14 6 14 14 0 10-8 18-18 18-8 0-14-6-14-14z";
  if (slug.includes("paedi")) return "M28 26a8 8 0 1 0 0.01 0zM20 46c0-7 6-12 16-12s16 5 16 12v2H20v-2z";
  if (slug.includes("psychiatry")) return "M24 24h20v8H24v-8zm0 12h16v8H24v-8zm20 0h8v8h-8v-8z";
  if (slug.includes("pulmon") || slug.includes("critical")) return "M24 24c0 8 4 14 12 20 8-6 12-12 12-20h8c0 11-5 21-20 30C21 45 16 35 16 24h8z";
  return "M32 16h8v14h14v8H40v14h-8V38H18v-8h14V16z";
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const specialty = getSpecialtyTemplateData(slug);
  const name = specialty?.name ?? slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  const title = xmlEscape(name);
  const subtitle = xmlEscape("Shifa International Hospitals Islamabad");
  const code = xmlEscape(getSpecialtyCode(name));
  const topicLabel = xmlEscape(getTopicLabel(slug));

  const hue = hashToHue(slug);
  const hue2 = (hue + 42) % 360;
  const accentPath = getAccentToken(slug);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1600" height="900" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t d">
  <title id="t">${title}</title>
  <desc id="d">${title} specialty image</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${hue}, 68%, 26%)" />
      <stop offset="100%" stop-color="hsl(${hue2}, 64%, 36%)" />
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="rgba(255,255,255,0.24)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0)" />
    </radialGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#bg)" />
  <circle cx="1320" cy="140" r="260" fill="url(#glow)" />
  <circle cx="280" cy="760" r="300" fill="url(#glow)" />
  <circle cx="1220" cy="640" r="220" fill="rgba(255,255,255,0.08)" />

  <g opacity="0.22" stroke="white" stroke-width="2">
    <path d="M0 180h1600" />
    <path d="M0 360h1600" />
    <path d="M0 540h1600" />
    <path d="M0 720h1600" />
    <path d="M240 0v900" />
    <path d="M520 0v900" />
    <path d="M800 0v900" />
    <path d="M1080 0v900" />
    <path d="M1360 0v900" />
  </g>

  <g opacity="0.14" fill="white">
    <circle cx="190" cy="180" r="6" />
    <circle cx="260" cy="210" r="6" />
    <circle cx="330" cy="170" r="6" />
    <circle cx="400" cy="220" r="6" />
    <circle cx="470" cy="180" r="6" />
  </g>

  <g transform="translate(1180 520)">
    <circle cx="0" cy="0" r="160" fill="rgba(255,255,255,0.12)" />
    <path d="${accentPath}" fill="white" transform="scale(4.8) translate(-36 -36)" />
  </g>

  <rect x="96" y="96" width="940" height="300" rx="28" fill="rgba(255,255,255,0.12)" />
  <rect x="96" y="420" width="350" height="72" rx="36" fill="rgba(255,255,255,0.17)" />
  <text x="128" y="468" fill="white" font-size="36" font-family="Inter, Segoe UI, Arial, sans-serif" font-weight="700">${topicLabel}</text>
  <rect x="1360" y="664" width="160" height="120" rx="24" fill="rgba(255,255,255,0.16)" />
  <text x="1400" y="740" fill="white" font-size="52" font-family="Inter, Segoe UI, Arial, sans-serif" font-weight="800">${code}</text>
  <text x="140" y="220" fill="white" font-size="84" font-family="Inter, Segoe UI, Arial, sans-serif" font-weight="700">${title}</text>
  <text x="140" y="288" fill="rgba(255,255,255,0.92)" font-size="34" font-family="Inter, Segoe UI, Arial, sans-serif" font-weight="500">${subtitle}</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
