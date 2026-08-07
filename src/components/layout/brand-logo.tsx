"use client";

import Link from "next/link";
import { RunnerLogo } from "@/components/brand/runner-logo";

type BrandLogoProps = {
  className?: string;
  onClick?: () => void;
  asLink?: boolean;
  /** Use white logo on dark backgrounds without white pill */
  darkBackground?: boolean;
};

export function BrandLogo({ className = "", onClick, asLink = true, darkBackground = false }: BrandLogoProps) {
  const logo = darkBackground ? (
    <RunnerLogo variant="mono-white" iconSize={32} className={className} />
  ) : (
    <>
      <div
        className={`inline-flex items-center rounded-lg bg-white px-2 py-1.5 shadow-sm transition duration-200 hover:shadow-md sm:hidden ${className}`}
      >
        <RunnerLogo variant="icon" iconSize={30} />
      </div>
      <div
        className={`hidden items-center rounded-xl bg-white px-2 py-1.5 shadow-sm transition duration-200 hover:shadow-md sm:inline-flex xl:scale-[0.92] xl:px-2.5 2xl:scale-100 2xl:px-3 2xl:py-2 ${className}`}
      >
        <RunnerLogo variant="horizontal" iconSize={28} className="gap-2 2xl:gap-3" />
      </div>
    </>
  );

  if (!asLink) return logo;

  return (
    <Link href="/" onClick={onClick} className="shrink-0" aria-label="The Runner Software Solutions home">
      {logo}
    </Link>
  );
}
