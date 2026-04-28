const SITE_URL = "https://www.shifa.com.pk";

export type BreadcrumbCrumb = {
  name: string;
  href: string;
};

type BreadcrumbSchemaProps = {
  crumbs: BreadcrumbCrumb[];
};

export function BreadcrumbSchema({ crumbs }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.href.startsWith("http") ? crumb.href : `${SITE_URL}${crumb.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
