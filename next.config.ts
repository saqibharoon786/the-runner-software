import type { NextConfig } from "next";

const softwareDevelopmentSlugs = [
  "custom-software-development",
  "enterprise-software-development",
  "software-product-development",
  "dedicated-development-team",
  "it-staff-augmentation",
  "software-consulting",
  "legacy-software-modernization",
  "software-maintenance-support",
  "api-development-integration",
];

const softwareDevelopmentRedirects = softwareDevelopmentSlugs.map((slug) => ({
  source: `/${slug}`,
  destination: `/services/software-development/${slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["framer-motion", "motion-dom", "motion-utils"],
  async redirects() {
    return softwareDevelopmentRedirects;
  },
};

export default nextConfig;
