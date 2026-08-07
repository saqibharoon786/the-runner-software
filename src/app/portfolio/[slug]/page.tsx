import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioBySlug, portfolioSlugs } from "@/data/portfolio";
import PortfolioDetailPage from "@/views/portfolio-slug-page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...portfolioSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} Case Study | The Runner Software Solutions`,
    description: `${project.shortDescription} Built with ${project.technologies.join(", ")} for ${project.industry} in ${project.country}.`,
    openGraph: {
      title: `${project.title} | The Runner Software Solutions Portfolio`,
      description: project.shortDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!portfolioSlugs.has(slug)) {
    notFound();
  }

  const project = getPortfolioBySlug(slug)!;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    genre: project.industry,
    keywords: project.technologies.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PortfolioDetailPage slug={slug} />
    </>
  );
}
