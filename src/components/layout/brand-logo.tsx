"use client";

import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  onClick?: () => void;
  asLink?: boolean;
  /** Use light logo on dark backgrounds (header / footer) */
  darkBackground?: boolean;
};

export function BrandLogo({ className = "", onClick, asLink = true, darkBackground = false }: BrandLogoProps) {
  const logo = (
    <Image
      src={darkBackground ? "/brand/logo-runner-white.png" : "/brand/logo-runner.png"}
      alt="The Runner Software Solutions"
      width={124}
      height={160}
      priority
      className={`h-11 w-auto object-contain sm:h-12 xl:h-14 ${className}`}
    />
  );

  if (!asLink) return logo;

  return (
    <Link href="/" onClick={onClick} className="shrink-0" aria-label="The Runner Software Solutions home">
      {logo}
    </Link>
  );
}
