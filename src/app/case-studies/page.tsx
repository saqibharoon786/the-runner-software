import type { Metadata } from "next";
import CaseStudiesIndexPage from "@/views/case-studies-index-page";

export const metadata: Metadata = {
  title: "Case Studies | The Runner Software Solutions",
  description:
    "Explore real software implementation success stories. See how The Runner Software Solutions helps businesses automate operations, improve efficiency, and scale with custom software.",
  openGraph: {
    title: "Case Studies | The Runner Software Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/case-studies",
  },
};

export default function Page() {
  return <CaseStudiesIndexPage />;
}
