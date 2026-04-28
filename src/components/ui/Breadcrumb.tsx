import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { BreadcrumbCrumb } from "@/components/schema/BreadcrumbSchema";

type BreadcrumbProps = {
  crumbs: BreadcrumbCrumb[];
};

export function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden="true" />
              )}
              {isLast ? (
                <span className="font-medium text-slate-800" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-[#0B5FA5]">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
