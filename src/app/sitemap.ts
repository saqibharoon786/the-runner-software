import type { MetadataRoute } from "next";
import { blogArticles, categorySlugs } from "@/data/blog";
import { caseStudies } from "@/data/case-studies-menu";
import { allIndustries } from "@/data/industries-menu";
import { portfolioProjects } from "@/data/portfolio";
import {
  allServices,
  DESIGN_PILLAR_PATH,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
  getServicePath,
  SOFTWARE_DEVELOPMENT_PILLAR_PATH,
  WEB_MOBILE_DEVELOPMENT_PILLAR_PATH,
} from "@/data/services-menu";
import { SITE_URL } from "@/lib/site";

const staticPages = [
  "/",
  "/solutions",
  "/contact",
  "/blog",
  "/case-studies",
  "/hospital-management-system",
  "/solutions/healthcare",
  SOFTWARE_DEVELOPMENT_PILLAR_PATH,
  WEB_MOBILE_DEVELOPMENT_PILLAR_PATH,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
  DESIGN_PILLAR_PATH,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = allServices.map((service) => getServicePath(service.slug));
  const industryPages = allIndustries.map((industry) => `/industries/${industry.slug}`);
  const portfolioPages = portfolioProjects.map((project) => `/portfolio/${project.slug}`);
  const blogPages = [...categorySlugs].map((slug) => `/blog/${slug}`).concat(
    blogArticles.map((article) => `/blog/${article.slug}`),
  );
  const caseStudyPages = caseStudies.map((caseStudy) => `/case-studies/${caseStudy.slug}`);
  const paths = [...new Set([...staticPages, ...servicePages, ...industryPages, ...portfolioPages, ...blogPages, ...caseStudyPages])];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
