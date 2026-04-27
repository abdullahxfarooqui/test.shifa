import { specialties as legacySpecialties } from "@/lib/medical-data";
import { specialtyPageConfig } from "@/lib/specialty-page-config";
import type { ListingCategory, ListingSpecialty } from "@/types/shifa";

const fallbackImages: Record<ListingCategory, { image: string; alt: string }> = {
  Medical: {
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80",
    alt: "Specialty consultation at Shifa International Hospitals Islamabad",
  },
  Surgical: {
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    alt: "Surgical care planning at Shifa International Hospitals Islamabad",
  },
  Diagnostic: {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    alt: "Diagnostic imaging at Shifa International Hospitals Islamabad",
  },
  "Critical Care": {
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
    alt: "Critical care services at Shifa International Hospitals Islamabad",
  },
};

const specialtyMediaBySlug: Record<string, { image: string; alt: string }> = {
  anesthesiology: {
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=82",
    alt: "Anesthesiology monitoring and perioperative care setup at Shifa International Hospitals Islamabad",
  },
  audiology: {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "Audiology hearing assessment and rehabilitation consultation at Shifa International Hospitals Islamabad",
  },
  cardiology: {
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1600&q=82",
    alt: "Cardiology specialist consultation and heart care at Shifa International Hospitals Islamabad",
  },
  "cardiac-surgery": {
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=82",
    alt: "Cardiac surgery planning and operative care pathway at Shifa International Hospitals Islamabad",
  },
  "dentistry-and-orthodontics": {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=82",
    alt: "Dentistry and orthodontics treatment planning at Shifa International Hospitals Islamabad",
  },
  dermatology: {
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1600&q=82",
    alt: "Dermatology consultation for skin and hair conditions at Shifa International Hospitals Islamabad",
  },
  "emergency-medicine": {
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=82",
    alt: "Emergency medicine and trauma response care at Shifa International Hospitals Islamabad",
  },
  "endocrinology-and-diabetes": {
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=1600&q=82",
    alt: "Endocrinology and diabetes specialist clinic at Shifa International Hospitals Islamabad",
  },
  endocrinology: {
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=1600&q=82",
    alt: "Endocrinology consultation and long-term diabetes management at Shifa International Hospitals Islamabad",
  },
  ent: {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "ENT consultation for ear nose and throat conditions at Shifa International Hospitals Islamabad",
  },
  "gastroenterology-and-hepatology": {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "Gastroenterology and hepatology specialist care at Shifa International Hospitals Islamabad",
  },
  "general-surgery": {
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=82",
    alt: "General surgery and minimally invasive procedures at Shifa International Hospitals Islamabad",
  },
  "infectious-diseases": {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "Infectious diseases consultation and infection control at Shifa International Hospitals Islamabad",
  },
  "internal-medicine": {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "Internal medicine consultation for chronic disease management at Shifa International Hospitals Islamabad",
  },
  nephrology: {
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=82",
    alt: "Nephrology and kidney care pathway at Shifa International Hospitals Islamabad",
  },
  neurology: {
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1600&q=82",
    alt: "Neurology consultation and advanced neuro diagnostics at Shifa International Hospitals Islamabad",
  },
  neurosurgery: {
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=82",
    alt: "Neurosurgery planning and brain spine care at Shifa International Hospitals Islamabad",
  },
  "obstetrics-and-gynaecology": {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "Obstetrics and gynaecology maternal care services at Shifa International Hospitals Islamabad",
  },
  "medical-oncology": {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=82",
    alt: "Medical oncology consultation and cancer therapy planning at Shifa International Hospitals Islamabad",
  },
  "radiation-oncology": {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=82",
    alt: "Radiation oncology and precision treatment planning at Shifa International Hospitals Islamabad",
  },
  oncology: {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=82",
    alt: "Comprehensive oncology care and multidisciplinary cancer center at Shifa International Hospitals Islamabad",
  },
  ophthalmology: {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=82",
    alt: "Ophthalmology consultation for vision and eye care at Shifa International Hospitals Islamabad",
  },
  orthopaedics: {
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=82",
    alt: "Orthopaedics and joint replacement care at Shifa International Hospitals Islamabad",
  },
  orthopedics: {
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=82",
    alt: "Orthopedics and musculoskeletal treatment planning at Shifa International Hospitals Islamabad",
  },
  paediatrics: {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "Paediatrics and child health services at Shifa International Hospitals Islamabad",
  },
  "pathology-and-laboratory-medicine": {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=82",
    alt: "Pathology and laboratory medicine diagnostics at Shifa International Hospitals Islamabad",
  },
  "physical-medicine-and-rehabilitation": {
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1600&q=82",
    alt: "Physical medicine and rehabilitation support at Shifa International Hospitals Islamabad",
  },
  "plastic-surgery": {
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=82",
    alt: "Plastic surgery and reconstructive procedures at Shifa International Hospitals Islamabad",
  },
  psychiatry: {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "Psychiatry consultation and mental health support at Shifa International Hospitals Islamabad",
  },
  "pulmonology-and-critical-care": {
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=82",
    alt: "Pulmonology and critical care respiratory support at Shifa International Hospitals Islamabad",
  },
  "radiology-and-imaging": {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=82",
    alt: "Radiology and imaging diagnostics at Shifa International Hospitals Islamabad",
  },
  radiology: {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=82",
    alt: "Advanced radiology imaging services at Shifa International Hospitals Islamabad",
  },
  rheumatology: {
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=82",
    alt: "Rheumatology and autoimmune care consultation at Shifa International Hospitals Islamabad",
  },
  urology: {
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=82",
    alt: "Urology and lithotripsy treatment pathway at Shifa International Hospitals Islamabad",
  },
  "liver-transplant": {
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=82",
    alt: "Liver transplant program consultation at Shifa International Hospitals Islamabad",
  },
  "bone-marrow-transplant": {
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=82",
    alt: "Bone marrow transplant care planning at Shifa International Hospitals Islamabad",
  },
  "kidney-transplant": {
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=82",
    alt: "Kidney transplant specialist consultation at Shifa International Hospitals Islamabad",
  },
  "corneal-transplant": {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=82",
    alt: "Corneal transplant and ophthalmic surgery care at Shifa International Hospitals Islamabad",
  },
  transplants: {
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=82",
    alt: "Comprehensive organ transplant center consultation at Shifa International Hospitals Islamabad",
  },
};

const explicitCategoryMap: Record<string, ListingCategory> = {
  audiology: "Diagnostic",
  "cardiac-surgery": "Surgical",
  "dentistry-and-orthodontics": "Surgical",
  "emergency-medicine": "Critical Care",
  "general-surgery": "Surgical",
  neurosurgery: "Surgical",
  "obstetrics-and-gynaecology": "Surgical",
  orthopaedics: "Surgical",
  orthopedics: "Surgical",
  "pathology-and-laboratory-medicine": "Diagnostic",
  "plastic-surgery": "Surgical",
  "pulmonology-and-critical-care": "Critical Care",
  "radiology-and-imaging": "Diagnostic",
  radiology: "Diagnostic",
  urology: "Surgical",
  transplants: "Critical Care",
  "liver-transplant": "Critical Care",
  "bone-marrow-transplant": "Critical Care",
  "kidney-transplant": "Critical Care",
  "corneal-transplant": "Critical Care",
};

const hiddenFromListings = new Set<string>([
  "orthopedics",
  "radiology",
  "endocrinology",
  "oncology",
]);

const legacyMediaBySlug = legacySpecialties.reduce<Record<string, { image: string; alt: string; category: ListingCategory }>>(
  (acc, item) => {
    acc[item.slug] = {
      image: item.image,
      alt: item.alt,
      category: item.category,
    };
    return acc;
  },
  {},
);

function getCategoryForSlug(slug: string): ListingCategory {
  return explicitCategoryMap[slug] ?? legacyMediaBySlug[slug]?.category ?? "Medical";
}

export function getSpecialtyListingData(): ListingSpecialty[] {
  return Object.values(specialtyPageConfig)
    .filter((item) => !hiddenFromListings.has(item.slug))
    .map((item) => {
    const category = getCategoryForSlug(item.slug);
      const media = specialtyMediaBySlug[item.slug] ?? legacyMediaBySlug[item.slug] ?? fallbackImages[category];

      return {
        slug: item.slug,
        title: item.name,
        description: item.tagline,
        category,
        image: media.image,
        alt: media.alt,
      };
    });
}

export function getHomeSpecialtyPreview(limit = 6): ListingSpecialty[] {
  const featuredOrder = ["cardiology", "oncology", "neurology", "orthopaedics", "transplants", "radiology"];
  const all = getSpecialtyListingData();
  const bySlug = all.reduce<Record<string, ListingSpecialty>>((acc, item) => {
    acc[item.slug] = item;
    return acc;
  }, {});

  const featured = featuredOrder.map((slug) => bySlug[slug]).filter(Boolean);
  if (featured.length >= limit) return featured.slice(0, limit);

  const seen = new Set(featured.map((item) => item.slug));
  const remainder = all.filter((item) => !seen.has(item.slug));
  return [...featured, ...remainder].slice(0, limit);
}
