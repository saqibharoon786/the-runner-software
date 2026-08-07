import type { LucideIcon } from "lucide-react";
import {
  Search,
  FileText,
  PenTool,
  Layers,
  TerminalSquare,
  TestTube2,
  Rocket,
  Wrench,
  Zap,
  Shield,
  MessageSquare,
  UserCheck,
  TrendingUp,
  LifeBuoy,
} from "lucide-react";
import { getSoftwareDevelopmentServicePath } from "./services-menu";

const sdPath = getSoftwareDevelopmentServicePath;

export const customSoftwareSeo = {
  title: "Custom Software Development Company | The Runner",
  description:
    "Custom software development services for enterprises & startups worldwide. Scalable, secure, business-focused solutions. Book a free consultation.",
  h1: "Custom Software Development Services Built Around Your Business",
  canonicalPath: "/services/software-development/custom-software-development",
  ogTitle: "Custom Software Development Company | The Runner Software Solutions",
  ogDescription:
    "We design, build, and scale custom software for enterprises, SMEs, and startups worldwide — engineered for security, performance, and long-term growth.",
  twitterTitle: "Custom Software Development Services | The Runner",
  twitterDescription:
    "Enterprise-grade custom software, built around your business processes. Explore our development approach and book a free consultation.",
};

export const customSoftwareHero = {
  subheading:
    "Enterprise-grade custom software, engineered for the way your business actually operates — not the way generic tools assume it does.",
  valueProposition:
    "The Runner Software Solutions designs, builds, and maintains custom software for enterprises, SMEs, and startups worldwide. Whether you're replacing a patchwork of disconnected tools, modernizing legacy systems, or building a new platform from the ground up, our teams combine deep engineering expertise with business context to deliver software that creates measurable operational value — not just functional code.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore Our Development Process",
  trustStatement:
    "We work with businesses across healthcare, finance, retail, manufacturing, logistics, education, and technology to build custom software that solves real operational problems — not generic templates dressed up as \"custom.\"",
};

export const whatIsCustomSoftware = {
  intro: [
    "Custom software development is the process of designing, building, and maintaining software applications tailored to a specific organization's workflows, data structures, and business rules — as opposed to configuring a generic, one-size-fits-all product to approximate what your business needs.",
    "Where off-the-shelf software asks your business to adapt to its constraints, custom software is built around your existing (or intentionally redesigned) processes. This distinction matters most as businesses scale: the operational gaps that generic tools paper over with manual workarounds tend to compound, creating inefficiency, data fragmentation, and technical debt that becomes harder to unwind the longer it's left unaddressed.",
  ],
  benefits: [
    "Exact process fit — software modeled on how your teams actually work, not a generic workflow assumption",
    "Full ownership — no per-seat licensing costs or vendor lock-in tied to a third-party product roadmap",
    "Scalable by design — architecture built for your specific growth trajectory, not a shared multi-tenant ceiling",
    "Deep integration — custom systems connect cleanly with your existing tools, databases, and APIs",
    "Competitive differentiation — proprietary workflows and features competitors using the same off-the-shelf tools cannot replicate",
    "Long-term cost control — no recurring licensing increases or forced upgrades dictated by a third-party vendor",
  ],
  businessValue:
    "Custom software pays off less in the initial build and more in what it prevents over time: fewer manual workarounds, less time reconciling data between disconnected systems, and less risk of outgrowing a platform mid-scale. For businesses with non-standard workflows — multi-location operations, regulated data handling, unusual reporting requirements — the \"flexibility tax\" of forcing a generic tool to fit often costs more, over a 3–5 year horizon, than building the right system from the start.",
  whoNeeds: [
    "Enterprises consolidating multiple legacy systems into one platform",
    "Startups building a product where the software is the business model",
    "Companies with workflows too specific for generic SaaS tools to model accurately",
    "Organizations in regulated industries (healthcare, finance) with strict compliance and data-handling requirements",
    "Businesses that have outgrown the scalability or customization ceiling of their current off-the-shelf tools",
  ],
};

export const comparisonIntro = [
  "Off-the-shelf software isn't inherently wrong — for standardized, well-understood processes (basic accounting, generic project tracking), a mature SaaS product is often the faster, cheaper choice. Custom software earns its cost when your processes are specific enough that generic tools require constant workarounds, or when the software itself is meant to be a competitive asset rather than a shared commodity.",
  "In short: off-the-shelf software optimizes for speed of setup; custom software optimizes for long-term fit, ownership, and differentiation. The right choice depends on how standard your processes are and how central the software is to your competitive position.",
];

export const comparisonRows = [
  { factor: "Process Fit", custom: "Built around your exact workflows", offTheShelf: "You adapt your workflows to the tool" },
  { factor: "Scalability", custom: "Architected for your specific growth path", offTheShelf: "Limited by the vendor's platform ceiling" },
  { factor: "Integration", custom: "Deep, native integration with existing systems", offTheShelf: "Often limited to available APIs or plugins" },
  { factor: "Ownership", custom: "You own the codebase and IP", offTheShelf: "Vendor owns the platform; you license access" },
  { factor: "Ongoing Cost Structure", custom: "Development + maintenance cost, no per-seat fees", offTheShelf: "Recurring subscription costs, often scaling with usage" },
  { factor: "Customization", custom: "Unlimited, by design", offTheShelf: "Limited to vendor-permitted configuration" },
  { factor: "Time to Launch", custom: "Longer initial build", offTheShelf: "Faster initial setup" },
  { factor: "Competitive Differentiation", custom: "Proprietary, difficult to replicate", offTheShelf: "Shared by every other licensee" },
  { factor: "Vendor Dependency", custom: "Low — you control the roadmap", offTheShelf: "High — subject to vendor pricing and product changes" },
];

export const problemsWeSolve = {
  intro:
    "Businesses typically come to custom software development not because they want new software for its own sake, but because a specific operational problem has become too costly to keep working around.",
  closing:
    "We approach each of these as a business problem first — the technical solution follows from a clear understanding of what's actually breaking down operationally, not from a default technology preference.",
  items: [
    { title: "Manual Processes", desc: "Repetitive, manual data entry and cross-checking between systems that consume staff time and introduce human error." },
    { title: "Disconnected Systems", desc: "Multiple tools that don't talk to each other, forcing teams to manually reconcile data across platforms." },
    { title: "Scalability Limitations", desc: "Systems that worked at a smaller scale but now buckle under increased users, transactions, or data volume." },
    { title: "Data Silos", desc: "Departments working with fragmented, inconsistent data because no unified system connects them." },
    { title: "Security Gaps", desc: "Legacy or generic systems that don't meet current security expectations for sensitive business or customer data." },
    { title: "Legacy Software", desc: "Aging systems built on outdated technology that are expensive to maintain and difficult to extend." },
    { title: "Reporting Issues", desc: "Inability to generate accurate, real-time business insights because data lives in too many disconnected places." },
  ],
};

export type ServiceOffering = {
  title: string;
  desc: string;
  href?: string;
  anchor?: string;
};

export const customSoftwareServices: ServiceOffering[] = [
  { title: "Requirements Analysis & Technical Consulting", desc: "Before writing a line of code, we work with your team to map current workflows, identify inefficiencies, and define what the software actually needs to do — distinct from what a generic template assumes it should do." },
  { title: "Software Architecture & System Design", desc: "We design system architecture based on your scale, integration needs, and growth plans — including decisions around microservices vs. monolithic architecture, database structure, and API design." },
  { title: "Custom Application Development", desc: "Our engineering teams build the software using modern, maintainable frameworks and languages, following structured code review and quality standards throughout development — not just at the end." },
  { title: "Legacy System Modernization", desc: "For businesses running on outdated platforms, we assess what can be preserved, what needs re-architecting, and how to migrate without disrupting ongoing operations.", anchor: "legacy-modernization" },
  { title: "System Integration & API Development", desc: "We connect your custom software to existing tools — ERP, CRM, payment processors, third-party APIs — so data flows between systems instead of requiring manual transfer." },
  { title: "Cloud-Native Development", desc: "We build software designed for cloud infrastructure from the outset, using AWS, Microsoft Azure, or Google Cloud depending on your existing environment and requirements." },
  { title: "AI & Automation Integration", desc: "Where relevant, we integrate machine learning models or automation workflows directly into custom software — for predictive analytics or automated document processing." },
  { title: "Ongoing Maintenance & Support", desc: "Post-launch, we provide monitoring, bug fixes, security patching, and iterative enhancement, so the software continues to perform as your business evolves." },
];

export const servicesCrossLinks = [
  { text: "enterprise software development", href: sdPath("enterprise-software-development"), before: "If your project requires broader organizational systems beyond a single application, our ", after: " team handles multi-system, organization-wide platforms." },
  { text: "software product development", href: sdPath("software-product-development"), before: "Our ", after: " service is built specifically for companies taking a product to market." },
];

export const softwareTypes = [
  "ERP Systems — unifying finance, inventory, procurement, and operations",
  "CRM Platforms — tailored to specific sales and customer service workflows",
  "Hospital Management Systems — patient records, scheduling, and care coordination",
  "School Management Systems — student records, attendance, and administrative workflows",
  "Gym Management Software — membership, scheduling, and billing systems",
  "Restaurant POS Systems — order management, inventory, and payment processing",
  "Inventory Management Systems — real-time stock tracking across locations",
  "HRMS (Human Resource Management Systems) — employee records, performance, and onboarding workflows",
  "Payroll Software — automated, compliant payroll processing",
  "Real Estate Platforms — property listings, CRM, and transaction management",
  "Construction Management Software — project tracking, resource allocation, and field reporting",
  "Manufacturing Systems — production tracking and supply chain visibility",
  "Logistics Software — fleet management and route optimization",
  "Healthcare Applications — telehealth, patient engagement, and compliance-focused systems",
  "Education Platforms — learning management and administrative systems",
  "Retail & E-Commerce Systems — inventory, POS, and omnichannel platforms",
];

export const customSoftwareProcess = [
  { icon: Search, title: "Discovery", desc: "We start by understanding your business goals, current systems, and pain points through structured stakeholder interviews and technical assessment." },
  { icon: FileText, title: "Planning", desc: "We define project scope, technical roadmap, and resource allocation, giving you a clear picture of timeline and deliverables before development begins." },
  { icon: PenTool, title: "UI/UX Design", desc: "Our designers create wireframes and interactive prototypes based on how your actual users will interact with the system." },
  { icon: Layers, title: "Architecture", desc: "We design the technical architecture — database structure, API design, infrastructure — chosen specifically for your scale, security, and integration requirements." },
  { icon: TerminalSquare, title: "Development", desc: "Engineering teams build the software in iterative agile sprints, with regular demos so you can review progress and adjust direction throughout." },
  { icon: TestTube2, title: "Testing", desc: "We conduct functional, performance, security, and regression testing to catch issues before deployment." },
  { icon: Rocket, title: "Deployment", desc: "We manage the release process — including data migration where relevant — with a structured rollback plan to minimize risk." },
  { icon: Wrench, title: "Support", desc: "After launch, we provide ongoing maintenance, monitoring, and enhancement support, so the software continues to evolve alongside your business." },
];

export const technologyGroups = [
  { label: "Frontend", items: "React, Next.js, Angular, Vue.js" },
  { label: "Backend", items: "Node.js, Python, Java, .NET, Laravel" },
  { label: "Mobile", items: "Flutter, React Native, Swift, Kotlin" },
  { label: "Cloud", items: "AWS, Microsoft Azure, Google Cloud" },
  { label: "AI", items: "TensorFlow, PyTorch, OpenAI API integrations, custom machine learning models" },
  { label: "Database", items: "PostgreSQL, MongoDB, MySQL, Redis" },
  { label: "DevOps", items: "Docker, Kubernetes, CI/CD pipelines (GitHub Actions, Jenkins), Terraform" },
  { label: "CMS", items: "WordPress, Strapi, Sanity, Contentful" },
];

export const industriesServed = [
  { name: "Healthcare", desc: "Secure, compliant systems for patient management, telehealth, and health data integration." },
  { name: "Education", desc: "Learning management and administrative platforms for schools and institutions." },
  { name: "Retail", desc: "E-commerce, POS, and inventory systems built for scale." },
  { name: "Finance", desc: "Secure, compliance-focused transaction and reporting systems." },
  { name: "Construction", desc: "Project management and field resource tracking software." },
  { name: "Manufacturing", desc: "ERP and production visibility systems." },
  { name: "Hospitality", desc: "Booking and guest management platforms." },
  { name: "Real Estate", desc: "Property management and CRM systems." },
  { name: "Fitness", desc: "Membership and scheduling platforms." },
  { name: "Logistics", desc: "Fleet management and route optimization software." },
];

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: TrendingUp, title: "Business-Focused Engineering", desc: "We evaluate every technical decision against its impact on your business outcomes — not just whether it's technically interesting." },
  { icon: Shield, title: "Enterprise Security", desc: "Security practices are built into development from the start: secure coding standards, code review, and infrastructure hardening." },
  { icon: Zap, title: "Agile Teams", desc: "Iterative development with regular demos keeps your project adaptable as priorities shift, instead of locking you into a rigid upfront spec." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Structured reporting and consistent points of contact mean you always know where your project stands." },
  { icon: UserCheck, title: "Dedicated Project Manager", desc: "A single accountable point of contact who understands your business context — not a rotating cast of unfamiliar resources." },
  { icon: Layers, title: "Scalable Solutions", desc: "Architecture designed with your growth trajectory in mind, reducing the likelihood of costly re-platforming down the line." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "We remain involved after launch — monitoring, maintaining, and enhancing the software as your business evolves." },
];

export const relatedServices = [
  { title: "Enterprise Software Development", href: sdPath("enterprise-software-development"), desc: "For organizations that need large-scale, multi-system platforms — including legacy consolidation, complex integrations, and organization-wide workflow automation." },
  { title: "Software Product Development", href: sdPath("software-product-development"), desc: "If you're building software to bring to market as a product rather than an internal tool, our product development service covers MVP validation to full-scale engineering." },
  { title: "Software Consulting", href: sdPath("software-consulting"), desc: "Not sure whether custom software, an off-the-shelf tool, or a hybrid approach is right? We help you evaluate options and define a clear technical strategy." },
];

export const relatedSolutions = [
  { title: "ERP Software Development", href: "/erp-software", desc: "Unify operations, finance, and inventory into a single connected system." },
  { title: "CRM Software Development", href: "/crm-software", desc: "Build a CRM tailored to your specific sales and customer service workflows." },
  { title: "Hospital Management System Development", href: "/hospital-management-system", desc: "Custom healthcare systems for patient records, scheduling, and care coordination." },
];

export const customSoftwareFaqs = [
  { q: "What is custom software development?", a: "Custom software development is the process of designing and building software specifically for one organization's workflows and requirements, rather than configuring a generic product used by many businesses." },
  { q: "How is custom software different from off-the-shelf software?", a: "Custom software is built around your specific processes and scales with your business, while off-the-shelf software requires you to adapt your workflows to fit the product's existing structure." },
  { q: "How much does custom software development cost?", a: "Cost depends on project scope, complexity, and technology requirements. We provide a detailed estimate after an initial discovery consultation based on your specific needs." },
  { q: "How long does it take to build custom software?", a: "Timelines vary by project complexity — a focused single-function application takes less time than a multi-module enterprise system. We provide a project-specific timeline during the planning phase." },
  { q: "Do I need custom software, or would an off-the-shelf tool work?", a: "If your workflows are largely standard, an off-the-shelf tool may be sufficient. Custom software makes sense when your processes are specific enough that generic tools require significant workarounds, or when the software is core to your competitive advantage." },
  { q: "What industries do you build custom software for?", a: "We build custom software for healthcare, education, retail, finance, construction, manufacturing, hospitality, real estate, fitness, and logistics businesses, among others." },
  { q: "Can you modernize our existing legacy system instead of building from scratch?", a: "Yes. We assess your current system to determine what can be preserved, re-architected, or migrated, and build a modernization plan that minimizes disruption to ongoing operations." },
  { q: "Do you build both web and mobile custom software?", a: "Yes. We develop custom web applications and native or cross-platform mobile applications, depending on your users' needs." },
  { q: "Can custom software integrate with our existing tools?", a: "Yes. System integration and API development are core to most custom software projects, connecting new systems with your existing ERP, CRM, or third-party tools." },
  { q: "Do you offer ongoing support after the software is launched?", a: "Yes. We provide post-launch maintenance, monitoring, and enhancement support to keep the software performing as your business evolves." },
  { q: "What technologies do you use for custom software development?", a: "We select technologies based on project requirements — commonly including React, Node.js, Python, .NET, AWS, Azure, and PostgreSQL, among others." },
  { q: "Can you build AI features into our custom software?", a: "Yes. We integrate AI and machine learning capabilities — such as predictive analytics or automation — directly into custom software where it adds genuine business value." },
  { q: "Is custom software more secure than off-the-shelf software?", a: "Custom software allows security to be architected specifically for your data and compliance requirements, which can offer more control than a shared, generic platform — though security ultimately depends on how the system is designed and maintained." },
  { q: "Do you sign an NDA before discussing our project?", a: "Yes. We're glad to sign a non-disclosure agreement before any detailed discussion of your project requirements." },
  { q: "What is your software development process?", a: "Our process includes discovery, planning, UI/UX design, architecture, development, testing, deployment, and ongoing support, following an agile methodology throughout." },
  { q: "Do you provide a dedicated project manager?", a: "Yes. Each project is assigned a dedicated project manager as a single, consistent point of contact throughout development." },
  { q: "Can we scale the development team up or down during the project?", a: "Yes. We can adjust team size and composition as project needs evolve, particularly under dedicated team or staff augmentation engagement models." },
  { q: "Do you offer fixed-price or time-and-material contracts?", a: "We offer both, along with dedicated team and staff augmentation models, depending on how well-defined your project scope is." },
  { q: "What happens if our requirements change mid-project?", a: "Our agile approach is designed to accommodate evolving requirements through iterative sprints, allowing adjustments without derailing the overall project." },
  { q: "Do you provide source code ownership?", a: "Custom software development typically includes full ownership of the codebase and intellectual property by the client — confirm ownership terms in your specific contract." },
  { q: "Can you build software for multiple locations or multi-branch operations?", a: "Yes. We design systems for multi-location businesses, including centralized data visibility and location-specific access controls." },
  { q: "Do you build ERP and CRM systems as part of custom software development?", a: "Yes. ERP and CRM development are common components of custom software projects, either as standalone systems or integrated modules." },
  { q: "How do you ensure the quality of the code you write?", a: "We follow structured code review processes, coding standards, and both automated and manual testing throughout development, not only at the final stage." },
  { q: "Can custom software help reduce our operational costs?", a: "Yes, when it replaces manual processes, reduces reliance on multiple licensed tools, or improves operational efficiency — the specific savings depend on your current setup and the project scope." },
  { q: "Do you work with businesses outside your home country?", a: "Yes. We work with clients internationally, with distributed teams supporting collaboration across time zones." },
  { q: "What is the difference between custom software and enterprise software development?", a: "Custom software refers to any software built specifically for one organization's needs; enterprise software development typically refers to larger-scale, organization-wide systems with more complex integration and compliance requirements." },
  { q: "Can you help us decide what kind of software solution we actually need?", a: "Yes. Our software consulting service is designed specifically to help businesses evaluate options and define the right technical approach before committing to a build." },
  { q: "Do you build software products for companies planning to sell the software itself?", a: "Yes — that engagement is typically structured under our software product development service, which is built around product-market considerations in addition to engineering." },
  { q: "What do I need to prepare before starting a custom software project?", a: "A general understanding of the business problem you're solving is enough to start — we help formalize detailed requirements during the discovery phase." },
  { q: "How do I get started with The Runner Software Solutions?", a: "Book a free consultation with our team. We'll discuss your requirements, answer technical questions, and outline a proposed approach and timeline." },
];

export const finalCta = {
  headline: "Let's Build Software That Actually Fits Your Business",
  body: "Generic tools force your business to adapt to their limitations. Custom software works the other way around — built around how your teams actually operate, designed to scale as you grow. Talk to our team about your project, and we'll help you define the right approach, technology, and timeline.",
  cta: "Book Your Free Consultation",
};
