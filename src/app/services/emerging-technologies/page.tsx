import type { Metadata } from "next";
import { emergingTechnologiesSeo } from "@/data/emerging-technologies-pillar-page";
import EmergingTechnologiesPillarPage from "@/views/emerging-technologies-pillar-page";

export const metadata: Metadata = {
  title: emergingTechnologiesSeo.title,
  description: emergingTechnologiesSeo.description,
  openGraph: {
    title: emergingTechnologiesSeo.ogTitle,
    description: emergingTechnologiesSeo.ogDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: emergingTechnologiesSeo.twitterTitle,
    description: emergingTechnologiesSeo.twitterDescription,
  },
  alternates: {
    canonical: emergingTechnologiesSeo.canonicalPath,
  },
};

export default function Page() {
  return <EmergingTechnologiesPillarPage />;
}
