import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServicePageData, getAllServiceSlugs } from "@/content/datafile";
import ServicePageRenderer from "@/components/DesignPage";
import ServiceSolutionPage from "@/views/service-solution-slug-page";

type PageParams = {
  params: Promise<{ pillar: string; slug: string }> | { pillar: string; slug: string };
};

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs
    .map((slug) => {
      const pageData = getServicePageData(slug);
      if (!pageData) return null;
      const parts = pageData.seo.canonicalPath.split("/").filter(Boolean);
      // canonicalPath is like '/services/web-mobile-development/cms-development'
      const pillar = parts[1] || ""; // parts[0] === 'services'
      return { pillar, slug };
    })
    .filter(Boolean) as Array<{ pillar: string; slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { pillar, slug } = (await params) as { pillar: string; slug: string };
  const pageData = getServicePageData(slug);
  if (!pageData) return {};
  return {
    title: pageData.seo.title,
    description: pageData.seo.description,
    openGraph: {
      title: pageData.seo.title,
      description: pageData.seo.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.seo.title,
      description: pageData.seo.description,
    },
    alternates: { canonical: pageData.seo.canonicalPath },
  };
}

export default async function Page({ params }: PageParams) {
  const { pillar, slug } = (await params) as { pillar: string; slug: string };

  const pageData = getServicePageData(slug);
  if (pageData) {
    // Ensure requested pillar matches canonical path; otherwise 404
    const canonicalPillar = pageData.seo.canonicalPath.split("/").filter(Boolean)[1];
    if (canonicalPillar !== pillar) {
      notFound();
    }
    return <ServicePageRenderer pageData={pageData} slug={slug} />;
  }

  // Fallback to legacy renderer for non-datafile slugs
  return <ServiceSolutionPage slug={slug} />;
}
