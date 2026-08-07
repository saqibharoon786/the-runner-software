import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug, industrySlugs } from "@/data/industries-menu";
import IndustryPage from "@/views/industry-slug-page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...industrySlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) return {};

  return {
    title: `${industry.title} Software Development | The Runner Software Solutions`,
    description: `${industry.description} The Runner Software Solutions builds custom software for the ${industry.title.toLowerCase()} industry worldwide.`,
    openGraph: {
      title: `${industry.title} Software Development | The Runner Software Solutions`,
      description: industry.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `/industries/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!industrySlugs.has(slug)) {
    notFound();
  }

  return <IndustryPage slug={slug} />;
}
