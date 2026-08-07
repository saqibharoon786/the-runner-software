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
  Activity,
  RefreshCw,
} from "lucide-react";
import { getSoftwareDevelopmentServicePath } from "./services-menu";

const sdPath = getSoftwareDevelopmentServicePath;

export const enterpriseSoftwareSeo = {
  title: "Enterprise Software Development Company | The Runner",
  description:
    "Enterprise software development services for large organizations worldwide. Secure, scalable, integration-ready systems. Book a free consultation.",
  h1: "Enterprise Software Development Services for Complex, Large-Scale Operations",
  canonicalPath: "/services/software-development/enterprise-software-development",
  ogTitle: "Enterprise Software Development Company | The Runner Software Solutions",
  ogDescription:
    "We design and build secure, scalable enterprise software for large organizations — from legacy modernization to enterprise-wide system integration.",
  twitterTitle: "Enterprise Software Development Services | The Runner",
  twitterDescription:
    "Secure, scalable enterprise software built for complex organizations. Explore our approach to architecture, security, and integration.",
};

export const enterpriseSoftwareHero = {
  subheading:
    "Secure, scalable software engineered for organizations where legacy complexity, compliance requirements, and cross-department integration are the norm, not the exception.",
  valueProposition:
    "The Runner Software Solutions designs and builds enterprise software for large organizations, government bodies, and multi-department businesses managing complex operational and regulatory environments. From legacy system modernization to enterprise-wide integration and digital transformation, our teams bring the architectural discipline and business context required to build systems that hold up under real enterprise scale — not just a demo environment.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore Our Enterprise Development Process",
  trustStatement:
    "We work with enterprise, mid-market, and government organizations across healthcare, finance, manufacturing, logistics, and retail to build software capable of supporting multi-department operations, high transaction volumes, and strict compliance requirements.",
};

export const whatIsEnterpriseSoftware = {
  intro: [
    "Enterprise software development is the design and engineering of large-scale software systems built to support the operations of an entire organization — often spanning multiple departments, business units, or geographic locations — rather than a single team or function.",
    "Unlike a standalone application built for one specific task, enterprise software typically needs to integrate with numerous existing systems, support role-based access across large user bases, comply with industry or governmental regulations, and remain stable under significant transaction volume and concurrent usage. This combination of scale, integration complexity, and compliance weight is what separates enterprise software development from smaller custom software projects.",
  ],
  useCases: [
    "Consolidating multiple regional or departmental systems into a unified platform",
    "Modernizing legacy infrastructure that has become costly or risky to maintain",
    "Building internal platforms that support thousands of concurrent users across roles and permissions",
    "Automating cross-department workflows that currently rely on manual coordination",
    "Integrating disparate data sources into a single source of operational truth",
    "Meeting industry-specific compliance requirements (healthcare, finance, government) through purpose-built architecture",
  ],
  benefits: [
    "Operational consistency across departments and locations",
    "Reduced long-term technical debt compared to layering more tools onto legacy systems",
    "Stronger compliance posture, with security and audit requirements built into the architecture",
    "Better executive visibility through consolidated, real-time reporting",
    "Improved system reliability at enterprise transaction and user volume",
  ],
  businessValue:
    "For large organizations, the cost of not investing in properly architected enterprise software tends to show up gradually: departments running on disconnected systems, decision-makers working from outdated or inconsistent data, and IT teams spending disproportionate time maintaining fragile legacy integrations. Enterprise software development addresses this at the architectural level — consolidating fragmented systems into a coherent platform designed for the organization's actual operating scale.",
  whoNeeds:
    "Enterprise software development is typically the right fit for organizations that have outgrown the scalability, integration capacity, or compliance readiness of smaller systems or off-the-shelf platforms — including large enterprises, government bodies, financial institutions, healthcare networks, and manufacturing or logistics organizations coordinating operations across multiple sites.",
};

export const comparisonIntro = [
  "Large organizations often start with off-the-shelf enterprise platforms because of faster initial deployment — but these platforms frequently reach a ceiling as organizational complexity, integration needs, and compliance requirements grow beyond what a shared, multi-tenant product was designed to accommodate.",
  "In practice: off-the-shelf enterprise platforms remain a reasonable choice for organizations with largely standardized processes. Custom enterprise software becomes the stronger investment once organizational complexity, compliance requirements, or integration needs exceed what a shared platform can reasonably support without significant workaround overhead.",
];

export const comparisonRows = [
  { factor: "Customization", custom: "Built precisely around organizational structure and workflows", offTheShelf: "Configurable within vendor-defined limits" },
  { factor: "Scalability", custom: "Architected for your specific scale and growth trajectory", offTheShelf: "Bound by the vendor's platform architecture" },
  { factor: "Security", custom: "Security model designed around your data sensitivity and compliance needs", offTheShelf: "Shared security model across all tenants" },
  { factor: "Integration", custom: "Deep, native integration across internal and external systems", offTheShelf: "Often limited to pre-built connectors or APIs" },
  { factor: "Ownership", custom: "Full ownership of codebase and architecture", offTheShelf: "Licensed access; vendor controls the roadmap" },
  { factor: "Long-Term Cost", custom: "Development and maintenance cost, without recurring per-seat licensing", offTheShelf: "Often increases with user count, modules, or usage tiers" },
  { factor: "Performance", custom: "Optimized for your actual usage patterns and transaction volume", offTheShelf: "Performance shared across a multi-tenant environment" },
  { factor: "Flexibility", custom: "Evolves with organizational change, at your own pace", offTheShelf: "Constrained by vendor release cycles and roadmap priorities" },
];

export const enterpriseChallenges = {
  intro:
    "We treat each of these as an architectural and organizational problem first — the technology decisions that follow are chosen specifically to address the scale and complexity of the actual enterprise environment, not applied as a generic template.",
  items: [
    { title: "Legacy Systems", desc: "Aging infrastructure that is costly to maintain, difficult to extend, and increasingly risky to keep running without modernization." },
    { title: "Manual Operations", desc: "Cross-department processes still coordinated manually because no unified system automates the handoff." },
    { title: "Disconnected Applications", desc: "Multiple systems operating independently, requiring manual reconciliation and creating inconsistent data across the organization." },
    { title: "Poor Reporting", desc: "Leadership working from fragmented or outdated data because no system consolidates organization-wide reporting in real time." },
    { title: "Security Risks", desc: "Systems that don't meet current security expectations for enterprise-scale, sensitive, or regulated data." },
    { title: "Compliance Challenges", desc: "Regulatory requirements (industry-specific or regional) that legacy or generic systems weren't built to support." },
    { title: "Scaling Issues", desc: "Systems that performed adequately at a smaller scale but degrade under enterprise-level transaction volume or user concurrency." },
    { title: "Department Silos", desc: "Business units operating on separate systems with no shared visibility, slowing cross-functional decision-making." },
    { title: "Slow Decision-Making", desc: "Delayed or incomplete data access that slows down leadership's ability to respond to operational or market changes." },
    { title: "Data Fragmentation", desc: "Organizational data spread across disconnected systems with no single, reliable source of truth." },
  ],
};

export type EnterpriseServiceOffering = {
  title: string;
  desc: string;
  anchor?: string;
};

export const enterpriseSoftwareServices: EnterpriseServiceOffering[] = [
  { title: "Enterprise Web Applications", desc: "Large-scale web platforms built to support high user concurrency, complex role-based permissions, and integration across multiple internal systems." },
  { title: "Business Process Automation", desc: "Automating cross-department workflows — approvals, data handoffs, reporting cycles — that currently depend on manual coordination between teams." },
  { title: "Workflow Management Systems", desc: "Custom systems that route tasks, approvals, and data through defined organizational workflows, with visibility into status at every stage." },
  { title: "Enterprise Portals", desc: "Centralized portals giving employees, partners, or customers structured, permissioned access to the systems and data relevant to their role." },
  { title: "Internal Business Platforms", desc: "Purpose-built internal tools designed around how specific departments or functions actually operate, rather than a generic internal-tools template." },
  { title: "Enterprise API Development", desc: "Designing and building APIs that allow internal systems, partner platforms, and third-party services to communicate reliably and securely at enterprise scale." },
  { title: "Legacy Software Modernization", desc: "Assessing existing legacy systems to determine what can be preserved, re-architected, or replaced — followed by a structured migration plan that limits disruption to ongoing operations.", anchor: "legacy-modernization" },
  { title: "Cloud Migration", desc: "Migrating on-premises or legacy infrastructure to cloud environments (AWS, Microsoft Azure, or Google Cloud), with a migration strategy built around minimizing downtime and operational risk." },
  { title: "Enterprise System Integration", desc: "Connecting ERP, CRM, HRMS, and other core systems so data flows across the organization instead of requiring manual synchronization between platforms." },
  { title: "Digital Transformation Solutions", desc: "Broader organizational modernization initiatives that combine process redesign, system consolidation, and new platform development — guided by business objectives rather than technology for its own sake." },
];

export const servicesCrossLinks = [
  { text: "custom software development", href: sdPath("custom-software-development"), before: "For organizations weighing a full platform rebuild against incremental modernization, our ", after: " team can also scope a more targeted rebuild where appropriate." },
  { text: "software consulting", href: sdPath("software-consulting"), before: "Organizations still evaluating the right transformation strategy before committing to a build often start with our ", after: " service." },
];

export const enterpriseSolutions = [
  "ERP Systems — unifying finance, procurement, inventory, and operations across the organization",
  "CRM Systems — enterprise-scale customer relationship management tailored to complex sales and service structures",
  "HRMS — organization-wide human resource management, from records to performance management",
  "Payroll Systems — compliant, automated payroll processing across departments or regions",
  "Hospital Management Systems — patient records, scheduling, and care coordination at healthcare-network scale",
  "School Management Systems — administrative and academic systems for multi-campus institutions",
  "Manufacturing ERP — production planning, resource allocation, and supply chain visibility",
  "Inventory Systems — real-time inventory tracking across multiple warehouses or locations",
  "Warehouse Management — logistics-focused systems for warehouse operations and fulfillment",
  "Construction ERP — project, resource, and cost management across construction portfolios",
  "Real Estate Platforms — property management and transaction systems at portfolio scale",
  "Retail Management Systems — omnichannel retail operations across multiple locations",
  "Financial Management Systems — enterprise-grade financial reporting and control systems",
  "Supply Chain Systems — end-to-end visibility across procurement, logistics, and distribution",
];

export const enterpriseSoftwareProcess = [
  { icon: Search, title: "Discovery", desc: "Structured assessment of organizational goals, existing systems, and operational constraints, involving stakeholders across relevant departments." },
  { icon: FileText, title: "Business Analysis", desc: "Detailed analysis of current workflows and pain points to define what the system needs to solve — distinct from what a generic enterprise template assumes." },
  { icon: Layers, title: "Architecture Design", desc: "Enterprise architecture planning covering system structure, integration points, data flow, and scalability requirements specific to your organization." },
  { icon: PenTool, title: "UI/UX Design", desc: "Interface design built around how different user roles across the organization will actually interact with the system." },
  { icon: TerminalSquare, title: "Development", desc: "Iterative agile development with regular milestone reviews, allowing stakeholders to validate progress against business requirements throughout the build." },
  { icon: TestTube2, title: "Testing", desc: "Functional, performance, security, and integration testing conducted at enterprise scale — including load testing for expected concurrent usage." },
  { icon: Rocket, title: "Deployment", desc: "Structured, risk-managed deployment planning, including data migration and rollback procedures appropriate for enterprise-scale systems." },
  { icon: Activity, title: "Monitoring", desc: "Ongoing system monitoring post-launch to track performance, uptime, and emerging issues in real time." },
  { icon: Wrench, title: "Support", desc: "Continued maintenance, security patching, and technical support to keep the system stable and current." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "Iterative enhancement based on usage patterns, organizational change, and evolving business requirements over the system's lifecycle." },
];

export const technologyGroups = [
  { label: "Frontend", items: "React, Next.js, Angular, Vue.js" },
  { label: "Backend", items: "Node.js, Python, Java, Spring Boot, .NET, Laravel" },
  { label: "Mobile", items: "Flutter, React Native" },
  { label: "Cloud", items: "AWS, Microsoft Azure, Google Cloud" },
  { label: "AI", items: "Machine learning models, predictive analytics, AI-assisted automation and business intelligence integration" },
  { label: "Database", items: "PostgreSQL, MongoDB, MySQL" },
  { label: "DevOps", items: "Docker, Kubernetes, CI/CD pipelines, microservices architecture" },
  { label: "Security", items: "Identity management, role-based access control, secure API design, encryption standards" },
];

export const industriesServed = [
  { name: "Healthcare", desc: "Compliance-focused systems for patient management, care coordination, and health data integration across networks." },
  { name: "Education", desc: "Multi-campus academic and administrative platforms." },
  { name: "Retail", desc: "Omnichannel retail systems built for multi-location operations." },
  { name: "Finance", desc: "Secure, compliance-focused financial and transaction systems." },
  { name: "Manufacturing", desc: "Production and supply chain systems for complex operations." },
  { name: "Construction", desc: "Project and portfolio management across construction operations." },
  { name: "Hospitality", desc: "Enterprise booking and operations platforms for multi-property businesses." },
  { name: "Real Estate", desc: "Portfolio-scale property management and transaction systems." },
  { name: "Logistics", desc: "Fleet, warehouse, and supply chain systems for large-scale operations." },
  { name: "Government", desc: "Compliance-ready systems for public sector operations and citizen services." },
];

export const securityPractices = [
  { title: "Role-Based Access Control (RBAC)", desc: "Granular permission structures ensuring users only access the systems and data relevant to their role." },
  { title: "Data Encryption", desc: "Encryption in transit and at rest, applied according to the sensitivity of the data being handled." },
  { title: "Secure APIs", desc: "API design following secure authentication, rate limiting, and validation practices to reduce attack surface." },
  { title: "OWASP Best Practices", desc: "Development aligned with OWASP guidelines to address common web application vulnerabilities." },
  { title: "Authentication & Authorization", desc: "Robust identity verification and permission enforcement, including support for enterprise identity management standards." },
  { title: "Backup Strategy", desc: "Structured backup and disaster recovery planning to protect against data loss and support business continuity." },
  { title: "Monitoring", desc: "Continuous system monitoring to detect anomalies, performance issues, or potential security events in real time." },
  { title: "Audit Logs", desc: "Detailed logging of system activity to support compliance reporting and incident investigation." },
  { title: "Compliance-Ready Architecture", desc: "Systems designed with the flexibility to meet industry-specific and regional regulatory requirements, reviewed against your specific compliance obligations during the architecture phase." },
];

export const securityCallout = {
  title: "Business Continuity",
  body: "For enterprise systems, downtime isn't just an inconvenience — it's an operational and financial risk. Our architecture and deployment planning explicitly account for business continuity, including redundancy planning and structured incident response, rather than treating uptime as an afterthought.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: TrendingUp, title: "Business-First Approach", desc: "Every architectural and technical decision is evaluated against its impact on your organization's actual operations — not treated as a purely technical exercise." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Structured reporting and consistent stakeholder communication throughout a project, so leadership always has visibility into status and risk." },
  { icon: Zap, title: "Agile Development", desc: "Iterative delivery with regular milestone reviews, allowing enterprise stakeholders to validate direction throughout the project rather than only at the end." },
  { icon: UserCheck, title: "Dedicated Experts", desc: "Enterprise projects are staffed with engineers and architects experienced in large-scale system design — not generalist resources unfamiliar with enterprise constraints." },
  { icon: Layers, title: "Scalable Solutions", desc: "Architecture built for your organization's actual scale and growth trajectory, reducing the likelihood of costly re-platforming as you expand." },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Security practices embedded throughout the development lifecycle, aligned with the compliance and risk requirements of enterprise environments." },
  { icon: LifeBuoy, title: "Long-Term Partnership", desc: "We remain engaged after deployment — monitoring, maintaining, and evolving the system as your organization's needs change over time." },
  { icon: TerminalSquare, title: "Modern Technologies", desc: "Technology choices grounded in what will genuinely serve your architecture and integration needs, not trend-driven defaults." },
];

export const relatedServices = [
  { title: "Custom Software Development", href: sdPath("custom-software-development"), desc: "If your project is scoped to a single application or department rather than an organization-wide platform, our custom software development service is built around delivering precisely fitted solutions without full enterprise-scale integration overhead." },
  { title: "Software Product Development", href: sdPath("software-product-development"), desc: "Building software to bring to market as a standalone product, rather than an internal enterprise system? Our software product development service covers MVP validation through full-scale, market-ready engineering." },
  { title: "Software Consulting", href: sdPath("software-consulting"), desc: "Still evaluating whether to modernize, consolidate, or rebuild your enterprise systems? Our software consulting service helps you define the right technical strategy before committing to a development approach." },
];

export const relatedSolutions = [
  { title: "ERP Software Development", href: "/erp-software", desc: "Unify finance, procurement, and operations across your organization." },
  { title: "CRM Software Development", href: "/crm-software", desc: "Build enterprise-scale customer relationship management tailored to complex sales structures." },
  { title: "Hospital Management System Development", href: "/hospital-management-system", desc: "Healthcare-network-scale systems for patient records and care coordination." },
  { title: "Inventory Management System Development", href: "/inventory-management-system", desc: "Real-time inventory visibility across multiple locations or warehouses." },
  { title: "HRMS Development", href: "/hrms-software", desc: "Organization-wide human resource management, from records to performance tracking." },
];

export const enterpriseSoftwareFaqs = [
  { q: "What is enterprise software development?", a: "Enterprise software development is the design and engineering of large-scale software systems built to support the operations of an entire organization, often spanning multiple departments, locations, or business units." },
  { q: "How is enterprise software different from custom software?", a: "Enterprise software typically involves greater scale, more complex integration across systems, larger user bases, and stricter compliance requirements than a standalone custom software project." },
  { q: "How much does enterprise software development cost?", a: "Cost depends on the scope, number of integrated systems, compliance requirements, and scale of the organization. We provide a detailed estimate following an initial discovery and business analysis phase." },
  { q: "How long does an enterprise software project take?", a: "Timelines vary significantly based on system complexity and the number of integrations involved. We provide a project-specific roadmap during the planning phase." },
  { q: "Can you modernize our legacy enterprise systems instead of replacing them entirely?", a: "Yes. We assess existing systems to determine what can be preserved, re-architected, or migrated, and build a modernization plan designed to minimize disruption to ongoing operations." },
  { q: "Do you work with government organizations?", a: "Yes. We build compliance-ready systems for public sector and government organizations, accounting for the specific regulatory and procurement requirements involved." },
  { q: "How do you handle security for enterprise-scale systems?", a: "Security is built into the architecture from the start, including role-based access control, encryption, secure API design, and adherence to OWASP best practices, detailed in Section 10 above." },
  { q: "Can enterprise software integrate with our existing ERP or CRM systems?", a: "Yes. Enterprise system integration is a core part of our service, connecting new and existing systems so data flows across the organization without manual reconciliation." },
  { q: "Do you provide cloud migration services for enterprise systems?", a: "Yes. We plan and execute cloud migrations to AWS, Microsoft Azure, or Google Cloud, with a strategy designed to minimize downtime and operational risk." },
  { q: "What industries do you build enterprise software for?", a: "We work across healthcare, finance, manufacturing, logistics, retail, construction, hospitality, real estate, education, and government sectors, among others." },
  { q: "How do you manage enterprise projects involving multiple departments?", a: "We conduct structured business analysis involving stakeholders across relevant departments to ensure the system addresses cross-functional requirements, not just a single team's workflow." },
  { q: "Can you build systems that support thousands of concurrent users?", a: "Yes. Enterprise architecture planning includes load and performance testing designed around your organization's actual expected usage volume." },
  { q: "Do you offer business process automation as part of enterprise software development?", a: "Yes. Automating manual, cross-department workflows is a common component of enterprise engagements, reducing coordination overhead between teams." },
  { q: "What compliance standards can enterprise software be built to support?", a: "Compliance requirements vary by industry and region. We review your specific regulatory obligations during the architecture phase and design the system accordingly." },
  { q: "Do you provide a dedicated project manager for enterprise engagements?", a: "Yes. Enterprise projects are assigned a dedicated project manager as a consistent point of contact throughout the engagement." },
  { q: "What is your enterprise software development process?", a: "Our process includes discovery, business analysis, architecture design, UI/UX design, development, testing, deployment, monitoring, support, and continuous improvement." },
  { q: "Can you help us decide between modernizing our current system or building a new one?", a: "Yes. Our software consulting service is designed to help organizations evaluate this decision before committing to a development approach." },
  { q: "Do you build enterprise mobile applications as well as web platforms?", a: "Yes. We develop enterprise mobile applications using frameworks such as Flutter and React Native, alongside enterprise web platforms." },
  { q: "How do you ensure code quality on large enterprise projects?", a: "We follow structured code review processes, coding standards, and both automated and manual testing throughout development, applied consistently across all system components." },
  { q: "Can you build enterprise software that supports multiple regions or currencies?", a: "Yes. Multi-region and multi-currency support is a common requirement for enterprise systems and is addressed during the architecture design phase." },
  { q: "Do you offer ongoing support after an enterprise system is deployed?", a: "Yes. We provide continuous monitoring, maintenance, and enhancement support to keep enterprise systems stable and current as organizational needs evolve." },
  { q: "What engagement models do you offer for enterprise projects?", a: "We offer fixed-price, dedicated team, staff augmentation, and time-and-material models, chosen based on how well-defined your project scope is." },
  { q: "Can you integrate AI or business intelligence into our enterprise systems?", a: "Yes. We integrate AI-driven analytics and business intelligence capabilities directly into enterprise systems where they provide genuine operational value." },
  { q: "Do you sign NDAs and enterprise-level contracts?", a: "Yes. We're glad to work within your organization's standard NDA, procurement, and contracting requirements." },
  { q: "How do you handle data migration during enterprise system replacement?", a: "Data migration is planned as a structured phase within deployment, including validation steps to ensure data integrity when moving from legacy to new systems." },
  { q: "Can you build a system that consolidates multiple departmental tools into one platform?", a: "Yes. System consolidation is a common enterprise engagement, replacing fragmented departmental tools with a unified, integrated platform." },
  { q: "Do you provide disaster recovery and business continuity planning?", a: "Yes. Backup strategy and business continuity planning are addressed as part of enterprise architecture, detailed in Section 10 above." },
  { q: "What is the difference between enterprise software development and software product development?", a: "Enterprise software development focuses on internal, organization-specific systems, while software product development is oriented toward building a product for external, market-facing use." },
  { q: "Can you support enterprise clients across multiple countries?", a: "Yes. We work with distributed enterprise teams and support collaboration across time zones and regions." },
  { q: "How do we get started with an enterprise software development project?", a: "Book a free consultation with our team. We'll review your organizational requirements, current systems, and objectives, and outline a proposed architecture and roadmap." },
];

export const finalCta = {
  headline: "Let's Build Software That Can Actually Carry Your Organization",
  body: "Enterprise systems have to work at a scale, security level, and integration depth that smaller software simply doesn't need to account for. If your organization is dealing with legacy constraints, fragmented systems, or growing compliance demands, we can help you architect a path forward — grounded in your actual operational reality, not a generic enterprise template.",
  cta: "Book Your Free Consultation",
};
