import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getDesignServicePath,
  designSlugs,
} from "@/data/services-menu";
import { uiUxDesignSeo } from "@/data/ui-ux-design-page";
import { getServicePageData } from "@/content/datafile";
import UiUxDesignPage from "@/views/ui-ux-design-page";
import ServicePageRenderer from "@/components/DesignPage";
import ServiceSolutionPage from "@/views/service-solution-slug-page";

const UI_UX_DESIGN_SLUG = "ui-ux-design";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...designSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!designSlugs.has(slug)) return {};

  const canonical = getDesignServicePath(slug);

  if (slug === UI_UX_DESIGN_SLUG) {
    return {
      title: uiUxDesignSeo.title,
      description: uiUxDesignSeo.description,
      openGraph: {
        title: uiUxDesignSeo.ogTitle,
        description: uiUxDesignSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: uiUxDesignSeo.twitterTitle,
        description: uiUxDesignSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  const pageData = getServicePageData(slug);
  if (pageData) {
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

  if (!designSlugs.has(slug)) {
    notFound();
  }

  if (slug === UI_UX_DESIGN_SLUG) {
    return <UiUxDesignPage />;
  }

  const pageData = getServicePageData(slug);
  if (pageData) {
    return <ServicePageRenderer pageData={pageData} slug={slug} />;
  }

  return <ServiceSolutionPage slug={slug} />;
}
