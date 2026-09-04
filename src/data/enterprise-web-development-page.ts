import type { LucideIcon } from "lucide-react";
import {
  Building2,
  LayoutDashboard,
  Plug,
  Server,
  Monitor,
  Shield,
  Layers,
  Code2,
  CheckCircle2,
  Zap,
  RefreshCw,
  Search,
  ClipboardList,
  PenTool,
  Database,
  TestTube2,
  Rocket,
  Wrench,
  Globe,
} from "lucide-react";
import { WEB_MOBILE_DEVELOPMENT_PILLAR_PATH } from "./services-menu";

export { WEB_MOBILE_DEVELOPMENT_PILLAR_PATH };

export const enterpriseWebDevelopmentSeo = {
  title: "Enterprise Web Development Services | The Runner",
  description:
    "Enterprise web development — scalable portals, dashboards, and API-driven applications built for complex business workflows. Get a free consultation.",
  h1: "Enterprise Web Development Services",
  canonicalPath: "/services/web-mobile-development/enterprise-web-development",
  ogTitle: "Enterprise Web Development Services | The Runner Software Solutions",
  ogDescription:
    "Custom enterprise portals, dashboards, and API-driven business applications — architected for scale, security, and long-term maintainability.",
  twitterTitle: "Enterprise Web Development Services | The Runner Software Solutions",
  twitterDescription:
    "Custom enterprise portals, dashboards, and API-driven business applications — architected for scale, security, and long-term maintainability.",
  imageAlt: "Enterprise web development services by The Runner Software Solutions",
};

export const enterpriseHero = {
  intro:
    "An enterprise application isn't a bigger website — it's a different category of software problem. Multiple user roles with different permissions, data that needs to stay consistent across departments, integrations with systems your business already depends on, and workflows specific enough that no off-the-shelf tool fits cleanly. The Runner Software Solutions builds enterprise web applications, portals, dashboards, and API-driven platforms designed around those actual requirements — scalability, security, integration, and maintainability treated as core architecture decisions, not features added after launch.",
  primaryCta: "Discuss Your Enterprise Project",
  secondaryCta: "Get a Free Consultation",
};

export const complexRequirements = {
  title: "Enterprise Web Development for Complex Business Requirements",
  intro:
    "Enterprise web development addresses a fundamentally different set of problems than a standard business website. Where a marketing site is largely a content and conversion problem, an enterprise application is a systems problem: complex business workflows that need to be modeled accurately in software, multiple users and roles each requiring different levels of access, large datasets that need to remain performant and consistent as they grow, authentication and authorization architected to control exactly who can do what, integrations with the other systems an organization already runs on, reporting and dashboards that turn operational data into visibility for decision-makers, automation that removes manual steps from repetitive processes, APIs that let different parts of the system — and, often, external systems — communicate reliably, scalability to support growing usage without a rebuild, security appropriate to the sensitivity of enterprise data, and long-term maintainability, since enterprise systems are typically expected to run and evolve for years, not months.",
  closing:
    "Off-the-shelf website builders and generic SaaS platforms are built for common, well-understood problems. They work well until an organization's actual workflow, data model, or integration requirements exceed what the platform was designed to support — at which point the business is either working around the tool's limitations or paying for custom development that actually fits how the organization operates. Enterprises frequently reach that point faster than smaller businesses, simply because their workflows, compliance needs, and system landscape are more complex from the start.",
};

export const whatIsEnterprise = {
  title: "What Is Enterprise Web Development?",
  definition:
    "Enterprise web development is the design and construction of custom web-based software built to support an organization's internal operations, business workflows, and often its interactions with customers or partners — architected specifically for the scale, security, and integration requirements that distinguish enterprise systems from standard business websites.",
  layersIntro: "A useful way to understand how an enterprise application actually works is to look at how its layers connect:",
  layersFlow: "Frontend → Backend → APIs → Database → Infrastructure",
  layerDescriptions: [
    "The frontend is what users — employees, customers, or partners, depending on the application — actually interact with.",
    "The backend processes requests, enforces business rules, and manages authentication and authorization.",
    "APIs define how the frontend, backend, and any external systems communicate with each other in a structured, predictable way.",
    "The database stores and organizes the application's data, structured to support the specific relationships and access patterns the business needs.",
    "Infrastructure is the hosting and deployment environment that keeps the whole system running reliably and able to scale as usage grows.",
  ],
  applicationTypes: [
    "Enterprise portals giving specific user groups access to relevant data and functions",
    "ERP interfaces managing core operational data",
    "CRM platforms tracking customer and sales relationships",
    "HR systems managing employee data and processes",
    "Healthcare systems supporting administrative and clinical workflows",
    "Inventory platforms tracking stock across locations",
    "Procurement systems managing purchasing workflows",
    "Business intelligence dashboards turning raw data into decision-ready visualizations",
    "Customer portals giving clients self-service access to their own account or data",
    "Partner portals supporting B2B relationships with external organizations",
    "Internal management systems built around workflows specific enough that no existing product fits",
  ],
};

export type EnterpriseServiceItem = {
  title: string;
  desc: string;
  bullets?: string[];
};

export const enterpriseServices: EnterpriseServiceItem[] = [
  {
    title: "Custom Enterprise Web Applications",
    desc: "Applications designed specifically around your organization's actual business workflows — not adapted from a generic template, but built around your specific processes, data model, and user roles from the start.",
  },
  {
    title: "Enterprise Portal Development",
    desc: "Secure, role-appropriate access points for the different groups who need to interact with your systems:",
    bullets: [
      "Customer portals for self-service account and order access",
      "Employee portals for internal tools and information",
      "Partner portals for B2B collaboration",
      "Vendor portals for supplier interactions",
      "Secure dashboards giving each user group exactly the visibility and functionality relevant to their role",
    ],
  },
  {
    title: "Enterprise Dashboard Development",
    desc: "Turning operational data into something decision-makers can actually use:",
    bullets: [
      "Analytics dashboards for tracking trends and performance",
      "Operational dashboards for day-to-day monitoring",
      "Management reporting that surfaces the right information to the right stakeholders",
      "KPI tracking tied to metrics that actually matter to the business",
      "Data visualization designed for clarity over decoration",
      "Role-based access so each dashboard shows relevant data to the relevant audience",
    ],
  },
  {
    title: "Enterprise API Development & Integration",
    desc: "The connective layer that lets an enterprise application function as part of a broader system landscape rather than an isolated tool:",
    bullets: [
      "Well-structured REST APIs for internal and external communication",
      "Third-party integrations with the tools your business already relies on",
      "Internal APIs connecting different components of your own systems",
      "Payment systems, CRM integrations, ERP integrations, and other external platforms your operations depend on",
    ],
  },
  {
    title: "Enterprise Backend Development",
    desc: "The engine behind the interface:",
    bullets: [
      "Business logic that correctly encodes your organization's actual rules and processes",
      "Authentication verifying user identity securely",
      "Authorization controlling what authenticated users can actually do",
      "Database architecture structured for your specific data relationships and access patterns",
      "API architecture designed for reliability and clear contracts between system components",
      "Background processes handling work that shouldn't block a user-facing response",
      "Integrations connecting the backend to everything else the business runs on",
    ],
  },
  {
    title: "Enterprise Frontend Development",
    desc: "Modern, responsive interfaces built for the reality of enterprise use — often data-dense, often role-specific, and often used for extended periods during a workday, which puts a premium on clarity and efficiency over purely aesthetic design choices.",
  },
];

export const technologyStack = [
  {
    label: "Frontend",
    items: "React.js and Next.js for building modern, maintainable interfaces — Next.js in particular where server-rendering or performance at scale is a priority. JavaScript, HTML5, and CSS3 form the underlying foundation, with Tailwind CSS supporting consistent, efficient styling across large interface systems where visual consistency matters at scale.",
  },
  {
    label: "Backend",
    items: "Node.js and Express.js for JavaScript-based backend systems, particularly useful when a consistent language across frontend and backend genuinely simplifies a project. Laravel and PHP for backend systems where that ecosystem fits existing infrastructure or team expertise. Python/Django where a project's requirements — data-heavy processing, specific library needs — call for it.",
  },
  {
    label: "Databases",
    items: "PostgreSQL and MySQL for structured, relational data with well-defined relationships — generally the right fit for enterprise systems with complex, interconnected data and strict consistency requirements. MongoDB where a more flexible, document-based data model genuinely fits a specific application's data shape better.",
  },
  {
    label: "APIs",
    items: "REST APIs as the standard, widely understood pattern for structured communication between system components. API authentication implemented deliberately — token-based or session-based approaches scoped to what each integration actually needs. Third-party integrations connecting enterprise applications to CRM, ERP, payment, and other business systems.",
  },
];

export const technologyClosing =
  "Technology selection for enterprise projects follows the same principle as any well-run engineering engagement: the right choice depends on your specific requirements, existing infrastructure, team expertise, and long-term maintainability — not on defaulting to whichever stack is currently trending.";

export const applicationsWeBuild = [
  "ERP systems — centralizing operational data that would otherwise be fragmented across disconnected tools",
  "CRM systems — managing customer and sales relationships built around your specific sales process",
  "HR management systems — handling employee data, processes, and workflows specific to how your organization operates",
  "Hospital management systems — supporting administrative and scheduling workflows for healthcare operations",
  "School management systems — managing enrollment, scheduling, and administrative processes for educational institutions",
  "Inventory management systems — tracking stock accurately across locations or channels in real time",
  "POS systems — point-of-sale software integrated directly with inventory and order data",
  "Finance and accounting platforms — supporting financial workflows with the data integrity and access control financial systems require",
  "Customer portals — giving clients self-service access to their account, orders, or service history",
  "Vendor portals — supporting structured, secure collaboration with external suppliers",
  "Booking systems — managing appointments or reservations with calendar and availability logic specific to your business",
  "Workflow management platforms — automating and tracking multi-step internal processes",
  "SaaS applications — subscription software delivered to multiple customer organizations",
  "Internal business applications — tools built around a workflow specific enough that no existing product reasonably fits",
  "Reporting and analytics dashboards — turning operational data into a form decision-makers can actually act on",
];

export const securitySection = {
  title: "Security-Focused Enterprise Web Development",
  intro:
    "Enterprise applications typically handle more sensitive data, more users, and more integration points than a standard website — which raises the stakes on getting security right from the architecture stage, not as a review before launch.",
  practices: [
    "Authentication that verifies user identity through secure, properly implemented mechanisms",
    "Authorization ensuring users can only access data and functionality appropriate to their role",
    "Role-based access control structuring permissions clearly across potentially many user types",
    "Secure API communication, including proper authentication and encryption for data in transit",
    "Input validation on every entry point to prevent injection and malformed-data issues",
    "Data protection for sensitive information both in transit and at rest",
    "Session management implemented to avoid common vulnerabilities",
    "Secure password handling, following established hashing and storage practices",
    "Access control enforced consistently at the API layer, not just in the interface",
    "Audit logging to track meaningful system actions",
    "Secure database practices, including proper access scoping and query design",
    "Dependency management, keeping third-party libraries updated",
    "Error handling designed to fail safely without exposing sensitive system details",
  ],
  disclaimer:
    "We do not claim compliance with specific regulatory frameworks or certifications — such as HIPAA, SOC 2, or ISO 27001 — unless independently verified for a specific engagement. Security and compliance requirements should be assessed case by case with appropriate legal and compliance guidance specific to your industry and jurisdiction.",
};

export const scalabilitySection = {
  title: "Scalable Enterprise Web Applications",
  intro:
    "Scalability has to be a design decision made during architecture, not a fix applied after a system starts struggling under real usage. Enterprise applications are architected with growth in mind across several dimensions:",
  techniques: [
    "Scalable architecture that can accommodate increasing users, data volume, and transaction load",
    "Database optimization, including proper indexing and query design that holds up as data grows",
    "API optimization to keep response times reasonable as request volume increases",
    "Caching where it genuinely reduces redundant computation or database load",
    "Efficient frontend rendering that keeps interfaces responsive even with data-dense enterprise interfaces",
    "Pagination for large datasets",
    "Background processing for work that shouldn't block a user-facing response",
    "Modular architecture that lets different parts of the system evolve and scale somewhat independently",
    "Monitoring that gives visibility into system health and performance as usage patterns change",
    "Performance testing under realistic load conditions before problems reach production",
  ],
  closing:
    "Retrofitting scalability into a system that wasn't designed for it is significantly more expensive and disruptive than designing for realistic growth from the start — which is why architecture decisions early in an enterprise project matter more than they might initially appear to.",
};

export const integrationsSection = {
  title: "Enterprise API & Third-Party Integrations",
  intro:
    "Enterprise applications rarely operate in isolation — they need to connect reliably to the other systems an organization already depends on:",
  systems: [
    "CRM platforms for customer and sales data",
    "ERP systems for operational data",
    "Payment gateways for transaction processing",
    "Email platforms for transactional and marketing communication",
    "SMS services for notifications and alerts",
    "Accounting software for financial data synchronization",
    "Authentication providers for identity management",
    "Internal company systems that predate the new application",
    "External APIs specific to your industry or operations",
  ],
  closing:
    "Reliable integration depends on well-structured API architecture, thorough validation of data moving between systems, robust error handling, proper authentication securing every connection point, and careful data synchronization logic. Integration work is frequently where enterprise projects encounter the most unexpected complexity, which is why we treat integration architecture as a first-class part of technical planning rather than an implementation detail to figure out later.",
};

export const uiUxSection = {
  title: "Enterprise UI/UX for Complex Applications",
  intro:
    "Enterprise interfaces face a different design challenge than a consumer-facing marketing site: the priority is usability and productivity for people using the application repeatedly, often for extended periods, to get real work done.",
  considerations: [
    "Usability that reduces friction in frequent, repetitive tasks",
    "Productivity by minimizing unnecessary steps in common workflows",
    "Clear information hierarchy so dense operational data remains genuinely understandable",
    "Responsive layouts that work across the devices your users actually use",
    "Accessibility so the application is usable by the full range of people who need it",
    "Well-structured dashboards that surface relevant information without overwhelming the user",
    "Intuitive navigation appropriate to a system with potentially many distinct sections and user roles",
    "Role-specific interfaces that show each user type the tools and data relevant to them",
    "Overall workflow efficiency — the interface should actively support how people work",
  ],
  uiUxLink: {
    before: "For enterprise projects where interface design is a significant component of the engagement, our ",
    text: "UI/UX Design Services",
    href: "/services/design/ui-ux-design",
    after: " team works alongside development from the earliest planning stages, so design decisions and technical architecture develop together rather than being handled as disconnected phases.",
  },
};

export const developmentProcess = [
  { step: 1, icon: Search, title: "Business & Technical Discovery", desc: "Understanding your organization, workflows, existing systems, and the specific problem the application needs to solve." },
  { step: 2, icon: ClipboardList, title: "Requirements Analysis", desc: "Translating business needs into concrete technical requirements — user roles, data structures, integrations, and functional scope." },
  { step: 3, icon: Layers, title: "System Architecture", desc: "Designing the technical foundation — how frontend, backend, database, and infrastructure fit together for your specific scale and complexity requirements." },
  { step: 4, icon: PenTool, title: "UI/UX Planning", desc: "Designing interfaces around real user workflows and role-specific needs, validated before development begins." },
  { step: 5, icon: Monitor, title: "Frontend Development", desc: "Building the interface layer based on approved designs and the underlying architecture." },
  { step: 6, icon: Server, title: "Backend & API Development", desc: "Building the business logic, authentication, authorization, and API layer that power the application." },
  { step: 7, icon: Database, title: "Database Development", desc: "Implementing the data layer structured for your specific relationships, access patterns, and scale requirements." },
  { step: 8, icon: Plug, title: "Integrations", desc: "Connecting the application to the third-party and internal systems it needs to work with." },
  { step: 9, icon: TestTube2, title: "Testing & Quality Assurance", desc: "Validating functionality, security, and performance before the system reaches real users." },
  { step: 10, icon: Rocket, title: "Deployment", desc: "Releasing the application to production infrastructure configured for the reliability and scale the project requires." },
  { step: 11, icon: Wrench, title: "Monitoring & Maintenance", desc: "Ongoing tracking of system health after launch, along with the updates and fixes every enterprise system needs over its operational life." },
];

export const processClosing =
  "Enterprise projects specifically require proper planning before implementation begins — the cost of a wrong architectural decision compounds significantly more in a system supporting multiple departments, integrations, and years of expected use than it does in a smaller, standalone project.";

export const customVsOffTheShelf = {
  title: "Custom Enterprise Software vs. Off-the-Shelf Solutions",
  customMakesSense:
    "Custom development makes sense when your organization has genuinely unique workflows that a generic platform can't reasonably accommodate, proprietary processes that represent real competitive value, complex integration requirements exceeding what off-the-shelf tools support well, specific reporting or compliance requirements not covered by generic platforms, scalability needs beyond what a shared SaaS platform's architecture accommodates, custom user roles and permission structures specific to your organization, or specialized business logic central enough to your operations that it's worth owning outright.",
  offTheShelfBetter:
    "An existing SaaS or off-the-shelf product may be the better choice when your requirement is a standard, well-understood problem that mature platforms already solve effectively, when speed to deployment matters more than deep customization, or when the ongoing cost of custom development and maintenance isn't justified by the specific value custom software would add over a well-configured existing tool. Being honest about this trade-off matters — not every enterprise need justifies a custom build, and we'll say so directly when a genuine assessment points toward an existing platform instead.",
};

export const benefitsSection = {
  title: "Benefits of Custom Enterprise Web Development",
  intro: "Custom enterprise applications, when the underlying need genuinely calls for them, deliver:",
  benefits: [
    "Business process automation that removes manual steps from repetitive workflows",
    "Centralized data that replaces fragmented information scattered across disconnected tools",
    "Better operational visibility through reporting and dashboards built around your actual metrics",
    "Improved workflow efficiency from software designed around how your organization actually works",
    "Custom integrations connecting systems that generic tools can't reliably bridge",
    "Scalable architecture that grows with the organization rather than requiring a rebuild",
    "Role-based access giving each user exactly the permissions their role requires",
    "Better reporting tailored to the specific decisions your stakeholders actually need to make",
    "Reduced manual processes and the errors that tend to accompany them",
    "Long-term maintainability, since a well-architected custom system remains an asset rather than a growing liability",
  ],
};

export const industriesSection = [
  { industry: "Healthcare", desc: "Administrative and scheduling systems, patient communication portals, and internal operational dashboards, with particular attention to data access control." },
  { industry: "Education", desc: "Student information systems, enrollment and administrative platforms, and internal reporting tools for institutional operations." },
  { industry: "Retail", desc: "Inventory and POS-integrated systems, customer loyalty platforms, and operational dashboards spanning online and in-store data." },
  { industry: "eCommerce", desc: "Backend systems for order management, inventory, and customer data supporting a storefront at meaningful scale." },
  { industry: "Logistics", desc: "Dispatch and tracking systems requiring real-time data updates and integration with partner and carrier systems." },
  { industry: "Real Estate", desc: "Property management platforms, lead and client portals, and internal workflow tools for transaction management." },
  { industry: "Finance", desc: "Secure account and transaction systems, internal reporting platforms, and workflow tools with heightened data security requirements." },
  { industry: "Professional Services", desc: "Client portals, case or project management systems, and internal scheduling and resource tools." },
  { industry: "Manufacturing", desc: "Internal operations platforms for production tracking, inventory, and reporting, often integrating with equipment or floor-level systems." },
  { industry: "Hospitality", desc: "Booking and reservation platforms, guest management systems, and operational dashboards spanning multiple properties or locations." },
];

export const industriesDisclaimer =
  "These are general patterns reflecting common enterprise application needs by industry, used to inform how we scope a specific engagement — not a claim of prior client work in any of these sectors.";

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Layers, title: "Custom architecture", desc: "Designed around your specific requirements, not adapted from a generic template." },
  { icon: Code2, title: "Full-stack development", desc: "Capability spanning frontend, backend, database, and infrastructure." },
  { icon: Monitor, title: "Modern frontend technologies", desc: "Applied where they genuinely improve maintainability and performance." },
  { icon: Server, title: "Backend/API development", desc: "Built around clear, well-structured business logic and integration contracts." },
  { icon: Database, title: "Database integration", desc: "Designed for your actual data relationships and access patterns." },
  { icon: Zap, title: "Scalable application design", desc: "That accounts for realistic growth from the architecture stage." },
  { icon: Shield, title: "Security-focused development", desc: "Applied throughout the build, not addressed only before launch." },
  { icon: Globe, title: "Responsive interfaces", desc: "That work properly across the devices your users actually use." },
  { icon: RefreshCw, title: "Business workflow automation", desc: "That reduces manual, error-prone processes." },
  { icon: Wrench, title: "Long-term maintainability", desc: "As a deliberate design goal, not an afterthought." },
  { icon: CheckCircle2, title: "Technical support", desc: "For the updates and improvements every enterprise system needs after launch." },
];

export const whyChooseSoftwareLink = {
  before:
    "Enterprise web applications are frequently part of a broader software ecosystem — connected to backend systems, APIs, databases, and automation that extend beyond what a single application handles on its own. Where that's the case, our ",
  text: "Custom Software Development Services",
  href: "/services/software-development",
  after: " team can scope the broader technical engagement alongside enterprise web development, so architecture decisions are made with the full system in mind.",
};

export const seoPerformanceSection = {
  title: "SEO & Enterprise Website Performance",
  intro:
    "Enterprise applications with public-facing components — customer portals, marketing sites tied to a broader platform, or public information pages — also need a solid technical SEO foundation, distinct from the internal-facing parts of the system.",
  considerations: [
    "Crawlability that lets search engines properly index public content",
    "Page performance that affects both user experience and search ranking",
    "Responsive design that serves both users and search engines' mobile-first indexing",
    "Clean architecture that avoids the technical debt that tends to hurt long-term SEO performance",
    "Metadata properly structured across public pages",
    "Structured content that search engines and AI-powered search tools can parse effectively",
    "URL architecture that's logical and stable over time",
    "Core Web Vitals as a measurable performance benchmark tied directly to both UX and search visibility",
    "Internal linking that helps both users and search engines understand how a site's content is organized",
  ],
  seoLink: {
    before:
      "For enterprise projects where public-facing SEO performance is a genuine priority — not just the internal application itself — our ",
    text: "SEO Services",
    href: "/services/seo",
    after: " team can work alongside development to ensure the technical foundation supports search visibility from launch, rather than requiring retrofitting later.",
  },
};

export const costSection = {
  title: "How Much Does Enterprise Web Development Cost?",
  intro: "There's no fixed price for enterprise web development — cost is driven directly by the scope and complexity of what's actually being built. Key cost factors include:",
  factors: [
    "Application complexity (how intricate the underlying business logic and workflows are)",
    "Number of modules the system needs to cover",
    "Users and roles requiring distinct permission structures",
    "Integrations with existing systems",
    "UI/UX requirements and how much design work the interface genuinely needs",
    "Backend complexity",
    "Database architecture complexity",
    "Security requirements appropriate to the sensitivity of the data involved",
    "Third-party services the application needs to connect to",
    "Development timeline (compressed timelines can increase cost)",
    "Maintenance requirements after launch",
  ],
  closing:
    "Enterprise projects should normally begin with a structured requirements discovery and technical planning phase before any cost estimate is finalized — the complexity that actually drives cost usually isn't fully clear until an organization's specific workflows, integrations, and data requirements have been properly assessed.",
};

export const enterpriseFaqs = [
  {
    q: "What is enterprise web development?",
    a: "Enterprise web development is the design and construction of custom web-based software built to support an organization's internal operations and business workflows — portals, dashboards, and API-driven platforms architected specifically for the scale, security, and integration requirements that distinguish enterprise systems from standard business websites.",
  },
  {
    q: "What is the difference between enterprise web development and regular web development?",
    a: "Regular web development often centers on content, presentation, and conversion — a marketing site or a small business web app. Enterprise web development addresses more complex requirements: multiple user roles, large datasets, deep integrations with existing business systems, sophisticated authentication and authorization, and architecture designed to remain maintainable and scalable over years of operational use.",
  },
  {
    q: "How much does enterprise web development cost?",
    a: "Cost depends on application complexity, number of modules and user roles, integrations, UI/UX requirements, and security needs. There's no fixed universal price — enterprise projects should begin with a requirements discovery phase, since the true scope and cost driver usually isn't clear until your specific workflows and integrations are properly assessed.",
  },
  {
    q: "How long does an enterprise web development project take?",
    a: "Timeline depends on scope, number of modules, integration complexity, and the depth of testing and security review required. Enterprise projects generally require more upfront planning and architecture work than smaller projects, which factors into overall timeline — we scope realistic estimates after a proper discovery and requirements phase.",
  },
  {
    q: "What technologies are used for enterprise web applications?",
    a: "Common choices include React and Next.js for frontend development, Node.js/Express, Laravel/PHP, or Python/Django for backend development, and PostgreSQL, MySQL, or MongoDB for data storage — selected based on your specific requirements, existing infrastructure, and team expertise rather than a fixed default stack.",
  },
  {
    q: "Can enterprise web applications integrate with existing software?",
    a: "Yes, integration with existing systems — CRM, ERP, payment gateways, accounting software, authentication providers, and other internal or external platforms — is a core part of enterprise web development, built through well-structured APIs with proper validation, error handling, and data synchronization.",
  },
  {
    q: "How do you make enterprise web applications scalable?",
    a: "Scalability is addressed at the architecture stage through techniques like database optimization, API optimization, appropriate caching, background processing for non-blocking work, modular architecture, and performance testing under realistic load — designed for your organization's actual growth trajectory rather than added after a system starts struggling.",
  },
  {
    q: "How is security handled in enterprise web development?",
    a: "Security covers authentication, authorization, role-based access control, secure API communication, input validation, data protection, secure session and password handling, audit logging, and secure database practices — applied throughout the architecture and development process rather than reviewed only before launch. Specific regulatory compliance requires separate, verified assessment.",
  },
  {
    q: "Can you develop custom dashboards and business portals?",
    a: "Yes, custom dashboards and portals — customer, employee, partner, and vendor-facing — are a core part of our enterprise web development services, built with role-based access control and data visualization designed around what each specific user group actually needs to see and do.",
  },
  {
    q: "How can I start an enterprise web development project?",
    a: "The process starts with a business and technical discovery conversation to understand your organization's workflows, existing systems, and requirements. From there, we move into requirements analysis and system architecture before development begins, so the project's scope and technical approach are clear from the start.",
  },
];

export const finalCta = {
  headline: "Ready to Build Your Enterprise Web Application?",
  body: "Enterprise projects carry more complexity and more at stake than a standard web build — which is exactly why they benefit from starting with a genuine conversation about your workflows, systems, and requirements rather than a generic proposal. The Runner Software Solutions works with organizations to turn complex business requirements into enterprise applications that are secure, scalable, and built to remain maintainable well past launch.",
  contactLink: {
    text: "Contact The Runner Software Solutions",
    href: "/contact",
  },
};
