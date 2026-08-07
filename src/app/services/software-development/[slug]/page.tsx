import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getSoftwareDevelopmentServicePath,
  softwareDevelopmentSlugs,
} from "@/data/services-menu";
import { customSoftwareSeo } from "@/data/custom-software-development-page";
import { enterpriseSoftwareSeo } from "@/data/enterprise-software-development-page";
import CustomSoftwareDevelopmentPage from "@/views/custom-software-development-page";
import EnterpriseSoftwareDevelopmentPage from "@/views/enterprise-software-development-page";
import ServiceSolutionPage from "@/views/service-solution-slug-page";

const CUSTOM_SOFTWARE_SLUG = "custom-software-development";
const ENTERPRISE_SOFTWARE_SLUG = "enterprise-software-development";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...softwareDevelopmentSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!softwareDevelopmentSlugs.has(slug)) return {};

  const canonical = getSoftwareDevelopmentServicePath(slug);

  if (slug === CUSTOM_SOFTWARE_SLUG) {
    return {
      title: customSoftwareSeo.title,
      description: customSoftwareSeo.description,
      openGraph: {
        title: customSoftwareSeo.ogTitle,
        description: customSoftwareSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: customSoftwareSeo.twitterTitle,
        description: customSoftwareSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === ENTERPRISE_SOFTWARE_SLUG) {
    return {
      title: enterpriseSoftwareSeo.title,
      description: enterpriseSoftwareSeo.description,
      openGraph: {
        title: enterpriseSoftwareSeo.ogTitle,
        description: enterpriseSoftwareSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: enterpriseSoftwareSeo.twitterTitle,
        description: enterpriseSoftwareSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | The Runner Software Solutions`,
    description: `${service.description} Partner with The Runner Software Solutions for enterprise-grade service delivery worldwide.`,
    openGraph: {
      title: `${service.title} | The Runner Software Solutions`,
      description: service.description,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!softwareDevelopmentSlugs.has(slug)) {
    notFound();
  }

  if (slug === CUSTOM_SOFTWARE_SLUG) {
    return <CustomSoftwareDevelopmentPage />;
  }

  if (slug === ENTERPRISE_SOFTWARE_SLUG) {
    return <EnterpriseSoftwareDevelopmentPage />;
  }

  return <ServiceSolutionPage slug={slug} />;
}
