import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getEmergingTechnologiesServicePath,
  emergingTechnologiesSlugs,
} from "@/data/services-menu";
import { aiDevelopmentSeo } from "@/data/ai-development-page";
import { generativeAiDevelopmentSeo } from "@/data/generative-ai-development-page";
import { saasDevelopmentSeo } from "@/data/saas-development-page";
import { cloudSolutionsSeo } from "@/data/cloud-solutions-page";
import { devopsServicesSeo } from "@/data/devops-services-page";
import { aiChatbotSeo } from "@/data/ai-chatbot-development-page";
import { mlSolutionsSeo } from "@/data/machine-learning-solutions-page";
import { softwareTestingSeo } from "@/data/software-testing-page";
import { getServicePageData } from "@/content/datafile";
import AiDevelopmentPage from "@/views/ai-development-page";
import GenerativeAiDevelopmentPage from "@/views/generative-ai-development-page";
import SaasDevelopmentPage from "@/views/saas-development-page";
import CloudSolutionsPage from "@/views/cloud-solutions-page";
import DevopsServicesPage from "@/views/devops-services-page";
import AiChatbotDevelopmentPage from "@/views/ai-chatbot-development-page";
import MachineLearningSolutionsPage from "@/views/machine-learning-solutions-page";
import SoftwareTestingPage from "@/views/software-testing-page";
import ServicePageRenderer from "@/components/DesignPage";
import ServiceSolutionPage from "@/views/service-solution-slug-page";

const AI_DEVELOPMENT_SLUG = "ai-development";
const GENERATIVE_AI_DEVELOPMENT_SLUG = "generative-ai-development";
const SAAS_DEVELOPMENT_SLUG = "saas-development";
const CLOUD_SOLUTIONS_SLUG = "cloud-solutions";
const DEVOPS_SERVICES_SLUG = "devops-services";
const AI_CHATBOT_DEVELOPMENT_SLUG = "ai-chatbot-development";
const MACHINE_LEARNING_SOLUTIONS_SLUG = "machine-learning-solutions";
const SOFTWARE_TESTING_SLUG = "software-testing";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...emergingTechnologiesSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!emergingTechnologiesSlugs.has(slug)) return {};

  const canonical = getEmergingTechnologiesServicePath(slug);

  if (slug === AI_DEVELOPMENT_SLUG) {
    return {
      title: aiDevelopmentSeo.title,
      description: aiDevelopmentSeo.description,
      openGraph: {
        title: aiDevelopmentSeo.ogTitle,
        description: aiDevelopmentSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: aiDevelopmentSeo.twitterTitle,
        description: aiDevelopmentSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === GENERATIVE_AI_DEVELOPMENT_SLUG) {
    return {
      title: generativeAiDevelopmentSeo.title,
      description: generativeAiDevelopmentSeo.description,
      openGraph: {
        title: generativeAiDevelopmentSeo.ogTitle,
        description: generativeAiDevelopmentSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: generativeAiDevelopmentSeo.twitterTitle,
        description: generativeAiDevelopmentSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === SAAS_DEVELOPMENT_SLUG) {
    return {
      title: saasDevelopmentSeo.title,
      description: saasDevelopmentSeo.description,
      openGraph: {
        title: saasDevelopmentSeo.ogTitle,
        description: saasDevelopmentSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: saasDevelopmentSeo.twitterTitle,
        description: saasDevelopmentSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === CLOUD_SOLUTIONS_SLUG) {
    return {
      title: cloudSolutionsSeo.title,
      description: cloudSolutionsSeo.description,
      openGraph: {
        title: cloudSolutionsSeo.ogTitle,
        description: cloudSolutionsSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: cloudSolutionsSeo.twitterTitle,
        description: cloudSolutionsSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === DEVOPS_SERVICES_SLUG) {
    return {
      title: devopsServicesSeo.title,
      description: devopsServicesSeo.description,
      openGraph: {
        title: devopsServicesSeo.ogTitle,
        description: devopsServicesSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: devopsServicesSeo.twitterTitle,
        description: devopsServicesSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === AI_CHATBOT_DEVELOPMENT_SLUG) {
    return {
      title: aiChatbotSeo.title,
      description: aiChatbotSeo.description,
      openGraph: {
        title: aiChatbotSeo.ogTitle,
        description: aiChatbotSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: aiChatbotSeo.twitterTitle,
        description: aiChatbotSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === MACHINE_LEARNING_SOLUTIONS_SLUG) {
    return {
      title: mlSolutionsSeo.title,
      description: mlSolutionsSeo.description,
      openGraph: {
        title: mlSolutionsSeo.ogTitle,
        description: mlSolutionsSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: mlSolutionsSeo.twitterTitle,
        description: mlSolutionsSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === SOFTWARE_TESTING_SLUG) {
    return {
      title: softwareTestingSeo.title,
      description: softwareTestingSeo.description,
      openGraph: {
        title: softwareTestingSeo.ogTitle,
        description: softwareTestingSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: softwareTestingSeo.twitterTitle,
        description: softwareTestingSeo.twitterDescription,
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

  if (!emergingTechnologiesSlugs.has(slug)) {
    notFound();
  }

  if (slug === AI_DEVELOPMENT_SLUG) {
    return <AiDevelopmentPage />;
  }

  if (slug === GENERATIVE_AI_DEVELOPMENT_SLUG) {
    return <GenerativeAiDevelopmentPage />;
  }

  if (slug === SAAS_DEVELOPMENT_SLUG) {
    return <SaasDevelopmentPage />;
  }

  if (slug === CLOUD_SOLUTIONS_SLUG) {
    return <CloudSolutionsPage />;
  }

  if (slug === DEVOPS_SERVICES_SLUG) {
    return <DevopsServicesPage />;
  }

  if (slug === AI_CHATBOT_DEVELOPMENT_SLUG) {
    return <AiChatbotDevelopmentPage />;
  }

  if (slug === MACHINE_LEARNING_SOLUTIONS_SLUG) {
    return <MachineLearningSolutionsPage />;
  }

  if (slug === SOFTWARE_TESTING_SLUG) {
    return <SoftwareTestingPage />;
  }

  const pageData = getServicePageData(slug);
  if (pageData) {
    return <ServicePageRenderer pageData={pageData} slug={slug} />;
  }

  return <ServiceSolutionPage slug={slug} />;
}
