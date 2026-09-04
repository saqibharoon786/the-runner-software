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

const emergingTechnologiesSlugs = [
  "ai-development",
  "generative-ai-development",
  "ai-chatbot-development",
  "machine-learning-solutions",
  "saas-development",
  "cloud-solutions",
  "devops-services",
  "software-testing",
];

const designSlugs = ["ui-ux-design"];

const webMobileDevelopmentSlugs = [
  "web-development",
  "enterprise-web-development",
  "ecommerce-development",
  "cms-development",
  "mobile-app-development",
  "android-app-development",
  "ios-app-development",
  "flutter-app-development",
  "react-native-development",
];

const softwareDevelopmentRedirects = softwareDevelopmentSlugs.map((slug) => ({
  source: `/${slug}`,
  destination: `/services/software-development/${slug}`,
  permanent: true,
}));

const emergingTechnologiesRedirects = emergingTechnologiesSlugs.map((slug) => ({
  source: `/${slug}`,
  destination: `/services/emerging-technologies/${slug}`,
  permanent: true,
}));

const designRedirects = designSlugs.map((slug) => ({
  source: `/${slug}`,
  destination: `/services/design/${slug}`,
  permanent: true,
}));

const webMobileDevelopmentRedirects = webMobileDevelopmentSlugs.map((slug) => ({
  source: `/${slug}`,
  destination: `/services/web-mobile-development/${slug}`,
  permanent: true,
}));

const legacyDesignRedirects = [
  {
    source: "/services/emerging-technologies/ui-ux-design",
    destination: "/services/design/ui-ux-design",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["framer-motion", "motion-dom", "motion-utils"],
  async redirects() {
    return [...softwareDevelopmentRedirects, ...emergingTechnologiesRedirects, ...designRedirects, ...webMobileDevelopmentRedirects, ...legacyDesignRedirects];
  },
};

export default nextConfig;
