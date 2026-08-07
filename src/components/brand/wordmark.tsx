import { logoColors } from "@/lib/brand-colors";

export type WordmarkVariant = "color" | "white" | "black" | "blue";
export type WordmarkLayout = "horizontal" | "stacked";

type WordmarkProps = {
  variant?: WordmarkVariant;
  layout?: WordmarkLayout;
  className?: string;
};

function colors(variant: WordmarkVariant) {
  switch (variant) {
    case "white":
      return { the: "rgba(255,255,255,0.75)", runner: logoColors.white, sub: "rgba(255,255,255,0.85)" };
    case "black":
      return { the: logoColors.black, runner: logoColors.black, sub: logoColors.black };
    case "blue":
      return { the: logoColors.accent, runner: logoColors.royal, sub: logoColors.accent };
    default:
      return { the: logoColors.royal, runner: logoColors.navy, sub: logoColors.accent };
  }
}

export function Wordmark({ variant = "color", layout = "horizontal", className = "" }: WordmarkProps) {
  const c = colors(variant);
  const stacked = layout === "stacked";

  return (
    <div
      className={`flex flex-col ${stacked ? "items-center text-center" : "items-start whitespace-nowrap"} ${className}`}
      aria-hidden="true"
    >
      <div className={`flex items-center gap-2 ${stacked ? "justify-center" : ""}`}>
        <span className="h-px w-3 bg-current opacity-40" style={{ color: c.the }} />
        <span
          className="text-[9px] font-semibold uppercase tracking-[0.38em]"
          style={{ color: c.the, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          The
        </span>
        <span className="h-px w-3 bg-current opacity-40" style={{ color: c.the }} />
      </div>
      <span
        className={`font-extrabold uppercase leading-none tracking-[0.04em] ${stacked ? "mt-1.5 text-[22px]" : "mt-0.5 text-[19px] sm:text-[21px]"}`}
        style={{ color: c.runner, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
      >
        Runner
      </span>
      <span
        className={`font-semibold uppercase leading-tight tracking-[0.22em] ${stacked ? "mt-1.5 text-[8px]" : "mt-1 text-[7.5px] sm:text-[8px]"}`}
        style={{ color: c.sub, fontFamily: "'Segoe UI', system-ui, sans-serif" }}
      >
        Software Solutions
      </span>
    </div>
  );
}
