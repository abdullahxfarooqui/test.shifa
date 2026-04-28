// JSON-LD Schema type definitions for strict TypeScript support

export interface SchemaBase {
  "@context": string;
  "@type": string;
}

export interface MedicalConditionSchema extends SchemaBase {
  "@type": "MedicalCondition";
  name: string;
  description: string;
  url: string;
  possibleTreatment?: MedicalTherapySchema;
}

export interface MedicalTherapySchema {
  "@type": "MedicalTherapy";
  name: string;
}

export interface FAQSchema extends SchemaBase {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export interface PhysicianSchema extends SchemaBase {
  "@type": "Physician";
  name: string;
  medicalSpecialty: string;
  worksFor: {
    "@type": "Hospital";
    name: string;
  };
  address: {
    "@type": "PostalAddress";
    addressLocality: string;
    addressCountry: string;
  };
  url: string;
}

export interface MedicalOrganizationSchema {
  "@type": "MedicalOrganization" | "Hospital";
  "@id": string;
  name: string;
  alternateName?: string;
  url: string;
  logo?: string;
  image?: string;
  telephone: string;
  email?: string;
  foundingDate?: string;
  numberOfBeds?: number;
  description?: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
  openingHours?: string;
  priceRange?: string;
  currenciesAccepted?: string;
  paymentAccepted?: string;
  medicalSpecialty: string[];
  availableService?: Array<{ "@type": string; name: string }>;
  accreditation?: string;
  sameAs?: string[];
}

export interface WebSiteSchema {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  publisher: { "@id": string };
  inLanguage: string;
  potentialAction: {
    "@type": "SearchAction";
    target: {
      "@type": "EntryPoint";
      urlTemplate: string;
    };
    "query-input": string;
  };
}

export interface SiteGraphSchema {
  "@context": string;
  "@graph": (MedicalOrganizationSchema | WebSiteSchema)[];
}

// Union type for all supported JSON-LD schemas
export type JSONLDSchema =
  | MedicalOrganizationSchema
  | WebSiteSchema
  | MedicalConditionSchema
  | FAQSchema
  | PhysicianSchema
  | SiteGraphSchema;

// Helper function to safely stringify and escape JSON-LD
export function stringifySchema(schema: JSONLDSchema): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
