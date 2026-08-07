import { logoColors } from "@/lib/brand-colors";

export type MonogramVariant = "color" | "white" | "black" | "blue";

type TrMonogramProps = {
  size?: number;
  variant?: MonogramVariant;
  className?: string;
  idSuffix?: string;
};

function palette(variant: MonogramVariant) {
  switch (variant) {
    case "white":
      return { primary: logoColors.white, secondary: logoColors.white, accent: logoColors.white };
    case "black":
      return { primary: logoColors.black, secondary: logoColors.black, accent: logoColors.black };
    case "blue":
      return { primary: logoColors.royal, secondary: logoColors.accent, accent: logoColors.accent };
    default:
      return { primary: logoColors.navy, secondary: logoColors.royal, accent: logoColors.accent };
  }
}

/** Clean geometric TR monogram — refined, minimal, enterprise-grade */
export function TrMonogram({ size = 48, variant = "color", className = "", idSuffix = "default" }: TrMonogramProps) {
  const c = palette(variant);
  const gradId = `tr-grad-${idSuffix}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {variant === "color" && (
        <defs>
          <linearGradient id={gradId} x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor={c.primary} />
            <stop offset="1" stopColor={c.secondary} />
          </linearGradient>
        </defs>
      )}
      <rect x="4" y="4" width="40" height="40" rx="10" fill={variant === "color" ? `${c.primary}08` : "transparent"} />
      {/* T — top bar */}
      <rect x="8" y="9" width="24" height="5" rx="1.25" fill={variant === "color" ? `url(#${gradId})` : c.primary} />
      {/* Shared stem (T + R) */}
      <rect x="16.5" y="9" width="5.5" height="30" rx="1.25" fill={variant === "color" ? `url(#${gradId})` : c.primary} />
      {/* R bowl */}
      <path
        d="M22 18.5H28.5C33.47 18.5 37.5 22.53 37.5 27.5C37.5 32.47 33.47 36.5 28.5 36.5H22V18.5Z"
        fill={variant === "color" ? c.secondary : c.primary}
        fillOpacity={variant === "color" ? 0.95 : 1}
      />
      <rect x="22" y="18.5" width="5.5" height="18" rx="0" fill={variant === "color" ? `url(#${gradId})` : c.primary} />
      {/* R leg */}
      <path
        d="M28.5 30.5L37 38.5"
        stroke={variant === "color" ? c.accent : c.primary}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
