import type { Metadata } from "next";
import HomePage from "@/views/home-page";

export const metadata: Metadata = {
  title: "Custom Software Development Company | The Runner Software Solutions",
  description:
    "The Runner Software Solutions builds custom software, ERP, CRM, SaaS, AI, web and mobile applications for businesses in the USA, UK, Canada, UAE, Saudi Arabia, Australia and Europe.",
  openGraph: {
    title: "Custom Software Development Company | The Runner Software Solutions",
    description:
      "The Runner Software Solutions builds custom software, ERP, CRM, SaaS, AI, web and mobile applications for businesses in the USA, UK, Canada, UAE, Saudi Arabia, Australia and Europe.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Runner Software Solutions",
  description:
    "Custom software development company delivering scalable ERP, CRM, SaaS, AI, web and mobile solutions worldwide.",
  url: "/",
  areaServed: ["USA", "Canada", "UK", "Australia", "Germany", "UAE", "Saudi Arabia", "Singapore"],
  knowsAbout: [
    "Custom Software Development",
    "ERP",
    "CRM",
    "SaaS",
    "Mobile App Development",
    "AI Solutions",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePage />
    </>
  );
}
