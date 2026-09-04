import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Shield,
  Zap,
  Code2,
  TrendingUp,
  Lock,
  Database,
  TerminalSquare,
  Activity,
  RefreshCw,
  Cpu,
  BarChart3,
  Search,
  Layers,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const cloudSolutionsSeo = {
  title: "Cloud Solutions & Cloud Engineering Services | The Runner",
  description:
    "Cloud architecture, migration, and modernization services for AWS, Azure & Google Cloud. Engineering-led cloud solutions for the USA and Canada.",
  h1: "Cloud Solutions Built Around Your Actual Workload, Not a Generic Template",
  canonicalPath: "/services/emerging-technologies/cloud-solutions",
  ogTitle: "Cloud Solutions & Cloud Engineering Services | The Runner Software Solutions",
  ogDescription:
    "Cloud architecture, migration, modernization, and DevOps services built around your actual workload — not a one-size-fits-all cloud template. Serving businesses across the USA and Canada.",
  twitterTitle: "Cloud Solutions & Cloud Engineering Services | The Runner Software Solutions",
  twitterDescription:
    "Cloud architecture, migration, modernization, and DevOps services built around your actual workload — not a one-size-fits-all cloud template. Serving businesses across the USA and Canada.",
};

export const cloudHero = {
  intro:
    "Cloud projects tend to go wrong in a predictable way: a business adopts a cloud provider, a service catalog, or an architecture pattern because it's popular, rather than because it fits their specific workload, traffic pattern, and team capabilities. The Runner Software Solutions builds and modernizes cloud infrastructure and applications for businesses across the United States and Canada — starting from an assessment of what your application actually needs, not a default recommendation.",
  summary:
    "Cloud solutions cover the architecture, migration, development, security, and ongoing operation of applications and infrastructure hosted on cloud platforms like AWS, Azure, and Google Cloud. We work with businesses migrating an existing application to the cloud, modernizing infrastructure that's grown expensive or fragile, and building new cloud-native applications from the ground up — with architecture decisions grounded in workload requirements, not defaults.",
  primaryCta: "Discuss Your Cloud Project",
  secondaryCta: "Get a Cloud Architecture Consultation",
};

export const whatAreCloudSolutions = {
  definition:
    "Cloud solutions refer to the architecture, infrastructure, applications, and operational practices that let a business run software on cloud platforms — computing, storage, networking, and managed services delivered over the internet by providers like AWS, Microsoft Azure, and Google Cloud, rather than on hardware the business owns and operates directly.",
  spans: [
    "Cloud infrastructure — the underlying compute, storage, and networking resources an application runs on",
    "Cloud architecture — the design decisions determining how an application's components are structured, deployed, and connected",
    "Cloud migration — moving an existing application or workload from on-premise or another environment into the cloud",
    "Cloud-native development — building new applications designed specifically to take advantage of cloud infrastructure capabilities from the start",
    "Cloud DevOps — the practices and tooling that make deploying and operating cloud infrastructure reliable and repeatable",
    "Cloud security — the practices protecting cloud infrastructure and the data it processes",
    "Cloud cost management — the ongoing discipline of keeping cloud spend proportionate to actual usage and business value",
  ],
  closing:
    "A cloud solutions provider's job isn't to sell a specific cloud platform or architecture pattern — it's to evaluate your actual workload and recommend the approach that genuinely fits your traffic patterns, data requirements, security needs, budget, and team's operational capacity.",
};

export const whyBusinessesNeedCloud = {
  title: "Why Businesses Need Cloud Solutions",
  intro: "Businesses typically engage cloud services for one of a few concrete reasons, not a generic desire to \"move to the cloud\":",
  reasons: [
    "Scaling limitations — on-premise or under-provisioned infrastructure that can't handle current or projected traffic without manual, slow capacity changes",
    "High infrastructure cost relative to usage — paying for fixed capacity that sits idle much of the time, when cloud's elastic scaling could better match cost to actual demand",
    "Reliability requirements — needing better uptime and disaster recovery than a single on-premise environment can practically provide",
    "Legacy modernization pressure — an aging application or infrastructure stack that's become expensive to maintain, difficult to secure, or incompatible with current development practices",
    "New product development — building a new application where cloud-native architecture is the practical default, rather than provisioning physical infrastructure",
    "Geographic reach — needing to serve users across multiple regions with acceptable latency, which cloud providers' global infrastructure supports more easily than a single data center",
    "Team and operational efficiency — reducing the operational burden of managing physical infrastructure, shifting that responsibility (in part) to a managed cloud provider",
  ],
  closing:
    "Not every business needs to move everything to the cloud, and not every application benefits equally from cloud-native architecture — part of a genuine cloud consulting engagement is being honest about which of these reasons actually applies to your situation.",
};

export const cloudServices = [
  { title: "Cloud Consulting", desc: "Cloud consulting is the assessment and advisory work that precedes (and often continues alongside) actual implementation — evaluating your current infrastructure or application, understanding your business and technical constraints, and recommending an architecture and platform strategy grounded in your actual requirements rather than a default template." },
  { title: "Cloud Architecture & Strategy", desc: "We design the technical architecture underlying a cloud application or infrastructure environment — compute model, data architecture, networking, security boundaries, and deployment strategy — informed by workload characteristics, expected scale, and long-term maintainability." },
  { title: "Cloud Migration", desc: "We move existing applications, databases, and infrastructure into cloud environments, following a structured migration process that accounts for application dependencies, data migration risk, and business continuity during the transition." },
  { title: "Cloud Modernization", desc: "For businesses with infrastructure or applications already in the cloud but built on outdated patterns, we modernize incrementally where the existing foundation is sound, and recommend more substantial rework only where the assessment genuinely supports it." },
  { title: "Cloud-Native Application Development", desc: "We build new applications designed from the outset to take advantage of cloud infrastructure — containerized or serverless compute models, managed databases, and infrastructure-as-code deployment." },
  { title: "Cloud Infrastructure", desc: "We design and provision the underlying compute, storage, and networking infrastructure an application depends on, sized and structured appropriately to actual workload requirements." },
  { title: "Cloud Integration", desc: "We connect cloud applications and infrastructure to existing business systems — on-premise systems that remain in place, other cloud services, and third-party APIs — through appropriately secured and monitored integration points." },
  { title: "Cloud DevOps & CI/CD", desc: "We build the deployment pipelines, infrastructure-as-code practices, and automation that make cloud infrastructure changes and application deployments reliable, repeatable, and auditable." },
  { title: "Cloud Security", desc: "We implement security practices spanning identity and access management, network security, encryption, and monitoring — treating cloud security as a shared responsibility requiring deliberate configuration." },
  { title: "Cloud Cost Optimization", desc: "We evaluate actual usage patterns against provisioned infrastructure to identify concrete opportunities for cost reduction — right-sizing, pricing model fit, and eliminating unused infrastructure." },
  { title: "Cloud Monitoring & Observability", desc: "We build monitoring, logging, and tracing infrastructure that gives real visibility into application and infrastructure health in production." },
  { title: "Cloud Backup & Disaster Recovery", desc: "We design backup and disaster recovery strategies appropriate to your specific data sensitivity and acceptable downtime." },
  { title: "Enterprise Cloud Solutions", desc: "We build and modernize cloud infrastructure for organizations with more complex requirements — multiple environments, stricter security and governance needs, and integration with a larger set of existing enterprise systems." },
  { title: "Hybrid Cloud Solutions", desc: "For businesses that need to keep certain workloads on-premise or in a private cloud while running other workloads in a public cloud, we design hybrid architectures that connect these environments securely and reliably." },
  { title: "Serverless Solutions", desc: "We build serverless applications and components where the workload pattern genuinely fits — event-driven, variable-traffic, or infrequently-used functionality where paying only for actual execution time offers a real advantage." },
  { title: "Containerized Applications", desc: "We build and deploy containerized applications using Docker and, where the scale and operational complexity genuinely justify it, Kubernetes — packaging applications consistently for reliable deployment across environments." },
];

export const awsSection = {
  title: "AWS",
  body: "AWS has the broadest and most mature service catalog among the major cloud providers, with extensive options across compute, storage, databases, networking, and managed services. This depth is genuinely useful for complex or unusual workload requirements, but it also means more decisions to make and a steeper learning curve for teams new to the platform. AWS tends to be a strong default choice for greenfield cloud-native projects, workloads needing a very specific managed service AWS offers, or teams that already have AWS expertise.",
};

export const azureSection = {
  title: "Microsoft Azure",
  body: "Azure tends to be the more natural fit for organizations already invested in Microsoft's ecosystem — Active Directory, Microsoft 365, .NET-based applications, or existing enterprise agreements with Microsoft. Its integration with these existing Microsoft tools can meaningfully reduce both technical friction and licensing complexity for organizations already using them. For businesses without existing Microsoft infrastructure, this advantage is less relevant, and platform choice should be driven by other factors.",
};

export const googleCloudSection = {
  title: "Google Cloud",
  body: "Google Cloud is generally strong for data-intensive and analytics-heavy workloads, and has a mature set of data and machine learning tooling. Its container orchestration tooling (Google Cloud is where Kubernetes originated) is also a genuine strength for teams building container-native architectures. Google Cloud's broader enterprise service catalog is comparatively less extensive than AWS's, which matters more for workloads needing a wide range of specialized managed services.",
};

export const platformComparison = {
  title: "Comparison",
  rows: [
    { factor: "Ecosystem breadth", aws: "Broadest service catalog of the three", azure: "Strong, particularly for Microsoft-integrated organizations", gcp: "Strong in data/ML tooling, narrower overall catalog" },
    { factor: "Enterprise integration", aws: "Strong general enterprise adoption", azure: "Strongest for existing Microsoft shops", gcp: "Good, less dominant in traditional enterprise IT" },
    { factor: "Core services maturity", aws: "Very mature across nearly all categories", azure: "Mature, especially compute, identity, and hybrid cloud", gcp: "Mature, particularly data, analytics, and containers" },
    { factor: "Scalability", aws: "Proven at very large scale across industries", azure: "Proven at large scale, especially enterprise workloads", gcp: "Proven at large scale, strong in data-heavy workloads" },
    { factor: "Developer experience", aws: "Extensive but can feel complex given service breadth", azure: "Familiar to teams with Microsoft development backgrounds", gcp: "Often considered developer-friendly, especially for containers/K8s" },
    { factor: "Pricing considerations", aws: "Complex pricing model, extensive but requires active management", azure: "Comparable complexity, some savings for Microsoft license holders", gcp: "Comparable complexity, competitive for data/compute-heavy workloads" },
    { factor: "AI/data capabilities", aws: "Strong and broad, growing rapidly", azure: "Strong, tightly integrated with Microsoft's AI investments", gcp: "Historically a particular strength area" },
    { factor: "Management complexity", aws: "Higher, given breadth of options", azure: "Moderate, especially with existing Microsoft tooling familiarity", gcp: "Moderate, often praised for a cleaner console/tooling experience" },
    { factor: "Suitable use cases", aws: "Broad-purpose, unusual/specialized service needs", azure: "Microsoft-integrated enterprises, hybrid cloud", gcp: "Data-intensive workloads, container-native architectures" },
  ],
  closing:
    "No provider is universally superior. The right choice depends on your existing technical ecosystem, team expertise, specific service requirements, and — often decisively for enterprises — existing vendor relationships and licensing agreements. We recommend a specific platform based on your actual requirements during the architecture assessment phase, not as a default position.",
};

export const cloudSecurity = {
  title: "Cloud Security",
  intro:
    "Cloud security requires deliberate configuration and ongoing attention — it is not something a cloud provider delivers automatically simply by hosting your infrastructure. This is best understood through the shared responsibility model: cloud providers are responsible for the security of the cloud (the physical infrastructure, the underlying platform), while the customer is responsible for security in the cloud (how they configure identity, network access, data protection, and application security on top of that infrastructure).",
  practices: [
    "Identity and access management (IAM) — controlling who and what can access cloud resources, structured around least-privilege principles",
    "Least privilege — granting only the specific access a user, service, or system actually needs",
    "Encryption — protecting data both in transit and at rest, using the cloud provider's encryption capabilities appropriately configured",
    "Network security — properly configured virtual networks, security groups, and firewall rules limiting what can communicate with what",
    "Secrets management — securely storing and rotating API keys, database credentials, and other sensitive configuration",
    "Secure APIs — authenticated, rate-limited, and properly validated API endpoints",
    "Vulnerability management — ongoing patching and monitoring for known vulnerabilities in infrastructure and dependencies",
    "Logging and monitoring — maintaining audit trails and alerting on suspicious activity",
    "Backup protection — ensuring backups themselves are secured and can't be tampered with or deleted maliciously",
    "Disaster recovery — a tested plan for restoring service and data after a significant security or operational incident",
    "Access controls — appropriately scoped permissions across every layer of the infrastructure, not just at the perimeter",
  ],
  disclaimer:
    "We do not claim absolute security — no cloud environment is invulnerable, and the goal of good cloud security practice is reducing risk to an appropriate, managed level, not eliminating it entirely. We also don't claim specific regulatory compliance (HIPAA, SOC 2, PCI DSS, ISO 27001, or others) unless independently verified for a given engagement.",
};

export const cloudDevops = {
  title: "Cloud DevOps & CI/CD",
  intro: "Reliable cloud operations depend on disciplined DevOps practices, not just well-chosen infrastructure:",
  practices: [
    "Infrastructure as code — defining infrastructure through version-controlled configuration rather than manual console changes",
    "CI/CD pipelines — automating the build, test, and deployment process so releases are consistent and low-risk",
    "Automated testing — catching issues before they reach production through tests run automatically as part of the deployment pipeline",
    "Environment consistency — ensuring development, staging, and production environments are configured consistently enough that \"it worked in staging\" reliably predicts production behavior",
    "Deployment strategies — approaches like blue-green or rolling deployments that reduce risk and downtime during releases",
    "Monitoring integration — deployment pipelines that surface post-deployment health immediately",
  ],
  closing:
    "DevOps maturity directly affects how confidently a team can ship changes — a well-built CI/CD pipeline turns deployment from a stressful, infrequent event into a routine, low-risk part of normal development.",
};

export const cloudCostOptimization = {
  title: "Cloud Cost Optimization",
  intro:
    "Most cloud overspend comes from a small number of recurring patterns: over-provisioned resources sized for peak load that's rarely reached, unused or forgotten infrastructure that was never decommissioned, inefficient architecture generating unnecessary data transfer or compute costs, and pricing models that don't match actual usage patterns.",
  approaches: [
    "Right-sizing — matching provisioned compute and storage capacity to actual observed usage",
    "Pricing model fit — evaluating whether on-demand, reserved, or spot pricing best matches your actual usage pattern",
    "Autoscaling — configuring infrastructure to scale down during low-traffic periods rather than remaining provisioned for peak capacity around the clock",
    "Storage tiering — moving infrequently accessed data to lower-cost storage tiers",
    "Eliminating unused resources — identifying and decommissioning infrastructure that's no longer actually needed",
    "Architecture efficiency — addressing architectural patterns that generate cost beyond what the actual workload requires",
    "Monitoring cost alongside performance — treating cost as an ongoing operational metric to watch, not a one-time optimization project",
  ],
  closing:
    "Cost optimization is most effective as an ongoing practice informed by actual billing and usage data, not a one-time audit — usage patterns and application behavior change over time, and infrastructure that was well-optimized at launch can drift toward waste as the application evolves.",
};

export const architectureEvaluation = {
  title: "How We Evaluate a Cloud Architecture",
  intro: "A professional cloud architecture assessment works through a defined set of questions before any technology is selected:",
  questions: [
    "Workload requirements — what does the application actually need to do, and what are its performance and availability expectations?",
    "Application architecture — is this a new build, a migration, or a modernization of existing architecture?",
    "Traffic patterns — is load steady, spiky, seasonal, or unpredictable?",
    "Database requirements — what are the actual read/write patterns, consistency requirements, and data volume?",
    "Storage requirements — what kind of data is being stored, how much, and how frequently is it accessed?",
    "Security requirements — what data sensitivity and access control requirements apply?",
    "Compliance — are there specific regulatory or contractual obligations that constrain architecture or provider choice?",
    "Availability — what level of uptime does the business genuinely require, and what's the actual cost of downtime?",
    "Disaster recovery — what's an acceptable recovery time and recovery point if something goes seriously wrong?",
    "Scalability — what's the realistic growth trajectory, and does the architecture need to support that growth without a rebuild?",
    "Observability — what visibility does the team need into production behavior to operate the system confidently?",
    "Deployment strategy — how will changes actually get released safely and reliably?",
    "Cloud costs — what's the expected cost profile of different architectural approaches, and does it align with budget realities?",
    "Team capabilities — what can your team realistically operate and maintain?",
    "Long-term maintenance — who maintains this system after initial deployment, and does the architecture support that sustainably?",
  ],
  closing: "This assessment determines the architecture — not the other way around. We don't start from a preferred technology stack and fit the workload to it.",
};

export const architectureDecisions = {
  title: "Cloud Architecture Decisions We Consider",
  intro: "Several recurring architectural decisions come up across nearly every cloud project, each with real trade-offs rather than a universally correct answer:",
  decisions: [
    { title: "Virtual machines vs. containers", body: "Virtual machines offer strong isolation and are well understood operationally, but are heavier and slower to provision than containers. Containers are lighter, start faster, and package application dependencies consistently across environments, but introduce orchestration complexity, especially at scale." },
    { title: "Containers vs. serverless", body: "Containers give you control over the runtime environment and are well suited to applications with steady, predictable load. Serverless eliminates infrastructure management entirely and charges only for actual execution time, making it attractive for event-driven or highly variable workloads — but it introduces cold-start latency considerations and can become more expensive than containers at sustained high volume." },
    { title: "Monolith vs. microservices", body: "A monolithic architecture is simpler to develop, test, and deploy for smaller teams and applications. Microservices offer independent scalability and deployment of individual components, which becomes valuable as an application and engineering team grow large enough that a monolith's deployment and coordination overhead becomes a genuine bottleneck." },
    { title: "Managed database vs. self-managed database", body: "A managed database service reduces operational burden significantly and is the right default for most teams. Self-managed databases offer more configuration control and can be more cost-effective at very specific scale or configuration requirements, but require genuine database administration expertise to operate reliably." },
    { title: "Public vs. private vs. hybrid cloud", body: "Public cloud offers the most elasticity and lowest operational overhead. Private cloud offers more control, which can matter for specific regulatory or data-sovereignty requirements. Hybrid approaches let a business keep certain workloads on-premise while running other workloads in public cloud." },
    { title: "Single-region vs. multi-region deployment", body: "Single-region deployment is simpler and less expensive, and sufficient for most applications whose users are concentrated in one geographic area. Multi-region deployment improves latency for geographically distributed users and provides stronger disaster recovery guarantees, at meaningfully higher cost and architectural complexity." },
    { title: "Shared infrastructure vs. isolated environments", body: "Shared infrastructure is more cost-efficient. Isolated environments provide stronger security and performance guarantees, particularly relevant for regulated industries or customers with strict data isolation requirements." },
    { title: "Kubernetes vs. simpler container orchestration", body: "Kubernetes is powerful and has become the de facto standard for complex, large-scale containerized deployments, but carries real operational complexity. For smaller-scale containerized applications, simpler orchestration options can deliver most of the practical benefit with substantially less operational overhead." },
    { title: "Managed services vs. custom infrastructure", body: "Managed services reduce operational burden and are generally the right default. Custom, self-managed infrastructure offers more control and can be more cost-effective at very specific scale, but requires the operational expertise to run reliably." },
  ],
};

export const migrationChallenges = {
  title: "Common Cloud Migration Challenges",
  intro: "Cloud migrations run into a recurring set of challenges, worth understanding before a migration begins:",
  challenges: [
    "Underestimated application dependencies — applications often have more hidden dependencies than initially documented",
    "Data migration complexity — moving large volumes of data with acceptable downtime and without data loss or corruption is genuinely difficult",
    "Performance surprises — an application that performed well on-premise can behave differently in a cloud environment",
    "Cost surprises — cloud costs can exceed initial estimates when usage patterns weren't accurately modeled beforehand",
    "Security configuration gaps — a rushed migration can leave security misconfigurations",
    "Team readiness — operating cloud infrastructure requires different skills than operating on-premise infrastructure",
    "Business continuity during transition — maintaining acceptable service levels while a migration is actively underway",
  ],
  closing:
    "Understanding these risks upfront is what a proper assessment and migration strategy phase is for — most of these challenges are manageable with adequate planning, but become genuinely disruptive when a migration is rushed without proper assessment.",
};

export const architectureMistakes = {
  title: "Common Cloud Architecture Mistakes",
  intro: "Patterns worth calling out explicitly, since they recur across many cloud projects regardless of provider or industry:",
  mistakes: [
    "Defaulting to microservices for a small application — adding distributed-systems complexity before the team or application genuinely needs it",
    "Over-provisioning \"just in case\" — sizing infrastructure for hypothetical peak load rather than actual or realistically projected usage",
    "Treating security as a final step — configuring IAM, network security, and encryption as an afterthought",
    "Skipping infrastructure as code — managing cloud infrastructure through manual console changes, which becomes untraceable and error-prone",
    "No real disaster recovery testing — having a documented disaster recovery plan that's never actually been tested",
    "Ignoring cost until the bill arrives — not monitoring cloud spend proactively",
    "Choosing a platform based on hype rather than fit — adopting a specific service or architecture pattern because it's currently popular",
    "Under-investing in observability — building infrastructure without adequate logging, monitoring, and tracing",
  ],
};

export const cloudProcess: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "Discovery", desc: "We learn your business, current infrastructure or application, and the problem you're trying to solve." },
  { icon: Layers, title: "Assessment", desc: "We evaluate your existing environment, workload characteristics, and constraints in detail." },
  { icon: Code2, title: "Architecture Planning", desc: "We design the target cloud architecture based on the assessment, including platform selection and key technical decisions." },
  { icon: RefreshCw, title: "Migration Strategy", desc: "We determine the right migration approach for each component, for migration projects." },
  { icon: TerminalSquare, title: "Application Preparation", desc: "We prepare applications for their target environment, which may include refactoring, containerization, or configuration changes." },
  { icon: Database, title: "Data Migration", desc: "We plan and execute data migration with attention to integrity, downtime, and rollback options." },
  { icon: Shield, title: "Testing", desc: "We validate functionality, performance, and security in the target environment before cutover." },
  { icon: Cloud, title: "Deployment", desc: "We execute deployment or migration with a controlled, appropriately staged rollout." },
  { icon: Activity, title: "Monitoring", desc: "We establish and verify monitoring, logging, and alerting immediately post-deployment." },
  { icon: TrendingUp, title: "Optimization", desc: "We continue refining performance and cost based on real production data." },
];

export const migrationStrategies = {
  title: "Cloud Migration Strategies",
  intro: "Cloud migration isn't a single approach — different applications and components within the same migration often call for different strategies, commonly summarized as the \"6 Rs\":",
  strategies: [
    { title: "Rehost", subtitle: "lift and shift", desc: "Moving an application to the cloud with minimal changes, fastest to execute but doesn't take advantage of cloud-native capabilities" },
    { title: "Replatform", subtitle: "", desc: "Making moderate, targeted changes (such as moving to a managed database) during migration without a full application rewrite" },
    { title: "Refactor", subtitle: "", desc: "Substantially re-architecting the application to be cloud-native, the most involved approach but unlocking the most cloud-specific benefits" },
    { title: "Repurchase", subtitle: "", desc: "Replacing an existing application with a cloud-based commercial alternative rather than migrating the existing codebase" },
    { title: "Retain", subtitle: "", desc: "Keeping certain components where they are, when migration isn't currently justified by cost or risk" },
    { title: "Retire", subtitle: "", desc: "Decommissioning components that are no longer needed, which migration planning often surfaces" },
  ],
  closing:
    "Rehosting suits time-sensitive migrations or applications where cloud-native refactoring isn't currently justified. Replatforming suits applications that can gain meaningful benefit from targeted changes without a full rewrite. Refactoring suits applications where cloud-native architecture will deliver substantial, sustained benefit that justifies the additional upfront investment.",
};

export const enterpriseCloud = {
  title: "Enterprise Cloud Solutions",
  intro: "Enterprise cloud environments carry distinct requirements beyond a smaller-scale deployment:",
  requirements: [
    "Multiple environments — development, staging, and production environments that need consistent configuration and governance",
    "Stricter security and governance — more rigorous access control, audit requirements, and policy enforcement",
    "Integration with existing enterprise systems — connecting cloud infrastructure to a larger set of existing on-premise and cloud systems",
    "Cost governance — visibility and control over cloud spend across multiple teams and business units",
    "Identity and access management at scale — managing access across a larger organization, often integrated with existing enterprise identity providers",
    "Multi-region or hybrid requirements — more often necessary at enterprise scale given global operations or specific regulatory constraints",
    "Change management — coordinating infrastructure and application changes across larger teams with more stakeholders",
  ],
  closing:
    "Enterprise cloud projects typically require more extensive discovery and stakeholder alignment before implementation begins, given the number of systems, teams, and governance requirements typically involved.",
  productDevLink: {
    before: "For organizations whose cloud needs are part of a broader software platform initiative, our ",
    text: "Software Product Development",
    href: "/services/software-development/software-product-development",
    after: " team can support the wider engineering roadmap alongside cloud infrastructure work.",
  },
};

export const useCases = [
  "New application launch — building cloud-native infrastructure for a new product from the outset, avoiding the cost of later migration",
  "Legacy application migration — moving an aging on-premise application to the cloud to improve scalability, reliability, or reduce infrastructure maintenance burden",
  "Infrastructure modernization — updating cloud infrastructure that's grown expensive, fragile, or difficult to maintain over time",
  "Disaster recovery improvement — building more robust backup and recovery capability than existing infrastructure provides",
  "Cost reduction — addressing infrastructure that's genuinely over-provisioned or inefficiently architected",
  "Compliance-driven architecture changes — restructuring infrastructure to meet specific data residency, access control, or audit requirements",
  "Scaling for growth — rebuilding infrastructure that's hit real capacity or reliability limits as usage has grown",
];

export const industryUseCases = [
  { industry: "Healthcare", desc: "Infrastructure supporting patient-facing and administrative applications, with particular attention to data sensitivity and access control appropriate to healthcare data" },
  { industry: "Finance", desc: "Infrastructure for applications handling financial transactions and sensitive customer data, with security and audit requirements appropriate to that sensitivity" },
  { industry: "Ecommerce", desc: "Infrastructure supporting variable, often seasonal traffic patterns, where autoscaling and cost-appropriate architecture directly affect both customer experience and margin" },
  { industry: "Logistics", desc: "Infrastructure supporting real-time tracking and operational systems, often with specific availability requirements given operational dependency" },
  { industry: "Manufacturing", desc: "Infrastructure supporting operational and reporting systems, sometimes with hybrid requirements connecting cloud infrastructure to on-premise operational technology" },
  { industry: "Professional Services", desc: "Infrastructure supporting client-facing applications and internal tooling with straightforward, cost-appropriate architecture" },
];

export const cloudCost = {
  title: "Cloud Solutions Cost",
  intro: "There's no single fixed price — cloud cost depends on the specific combination of compute, storage, bandwidth, database usage, and managed services your architecture requires, alongside the separate cost of the engineering work to design, build, and migrate to that architecture. Key factors that influence ongoing cloud infrastructure cost:",
  factors: [
    "Compute — the processing capacity your application requires, and how efficiently it's provisioned relative to actual usage",
    "Storage — the volume and type of data storage needed, and which storage tier it's stored on",
    "Bandwidth — data transfer costs, particularly for applications serving large amounts of content or transferring data between regions",
    "Database usage — managed database costs scale with capacity, performance tier, and usage volume",
    "Traffic — request volume directly affects compute and, often, managed service costs",
    "Environments — running separate development, staging, and production environments multiplies infrastructure cost",
    "Monitoring and backups — observability and backup infrastructure carry their own ongoing cost",
    "Support — cloud providers offer tiered support plans with different costs and response guarantees",
    "Architecture — some architectural patterns are inherently more cost-efficient than others for a given workload",
    "Scaling requirements — infrastructure built for significant elasticity costs differently than infrastructure sized for stable, predictable load",
    "Managed services — using more managed services generally increases direct infrastructure cost while reducing operational cost",
    "Region — pricing varies by cloud region, and multi-region deployment multiplies infrastructure cost",
  ],
  closing:
    "We don't provide fixed price figures without understanding your specific workload — actual cost depends entirely on your application's real requirements, confirmed through the assessment phase of a project.",
};

export const migrationTimeline = {
  title: "Cloud Migration Timeline",
  intro: "Migration timelines vary substantially based on scope and complexity, and we don't promise fixed delivery dates without understanding your specific environment. Factors that most affect timeline:",
  factors: [
    "Number and complexity of applications being migrated",
    "Data volume and migration complexity, particularly for large or actively used production databases",
    "Migration strategy — a rehost migration is typically faster than a full refactor",
    "Testing requirements, particularly for business-critical applications that can't tolerate significant risk during cutover",
    "Downtime tolerance — migrations that must happen with minimal or zero downtime generally require more careful planning",
    "Team availability — how much stakeholder time is available for review, testing, and decision-making during the migration",
    "Dependency complexity — how interconnected the applications and systems being migrated are with each other and with systems remaining in place",
  ],
  closing:
    "A realistic timeline is established during the assessment and architecture planning phases, once your specific environment and constraints are actually understood — not estimated generically before that assessment happens.",
};

export const usaSection = {
  title: "Cloud Solutions for USA Businesses",
  body: "We work with businesses across the United States on cloud architecture, migration, and modernization projects — serving as a cloud solutions company for organizations in the USA ranging from startups building cloud-native infrastructure for a new product to established businesses migrating legacy applications off aging on-premise infrastructure. Cloud migration services in the USA context often involve specific considerations around data residency preferences, existing vendor relationships with major US-based cloud providers, and integration with common US enterprise software ecosystems. As a cloud consulting services provider serving the USA, our team works remotely with distributed stakeholders throughout assessment, architecture planning, and implementation.",
};

export const canadaSection = {
  title: "Cloud Solutions for Canadian Businesses",
  body: "We also support Canadian businesses with cloud architecture, migration, and infrastructure projects. Canadian organizations sometimes have specific data residency considerations — a preference or requirement to keep certain data within Canadian cloud regions — which we factor into architecture and platform selection where relevant. As a cloud solutions provider for Canada, we work remotely with Canadian teams throughout assessment, development, and ongoing support, applying the same engineering-led approach to architecture decisions as with our US engagements.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "Engineering-led architecture decisions", desc: "Recommendations grounded in your actual workload requirements, not a default technology stack applied regardless of fit" },
  { icon: Cloud, title: "Balanced platform evaluation", desc: "Genuine, unbiased assessment of AWS, Azure, and Google Cloud based on your specific requirements, not a single-provider default" },
  { icon: Code2, title: "Full-stack cloud capability", desc: "From infrastructure and architecture through application development and ongoing DevOps" },
  { icon: Lock, title: "Security-conscious implementation", desc: "Identity, network, and data security addressed throughout architecture and deployment, not bolted on afterward" },
  { icon: BarChart3, title: "Cost-conscious architecture", desc: "Infrastructure sized and structured to match actual usage, with ongoing attention to cost as usage patterns evolve" },
  { icon: Layers, title: "Transparent trade-off discussions", desc: "Clear explanation of the real tradeoffs behind every major architectural decision, not oversimplified recommendations" },
  { icon: RefreshCw, title: "Migration and modernization experience", desc: "A structured, risk-aware approach to moving and updating existing systems, not just greenfield cloud-native builds" },
  { icon: Activity, title: "Long-term operational partnership", desc: "Available for ongoing monitoring, optimization, and support after initial deployment, not just a one-time implementation" },
];

export const cloudFaqs = [
  { q: "What are cloud solutions?", a: "Cloud solutions refer to the architecture, infrastructure, applications, and operational practices that let a business run software on cloud platforms like AWS, Azure, or Google Cloud rather than on hardware they own directly. This includes cloud infrastructure, architecture design, migration, cloud-native application development, DevOps, security, and cost management — the full range of work involved in building and operating software in the cloud." },
  { q: "What does a cloud solutions provider do?", a: "A cloud solutions provider assesses a business's workload, application architecture, and requirements, then designs, builds, migrates, or modernizes cloud infrastructure and applications accordingly. This includes architecture planning, platform selection, migration execution, security implementation, DevOps and deployment automation, cost optimization, and ongoing monitoring and support after launch." },
  { q: "How do cloud solutions work?", a: "Cloud solutions work by running applications and storing data on infrastructure operated by a cloud provider, accessed over the internet rather than hosted on hardware a business owns. Businesses provision compute, storage, networking, and managed services as needed, often scaling capacity up or down based on actual demand, with the specific architecture selected based on the application's actual requirements." },
  { q: "Which cloud platform should a business choose?", a: "The right platform depends on your existing technical ecosystem, team expertise, specific service requirements, and existing vendor relationships. AWS offers the broadest service catalog, Azure is often the strongest fit for organizations already using Microsoft's ecosystem, and Google Cloud is particularly strong for data-intensive and container-native workloads. No provider is universally superior — the choice should follow an assessment of your specific requirements." },
  { q: "AWS vs. Azure vs. Google Cloud — which is better?", a: "None is universally better. AWS has the broadest service catalog and suits complex or unusual requirements; Azure fits naturally for organizations already invested in Microsoft's ecosystem; Google Cloud is strong for data-intensive and container-native workloads. The right choice depends on your team's expertise, existing technical investments, and specific workload requirements, evaluated during an architecture assessment rather than assumed generically." },
  { q: "How much do cloud solutions cost?", a: "Cloud cost depends on compute, storage, bandwidth, database usage, traffic volume, number of environments, monitoring and backup infrastructure, support tier, and architectural efficiency. There's no fixed price — actual cost is driven by your specific workload's requirements and usage patterns, determined through an architecture assessment rather than quoted generically." },
  { q: "How long does cloud migration take?", a: "Migration timelines depend on the number and complexity of applications being migrated, data volume, chosen migration strategy (rehost is typically faster than refactor), testing requirements, downtime tolerance, and dependency complexity. A realistic timeline is established during the assessment and architecture planning phases specific to your environment, not estimated generically beforehand." },
  { q: "What is cloud modernization?", a: "Cloud modernization is the process of updating existing cloud infrastructure or applications built on outdated patterns — such as monolithic architecture that's become hard to scale, manual deployment processes, or infrastructure that's grown expensive over time. Modernization is often incremental where the existing foundation is sound, rather than automatically requiring a full rebuild." },
  { q: "How secure are cloud environments?", a: "Cloud security depends heavily on configuration, not just the platform chosen. Under the shared responsibility model, cloud providers secure the underlying infrastructure while customers are responsible for configuring identity and access management, network security, encryption, and application security correctly. No cloud environment is absolutely secure — good practice reduces risk to an appropriately managed level rather than eliminating it." },
  { q: "How do you migrate an application to the cloud?", a: "Migration follows a structured process: discovery, assessment, architecture planning, migration strategy selection, application preparation, data migration, testing, deployment, monitoring, and ongoing optimization. Different applications or components often use different migration approaches — rehost, replatform, or refactor — chosen based on each component's specific technical state and business priority." },
  { q: "How do you scale cloud infrastructure?", a: "Cloud infrastructure scales through approaches like horizontal scaling (adding more instances), autoscaling (automatically adjusting capacity based on demand), load balancing, caching, database optimization, and choosing compute models (containers, serverless) appropriate to the application's actual traffic patterns. Scalability architecture should be designed around real or realistically projected traffic, not built for hypothetical peak load." },
  { q: "How can businesses reduce cloud costs?", a: "Cloud costs are typically reduced through right-sizing over-provisioned resources, matching pricing models (on-demand, reserved, spot) to actual usage patterns, configuring autoscaling to reduce capacity during low-traffic periods, tiering storage appropriately, eliminating unused resources, and treating cost as an ongoing operational metric rather than a one-time optimization project." },
  { q: "What is cloud-native development?", a: "Cloud-native development means building applications specifically designed to take advantage of cloud infrastructure capabilities from the outset — using containerized or serverless compute models, managed databases, and infrastructure-as-code deployment — rather than building an application as if for a single server and deploying it to the cloud afterward." },
  { q: "When should a business use serverless architecture?", a: "Serverless architecture fits event-driven, variable-traffic, or infrequently used functionality where paying only for actual execution time offers a real cost advantage, and where cold-start latency is acceptable for the use case. For continuously running services with steady, sustained traffic, containers or traditional compute often provide better cost and performance characteristics than serverless." },
  { q: "What is the difference between cloud migration and cloud modernization?", a: "Cloud migration is the process of moving an existing application or infrastructure into a cloud environment, potentially with minimal changes. Cloud modernization is updating infrastructure or applications — whether on-premise or already in the cloud — that have grown outdated, expensive, or difficult to maintain, which may or may not involve changing hosting environment." },
  { q: "How do cloud solutions support enterprise applications?", a: "Enterprise cloud solutions support requirements like multiple governed environments, stricter security and access control, integration with existing enterprise systems, cost governance across teams, identity management integrated with existing enterprise identity providers, and multi-region or hybrid architecture where organizational or regulatory needs require it." },
  { q: "How do you design highly available cloud infrastructure?", a: "High availability is designed through redundancy across multiple availability zones or regions, load balancing, automated failover, health monitoring with automated recovery, and appropriately tested disaster recovery procedures. The right level of availability investment depends on your actual downtime cost and tolerance — not every application requires multi-region, always-on infrastructure." },
  { q: "Can US businesses hire your cloud engineering team?", a: "Yes, we work with businesses across the United States on cloud architecture, migration, and modernization projects, serving organizations building new cloud-native infrastructure as well as those migrating legacy systems. Projects are scoped around each business's specific workload and requirements, with remote collaboration throughout assessment, development, and ongoing support." },
  { q: "Can Canadian businesses hire your cloud engineering team?", a: "Yes, we work remotely with Canadian businesses on cloud architecture and migration projects, factoring in considerations like Canadian data residency preferences where relevant to platform and architecture decisions. The entire process — from assessment through implementation and ongoing support — is handled remotely." },
  { q: "Do you support hybrid and multi-cloud environments?", a: "Yes, we design hybrid cloud architectures for businesses that need to keep certain workloads on-premise or in a private cloud for regulatory, latency, or existing-investment reasons while running other workloads in a public cloud. We evaluate hybrid or multi-cloud approaches based on genuine constraints in your specific situation, rather than defaulting to them as a general best practice." },
];

export const finalCta = {
  headline: "Let's Discuss Your Cloud Project",
  body: "Whether you're planning a migration off legacy infrastructure, building a new cloud-native application, modernizing an existing cloud environment that's grown expensive or fragile, or simply trying to understand which cloud platform actually fits your workload, we can help you think through the real trade-offs before committing to an approach.",
  steps: [
    "Discuss your current infrastructure and business goals",
    "Assess your workload, traffic patterns, and constraints",
    "Evaluate platform and architecture options against your actual requirements",
    "Define a migration or development strategy",
    "Plan implementation and timeline",
    "Build, test, and deploy",
    "Monitor and optimize post-launch",
  ],
  crossLinks: [
    { before: "For businesses building custom applications on top of cloud infrastructure, our ", text: "Web Development", href: "/services/web-mobile-development/web-development", after: " and " },
    { before: "", text: "Mobile App Development", href: "/services/web-mobile-development/mobile-app-development", after: " teams can support the application layer alongside our cloud infrastructure work, and our " },
    { before: "", text: "AI Development Services", href: etPath("ai-development"), after: " team can help if your cloud project includes AI or machine learning workloads with specific infrastructure requirements. Businesses building a full software product on cloud infrastructure may also want to look at our " },
    { before: "", text: "SaaS Development", href: etPath("saas-development"), after: " service, which covers the product engineering layer that typically sits on top of cloud architecture." },
  ],
  primaryCta: "Discuss Your Cloud Project",
  secondaryCta: "Talk to Our Cloud Engineering Team",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
