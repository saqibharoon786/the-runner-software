import type { LucideIcon } from "lucide-react";
import {
  RefreshCw,
  Code2,
  Shield,
  Layers,
  Zap,
  CheckCircle2,
  Server,
  Database,
  GitBranch,
} from "lucide-react";
import { SOFTWARE_DEVELOPMENT_PILLAR_PATH } from "./services-menu";

export { SOFTWARE_DEVELOPMENT_PILLAR_PATH };

export const legacyModernizationSeo = {
  title: "Legacy Software Modernization Services | The Runner",
  description:
    "Legacy software modernization that protects your data and business logic — modern architecture, security, and performance. Discuss your system.",
  h1: "Legacy Software Modernization Services",
  canonicalPath: "/services/software-development/legacy-software-modernization",
  ogTitle: "Legacy Software Modernization Services | The Runner Software Solutions",
  ogDescription:
    "Modernize outdated software, databases, and business systems without losing the business logic and data your operations depend on.",
  twitterTitle: "Legacy Software Modernization Services | The Runner Software Solutions",
  twitterDescription:
    "Modernize outdated software, databases, and business systems without losing the business logic and data your operations depend on.",
  imageAlt: "Legacy software modernization services by The Runner Software Solutions",
};

export const legacyHero = {
  intro:
    "The system your business still runs on usually got that way for a reason — it works, it holds years of institutional knowledge, and replacing it carelessly risks more than the modernization itself is meant to fix. The Runner Software Solutions helps businesses modernize outdated software, applications, databases, and business systems, reducing operational disruption while preserving the business logic, historical data, and workflows your organization actually depends on.",
  goals:
    "Modernization goals typically include better performance, improved security, easier maintenance, a modern user interface, reliable API connectivity, genuine scalability, better integrations with the systems you already use, improved data accessibility, and a measurable reduction in technical debt — pursued through a strategy matched to what your specific system actually needs, not a default push toward the most disruptive option.",
  primaryCta: "Discuss Your Legacy System",
  secondaryCta: "Get a Modernization Consultation",
};

export const preserveDataSection = {
  title: "Modernize Legacy Software Without Losing Valuable Business Data",
  intro:
    "Businesses often keep using software that's clearly outdated for a simple reason: it still works, and everything it does correctly represents real, accumulated value. Legacy systems frequently contain:",
  items: [
    "Critical business rules encoded over years of refinement",
    "Historical data that's expensive or impossible to fully reconstruct",
    "Customer information tied to years of relationship history",
    "Operational workflows that reflect how the business actually functions day to day",
    "Reporting logic that stakeholders depend on for decisions",
    "Integrations with other systems built up over time",
    "Institutional knowledge — undocumented behavior and edge-case handling that exists only in the running system itself",
  ],
  risk:
    "Replacing a system like this blindly — treating modernization as simply \"build a new version\" — introduces real operational and data risk. Undocumented business rules get missed. Data migrations lose fidelity in ways that aren't obvious until a report comes back wrong months later. Workflows that made sense to the people who built the original system get reinterpreted incorrectly by a team that never saw the original requirements.",
  closing:
    "Modernization, done properly, is a structured process: understand what the existing system actually does and why, assess its technical condition honestly, and then determine the appropriate strategy based on that assessment — not based on a default assumption that the oldest system is automatically the one that needs the most drastic intervention.",
};

export const whatIsLegacy = {
  title: "What Is Legacy Software Modernization?",
  definition:
    "Legacy software modernization is the process of improving, restructuring, migrating, re-engineering, or replacing outdated software components so a system can operate reliably with modern technologies, integrations, and business requirements — while preserving as much of the system's proven business logic and data as the situation calls for.",
  problemsIntro: "Legacy modernization commonly addresses a recognizable set of problems:",
  problems: [
    "Legacy applications built on outdated architectural patterns",
    "Legacy databases with schemas that have accumulated years of ad hoc changes",
    "Old frameworks and outdated programming languages that are difficult to hire for",
    "Monolithic applications that have grown large and tightly coupled",
    "Outdated APIs or the complete absence of any API layer",
    "Unsupported dependencies carrying known, unpatched vulnerabilities",
    "Aging infrastructure that's costly or risky to keep running",
    "Poor user interfaces that reduce productivity",
    "Manual workflows that exist because the software never automated them",
  ],
  closing:
    "Modernization does not always mean rebuilding everything from scratch. A significant part of doing modernization well is correctly identifying which parts of a system genuinely need to change and which parts are working fine and simply need to be preserved and connected to something newer.",
};

export const signsSection = {
  title: "Signs Your Legacy Software Needs Modernization",
  signs: [
    { title: "Difficult Maintenance", desc: "When even small changes take disproportionately long, or when your team is reluctant to touch certain parts of the codebase because nobody fully understands how they work anymore." },
    { title: "Security Concerns", desc: "Unsupported dependencies, outdated authentication mechanisms, and infrastructure that's fallen out of vendor support represent accumulating, often invisible risk." },
    { title: "Poor Performance", desc: "Applications that have slowed over time, database queries that struggle at current data volume, and architecture not designed for current scale." },
    { title: "Integration Problems", desc: "Difficulty connecting old software to APIs, payment systems, CRM platforms, ERP systems, mobile applications, or modern web applications." },
    { title: "Outdated User Experience", desc: "Interfaces that reduce productivity because they weren't designed with current usability expectations." },
    { title: "Limited Scalability", desc: "Architecture that made sense at the business's original scale but now genuinely constrains growth." },
    { title: "Technical Debt", desc: "Accumulated shortcuts, inconsistent patterns, and structural compromises that increase the cost and risk of every subsequent development effort." },
    { title: "Dependency on Obsolete Technology", desc: "Frameworks, libraries, or programming languages approaching end-of-life — no further updates or security patches, and a shrinking pool of engineers." },
  ],
};

export type LegacyServiceItem = {
  title: string;
  desc: string;
  link?: { before: string; text: string; href: string; after: string };
};

export const legacyServices: LegacyServiceItem[] = [
  {
    title: "Legacy Application Modernization",
    desc: "Analyzing an existing application's architecture, code, and behavior, then progressively modernizing it according to a strategy matched to what the assessment actually reveals.",
    link: {
      before: "For broader application development alongside modernization, see our ",
      text: "Software Development Services",
      href: "/services/software-development",
      after: " for custom modernization and new application work.",
    },
  },
  { title: "Legacy System Migration", desc: "Migrating an application from an older platform or environment to a modern one, with careful attention to preserving functionality and data integrity throughout the move." },
  { title: "Application Re-Engineering", desc: "Restructuring an existing application's code and internal architecture to improve maintainability and scalability, while preserving proven business logic." },
  {
    title: "Legacy Database Modernization",
    desc: "Database assessment, schema improvements, data migration, query optimization, data integrity validation, and integration with modern applications — frequently the highest-risk part of a modernization project.",
  },
  { title: "API Modernization", desc: "Building an API layer where none exists, or modernizing an outdated one, creating controlled communication between legacy systems and modern applications." },
  { title: "Monolith Modernization", desc: "Strategies for gradually improving a large, tightly coupled monolithic application — which does not automatically mean decomposing it into microservices." },
  {
    title: "User Interface Modernization",
    desc: "Redesigning an outdated interface to meet current usability expectations, often achievable while preserving the backend functionality underneath.",
    link: {
      before: "For projects where interface design is a significant part of the engagement, our ",
      text: "UI/UX Design Services",
      href: "/services/design/ui-ux-design",
      after: " team works alongside modernization from the earliest planning stages.",
    },
  },
  { title: "Legacy System Integration", desc: "Connecting legacy functionality to modern CRM, ERP, payment systems, mobile applications, web applications, and reporting platforms." },
];

export const strategiesSection = {
  title: "Legacy Software Modernization Strategies",
  intro: "Six recognized strategies exist for legacy modernization, and choosing correctly among them is one of the most consequential decisions in the entire engagement.",
  strategies: [
    { title: "Rehost", desc: "Moving the existing application to new infrastructure with minimal architectural changes — often the fastest and lowest-risk path when infrastructure is the primary constraint." },
    { title: "Replatform", desc: "Moving to a newer platform with limited, targeted code changes, appropriate when the application's architecture is fundamentally sound but its current platform is limiting." },
    { title: "Refactor", desc: "Improving the internal structure of code without fundamentally changing its external behavior, appropriate when the architecture is sound but code quality has degraded." },
    { title: "Rearchitect", desc: "Changing the application's architecture to address scalability, maintainability, or integration requirements that refactoring alone can't resolve." },
    { title: "Rebuild", desc: "Recreating the application using modern technologies, appropriate when the existing architecture is no longer practical to work with." },
    { title: "Replace", desc: "Retiring the legacy system in favor of a new product or custom application, appropriate when modernization isn't economically or technically the sensible path." },
  ],
  factorsIntro: "Choosing the right strategy depends on several factors together:",
  factors: [
    "Business criticality of the system",
    "The actual condition of the existing architecture",
    "The volume and severity of technical debt",
    "Data complexity, available budget, acceptable risk, and timeline constraints",
    "Integration requirements and future scalability needs",
  ],
  closing:
    "Getting this diagnosis right — through genuine assessment rather than assumption — is where a modernization engagement earns most of its value.",
};

export const modernizeVsReplace = {
  title: "Should You Modernize or Replace Legacy Software?",
  modernizeIntro: "Modernization tends to be the more appropriate path when:",
  modernizeWhen: [
    "The system contains valuable existing business logic that would be costly and risky to reimplement",
    "It holds important historical data that needs to be preserved accurately",
    "Core workflows are stable and well-understood even if the technology underneath is dated",
    "It has existing integrations that would need to be rebuilt regardless of approach",
    "The business benefits from incremental change that keeps the system operational throughout the process",
  ],
  replaceIntro: "Replacement tends to make more sense when:",
  replaceWhen: [
    "The existing architecture is severely outdated to the point that modernization would essentially reconstruct the entire system",
    "The technology stack is genuinely unsupported with no reasonable modernization path",
    "Technical debt has accumulated to the point that preserving existing logic costs more than reimplementing it",
    "The underlying data model is fundamentally difficult to work with or migrate cleanly",
    "Business requirements have changed enough that the original system's design no longer fits",
    "The realistic cost of modernization approaches or exceeds the cost of building or adopting something new",
  ],
  closing:
    "This decision should follow directly from a proper technical and business assessment — not from a default preference in either direction.",
};

export const assessmentSection = {
  title: "Legacy System Assessment & Modernization Planning",
  intro: "Modernization should always begin with assessment — recommending a strategy before understanding the actual system is guesswork, not engineering.",
  items: [
    "Source code review to understand structure and quality",
    "Architecture analysis to identify whether the underlying design is sound or fundamentally limiting",
    "Database assessment covering schema, data quality, and performance",
    "Dependency analysis identifying outdated, unsupported, or vulnerable dependencies",
    "Security review surfacing specific risks in authentication, access control, and data handling",
    "Performance assessment identifying actual bottlenecks rather than assumed ones",
    "Integration mapping documenting what the system currently connects to and how",
    "Business workflow analysis ensuring the modernization plan reflects how the business actually uses the system",
    "Technical debt assessment quantifying what's genuinely slowing development down",
    "Infrastructure review covering the environment the system currently runs in",
  ],
  closing:
    "The findings feed directly into a modernization roadmap — a sequenced plan identifying which strategy fits the situation, what order components should be addressed in, and what risks need to be actively managed throughout.",
};

export const dataMigrationSection = {
  title: "Legacy Data Migration & Preservation",
  intro: "Data migration deserves treatment as a critical engineering workstream in its own right, not an afterthought to the modernization work.",
  items: [
    "Data mapping between the legacy schema and any target schema",
    "Data cleansing to address inconsistencies, duplicates, and errors accumulated over years",
    "Schema transformation where the underlying data model itself is changing",
    "Data validation at every stage of the migration rather than only at the end",
    "Migration testing against realistic data volumes and edge cases before a production migration",
    "Backup strategies ensuring a reliable path back to the original state if something goes wrong",
    "Data integrity checks confirming relationships and constraints hold after migration",
    "Rollback planning so a discovered problem doesn't become an irreversible data-loss event",
    "Incremental migration approaches that reduce the risk of a single, high-stakes cutover",
  ],
  closing:
    "We do not promise zero data loss — no migration process can offer that guarantee absolutely — but treating data migration as a first-class engineering concern, with proper validation and rollback planning at every stage, is how that risk gets managed responsibly.",
};

export const securitySection = {
  title: "Modernizing Legacy Software Security",
  intro: "Modernization is frequently the most practical opportunity to address security weaknesses that have accumulated in a legacy system over years.",
  practices: [
    "Authentication modernization — replacing outdated or weak mechanisms with current, secure approaches",
    "Authorization properly scoping what authenticated users and systems can actually do",
    "Role-based access control, often revealing overly broad legacy permissions",
    "Secure API communication for any new or modernized integration points",
    "Encryption where appropriate for sensitive data in transit and at rest",
    "Input validation across every entry point",
    "Dependency updates addressing known vulnerabilities in outdated libraries",
    "Secrets management, moving credentials out of insecure storage",
    "Logging and monitoring to detect unusual activity",
    "Access auditing to review who actually has access to what",
    "Secure deployment practices for however the modernized system is released",
  ],
  disclaimer:
    "We do not claim compliance with SOC 2, HIPAA, ISO 27001, GDPR, or any other specific regulatory or certification framework unless independently verified.",
};

export const integrationSection = {
  title: "Connect Legacy Systems With Modern Applications",
  intro: "APIs and integration layers let a business preserve important legacy functionality while connecting it to newer systems, rather than forcing an all-or-nothing choice.",
  diagram: `Legacy System
       ↓
API / Integration Layer
       ↓
Modern Web Application
       ↓
Mobile Application / External Services`,
  elements: [
    "REST APIs as the standard, well-understood integration pattern",
    "Authentication securing every connection point",
    "Data synchronization keeping information consistent between legacy and modern applications",
    "Integration middleware where a more complex system landscape genuinely calls for it",
    "Error handling for when a legacy system behaves unexpectedly or is temporarily unavailable",
    "Logging to trace what's actually happening across the integration",
    "API versioning so future changes don't break existing integrations",
  ],
  examples:
    "Practical examples: connecting a legacy inventory system to a modern reporting dashboard, exposing legacy customer data to a new mobile application, or building an API layer that lets a legacy order-processing system communicate with a modern CRM platform.",
  seoLink: {
    before: "For legacy systems being modernized into a public-facing web application, our ",
    text: "SEO Services",
    href: "/services/seo",
    after: " team can help ensure the modernized site's technical foundation, performance, and content architecture support search visibility from launch.",
  },
};

export const technologiesSection = {
  title: "Technologies for Legacy Software Modernization",
  groups: [
    { label: "Frontend", value: "React.js and Next.js for modern, maintainable interfaces, built on JavaScript, HTML5, and CSS3, with Tailwind CSS supporting efficient, consistent styling." },
    { label: "Backend", value: "Node.js and Express.js for JavaScript-based backend systems; Laravel and PHP where that ecosystem fits; Python/Django where specific data or processing requirements call for it." },
    { label: "Databases", value: "PostgreSQL and MySQL for structured, relational data; MongoDB where a more flexible, document-based model genuinely fits the target application's data shape better." },
  ],
  closing:
    "Technology selection depends entirely on the existing legacy system, the chosen modernization strategy, integration requirements, and long-term maintainability needs — not every modernization project uses every technology listed here.",
};

export const architectureSection = {
  title: "Modern Legacy Application Architecture",
  intro: "Modernization can frequently be performed incrementally rather than as a single, disruptive cutover:",
  diagram: `Legacy Application
       ↓
Integration / API Layer
       ↓
Modern Backend Services
       ↓
Modern Database / Data Layer
       ↓
Web & Mobile Applications`,
  elements: [
    "Modular architecture where separating concerns genuinely improves maintainability",
    "An API-driven design as the connective layer between old and new components",
    "Clearly defined service boundaries where some degree of decomposition is warranted",
    "Database modernization appropriate to the target architecture",
    "Authentication designed consistently across old and new components",
    "Monitoring giving visibility into the health of the whole connected system",
    "Deployment processes appropriate to the risk profile of a system still handling live business operations",
  ],
  closing:
    "We do not default to recommending microservices for every modernization project — that level of architectural complexity is justified for some systems and genuinely unnecessary overhead for others.",
};

export const incrementalSteps = {
  title: "Modernize Legacy Software Step by Step",
  intro: "Incremental modernization reduces risk by avoiding a single, high-stakes, all-or-nothing transition. A typical incremental approach:",
  steps: [
    "Identify critical components — determine which parts carry the most business risk and value",
    "Assess dependencies — understand what each component actually relies on before touching it",
    "Modernize low-risk components first — building confidence before tackling higher-stakes areas",
    "Introduce APIs — creating the integration layer that lets old and new components coexist",
    "Migrate selected functionality — moving specific capabilities in manageable phases",
    "Validate data — confirming accuracy and integrity at each migration step",
    "Test integrations — verifying legacy and modernized components work together throughout the transition",
    "Gradually retire legacy components — decommissioning only once the modern replacement is proven in production",
  ],
  closing:
    "This strangler-style approach is genuinely effective for many modernization projects, particularly business-critical systems that can't tolerate extended downtime, but it isn't universally the right fit — some systems are better served by a more direct replatform or refactor.",
};

export const modernizationProcess = [
  { step: 1, title: "Discovery", desc: "Understanding your business objectives and how the existing system actually behaves in practice." },
  { step: 2, title: "Technical Assessment", desc: "Analyzing code, architecture, database, infrastructure, dependencies, and integrations." },
  { step: 3, title: "Modernization Strategy", desc: "Selecting rehost, replatform, refactor, rearchitect, rebuild, or replace based on assessment findings." },
  { step: 4, title: "Roadmap & Architecture", desc: "Defining phases, dependencies, risks, and the target architecture." },
  { step: 5, title: "Development & Migration", desc: "Implementing the modernization work, incrementally where that approach fits." },
  { step: 6, title: "Data Migration", desc: "Planning and validating data movement with proper rigor." },
  { step: 7, title: "Testing", desc: "Functional, integration, performance, security, and regression testing against prior behavior." },
  { step: 8, title: "Deployment", desc: "Controlled, planned deployment with a defined rollback option." },
  { step: 9, title: "Monitoring", desc: "Tracking performance, errors, integrations, and overall system health after go-live." },
  { step: 10, title: "Ongoing Improvement", desc: "Continuing to refine the application after modernization." },
];

export const benefitsSection = {
  title: "Benefits of Legacy Software Modernization",
  benefits: [
    "Improved maintainability that makes future changes safer and faster",
    "Better performance addressing bottlenecks accumulated over time",
    "Improved security posture closing gaps in an aging system",
    "A modern user experience that reduces friction for daily users",
    "Better integrations with the tools and platforms your business relies on now",
    "Easier development going forward as technical debt is addressed",
    "Greater scalability appropriate to your business's actual growth",
    "Reduced technical debt and the ongoing cost it imposes",
    "Better data accessibility for reporting and decision-making",
    "Improved operational efficiency from workflows no longer constrained by outdated tooling",
    "Easier future enhancements, since a modernized foundation makes the next round of changes less risky",
  ],
};

export const industriesSection = [
  { industry: "Healthcare", desc: "Legacy patient administration systems often face integration challenges; modernization needs to preserve operational workflows while improving data accessibility and security." },
  { industry: "Education", desc: "Legacy student information systems commonly struggle to integrate with modern digital learning platforms, making API modernization a frequent priority." },
  { industry: "Finance", desc: "Legacy financial systems carry particularly high stakes around data accuracy and security; incremental strategies are often favored given business-continuity risk." },
  { industry: "Retail", desc: "Legacy POS and inventory systems commonly face performance and integration challenges connecting to modern ecommerce platforms." },
  { industry: "Logistics", desc: "Legacy dispatch and tracking systems frequently struggle with real-time data requirements not part of their original design." },
  { industry: "Manufacturing", desc: "Legacy operations systems often have deep integrations with equipment and floor-level systems, making dependency analysis particularly important." },
  { industry: "Real Estate", desc: "Legacy property management systems commonly need interface modernization alongside integration with modern search and listing platforms." },
  { industry: "Hospitality", desc: "Legacy booking systems often need modernization to support real-time availability across modern booking channels." },
  { industry: "Professional Services", desc: "Legacy case or client management systems frequently need better integration with modern communication and document tools." },
  { industry: "Government-related business systems", desc: "Legacy administrative systems commonly carry significant institutional data and process complexity, making thorough assessment particularly important." },
];

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: "Custom software development", desc: "Applied to modernization with proper testing, code review, and structured process." },
  { icon: Layers, title: "Full-stack development", desc: "Spanning frontend, backend, database, and infrastructure." },
  { icon: Server, title: "Backend/API development", desc: "Creating the integration layer connecting legacy and modern components reliably." },
  { icon: Database, title: "Database development", desc: "For the data-layer work that's frequently the highest-risk part of modernization." },
  { icon: GitBranch, title: "Application architecture", desc: "Decisions grounded in your system's actual condition, not a default pattern preference." },
  { icon: Shield, title: "Security-focused development", desc: "Treating modernization as an opportunity to close accumulated security gaps." },
  { icon: CheckCircle2, title: "Testing", desc: "Including regression testing against the legacy system's actual prior behavior." },
  { icon: RefreshCw, title: "Maintenance", desc: "For the ongoing support a modernized system continues to need." },
];

export const costSection = {
  title: "How Much Does Legacy Software Modernization Cost?",
  intro: "There's no fixed price — cost depends entirely on the specific system and chosen strategy. Key factors include:",
  factors: [
    "Size of the legacy application and codebase complexity",
    "Programming language involved",
    "Database complexity and number of modules in scope",
    "Integrations the system needs to maintain or add",
    "Data migration complexity and security requirements",
    "UI/UX requirements if interface modernization is included",
    "Target architecture, testing scope, and infrastructure considerations",
    "The specific migration strategy chosen and overall project timeline",
  ],
  closing:
    "An accurate estimate normally requires a technical assessment of your specific system — we don't publish a generic price range, since it wouldn't meaningfully reflect the cost of your particular project.",
};

export const timelineSection = {
  title: "How Long Does Legacy Software Modernization Take?",
  intro: "Modernization timelines vary significantly based on:",
  factors: [
    "Application size and number of modules involved",
    "Volume of existing technical debt and database complexity",
    "Number of integrations the system maintains",
    "Migration strategy selected — rehost is typically fastest, rearchitect and rebuild typically take longest",
    "Testing requirements and your business's availability to support validation throughout the engagement",
  ],
  closing:
    "We avoid guaranteeing a fixed timeline without first understanding your specific system's condition and the strategy that fits it — realistic estimates follow from a proper technical assessment.",
};

export const finalCta = {
  headline: "Ready to Modernize Your Legacy Software?",
  intro:
    "If your current system is slowing your team down, creating security exposure, or struggling to connect with the tools your business actually needs today, the right starting point is an honest assessment of what you have — not a default push toward the most disruptive option available.",
  body: "The Runner Software Solutions can assess your existing application, identify realistic modernization opportunities, and build a practical roadmap toward a more maintainable, scalable software environment.",
  ctaText: "Contact The Runner Software Solutions",
  ctaHref: "/contact",
};

export const legacyFaqs = [
  { q: "What is legacy software modernization?", a: "Legacy software modernization is the process of improving, restructuring, migrating, re-engineering, or replacing outdated software components so a system can operate reliably with modern technologies, integrations, and business requirements, while preserving as much proven business logic and data as the situation calls for." },
  { q: "How do I know if my business software needs modernization?", a: "Common signals include increasingly difficult maintenance, security concerns from unsupported dependencies, degraded performance, difficulty integrating with modern tools like CRM or payment systems, an outdated interface that hurts productivity, scalability limitations constraining growth, and accumulated technical debt that's making every change more expensive." },
  { q: "What is the difference between legacy software modernization and software replacement?", a: "Modernization improves, restructures, or migrates an existing system while preserving as much valuable business logic and data as possible. Replacement retires the legacy system entirely in favor of a new product or custom application, appropriate when the existing system's architecture, technology, or data model is no longer a practical foundation to build on." },
  { q: "How much does legacy software modernization cost?", a: "Cost depends on application size, codebase and database complexity, number of modules and integrations, data migration scope, security requirements, and the specific modernization strategy chosen. There's no fixed universal price — an accurate estimate requires a technical assessment of your specific system." },
  { q: "How long does legacy software modernization take?", a: "Timeline depends on application size, technical debt, database complexity, integration count, and the modernization strategy selected — a rehost typically moves faster than a full rearchitecture or rebuild. We provide realistic timelines after a proper technical assessment rather than a generic estimate." },
  { q: "Can legacy software be modernized without losing existing data?", a: "Data preservation is a central focus of any modernization engagement, using data mapping, validation at every migration stage, thorough migration testing, and reliable rollback planning to manage risk carefully. We don't promise zero data loss as an absolute guarantee, but treating migration as a first-class engineering workstream is how that risk is properly managed." },
  { q: "Can you connect a legacy system with modern APIs and applications?", a: "Yes, building or modernizing an API and integration layer is one of the most common and highest-value parts of a modernization engagement, allowing a legacy system to connect reliably with modern web applications, mobile apps, CRM platforms, and other business systems without requiring a full rebuild." },
  { q: "What are the main legacy software modernization strategies?", a: "The six recognized strategies are rehost, replatform, refactor, rearchitect, rebuild, and replace. The right strategy depends on a proper assessment of your specific system — business criticality, architecture condition, technical debt, data complexity, and integration requirements." },
  { q: "Is it better to modernize a legacy application gradually or rebuild it?", a: "Gradual, incremental modernization is generally lower-risk and preserves business continuity better than a full rebuild, and is the right default when a proper assessment shows the underlying architecture is fundamentally sound. A full rebuild is justified specifically when the architecture itself is the limiting factor and incremental approaches genuinely can't resolve that." },
  { q: "How can I start a legacy software modernization project?", a: "The process starts with a discovery conversation about your business objectives and current system, followed by a technical assessment of the actual codebase, architecture, database, and integrations. From there, we recommend a specific modernization strategy and roadmap based on what that assessment reveals, rather than a generic proposal." },
];
