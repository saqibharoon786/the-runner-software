import { TrMonogram, type MonogramVariant } from "@/components/brand/tr-monogram";
import { Wordmark, type WordmarkLayout, type WordmarkVariant } from "@/components/brand/wordmark";

export type LogoVariant =
  | "horizontal"
  | "stacked"
  | "icon"
  | "mono-black"
  | "mono-white"
  | "blue"
  | "transparent";

type RunnerLogoProps = {
  variant?: LogoVariant;
  iconSize?: number;
  className?: string;
};

function mapVariant(logoVariant: LogoVariant): { mono: MonogramVariant; word: WordmarkVariant; layout: WordmarkLayout; showWordmark: boolean } {
  switch (logoVariant) {
    case "icon":
      return { mono: "color", word: "color", layout: "horizontal", showWordmark: false };
    case "mono-black":
      return { mono: "black", word: "black", layout: "horizontal", showWordmark: true };
    case "mono-white":
      return { mono: "white", word: "white", layout: "horizontal", showWordmark: true };
    case "blue":
      return { mono: "blue", word: "blue", layout: "horizontal", showWordmark: true };
    case "stacked":
      return { mono: "color", word: "color", layout: "stacked", showWordmark: true };
    case "transparent":
    case "horizontal":
    default:
      return { mono: "color", word: "color", layout: "horizontal", showWordmark: true };
  }
}

export function RunnerLogo({ variant = "horizontal", iconSize = 40, className = "" }: RunnerLogoProps) {
  const { mono, word, layout, showWordmark } = mapVariant(variant);

  if (!showWordmark) {
    return (
      <div className={`inline-flex shrink-0 items-center ${className}`}>
        <TrMonogram size={iconSize} variant={mono} idSuffix={variant} />
      </div>
    );
  }

  if (layout === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
        <TrMonogram size={iconSize + 8} variant={mono} idSuffix={variant} />
        <Wordmark variant={word} layout="stacked" />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <TrMonogram size={iconSize} variant={mono} idSuffix={variant} />
      <Wordmark variant={word} layout="horizontal" />
    </div>
  );
}
