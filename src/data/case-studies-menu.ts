import type { LucideIcon } from "lucide-react";
import {
  Hospital,
  Dumbbell,
  GraduationCap,
  UtensilsCrossed,
  Package,
  Boxes,
  Users2,
  Home,
  Store,
  HardHat,
  Factory,
  Hotel,
  Bot,
  Smartphone,
  Monitor,
  Cloud,
  Workflow,
  Layers,
} from "lucide-react";

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  country: string;
  shortDescription: string;
  businessImpact: string;
  image: string;
  screenshots: string[];
  clientOverview: string;
  businessChallenge: string;
  projectGoals: string[];
  solution: string;
  technologies: string[];
  features: string[];
  developmentProcess: string[];
  results: string[];
  testimonial: { quote: string; name: string; role: string };
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export type CaseStudyFilterId =
  | "all"
  | "healthcare"
  | "education"
  | "erp"
  | "crm"
  | "ai"
  | "retail"
  | "fitness"
  | "real-estate"
  | "manufacturing";

export type FeaturedCaseStudyMenuItem = {
  slug: string;
  title: string;
  industry: string;
  country: string;
  countryFlag: string;
  image: string;
  shortDescription: string;
  technologies: string[];
  outcomeBadge: string;
  filterTags: Exclude<CaseStudyFilterId, "all">[];
};

export const caseStudyFilters: { id: CaseStudyFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "erp", label: "ERP" },
  { id: "crm", label: "CRM" },
  { id: "ai", label: "AI" },
  { id: "retail", label: "Retail" },
  { id: "fitness", label: "Fitness" },
  { id: "real-estate", label: "Real Estate" },
  { id: "manufacturing", label: "Manufacturing" },
];

export const megaMenuTechStack = [
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "Flutter",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
] as const;

export const countryFlags: Record<string, { flag: string; label: string }> = {
  USA: { flag: "🇺🇸", label: "USA" },
  Canada: { flag: "🇨🇦", label: "Canada" },
  UAE: { flag: "🇦🇪", label: "UAE" },
  UK: { flag: "🇬🇧", label: "UK" },
  Pakistan: { flag: "🇵🇰", label: "Pakistan" },
  "Saudi Arabia": { flag: "🇸🇦", label: "Saudi Arabia" },
};

const img = {
  healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85&auto=format&fit=crop",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=85&auto=format&fit=crop",
  school: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=85&auto=format&fit=crop",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85&auto=format&fit=crop",
  inventory: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=85&auto=format&fit=crop",
  erp: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&auto=format&fit=crop",
  crm: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85&auto=format&fit=crop",
  realestate: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=85&auto=format&fit=crop",
};

export const featuredCaseStudiesMenu: FeaturedCaseStudyMenuItem[] = [
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    industry: "Healthcare",
    country: "UAE",
    countryFlag: "🇦🇪",
    image: img.healthcare,
    shortDescription: "Unified EMR platform for multi-branch hospital operations with real-time analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcomeBadge: "↑ 3X Faster Reporting",
    filterTags: ["healthcare", "ai"],
  },
  {
    slug: "gym-management-system",
    title: "Gym Management System",
    industry: "Fitness",
    country: "USA",
    countryFlag: "🇺🇸",
    image: img.gym,
    shortDescription: "Franchise SaaS for memberships, billing, trainer scheduling and mobile apps.",
    technologies: ["Flutter", "Laravel", "PostgreSQL", "AWS"],
    outcomeBadge: "↓ 80% Manual Work",
    filterTags: ["fitness"],
  },
  {
    slug: "school-management-system",
    title: "School ERP",
    industry: "Education",
    country: "Canada",
    countryFlag: "🇨🇦",
    image: img.school,
    shortDescription: "LMS with admissions, exams, parent portals and fee management.",
    technologies: ["React", "Laravel", "PostgreSQL", "AWS"],
    outcomeBadge: "↑ 60% Operational Efficiency",
    filterTags: ["education"],
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant POS",
    industry: "Hospitality",
    country: "UAE",
    countryFlag: "🇦🇪",
    image: img.restaurant,
    shortDescription: "Cloud POS with kitchen display, inventory sync and multi-branch reporting.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    outcomeBadge: "↑ 40% Higher Productivity",
    filterTags: ["retail"],
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    industry: "Retail",
    country: "UK",
    countryFlag: "🇬🇧",
    image: img.inventory,
    shortDescription: "Real-time stock visibility, warehouse automation and e-commerce sync.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    outcomeBadge: "↓ 60% Faster Reporting",
    filterTags: ["retail", "manufacturing"],
  },
  {
    slug: "erp-software",
    title: "ERP Software",
    industry: "Finance",
    country: "USA",
    countryFlag: "🇺🇸",
    image: img.erp,
    shortDescription: "Enterprise ERP unifying finance, HR, inventory and executive dashboards.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    outcomeBadge: "99.9% System Uptime",
    filterTags: ["erp", "manufacturing"],
  },
  {
    slug: "crm-software",
    title: "CRM Software",
    industry: "Sales",
    country: "UK",
    countryFlag: "🇬🇧",
    image: img.crm,
    shortDescription: "Custom CRM with pipeline automation, lead scoring and sales analytics.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    outcomeBadge: "↑ 3X Faster Operations",
    filterTags: ["crm", "ai"],
  },
  {
    slug: "real-estate-crm",
    title: "Real Estate CRM",
    industry: "Real Estate",
    country: "UAE",
    countryFlag: "🇦🇪",
    image: img.realestate,
    shortDescription: "Property listings, lead pipelines and WhatsApp integration for agents.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    outcomeBadge: "↑ 3X Lead Conversion",
    filterTags: ["real-estate", "crm"],
  },
];

export const industrySuccessStories: {
  title: string;
  slug: string;
  icon: LucideIcon;
  projectCount: number;
  businessImpact: string;
}[] = [
  { title: "Healthcare", slug: "healthcare", icon: Hospital, projectCount: 24, businessImpact: "120K+ Patients Managed" },
  { title: "Education", slug: "education", icon: GraduationCap, projectCount: 18, businessImpact: "30+ Schools Digitized" },
  { title: "Retail", slug: "retail", icon: Store, projectCount: 31, businessImpact: "200+ Stores Managed" },
  { title: "Fitness", slug: "fitness", icon: Dumbbell, projectCount: 12, businessImpact: "18 Gym Locations Automated" },
  { title: "Construction", slug: "construction", icon: HardHat, projectCount: 15, businessImpact: "Enterprise ERP Solutions" },
  { title: "Manufacturing", slug: "manufacturing", icon: Factory, projectCount: 15, businessImpact: "Smart Factory Systems" },
  { title: "Real Estate", slug: "real-estate", icon: Home, projectCount: 11, businessImpact: "Property Management Platforms" },
  { title: "Hospitality", slug: "hotel", icon: Hotel, projectCount: 14, businessImpact: "Multi-Branch Restaurant Systems" },
];

export const solutionsDelivered: {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  caseStudyCount: number;
}[] = [
  { title: "ERP Solutions", href: "/case-studies/erp-software", icon: Boxes, description: "Enterprise resource planning software.", caseStudyCount: 12 },
  { title: "CRM Solutions", href: "/case-studies/crm-software", icon: Users2, description: "Customer relationship platforms.", caseStudyCount: 8 },
  { title: "AI Solutions", href: "/ai-development", icon: Bot, description: "AI-powered business automation.", caseStudyCount: 6 },
  { title: "Cloud Solutions", href: "/cloud-solutions", icon: Cloud, description: "Cloud infrastructure and migration.", caseStudyCount: 5 },
  { title: "Business Automation", href: "/case-studies/inventory-management-system", icon: Workflow, description: "Workflow automation systems.", caseStudyCount: 10 },
  { title: "Mobile Applications", href: "/mobile-app-development", icon: Smartphone, description: "Native and cross-platform mobile apps.", caseStudyCount: 9 },
  { title: "Web Applications", href: "/web-development", icon: Monitor, description: "Scalable enterprise web platforms.", caseStudyCount: 11 },
  { title: "SaaS Platforms", href: "/saas-development", icon: Layers, description: "Multi-tenant cloud products at scale.", caseStudyCount: 7 },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    industry: "Healthcare",
    country: "UAE",
    shortDescription: "Unified platform for multi-branch hospital operations.",
    businessImpact: "72% faster reporting · 99.2% data accuracy · 4 hospitals live",
    image: img.healthcare,
    screenshots: [img.healthcare, img.erp],
    clientOverview: "A multi-branch hospital group in the UAE needed to replace six disconnected systems with one compliant platform serving 4 hospitals and 2,000+ staff.",
    businessChallenge: "Patient records were fragmented across branches with 3-day reporting delays, duplicate entries and manual billing reconciliation.",
    projectGoals: ["Centralize EMR across all branches", "Real-time operational dashboards", "HIPAA-aware security architecture", "Reduce admin workload by 50%+"],
    solution: "We delivered a cloud-native HMS with EMR, appointments, pharmacy, lab modules, billing and executive analytics — integrated via REST APIs with existing devices.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    features: ["Electronic Medical Records", "Appointment Scheduling", "Pharmacy & Lab", "Billing & Insurance", "Executive Dashboards"],
    developmentProcess: ["Discovery & compliance mapping", "UI/UX for clinical workflows", "Agile sprints with weekly demos", "Security & penetration testing", "Phased rollout across hospitals"],
    results: ["72% faster operational reporting", "99.2% data accuracy across branches", "4 hospitals live within 8 months", "$1.8M annual operational savings"],
    testimonial: { quote: "The Runner transformed our hospital operations. Reporting that took days now happens in real time.", name: "Dr. Ahmed Al-Rashid", role: "Chief Medical Officer" },
    faqs: [{ q: "Was the rollout phased?", a: "Yes — we deployed branch-by-branch with parallel run and staff training at each stage." }],
    relatedSlugs: ["gym-management-system", "erp-software"],
  },
  {
    slug: "gym-management-system",
    title: "Gym Management System",
    industry: "Fitness",
    country: "USA",
    shortDescription: "Franchise SaaS for memberships, billing and trainers.",
    businessImpact: "85% less admin work · 40% retention lift · 18 locations",
    image: img.gym,
    screenshots: [img.gym, img.crm],
    clientOverview: "A US fitness franchise with 18 locations needed to replace spreadsheets and separate payment tools with one scalable platform.",
    businessChallenge: "Manual membership tracking, inconsistent billing and no centralized view of trainer schedules across locations.",
    projectGoals: ["Automate membership billing", "Mobile app for members", "Franchise-level reporting", "Scale to 50+ locations"],
    solution: "Cross-platform SaaS with Flutter member app, staff web portal, Stripe billing automation and franchise analytics dashboards.",
    technologies: ["Flutter", "Laravel", "PostgreSQL", "AWS"],
    features: ["Membership Plans", "Class Booking", "Trainer Scheduling", "Stripe Billing", "Franchise Analytics"],
    developmentProcess: ["Franchise workflow discovery", "Member app prototyping", "Payment integration & testing", "Pilot at 3 locations", "Full franchise rollout"],
    results: ["85% reduction in admin work", "40% improvement in member retention", "18 locations onboarded in 5 months"],
    testimonial: { quote: "Our franchise finally runs on one system. Billing and reporting just work.", name: "Jessica Morgan", role: "Franchise Owner" },
    faqs: [{ q: "Does it support multiple membership tiers?", a: "Yes — unlimited plans with proration, freezes and family bundles." }],
    relatedSlugs: ["school-management-system", "restaurant-pos"],
  },
  {
    slug: "school-management-system",
    title: "School ERP",
    industry: "Education",
    country: "Canada",
    shortDescription: "LMS with admissions, exams and parent portals.",
    businessImpact: "50% admin time saved · 12 schools · 98% parent satisfaction",
    image: img.school,
    screenshots: [img.school, img.erp],
    clientOverview: "A Canadian education group managing 12 schools needed to digitize admissions, exams, fees and parent communication.",
    businessChallenge: "Paper-based processes caused enrollment delays, fee collection errors and poor parent engagement.",
    projectGoals: ["Digitize admissions pipeline", "Online exam and grading", "Parent portal with notifications", "Centralized fee management"],
    solution: "Full school ERP with virtual classrooms, automated grading, SMS/email notifications and integrated payment gateway.",
    technologies: ["Laravel", "React", "PostgreSQL", "AWS"],
    features: ["Admissions", "Online Classes", "Exams & Grading", "Fee Management", "Parent Portal"],
    developmentProcess: ["Stakeholder workshops with principals", "Design system for educators", "Sprint delivery with UAT", "Teacher training program", "12-school deployment"],
    results: ["50% admin time saved", "12 schools onboarded", "98% parent satisfaction score"],
    testimonial: { quote: "Parents love the portal and our staff finally stopped chasing paper forms.", name: "Robert Chen", role: "Director of Operations" },
    faqs: [{ q: "Can teachers upload video lessons?", a: "Yes — with CDN delivery, progress tracking and quiz integration." }],
    relatedSlugs: ["hospital-management-system", "inventory-management-system"],
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant POS",
    industry: "Hospitality",
    country: "Saudi Arabia",
    shortDescription: "Cloud POS with KDS and multi-branch reporting.",
    businessImpact: "40% faster orders · 25% less waste · 8 branches live",
    image: img.restaurant,
    screenshots: [img.restaurant, img.inventory],
    clientOverview: "A Saudi restaurant chain with 8 branches needed a modern POS replacing legacy terminals with inventory sync issues.",
    businessChallenge: "Order errors, slow kitchen communication and inventory mismatches caused food waste and customer complaints.",
    projectGoals: ["Fast cloud POS", "Kitchen display system", "Real-time inventory sync", "Multi-branch reporting"],
    solution: "Cloud POS with KDS, online ordering integration, real-time inventory deduction and branch-level P&L dashboards.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    features: ["POS Terminal", "Kitchen Display", "Inventory Sync", "Online Orders", "Branch Reports"],
    developmentProcess: ["Shadowing service workflows", "POS UX for high-speed input", "Kitchen display pilot", "Offline mode testing", "8-branch rollout"],
    results: ["40% faster order processing", "25% reduction in food waste", "8 branches live in 4 months"],
    testimonial: { quote: "Kitchen and front-of-house are finally in sync. Orders fly out faster.", name: "Khalid Al-Farsi", role: "Operations Manager" },
    faqs: [{ q: "Does POS work during internet outages?", a: "Yes — offline mode with automatic sync when connectivity returns." }],
    relatedSlugs: ["inventory-management-system", "erp-software"],
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    industry: "Retail",
    country: "UK",
    shortDescription: "Real-time stock and warehouse automation.",
    businessImpact: "60% fewer stockouts · $800K saved · 3 warehouses",
    image: img.inventory,
    screenshots: [img.inventory, img.erp],
    clientOverview: "A UK retail distributor with 3 warehouses needed real-time inventory visibility across e-commerce and wholesale channels.",
    businessChallenge: "Stockouts and overstock cost $800K annually due to disconnected WMS and e-commerce systems.",
    projectGoals: ["Real-time stock visibility", "Barcode scanning workflows", "Automated reorder points", "E-commerce sync"],
    solution: "Unified inventory platform with barcode mobile app, warehouse management, purchase order automation and Shopify integration.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    features: ["Real-Time Stock", "Barcode Scanning", "Purchase Orders", "Warehouse Management", "E-Commerce Sync"],
    developmentProcess: ["Warehouse process mapping", "Mobile scanner app build", "Integration with Shopify", "Load testing at peak", "3-warehouse go-live"],
    results: ["60% fewer stockouts", "$800K annual savings", "3 warehouses unified"],
    testimonial: { quote: "We finally see stock across every channel in one place. Game changer.", name: "Emma Walsh", role: "Supply Chain Director" },
    faqs: [{ q: "Which e-commerce platforms integrate?", a: "Shopify, WooCommerce and custom REST/GraphQL APIs." }],
    relatedSlugs: ["restaurant-pos", "crm-software"],
  },
  {
    slug: "erp-software",
    title: "ERP Software",
    industry: "Finance",
    country: "USA",
    shortDescription: "Enterprise ERP unifying finance, HR and operations.",
    businessImpact: "$2.1M savings · 38% faster ops · Real-time reporting",
    image: img.erp,
    screenshots: [img.erp, img.crm],
    clientOverview: "A mid-market US financial services firm needed to replace a legacy ERP that couldn't integrate with modern APIs.",
    businessChallenge: "Three-day reconciliation cycles, siloed departments and rising per-user licensing costs.",
    projectGoals: ["Real-time financial reporting", "Unified HR and inventory", "API-first architecture", "Reduce operational costs"],
    solution: "Cloud-native ERP with modular finance, HR, inventory and sales — built on microservices with full audit trails.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    features: ["Finance & Accounting", "HR & Payroll", "Inventory", "Sales Pipeline", "Executive Dashboards"],
    developmentProcess: ["Legacy system audit", "Data migration planning", "Modular agile delivery", "UAT with finance team", "Phased department rollout"],
    results: ["$2.1M annual savings", "38% faster operations", "Real-time executive reporting"],
    testimonial: { quote: "We went from 3-day reports to real-time dashboards. The board loves it.", name: "David Miller", role: "CFO" },
    faqs: [{ q: "How long did migration take?", a: "4-month phased migration with parallel run and zero downtime cutover." }],
    relatedSlugs: ["crm-software", "inventory-management-system"],
  },
  {
    slug: "crm-software",
    title: "CRM Software",
    industry: "Sales",
    country: "UK",
    shortDescription: "Custom CRM with pipeline automation and analytics.",
    businessImpact: "35% more deals closed · 50% faster follow-ups",
    image: img.crm,
    screenshots: [img.crm, img.erp],
    clientOverview: "A UK B2B sales organization with 200+ reps needed a CRM replacing spreadsheets and missed follow-ups.",
    businessChallenge: "Leads fell through cracks, no pipeline visibility and reps used 4 different tools daily.",
    projectGoals: ["Automate follow-up workflows", "WhatsApp and email integration", "Lead scoring", "Sales analytics"],
    solution: "Custom CRM with pipeline automation, integrated communication channels, AI lead scoring and real-time dashboards.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    features: ["Lead Management", "Pipeline Automation", "WhatsApp Sync", "Lead Scoring", "Sales Analytics"],
    developmentProcess: ["Sales workflow interviews", "CRM UX design", "Integration sprints", "Rep training rollout", "Continuous optimization"],
    results: ["35% increase in closed deals", "50% faster follow-up times", "200+ daily active users"],
    testimonial: { quote: "Our pipeline has never been cleaner. Reps actually enjoy using the CRM now.", name: "Priya Sharma", role: "VP Sales" },
    faqs: [{ q: "Does it integrate with email?", a: "Gmail, Outlook and custom SMTP with full activity tracking." }],
    relatedSlugs: ["erp-software", "real-estate-crm"],
  },
  {
    slug: "real-estate-crm",
    title: "Real Estate CRM",
    industry: "Real Estate",
    country: "UAE",
    shortDescription: "CRM for listings, leads and agent workflows.",
    businessImpact: "3x lead conversion · 120 agents · $4M pipeline",
    image: img.realestate,
    screenshots: [img.realestate, img.crm],
    clientOverview: "A Dubai real estate brokerage with 120 agents needed a CRM to manage listings, leads and deal pipelines.",
    businessChallenge: "Agents used WhatsApp and Excel — no centralized pipeline, duplicate leads and lost commissions.",
    projectGoals: ["Centralized lead pipeline", "Listing management", "Agent performance tracking", "WhatsApp integration"],
    solution: "Real estate CRM with property listings, automated lead routing, commission tracking and WhatsApp Business API integration.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    features: ["Property Listings", "Lead Pipeline", "Agent Dashboards", "Commission Tracking", "WhatsApp Integration"],
    developmentProcess: ["Agent workflow shadowing", "Mobile-first CRM design", "WhatsApp API integration", "Agent onboarding", "120-agent rollout"],
    results: ["3x lead conversion rate", "120 agents onboarded", "$4M active pipeline tracked"],
    testimonial: { quote: "Lead routing alone paid for the project in the first quarter.", name: "James Cooper", role: "Managing Director" },
    faqs: [{ q: "Can it sync with property portals?", a: "Yes — Bayut, Property Finder and custom XML/REST feeds." }],
    relatedSlugs: ["crm-software", "erp-software"],
  },
];

export const caseStudySlugs = new Set(caseStudies.map((c) => c.slug));

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudyPath(slug: string) {
  return `/case-studies/${slug}` as const;
}

export function filterCaseStudiesForMenu(query: string, filter: CaseStudyFilterId): FeaturedCaseStudyMenuItem[] {
  const q = query.toLowerCase().trim();
  return featuredCaseStudiesMenu.filter((item) => {
    const matchesFilter = filter === "all" || item.filterTags.includes(filter);
    if (!matchesFilter) return false;
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.industry.toLowerCase().includes(q) ||
      item.shortDescription.toLowerCase().includes(q) ||
      item.country.toLowerCase().includes(q) ||
      item.technologies.some((t) => t.toLowerCase().includes(q))
    );
  });
}
