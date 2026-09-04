import type { Metadata } from "next";
import { webMobileDevelopmentSeo } from "@/data/web-mobile-development-pillar-page";
import WebMobileDevelopmentPillarPage from "@/views/web-mobile-development-pillar-page";

export const metadata: Metadata = {
  title: webMobileDevelopmentSeo.title,
  description: webMobileDevelopmentSeo.description,
  openGraph: {
    title: webMobileDevelopmentSeo.ogTitle,
    description: webMobileDevelopmentSeo.ogDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: webMobileDevelopmentSeo.twitterTitle,
    description: webMobileDevelopmentSeo.twitterDescription,
  },
  alternates: {
    canonical: webMobileDevelopmentSeo.canonicalPath,
  },
};

export default function Page() {
  return <WebMobileDevelopmentPillarPage />;
}
