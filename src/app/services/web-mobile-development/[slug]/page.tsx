import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getWebMobileDevelopmentServicePath,
  webMobileDevelopmentSlugs,
} from "@/data/services-menu";
import { iosAppDevelopmentSeo } from "@/data/ios-app-development-page";
import { enterpriseWebDevelopmentSeo } from "@/data/enterprise-web-development-page";
import { androidAppDevelopmentSeo } from "@/data/android-app-development-page";
import { reactNativeDevelopmentSeo } from "@/data/react-native-development-page";
import { flutterAppDevelopmentSeo } from "@/data/flutter-app-development-page";
import { getServicePageData } from "@/content/datafile";
import IosAppDevelopmentPage from "@/views/ios-app-development-page";
import EnterpriseWebDevelopmentPage from "@/views/enterprise-web-development-page";
import AndroidAppDevelopmentPage from "@/views/android-app-development-page";
import ReactNativeDevelopmentPage from "@/views/react-native-development-page";
import FlutterAppDevelopmentPage from "@/views/flutter-app-development-page";
import ServicePageRenderer from "@/components/DesignPage";
import ServiceSolutionPage from "@/views/service-solution-slug-page";

const IOS_APP_DEVELOPMENT_SLUG = "ios-app-development";
const ENTERPRISE_WEB_DEVELOPMENT_SLUG = "enterprise-web-development";
const ANDROID_APP_DEVELOPMENT_SLUG = "android-app-development";
const REACT_NATIVE_DEVELOPMENT_SLUG = "react-native-development";
const FLUTTER_APP_DEVELOPMENT_SLUG = "flutter-app-development";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...webMobileDevelopmentSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!webMobileDevelopmentSlugs.has(slug)) return {};

  const canonical = getWebMobileDevelopmentServicePath(slug);

  if (slug === IOS_APP_DEVELOPMENT_SLUG) {
    return {
      title: iosAppDevelopmentSeo.title,
      description: iosAppDevelopmentSeo.description,
      openGraph: {
        title: iosAppDevelopmentSeo.ogTitle,
        description: iosAppDevelopmentSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: iosAppDevelopmentSeo.twitterTitle,
        description: iosAppDevelopmentSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === ENTERPRISE_WEB_DEVELOPMENT_SLUG) {
    return {
      title: enterpriseWebDevelopmentSeo.title,
      description: enterpriseWebDevelopmentSeo.description,
      openGraph: {
        title: enterpriseWebDevelopmentSeo.ogTitle,
        description: enterpriseWebDevelopmentSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: enterpriseWebDevelopmentSeo.twitterTitle,
        description: enterpriseWebDevelopmentSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === ANDROID_APP_DEVELOPMENT_SLUG) {
    return {
      title: androidAppDevelopmentSeo.title,
      description: androidAppDevelopmentSeo.description,
      openGraph: {
        title: androidAppDevelopmentSeo.ogTitle,
        description: androidAppDevelopmentSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: androidAppDevelopmentSeo.twitterTitle,
        description: androidAppDevelopmentSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === REACT_NATIVE_DEVELOPMENT_SLUG) {
    return {
      title: reactNativeDevelopmentSeo.title,
      description: reactNativeDevelopmentSeo.description,
      openGraph: {
        title: reactNativeDevelopmentSeo.ogTitle,
        description: reactNativeDevelopmentSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: reactNativeDevelopmentSeo.twitterTitle,
        description: reactNativeDevelopmentSeo.twitterDescription,
      },
      alternates: { canonical },
    };
  }

  if (slug === FLUTTER_APP_DEVELOPMENT_SLUG) {
    return {
      title: flutterAppDevelopmentSeo.title,
      description: flutterAppDevelopmentSeo.description,
      openGraph: {
        title: flutterAppDevelopmentSeo.ogTitle,
        description: flutterAppDevelopmentSeo.ogDescription,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: flutterAppDevelopmentSeo.twitterTitle,
        description: flutterAppDevelopmentSeo.twitterDescription,
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

  if (!webMobileDevelopmentSlugs.has(slug)) {
    notFound();
  }

  if (slug === IOS_APP_DEVELOPMENT_SLUG) {
    return <IosAppDevelopmentPage />;
  }

  if (slug === ENTERPRISE_WEB_DEVELOPMENT_SLUG) {
    return <EnterpriseWebDevelopmentPage />;
  }

  if (slug === ANDROID_APP_DEVELOPMENT_SLUG) {
    return <AndroidAppDevelopmentPage />;
  }

  if (slug === REACT_NATIVE_DEVELOPMENT_SLUG) {
    return <ReactNativeDevelopmentPage />;
  }

  if (slug === FLUTTER_APP_DEVELOPMENT_SLUG) {
    return <FlutterAppDevelopmentPage />;
  }

  const pageData = getServicePageData(slug);
  if (pageData) {
    return <ServicePageRenderer pageData={pageData} slug={slug} />;
  }

  return <ServiceSolutionPage slug={slug} />;
}
