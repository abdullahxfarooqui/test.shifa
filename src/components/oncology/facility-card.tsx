"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Facility } from "@/components/oncology/oncology-page";
import { ChevronRight } from "lucide-react";

interface FacilityCardProps {
  facility: Facility;
  className?: string;
  onClick?: () => void;
  featured?: boolean;
  wide?: boolean;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, className, onClick, featured, wide }) => {
  const { icon: Icon, title, text, image } = facility;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View details for ${title}`}
      className={cn(
        "group relative flex h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 text-left shadow-sm transition-all duration-300 hover:border-[#1E88E5]/30 hover:shadow-md",
        (featured || wide) ? "flex-col md:flex-row" : "flex-col",
        className
      )}
    >
      {/* Image Header */}
      <div className={cn(
        "relative shrink-0 overflow-hidden",
        featured ? "h-48 w-full md:h-full md:w-1/2" : wide ? "h-32 w-full md:h-full md:w-2/5" : "h-32 w-full sm:h-48"
      )}>
        <Image 
          src={image} 
          alt={`Advanced ${title} facility at Shifa Cancer Center`} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqMcAAAUGAQG68qUaAAAAAElFTkSuQmCC"
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className={cn(
        "relative z-10 flex flex-1 flex-col px-6 pb-6",
        featured ? "justify-center p-8 md:p-12 md:w-1/2" : wide ? "justify-center p-6 md:p-8 md:w-3/5" : ""
      )}>
        {/* Icon Container (Overlapping the image) */}
        <div className={cn(
          "relative mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm transition-all duration-300 group-hover:border-[#1E88E5]/20 group-hover:shadow-md",
          (featured || wide) ? "" : "-mt-6"
        )}>
          <Icon className="relative z-10 h-5 w-5 text-[#0B5FA5] transition-transform duration-300 group-hover:scale-110" />
        </div>

        <h3 className={cn("font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#1E88E5]", featured ? "text-3xl" : "text-xl")}>{title}</h3>

        <div className={cn("mt-3 leading-relaxed text-slate-500", featured ? "text-base" : "text-sm")}>
          <p className="line-clamp-2">
            {text}
          </p>
        </div>

        <div className="mt-auto pt-6">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E88E5] transition-colors duration-300 group-hover:text-[#E53935]">
            Explore Details
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </p>
        </div>
      </div>
    </button>
  );
};

export default FacilityCard;
