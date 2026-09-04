// app/services/software-development/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getSoftwareDevelopmentServicePath,
  softwareDevelopmentSlugs,
} from "@/data/services-menu";
import { customSoftwareSeo } from "@/data/custom-software-development-page";
import { enterpriseSoftwareSeo } from "@/data/enterprise-software-development-page";
import { itStaffAugmentationSeo } from "@/data/it-staff-augmentation-page";
import { softwareConsultingSeo } from "@/data/software-consulting-page";
import { legacyModernizationSeo } from "@/data/legacy-software-modernization-page";
import { getServicePageData } from "@/content/datafile";
import CustomSoftwareDevelopmentPage from "@/views/custom-software-development-page";
import EnterpriseSoftwareDevelopmentPage from "@/views/enterprise-software-development-page";
import ItStaffAugmentationPage from "@/views/it-staff-augmentation-page";
import SoftwareConsultingPage from "@/views/software-consulting-page";
import LegacySoftwareModernizationPage from "@/views/legacy-software-modernization-page";
import ServicePageRenderer from "@/components/DesignPage";
import ServiceSolutionPage from "@/views/service-solution-slug-page";

const CUSTOM_SOFTWARE_SLUG = "custom-software-development";
const ENTERPRISE_SOFTWARE_SLUG = "enterprise-software-development";
const IT_STAFF_AUGMENTATION_SLUG = "it-staff-augmentation";
const SOFTWARE_CONSULTING_SLUG = "software-consulting";
const LEGACY_SOFTWARE_MODERNIZATION_SLUG = "legacy-software-modernization";

// List of slugs that use the new design
const NEW_DESIGN_SLUGS = [
  "software-product-development",
  "dedicated-development-team",
];

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

  // Check if this slug uses the new design
  if (NEW_DESIGN_SLUGS.includes(slug)) {
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
  }

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

  if (slug === IT_STAFF_AUGMENTATION_SLUG) {
    return {
      title: itStaffAugmentationSeo.title,
      description: itStaffAugmentationSeo.description,
      openGraph: {
        title: itStaffAugmentationSeo.ogTitle,
        description: itStaffAugmentationSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: itStaffAugmentationSeo.twitterTitle,
        description: itStaffAugmentationSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === SOFTWARE_CONSULTING_SLUG) {
    return {
      title: softwareConsultingSeo.title,
      description: softwareConsultingSeo.description,
      openGraph: {
        title: softwareConsultingSeo.ogTitle,
        description: softwareConsultingSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: softwareConsultingSeo.twitterTitle,
        description: softwareConsultingSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === LEGACY_SOFTWARE_MODERNIZATION_SLUG) {
    return {
      title: legacyModernizationSeo.title,
      description: legacyModernizationSeo.description,
      openGraph: {
        title: legacyModernizationSeo.ogTitle,
        description: legacyModernizationSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: legacyModernizationSeo.twitterTitle,
        description: legacyModernizationSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  // If this slug has a centralized datafile entry, use its SEO
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

  if (!softwareDevelopmentSlugs.has(slug)) {
    notFound();
  }

  // Check if this slug uses the new design
  if (NEW_DESIGN_SLUGS.includes(slug)) {
    const pageData = getServicePageData(slug);
    if (pageData) {
      return <ServicePageRenderer pageData={pageData} slug={slug} />;
    }
  }

  if (slug === CUSTOM_SOFTWARE_SLUG) {
    return <CustomSoftwareDevelopmentPage />;
  }

  if (slug === ENTERPRISE_SOFTWARE_SLUG) {
    return <EnterpriseSoftwareDevelopmentPage />;
  }

  if (slug === IT_STAFF_AUGMENTATION_SLUG) {
    return <ItStaffAugmentationPage />;
  }

  if (slug === SOFTWARE_CONSULTING_SLUG) {
    return <SoftwareConsultingPage />;
  }

  if (slug === LEGACY_SOFTWARE_MODERNIZATION_SLUG) {
    return <LegacySoftwareModernizationPage />;
  }

  // If this slug has an entry in the centralized datafile, render it
  const pageData = getServicePageData(slug);
  if (pageData) {
    return <ServicePageRenderer pageData={pageData} slug={slug} />;
  }

  return <ServiceSolutionPage slug={slug} />;
}