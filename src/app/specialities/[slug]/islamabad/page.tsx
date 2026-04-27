import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingCTA } from "@/components/specialty/BookingCTA";
import { ConsultCallout } from "@/components/specialty/ConsultCallout";
import { DataVizBlock } from "@/components/specialty/DataVizBlock";
import { DiagnosticsAccordion } from "@/components/specialty/DiagnosticsAccordion";
import { FacilitiesGrid } from "@/components/specialty/FacilitiesGrid";
import { HeroSection } from "@/components/specialty/HeroSection";
import { MilestonesTimeline } from "@/components/specialty/MilestonesTimeline";
import { OverviewSection } from "@/components/specialty/OverviewSection";
import { StickySectionNav } from "@/components/specialty/StickySectionNav";
import { TeamStrip } from "@/components/specialty/TeamStrip";
import { TreatmentsTabs } from "@/components/specialty/TreatmentsTabs";
import { conditions, doctors } from "@/lib/medical-data";
import { getSpecialtyListingData } from "@/lib/specialty-listing";
import { getAllSpecialtySlugs, getSpecialtyTemplateData } from "@/lib/specialty-page-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type SpecialtyFaq = {
  question: string;
  answer: string;
};

function buildSpecialtyFaqs(
  specialtyName: string,
  whenToConsult: string,
  treatmentTitles: string[],
  consultSymptoms: string[],
  relatedConditionNames: string[],
): SpecialtyFaq[] {
  const topProcedures = treatmentTitles.slice(0, 4);
  const topSymptoms = consultSymptoms.slice(0, 4);
  const topConditions = relatedConditionNames.slice(0, 3);
  const firstProcedure = topProcedures[0] ?? `${specialtyName} procedure`;

  return [
    {
      question: `When should I see a ${specialtyName} specialist in Islamabad?`,
      answer: `${whenToConsult} Patients from Islamabad, Rawalpindi, DHA, and Bahria Town can book early specialist review to avoid delayed diagnosis.`,
    },
    {
      question: `What procedures are included in Shifa ${specialtyName}?`,
      answer: topProcedures.length
        ? `Common procedures and treatment pathways include ${topProcedures.join(", ")}.`
        : `Shifa ${specialtyName} provides specialist diagnostics and treatment pathways based on evidence-based protocols.`,
    },
    {
      question: `What is the consultation or procedure cost for ${specialtyName} in Islamabad?`,
      answer: `Consultation and procedure costs vary by clinical complexity, investigations, and treatment plan. For a tailored estimate for ${firstProcedure} in Islamabad, Rawalpindi, DHA, or Bahria Town, contact Shifa appointments at 051-8464646.`,
    },
    {
      question: `${specialtyName} ka doctor kab dikhana chahiye? (Roman Urdu)`,
      answer: topSymptoms.length
        ? `Agar ${topSymptoms.join(", ")} jaisi alamat barqarar rahen to ${specialtyName} specialist ko foran dikhayen. Jaldi diagnosis se behtar recovery hoti hai.`
        : `${specialtyName} se mutaliq pareshani ya alamat barqarar rahen to specialist consultation karna zaroori hai.`,
    },
    {
      question: `Which conditions are commonly managed by ${specialtyName} at Shifa?`,
      answer: topConditions.length
        ? `Commonly managed conditions include ${topConditions.join(", ")} with integrated diagnostics and follow-up care.`
        : `${specialtyName} manages both common and complex clinical conditions through multidisciplinary care pathways.`,
    },
    {
      question: `Do you provide second opinion in ${specialtyName} for patients from Rawalpindi and Islamabad?`,
      answer: `Yes. Shifa provides specialist second-opinion consultations in ${specialtyName} for patients from Islamabad, Rawalpindi, DHA, Bahria Town, and nearby areas.`,
    },
  ];
}

export async function generateStaticParams() {
  return getAllSpecialtySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getSpecialtyTemplateData(slug);

  if (!data) {
    return {
      title: "Specialty Not Found",
      robots: { index: false, follow: false },
    };
  }

  const seoDescription = `${data.tagline} Best ${data.name} in Islamabad for patients from Rawalpindi, DHA, and Bahria Town.`;
  const firstProcedure = data.treatments[0]?.title ?? data.name;

  return {
    title: `${data.name} | Shifa International Hospitals Islamabad`,
    description: seoDescription,
    keywords: `${data.name.toLowerCase()} islamabad, ${data.name.toLowerCase()} pakistan, shifa ${data.name.toLowerCase()}, best ${data.name.toLowerCase()} hospital islamabad, ${firstProcedure.toLowerCase()} in islamabad, ${data.name.toLowerCase()} rawalpindi`,
    alternates: { canonical: data.url },
    openGraph: {
      title: `${data.name} | Shifa International Hospitals`,
      description: seoDescription,
      url: data.url,
      siteName: "Shifa International Hospitals",
      type: "website",
      images: [
        {
          url: `${data.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${data.name} at Shifa International Hospitals Islamabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.name} | Shifa International Hospitals`,
      description: seoDescription,
      images: [`${data.url}/opengraph-image`],
    },
  };
}

export default async function SpecialtyIslamabadPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getSpecialtyTemplateData(slug);

  if (!data) {
    notFound();
  }

  const listingData = getSpecialtyListingData();
  const currentListing = listingData.find((item) => item.slug === data.slug);
  const specialtyFaqs = buildSpecialtyFaqs(
    data.name,
    data.whenToConsult,
    data.treatments.map((item) => item.title),
    data.consultSymptoms,
    conditions.filter((item) => item.relatedSpecialtySlug === data.slug).map((item) => item.name),
  );
  const fallbackDoctors = doctors.slice(0, 3).map((doctor) => ({
    name: doctor.name,
    designation: doctor.specialty,
    profile: `/doctors/${doctor.slug}`,
    experience: doctor.experience,
    hospitalAffiliation: "Shifa International Hospitals Islamabad",
  }));
  const topDoctors = (data.team.length > 0 ? data.team : fallbackDoctors).slice(0, 5);
  const reviewedBy = topDoctors[0]?.name ?? "Shifa Clinical Content Team";
  const lastUpdated = "April 2026";
  const relatedSpecialties = (currentListing
    ? listingData.filter((item) => item.category === currentListing.category && item.slug !== data.slug)
    : listingData.filter((item) => item.slug !== data.slug)
  ).slice(0, 4);
  const relatedConditions = conditions.filter((item) => item.relatedSpecialtySlug === data.slug).slice(0, 4);
  const procedureIds = data.treatments.slice(0, 6).map((item, index) => ({
    id: `${data.url}#procedure-${index + 1}`,
    name: item.title,
    description: item.description,
  }));

  const imageSchema = currentListing
    ? {
        "@type": "ImageObject",
        contentUrl: currentListing.image,
        caption: currentListing.alt,
        name: `${data.name} consultation at Shifa International Hospitals Islamabad`,
      }
    : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${data.url}#clinic`,
        name: `Shifa International Hospitals - ${data.name}`,
        url: data.url,
        telephone: "+92-51-8464646",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pitras Bukhari Road, H-8/4",
          addressLocality: "Islamabad",
          addressCountry: "PK",
        },
        areaServed: [
          { "@type": "City", name: "Islamabad" },
          { "@type": "City", name: "Rawalpindi" },
          { "@type": "Place", name: "DHA Islamabad" },
          { "@type": "Place", name: "Bahria Town" },
        ],
        medicalSpecialty: data.name,
        availableService: data.treatments.map((item) => item.title),
        image: imageSchema ? imageSchema.contentUrl : undefined,
        parentOrganization: {
          "@id": "https://www.shifa.com.pk/#organization",
          "@type": "MedicalOrganization",
          name: "Shifa International Hospitals Limited",
          url: "https://www.shifa.com.pk",
        },
      },
      {
        "@type": "MedicalSpecialty",
        "@id": `${data.url}#specialty`,
        name: data.name,
      },
      ...(imageSchema ? [imageSchema] : []),
      {
        "@type": "FAQPage",
        mainEntity: [
          ...specialtyFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        ],
      },
      ...procedureIds.map((item) => ({
        "@type": "MedicalProcedure",
        "@id": item.id,
        name: item.name,
        url: `${data.url}#treatments`,
        description: item.description,
        procedureType: data.name,
        howPerformed: item.description,
        relevantSpecialty: { "@id": `${data.url}#specialty` },
      })),
      ...relatedConditions.map((item) => ({
        "@type": "MedicalCondition",
        "@id": `https://www.shifa.com.pk/conditions/${item.slug}#condition`,
        name: item.name,
        url: `https://www.shifa.com.pk/conditions/${item.slug}`,
        possibleTreatment: procedureIds.slice(0, 3).map((procedure) => ({ "@id": procedure.id })),
      })),
      ...topDoctors.map((doctor) => ({
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: data.name,
        url: `https://www.shifa.com.pk${doctor.profile}`,
        worksFor: {
          "@id": "https://www.shifa.com.pk/#organization",
        },
        affiliation: {
          "@type": "MedicalOrganization",
          name: doctor.hospitalAffiliation,
          url: "https://www.shifa.com.pk",
        },
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shifa.com.pk" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Specialities",
            item: "https://www.shifa.com.pk/specialities",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.name,
            item: data.url,
          },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <HeroSection name={data.name} tagline={data.tagline} stats={data.heroStats} />

      <StickySectionNav
        items={[
          { id: "overview", label: "Overview" },
          { id: "facilities", label: "Facilities" },
          { id: "diagnostics", label: "Diagnostics" },
          { id: "treatments", label: "Treatments" },
          { id: "milestones", label: "Milestones" },
          { id: "data", label: "By the Numbers" },
          { id: "team", label: "Clinical Team" },
          { id: "consult", label: "When to Consult" },
          { id: "conditions-procedures", label: "Conditions and Procedures" },
          { id: "faq", label: "FAQs" },
          { id: "book", label: "Book" },
        ]}
      />

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.04em] text-[var(--color-text-3)]">
              Medical Review and Trust Signals
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-2)]">Medically reviewed by {reviewedBy}.</p>
            <p className="mt-1 text-sm text-[var(--color-text-2)]">Last updated: {lastUpdated}.</p>
            <p className="mt-1 text-sm text-[var(--color-text-2)]">
              Department credibility: JCI Gold-accredited hospital standards with specialist-led pathways for
              Islamabad, Rawalpindi, DHA, and Bahria Town.
            </p>
          </div>
        </div>
      </section>

      <OverviewSection specialtyName={data.name} paragraphs={data.overviewParagraphs} stats={data.overviewStats} />
      <FacilitiesGrid specialtyName={data.name} facilities={data.facilities} />
      <DiagnosticsAccordion diagnostics={data.diagnostics} />
      <TreatmentsTabs specialtyName={data.name} treatments={data.treatments} />
      <MilestonesTimeline specialtyName={data.name} milestones={data.milestones} />
      <DataVizBlock
        title={data.chart.title}
        description={data.chart.description}
        data={data.chart.data}
        legendLabel={`${data.name} clinical trend`}
      />
      <TeamStrip specialtyName={data.name} team={topDoctors} />
      <ConsultCallout paragraph={data.whenToConsult} symptoms={data.consultSymptoms} />

      <section id="conditions-procedures" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-[28px] font-semibold text-[var(--color-text-1)]">Condition to Specialty to Procedure</h2>
          <p className="mt-2 text-sm text-[var(--color-text-2)]">
            Understand how conditions are mapped to {data.name} and then to specific procedures at Shifa.
          </p>

          {relatedConditions.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedConditions.map((condition) => (
                <article key={condition.slug} className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.04em] text-[var(--color-text-3)]">MedicalCondition</p>
                  <Link href={`/conditions/${condition.slug}`} className="mt-2 inline-flex text-base font-semibold text-[var(--color-primary)] hover:underline">
                    {condition.name}
                  </Link>
                  <p className="mt-2 text-sm text-[var(--color-text-2)]">Mapped Specialty: {data.name}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {data.treatments.slice(0, 3).map((treatment) => (
                      <Link
                        key={`${condition.slug}-${treatment.title}`}
                        href={`${data.url}#treatments`}
                        className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-text-1)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                      >
                        {treatment.title}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 text-sm text-[var(--color-text-2)]">
              Condition-specific guides for {data.name} are being expanded. Browse procedures in the treatments section and book a specialist review.
            </div>
          )}
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 border-b border-[var(--color-border)] bg-[var(--color-surface)] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-[28px] font-semibold text-[var(--color-text-1)]">{data.name} FAQs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {specialtyFaqs.map((item) => (
              <article key={item.question} className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4">
                <h3 className="text-sm font-semibold text-[var(--color-text-1)]">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-2)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {(relatedSpecialties.length > 0 || relatedConditions.length > 0) && (
        <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_34px_-26px_rgba(15,23,42,0.45)]">
            <h2 className="text-2xl font-semibold text-[var(--text-dark)]">Related Specialty Resources</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Explore related departments and high-intent condition guides for faster diagnosis and treatment planning.
            </p>

            {relatedSpecialties.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0B5FA5]">Related Specialities</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedSpecialties.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/specialities/${item.slug}/islamabad`}
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-[#0B5FA5] hover:text-[#0B5FA5]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedConditions.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0B5FA5]">Condition Guides</h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {relatedConditions.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/conditions/${item.slug}`}
                        className="block rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-[#0B5FA5] hover:text-[#0B5FA5]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <BookingCTA specialtyName={data.name} phone="051-8464646" />
    </main>
  );
}
