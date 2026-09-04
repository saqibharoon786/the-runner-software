/** Static logo asset paths (public/brand) */
export const logoAssets = {
  runner: "/brand/logo-runner.png",
  runnerWhite: "/brand/logo-runner-white.png",
  horizontal: "/brand/logo-horizontal.svg",
  stacked: "/brand/logo-stacked.svg",
  icon: "/brand/logo-icon.svg",
  monoBlack: "/brand/logo-mono-black.svg",
  monoWhite: "/brand/logo-mono-white.svg",
  blue: "/brand/logo-blue.svg",
  transparent: "/brand/logo-transparent.svg",
  appIcon: "/brand/logo-app-icon.svg",
  appIconPng: "/brand/logo-app-icon.png",
  social: "/brand/logo-social.svg",
  favicon: "/favicon.svg",
  faviconPng: "/favicon-32.png",
  appleTouchIcon: "/apple-touch-icon.png",
} as const;

export type { LogoVariant } from "@/components/brand/runner-logo";
export { RunnerLogo } from "@/components/brand/runner-logo";
export { TrMonogram } from "@/components/brand/tr-monogram";
export { Wordmark } from "@/components/brand/wordmark";
