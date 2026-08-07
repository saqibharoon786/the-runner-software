import type { Metadata } from "next";
import { softwareDevelopmentSeo } from "@/data/software-development-pillar-page";
import SoftwareDevelopmentPillarPage from "@/views/software-development-pillar-page";

export const metadata: Metadata = {
  title: softwareDevelopmentSeo.title,
  description: softwareDevelopmentSeo.description,
  openGraph: {
    title: softwareDevelopmentSeo.ogTitle,
    description: softwareDevelopmentSeo.ogDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: softwareDevelopmentSeo.twitterTitle,
    description: softwareDevelopmentSeo.twitterDescription,
  },
  alternates: {
    canonical: softwareDevelopmentSeo.canonicalPath,
  },
};

export default function Page() {
  return <SoftwareDevelopmentPillarPage />;
}
