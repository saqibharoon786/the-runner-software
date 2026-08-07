import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Package,
  Building2,
  Rocket,
  Layers,
  RefreshCw,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  GitBranch,
  Palette,
  TestTube2,
  Boxes,
  Users2,
  Hospital,
  Dumbbell,
  GraduationCap,
  Store,
  Home,
  Workflow,
} from "lucide-react";
import { getBlogCategoryPath, getBlogArticlePath, getFeaturedArticles, getLatestArticles } from "@/data/blog";

export type BlogMenuCard = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  articleCount?: number;
  caseStudyCount?: number;
};

export const softwareDevelopmentCards: BlogMenuCard[] = [
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "Guides, architecture patterns, and enterprise implementation strategies.",
    icon: Code2,
    articleCount: 24,
  },
  {
    title: "Software Product Development",
    slug: "software-product-development",
    description: "Product lifecycle, roadmaps, and go-to-market software strategies.",
    icon: Package,
    articleCount: 18,
  },
  {
    title: "Enterprise Software",
    slug: "enterprise-software",
    description: "Build vs buy frameworks and enterprise platform selection.",
    icon: Building2,
    articleCount: 16,
  },
  {
    title: "MVP Development",
    slug: "mvp-development",
    description: "Validate product-market fit with focused MVPs in 90 days.",
    icon: Rocket,
    articleCount: 12,
  },
  {
    title: "Software Architecture",
    slug: "software-architecture",
    description: "Scalable patterns, microservices, and system design.",
    icon: Layers,
    articleCount: 14,
  },
  {
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "Phased modernization without disrupting daily operations.",
    icon: RefreshCw,
    articleCount: 20,
  },
];

export const technologyEngineeringCards: BlogMenuCard[] = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Enterprise web platforms, performance, and composable architecture.",
    icon: Globe,
    articleCount: 22,
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native vs cross-platform strategies for business growth.",
    icon: Smartphone,
    articleCount: 15,
  },
  {
    title: "AI Development",
    slug: "artificial-intelligence",
    description: "High-ROI AI use cases, ML pipelines, and automation.",
    icon: Bot,
    articleCount: 19,
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    description: "Multi-tenant products, billing, and scalable SaaS platforms.",
    icon: Layers,
    articleCount: 13,
  },
  {
    title: "Cloud Computing",
    slug: "cloud-computing",
    description: "Cloud architecture, migration, and cost optimization.",
    icon: Cloud,
    articleCount: 17,
  },
  {
    title: "DevOps",
    slug: "devops",
    description: "CI/CD pipelines, infrastructure as code, and release quality.",
    icon: GitBranch,
    articleCount: 11,
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Enterprise dashboards, design systems, and usability.",
    icon: Palette,
    articleCount: 10,
  },
  {
    title: "Software Testing",
    slug: "software-testing",
    description: "QA automation, test strategy, and continuous delivery.",
    icon: TestTube2,
    articleCount: 9,
  },
];

export const businessIndustryCards: BlogMenuCard[] = [
  {
    title: "ERP Software",
    slug: "erp-software",
    description: "Selection, implementation, and ROI for ERP platforms.",
    icon: Boxes,
    caseStudyCount: 12,
  },
  {
    title: "CRM Software",
    slug: "crm-software",
    description: "Pipeline automation, lead scoring, and sales analytics.",
    icon: Users2,
    caseStudyCount: 8,
  },
  {
    title: "Hospital Management",
    slug: "hospital-management-system",
    description: "Healthcare EMR, compliance, and hospital digitalization.",
    icon: Hospital,
    caseStudyCount: 6,
  },
  {
    title: "Gym Management",
    slug: "gym-management-system",
    description: "Membership billing, franchise SaaS, and fitness apps.",
    icon: Dumbbell,
    caseStudyCount: 5,
  },
  {
    title: "School Management",
    slug: "school-management-system",
    description: "School ERP, LMS, admissions, and parent portals.",
    icon: GraduationCap,
    caseStudyCount: 7,
  },
  {
    title: "Retail Solutions",
    slug: "retail-solutions",
    description: "Inventory, POS, e-commerce, and omnichannel retail.",
    icon: Store,
    caseStudyCount: 9,
  },
  {
    title: "Real Estate Technology",
    slug: "real-estate-technology",
    description: "Listings, lead pipelines, and agent CRM platforms.",
    icon: Home,
    caseStudyCount: 6,
  },
  {
    title: "Business Automation",
    slug: "business-automation",
    description: "Workflow automation, integrations, and operational ROI.",
    icon: Workflow,
    caseStudyCount: 10,
  },
];

export const featuredQuickLinks = [
  { label: "Latest Articles", href: "/blog" },
  { label: "Popular Articles", href: "/blog?sort=popular" },
  { label: "SEO Guides", href: "/blog?sort=guides" },
  { label: "Case Studies", href: "/blog/case-studies" },
  { label: "Technology Trends", href: "/blog/technology-trends" },
] as const;

export function getFeaturedArticleForMenu() {
  return getFeaturedArticles()[0] ?? getLatestArticles(1)[0];
}

export { getBlogCategoryPath, getBlogArticlePath };
