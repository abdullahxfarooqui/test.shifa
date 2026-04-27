"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Service = {
  id: string;
  heading: string;
  tagline: string;
  description: string;
  image: string;
  link?: string;
  badge?: string;
};

const services: Service[] = [
  {
    id: "cancer-center",
    heading: "SHIFA CANCER CENTER",
    tagline: "Hope, Healing, Wholeness",
    description:
      "Comprehensive cancer care with state-of-the-art treatment facilities, experienced oncologists, and patient-centered services for diagnosis, treatment, and support.",
    image: "/images/services/shifa-cancer-center.jpg",
    link: "/specialities/oncology/islamabad",
  },
  {
    id: "organ-transplant",
    heading: "ORGAN TRANSPLANT",
    tagline: "Where Second Chances Begin",
    description:
      "Leading transplant program offering liver, kidney, bone marrow, and corneal transplants with dedicated surgical teams and comprehensive post-transplant care.",
    image: "/images/services/organ-transplant.jpg",
    link: "/specialities/transplants/islamabad",
  },
  {
    id: "lab-automation",
    heading: "TOTAL LAB AUTOMATION",
    tagline: "Precision You Can Trust",
    description:
      "Advanced laboratory with fully automated diagnostic systems ensuring accurate, rapid results for pathology, blood tests, and clinical investigations.",
    image: "/images/services/lab-automation.jpg",
    link: "/health-library/blogs/understanding-lab-test-results-pakistan",
  },
  {
    id: "heart-center",
    heading: "SHIFA HEART CENTER",
    tagline: "Your Heart, Our Mission",
    description:
      "Specialized cardiac care including interventional cardiology, open-heart surgery, and comprehensive heart disease management with 24/7 emergency services.",
    image: "/images/services/shifa-heart-center.jpg",
    link: "/specialities/cardiology/islamabad",
  },
  {
    id: "executive-clinics",
    heading: "EXECUTIVE CLINICS",
    tagline: "Where Comfort Meets Care",
    description:
      "Premium healthcare services designed for busy professionals with personalized attention, flexible scheduling, and comprehensive wellness evaluations.",
    image: "/images/services/executive-clinics.jpg",
  },
  {
    id: "lithotripsy",
    heading: "LITHOTRIPSY",
    tagline: "Relief Without Surgery",
    description:
      "Non-invasive shock wave treatment for kidney and urinary stones, offering effective relief with minimal recovery time and no surgical incision.",
    image: "/images/services/lithotripsy.jpg",
  },
  {
    id: "sunday-opd",
    heading: "SUNDAY OPD CLINICS",
    tagline: "Your Health, Your Schedule",
    description:
      "Extended outpatient services on weekends, providing convenient access to specialist consultations without disrupting your work week.",
    image: "/images/services/sunday-opd-clinics.jpg",
  },
  {
    id: "ambulance-services",
    heading: "SHIFA AMBULANCE SERVICES",
    tagline: "Technology Driven | Patient Centric | Future Ready",
    description:
      "Advanced fleet of ambulances equipped with life support systems, trained paramedics, and GPS tracking for rapid emergency response 24/7.",
    image: "/images/services/ambulance-services.jpg",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our Services & Centers
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            World-class healthcare facilities and specialized services designed to meet all your medical needs
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group h-full"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.heading}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Heading */}
                  <h3 className="font-bold text-sm leading-tight text-[#C8102E] mb-1">
                    {service.heading}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-semibold text-slate-600 mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 flex-1">
                    {service.description}
                  </p>

                  {/* CTA */}
                  {service.link ? (
                    <Link
                      href={service.link}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#C8102E] group-hover:text-[#9B0C23] transition-colors"
                    >
                      Learn more →
                    </Link>
                  ) : (
                    <div className="mt-4" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Discounts Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-[#C8102E] to-[#9B0C23] p-8 sm:p-12 text-center text-white"
        >
          <p className="text-sm font-semibold uppercase tracking-widest opacity-90">
            Limited Time Offer
          </p>
          <h3 className="mt-3 text-3xl sm:text-4xl font-bold">Special Discounts</h3>
          <p className="mt-3 text-lg opacity-90">
            Avail exclusive discounts on selected services and packages
          </p>
          <button className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-[#C8102E] hover:bg-slate-100 transition-colors">
            View Offers
          </button>
        </motion.div>
      </div>
    </section>
  );
}
