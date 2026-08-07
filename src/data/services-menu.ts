import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Building2,
  Boxes,
  Users2,
  UserPlus,
  Lightbulb,
  RefreshCw,
  Wrench,
  Plug,
  Monitor,
  Globe,
  ShoppingCart,
  FileText,
  Smartphone,
  Bot,
  Sparkles,
  MessageSquare,
  Brain,
  Cloud,
  Server,
  Palette,
  TestTube2,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

export type ServiceColumn = {
  title: string;
  description?: string;
  items: ServiceItem[];
};

export const serviceColumns: ServiceColumn[] = [
  {
    title: "Software Development Services",
    description: "Build scalable software tailored to your business goals.",
    items: [
      { title: "Custom Software Development", slug: "custom-software-development", description: "Build custom enterprise-grade software for your business.", icon: Code2, featured: true },
      { title: "Enterprise Software Development", slug: "enterprise-software-development", description: "Large-scale platforms for complex enterprise operations.", icon: Building2 },
      { title: "Software Product Development", slug: "software-product-development", description: "End-to-end product engineering from MVP to scale.", icon: Boxes },
      { title: "Dedicated Development Team", slug: "dedicated-development-team", description: "Senior engineers embedded exclusively in your workflow.", icon: Users2 },
      { title: "IT Staff Augmentation", slug: "it-staff-augmentation", description: "Extend your team with vetted developers on demand.", icon: UserPlus },
      { title: "Software Consulting", slug: "software-consulting", description: "Strategic guidance on architecture, roadmap, and delivery.", icon: Lightbulb },
      { title: "Legacy Software Modernization", slug: "legacy-software-modernization", description: "Migrate and refactor aging systems for modern performance.", icon: RefreshCw },
      { title: "Software Maintenance & Support", slug: "software-maintenance-support", description: "Proactive monitoring, fixes, and continuous improvements.", icon: Wrench },
      { title: "API Development & Integration", slug: "api-development-integration", description: "Connect systems with secure, scalable API layers.", icon: Plug },
    ],
  },
  {
    title: "Web & Mobile Development",
    items: [
      { title: "Web Development", slug: "web-development", description: "High-performance web apps with modern frameworks.", icon: Monitor },
      { title: "Enterprise Web Development", slug: "enterprise-web-development", description: "Secure, scalable web platforms for global teams.", icon: Globe },
      { title: "Ecommerce Development", slug: "ecommerce-development", description: "Conversion-focused stores with payments and analytics.", icon: ShoppingCart },
      { title: "CMS Development", slug: "cms-development", description: "Flexible content platforms tailored to your editors.", icon: FileText },
      { title: "Mobile App Development", slug: "mobile-app-development", description: "Native and cross-platform apps users love.", icon: Smartphone },
      { title: "Android App Development", slug: "android-app-development", description: "Polished Android apps for phones, tablets, and TV.", icon: Smartphone },
      { title: "iOS App Development", slug: "ios-app-development", description: "Premium iOS experiences built for App Store success.", icon: Smartphone },
      { title: "Flutter App Development", slug: "flutter-app-development", description: "Beautiful cross-platform apps from a single codebase.", icon: Smartphone },
      { title: "React Native Development", slug: "react-native-development", description: "Fast mobile delivery with shared React expertise.", icon: Smartphone },
    ],
  },
  {
    title: "Emerging Technologies",
    items: [
      { title: "AI Development", slug: "ai-development", description: "Intelligent features that automate and augment decisions.", icon: Bot },
      { title: "Generative AI Development", slug: "generative-ai-development", description: "LLM-powered products for content, search, and workflows.", icon: Sparkles },
      { title: "AI Chatbot Development", slug: "ai-chatbot-development", description: "Conversational assistants for support and sales.", icon: MessageSquare },
      { title: "Machine Learning Solutions", slug: "machine-learning-solutions", description: "Predictive models trained on your business data.", icon: Brain },
      { title: "SaaS Development", slug: "saas-development", description: "Multi-tenant cloud products built to scale globally.", icon: Cloud },
      { title: "Cloud Solutions", slug: "cloud-solutions", description: "AWS, Azure, and GCP architecture that scales securely.", icon: Cloud },
      { title: "DevOps Services", slug: "devops-services", description: "CI/CD pipelines, infrastructure, and observability.", icon: Server },
      { title: "UI/UX Design", slug: "ui-ux-design", description: "Research-driven interfaces that drive adoption.", icon: Palette },
      { title: "QA & Software Testing", slug: "software-testing", description: "Manual and automated QA for reliable releases.", icon: TestTube2 },
    ],
  },
];

export const allServices: ServiceItem[] = serviceColumns.flatMap((col) => col.items);

/** Pillar page for the Software Development service cluster */
export const SOFTWARE_DEVELOPMENT_PILLAR_PATH = "/services/software-development" as const;

/** Child services nested under the Software Development pillar (first mega-menu column) */
export const softwareDevelopmentSlugs = new Set(serviceColumns[0].items.map((item) => item.slug));

export const serviceSlugs = new Set(allServices.map((s) => s.slug));

/** Flat-route slugs still served from `/[slug]` (non–software-development services + solutions) */
export const flatServiceSlugs = new Set([...serviceSlugs].filter((slug) => !softwareDevelopmentSlugs.has(slug)));

export function isSoftwareDevelopmentService(slug: string) {
  return softwareDevelopmentSlugs.has(slug);
}

export function getSoftwareDevelopmentServicePath(slug: string) {
  return `${SOFTWARE_DEVELOPMENT_PILLAR_PATH}/${slug}` as const;
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getServicePath(slug: string) {
  // Prefer canonical path from the centralized datafile when available
  try {
    // Import lazily to avoid potential circular dependencies at module-eval time
    // (Next.js resolves static imports during build; this keeps runtime safe).
    // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
    const { getServicePageData } = require("@/content/datafile");
    const pageData = getServicePageData(slug);
    if (pageData && pageData.seo && pageData.seo.canonicalPath) {
      return pageData.seo.canonicalPath as string;
    }
  } catch (err) {
    // fall back to existing behavior if import fails
  }

  if (isSoftwareDevelopmentService(slug)) {
    return getSoftwareDevelopmentServicePath(slug);
  }
  return `/${slug}` as const;
}
