import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Layers,
  Shield,
  Zap,
  Code2,
  Users,
  TrendingUp,
  Lock,
  Database,
  TerminalSquare,
  Activity,
  RefreshCw,
  Cpu,
  BarChart3,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const saasDevelopmentSeo = {
  title: "SaaS Development Services | The Runner Software",
  description:
    "Custom SaaS development — multi-tenant architecture, subscription billing & scalable cloud platforms for startups and enterprises in the USA and Canada.",
  h1: "SaaS Development Services to Build Scalable Cloud Software Products",
  canonicalPath: "/services/emerging-technologies/saas-development",
  ogTitle: "SaaS Development Services | The Runner Software",
  ogDescription:
    "Custom SaaS development — multi-tenant architecture, subscription billing & scalable cloud platforms for startups and enterprises in the USA and Canada.",
  twitterTitle: "SaaS Development Services | The Runner Software",
  twitterDescription:
    "Custom SaaS development — multi-tenant architecture, subscription billing & scalable cloud platforms for startups and enterprises in the USA and Canada.",
};

export const saasHero = {
  subheading:
    "The Runner Software Solutions designs and builds custom SaaS products for startups launching a new idea and enterprises modernizing an existing platform — multi-tenant architecture, subscription billing, secure authentication, and the cloud infrastructure a real software product needs to scale.",
  valueProposition:
    "Whether you're validating a SaaS MVP before committing to a full build or architecting an enterprise platform with SSO, RBAC, and deep integrations, we build the complete engineering foundation a subscription software business runs on. Our SaaS development work covers product strategy, UX/UI design, multi-tenant backend architecture, subscription and billing systems, API development, third-party integrations, and the DevOps and monitoring infrastructure that keeps a SaaS product reliable after launch. We also build AI and machine learning capability into SaaS products where it genuinely improves the product, without treating every SaaS build as an AI project by default.",
  primaryCta: "Build Your SaaS Product",
  secondaryCta: "Talk to a SaaS Development Expert",
};

export const whatIsSaas = {
  definition:
    "SaaS development is the process of designing, building, deploying, and maintaining software delivered through the cloud, typically accessed on a subscription or recurring-access basis rather than installed and run on a customer's own infrastructure.",
  components: [
    "Cloud delivery — the application runs on infrastructure the provider manages, accessed by customers over the internet",
    "Subscription model — customers pay recurring fees for continued access, often across multiple pricing tiers",
    "Tenant management — supporting multiple customer organizations securely from shared or partially shared infrastructure",
    "Authentication and authorization — verifying user identity and controlling what each user and tenant can access",
    "Billing — managing recurring payments, plan changes, and the full subscription lifecycle",
    "APIs — enabling integration with other systems customers already use",
    "Integrations — connecting to CRM, ERP, payment, and other third-party systems",
    "Analytics — tracking usage, engagement, and subscription metrics",
    "Monitoring — ongoing visibility into system health and performance in production",
    "Scalability — architecture built to support growth in customers, users, and data volume without a costly rebuild",
  ],
  traditionalVsSaas:
    "Traditional software is typically installed and run on a customer's own hardware, licensed as a one-time or periodic purchase, with the customer responsible for hosting, updates, and infrastructure. SaaS software is hosted and maintained by the provider, delivered continuously over the internet, updated centrally without requiring customer action, and typically monetized through recurring subscription revenue. This shift changes not just the business model but the underlying technical architecture — SaaS products need multi-tenant data isolation, centralized update and deployment infrastructure, and subscription-aware application logic that traditional installed software generally doesn't require.",
};

export const saasServices = [
  { title: "Custom SaaS Development", desc: "We design SaaS products around your specific business model, target users, and workflows — not a generic SaaS template, but architecture built for your actual product requirements, user roles, and growth trajectory." },
  { title: "SaaS Product Development", desc: "We support the full product lifecycle from idea through iteration — product strategy, UX/UI design, technical architecture, MVP development, testing, deployment, and ongoing refinement based on real usage data." },
  { title: "SaaS MVP Development", desc: "We help founders and product teams validate a SaaS idea through a scoped, minimum viable product — built to test the core value proposition with real users before committing to a full platform build." },
  { title: "SaaS Application Development", desc: "We build the complete application layer of a SaaS product — the user-facing interface, business logic, and backend systems that make the product actually functional for its intended users." },
  { title: "Multi-Tenant SaaS Development", desc: "We design multi-tenant architecture appropriate to your security, scale, and customization requirements — one of the most consequential architectural decisions in any SaaS build." },
  { title: "Enterprise SaaS Development", desc: "We build SaaS platforms meeting enterprise requirements: SSO, granular role-based access control, audit logging, and the integration and governance capabilities enterprise buyers expect." },
  { title: "Cloud-Native SaaS Development", desc: "We build SaaS applications designed specifically for cloud infrastructure — leveraging managed services, containers, and autoscaling rather than treating the cloud as just a hosting location." },
  { title: "SaaS API Development", desc: "We build the REST (and, where appropriate, GraphQL) APIs that let your SaaS product integrate with customer systems, power mobile applications, and support partner and automation use cases." },
  { title: "SaaS Integration", desc: "We connect SaaS products to CRM, ERP, accounting, payment, and other third-party systems your customers already depend on." },
  { title: "SaaS Modernization", desc: "We help businesses running outdated SaaS architecture — legacy code, aging infrastructure, accumulated technical debt — modernize incrementally rather than defaulting to a full rebuild." },
  { title: "SaaS Migration", desc: "We support migration from legacy or on-premise software to a cloud-delivered SaaS model, including architecture assessment, data migration, and phased rollout planning." },
  { title: "SaaS UI/UX Development", desc: "We design product interfaces around real usability requirements — onboarding, dashboards, role-based views, and the navigation patterns that make a SaaS product genuinely usable." },
  { title: "SaaS Subscription & Billing Integration", desc: "We build subscription management and billing systems supporting your specific pricing model — free tiers, paid plans, trials, upgrades, downgrades, and usage-based billing where relevant." },
  { title: "SaaS Security", desc: "We build security into SaaS architecture from the start — tenant isolation, secure authentication, encryption, and the SaaS-specific risk considerations covered in depth below." },
  { title: "SaaS Analytics", desc: "We build the usage tracking and reporting infrastructure that lets you understand activation, retention, churn, and feature adoption." },
  { title: "SaaS Maintenance & Support", desc: "We provide ongoing maintenance covering security updates, performance monitoring, dependency management, and continued feature development after launch." },
];

export const customSaasDevelopment = {
  title: "Custom SaaS Development",
  factors: [
    "Business model — how your product actually generates revenue and what that means for the underlying architecture",
    "Target users — who will actually use the product and what their workflows look like",
    "Product requirements — the specific functionality your product needs to deliver real value",
    "Workflows — the actual processes your users follow, which the product needs to support",
    "User roles — the different types of users and permission levels your product needs to accommodate",
    "Subscription model — how pricing tiers, trials, and plan limits map onto the product's actual features",
    "Integrations — the third-party systems your customers need the product to connect with",
    "Security — the data protection and access control requirements appropriate to your product",
    "Scalability — the growth trajectory the architecture needs to support without requiring a rebuild",
  ],
  closing:
    "Custom SaaS development makes sense when your business model, user workflows, or integration requirements don't map cleanly onto existing SaaS platforms or no-code tools, or when long-term ownership of the codebase and the ability to differentiate on product capability matters more than speed to a generic starting point. That said, custom SaaS development isn't automatically the better choice for every situation — if an existing platform genuinely serves your specific business model well, building fully custom software adds unnecessary cost and complexity.",
};

export const saasProductDevelopment = {
  title: "SaaS Product Development",
  flow: "Idea → Product Strategy → UX/UI → Architecture → MVP → Development → Testing → Deployment → Analytics → Iteration",
  stages: [
    { title: "Idea", desc: "The initial concept and the problem it's meant to solve" },
    { title: "Product strategy", desc: "Clarifying who the product is for, what makes it valuable, and how it will be positioned and monetized" },
    { title: "UX/UI", desc: "Designing the actual user experience based on real user needs, not assumptions" },
    { title: "Architecture", desc: "Designing the technical foundation — multi-tenancy approach, data model, API structure" },
    { title: "MVP", desc: "Building the smallest version that genuinely tests the core value proposition" },
    { title: "Development", desc: "Building out the full product according to validated architecture and design" },
    { title: "Testing", desc: "Validating functionality, security, and performance before release" },
    { title: "Deployment", desc: "Releasing the product to production with appropriate monitoring" },
    { title: "Analytics", desc: "Instrumenting the product to track how it's actually used" },
    { title: "Iteration", desc: "Refining the product based on real usage data and user feedback" },
  ],
  considerations: [
    "Product-market fit — confirming the product genuinely solves a problem people will pay for",
    "User personas — clear definitions of who the product serves",
    "Feature prioritization — deciding what to build now versus later based on actual user and business value",
    "MVP scope — defining the smallest set of features that still delivers genuine value",
    "Product roadmap — a living plan for how the product evolves based on validated learning",
    "Technical architecture — decisions made early that are expensive to change later",
  ],
};

export const saasMvpDevelopment = {
  title: "SaaS MVP Development",
  intro: "An MVP should validate a business hypothesis, not simply contain as many features as possible. The purpose of a SaaS MVP is to test whether your core product assumption holds with real users, as cheaply and quickly as reasonably possible.",
  points: [
    "MVP strategy — identifying the single most important assumption to test",
    "Feature prioritization — ruthlessly separating what's essential from what can wait",
    "Minimum viable architecture — solid enough to support growth if the MVP succeeds, without over-investing in unvalidated scale",
    "Rapid validation — getting the MVP in front of real users as quickly as reasonably possible",
    "User feedback — building structured mechanisms to learn from actual usage",
    "Analytics — instrumenting the MVP from day one so usage data informs what to build next",
    "Iterative releases — treating the MVP as the start of an ongoing process, not a one-time deliverable",
  ],
  related: [
    "SaaS prototype — an even earlier-stage representation used to validate design direction before committing to development",
    "SaaS proof of concept — a technical validation confirming a specific approach is feasible",
    "SaaS startup development — the broader process of building a SaaS company's initial product, emphasizing speed, cost discipline, and validated learning",
  ],
};

export const multiTenantSaas = {
  title: "Multi-Tenant SaaS Development",
  definition:
    "Multi-tenancy is the architectural approach where a single instance of a software application serves multiple customer organizations (\"tenants\"), with each tenant's data and configuration kept appropriately isolated from other tenants, despite sharing underlying infrastructure.",
  rows: [
    { approach: "Shared database / shared schema", desc: "All tenants share the same database and tables, distinguished by a tenant ID column", isolation: "Lowest — relies on application-level enforcement", customization: "Limited", cost: "Highest efficiency", complexity: "Lowest to build, highest risk if isolation logic has a flaw" },
    { approach: "Shared database / separate schemas", desc: "All tenants share a database instance, but each has its own schema", isolation: "Moderate — database-level schema separation", customization: "Moderate", cost: "Moderate", complexity: "Moderate operational overhead" },
    { approach: "Separate database per tenant", desc: "Each tenant has an entirely separate database", isolation: "Highest — full data isolation at infrastructure level", customization: "Highest", cost: "Lowest efficiency at scale", complexity: "Highest operational overhead" },
  ],
  considerations: [
    "Tenant isolation — the degree to which one tenant's data is protected from another tenant",
    "Tenant-specific configuration — how much customization each tenant can have without separate codebases",
    "Authorization — ensuring every request is correctly scoped to the right tenant, every time",
    "Data access — query and application logic patterns that enforce tenant boundaries consistently",
    "Scalability — how each approach behaves as tenant count and per-tenant data volume grow",
    "Security — the shared-schema approach requires rigorous, consistently applied isolation logic",
    "Customization — how much tenant-specific behavior the architecture needs to support",
  ],
  closing:
    "A shared-schema approach is often the right choice for a product serving many small tenants where cost efficiency matters most. A separate-database-per-tenant approach tends to make more sense for enterprise-focused products where tenants demand strong data isolation guarantees.",
};

export const saasArchitecture = {
  title: "SaaS Architecture",
  flow: "User → Web/Mobile Client → Authentication → API Gateway/Backend → Application Services → Tenant Management → Business Logic → Database → External APIs → Cloud Infrastructure → Monitoring & Analytics",
  components: [
    "Frontend — the web (and often mobile) client users actually interact with",
    "Backend — the application logic handling requests, business rules, and data access",
    "APIs — the interfaces connecting frontend, backend, and external integrations",
    "Databases — where tenant data, user data, and application state are stored",
    "Authentication and authorization — verifying identity and enforcing tenant-scoped, role-based access",
    "Caching — reducing redundant computation and database load for frequently accessed data",
    "Queues — managing asynchronous work so time-consuming tasks don't block user-facing requests",
    "Background jobs — processing tasks like report generation, billing events, or notifications",
    "Storage — handling file uploads, documents, and other unstructured content",
    "Monitoring — visibility into system health, performance, and errors across the full stack",
  ],
  closing: "The specific architecture varies meaningfully depending on tenant count, business logic complexity, integration requirements, and security needs — we design architecture around a given product's actual requirements rather than applying the same pattern to every SaaS build.",
};

export const authSection = {
  title: "SaaS Authentication & Authorization",
  intro: "Authentication and authorization in a multi-tenant SaaS product carry more complexity than a typical single-tenant application:",
  features: [
    "User registration and login — scoped appropriately to tenant boundaries",
    "Password recovery — secure account recovery flows",
    "Multi-factor authentication (MFA), where appropriate",
    "OAuth — enabling users to authenticate via existing accounts (Google, Microsoft, etc.)",
    "Single sign-on (SSO) — allowing enterprise customers to authenticate through their own identity provider",
    "Role-based access control (RBAC) — defining what different user roles within a tenant can see and do",
    "Permissions — granular control over specific actions or data access beyond broad roles",
    "Tenant-level authorization — ensuring every request is correctly scoped to the requesting user's tenant",
  ],
  enterprise: [
    "SSO — often a hard requirement for enterprise buyers with existing identity infrastructure",
    "RBAC — enterprise customers frequently need more granular role structures",
    "Audit logs — traceable records of who did what, when",
    "Session management — appropriate session timeout, concurrent session handling, and secure session invalidation",
  ],
  disclaimer: "We don't claim compliance with specific frameworks (SOC 2, HIPAA, ISO 27001, or others) unless independently verified for a given engagement.",
};

export const subscriptionSection = {
  title: "SaaS Subscription Management",
  intro: "Subscription architecture is core to how a SaaS business actually generates revenue, and needs to be designed deliberately rather than bolted on after the product is built:",
  features: [
    "Free plans — offering a no-cost tier, often used for lead generation or product-led growth",
    "Paid plans — the core revenue-generating subscription tiers",
    "Monthly and annual subscriptions — supporting different billing cadences",
    "Trials — time-limited or feature-limited access before a paid commitment",
    "Upgrades and downgrades — letting customers move between plan tiers with appropriate prorated billing",
    "Cancellation — a clear cancellation flow with appropriate data retention and access implications",
    "Plan limits — enforcing usage or feature limits tied to a customer's specific plan",
    "Usage-based billing, where appropriate — charging based on actual consumption rather than a flat subscription fee",
  ],
  closing: "Subscription logic touches nearly every part of a SaaS application — feature access, UI state, notifications, and billing all need to stay consistent with a customer's actual current plan.",
};

export const billingSection = {
  title: "SaaS Billing Integration",
  intro: "Billing integration connects your subscription logic to actual payment processing and financial record-keeping:",
  features: [
    "Subscription billing — automatically charging customers according to their plan and billing cycle",
    "Invoices — generating and providing access to billing records",
    "Payment status handling — correctly reflecting successful, pending, and failed payment states",
    "Recurring payments — reliably processing repeat charges on the appropriate schedule",
    "Plan management — connecting plan changes in the application to corresponding billing adjustments",
    "Billing history — giving customers visibility into their past charges and invoices",
    "Webhooks — receiving and processing asynchronous billing events from the payment provider",
    "Failed payments — handling retry logic and appropriate customer communication when a payment fails",
    "Subscription lifecycle — managing the full arc from trial through active subscription to cancellation",
  ],
  closing: "Billing architecture depends on your business model and payment provider — usage-based billing requires meaningfully different architecture than flat-rate subscriptions.",
};

export const apiSection = {
  title: "SaaS API Development",
  intro: "APIs are often core to a SaaS product's value, not just a technical implementation detail:",
  features: [
    "REST APIs — the standard approach for most SaaS integration needs",
    "GraphQL, where appropriate — useful when API consumers need flexible, client-driven queries",
    "Webhooks — enabling your SaaS product to notify external systems of events in real time",
    "API authentication — securing API access through appropriate mechanisms (API keys, OAuth, tokens)",
    "Rate limiting — protecting the platform from excessive or abusive API usage",
    "API versioning — managing API changes over time without breaking existing integrations",
    "Documentation — clear, accurate API documentation for customers and partners",
    "Integrations — the actual connections other systems build against your API",
  ],
  enables: [
    "Third-party integrations — letting customers connect your product to the other tools they use",
    "Mobile applications — powering a companion mobile app from the same backend",
    "Partner systems — enabling formal partner integrations and marketplace ecosystems",
    "Automation — letting customers build their own automated workflows against your platform",
    "Internal services — supporting your own product's internal architecture as it grows",
  ],
};

export const integrationsSection = {
  title: "SaaS Integrations",
  intro: "SaaS products deliver more value when they connect to the systems customers already rely on:",
  systems: [
    "CRM systems — syncing customer and lead data between your SaaS product and sales tools",
    "ERP systems — connecting to operational and financial systems",
    "Accounting systems — reducing manual reconciliation of transactions and billing data",
    "Payment systems — the billing integration covered above",
    "Email platforms — supporting transactional and marketing email workflows",
    "Analytics tools — feeding usage data into the broader analytics stack customers may already use",
    "Communication tools — integrating with platforms like Slack for notifications and workflow integration",
    "Business databases — connecting to customers' own data sources where relevant",
    "Third-party APIs — the general case of connecting to whatever external service a specific integration requires",
  ],
  technical: [
    "API integration — building against the third-party system's API",
    "Webhooks — supporting real-time, event-driven data flow in both directions",
    "OAuth — enabling secure, customer-authorized connections to their own third-party accounts",
    "Authentication — securing every integration connection appropriately",
    "Data synchronization — keeping connected systems consistent over time",
    "Error handling — gracefully managing integration failures without silent data loss",
  ],
};

export const cloudSection = {
  title: "SaaS Cloud Development",
  intro: "Cloud-native SaaS architecture is designed specifically to take advantage of cloud infrastructure capabilities:",
  features: [
    "Cloud infrastructure — computing resources provisioned and managed through a cloud provider",
    "Containers — packaging application components consistently for reliable deployment",
    "Managed databases — using a cloud provider's managed database services to reduce operational overhead",
    "Object storage — cloud-based storage appropriate for files, media, and unstructured content",
    "CDN (Content Delivery Network) — distributing static assets closer to users geographically",
    "Load balancing — distributing incoming traffic across multiple application instances",
    "Autoscaling — automatically adjusting infrastructure capacity based on actual demand",
    "Monitoring — cloud-native observability tooling appropriate to a distributed architecture",
  ],
  providers: "AWS, Azure, and Google Cloud all provide viable infrastructure for SaaS applications. Technology selection depends on project requirements, existing organizational relationships, and cost considerations.",
  cloudLink: {
    before: "For businesses evaluating cloud architecture more broadly, our dedicated ",
    text: "Cloud Solutions",
    href: etPath("cloud-solutions"),
    after: " page covers cloud architecture, migration, and infrastructure decisions in more depth.",
  },
};

export const scalabilitySection = {
  title: "SaaS Scalability",
  intro: "SaaS applications need to handle growth in customers, users, and data volume without requiring a costly architectural rebuild at each growth stage:",
  techniques: [
    "Horizontal scaling — adding more instances of an application to handle increased load",
    "Vertical scaling — increasing the resources of existing infrastructure, useful in some contexts but with practical limits",
    "Caching — reducing redundant computation and database queries for frequently accessed data",
    "Database optimization — appropriate indexing and query design as data volume grows",
    "Load balancing — distributing traffic across available application instances",
    "Asynchronous processing — handling time-consuming operations outside the immediate request/response cycle",
    "Queues — managing background work reliably, particularly important as task volume grows",
    "CDN — offloading static asset delivery from application servers",
    "Database indexing — maintaining query performance as tables grow",
    "Read replicas, where appropriate — separate database instances handling read traffic",
    "Autoscaling — automatically adjusting capacity in response to actual traffic patterns",
  ],
  closing: "We design scalability incrementally, appropriate to a product's actual current and near-term projected usage, rather than building enterprise-scale infrastructure for a pre-launch MVP.",
};

export const saasSecurity = {
  title: "SaaS Security",
  intro: "Security requires deliberate attention throughout SaaS architecture, not just at the application's edges:",
  standard: [
    "Authentication and authorization — foundational to SaaS security generally",
    "Tenant isolation — ensuring multi-tenant architecture genuinely prevents any cross-tenant data exposure",
    "Encryption — protecting data both in transit and at rest",
    "Secure APIs — authenticated, rate-limited, and properly validated API endpoints",
    "Input validation — preventing injection and other input-based attacks across every entry point",
    "Output validation — ensuring data returned to clients doesn't inadvertently expose more than intended",
    "Rate limiting — protecting against abuse and certain classes of denial-of-service risk",
    "Secure sessions — preventing session hijacking or fixation",
    "Secrets management — properly securing API keys, database credentials, and other sensitive configuration",
    "Logging — maintaining traceable records supporting both debugging and security investigation",
    "Monitoring — ongoing visibility into unusual access patterns or potential security incidents",
    "Backups — regular, tested backup procedures",
    "Disaster recovery — a defined plan for restoring service and data after a significant incident",
  ],
  saasRisks: [
    "Cross-tenant data access — a flaw in isolation logic that allows one tenant to see another's data",
    "Insecure APIs — API security gaps can expose significant surface area in API-first SaaS products",
    "Account takeover — unauthorized access to a legitimate user's account",
    "Privilege escalation — a user gaining access or capability beyond their assigned role",
    "Data leakage — sensitive data becoming accessible where it shouldn't be",
  ],
  disclaimer: "We do not claim compliance with HIPAA, SOC 2, GDPR, ISO 27001, PCI DSS, or other regulatory frameworks unless specifically verified for a given engagement.",
};

export const dataArchitecture = {
  title: "SaaS Data Architecture",
  intro: "Data architecture decisions directly affect a SaaS product's performance, scalability, and multi-tenant isolation:",
  components: [
    "Relational databases — appropriate for structured data with clear relationships and strong consistency guarantees",
    "NoSQL databases — appropriate where data structure is more flexible or variable",
    "Caching — reducing database load for frequently accessed, less frequently changing data",
    "Object storage — appropriate for files, media, and unstructured content",
    "Data models — how tenant, user, and application data are structured, shaped by the multi-tenancy approach",
    "Tenant data — patterns for storing and querying data scoped to individual tenants",
    "Backups — appropriate to the data's sensitivity and the business impact of potential data loss",
  ],
  technologies: "PostgreSQL and MySQL for relational, structured application data; MongoDB where a more flexible, document-based data model fits better; and Redis for caching and fast, in-memory data access patterns like session storage or rate limiting counters.",
};

export const analyticsSection = {
  title: "SaaS Analytics",
  intro: "Analytics infrastructure lets you understand how your product is actually being used — essential both for product decisions and for understanding the health of the underlying business:",
  tracking: [
    "User engagement — how actively and in what ways users interact with the product",
    "Activation — whether new users successfully reach the point where they experience the product's core value",
    "Retention — whether users continue using the product over time",
    "Churn — the rate at which customers cancel or stop using the product",
    "Conversion — how effectively trial or free users convert to paying customers",
    "Subscription metrics — tracking the health of the subscription base over time",
    "Feature usage — which specific features are actually being used, informing prioritization decisions",
    "Customer behavior — broader usage patterns that inform product and UX decisions",
  ],
  metrics: [
    "MRR (Monthly Recurring Revenue) — predictable monthly subscription revenue",
    "ARR (Annual Recurring Revenue) — MRR expressed on an annualized basis",
    "Churn rate — the rate at which customers cancel over a given period",
    "Customer acquisition cost (CAC) — what it costs to acquire a new paying customer",
    "Lifetime value (LTV) — the total revenue expected from a customer over their relationship with the product",
    "Activation rate — the share of new users who reach meaningful product engagement",
    "Retention — the share of customers who continue using the product over defined time periods",
    "Conversion rate — the share of trial or free users who become paying customers",
  ],
  closing: "We build the infrastructure to track these metrics accurately for your specific product — we don't cite generic industry benchmark figures as if they apply universally.",
};

export const adminDashboard = {
  title: "SaaS Admin Dashboard",
  intro: "Most SaaS products need internal administrative tooling separate from the customer-facing product:",
  features: [
    "User management — viewing, managing, and troubleshooting individual user accounts",
    "Tenant management — administering customer organizations at the tenant level",
    "Subscription management — viewing and managing customer subscription status",
    "Billing — administrative visibility into billing status and history across customers",
    "Roles and permissions — managing internal team access to administrative functions",
    "Analytics and reports — internal visibility into product and business metrics",
    "System settings — configuration that affects platform-wide behavior",
    "Audit logs — administrative-level visibility into system activity",
    "Support tools — functionality that helps your internal support team assist customers effectively",
  ],
};

export const userDashboard = {
  title: "SaaS User Dashboard",
  intro: "The customer-facing side of a SaaS product needs its own deliberate design, distinct from internal admin tooling:",
  features: [
    "Profile — user account information and personal settings",
    "Account settings — broader account-level configuration",
    "Subscription — visibility into current plan, usage relative to plan limits, and options to change plans",
    "Billing — access to invoices, payment methods, and billing history",
    "Usage — visibility into how the customer is actually using the product relative to their plan",
    "Notifications — in-product and external notification preferences and history",
    "Reports — customer-facing analytics or reporting relevant to their use of the product",
    "Workflows — the core functional interfaces through which customers accomplish tasks",
    "Team management — for products supporting multiple users per customer account",
  ],
};

export const teamManagement = {
  title: "SaaS Team & Organization Management",
  intro: "Products serving business customers typically need organization-level structure beyond simple individual user accounts:",
  concepts: [
    "Organizations — the top-level entity representing a customer account, potentially containing multiple users",
    "Teams — sub-groupings within an organization, relevant for larger customer accounts",
    "Users — individual people within an organization, each with their own credentials and role",
    "Roles — defined sets of permissions assigned to users within an organization",
    "Permissions — granular access control, sometimes beyond what a simple role captures",
    "Invitations — the flow for adding new users to an existing organization",
    "Access control — enforcing that users can only access what their role and organization membership permit",
    "Tenant-level configuration — settings that apply across an entire organization rather than to individual users",
  ],
  closing: "A B2B SaaS product usually needs to model organizations as first-class entities, with multiple users belonging to one organization, internal role hierarchies, and administrative capability for organization admins to manage their own team.",
};

export const automationSection = {
  title: "SaaS Automation",
  intro: "SaaS platforms can automate significant portions of both user-facing and internal operational workflows:",
  useCases: [
    "Workflows — automating multi-step processes within the product based on defined triggers and conditions",
    "Notifications — automatically alerting users to relevant events",
    "Onboarding — guiding new users through initial setup and key actions automatically",
    "Billing events — automatically handling recurring charges, plan changes, and payment failure responses",
    "Reports — automatically generating and delivering scheduled reports",
    "Approvals — routing approval workflows automatically based on defined business rules",
    "Data synchronization — automatically keeping connected systems consistent",
    "Scheduled tasks — running recurring background processes on a defined schedule",
  ],
  technical: [
    "Background jobs — processing work outside the immediate request/response cycle",
    "Queues — reliably managing asynchronous task execution",
    "Webhooks — triggering automation in response to real-time events",
    "Event-driven architecture — designing the system so specific events automatically trigger appropriate downstream actions",
  ],
};

export const aiIntegrationSection = {
  title: "SaaS AI Integration",
  intro: "AI capability can meaningfully enhance a SaaS product when applied to a genuine user problem — but it's an optional capability layered onto solid SaaS architecture, not a requirement:",
  examples: [
    "AI assistants — embedded conversational or task-assistance features within the product",
    "Recommendations — surfacing relevant content, features, or actions based on usage patterns",
    "Predictive analytics — forecasting or risk-flagging features built into product dashboards",
    "Document processing — AI-assisted extraction or summarization of documents customers upload",
    "Automation — AI-assisted automation of tasks that previously required manual judgment",
    "Intelligent search — search that understands meaning and intent, not just keyword matching",
    "Personalization — tailoring the product experience based on individual usage patterns",
  ],
  aiLink: {
    before: "For businesses specifically building AI capability into a SaaS product, our dedicated ",
    text: "AI Development Services",
    href: etPath("ai-development"),
    after: " page covers the full range of AI engineering in depth. AI is a capability we build into SaaS products when it genuinely serves the product's users, not a default addition to every SaaS build.",
  },
};

export const mlIntegrationSection = {
  title: "SaaS + Machine Learning",
  intro: "Machine learning specifically — as distinct from generative AI — can enhance SaaS products in several well-established ways:",
  useCases: [
    "Recommendation engines — predicting what content, features, or actions are relevant to a specific user",
    "Churn prediction — identifying customers at elevated risk of canceling before they actually do",
    "Forecasting — predicting future usage, revenue, or operational metrics based on historical patterns",
    "Anomaly detection — flagging unusual usage patterns that might indicate a problem",
    "Customer segmentation — grouping customers by behavioral or usage patterns",
    "Predictive analytics — broader forecasting and risk-flagging capability embedded directly into product dashboards",
  ],
  mlLink: {
    before: "For SaaS products where predictive modeling is a core differentiating capability, our dedicated ",
    text: "Machine Learning Solutions",
    href: etPath("machine-learning-solutions"),
    after: " page covers the technical depth of building these models.",
  },
};

export const uiUxSection = {
  title: "SaaS UI/UX",
  intro: "SaaS interface design has requirements distinct from general website design — the interface is a working tool users return to repeatedly:",
  requirements: [
    "Onboarding — helping new users reach meaningful value quickly",
    "Dashboards — the core, frequently revisited interface surfacing the most relevant information and actions",
    "Navigation — information architecture that stays usable as the product grows in feature complexity",
    "Responsive interfaces — ensuring the product works well across the range of devices users actually access it from",
    "Role-based interfaces — presenting different views or capabilities depending on a user's role",
    "Empty states — thoughtfully designed states for when a user has no data yet",
    "Notifications — in-product alerts designed to be useful without becoming noise",
    "Search — helping users find what they need quickly as the product's data and functionality grow",
    "Accessibility — ensuring the product is usable by people with visual, motor, or cognitive impairments",
    "Usability — a product that's genuinely efficient and pleasant to use repeatedly",
  ],
  closing: "SaaS UX design centers on product usability for repeated, task-oriented use — meaningfully different from general website design optimized for one-time visits and conversion actions.",
};

export const testingSection = {
  title: "SaaS Testing",
  intro: "Thorough testing matters particularly for SaaS products given multi-tenant complexity and the expectation of continuous, reliable availability:",
  types: [
    "Functional testing — verifying core features work as intended",
    "Integration testing — confirming the product works correctly with connected third-party systems",
    "API testing — validating API endpoints independent of the frontend",
    "Security testing — reviewing authentication, authorization, and tenant isolation specifically",
    "Performance testing — validating the product performs acceptably under realistic usage conditions",
    "Load testing — validating the product's behavior under high concurrent usage",
    "Regression testing — ensuring new changes don't break existing functionality",
    "Cross-browser testing — verifying consistent behavior across the browsers your users actually use",
    "User acceptance testing — validating that real users can actually accomplish their goals",
  ],
  multiTenantNote: "Testing multi-tenant behavior specifically matters because tenant isolation failures are a distinct and serious risk category — testing needs to explicitly verify that one tenant genuinely cannot access another tenant's data under any tested condition.",
};

export const devopsSection = {
  title: "SaaS DevOps & CI/CD",
  intro: "Reliable, frequent SaaS releases depend on disciplined DevOps practices:",
  practices: [
    "Version control — the foundation for tracking and coordinating code changes across a development team",
    "Automated builds — consistently and reliably compiling and packaging the application",
    "Automated testing — running test suites automatically as part of the deployment pipeline",
    "Deployment pipelines — automating the process of moving code from development through to production",
    "Staging — a production-equivalent environment for final validation before release",
    "Production — the live environment customers actually use",
    "Containers — packaging application components consistently for reliable deployment",
    "Infrastructure — provisioning and managing underlying compute, storage, and networking resources",
    "Monitoring — visibility into deployment success and post-deployment system health",
    "Rollback — the ability to quickly revert a problematic deployment",
  ],
  closing: "CI/CD supports frequent and controlled SaaS releases because it removes the manual, error-prone steps that make frequent deployment risky — essential for a SaaS product expected to improve continuously without significant downtime.",
};

export const monitoringSection = {
  title: "SaaS Monitoring",
  intro: "Production SaaS applications require continuous monitoring because issues that go unnoticed directly affect paying customers in real time:",
  areas: [
    "Application monitoring — tracking application-level health, errors, and performance",
    "Infrastructure monitoring — tracking the health of underlying servers, containers, and cloud resources",
    "API performance — monitoring response times and error rates for API endpoints",
    "Error tracking — capturing and surfacing application errors so they can be diagnosed and fixed quickly",
    "Database performance — monitoring query performance and database health as data volume grows",
    "Uptime — tracking overall system availability",
    "Logs — centralized, searchable logging supporting debugging and incident investigation",
    "Alerts — automated notifications when metrics cross thresholds indicating a problem",
  ],
  closing: "Unlike software a customer installs and troubleshoots independently, a SaaS product's reliability is directly and continuously the provider's responsibility — making early detection through monitoring meaningfully more valuable than in traditional software distribution models.",
};

export const migrationSection = {
  title: "SaaS Migration & Modernization",
  intro: "Businesses running legacy software or outdated SaaS architecture face specific technical and business pressure to modernize:",
  sources: [
    "Legacy software — older applications not originally built as SaaS, requiring architectural rework",
    "Desktop applications — software originally built for local installation, requiring a substantial architecture shift",
    "Monolithic systems — applications with tightly coupled architecture that has become difficult to maintain, scale, or extend",
    "Outdated SaaS architecture — existing SaaS products built on aging technology or accumulated technical debt",
  ],
  approach: [
    "Architecture assessment — understanding the existing system's structure, dependencies, and constraints",
    "Data migration — carefully planning how existing data moves into the new architecture",
    "API development — building the API layer needed to support a modern, potentially multi-client architecture",
    "Cloud migration — moving infrastructure to appropriate cloud services",
    "Testing — validating the migrated or modernized system thoroughly before full cutover",
    "Phased rollout — moving customers to new architecture incrementally where feasible",
  ],
  closing: "In many cases, targeted modernization of specific architectural components resolves the actual pain points more efficiently than a full rebuild. A full rewrite makes sense when the existing architecture fundamentally can't support current or near-term requirements, but that determination should follow an honest technical assessment.",
};

export const enterpriseSaas = {
  title: "Enterprise SaaS Development",
  intro: "Enterprise SaaS customers have distinct requirements that shape both product and sales considerations:",
  requirements: [
    "Multi-tenancy — enterprise-grade tenant isolation, often with stronger guarantees than smaller-customer-focused products",
    "SSO — frequently a hard requirement for enterprise procurement",
    "RBAC — enterprise customers typically need more granular, customizable role structures",
    "Audit logs — detailed, exportable activity records, often required for the enterprise customer's own compliance obligations",
    "Integrations — enterprise customers often expect integration with a broader, more specific set of existing enterprise systems",
    "Scalability — architecture that reliably handles significantly larger usage volume",
    "Security — meeting the more rigorous security review enterprise procurement processes typically involve",
    "Analytics — often including enterprise-specific reporting requirements",
    "Governance — administrative controls that let enterprise IT teams manage the product consistently with their own internal policies",
    "Enterprise workflows — supporting the more complex approval chains and organizational structures common in larger organizations",
  ],
  audience: "Enterprise SaaS development is relevant for CIOs, CTOs, enterprise product teams, and technology leaders evaluating whether to build enterprise-grade capability into an existing product or architect it in from the start of a new build.",
};

export const industryUseCases = [
  { industry: "Healthcare", desc: "Practice management platforms, appointment scheduling systems, workflow management tools, and operational analytics" },
  { industry: "Finance", desc: "Client portals, reporting dashboards, and workflow automation tools, with security appropriate to financial data sensitivity" },
  { industry: "Ecommerce", desc: "Inventory management software, order management systems, analytics platforms, and customer engagement tools" },
  { industry: "Education", desc: "Learning management platforms, student information systems, and administrative workflow tools" },
  { industry: "Real Estate", desc: "Property management platforms, lead management systems, and transaction workflow tools" },
  { industry: "Logistics", desc: "Fleet management software, shipment tracking systems, and operations dashboards" },
  { industry: "Manufacturing", desc: "Production tracking, inventory management, and operational reporting platforms" },
  { industry: "Retail", desc: "Inventory and order management systems, customer analytics platforms, and loyalty program software" },
  { industry: "Professional Services", desc: "Client and project management platforms, billing and time-tracking tools, and reporting dashboards" },
  { industry: "Travel", desc: "Booking management platforms, itinerary tools, and operational dashboards" },
  { industry: "SaaS / Technology", desc: "Internal tools that become customer-facing products, and companion products extending an existing platform's capability" },
];

export const startupSection = {
  title: "SaaS Development for Startups",
  intro: "Startups building a SaaS product face a distinct tradeoff between technical ambition and the discipline of validating demand before over-investing:",
  points: [
    "Idea validation — testing whether the core problem and proposed solution genuinely resonate before building extensively",
    "MVP — building the smallest product that tests the core value proposition",
    "Product-market fit — the ongoing process of confirming genuine demand, which continues well past initial launch",
    "Lean development — building efficiently, avoiding premature investment in scale or features not yet validated as necessary",
    "Scalable architecture — building technical foundations that can grow with the product without requiring a full rebuild if it succeeds",
    "Analytics — instrumenting the product from day one so real usage data, not assumptions, informs what to build next",
    "User feedback — building structured mechanisms to learn from actual early users",
    "Product roadmap — a living plan that evolves based on validated learning rather than a fixed initial specification",
  ],
  productDevLink: {
    before: "For startups whose SaaS idea is part of a larger product vision, our ",
    text: "Software Product Development",
    href: "/services/software-development/software-product-development",
    after: " team can support the broader product engineering roadmap alongside the initial SaaS build.",
  },
  closing: "Startups can avoid overengineering while preserving a sensible path to scale by making foundational architecture decisions thoughtfully enough that early success doesn't require a costly rebuild, without building enterprise-scale infrastructure prematurely.",
};

export const enterpriseSection = {
  title: "SaaS Development for Enterprises",
  intro: "Enterprise SaaS initiatives — whether building a new internal or customer-facing platform, or modernizing an existing one — involve distinct considerations:",
  points: [
    "Enterprise integrations — connecting to the specific, often numerous systems large organizations already run on",
    "Security — meeting the more rigorous security expectations and review processes typical of enterprise deployments",
    "SSO and RBAC — foundational requirements for enterprise identity and access management",
    "Scalability — architecture proven to handle enterprise-scale usage reliably",
    "Auditability — detailed, traceable records supporting enterprise governance and compliance needs",
    "Custom workflows — supporting the more complex approval chains and processes common in larger organizations",
    "Data migration — often a significant undertaking when modernizing existing enterprise systems",
    "Governance — administrative structures that let enterprise IT teams manage the product consistently with internal policy",
  ],
};

export const usaSection = {
  title: "SaaS Development for USA Businesses",
  body: "We work with businesses across the United States building custom SaaS products, including organizations based in New York, California, Texas, Washington, Massachusetts, Florida, and Illinois, among other states. Whether you're a startup in California validating a SaaS MVP, an enterprise on the East Coast modernizing a legacy platform into a true multi-tenant SaaS product, or a mid-market business in Texas building a vertical SaaS product for your industry, we scope SaaS architecture around your specific business model and growth trajectory. As a SaaS development company serving the USA, our team works remotely with distributed stakeholders throughout discovery, development, and ongoing support.",
};

export const canadaSection = {
  title: "SaaS Development for Canadian Businesses",
  body: "We also support Canadian businesses building custom SaaS products, including companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, and Edmonton. Canadian SaaS projects sometimes involve bilingual product requirements — particularly for platforms serving both English and French-speaking users — which we factor into UI design and content architecture where relevant. As with our US engagements, Canadian projects are handled remotely across discovery, development, and post-launch support.",
};

export const saasCost = {
  title: "SaaS Development Cost",
  intro: "SaaS development cost depends primarily on product complexity, multi-tenancy requirements, and the depth of integrations and security requirements — not a single flat rate. Key cost drivers include:",
  drivers: [
    "Overall product complexity and number of distinct features",
    "Number of expected users and tenants, and how that shapes architecture requirements",
    "Multi-tenancy architecture — shared-schema approaches are generally less costly to build initially than separate-database-per-tenant approaches",
    "Integration scope and complexity",
    "Authentication requirements, including whether SSO is needed",
    "Subscription and billing management complexity",
    "UI/UX complexity, including admin and customer-facing dashboard design",
    "Admin dashboard scope and functionality",
    "Security requirements appropriate to data sensitivity",
    "Cloud infrastructure requirements",
    "Analytics and reporting scope",
    "AI/ML requirements, where relevant to the product",
  ],
  tiers: [
    "SaaS Prototype — a lower-fidelity representation used to validate direction, typically the smallest investment",
    "SaaS MVP — a functional minimum product testing core value proposition, moderate investment",
    "Growth-Stage SaaS — a more complete product with broader feature coverage, integrations, and refined UX, larger investment",
    "Enterprise SaaS Platform — a product meeting enterprise security, integration, and governance requirements, the largest investment",
  ],
  closing: "These are approximate industry patterns rather than The Runner Software Solutions pricing — actual cost depends entirely on your specific scope, confirmed through discovery.",
};

export const saasTimeline = {
  title: "SaaS Development Timeline",
  intro: "Timeline depends on several factors specific to the product's scope:",
  factors: [
    "Product scope — the overall breadth of functionality being built",
    "Number of features — more features generally means more development and testing time",
    "Integrations — the number and complexity of third-party connections",
    "Architecture — multi-tenancy approach and overall technical complexity",
    "UI/UX — the complexity and polish level of the interface design",
    "Security — the depth of security review and implementation required",
    "Testing — the scope of testing needed, particularly for multi-tenant behavior",
    "Migration — whether the project involves migrating existing data or systems",
  ],
  stages: [
    "Prototype — typically the shortest timeline, focused on validating direction rather than building production functionality",
    "MVP — a longer timeline than a prototype, since it needs to be genuinely functional for real users",
    "Production SaaS — additional time for full feature coverage, integrations, and thorough testing",
    "Enterprise SaaS — generally the longest timeline given security review, SSO/RBAC implementation, and integration complexity",
  ],
  closing: "We don't guarantee fixed timelines upfront — a realistic timeline is confirmed after your specific product requirements are defined during discovery.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Cloud, title: "Full-stack SaaS engineering", desc: "The ability to build the complete product, from frontend interface through backend architecture and infrastructure" },
  { icon: Code2, title: "Custom software development", desc: "Products built around your specific business model and users, not a generic SaaS template" },
  { icon: TrendingUp, title: "Scalable architecture", desc: "Systems designed to grow with your user base and data volume" },
  { icon: Layers, title: "Multi-tenant systems", desc: "Genuine expertise in the architectural decisions and isolation practices multi-tenancy requires" },
  { icon: Zap, title: "API development", desc: "Building APIs that support integrations, mobile clients, and partner ecosystems" },
  { icon: Cpu, title: "Cloud deployment", desc: "Experience with cloud-native architecture across major providers" },
  { icon: Lock, title: "Secure authentication", desc: "Including SSO and RBAC implementation for enterprise-ready products" },
  { icon: BarChart3, title: "Subscription architecture", desc: "Billing and subscription systems built for your specific pricing model" },
  { icon: TerminalSquare, title: "Third-party integrations", desc: "Connecting your product to the systems your customers already depend on" },
  { icon: Users, title: "Dashboards", desc: "Both customer-facing and internal admin tooling designed for genuine usability" },
  { icon: Activity, title: "Analytics", desc: "The infrastructure to actually understand how your product is being used" },
  { icon: RefreshCw, title: "Long-term maintenance", desc: "Available for ongoing support, monitoring, and feature development after launch" },
];

export const saasFaqs = [
  { q: "What is SaaS development?", a: "SaaS development is the process of designing, building, deploying, and maintaining software delivered through the cloud on a subscription or recurring-access basis, rather than installed on a customer's own infrastructure. It involves multi-tenant architecture, authentication and authorization, subscription and billing systems, APIs, integrations, analytics, and scalable cloud infrastructure — the full technical foundation a modern software-as-a-service product runs on." },
  { q: "What does a SaaS development company do?", a: "A SaaS development company designs, builds, and maintains cloud software products, covering product strategy, UX/UI design, multi-tenant backend architecture, subscription and billing integration, API development, third-party integrations, security, and ongoing maintenance. Scope ranges from an early MVP validating a new idea to a full enterprise SaaS platform with SSO, RBAC, and extensive integrations." },
  { q: "What are SaaS development services?", a: "SaaS development services cover the full range of work involved in building a cloud software product — custom SaaS development, MVP development, multi-tenant architecture design, API and integration development, subscription and billing systems, security implementation, analytics infrastructure, and ongoing maintenance and modernization support after launch." },
  { q: "How much does SaaS development cost?", a: "SaaS development cost depends on product complexity, multi-tenancy architecture, number of integrations, authentication requirements including SSO, and UI/UX scope. A prototype or MVP typically costs less than a growth-stage product, which costs less than an enterprise SaaS platform with extensive security and integration requirements. These are general industry patterns rather than fixed pricing — an accurate estimate requires discovery." },
  { q: "How long does it take to build a SaaS application?", a: "Timeline depends on product scope, feature count, integration complexity, and architecture requirements. A prototype has the shortest timeline, an MVP takes longer to reach genuine functionality, and an enterprise SaaS platform generally takes the longest given security review and integration depth. A realistic timeline is confirmed after your specific requirements are defined during discovery." },
  { q: "What is custom SaaS development?", a: "Custom SaaS development means building a cloud software product around your specific business model, target users, and workflows, rather than adapting a generic SaaS template. This makes sense when your requirements don't map cleanly onto existing platforms, though it's not automatically the better choice if an existing solution genuinely fits your business model well." },
  { q: "What is SaaS MVP development?", a: "SaaS MVP development is building the smallest viable version of a SaaS product that still tests its core value proposition with real users, before committing to a full platform build. The goal is validating a business hypothesis — not shipping a smaller version of every planned feature — with analytics instrumented from day one to inform what to build next." },
  { q: "What is multi-tenant SaaS architecture?", a: "Multi-tenant architecture is the approach where a single application instance serves multiple customer organizations, with each tenant's data kept appropriately isolated despite sharing underlying infrastructure. Common approaches include shared database/shared schema, shared database/separate schemas, and separate database per tenant, each with different tradeoffs in cost efficiency, isolation strength, and customization flexibility." },
  { q: "How do SaaS applications handle multiple customers?", a: "SaaS applications handle multiple customers through multi-tenant architecture, where tenant-scoped authentication and authorization ensure each customer organization's data and users are correctly isolated from every other tenant. This requires consistent enforcement of tenant boundaries throughout the application's data access and business logic, not just at the login screen." },
  { q: "Can SaaS applications integrate with existing software?", a: "Yes, SaaS applications commonly integrate with CRM, ERP, accounting, and payment systems through REST APIs, webhooks, and OAuth-based authentication, allowing customer data to flow between your SaaS product and the other tools your customers already depend on." },
  { q: "Can you build subscription-based SaaS software?", a: "Yes, subscription and billing architecture is a core part of SaaS development, covering free and paid plan tiers, monthly and annual billing, trials, upgrades and downgrades, cancellation flows, and usage-based billing where appropriate to your business model, integrated with established payment infrastructure providers." },
  { q: "Can you integrate billing and payment systems into SaaS?", a: "Yes, billing integration covers recurring payment processing, invoice generation, payment status handling, webhook-based event processing for billing updates, and failed payment retry logic, connected to a payment provider appropriate to your business model, target markets, and existing relationships." },
  { q: "How do you secure a SaaS application?", a: "SaaS security covers authentication, authorization, encrypted data in transit and at rest, secure APIs, input/output validation, secrets management, and rigorous tenant isolation enforcement to prevent cross-tenant data access — one of the risks most specific to multi-tenant SaaS architecture. We don't claim formal compliance certifications unless independently verified." },
  { q: "How do SaaS applications scale?", a: "SaaS applications scale through horizontal scaling, caching, database optimization and indexing, load balancing, asynchronous processing with queues, CDN usage for static assets, and autoscaling infrastructure that adjusts capacity based on actual demand. Scalability architecture should match actual traffic patterns rather than over-engineering for unvalidated growth." },
  { q: "Can AI be integrated into a SaaS product?", a: "Yes, AI can enhance SaaS products through embedded assistants, recommendations, predictive analytics, document processing, or intelligent search, applied where it genuinely solves a user problem. AI is an optional capability layered onto solid SaaS architecture, not a default requirement for every SaaS build." },
  { q: "Can machine learning be integrated into SaaS?", a: "Yes, machine learning can power features like recommendation engines, churn prediction, forecasting, and anomaly detection within a SaaS product, applied selectively where predictive modeling genuinely adds differentiated value for your specific users." },
  { q: "Can you migrate an existing application to SaaS?", a: "Yes, migrating legacy software, desktop applications, or monolithic systems to a cloud-delivered SaaS model involves architecture assessment, data migration planning, API development, and phased rollout to manage risk. We assess the existing system honestly before recommending a migration or modernization path, rather than defaulting to a full rewrite." },
  { q: "Can startups hire SaaS developers?", a: "Yes, we work with startups building their first SaaS product, typically starting with idea validation and a focused MVP to test the core value proposition before scaling. We build scalable architectural foundations from the start while avoiding unnecessary over-engineering before product-market fit is validated." },
  { q: "Can US businesses hire SaaS development companies?", a: "Yes, we work with businesses across the United States on SaaS development, including organizations in states like New York, California, Texas, and Washington. Projects are scoped around each business's specific product and growth stage, with remote collaboration throughout discovery, development, and ongoing support." },
  { q: "Can Canadian businesses hire SaaS development companies?", a: "Yes, we work remotely with Canadian businesses on SaaS development, including companies in Toronto, Vancouver, Montreal, and other Canadian cities, accounting for considerations like bilingual product requirements where relevant, with the entire process handled remotely." },
];

export const finalCta = {
  headline: "Let's Build Your SaaS Product",
  body: "Whether you're validating a new SaaS idea, ready to build a full product from the ground up, or modernizing an existing platform into true multi-tenant SaaS architecture, we can help you define a realistic, well-architected path forward.",
  steps: [
    "Discuss product goals",
    "Define users and workflows",
    "Plan MVP scope",
    "Design architecture",
    "Create UI/UX",
    "Develop MVP",
    "Test",
    "Deploy",
    "Monitor",
    "Iterate and scale",
  ],
  crossLinks: [
    { before: "For SaaS products built primarily as web applications, our ", text: "Web Development Services", href: "/services/web-mobile-development/web-development", after: " team can support the frontend engineering alongside our SaaS-specific backend and architecture work. If your product's differentiation centers on LLM-powered features specifically, our " },
    { before: "", text: "Generative AI Development", href: etPath("generative-ai-development"), after: " page covers that area in depth." },
  ],
  primaryCta: "Discuss Your SaaS Product",
  secondaryCta: "Talk to a SaaS Development Expert",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
