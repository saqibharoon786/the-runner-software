import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Building2,
  Boxes,
  Users2,
  UserPlus,
  Lightbulb,
  Search,
  ClipboardList,
  FileText,
  PenTool,
  Layers,
  TerminalSquare,
  TestTube2,
  Rocket,
  Wrench,
  RefreshCw,
  TrendingUp,
  MessageSquare,
  Zap,
  Shield,
  Users,
  Cpu,
  LifeBuoy,
  DollarSign,
  Cog,
  LineChart,
  BarChart3,
  Heart,
} from "lucide-react";
import { getSoftwareDevelopmentServicePath, SOFTWARE_DEVELOPMENT_PILLAR_PATH } from "./services-menu";

const sdPath = getSoftwareDevelopmentServicePath;

export const softwareDevelopmentSeo = {
  title: "Software Development Services & Company | The Runner",
  description:
    "Full-cycle software development services for enterprises, SMEs & startups worldwide. Custom builds, dedicated teams & consulting. Book a free call.",
  h1: "Software Development Services Built to Solve Real Business Problems",
  canonicalPath: "/services/software-development",
  ogTitle: "Software Development Services | The Runner Software Solutions",
  ogDescription:
    "From custom software to enterprise systems, dedicated teams, and consulting — explore the full range of software development services we offer.",
  twitterTitle: "Software Development Services | The Runner",
  twitterDescription:
    "Full-cycle software development services for businesses worldwide — custom builds, enterprise systems, dedicated teams, and strategic consulting.",
};

export const pillarHero = {
  subheading:
    "Full-cycle software development for enterprises, SMEs, and startups — from a single custom application to organization-wide digital transformation.",
  supporting:
    "The Runner Software Solutions provides end-to-end software development services for businesses worldwide, covering everything from custom applications and enterprise systems to dedicated engineering teams and strategic technology consulting. Whatever stage your project is at — early concept, mid-scale modernization, or organization-wide transformation — our teams bring the technical depth and business context needed to turn software into a genuine operational asset, not just a delivered product.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore Our Services",
  trustStatement:
    "We work with businesses across healthcare, finance, retail, manufacturing, logistics, construction, education, and technology, supporting projects that range from focused custom applications to enterprise-wide platform development.",
};

export const whatAreServices = {
  definition:
    "Software development services encompass the full range of activities involved in designing, building, testing, deploying, and maintaining software applications for a business — spanning everything from a single internal tool to a full enterprise platform. This includes not just writing code, but requirements analysis, architecture design, UI/UX design, quality assurance, deployment planning, and long-term maintenance.",
  businessValue:
    "For most businesses, software isn't purchased for its own sake — it's an operational tool meant to solve a specific problem: reducing manual work, connecting fragmented systems, improving data visibility, or enabling a new business model entirely. The value of software development services lies less in the code itself and more in how precisely the resulting system addresses the actual business problem it was built to solve.",
  whyInvest: [
    "Operational inefficiency — manual processes or disconnected tools that no longer scale with the business",
    "Competitive pressure — the need for digital capabilities competitors already have, or a proprietary system competitors can't replicate",
    "Legacy system risk — aging infrastructure that has become costly, fragile, or difficult to extend",
    "New business models — software that is the product, such as SaaS platforms or digital marketplaces",
    "Regulatory or compliance requirements — systems that must meet specific data-handling or reporting standards",
    "Growth constraints — current systems that cap the organization's ability to scale operations or enter new markets",
  ],
  benefits: [
    "Software built around actual business workflows, not generic assumptions",
    "Architecture designed for the business's real scale and growth trajectory",
    "Reduced long-term technical debt through structured engineering practices",
    "Security and compliance considerations built in from the start, not retrofitted",
    "Ongoing support that keeps systems reliable as business needs evolve",
  ],
  softwareTypes: [
    "Custom software — built for one organization's specific workflows",
    "Enterprise software — large-scale systems supporting multi-department or multi-location operations",
    "SaaS products — software built to be sold or licensed as a market-facing product",
    "Internal tools — purpose-built systems for specific operational functions",
    "Mobile applications — native or cross-platform apps for customer or employee use",
    "Integration and middleware systems — software that connects existing platforms and data sources",
  ],
};

export type PillarService = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  cta: string;
};

export const pillarServices: PillarService[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Software built precisely around your organization's workflows, data structures, and business rules — the right choice when your processes are too specific for generic tools to model accurately, or when the software itself needs to be a competitive asset.",
    href: sdPath("custom-software-development"),
    cta: "Learn More About Custom Software Development",
  },
  {
    icon: Building2,
    title: "Enterprise Software Development",
    desc: "Large-scale systems built to support organization-wide operations — multi-department integration, high user concurrency, and compliance-heavy environments.",
    href: sdPath("enterprise-software-development"),
    cta: "Learn More About Enterprise Software Development",
  },
  {
    icon: Boxes,
    title: "Software Product Development",
    desc: "End-to-end product engineering for companies building software to bring to market — from MVP validation through scalable, production-ready release.",
    href: sdPath("software-product-development"),
    cta: "Learn More About Software Product Development",
  },
  {
    icon: Users2,
    title: "Dedicated Development Team",
    desc: "A consistent, embedded engineering team that works as an extension of your internal staff over the long term — suited to ongoing product development and ambitious roadmaps.",
    href: sdPath("dedicated-development-team"),
    cta: "Learn More About Dedicated Development Teams",
  },
  {
    icon: UserPlus,
    title: "IT Staff Augmentation",
    desc: "Flexible access to specialized engineering talent to fill specific skill gaps in your existing team, without the cost and time of direct recruitment.",
    href: sdPath("it-staff-augmentation"),
    cta: "Learn More About IT Staff Augmentation",
  },
  {
    icon: Lightbulb,
    title: "Software Consulting",
    desc: "Strategic guidance for businesses evaluating their technology approach before committing to a build — including architecture decisions, technology selection, and digital transformation planning.",
    href: sdPath("software-consulting"),
    cta: "Learn More About Software Consulting",
  },
];

export const industriesServed = [
  { name: "Healthcare", desc: "Secure, compliant systems for patient management, telehealth, and health data integration." },
  { name: "Education", desc: "Learning management and administrative platforms for schools and institutions." },
  { name: "Retail", desc: "E-commerce, POS, and inventory systems built for scale." },
  { name: "Finance", desc: "Secure, compliance-focused transaction and reporting systems." },
  { name: "Manufacturing", desc: "Production tracking and supply chain visibility systems." },
  { name: "Construction", desc: "Project management and field resource tracking software." },
  { name: "Hospitality", desc: "Booking and guest management platforms." },
  { name: "Logistics", desc: "Fleet management and route optimization systems." },
  { name: "Fitness", desc: "Membership and scheduling platforms." },
  { name: "Real Estate", desc: "Property management and CRM systems." },
];

export const solutionsWeBuild = [
  "ERP Systems — unifying finance, procurement, and operations",
  "CRM Systems — tailored to specific sales and service workflows",
  "HRMS — employee records, onboarding, and performance management",
  "Payroll Systems — automated, compliant payroll processing",
  "Inventory Management Systems — real-time stock tracking across locations",
  "Hospital Management Systems — patient records and care coordination",
  "School Management Systems — academic and administrative workflows",
  "Gym Management Software — membership, scheduling, and billing",
  "Restaurant POS Systems — order management and payment processing",
  "Construction ERP — project and resource tracking for construction operations",
  "Warehouse Management Systems — logistics-focused warehouse operations software",
  "Real Estate CRM — listings, client management, and transaction tracking",
  "Manufacturing ERP — production planning and supply chain visibility",
];

export const pillarProcess = [
  { icon: Search, title: "Discovery", desc: "Understanding business goals, existing systems, and constraints through structured stakeholder engagement." },
  { icon: ClipboardList, title: "Business Analysis", desc: "Detailed analysis of current workflows and pain points to define what the system actually needs to solve." },
  { icon: FileText, title: "Planning", desc: "Defining project scope, technical roadmap, and resource allocation, giving stakeholders a clear picture of timeline and deliverables." },
  { icon: PenTool, title: "UI/UX Design", desc: "Designing interfaces based on how real users will interact with the system, validated with stakeholders before development begins." },
  { icon: Layers, title: "Architecture", desc: "Designing system architecture — database structure, API design, infrastructure — chosen specifically for the project's scale and integration requirements." },
  { icon: TerminalSquare, title: "Development", desc: "Building the software in iterative agile sprints, with regular demos so stakeholders can review progress and adjust direction throughout." },
  { icon: TestTube2, title: "Testing", desc: "Functional, performance, security, and regression testing to catch issues before deployment." },
  { icon: Rocket, title: "Deployment", desc: "Managing the release process — including data migration where relevant — with a structured rollback plan to minimize operational risk." },
  { icon: Wrench, title: "Support", desc: "Ongoing maintenance, monitoring, and enhancement support after launch, so the software continues to perform as business needs evolve." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "Iterative enhancement based on usage patterns and evolving business requirements over the system's lifecycle." },
];

export const technologyGroups = [
  { label: "Frontend", items: "React, Next.js, Angular, Vue.js" },
  { label: "Backend", items: "Node.js, Python, Java, .NET, Laravel" },
  { label: "Mobile", items: "Flutter, React Native" },
  { label: "AI", items: "Machine learning frameworks, AI-assisted automation, predictive analytics integration" },
  { label: "Cloud", items: "AWS, Microsoft Azure, Google Cloud" },
  { label: "Database", items: "PostgreSQL, MongoDB, MySQL" },
  { label: "DevOps", items: "Docker, Kubernetes, CI/CD pipelines, microservices architecture" },
  { label: "Security", items: "Secure API design, role-based access control, encryption standards, cyber security best practices" },
];

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: TrendingUp, title: "Business-First Approach", desc: "Every technical decision is evaluated against its impact on your business outcomes — not treated as a purely technical exercise disconnected from operational goals." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Structured reporting and consistent points of contact throughout every engagement, so stakeholders always know where a project stands." },
  { icon: Zap, title: "Agile Development", desc: "Iterative delivery with regular demos keeps projects adaptable as priorities shift, instead of locking clients into a rigid upfront specification." },
  { icon: Users, title: "Dedicated Experts", desc: "Projects are staffed with engineers and architects experienced in the relevant technology and industry context." },
  { icon: Cpu, title: "Modern Technologies", desc: "Technology choices grounded in what will genuinely serve the project's architecture and integration needs, not trend-driven defaults." },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Security practices embedded throughout the development lifecycle, regardless of project size." },
  { icon: Layers, title: "Scalable Solutions", desc: "Architecture designed with future growth in mind, reducing the likelihood of costly re-platforming as the business scales." },
  { icon: LifeBuoy, title: "Long-Term Partnership", desc: "We remain engaged after launch — monitoring, maintaining, and evolving software as business needs change over time." },
];

export const engagementModelsTable = [
  { model: "Fixed Price", bestFor: "Projects with clearly defined scope and requirements", budget: "High", flexibility: "Low — scope changes require formal revision" },
  { model: "Dedicated Team", bestFor: "Long-term projects needing an embedded, consistent team", budget: "Medium", flexibility: "High — team adapts to evolving roadmap" },
  { model: "Staff Augmentation", bestFor: "Filling specific skill gaps in an existing internal team", budget: "Medium", flexibility: "High — scale specific skills up or down as needed" },
  { model: "Time & Material", bestFor: "Projects with evolving or not-fully-defined requirements", budget: "Lower", flexibility: "High — pay for actual work performed as scope evolves" },
];

export const engagementModelDetails = [
  { title: "Fixed Price", desc: "Suited to smaller, well-scoped projects — such as an MVP or a single-feature build — where requirements are unlikely to shift significantly during development." },
  { title: "Dedicated Team", desc: "Suited to businesses running long-term product development, where an embedded team that understands the business context delivers more value than a project-by-project engagement." },
  { title: "Staff Augmentation", desc: "Suited to businesses that need to scale their existing internal team with specialized skills — without the time and cost overhead of direct hiring." },
  { title: "Time & Material", desc: "Suited to iterative, discovery-driven projects where scope is expected to evolve meaningfully as development progresses and stakeholder understanding deepens." },
];

export const businessOutcomes = [
  { icon: DollarSign, title: "Reduce Costs", desc: "Efficient architecture and automation lower long-term operational and infrastructure costs compared to maintaining multiple disconnected tools or legacy systems." },
  { icon: TrendingUp, title: "Increase Productivity", desc: "Streamlined workflows reduce time spent on manual, repetitive tasks, freeing teams to focus on higher-value work." },
  { icon: Cog, title: "Automate Workflows", desc: "Business process automation reduces reliance on manual coordination between departments and systems." },
  { icon: LineChart, title: "Improve Decision-Making", desc: "Centralized, accurate data gives leadership faster, better-informed visibility into operations." },
  { icon: BarChart3, title: "Real-Time Reporting", desc: "Consolidated systems replace fragmented, delayed reporting with real-time operational visibility." },
  { icon: Layers, title: "Scalable Growth", desc: "Architecture built for your specific growth trajectory avoids the need for costly re-platforming as the business expands." },
  { icon: Heart, title: "Better Customer Experience", desc: "Faster, more reliable digital systems translate into a better overall customer experience." },
];

export const relatedServices = pillarServices.map(({ title, desc, href }) => ({ title, desc, href }));

export const pillarFaqs = [
  { q: "What software development services does The Runner Software Solutions offer?", a: "We offer custom software development, enterprise software development, software product development, dedicated development teams, IT staff augmentation, and software consulting." },
  { q: "How do I know which software development service is right for my business?", a: "It depends on your project scope, timeline, and internal resources — our software consulting service is specifically designed to help you evaluate this before committing to an approach.", link: { text: "software consulting", href: sdPath("software-consulting") } },
  { q: "What's the difference between custom software development and enterprise software development?", a: "Custom software development typically applies to a specific application or department, while enterprise software development addresses organization-wide, multi-department systems with greater integration and compliance complexity.", links: [{ text: "custom software development", href: sdPath("custom-software-development") }, { text: "enterprise software development", href: sdPath("enterprise-software-development") }] },
  { q: "Do you offer dedicated development teams for long-term projects?", a: "Yes. Our dedicated development team model provides a consistent, embedded team for ongoing product development.", link: { text: "dedicated development team", href: sdPath("dedicated-development-team") } },
  { q: "Can you augment our existing internal development team?", a: "Yes. Our IT staff augmentation service provides specialized talent to fill specific skill gaps within your existing team.", link: { text: "IT staff augmentation", href: sdPath("it-staff-augmentation") } },
  { q: "How much does software development cost?", a: "Cost depends on project scope, complexity, and engagement model. We provide a detailed estimate following an initial discovery consultation." },
  { q: "How long does a typical software development project take?", a: "Timelines vary based on complexity — a focused application takes less time than a multi-module enterprise system. We provide a project-specific timeline during planning." },
  { q: "What industries do you build software for?", a: "We work across healthcare, finance, retail, manufacturing, construction, education, hospitality, logistics, fitness, and real estate, among others." },
  { q: "What engagement models do you offer?", a: "We offer fixed price, dedicated team, staff augmentation, and time-and-material models, detailed in Section 9 above." },
  { q: "Do you build both web and mobile software?", a: "Yes. We develop web applications and native or cross-platform mobile applications depending on project requirements." },
  { q: "Can you modernize our legacy systems?", a: "Yes. Legacy system modernization is a core part of our enterprise software development service, including migration planning to minimize operational disruption." },
  { q: "Do you offer cloud migration services?", a: "Yes. We plan and execute cloud migrations to AWS, Microsoft Azure, or Google Cloud as part of our enterprise and custom software services." },
  { q: "Can you integrate our new software with our existing systems?", a: "Yes. System integration and API development are standard components of our custom and enterprise software development engagements." },
  { q: "Do you build ERP and CRM systems?", a: "Yes. ERP and CRM development are common project types across both our custom and enterprise software services." },
  { q: "What is your software development process?", a: "Our process includes discovery, business analysis, planning, UI/UX design, architecture, development, testing, deployment, support, and continuous improvement, detailed in Section 6 above." },
  { q: "Do you provide a dedicated project manager?", a: "Yes. Every engagement is assigned a dedicated project manager as a single, consistent point of contact." },
  { q: "What technologies do you work with?", a: "We work across modern frontend, backend, mobile, cloud, database, DevOps, AI, and security technologies, selected based on project requirements." },
  { q: "Do you offer ongoing support after launch?", a: "Yes. We provide post-launch maintenance, monitoring, and enhancement support across all our service lines." },
  { q: "Can you help us build a software product to sell to customers?", a: "Yes. Our software product development service is built specifically for companies bringing a product to market.", link: { text: "software product development", href: sdPath("software-product-development") } },
  { q: "Do you sign NDAs before discussing our project?", a: "Yes. We're glad to sign a non-disclosure agreement before any detailed project discussion." },
  { q: "What happens if our requirements change mid-project?", a: "Our agile approach is designed to accommodate evolving requirements through iterative sprints, particularly under dedicated team or time-and-material engagement models." },
  { q: "Do you work with startups as well as large enterprises?", a: "Yes. Our service range covers early-stage startups through large, complex enterprise organizations." },
  { q: "How do you ensure the security of the software you build?", a: "Security is embedded throughout our development lifecycle — secure coding practices, code review, and infrastructure hardening — across every service line." },
  { q: "Can you build AI-powered features into our software?", a: "Yes. We integrate AI and automation capabilities into custom, enterprise, and product development projects where they provide genuine business value." },
  { q: "Do you provide staff augmentation for short-term projects?", a: "Yes. IT staff augmentation can be scoped for both short-term and longer-term needs, depending on your project timeline." },
  { q: "What's included in your software consulting service?", a: "Our software consulting service covers technology strategy, architecture evaluation, and digital transformation planning.", link: { text: "software consulting", href: sdPath("software-consulting") } },
  { q: "Do you provide source code ownership?", a: "Custom and enterprise software development typically includes full codebase and IP ownership by the client — confirm specific terms in your contract." },
  { q: "Can you scale our development team up or down during a project?", a: "Yes, particularly under our dedicated team and staff augmentation models, which are designed for flexible team scaling." },
  { q: "Do you work with businesses outside your home country?", a: "Yes. We work with clients internationally, with distributed teams supporting collaboration across time zones." },
  { q: "How do I get started with The Runner Software Solutions?", a: "Book a free consultation with our team. We'll discuss your requirements, recommend the right service and engagement model, and outline a proposed approach." },
];

export const finalCta = {
  headline: "Let's Talk About What Your Business Actually Needs",
  body: "Whether you need a single custom application, an enterprise-wide platform, a dedicated engineering team, or simply a second opinion on your technology strategy, our team can help you find the right path forward — grounded in your specific operational goals, not a generic service package.",
  cta: "Book Your Free Consultation",
};

export { SOFTWARE_DEVELOPMENT_PILLAR_PATH };

export const childServicePaths = {
  customSoftware: sdPath("custom-software-development"),
  enterprise: sdPath("enterprise-software-development"),
  product: sdPath("software-product-development"),
  dedicatedTeam: sdPath("dedicated-development-team"),
  staffAugmentation: sdPath("it-staff-augmentation"),
  consulting: sdPath("software-consulting"),
} as const;
