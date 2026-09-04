import type { LucideIcon } from "lucide-react";
import {
  Lightbulb,
  Code2,
  Shield,
  Layers,
  Zap,
  CheckCircle2,
  Compass,
  GitBranch,
  Server,
} from "lucide-react";
import { SOFTWARE_DEVELOPMENT_PILLAR_PATH } from "./services-menu";

export { SOFTWARE_DEVELOPMENT_PILLAR_PATH };

export const softwareConsultingSeo = {
  title: "Software Consulting Services & Company | The Runner",
  description:
    "Software consulting on architecture, technology strategy, and modernization — decisions made before code gets written. Book a consultation.",
  h1: "Software Consulting for the Decisions That Happen Before You Write Code",
  canonicalPath: "/services/software-development/software-consulting",
  ogTitle: "Software Consulting Services | The Runner Software Solutions",
  ogDescription:
    "Technical strategy, architecture guidance, technology selection, and modernization planning — grounded in your requirements, not industry trends.",
  twitterTitle: "Software Consulting Services | The Runner Software Solutions",
  twitterDescription:
    "Technical strategy, architecture guidance, technology selection, and modernization planning — grounded in your requirements, not industry trends.",
  imageAlt: "Software consulting services by The Runner Software Solutions",
};

export const consultingHero = {
  intro:
    "The most expensive software mistakes aren't bugs — they're architectural decisions made too early, technology chosen because it was trending rather than because it fit, and legacy systems patched for years instead of properly assessed. The Runner Software Solutions provides software consulting: technical strategy, architecture guidance, technology selection, and modernization planning for businesses that need the right decision made before significant engineering investment goes into building it.",
  closing:
    "We're not selling a specific technology stack or a predetermined answer. A consulting engagement should end with a clear, well-reasoned recommendation — even when that recommendation is \"don't build this yet\" or \"your existing system doesn't need a rewrite.\"",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "View Our Work",
  benefits: [
    "Architecture and technology decisions grounded in your actual requirements, not industry trends",
    "Legacy system assessments that give you an honest refactor-vs-rebuild recommendation",
    "Technology strategy that accounts for your team's real capabilities, not just theoretical best practices",
    "Build-vs-buy guidance that considers your actual business case, not an assumption that custom is always better",
    "Consulting output you can act on directly, whether that's with our development team or your own",
  ],
};

export const trustBar = {
  statement: "Technical strategy grounded in real engineering trade-offs, not a predetermined technology recommendation.",
};

export const whatIsConsulting = {
  title: "What Is Software Consulting?",
  definition:
    "Software consulting is the practice of helping a business make well-reasoned technical, architectural, and product decisions about software — before, during, or independent of actually building it.",
  consultantRole:
    "A software consultant's output is a decision, a plan, or a strategy — an architecture document, a technology recommendation, a modernization roadmap, a technical feasibility assessment — that a business can act on, whether that action is building in-house, hiring a development partner, or in some cases deciding not to proceed with a project as originally scoped.",
  businessProblems: [
    "Uncertainty about whether a product idea is technically feasible",
    "An existing system that's become difficult and expensive to maintain",
    "A growing engineering team without an experienced technical leader to set direction",
    "A major technology decision (cloud migration, AI integration, platform rebuild) with significant cost and risk attached to getting it wrong",
  ],
  technicalProblems: [
    "Unclear or poorly documented system architecture",
    "Accumulated technical debt slowing down every new feature",
    "A technology stack that no longer fits the product's actual requirements",
    "Integration challenges between systems that were never designed to work together",
    "Performance or scalability issues without a clear root cause",
  ],
  typicalEngagement:
    "A typical consulting engagement starts with discovery and assessment, moves through analysis and strategy development, and concludes with a concrete deliverable — a roadmap, an architecture recommendation, a technology decision, or a modernization plan — that you can act on with clear next steps.",
};

export type ConsultingServiceItem = {
  title: string;
  desc: string;
};

export const consultingServices: ConsultingServiceItem[] = [
  { title: "Software Strategy Consulting", desc: "Connecting business goals to a concrete technology strategy and implementation roadmap — understanding what the business is trying to achieve, then working backward to what needs to be true technically to get there, and in what sequence." },
  { title: "Software Architecture Consulting", desc: "Designing or evaluating system architecture for scalability, maintainability, and long-term flexibility, with explicit trade-off analysis rather than a one-size-fits-all template." },
  { title: "Technology Consulting", desc: "Evaluating and selecting a technology stack — frontend, backend, database, cloud, and mobile — based on your specific requirements, team expertise, and long-term roadmap." },
  { title: "Legacy Software Modernization", desc: "Assessing an existing legacy system and determining the right path forward: refactor, re-platform, rebuild, or replace." },
  { title: "Software Product Consulting", desc: "Product architecture, MVP scoping, technical roadmap planning, and feasibility assessment for new or evolving products." },
  { title: "Cloud Consulting", desc: "Cloud architecture design, migration planning, and infrastructure strategy — assessing whether, when, and how to move workloads to the cloud." },
  { title: "API & Integration Consulting", desc: "API strategy, third-party integration planning, and data-flow design for systems that need to interoperate reliably." },
  { title: "AI Consulting", desc: "Identifying practical, realistic AI opportunities within your existing product or operations, and planning integration strategy." },
  { title: "Performance Consulting", desc: "Application profiling, bottleneck identification, and optimization planning for systems experiencing real performance problems, based on measurement rather than guesswork." },
  { title: "Security Consulting", desc: "Application security review, access control design, authentication and authorization architecture, and secure system design guidance." },
  { title: "DevOps Consulting", desc: "CI/CD pipeline design, deployment strategy, infrastructure automation planning, and monitoring/observability strategy." },
];

export const consultingProcess = [
  { step: 1, title: "Discovery", desc: "Understanding your business, goals, constraints, and the specific problem or decision you need help with." },
  { step: 2, title: "Business & Technical Assessment", desc: "Evaluating both the business context and the technical context — existing systems, current architecture, team capabilities." },
  { step: 3, title: "Requirements Analysis", desc: "Clarifying what the solution actually needs to accomplish, technically and functionally." },
  { step: 4, title: "Current-System Audit", desc: "Where relevant, a structured review of existing code, architecture, and infrastructure." },
  { step: 5, title: "Architecture Evaluation", desc: "Assessing current architecture or designing a new one against the specific requirements identified." },
  { step: 6, title: "Technology Assessment", desc: "Evaluating current or candidate technologies against your actual requirements, team expertise, and long-term plans." },
  { step: 7, title: "Risk & Technical Debt Analysis", desc: "Identifying specific risks and quantifying technical debt where it exists." },
  { step: 8, title: "Strategy & Roadmap", desc: "Synthesizing the assessment into a concrete recommendation and a sequenced plan." },
  { step: 9, title: "Implementation Planning", desc: "Translating strategy into an actionable plan — specific steps, resources, and sequencing." },
  { step: 10, title: "Development/Modernization Support", desc: "Where an engagement extends into execution, providing technical guidance during actual development or modernization work." },
  { step: 11, title: "Testing & Validation", desc: "Ensuring that whatever's implemented actually meets the requirements and assumptions the strategy was built on." },
  { step: 12, title: "Monitoring & Continuous Improvement", desc: "Tracking whether the recommended approach is performing as expected and adjusting as real-world data comes in." },
];

export const architectureSection = {
  title: "Software Architecture Consulting",
  intro: "Good architecture consulting starts from an honest premise: no architecture pattern is universally correct — the right choice depends on your specific business requirements, team size, product complexity, expected traffic, data requirements, security needs, budget, and growth expectations.",
  patterns: [
    "Monolithic architecture — often the right starting point for smaller teams and earlier-stage products",
    "Modular monolith — a single deployable unit internally organized into well-separated modules",
    "Microservices — independently deployable services, valuable for larger teams but introducing real operational complexity",
    "Event-driven architecture — useful for decoupling components and handling asynchronous workflows",
    "REST APIs, and GraphQL where the client's data-fetching patterns genuinely benefit from it",
    "Database architecture — relational versus document-based storage selected based on actual data shape and access patterns",
    "Caching — appropriate layers sized to actual traffic patterns rather than speculative scale",
    "Queues — asynchronous processing for work that shouldn't block a user-facing response",
    "Authentication and authorization — architected explicitly, not bolted on",
    "Scalability — architecture that matches genuine expected growth",
    "Availability — the level of uptime and fault tolerance actually required",
    "Observability — logging, monitoring, and tracing designed in from the start",
  ],
  example:
    "A small team building a new SaaS product with modest early traffic is usually better served by a well-structured monolith than jumping straight to microservices — microservices add coordination overhead that a two- or three-person engineering team doesn't have the capacity to absorb.",
};

export const modernizationSection = {
  title: "Software Modernization Consulting",
  intro: "Legacy modernization decisions carry real financial and operational stakes, and getting the strategy wrong is expensive in either direction.",
  assessmentIntro: "Assessment starts with:",
  assessment: [
    "Legacy system assessment — understanding what the system actually does and how it's maintained",
    "Technical debt evaluation — identifying accumulated shortcuts and maintenance burden",
    "Dependency analysis — understanding what the system depends on and how outdated or risky those dependencies are",
    "Code quality review — assessing maintainability, test coverage, and structural soundness",
    "Security risk assessment — identifying vulnerabilities from outdated dependencies or architectural gaps",
    "Performance issue identification — understanding where and why the system underperforms",
    "Architecture problem diagnosis — identifying structural issues that limit the system's ability to evolve",
  ],
  strategiesIntro: "From that assessment, four modernization strategies emerge:",
  strategies: [
    { title: "Refactor", desc: "Improving the internal structure of existing code without changing its external behavior. Usually the lowest-risk, lowest-cost path when the underlying architecture is sound." },
    { title: "Replatform", desc: "Moving the application to a new platform or infrastructure with minimal changes to core architecture. Appropriate when the software is sound but the infrastructure is limiting." },
    { title: "Rebuild", desc: "Rewriting the application on a modern architecture and technology stack. Appropriate when the existing architecture itself is the limiting factor." },
    { title: "Replace", desc: "Retiring the custom system in favor of an existing product or platform. Appropriate when the functionality is no longer genuinely differentiated." },
  ],
  guidance:
    "If the codebase is maintainable and the architecture isn't the bottleneck, refactor. If the code and architecture are sound but the infrastructure is the problem, replatform. If the architecture itself is fundamentally limiting new development, rebuild. If the system's core function is no longer a genuine differentiator, replace.",
  closing:
    "The most common mistake we see is skipping straight to rebuild without a genuine assessment — a full rewrite is the highest-risk, highest-cost option, and it's often chosen by default rather than because it's actually the right fit.",
};

export const techStackSection = {
  title: "Software Technology Stack Consulting",
  intro: "Technology should be selected based on requirements, not trends — we evaluate candidate technologies against your specific project needs, team expertise, ecosystem maturity, and long-term maintainability.",
  areas: [
    { label: "Frontend", value: "React and Next.js for many modern web applications, alongside plain JavaScript/TypeScript approaches where a simpler solution genuinely fits better." },
    { label: "Backend", value: "Node.js and Express for JavaScript-centric teams and APIs; PHP and Laravel where that ecosystem fits the project or existing infrastructure." },
    { label: "Mobile", value: "Flutter or React Native for cross-platform reach; native Android or native iOS where platform-specific requirements justify separate codebases." },
    { label: "Databases", value: "PostgreSQL and MySQL for structured, relational data; MongoDB where a flexible, document-based data model fits better — MongoDB tends to make sense for highly variable, evolving data structures, while PostgreSQL is generally stronger for well-defined relationships and strict consistency requirements." },
    { label: "Cloud", value: "AWS and other major cloud providers, selected based on existing infrastructure, specific service requirements, and cost considerations." },
    { label: "DevOps", value: "Docker for containerized deployments; CI/CD pipelines appropriate to release frequency and team size; Linux and Nginx where self-managed hosting is the right fit." },
    { label: "AI", value: "Generative AI and AI APIs where they solve a genuine, well-scoped problem; machine learning for prediction, classification, and pattern-recognition use cases." },
  ],
  closing:
    "We only recommend technologies we genuinely have capability in — if a specific requirement calls for something outside our core strengths, we'll say so rather than stretching a recommendation to fit our own capabilities.",
};

export const businessStages = {
  title: "Software Consulting for Different Business Stages",
  stages: [
    {
      title: "Startups",
      items: [
        "MVP planning — defining the smallest viable feature set that validates the core idea",
        "Technology selection appropriate to a small team and fast iteration needs",
        "Lightweight architecture that avoids premature complexity",
        "Development roadmap sequencing what to build and when",
        "Technical feasibility assessment before significant investment",
      ],
    },
    {
      title: "SMEs",
      items: [
        "Business process automation consulting",
        "Guidance on improving an existing system rather than replacing it outright",
        "Integration strategy for connecting existing tools and systems",
        "Scalability planning appropriate to realistic near-term growth",
      ],
    },
    {
      title: "Enterprises",
      items: [
        "Legacy modernization at a larger, organizationally complex scale",
        "Enterprise architecture spanning multiple systems and teams",
        "Security review appropriate to larger attack surfaces",
        "Cloud migration planning for substantial existing infrastructure",
        "Large-scale integrations across numerous internal and external systems",
        "Technical governance — establishing standards across multiple engineering teams",
      ],
    },
  ],
};

export const buildVsBuy = {
  title: "Build vs. Buy Consulting",
  question: "Should you build custom software or buy an existing solution?",
  intro: "This is one of the most consequential — and most commonly rushed — decisions a business makes, and it deserves genuine analysis rather than a default answer in either direction.",
  rows: [
    { factor: "Cost", build: "Higher upfront investment", buy: "Lower upfront cost, ongoing subscription" },
    { factor: "Control", build: "Full control over functionality and roadmap", buy: "Limited to what the vendor supports" },
    { factor: "Customization", build: "Built precisely around your workflows", buy: "Limited to configuration within the platform's constraints" },
    { factor: "Scalability", build: "Architected for your specific growth needs", buy: "Bound by the vendor's scaling limits and pricing tiers" },
    { factor: "Integration", build: "Built exactly for the systems you use", buy: "Limited to supported integrations, sometimes requiring workarounds" },
    { factor: "Security", build: "Your responsibility to implement and maintain", buy: "Shared with, and partly dependent on, the vendor" },
    { factor: "Maintenance", build: "Ongoing responsibility (yours or a partner's)", buy: "Largely handled by the vendor" },
    { factor: "Time-to-market", build: "Longer, since it's built from the ground up", buy: "Faster, since the foundation already exists" },
  ],
  buildWhen: "Custom software makes sense when your workflows are specific enough that existing platforms force meaningful compromises, when the software is a genuine competitive differentiator, or when integration and scale requirements exceed what existing platforms comfortably support.",
  buyWhen: "An existing SaaS/product makes sense when your need is a standard, well-understood problem that mature platforms already solve well, when speed to market matters more than deep customization, or when ongoing custom development cost isn't justified.",
  closing:
    "We approach this analysis practically, not as a sales pitch toward the more expensive option — a genuine build-vs-buy assessment sometimes concludes that custom development isn't the right call, and we'll tell you that directly.",
};

export const costSection = {
  title: "Software Consulting Cost",
  question: "How much does software consulting cost?",
  intro: "There's no fixed universal price — cost is driven by scope and complexity:",
  factors: [
    "Scope — a focused technology-selection consultation costs less than a comprehensive enterprise architecture review",
    "Consultant expertise required",
    "Project complexity",
    "Architecture requirements",
    "Number of systems involved",
    "Legacy complexity",
    "Technology — some specialized areas require more specific expertise",
    "Engagement duration",
    "Discovery requirements",
    "Team size — how many consultants the engagement genuinely requires",
  ],
  structuresIntro: "Common engagement structures:",
  structures: [
    "Fixed-scope consultation — a defined deliverable for a fixed price",
    "Hourly consulting — billed for time spent, appropriate for open-ended engagements",
    "Retainer — ongoing availability for technical advisory support over a defined period",
    "Project-based consulting — a defined engagement tied to a specific initiative",
    "Ongoing technical advisory — longer-term strategic input as your product and technical needs evolve",
  ],
  closing:
    "We don't publish fixed pricing because accurate cost depends entirely on the specific scope and complexity of your engagement — we'll walk through actual numbers once we understand what you're trying to solve.",
};

export const usaCanadaSection = {
  title: "Software Consulting for USA & Canada Businesses",
  intro: "We work with businesses across the United States and Canada on software consulting engagements:",
  items: [
    "Remote collaboration — conducted effectively through video calls, shared documentation, and asynchronous communication",
    "Time-zone overlap — scheduling and communication patterns that work within your team's actual working hours",
    "Technical communication — findings useful to both technical and non-technical stakeholders",
    "Documentation — consulting deliverables produced as clear, actionable written artifacts",
    "Security — appropriate access controls when reviewing existing systems or code",
    "IP ownership — clear agreements on ownership of consulting deliverables",
    "NDA — standard practice before any detailed technical or business discussion",
    "Agile collaboration — consulting that extends into implementation integrates with your existing Agile process",
    "Distributed engineering — engagements designed to fit distributed or remote engineering teams",
    "Project reporting — regular, structured updates on engagement progress and findings",
  ],
  closing:
    "Whether your team is concentrated in a single office or fully distributed across North America, the consulting engagement model is the same.",
};

export const securitySection = {
  title: "Security & Confidentiality",
  intro: "Consulting engagements frequently involve reviewing sensitive existing systems — confidentiality and access control are treated seriously from the start:",
  practices: [
    "NDA — standard practice before any detailed technical review or business discussion",
    "Access control — access scoped deliberately, not granted broadly by default",
    "Least privilege — any access granted is limited to what's genuinely needed for the assessment",
    "Secure credentials — handled through appropriate secure practices",
    "Repository permissions — code review access scoped to relevant repositories",
    "Environment separation — clear distinctions between review access and development access",
    "Data protection — sensitive data handled according to your existing policies",
    "Secure development practices — part of the recommendation where consulting extends into implementation",
    "Documentation — access grants and engagement scope documented clearly",
    "Offboarding — any access granted is formally revoked at engagement conclusion",
    "Intellectual property ownership — consulting deliverables and their ownership clearly defined",
  ],
  disclaimer:
    "We do not claim compliance with SOC 2, HIPAA, ISO 27001, GDPR, or any other specific certification unless independently verified.",
};

export const servicesComparison = {
  title: "Software Consulting vs. Other Services",
  intro: "Understanding where consulting fits relative to execution services:",
  rows: [
    { service: "Software Consulting", purpose: "Technical strategy and decision-making", control: "High", bestFor: "Businesses needing technical direction before or alongside building" },
    { service: "Custom Software Development", purpose: "Building software", control: "High", bestFor: "Custom applications with a defined scope ready for development" },
    { service: "Dedicated Development Team", purpose: "Long-term engineering capacity", control: "High", bestFor: "Ongoing product development requiring a consistent external team" },
    { service: "IT Staff Augmentation", purpose: "Adding individual specialists", control: "Very High", bestFor: "Existing teams needing specific skills or additional capacity" },
    { service: "Digital Transformation Consulting", purpose: "Broader business and technology modernization", control: "High", bestFor: "Organizations modernizing operations and technology together" },
    { service: "Managed Services", purpose: "Ongoing technical operations", control: "Lower", bestFor: "Continuous operational needs like infrastructure or application support" },
  ],
  relationshipIntro: "Where this page fits relative to our other services:",
  customLink: {
    before: "Once direction is set, ",
    text: "custom software development services",
    href: "/services/software-development/custom-software-development",
    after: " covers actually building it, a ",
  },
  dedicatedLink: {
    before: "",
    text: "dedicated development team",
    href: "/services/software-development/dedicated-development-team",
    after: " covers ongoing product engineering capacity, and ",
  },
  staffAugLink: {
    before: "",
    text: "IT staff augmentation services",
    href: "/services/software-development/it-staff-augmentation",
    after: " covers adding specific skills into an existing team. Many engagements naturally flow from consulting into one of these execution models — but consulting itself is specifically about getting the decision right first.",
  },
};

export const practicalExamples = {
  title: "Practical Software Consulting Examples",
  disclaimer: "The following are illustrative, hypothetical scenarios demonstrating the type of reasoning involved — they are not descriptions of actual client projects or results.",
  examples: [
    "Legacy ERP modernization — assessing whether targeted refactoring, replatform, or phased rebuild offers the best balance of risk and business continuity",
    "Healthcare software architecture — designing a system with careful attention to data access control and audit trails",
    "SaaS product architecture — evaluating multi-tenancy strategy based on expected customer count and data isolation requirements",
    "CRM integration strategy — designing data synchronization between a custom application and an existing CRM",
    "Cloud migration planning — assessing which components are strong replatform candidates versus which need redesign during migration",
    "AI feature integration — evaluating whether an existing third-party API or a custom-trained model better fits the use case",
    "Ecommerce performance optimization — profiling an underperforming storefront to distinguish frontend, backend, and database bottlenecks",
    "Multi-tenant SaaS architecture — designing role-based access control and data isolation for a B2B platform",
    "Mobile application backend architecture — designing a shared API layer serving both web and native mobile apps",
  ],
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: "Genuine software engineering expertise", desc: "Architecture and technology guidance grounded in real engineering trade-offs." },
  { icon: Lightbulb, title: "Practical technical guidance", desc: "Results in an actionable decision, not an abstract strategy document." },
  { icon: Compass, title: "Business-focused architecture", desc: "Technical recommendations explicitly tied back to your actual business goals." },
  { icon: Layers, title: "Current, relevant technology knowledge", desc: "Applied selectively rather than defaulted to." },
  { icon: GitBranch, title: "Transparent communication", desc: "Clear reasoning behind every recommendation, including trade-offs and alternatives." },
  { icon: Zap, title: "Agile-compatible engagement model", desc: "For consulting that extends into implementation support." },
  { icon: Server, title: "Long-term availability", desc: "Continued advisory input as your product and technical needs evolve." },
  { icon: Shield, title: "Security-conscious process", desc: "From initial access through final deliverable." },
];

export const caseStudiesSection = {
  title: "Case Studies / Proof",
  body: "Explore our",
  linkText: "software development case studies",
  href: "/case-studies",
  after: " to see examples of how our engineering teams have approached architecture, modernization, and product development work across web, mobile, and enterprise projects.",
};

export const finalCta = {
  headline: "Ready to Get the Technical Decision Right Before You Build?",
  intro:
    "Whether you're evaluating a new product idea, staring down a legacy system that's overdue for a real assessment, or trying to decide between building custom software and buying an existing tool, the right starting point is a clear-eyed technical conversation — not a sales pitch toward the most expensive option.",
  primaryCta: "Book a Free Software Consultation",
  secondaryCta: "Talk to Our Technical Team",
  closing:
    "We're happy to discuss existing software problems, new product ideas, architecture decisions, modernization planning, or cloud and AI initiatives — and to tell you honestly when the answer is simpler than a full engagement.",
};

export const consultingFaqs = [
  { q: "What is software consulting?", a: "Software consulting is the practice of helping a business make well-reasoned technical, architectural, and product decisions about software — an architecture recommendation, a technology stack decision, a modernization plan, or a feasibility assessment — grounded in your specific business goals and technical context, rather than a generic template." },
  { q: "What does a software consultant do?", a: "A software consultant evaluates your business goals, existing systems, and technical constraints, then produces a concrete, actionable recommendation — an architecture design, a technology selection, a modernization strategy, or a technical feasibility assessment — distinct from a developer's role, which is to actually build the resulting solution." },
  { q: "When should a company hire a software consultant?", a: "Common triggers include uncertainty about whether a product idea is technically feasible, an existing system that's become expensive and difficult to maintain, a major technology decision with significant cost and risk attached, or a growing engineering team without an experienced technical leader to set architectural direction." },
  { q: "What does software consulting include?", a: "It typically includes discovery and business/technical assessment, requirements analysis, evaluation of existing systems where relevant, architecture and technology recommendations, risk and technical debt analysis, and a concrete strategy or roadmap — sometimes extending into implementation guidance if the engagement continues past the initial recommendation." },
  { q: "How much does software consulting cost?", a: "Cost depends on engagement scope, project complexity, the number of systems involved, legacy complexity, and engagement structure (fixed-scope, hourly, retainer, or project-based). There's no fixed universal price — accurate cost estimates require understanding the specific decision or assessment you need help with." },
  { q: "How does software consulting work?", a: "Engagements typically start with discovery to understand your business and technical context, move through assessment and analysis (including a system audit where relevant), and conclude with a concrete deliverable — a roadmap, architecture recommendation, or technology decision — that you can act on directly." },
  { q: "What happens during a software consulting engagement?", a: "Depending on scope, this can include stakeholder interviews, review of existing code and architecture, technology evaluation, risk and technical debt assessment, and the development of a written strategy or roadmap. Engagements that extend into implementation support add development guidance and ongoing technical advisory." },
  { q: "How do consultants evaluate existing software?", a: "Evaluation typically covers architecture soundness, code quality and maintainability, dependency and security risk, performance characteristics, and how well the current system's structure supports the business's actual near-term and long-term needs — producing a clear picture of what's working, what isn't, and why." },
  { q: "How do you choose the right technology stack?", a: "Technology selection should follow project requirements, team expertise, ecosystem maturity, and long-term maintainability — not current trends. We evaluate frontend, backend, database, mobile, and cloud choices against your specific project's actual needs rather than defaulting to a fixed modern stack." },
  { q: "How do you design scalable software architecture?", a: "Scalable architecture starts from actual (not speculative) growth expectations, then applies appropriate techniques — caching, database optimization, horizontal or vertical scaling, queues for asynchronous processing — matched to that real workload. Over-engineering for scale you won't reach for years is as much a design mistake as under-engineering for real near-term growth." },
  { q: "When should legacy software be modernized?", a: "When technical debt, security risk, or architectural limitations are measurably slowing down development, increasing operational risk, or preventing the business from adding features it actually needs. The right modernization path — refactor, replatform, rebuild, or replace — depends on a proper assessment, not an assumption that a full rewrite is always necessary." },
  { q: "Should a company build custom software or buy an existing solution?", a: "It depends on whether your workflows and requirements are specific enough that existing platforms force meaningful, recurring compromises, and whether the software is a genuine competitive differentiator versus a supporting tool. A proper build-vs-buy analysis weighs cost, control, customization, and time-to-market rather than defaulting to either option." },
  { q: "How do you plan software development after a consulting engagement?", a: "Consulting output typically includes a sequenced implementation roadmap — what to build first, what depends on what, and realistic scope for each phase — which can then be executed by your internal team, a development partner, or a combination of both." },
  { q: "How do you reduce software development risk?", a: "Risk reduction comes from validating technical feasibility before major investment, properly assessing existing systems before modernization decisions, choosing architecture and technology based on actual requirements rather than trends, and sequencing implementation to surface problems early rather than late." },
  { q: "How do you evaluate technical debt?", a: "Technical debt evaluation looks at code quality and maintainability, outdated or risky dependencies, architectural limitations, test coverage, and how much current debt is actively slowing down new development — producing a concrete picture of what's costing you time and risk today." },
  { q: "How do you plan a cloud migration?", a: "Cloud migration planning starts with assessing which components are strong candidates for a straightforward replatform versus which would benefit from redesign during the move, along with cost modeling, security architecture, and a sequencing plan that minimizes business disruption during the transition." },
  { q: "How do you integrate AI into existing software?", a: "This starts with identifying a genuine, well-scoped opportunity — not adding AI for its own sake — then evaluating whether an existing AI API or a custom-trained model better fits the specific use case, based on the nature of your data and the problem you're actually trying to solve." },
  { q: "How do you improve application performance?", a: "Performance consulting starts with profiling and measurement to identify the actual bottleneck — frontend rendering, backend API latency, or database query inefficiency each require different remediation, and treating them the same wastes effort on the wrong fix." },
  { q: "Can US businesses hire your software consulting team?", a: "Yes, we work with businesses across the United States on software consulting engagements, using a remote-friendly collaboration model with attention to time-zone overlap, clear documentation, and regular reporting throughout the engagement." },
  { q: "Can Canadian businesses hire your software consulting team?", a: "Yes, we work with Canadian businesses on software consulting engagements using the same structured process, security practices, and reporting standards applied to every engagement, regardless of where in Canada your team is based." },
];
