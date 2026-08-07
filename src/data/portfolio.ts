export type PortfolioCategory =
  | "all"
  | "custom-software"
  | "web-applications"
  | "mobile-apps"
  | "erp-solutions"
  | "crm-solutions"
  | "ai-solutions"
  | "healthcare"
  | "education"
  | "retail"
  | "fitness"
  | "saas-platforms";

export type PortfolioProject = {
  slug: string;
  title: string;
  industry: string;
  country: string;
  projectType: string;
  businessCategory: string;
  timeline: string;
  status: "Live" | "Scaling" | "In Production";
  description: string;
  shortDescription: string;
  image: string;
  screenshots: string[];
  technologies: string[];
  categories: PortfolioCategory[];
  featured?: boolean;
  challenge: string;
  solution: string;
  businessImpact: string;
  clientRequirements: string[];
  features: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const portfolioFilters: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "custom-software", label: "Custom Software" },
  { id: "web-applications", label: "Web Applications" },
  { id: "mobile-apps", label: "Mobile Apps" },
  { id: "erp-solutions", label: "ERP Solutions" },
  { id: "crm-solutions", label: "CRM Solutions" },
  { id: "ai-solutions", label: "AI Solutions" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "retail", label: "Retail" },
  { id: "fitness", label: "Fitness" },
  { id: "saas-platforms", label: "SaaS Platforms" },
];

export const businessImpactKpis = [
  { label: "Reduced Manual Work", value: "60%+" },
  { label: "Improved Efficiency", value: "45%+" },
  { label: "Business Automation", value: "70%+" },
  { label: "Secure Architecture", value: "100%" },
  { label: "Scalable Infrastructure", value: "10x" },
  { label: "Fast Performance", value: "<2s" },
];

const img = {
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
  healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop",
  ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop",
  education: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop",
  logistics: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&auto=format&fit=crop",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop",
  mobile: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&auto=format&fit=crop",
  crm: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop",
  telemedicine: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    industry: "Healthcare",
    country: "UAE",
    projectType: "Enterprise Platform",
    businessCategory: "ERP Solutions",
    timeline: "8 months",
    status: "Live",
    description: "A unified hospital platform connecting patients, doctors, pharmacy, labs, billing and administration across multiple branches.",
    shortDescription: "End-to-end hospital operations platform for multi-branch healthcare groups.",
    image: img.healthcare,
    screenshots: [img.healthcare, img.dashboard, img.telemedicine],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    categories: ["erp-solutions", "healthcare", "custom-software", "web-applications"],
    featured: true,
    challenge: "Six disconnected systems caused 3-day reporting delays and duplicate patient records across branches.",
    solution: "We built a centralized HMS with EMR, appointments, pharmacy, lab modules and real-time analytics dashboards.",
    businessImpact: "72% faster reporting · 99.2% data accuracy · 4 hospitals live",
    clientRequirements: ["HIPAA-aware architecture", "Multi-branch support", "EMR integration", "Real-time dashboards"],
    features: ["Patient EMR", "Appointment Scheduling", "Pharmacy & Lab", "Billing & Insurance", "Admin Analytics"],
    faqs: [
      { q: "Is the system HIPAA compliant?", a: "Yes — we implement encryption, audit logs, role-based access and HIPAA-aligned workflows." },
      { q: "Can it integrate with existing lab equipment?", a: "Yes — via HL7, REST APIs and custom middleware adapters." },
    ],
    relatedSlugs: ["telemedicine-platform", "medicare-health-app"],
  },
  {
    slug: "gym-management-system",
    title: "Gym Management System",
    industry: "Fitness",
    country: "USA",
    projectType: "SaaS Platform",
    businessCategory: "Fitness Software",
    timeline: "5 months",
    status: "Live",
    description: "Membership management, class booking, trainer scheduling, payments and mobile check-in for a growing fitness franchise.",
    shortDescription: "Manage memberships, attendance, trainers, payments and reports in one platform.",
    image: img.gym,
    screenshots: [img.gym, img.mobile, img.dashboard],
    technologies: ["Flutter", "Laravel", "PostgreSQL", "AWS"],
    categories: ["fitness", "mobile-apps", "saas-platforms", "custom-software"],
    featured: true,
    challenge: "Manual spreadsheets and separate payment tools couldn't scale beyond 12 locations.",
    solution: "Cross-platform SaaS with member app, staff portal, automated billing and franchise reporting.",
    businessImpact: "85% less admin work · 40% member retention lift · 18 locations onboarded",
    clientRequirements: ["Mobile member app", "Stripe billing", "Trainer scheduling", "Franchise dashboards"],
    features: ["Membership Plans", "Class Booking", "Trainer Management", "Payment Automation", "Analytics"],
    faqs: [
      { q: "Does it support multi-location franchises?", a: "Yes — centralized admin with per-branch reporting and permissions." },
    ],
    relatedSlugs: ["fintrack-erp", "shopease-ecommerce"],
  },
  {
    slug: "fintrack-erp",
    title: "ERP Software",
    industry: "Finance",
    country: "USA",
    projectType: "ERP Platform",
    businessCategory: "Enterprise ERP",
    timeline: "10 months",
    status: "Live",
    description: "Enterprise resource planning unifying finance, HR, inventory, sales and operations for a mid-market financial services firm.",
    shortDescription: "Unified ERP for finance, HR, inventory and operations at enterprise scale.",
    image: img.dashboard,
    screenshots: [img.dashboard, img.crm, img.logistics],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    categories: ["erp-solutions", "custom-software", "web-applications", "saas-platforms"],
    featured: true,
    challenge: "Legacy ERP couldn't integrate with modern APIs and required 3-day manual reconciliation cycles.",
    solution: "Cloud-native ERP with real-time finance, automated workflows and API-first integrations.",
    businessImpact: "$2.1M annual savings · 38% faster operations · Real-time reporting",
    clientRequirements: ["Real-time finance", "Role-based access", "API integrations", "Audit trails"],
    features: ["Finance & Accounting", "HR & Payroll", "Inventory", "Sales Pipeline", "Executive Dashboards"],
    faqs: [
      { q: "Can we migrate from our legacy ERP?", a: "Yes — we provide phased migration with data validation and parallel run support." },
    ],
    relatedSlugs: ["salespro-crm", "logiflow-saas"],
  },
  {
    slug: "medicare-health-app",
    title: "MediCare App",
    industry: "Healthcare",
    country: "UK",
    projectType: "Mobile App",
    businessCategory: "Healthcare Mobile",
    timeline: "4 months",
    status: "Live",
    description: "Patient-facing mobile app for appointments, prescriptions, teleconsultations and health records.",
    shortDescription: "Patient mobile app for appointments, records and teleconsultations.",
    image: img.mobile,
    screenshots: [img.mobile, img.telemedicine],
    technologies: ["Flutter", "Firebase", "Node.js"],
    categories: ["mobile-apps", "healthcare", "custom-software"],
    challenge: "Patients faced long phone queues for appointments and had no digital access to records.",
    solution: "Cross-platform app with booking, push notifications, secure messaging and EMR sync.",
    businessImpact: "65% fewer call center tickets · 4.8★ app rating · 50k+ active users",
    clientRequirements: ["iOS & Android", "GDPR compliance", "Push notifications", "EMR sync"],
    features: ["Appointment Booking", "Prescriptions", "Teleconsultation", "Health Records"],
    faqs: [{ q: "Is patient data encrypted?", a: "Yes — AES-256 at rest and TLS in transit with GDPR-compliant storage." }],
    relatedSlugs: ["hospital-management-system", "telemedicine-platform"],
  },
  {
    slug: "shopease-ecommerce",
    title: "ShopEase",
    industry: "Retail",
    country: "UAE",
    projectType: "Web Platform",
    businessCategory: "E-Commerce",
    timeline: "6 months",
    status: "Live",
    description: "High-conversion e-commerce platform with multi-vendor support, payments and inventory automation.",
    shortDescription: "Scalable e-commerce with payments, inventory and analytics.",
    image: img.ecommerce,
    screenshots: [img.ecommerce, img.dashboard],
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    categories: ["web-applications", "retail", "saas-platforms"],
    challenge: "Legacy store couldn't handle peak traffic and lacked real-time inventory sync.",
    solution: "Headless commerce with Stripe, warehouse sync and conversion-optimized checkout.",
    businessImpact: "3x conversion rate · 99.9% uptime · 200k monthly orders",
    clientRequirements: ["Multi-vendor", "Stripe payments", "Inventory sync", "SEO optimization"],
    features: ["Product Catalog", "Checkout", "Vendor Portal", "Analytics", "Inventory Sync"],
    faqs: [{ q: "Does it support multiple currencies?", a: "Yes — multi-currency checkout with localized tax rules." }],
    relatedSlugs: ["salespro-crm", "restaurant-pos"],
  },
  {
    slug: "eduportal-lms",
    title: "EduPortal LMS",
    industry: "Education",
    country: "Canada",
    projectType: "LMS Platform",
    businessCategory: "Education Software",
    timeline: "7 months",
    status: "Live",
    description: "Learning management system for schools with admissions, exams, parent portals and online classes.",
    shortDescription: "Full LMS for admissions, exams, fees and online learning.",
    image: img.education,
    screenshots: [img.education, img.dashboard],
    technologies: ["Laravel", "React", "PostgreSQL"],
    categories: ["education", "web-applications", "custom-software"],
    challenge: "Paper-based processes and disconnected tools slowed academic operations.",
    solution: "Unified LMS with virtual classrooms, automated grading and parent communication.",
    businessImpact: "50% admin time saved · 12 schools onboarded · 98% parent satisfaction",
    clientRequirements: ["Virtual classrooms", "Fee management", "Parent portal", "Exam automation"],
    features: ["Admissions", "Online Classes", "Exams & Grading", "Fee Management", "Parent Portal"],
    faqs: [{ q: "Can teachers upload video lessons?", a: "Yes — with CDN delivery, progress tracking and quiz integration." }],
    relatedSlugs: ["fintrack-erp", "gym-management-system"],
  },
  {
    slug: "logiflow-saas",
    title: "LogiFlow",
    industry: "Logistics",
    country: "Australia",
    projectType: "SaaS",
    businessCategory: "Logistics SaaS",
    timeline: "9 months",
    status: "Scaling",
    description: "Cloud-native logistics platform with real-time tracking, fleet management and analytics.",
    shortDescription: "Real-time shipment tracking and fleet analytics at scale.",
    image: img.logistics,
    screenshots: [img.logistics, img.dashboard],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    categories: ["saas-platforms", "custom-software", "web-applications"],
    challenge: "Legacy system couldn't scale beyond 200k daily shipments.",
    solution: "Event-driven SaaS with real-time GPS tracking, automated routing and client portals.",
    businessImpact: "10x scale capacity · 45% cost reduction · 12 countries served",
    clientRequirements: ["Real-time tracking", "API integrations", "Multi-tenant", "Mobile driver app"],
    features: ["Shipment Tracking", "Fleet Management", "Route Optimization", "Client Portal", "Analytics"],
    faqs: [{ q: "Does it integrate with carrier APIs?", a: "Yes — FedEx, DHL, UPS and custom carrier REST/EDI integrations." }],
    relatedSlugs: ["fintrack-erp", "aivision-platform"],
  },
  {
    slug: "aivision-platform",
    title: "AIVision",
    industry: "AI / ML",
    country: "Germany",
    projectType: "AI Product",
    businessCategory: "AI Solutions",
    timeline: "6 months",
    status: "In Production",
    description: "AI-powered computer vision platform for quality inspection in manufacturing lines.",
    shortDescription: "AI vision platform for automated quality inspection.",
    image: img.ai,
    screenshots: [img.ai, img.dashboard],
    technologies: ["Python", "React", "PostgreSQL", "AWS", "Docker"],
    categories: ["ai-solutions", "custom-software", "web-applications"],
    challenge: "Manual quality inspection caused defects to reach customers and increased returns.",
    solution: "Real-time CV pipeline with model training, edge deployment and defect dashboards.",
    businessImpact: "99.2% detection accuracy · 72% faster inspection · $1.4M defect savings",
    clientRequirements: ["Real-time inference", "Edge deployment", "Model retraining", "Audit logs"],
    features: ["Defect Detection", "Model Training", "Edge Deployment", "Analytics Dashboard"],
    faqs: [{ q: "Can models be retrained on new defect types?", a: "Yes — with a managed pipeline and human-in-the-loop validation." }],
    relatedSlugs: ["logiflow-saas", "hospital-management-system"],
  },
  {
    slug: "salespro-crm",
    title: "SalesPro CRM",
    industry: "Sales",
    country: "UK",
    projectType: "CRM Platform",
    businessCategory: "CRM Solutions",
    timeline: "5 months",
    status: "Live",
    description: "Custom CRM with pipeline automation, lead scoring, WhatsApp integration and sales analytics.",
    shortDescription: "Pipeline CRM with automation, integrations and analytics.",
    image: img.crm,
    screenshots: [img.crm, img.dashboard],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    categories: ["crm-solutions", "web-applications", "custom-software"],
    challenge: "Sales team used spreadsheets and missed follow-ups costing deals.",
    solution: "CRM with automated workflows, lead scoring and integrated communication channels.",
    businessImpact: "35% more closed deals · 50% faster follow-ups · 200+ daily active users",
    clientRequirements: ["Pipeline automation", "WhatsApp integration", "Lead scoring", "Reporting"],
    features: ["Lead Management", "Pipeline Automation", "WhatsApp Sync", "Sales Analytics"],
    faqs: [{ q: "Does it integrate with email?", a: "Yes — Gmail, Outlook and custom SMTP with activity tracking." }],
    relatedSlugs: ["fintrack-erp", "shopease-ecommerce"],
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant POS",
    industry: "Hospitality",
    country: "Saudi Arabia",
    projectType: "POS System",
    businessCategory: "Retail & Hospitality",
    timeline: "4 months",
    status: "Live",
    description: "Restaurant POS with KDS, inventory, online ordering and multi-branch reporting.",
    shortDescription: "Fast POS with KDS, inventory and online ordering.",
    image: img.restaurant,
    screenshots: [img.restaurant, img.dashboard],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    categories: ["retail", "web-applications", "custom-software"],
    challenge: "Slow legacy POS caused order errors and inventory mismatches across branches.",
    solution: "Cloud POS with kitchen display, real-time inventory and delivery integrations.",
    businessImpact: "40% faster order processing · 25% less food waste · 8 branches live",
    clientRequirements: ["Kitchen display", "Inventory sync", "Online ordering", "Multi-branch"],
    features: ["POS Terminal", "Kitchen Display", "Inventory", "Online Orders", "Branch Reports"],
    faqs: [{ q: "Does it work offline?", a: "Yes — offline mode with automatic sync when connectivity returns." }],
    relatedSlugs: ["shopease-ecommerce", "gym-management-system"],
  },
  {
    slug: "telemedicine-platform",
    title: "Telemedicine Platform",
    industry: "Healthcare",
    country: "Canada",
    projectType: "Web Platform",
    businessCategory: "Healthcare SaaS",
    timeline: "5 months",
    status: "Live",
    description: "Secure telemedicine platform with video consultations, e-prescriptions and patient triage.",
    shortDescription: "Secure video consultations with e-prescriptions and triage.",
    image: img.telemedicine,
    screenshots: [img.telemedicine, img.mobile],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    categories: ["healthcare", "web-applications", "saas-platforms"],
    challenge: "Clinics couldn't offer remote care during peak demand with compliant workflows.",
    solution: "HIPAA-aware telehealth with scheduling, video, e-Rx and EMR handoff.",
    businessImpact: "6-hour wait reduced to 20 min · 3 clinics · 15k consultations/month",
    clientRequirements: ["Video consultations", "E-prescriptions", "EMR integration", "HIPAA compliance"],
    features: ["Video Consultations", "Scheduling", "E-Prescriptions", "Patient Triage", "EMR Sync"],
    faqs: [{ q: "Is video encrypted?", a: "Yes — end-to-end encrypted WebRTC sessions with audit logging." }],
    relatedSlugs: ["hospital-management-system", "medicare-health-app"],
  },
];

export const featuredProjects = portfolioProjects.filter((p) => p.featured);

export const portfolioSlugs = new Set(portfolioProjects.map((p) => p.slug));

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getPortfolioPath(slug: string) {
  return `/portfolio/${slug}` as const;
}

export function filterProjects(category: PortfolioCategory): PortfolioProject[] {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((p) => p.categories.includes(category));
}

export const techBadgeMap: Record<string, { slug: string; color?: string }> = {
  React: { slug: "react", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "000000" },
  "Node.js": { slug: "nodedotjs", color: "339933" },
  Laravel: { slug: "laravel", color: "FF2D20" },
  Flutter: { slug: "flutter", color: "02569B" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  AWS: { slug: "amazonaws", color: "232F3E" },
  Docker: { slug: "docker", color: "2496ED" },
  Python: { slug: "python", color: "3776AB" },
  Firebase: { slug: "firebase", color: "FFCA28" },
};
