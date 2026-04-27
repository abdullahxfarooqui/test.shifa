import type { ReactNode } from "react";
import type { Transition } from "framer-motion";

// ============================================================================
// CORE DOMAIN TYPES
// ============================================================================

export type DoctorRecord = {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialty: string;
  departmentSlug: string;
  qualifications: string[];
  experience: string;
  gender: "male" | "female";
  languages: string[];
  location: "islamabad" | "faisalabad";
  availability: string[];
  image: string;
  profileUrl: string;
  bio: string;
  procedures: string[];
};

// ============================================================================
// CATEGORY TYPES (Unified Taxonomy)
// ============================================================================

/** Article/Blog content categories */
export type ArticleCategory =
  | "cardiology"
  | "neurology"
  | "oncology"
  | "orthopaedics"
  | "paediatrics"
  | "womens-health"
  | "diabetes"
  | "nutrition"
  | "mental-health"
  | "first-aid"
  | "diagnosis"
  | "symptoms"
  | "elderly-care"
  | "general";

/** Specialty/Service categories */
export type SpecialtyCategory = "Surgical" | "Medical" | "Diagnostic" | "Critical Care";

/** Specialty listing categories (alias for consistency) */
export type ListingCategory = "Surgical" | "Medical" | "Diagnostic" | "Critical Care";

/** Oncology diagnostic categories */
export type DiagnosticCategory = "All" | "Screening" | "Imaging" | "Lab" | "Genetic";

/** News/Events category structure with metadata */
export type NewsCategory = {
  slug: string;
  label: string;
  urduLabel?: string;
};

// ============================================================================
// CONTENT TYPES
// ============================================================================

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  language: "en" | "ur";
  author: string;
  publishedAt: string;
  featuredImage: string;
  tags: string[];
  readingTimeMinutes: number;
  type: "blog" | "news" | "interview" | "patient-guide";
  sourceUrl?: string;
};

export type JobDepartment =
  | "physicians"
  | "nursing"
  | "allied-health"
  | "clinical"
  | "administration"
  | "engineering";

export type JobPosting = {
  id: string;
  slug: string;
  title: string;
  department: JobDepartment;
  type: "full-time" | "part-time" | "contract";
  location: string;
  postedAt: string;
  closingDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  applyUrl: string;
};

// ============================================================================
// SPECIALTY/SERVICE TYPES
// ============================================================================

export type ListingSpecialty = {
  slug: string;
  title: string;
  description: string;
  category: SpecialtyCategory;
  image: string;
  alt: string;
};

/** Generic facility information for specialty pages */
export type FacilityItem = {
  title: string;
  description: string;
};

/** Oncology facility with enhanced metadata */
export type Facility = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  image: string;
  alt: string;
  bento: string; // Grid layout CSS classes
};

// ============================================================================
// FORM & UI TYPES
// ============================================================================

export type AppointmentForm = {
  patientName: string;
  phone: string;
  email?: string;
  specialty: string;
  preferredDoctor?: string;
  preferredDate: string;
  preferredTime: "morning" | "afternoon" | "evening";
  location: "islamabad" | "faisalabad";
  visitType: "first-visit" | "follow-up";
  notes?: string;
};

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  department?: string;
  message: string;
};

export type FieldOption = {
  label: string;
  value: string;
};

export type FormField = {
  name: string;
  type: "text" | "email" | "tel" | "password" | "textarea" | "select" | "date" | "time" | "number";
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

/** Filter bar field configuration */
export type FilterField = {
  id: string;
  label: string;
  type: "select" | "text";
  options?: FieldOption[];
};

export type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "ghost";
};

export type HeroData = {
  headline: string;
  subheadline?: string;
  ctas: HeroCta[];
  backgroundType: "image" | "gradient" | "mesh";
  badge?: string;
};

export type PageSeo = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageCard = {
  id: string;
  heading: string;
  subheading: string;
  href: string;
  external?: boolean;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  availability?: string;
};

// ============================================================================
// ANIMATION & LIBRARY INTEGRATION TYPES
// ============================================================================

/** Framer Motion variant with proper typing */
export type AnimationVariant = {
  hidden: Record<string, number | string>;
  visible: Record<string, number | string | { staggerChildren?: number; transition?: Transition }>;
};

/** Recharts Tooltip formatter with proper generic typing */
export type ChartFormatterFn = (value: number | null) => [string, string];

/** Chart data point structure */
export type ChartDataPoint = {
  name: string;
  value: number;
};
