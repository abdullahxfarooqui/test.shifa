import type { Doctor } from "@/lib/medical-data";

const PLACEHOLDER_PATTERNS = ["unsplash", "pexels", "placeholder", "stock", "avatar", "default"];
const SITE_URL = "https://www.shifa.com.pk";

function isRealPhoto(url: string): boolean {
  if (!url) return false;
  return !PLACEHOLDER_PATTERNS.some((p) => url.toLowerCase().includes(p));
}

type PhysicianSchemaProps = { doctor: Doctor };

export function PhysicianSchema({ doctor }: PhysicianSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: doctor.specialty,
    description: doctor.summary,
    knowsLanguage: doctor.languages,
    affiliation: {
      "@type": "Hospital",
      name: "Shifa International Hospital",
      url: SITE_URL,
    },
    url: `${SITE_URL}/doctors/${doctor.slug}`,
  };

  if (isRealPhoto(doctor.image)) {
    schema.image = doctor.image;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
