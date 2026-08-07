import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudySlugs, getCaseStudyBySlug } from "@/data/case-studies-menu";
import CaseStudyDetailPage from "@/views/case-study-slug-page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...caseStudySlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) return {};

  return {
    title: `${study.title} Case Study | The Runner Software Solutions`,
    description: `${study.shortDescription} ${study.businessImpact}. Built for ${study.industry} in ${study.country}.`,
    openGraph: {
      title: `${study.title} Case Study | The Runner Software Solutions`,
      description: study.shortDescription,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!caseStudySlugs.has(slug)) {
    notFound();
  }

  const study = getCaseStudyBySlug(slug)!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.shortDescription,
    about: study.industry,
    keywords: study.technologies.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudyDetailPage slug={slug} />
    </>
  );
}
