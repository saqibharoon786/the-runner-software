import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, flatServiceSlugs, serviceSlugs } from "@/data/services-menu";
import { getSolutionBySlug, solutionSlugs } from "@/data/solutions-menu";
import ServiceSolutionPage from "@/views/service-solution-slug-page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getPageBySlug(slug: string) {
  const service = getServiceBySlug(slug);
  if (service) {
    return { title: service.title, description: service.description, type: "service" as const };
  }
  const solution = getSolutionBySlug(slug);
  if (solution) {
    return { title: solution.title, description: solution.description, type: "solution" as const };
  }
  return undefined;
}

export async function generateStaticParams() {
  return [...flatServiceSlugs, ...solutionSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) return {};

  const label = page.type === "solution" ? "Business Solution" : "Service";

  return {
    title: `${page.title} | The Runner Software Solutions`,
    description: `${page.description} Partner with The Runner Software Solutions for enterprise-grade ${label.toLowerCase()} delivery worldwide.`,
    openGraph: {
      title: `${page.title} | The Runner Software Solutions`,
      description: page.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!flatServiceSlugs.has(slug) && !solutionSlugs.has(slug)) {
    notFound();
  }

  return <ServiceSolutionPage slug={slug} />;
}
