export type BlogCategory = {
  slug: string;
  title: string;
  description: string;
  /** Inherit articles from a parent category when this topic cluster has no direct posts */
  parentSlug?: string;
};

export type BlogArticle = {
  slug: string;
  categorySlug: string;
  title: string;
  excerpt: string;
  image: string;
  readingTime: string;
  publishDate: string;
  publishDateIso: string;
  author: { name: string; role: string; avatar?: string };
  featured?: boolean;
  popular?: boolean;
  seoGuide?: boolean;
  content: string[];
};

export const blogCategories: BlogCategory[] = [
  { slug: "custom-software-development", title: "Custom Software Development", description: "Guides, architecture patterns, and enterprise implementation strategies.", parentSlug: "software-development" },
  { slug: "software-product-development", title: "Software Product Development", description: "Product lifecycle, roadmaps, and go-to-market software strategies.", parentSlug: "software-development" },
  { slug: "enterprise-software", title: "Enterprise Software", description: "Build vs buy, selection frameworks, and enterprise platform design.", parentSlug: "software-development" },
  { slug: "mvp-development", title: "MVP Development", description: "Validate ideas fast with focused minimum viable products.", parentSlug: "software-development" },
  { slug: "software-architecture", title: "Software Architecture", description: "Scalable patterns, microservices, and system design best practices.", parentSlug: "software-development" },
  { slug: "digital-transformation", title: "Digital Transformation", description: "Modernize operations with phased digital transformation roadmaps.", parentSlug: "software-development" },
  { slug: "software-development", title: "Software Development", description: "Modern software engineering, enterprise applications, and digital transformation." },
  { slug: "web-development", title: "Web Development", description: "Enterprise web platforms, frameworks, and performance best practices." },
  { slug: "mobile-app-development", title: "Mobile Development", description: "Native and cross-platform mobile app strategies for business growth." },
  { slug: "artificial-intelligence", title: "AI & Machine Learning", description: "Practical AI adoption, ML pipelines, and intelligent automation." },
  { slug: "saas-development", title: "SaaS Development", description: "Multi-tenant architecture, billing, and SaaS product growth.", parentSlug: "software-development" },
  { slug: "cloud-computing", title: "Cloud Computing", description: "Cloud architecture, DevOps, and cost-efficient infrastructure." },
  { slug: "devops", title: "DevOps", description: "CI/CD pipelines, infrastructure as code, and release automation.", parentSlug: "cloud-computing" },
  { slug: "erp-software", title: "ERP", description: "Enterprise resource planning selection, implementation, and ROI." },
  { slug: "crm-software", title: "CRM", description: "Customer relationship management and sales pipeline automation." },
  { slug: "hospital-management-system", title: "Healthcare", description: "Hospital management systems and healthcare digital transformation." },
  { slug: "gym-management-system", title: "Fitness", description: "Gym management software and fitness industry technology." },
  { slug: "school-management-system", title: "Education", description: "School ERP, LMS platforms, and education technology." },
  { slug: "retail-solutions", title: "Retail", description: "Retail software, inventory, POS, and omnichannel solutions.", parentSlug: "business-automation" },
  { slug: "real-estate-technology", title: "Real Estate", description: "CRM, listings, and property management technology.", parentSlug: "crm-software" },
  { slug: "business-automation", title: "Business Automation", description: "Workflow automation, integrations, and operational efficiency." },
  { slug: "software-testing", title: "Software Testing", description: "QA strategies, test automation, and release quality." },
  { slug: "ui-ux-design", title: "UI/UX Design", description: "Enterprise UX patterns, design systems, and usability." },
  { slug: "technology-trends", title: "Technology Trends", description: "Emerging tech, industry shifts, and future-ready software strategies." },
  { slug: "case-studies", title: "Case Studies", description: "Client success stories and measurable business outcomes." },
  { slug: "company-news", title: "Company News", description: "Updates, milestones, and announcements from The Runner." },
];

const img = {
  software: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop",
  enterprise: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop",
  ai: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop",
  web: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop",
  mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop",
  cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop",
  healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop",
  automation: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
  testing: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop",
  design: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop",
};

const author = {
  engineering: { name: "Sarah Mitchell", role: "Head of Engineering" },
  strategy: { name: "James Okonkwo", role: "Solutions Architect" },
  ai: { name: "Priya Sharma", role: "AI Practice Lead" },
  team: { name: "The Runner Team", role: "Software Solutions" },
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "custom-software-development-playbook-2026",
    categorySlug: "software-development",
    title: "Custom Software Development: A 2026 Playbook",
    excerpt: "A practical guide to scoping, budgeting, and delivering custom software that scales with your business.",
    image: img.software,
    readingTime: "8 min read",
    publishDate: "Jan 12, 2026",
    publishDateIso: "2026-01-12",
    author: author.engineering,
    featured: true,
    popular: true,
    seoGuide: true,
    content: [
      "Custom software remains the most reliable path to competitive differentiation when off-the-shelf products force compromises on workflow, compliance, or integration.",
      "In 2026, successful teams start with outcome-based discovery: define measurable KPIs before wireframes, align stakeholders on a phased roadmap, and choose architecture that supports modular growth.",
      "Budget realistically across discovery, MVP, hardening, and scale phases. Transparent fixed-scope quotes after a structured consultation reduce risk for both client and delivery partner.",
    ],
  },
  {
    slug: "erp-vs-crm-which-does-your-business-need",
    categorySlug: "erp-software",
    title: "ERP vs CRM: Which Does Your Business Actually Need?",
    excerpt: "Cut through the jargon and learn when to invest in ERP, CRM, or an integrated platform.",
    image: img.enterprise,
    readingTime: "6 min read",
    publishDate: "Jan 04, 2026",
    publishDateIso: "2026-01-04",
    author: author.strategy,
    popular: true,
    content: [
      "ERP systems unify finance, inventory, HR, and operations. CRM platforms focus on leads, pipelines, and customer engagement.",
      "Mid-market companies often need both — but sequence matters. Start with the system that removes your biggest operational bottleneck.",
    ],
  },
  {
    slug: "ai-in-business-high-roi-use-cases-2026",
    categorySlug: "artificial-intelligence",
    title: "AI in Business: 7 High-ROI Use Cases For 2026",
    excerpt: "From document automation to predictive analytics — where AI delivers measurable returns today.",
    image: img.ai,
    readingTime: "10 min read",
    publishDate: "Dec 21, 2025",
    publishDateIso: "2025-12-21",
    author: author.ai,
    featured: true,
    popular: true,
    content: [
      "High-ROI AI use cases in 2026 include intelligent document processing, demand forecasting, customer support copilots, and quality inspection in manufacturing.",
      "Start with a narrow, data-rich workflow, measure baseline KPIs, and deploy a pilot before enterprise-wide rollout.",
    ],
  },
  {
    slug: "web-development-trends-enterprise-products",
    categorySlug: "web-development",
    title: "Web Development Trends Shaping Enterprise Products",
    excerpt: "Performance, security, and composable architecture patterns for modern web platforms.",
    image: img.web,
    readingTime: "7 min read",
    publishDate: "Dec 10, 2025",
    publishDateIso: "2025-12-10",
    author: author.engineering,
    popular: true,
    content: [
      "Enterprise web products in 2026 prioritize edge rendering, strict security baselines, and API-first composability.",
      "Teams that invest in design systems and automated performance budgets ship faster with fewer regressions.",
    ],
  },
  {
    slug: "mobile-app-development-native-vs-cross-platform",
    categorySlug: "mobile-app-development",
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt: "Compare Flutter, React Native, and native stacks for your next mobile product.",
    image: img.mobile,
    readingTime: "5 min read",
    publishDate: "Nov 28, 2025",
    publishDateIso: "2025-11-28",
    author: author.engineering,
    content: [
      "Choose native when you need maximum device integration and performance. Cross-platform excels when speed-to-market and shared codebase matter most.",
    ],
  },
  {
    slug: "cloud-computing-cutting-costs-without-corners",
    categorySlug: "cloud-computing",
    title: "Cloud Computing: Cutting Costs Without Cutting Corners",
    excerpt: "FinOps practices and architecture decisions that reduce cloud spend sustainably.",
    image: img.cloud,
    readingTime: "9 min read",
    publishDate: "Nov 15, 2025",
    publishDateIso: "2025-11-15",
    author: author.strategy,
    seoGuide: true,
    content: [
      "Right-sizing instances, reserved capacity, and eliminating idle resources typically cut cloud bills 30–45% without sacrificing reliability.",
    ],
  },
  {
    slug: "digital-transformation-roadmap-for-smes",
    categorySlug: "software-development",
    title: "Digital Transformation Roadmap for Growing Businesses",
    excerpt: "A phased approach to modernizing operations without disrupting daily workflows.",
    image: img.enterprise,
    readingTime: "7 min read",
    publishDate: "Nov 02, 2025",
    publishDateIso: "2025-11-02",
    author: author.strategy,
    seoGuide: true,
    content: [
      "Digital transformation succeeds when each phase delivers standalone value — automate one painful process before attempting full platform replacement.",
    ],
  },
  {
    slug: "mvp-development-from-idea-to-launch",
    categorySlug: "software-development",
    title: "MVP Development: From Idea to Launch in 90 Days",
    excerpt: "How to validate product-market fit with a focused minimum viable product.",
    image: img.software,
    readingTime: "6 min read",
    publishDate: "Oct 18, 2025",
    publishDateIso: "2025-10-18",
    author: author.engineering,
    content: [
      "An effective MVP includes only features that test your core hypothesis. Defer nice-to-haves until you have paying users and retention data.",
    ],
  },
  {
    slug: "software-architecture-patterns-for-scale",
    categorySlug: "software-development",
    title: "Software Architecture Patterns for Enterprise Scale",
    excerpt: "Microservices, modular monoliths, and event-driven design — when to use each.",
    image: img.software,
    readingTime: "11 min read",
    publishDate: "Oct 05, 2025",
    publishDateIso: "2025-10-05",
    author: author.engineering,
    seoGuide: true,
    content: [
      "Start with a modular monolith unless team size and domain complexity clearly justify microservices overhead.",
    ],
  },
  {
    slug: "enterprise-software-build-vs-buy",
    categorySlug: "software-development",
    title: "Enterprise Software: Build vs Buy Decision Framework",
    excerpt: "Evaluate total cost of ownership, flexibility, and integration before committing.",
    image: img.enterprise,
    readingTime: "8 min read",
    publishDate: "Sep 22, 2025",
    publishDateIso: "2025-09-22",
    author: author.strategy,
    content: [
      "Build when differentiation, compliance, or integration depth is critical. Buy when the workflow is commodity and speed matters most.",
    ],
  },
  {
    slug: "devops-cicd-best-practices-2026",
    categorySlug: "cloud-computing",
    title: "DevOps & CI/CD Best Practices for 2026",
    excerpt: "Pipeline design, security gates, and deployment strategies for reliable releases.",
    image: img.cloud,
    readingTime: "8 min read",
    publishDate: "Sep 10, 2025",
    publishDateIso: "2025-09-10",
    author: author.engineering,
    content: [
      "Treat pipelines as product: version them, test them, and measure deployment frequency and mean time to recovery.",
    ],
  },
  {
    slug: "ui-ux-design-enterprise-dashboards",
    categorySlug: "ui-ux-design",
    title: "UI/UX Design Principles for Enterprise Dashboards",
    excerpt: "Information hierarchy, accessibility, and data density done right.",
    image: img.design,
    readingTime: "6 min read",
    publishDate: "Aug 28, 2025",
    publishDateIso: "2025-08-28",
    author: author.team,
    content: [
      "Enterprise dashboards fail when they show everything at once. Prioritize role-based views and actionable KPIs over decorative charts.",
    ],
  },
  {
    slug: "software-testing-automation-strategy",
    categorySlug: "software-testing",
    title: "Software Testing Automation Strategy That Scales",
    excerpt: "Unit, integration, and E2E testing layers for confident continuous delivery.",
    image: img.testing,
    readingTime: "7 min read",
    publishDate: "Aug 14, 2025",
    publishDateIso: "2025-08-14",
    author: author.engineering,
    content: [
      "Automate the critical path first. A stable smoke suite beats a flaky comprehensive suite that teams ignore.",
    ],
  },
  {
    slug: "crm-automation-sales-pipeline-growth",
    categorySlug: "crm-software",
    title: "CRM Automation Strategies for Pipeline Growth",
    excerpt: "Lead scoring, follow-up workflows, and analytics that close more deals.",
    image: img.enterprise,
    readingTime: "6 min read",
    publishDate: "Jul 30, 2025",
    publishDateIso: "2025-07-30",
    author: author.strategy,
    popular: true,
    content: [
      "Automate follow-ups and lead routing before adding AI scoring. Clean data beats clever algorithms every time.",
    ],
  },
  {
    slug: "hospital-management-system-implementation-guide",
    categorySlug: "hospital-management-system",
    title: "Hospital Management System Implementation Guide",
    excerpt: "Compliance, interoperability, and phased rollout for healthcare platforms.",
    image: img.healthcare,
    readingTime: "9 min read",
    publishDate: "Jul 12, 2025",
    publishDateIso: "2025-07-12",
    author: author.strategy,
    content: [
      "Healthcare implementations require compliance mapping upfront, clinical workflow shadowing, and branch-by-branch rollout with parallel run periods.",
    ],
  },
  {
    slug: "gym-management-software-franchise-guide",
    categorySlug: "gym-management-system",
    title: "Gym Management Software for Multi-Location Franchises",
    excerpt: "Membership billing, class booking, and franchise analytics in one platform.",
    image: img.gym,
    readingTime: "5 min read",
    publishDate: "Jun 25, 2025",
    publishDateIso: "2025-06-25",
    author: author.team,
    content: [
      "Franchise gym software must handle split billing, location-level reporting, and member apps that drive retention.",
    ],
  },
  {
    slug: "business-automation-roi-calculator",
    categorySlug: "business-automation",
    title: "Business Automation ROI: What to Measure",
    excerpt: "KPIs and formulas to justify workflow automation investments.",
    image: img.automation,
    readingTime: "6 min read",
    publishDate: "Jun 08, 2025",
    publishDateIso: "2025-06-08",
    author: author.strategy,
    popular: true,
    seoGuide: true,
    content: [
      "Measure hours saved, error reduction, cycle time, and revenue impact — not just tool subscription cost.",
    ],
  },
  {
    slug: "the-runner-expands-global-delivery-2025",
    categorySlug: "company-news",
    title: "The Runner Expands Global Delivery Across 20+ Countries",
    excerpt: "New delivery hubs and timezone coverage for enterprise clients worldwide.",
    image: img.team,
    readingTime: "3 min read",
    publishDate: "May 20, 2025",
    publishDateIso: "2025-05-20",
    author: author.team,
    content: [
      "The Runner Software Solutions announces expanded delivery capacity across North America, Europe, Middle East, and Asia-Pacific.",
    ],
  },
];

export const categorySlugs = new Set(blogCategories.map((c) => c.slug));
export const articleSlugs = new Set(blogArticles.map((a) => a.slug));

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((c) => c.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return blogArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  const direct = blogArticles.filter((a) => a.categorySlug === categorySlug);
  if (direct.length > 0) return direct;

  const category = getCategoryBySlug(categorySlug);
  if (category?.parentSlug) {
    return blogArticles.filter((a) => a.categorySlug === category.parentSlug);
  }
  return [];
}

export function getFeaturedArticles() {
  return blogArticles.filter((a) => a.featured);
}

export function getPopularArticles() {
  return blogArticles.filter((a) => a.popular);
}

export function getLatestArticles(limit?: number) {
  const sorted = [...blogArticles].sort((a, b) => b.publishDateIso.localeCompare(a.publishDateIso));
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getSeoGuideArticles() {
  return blogArticles.filter((a) => a.seoGuide);
}

export function getBlogCategoryPath(slug: string) {
  return `/blog/${slug}` as const;
}

export function getBlogArticlePath(slug: string) {
  return `/blog/${slug}` as const;
}

export function searchArticles(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return blogArticles;
  return blogArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      getCategoryBySlug(a.categorySlug)?.title.toLowerCase().includes(q),
  );
}
