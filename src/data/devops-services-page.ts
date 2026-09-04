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
  Search,
  Layers,
  GitBranch,
  Container,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const devopsServicesSeo = {
  title: "DevOps Services & Consulting | The Runner Software",
  description:
    "DevOps consulting, CI/CD, infrastructure as code & cloud automation for businesses in the USA and Canada. Engineering-led, not generic.",
  h1: "DevOps Services Built Around How Your Team Actually Ships Software",
  canonicalPath: "/services/emerging-technologies/devops-services",
  ogTitle: "DevOps Services & Consulting | The Runner Software Solutions",
  ogDescription:
    "CI/CD, infrastructure as code, containerization, and cloud DevOps built around your team's actual deployment frequency and architecture — not a default toolchain. Serving the USA and Canada.",
  twitterTitle: "DevOps Services & Consulting | The Runner Software Solutions",
  twitterDescription:
    "CI/CD, infrastructure as code, containerization, and cloud DevOps built around your team's actual deployment frequency and architecture — not a default toolchain. Serving the USA and Canada.",
};

export const devopsHero = {
  intro:
    "Most DevOps problems aren't tooling problems — they're the result of adopting a tool or pattern (Kubernetes, microservices, a specific CI/CD platform) before understanding whether it actually fits the team's deployment frequency, application architecture, and operational capacity. The Runner Software Solutions provides DevOps consulting and implementation for businesses across the United States and Canada, starting from an assessment of your actual release process, not a default toolchain.",
  summary:
    "DevOps services cover the practices, automation, and infrastructure that let software teams build, test, and release changes reliably and frequently — CI/CD pipelines, infrastructure as code, containerization, monitoring and observability, and the security practices that keep fast-moving release cycles from becoming a security liability. We work with startups setting up their first CI/CD pipeline and enterprises modernizing complex, multi-team deployment infrastructure.",
  primaryCta: "Talk to a DevOps Engineer",
  secondaryCta: "Get a DevOps Assessment",
};

export const whatAreDevopsServices = {
  definition:
    "DevOps services cover the practices, tooling, and infrastructure that connect software development and operations into a faster, more reliable release process. In practice, this spans several distinct areas of work:",
  areas: [
    "CI/CD — automating the build, test, and deployment process so releases happen consistently rather than through manual, error-prone steps",
    "Infrastructure as code (IaC) — defining infrastructure through version-controlled configuration rather than manual console changes",
    "Containerization — packaging applications consistently for reliable deployment across environments",
    "Orchestration — managing containerized applications at scale, using Kubernetes or simpler alternatives depending on actual need",
    "DevSecOps — integrating security practices throughout the development and deployment lifecycle, not as a final gate before release",
    "Cloud DevOps — applying these practices specifically within cloud infrastructure (AWS, Azure, Google Cloud)",
    "Monitoring and observability — building visibility into application and infrastructure behavior in production",
    "High availability and disaster recovery — architecture and processes that keep systems running reliably and recoverable when something goes wrong",
  ],
  engineerRole:
    "A DevOps engineer builds and maintains the automation, infrastructure, and tooling that let development teams ship code reliably and frequently — writing infrastructure-as-code, building and maintaining CI/CD pipelines, configuring monitoring and alerting, and working with development teams to reduce friction in the release process. It's a blend of software engineering and systems/operations expertise, not a purely operational role.",
};

export const whyBusinessesNeedDevops = {
  title: "Why Businesses Need DevOps Services",
  intro: "Businesses typically engage DevOps consulting for specific, recognizable pain points, not a generic desire to \"do DevOps\":",
  painPoints: [
    "Slow, risky releases — deployments that take significant manual effort and carry real risk of breaking production",
    "Inconsistent environments — \"it worked on my machine\" problems where development, staging, and production behave differently",
    "Infrastructure that's hard to reproduce — infrastructure configured manually over time, making disaster recovery or environment replication genuinely difficult",
    "Growing infrastructure cost — cloud spend that's grown without corresponding visibility or optimization",
    "Limited visibility into production issues — teams finding out about problems from customer complaints rather than monitoring",
    "Security gaps in the release process — security reviewed too late, or not systematically at all, in the deployment pipeline",
    "Team growth outpacing process — a release process that worked for a small team becoming a genuine bottleneck as the team and codebase grow",
    "Migration or modernization pressure — moving to the cloud, or modernizing existing cloud infrastructure that's become fragile or expensive to operate",
  ],
  closing:
    "Not every business needs the same DevOps investment — a five-person startup deploying twice a week has genuinely different needs than a 200-engineer organization deploying dozens of times a day, and the right level of DevOps investment should reflect that.",
};

export const devopsServices = [
  { title: "DevOps Consulting", desc: "Assessment and advisory work evaluating your current development and deployment process, infrastructure, and team structure, producing a concrete recommendation grounded in your actual constraints rather than a generic best-practices checklist." },
  { title: "DevOps Implementation", desc: "Hands-on implementation of CI/CD pipelines, infrastructure as code, containerization, and monitoring — building the actual systems, not just recommending them." },
  { title: "CI/CD Pipeline Development", desc: "Building the automated build, test, and deployment pipeline that takes code from a developer's commit to production reliably, covered in technical depth below." },
  { title: "DevOps Automation", desc: "Automating manual, repetitive operational tasks — deployment steps, environment provisioning, routine maintenance — that currently consume engineering time and introduce human error risk." },
  { title: "Cloud DevOps", desc: "Applying DevOps practices specifically within cloud infrastructure, including cloud-native CI/CD, managed Kubernetes, and cloud-specific monitoring and cost management." },
  { title: "Infrastructure as Code", desc: "Defining infrastructure through version-controlled configuration (commonly Terraform, sometimes alongside configuration management tools like Ansible) so infrastructure changes are reviewable, repeatable, and auditable." },
  { title: "Containerization", desc: "Packaging applications into containers (typically Docker) for consistent behavior across development, staging, and production environments — a foundational practice for most modern deployment pipelines." },
  { title: "Kubernetes Consulting", desc: "Evaluating whether Kubernetes genuinely fits your orchestration needs, and if so, implementing and operating it — or recommending a simpler container platform where Kubernetes's operational complexity isn't justified by your actual scale." },
  { title: "Docker Implementation", desc: "Building container images, establishing image build and registry practices, and integrating containerization into your development and deployment workflow." },
  { title: "Infrastructure Automation", desc: "Automating infrastructure provisioning and configuration so environments can be created, modified, and torn down reliably without manual intervention." },
  { title: "Deployment Automation", desc: "Automating the actual release process — build, test, deploy, and rollback if needed — reducing the manual coordination that makes releases slow and risky." },
  { title: "Release Management", desc: "Establishing the processes around when and how changes go to production — release approvals, versioning, and coordination across teams for larger or more complex releases." },
  { title: "DevSecOps", desc: "Integrating security scanning, secrets management, and access control throughout the development and deployment lifecycle rather than treating security as a final pre-release gate." },
  { title: "Cloud Infrastructure Management", desc: "Ongoing management of cloud infrastructure — provisioning, scaling, cost monitoring, and maintenance — for businesses that need continued operational support beyond initial setup." },
  { title: "Monitoring & Observability", desc: "Building the metrics, logging, and tracing infrastructure that gives real visibility into application and infrastructure behavior in production." },
  { title: "Logging & Distributed Tracing", desc: "Centralized, searchable logging and request tracing across distributed systems — particularly important once an application spans multiple services." },
  { title: "Performance Optimization", desc: "Identifying and addressing infrastructure and application-level performance bottlenecks using production monitoring data, not guesswork." },
  { title: "High Availability", desc: "Architecture and operational practices that keep systems running reliably despite individual component failures." },
  { title: "Disaster Recovery", desc: "Backup and recovery planning appropriate to your specific data sensitivity and acceptable downtime." },
  { title: "DevOps Migration", desc: "Moving an existing manual or partially automated release process to a modern CI/CD and infrastructure-as-code workflow, assessed and executed incrementally rather than as a single disruptive change." },
  { title: "DevOps Managed Services", desc: "Ongoing operational support for teams that want continued DevOps expertise without building a full internal platform team — monitoring, incident response support, and continued infrastructure evolution." },
];

export const cicdSection = {
  title: "CI/CD: Technical Depth",
  definition:
    "CI/CD stands for continuous integration and continuous delivery (or deployment) — the practice of automating the process of integrating code changes, testing them, and releasing them to production, so that shipping software becomes a routine, low-risk, frequent activity rather than a rare, high-stakes event.",
  workflow: "Developer → Git Repository → Pull Request → Automated Tests → Build → Security Checks → Artifact → Staging → Validation → Production Deployment → Monitoring → Rollback if required",
  components: [
    "Source control — the version-controlled repository where code changes are tracked, almost universally Git-based today",
    "Code review — human review of proposed changes before they merge, catching issues automation alone won't catch",
    "Automated testing — unit, integration, and sometimes end-to-end tests run automatically on every change",
    "Build automation — compiling and packaging the application consistently and repeatably",
    "Artifact management — storing built artifacts (container images, compiled binaries) in a versioned, retrievable way",
    "Security scanning — automated checks for known vulnerabilities in code and dependencies",
    "Deployment — actually releasing the built artifact to a target environment",
    "Environment management — ensuring staging and production environments are configured consistently",
    "Rollback — the ability to quickly revert to a previous working version if a deployment causes problems",
    "Release approvals — for changes that warrant human sign-off before reaching production",
    "Monitoring — post-deployment visibility into whether the release is actually behaving correctly in production",
  ],
  closing:
    "CI/CD reduces deployment friction, but it doesn't eliminate the need for testing, observability, security, and release governance — it makes these practices faster and more consistent to execute, not optional.",
};

export const iacSection = {
  title: "Infrastructure as Code",
  definition:
    "Infrastructure as code (IaC) means defining and managing infrastructure — servers, networks, databases, and other cloud resources — through version-controlled configuration files rather than manual changes made through a cloud provider's console.",
  whyMatters: [
    "Infrastructure version control — every infrastructure change is tracked, reviewable, and revertible, just like application code",
    "Repeatable environments — the same configuration can reliably produce an identical environment",
    "Provisioning — new infrastructure can be created predictably and quickly rather than through manual, undocumented steps",
    "Infrastructure drift — a real and common problem where actual infrastructure gradually diverges from its documented or intended state through untracked manual changes",
    "Reusable modules — common infrastructure patterns can be defined once and reused across projects or environments",
    "Environment management — development, staging, and production environments can be defined consistently",
    "State management — IaC tools need to track the actual current state of provisioned infrastructure",
    "Review workflows — infrastructure changes go through the same pull-request review process as application code",
  ],
  terraformNote:
    "Terraform is widely used for infrastructure provisioning and state management across multiple cloud providers, with a large ecosystem of reusable modules. Cloud-provider-native IaC tools offer tighter integration with a single provider's services at the cost of portability. Configuration management tools like Ansible are often used alongside provisioning tools — Terraform to provision the infrastructure itself, Ansible to configure software and settings on top of that infrastructure.",
  closing:
    "Infrastructure should be treated as code wherever it's practical to do so — the main exception is very small, rarely-changing infrastructure where the overhead of IaC tooling genuinely isn't justified by the benefit.",
};

export const containersKubernetes = {
  title: "Containers + Kubernetes",
  docker: [
    "Docker — the most widely used tool for building and running containers, packaging an application with its dependencies into a portable, consistent unit",
    "Container images — the packaged, versioned artifact containing an application and everything it needs to run",
    "Registries — where built container images are stored and retrieved from during deployment",
  ],
  k8s: [
    "Pods — the smallest deployable unit in Kubernetes, typically wrapping one or more tightly coupled containers",
    "Deployments — Kubernetes objects managing how pods are created, updated, and scaled",
    "Services — stable networking endpoints that let other parts of the system reliably reach a set of pods",
    "Ingress — managing external access to services within the cluster, typically HTTP/HTTPS routing",
    "Configuration and secrets — Kubernetes-native mechanisms for injecting configuration and sensitive values into running containers",
    "Autoscaling — automatically adjusting the number of running pods based on load",
    "Health checks — Kubernetes-native mechanisms for detecting and automatically restarting unhealthy containers",
  ],
  whenK8sMakesSense:
    "Genuinely complex orchestration requirements — many services that need to scale independently, sophisticated deployment strategies, multi-team environments needing strong workload isolation, or infrastructure that needs to run consistently across multiple cloud providers or on-premise and cloud simultaneously.",
  whenSimpler:
    "Kubernetes introduces real, ongoing operational complexity — cluster management, networking configuration, and a genuine learning curve for teams new to it. For a small number of services with straightforward scaling needs, managed container platforms that abstract away most of Kubernetes's complexity can deliver most of the practical benefit with substantially less operational burden. We do not imply every business needs Kubernetes.",
};

export const devsecopsSection = {
  title: "DevSecOps",
  intro:
    "DevSecOps means integrating security throughout the development and deployment lifecycle, rather than treating security as a final gate before release. Security issues caught late — after code is written, tested, and nearly ready to ship — are more expensive and disruptive to fix than issues caught early.",
  practices: [
    "Security scanning — automated checks for known vulnerabilities integrated directly into the CI/CD pipeline",
    "Dependency scanning — checking third-party libraries and packages for known vulnerabilities before they're deployed",
    "Container image scanning — checking container images for vulnerabilities in their base layers and installed packages",
    "Secrets detection — automated scanning to catch accidentally committed credentials or API keys before they reach a shared repository",
    "IAM (identity and access management) — controlling who and what can access infrastructure and deployment systems",
    "Least privilege — granting only the specific access needed, applied consistently across both human users and automated systems",
    "Vulnerability management — an ongoing process for tracking and remediating discovered vulnerabilities",
    "Infrastructure security — network configuration, access controls, and encryption applied to the infrastructure the pipeline deploys to",
    "Secure CI/CD — protecting the pipeline itself, since a compromised CI/CD system can be used to inject malicious code directly into production",
    "Audit logging — traceable records of who changed what, when, across both code and infrastructure",
    "Compliance considerations — depending on your industry, specific regulatory requirements may shape pipeline and infrastructure security requirements",
  ],
  disclaimer:
    "We don't claim specific compliance certifications unless independently verified for a given engagement.",
};

export const cloudDevopsSection = {
  title: "Cloud DevOps",
  intro:
    "DevOps practices apply across cloud providers, with some platform-specific tooling and considerations. AWS, Azure, and Google Cloud each provide native CI/CD tooling, managed Kubernetes services, and infrastructure automation support.",
  cloudLink: {
    before: "For a deeper look at platform-specific architecture decisions — which provider fits your organization, and why — our dedicated ",
    text: "Cloud Solutions",
    href: etPath("cloud-solutions"),
    after: " page covers cloud architecture and platform selection in depth; this page focuses specifically on the DevOps practices layered on top of whichever cloud infrastructure you're running.",
  },
  concepts: [
    "Cloud infrastructure — the compute, storage, and networking resources DevOps automation ultimately provisions and manages",
    "IAM — cloud-native identity and access management, central to both operational security and DevSecOps practices",
    "Managed Kubernetes — cloud-provider-operated Kubernetes services that reduce (though don't eliminate) the operational burden of running Kubernetes yourself",
    "Serverless deployments — deploying event-driven or variable-load functionality without managing underlying servers",
    "Cloud monitoring — provider-native and third-party observability tooling for cloud infrastructure and applications",
    "Autoscaling — cloud-native mechanisms for automatically adjusting infrastructure capacity based on demand",
    "Cloud cost optimization — an ongoing DevOps responsibility, since infrastructure automation directly affects how efficiently cloud resources are actually used",
  ],
  closing:
    "No cloud provider is universally superior for DevOps tooling — each has mature CI/CD and infrastructure automation support, and the right choice depends on your existing cloud provider relationship, team expertise, and specific service requirements.",
};

export const observabilitySection = {
  title: "Observability",
  intro:
    "Monitoring means tracking predefined metrics and alerting when they cross known thresholds. Observability is the broader capability to understand a system's internal state from its external outputs (metrics, logs, and traces) well enough to investigate and diagnose problems you didn't specifically anticipate in advance.",
  components: [
    "Metrics — numerical measurements over time (request rate, error rate, latency, resource usage)",
    "Logs — timestamped records of discrete events, useful for detailed investigation",
    "Traces — records following a single request's path through a distributed system",
    "Alerts — automated notifications when metrics or conditions indicate a problem",
    "Dashboards — visual summaries of system health for at-a-glance monitoring",
    "Application performance monitoring — tracking application-level behavior and performance specifically",
    "Infrastructure monitoring — tracking the health of underlying servers, containers, and cloud resources",
    "Incident detection — the process of identifying that something has actually gone wrong, ideally before customers report it",
    "Incident response — the process of investigating, mitigating, and resolving an active issue",
  ],
  closing:
    "Observability investment should scale with architectural complexity — a simple application with a handful of components needs meaningfully less observability infrastructure than a system spanning dozens of microservices.",
};

export const haDrSection = {
  title: "High Availability + Disaster Recovery",
  intro:
    "High availability and disaster recovery are related but distinct concerns: high availability aims to keep a system running through individual component failures; disaster recovery is the plan for restoring service and data after a more significant incident that availability measures alone couldn't prevent.",
  practices: [
    "Redundancy — running multiple instances of critical components so a single failure doesn't take down the whole system",
    "Load balancing — distributing traffic across healthy instances, and away from failed ones",
    "Health checks — automated detection of unhealthy instances so traffic can be routed away from them",
    "Failover — automatically shifting traffic or workload to healthy infrastructure when a failure is detected",
    "Backups — regular, tested copies of data that can be restored if data is lost or corrupted",
    "Disaster recovery — the broader plan and infrastructure for restoring service after a significant incident",
    "Recovery Point Objective (RPO) — how much data loss is acceptable, measured in time",
    "Recovery Time Objective (RTO) — how quickly service needs to be restored after an incident",
    "Multi-zone architecture — distributing infrastructure across multiple availability zones within a region",
    "Multi-region architecture — distributing infrastructure across multiple geographic regions, protecting against a full regional outage at meaningfully higher cost and complexity",
  ],
  closing:
    "Availability architecture should match business requirements and cost constraints — not every application needs multi-region, always-on infrastructure. We help determine your actual RPO/RTO requirements before recommending availability architecture.",
};

export const deploymentStrategies = {
  title: "Deployment Strategies",
  intro: "Different deployment strategies trade off risk, cost, complexity, and rollback speed differently:",
  rows: [
    { strategy: "Recreate", desc: "Old version stopped entirely, new version started", risk: "Highest — brief full downtime during switch", cost: "Lowest", complexity: "Lowest", rollback: "Requires redeploying old version", speed: "Fastest", traffic: "None" },
    { strategy: "Rolling", desc: "New version gradually replaces old version instance by instance", risk: "Moderate — partial exposure during rollout", cost: "Low", complexity: "Moderate", rollback: "Can be slow — requires rolling back gradually", speed: "Moderate", traffic: "Limited" },
    { strategy: "Blue-Green", desc: "Full new environment deployed alongside old, then traffic switched", risk: "Lower — instant switch, old environment stays available", cost: "Higher — running two full environments temporarily", complexity: "Moderate", rollback: "Very fast — switch traffic back to blue", speed: "Fast (once green is validated)", traffic: "Binary — all traffic on one environment or the other" },
    { strategy: "Canary", desc: "New version released to a small subset of traffic first, gradually increased", risk: "Lowest — issues affect only a small fraction of users", cost: "Moderate — some duplicate capacity during rollout", complexity: "Highest — requires traffic-splitting infrastructure", rollback: "Fast — reduce canary traffic to zero", speed: "Slower — gradual by design", traffic: "Fine-grained, gradual" },
  ],
  closing:
    "Recreate deployments suit non-critical applications where brief downtime is genuinely acceptable. Rolling deployments are a reasonable default for most applications needing zero-downtime releases. Blue-green deployments suit applications where fast, reliable rollback matters more than infrastructure cost. Canary deployments suit applications where minimizing the blast radius of a bad release is the top priority.",
};

export const devopsEvaluation = {
  title: "How We Evaluate a DevOps Environment",
  intro: "A professional DevOps assessment works through a defined set of questions, not a generic checklist:",
  questions: [
    "Application architecture — monolith, microservices, or somewhere in between, and what that implies for deployment complexity",
    "Deployment frequency — how often the team actually needs (or wants) to ship changes",
    "Team structure — how many teams are involved in shipping code, and whether they need independent deployment capability",
    "Infrastructure — current infrastructure, whether cloud, on-premise, or hybrid",
    "Environments — how many environments exist and how consistently they're currently configured",
    "CI/CD requirements — what level of automation genuinely fits the team's current process and near-term needs",
    "Security — what security requirements apply to the pipeline and infrastructure",
    "Observability — what visibility the team currently has, and what's genuinely missing",
    "Cloud platform — which provider(s) are in use or being considered, and why",
    "Database deployment — how database schema and data changes are handled as part of releases",
    "Rollback requirements — how quickly the team needs to be able to revert a bad release",
    "Release strategy — what deployment strategy actually fits the application's risk tolerance and traffic patterns",
    "Availability — actual RPO/RTO requirements, not assumed maximum redundancy",
    "Disaster recovery — what's genuinely at stake if a significant incident occurs",
    "Infrastructure costs — current spend and where it's going",
    "Compliance — any regulatory context shaping security, audit, or data handling requirements",
    "Operational maturity — how much automation, monitoring, and process discipline the team currently has",
  ],
  closing: "This assessment determines the recommended tooling and process — not the other way around.",
};

export const architectureDecisions = {
  title: "DevOps Architecture Decisions We Consider",
  decisions: [
    { title: "Containers vs. Virtual Machines", body: "Containers are lighter, start faster, and package dependencies consistently, making them well suited to applications needing frequent deployment. Virtual machines offer stronger isolation and remain appropriate for workloads with specific compliance or isolation requirements, or legacy applications not easily containerized." },
    { title: "Kubernetes vs. Simpler Container Platforms", body: "Kubernetes is powerful for complex orchestration but introduces real operational complexity. For smaller-scale containerized workloads, managed container platforms that abstract away much of this complexity can deliver comparable practical benefit with substantially less operational overhead." },
    { title: "Terraform vs. Ansible", body: "Terraform is commonly used for infrastructure provisioning and state management — defining and creating the actual cloud resources. Ansible is often used for configuration management — installing software and applying configuration on infrastructure that already exists. These tools frequently work together rather than compete." },
    { title: "Jenkins vs. GitHub Actions / GitLab CI", body: "Jenkins is a mature, highly flexible, self-hosted CI/CD platform but requires more ongoing maintenance. GitHub Actions and GitLab CI are tightly integrated with their respective source control platforms and require less operational overhead. The right choice depends on your existing source control platform and appetite for managing CI/CD infrastructure yourself." },
    { title: "Blue-Green vs. Canary Deployment", body: "Blue-green deployment offers fast, reliable rollback by keeping the previous environment available, at the cost of running duplicate infrastructure temporarily. Canary deployment minimizes the blast radius of a bad release by exposing it to a small fraction of traffic first, at the cost of more complex traffic-routing infrastructure." },
    { title: "Monolith vs. Microservices", body: "DevOps does not require microservices. A well-built CI/CD pipeline, infrastructure as code, and monitoring can serve a monolithic application just as effectively as a microservices architecture — and for smaller teams and applications, a monolith is often genuinely easier to deploy, test, and operate reliably." },
  ],
};

export const cicdMistakes = {
  title: "Common CI/CD Pipeline Mistakes",
  mistakes: [
    "Skipping tests to move faster — undermining the actual value of CI/CD, which is fast and reliable releases, not just fast ones",
    "No staging environment, or one that doesn't match production — testing in an environment that doesn't actually predict production behavior",
    "Manual steps hidden inside an otherwise automated pipeline — a pipeline that's automated except for one manual approval step nobody remembers to complete promptly",
    "No rollback plan — building deployment automation without equally investing in reliable rollback",
    "Overly complex pipelines maintained by one person — pipeline logic that only one team member understands",
    "Ignoring pipeline security — not scanning dependencies, container images, or code for vulnerabilities as part of the pipeline itself",
    "Treating pipeline configuration as an afterthought — not applying the same code review discipline to pipeline configuration as to application code",
  ],
};

export const whenKubernetes = {
  title: "When Kubernetes Is Actually Necessary",
  justified: [
    "You're running enough distinct services that manual orchestration becomes impractical",
    "Different services need to scale independently based on different load patterns",
    "You need workload isolation across multiple teams sharing infrastructure",
    "You need consistent deployment across multiple cloud providers or hybrid on-premise/cloud environments",
    "Your team has (or is investing in) the operational expertise to run and maintain a Kubernetes environment reliably",
  ],
  overEngineering: [
    "You're running a small number of services with straightforward, predictable scaling needs",
    "Your team doesn't have Kubernetes expertise and adopting it would mean a steep, ongoing learning curve without a correspondingly clear benefit",
    "A managed container platform or simpler deployment model would meet your actual requirements with less operational overhead",
  ],
  closing:
    "We evaluate this honestly during the assessment phase rather than defaulting to Kubernetes because it's the most widely discussed orchestration platform.",
};

export const deploymentAutomation = {
  title: "How We Approach Deployment Automation",
  body:
    "Deployment automation should target the actual steps currently consuming manual time and introducing risk — not automate for its own sake. Our approach typically starts with mapping the current manual release process end to end, identifying which steps are genuinely repetitive and automatable versus which require ongoing human judgment, and then building automation incrementally, validating each stage before adding the next. We prioritize automating the steps most prone to human error or most time-consuming first, rather than attempting a complete pipeline rebuild in one pass.",
};

export const devopsSecurity = {
  title: "How We Think About DevOps Security",
  body:
    "Security in a DevOps context means treating security checks as part of the pipeline, not a separate process bolted on afterward. This means: dependency and container scanning integrated directly into CI/CD, secrets never committed to source control and instead managed through dedicated secrets management tooling, access to production infrastructure and deployment systems scoped to least privilege, and audit logging covering both code changes and infrastructure changes. We evaluate security requirements as part of the initial assessment, factoring in your specific data sensitivity and any relevant regulatory context.",
};

export const cloudCostDevops = {
  title: "How We Approach Cloud Cost Optimization",
  body:
    "Cloud cost, in a DevOps context, is directly connected to infrastructure automation quality — over-provisioned resources, forgotten unused infrastructure, and inefficient autoscaling configuration are common outcomes of infrastructure that isn't managed as code and reviewed regularly. Our approach typically involves auditing actual usage against provisioned capacity, right-sizing resources to match real usage, ensuring autoscaling is configured to actually scale down during low-traffic periods, and treating cost as an ongoing metric monitored alongside performance.",
  cloudLink: {
    before: "For a broader look at cloud cost strategy beyond the DevOps automation layer, our ",
    text: "Cloud Solutions",
    href: etPath("cloud-solutions"),
    after: " page covers cloud cost optimization in more depth.",
  },
};

export const iacChallenges = {
  title: "Common Infrastructure Automation Challenges",
  challenges: [
    "Infrastructure drift — actual infrastructure diverging from its IaC definition through untracked manual changes",
    "State file management — for tools like Terraform, managing shared state safely across a team without conflicts or corruption",
    "Secrets in infrastructure code — a common early mistake, since infrastructure code needs the same secrets-management discipline as application code",
    "Overly monolithic infrastructure definitions — infrastructure code that's hard to review or modify safely because it's not appropriately modularized",
    "Inadequate testing of infrastructure changes — applying infrastructure changes directly to production without a staging validation step",
  ],
};

export const devopsProcess: { step: string; title: string; why: string; decisions: string }[] = [
  { step: "01", title: "DevOps Assessment", why: "Recommendations need to be grounded in your actual situation, not a generic template.", decisions: "Scope and priority of the engagement." },
  { step: "02", title: "Architecture Review", why: "CI/CD and infrastructure decisions depend heavily on whether you're deploying a monolith, a handful of services, or a large microservices system.", decisions: "Whether architectural changes are needed alongside DevOps improvements." },
  { step: "03", title: "Infrastructure Planning", why: "Infrastructure decisions are expensive to reverse later.", decisions: "Cloud provider, compute model, and core infrastructure components." },
  { step: "04", title: "CI/CD Strategy", why: "An over-engineered pipeline wastes effort; an under-engineered one won't scale with the team.", decisions: "CI/CD platform and pipeline stages." },
  { step: "05", title: "Infrastructure as Code", why: "This is the foundation for repeatable, auditable infrastructure.", decisions: "IaC tooling and module structure." },
  { step: "06", title: "Automation", why: "This is where manual toil actually gets eliminated.", decisions: "What gets automated first, based on impact and risk." },
  { step: "07", title: "Security Integration", why: "Security addressed here is far cheaper than security addressed after an incident.", decisions: "Scanning tools and security gates in the pipeline." },
  { step: "08", title: "Monitoring & Observability", why: "You need visibility into whether the new pipeline and infrastructure are actually working well in production.", decisions: "Observability tooling and what to alert on." },
  { step: "09", title: "Deployment Strategy", why: "This directly determines release risk and rollback speed.", decisions: "Deployment strategy and rollback procedures." },
  { step: "10", title: "Testing", why: "Catching pipeline issues here is far better than discovering them during a real release.", decisions: "Go/no-go for production rollout." },
  { step: "11", title: "Production Rollout", why: "A phased rollout limits risk and lets the team adjust to the new workflow.", decisions: "Rollout sequencing and timeline." },
  { step: "12", title: "Optimization", why: "The initial implementation is a starting point, not a final state — usage reveals what actually needs further attention.", decisions: "Ongoing priorities based on real operational data." },
];

export const commonChallenges = [
  "Manual deployments — addressed through incremental deployment automation, starting with the highest-risk manual steps",
  "Inconsistent environments — addressed through infrastructure as code, ensuring environments are defined consistently",
  "Slow release cycles — addressed through CI/CD automation that removes manual bottlenecks from the release process",
  "Deployment failures — addressed through better testing, staging environments that genuinely match production, and reliable rollback procedures",
  "Infrastructure drift — addressed through disciplined infrastructure-as-code practices and periodic drift detection",
  "Lack of monitoring — addressed through building observability infrastructure appropriate to the application's actual complexity",
  "Security gaps — addressed through integrating security scanning and access controls throughout the pipeline",
  "Poor rollback strategy — addressed through deployment strategies and tooling specifically designed for fast, reliable rollback",
  "Cloud cost growth — addressed through regular usage audits, right-sizing, and treating cost as an ongoing operational metric",
  "Overcomplicated Kubernetes environments — addressed through honest assessment of whether Kubernetes's complexity is actually justified by current scale",
  "Fragile CI/CD pipelines — addressed through modular, well-tested pipeline configuration reviewed with the same discipline as application code",
  "Insufficient testing — addressed through appropriately layered automated testing integrated directly into the pipeline",
];

export const devopsCost = {
  title: "DevOps Services Cost",
  intro: "There's no fixed price — cost depends on your infrastructure size, cloud provider, application complexity, and how much of your current process is already automated versus needing to be built from scratch. Key factors:",
  factors: [
    "Infrastructure size — the scale and number of environments and services involved",
    "Cloud provider — different providers have different pricing structures and tooling costs",
    "Application complexity — monolith vs. microservices significantly affects pipeline and infrastructure complexity",
    "Number of environments — more environments generally means more infrastructure and configuration",
    "CI/CD complexity — the number of pipeline stages, testing requirements, and deployment strategy sophistication",
    "Kubernetes requirements — Kubernetes implementations generally involve more upfront and ongoing investment than simpler container platforms",
    "Monitoring — the scope of observability infrastructure needed, which scales with architectural complexity",
    "Security — the depth of security scanning and access control implementation required",
    "Compliance — specific regulatory requirements can add scope and cost",
    "Automation scope — how much of the current manual process needs to be automated",
    "Migration requirements — moving from an existing process to a modern DevOps workflow adds transition cost",
    "Support model — one-time implementation versus ongoing managed DevOps services carry different cost structures",
    "Team size — larger teams generally need more sophisticated coordination and access control in the pipeline",
    "Deployment frequency — teams deploying many times daily generally need more mature automation than teams deploying weekly",
  ],
  closing:
    "DevOps cost should be evaluated against operational efficiency, reliability, deployment speed, and infrastructure utilization — not purely against upfront implementation cost. We don't provide fabricated ROI figures — actual value depends on your specific current process and team size.",
};

export const usaSection = {
  title: "DevOps Services for USA Businesses",
  body: "We work with businesses across the United States on DevOps consulting and implementation — serving as a DevOps services company for organizations ranging from startups building their first CI/CD pipeline to enterprises modernizing complex, multi-team deployment infrastructure. DevOps consulting services in the USA context often involve integration with common US enterprise cloud and tooling ecosystems, and specific considerations around data residency or compliance depending on industry. As an enterprise DevOps services provider serving the USA, our team works remotely with distributed engineering teams throughout assessment, implementation, and ongoing support.",
};

export const canadaSection = {
  title: "DevOps Services for Canadian Businesses",
  body: "We also support Canadian businesses with DevOps consulting, CI/CD implementation, and cloud automation. Canadian organizations sometimes have specific data residency considerations affecting infrastructure and pipeline architecture, which we factor in where relevant. As a DevOps consulting company serving Canada, we work remotely with Canadian engineering teams throughout assessment, implementation, and ongoing managed DevOps support, applying the same engineering-led evaluation approach as with our US engagements.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "Engineering-led recommendations", desc: "DevOps architecture grounded in your actual deployment frequency, team structure, and infrastructure, not a default toolchain" },
  { icon: Layers, title: "Balanced tool evaluation", desc: "Genuine trade-off assessment across Terraform/Ansible, Jenkins/GitHub Actions, Kubernetes/simpler alternatives, based on your specific situation" },
  { icon: GitBranch, title: "Full pipeline capability", desc: "From CI/CD and infrastructure as code through containerization, monitoring, and security integration" },
  { icon: Shield, title: "Security integrated throughout", desc: "DevSecOps practices built into the pipeline from the start, not added as an afterthought" },
  { icon: Container, title: "Honest scope recommendations", desc: "Including telling you when Kubernetes, microservices, or additional infrastructure investment genuinely isn't justified by your current scale" },
  { icon: Cloud, title: "Cloud-provider-agnostic evaluation", desc: "Recommendations based on your specific requirements, not a single-provider default" },
  { icon: Activity, title: "Ongoing operational partnership", desc: "Available for continued managed DevOps support, not just a one-time implementation" },
];

export const devopsFaqs = [
  { q: "What are DevOps services?", a: "DevOps services cover the practices, tooling, and infrastructure connecting software development and operations into a faster, more reliable release process — including CI/CD pipeline development, infrastructure as code, containerization, monitoring and observability, and security integration throughout the development lifecycle. Scope ranges from initial consulting and assessment to full implementation and ongoing managed support." },
  { q: "What does a DevOps engineer do?", a: "A DevOps engineer builds and maintains the automation, infrastructure, and tooling that let development teams ship code reliably and frequently — writing infrastructure-as-code, building CI/CD pipelines, configuring monitoring and alerting, and working with development teams to reduce release friction. It combines software engineering and systems/operations expertise rather than being a purely operational role." },
  { q: "What does a DevOps consulting company do?", a: "A DevOps consulting company assesses a business's current development and deployment process, infrastructure, and team structure, then recommends and implements appropriate CI/CD, infrastructure as code, containerization, security, and monitoring practices — grounded in the business's actual deployment frequency and operational maturity, not a generic best-practices template." },
  { q: "How does DevOps improve software development?", a: "DevOps improves software development by automating the build, test, and deployment process, reducing manual effort and human error in releases, catching issues earlier through automated testing and security scanning, and providing better visibility into production behavior through monitoring — collectively enabling faster, more reliable, and more frequent releases." },
  { q: "What is CI/CD?", a: "CI/CD stands for continuous integration and continuous delivery or deployment — the practice of automating the process of integrating code changes, testing them, and releasing them to production. It typically flows through source control, automated testing, build, security checks, staging validation, and production deployment, with monitoring and rollback capability at the end." },
  { q: "What is DevOps automation?", a: "DevOps automation is the practice of automating manual, repetitive operational tasks — deployment steps, environment provisioning, routine maintenance, and testing — that otherwise consume engineering time and introduce human error risk. Automation should target the actual steps currently causing friction, not be applied indiscriminately." },
  { q: "How does DevOps reduce deployment time?", a: "DevOps reduces deployment time by automating manual steps (testing, building, deploying) that previously required human coordination, using deployment strategies (rolling, blue-green, canary) that minimize risk without requiring lengthy manual validation, and maintaining infrastructure as code so environments can be provisioned quickly and consistently rather than manually configured each time." },
  { q: "How much do DevOps services cost?", a: "Cost depends on infrastructure size, cloud provider, application complexity, number of environments, CI/CD and Kubernetes requirements, monitoring scope, security and compliance requirements, and whether the engagement is a one-time implementation or ongoing managed service. There's no fixed price — actual cost depends on your specific current process and requirements, confirmed through assessment." },
  { q: "How long does DevOps implementation take?", a: "Timeline depends on your starting point (fully manual process vs. partially automated), infrastructure complexity, and scope (a single CI/CD pipeline vs. a full infrastructure-as-code and observability overhaul). A realistic timeline is established during the assessment and architecture review phases specific to your environment, not estimated generically beforehand." },
  { q: "What is infrastructure as code?", a: "Infrastructure as code (IaC) means defining and managing infrastructure through version-controlled configuration files rather than manual changes made through a cloud console, enabling repeatable environments, reviewable infrastructure changes, and prevention of infrastructure drift. Terraform is a commonly used tool for this, often alongside configuration management tools like Ansible." },
  { q: "What is DevSecOps?", a: "DevSecOps means integrating security practices — scanning, secrets management, access control, and audit logging — throughout the development and deployment lifecycle, rather than treating security as a final gate before release. This catches security issues earlier, when they're cheaper and less disruptive to fix." },
  { q: "What is Kubernetes used for?", a: "Kubernetes is used for orchestrating containerized applications at scale — managing how containers are deployed, scaled, networked, and kept healthy across a cluster of machines. It's particularly valuable for complex environments with many services needing independent scaling, though it introduces real operational complexity not justified for every deployment." },
  { q: "Docker vs. Kubernetes — what's the difference?", a: "Docker is a tool for building and running individual containers. Kubernetes is an orchestration platform for managing many containers across a cluster — scheduling, scaling, networking, and health-checking them. They're complementary, not competing: Kubernetes typically runs and manages containers built with Docker (or a compatible tool)." },
  { q: "Terraform vs. Ansible — which should I use?", a: "Terraform is commonly used for infrastructure provisioning and state management — creating and tracking cloud resources. Ansible is often used for configuration management — installing software and applying configuration on infrastructure that already exists. Many teams use both together rather than choosing one over the other, with the right combination depending on your specific infrastructure." },
  { q: "Jenkins vs. GitHub Actions — which is better?", a: "Neither is universally better. Jenkins is a mature, flexible, self-hosted platform requiring more ongoing maintenance. GitHub Actions integrates tightly with GitHub and requires less operational overhead since it's a managed service. The right choice depends on your existing source control platform, team familiarity, and appetite for managing CI/CD infrastructure yourself." },
  { q: "How do you secure a DevOps pipeline?", a: "Securing a DevOps pipeline involves integrating dependency and container image scanning into CI/CD, using dedicated secrets management rather than committing credentials to source control, applying least-privilege access to deployment systems and infrastructure, and maintaining audit logs covering both code and infrastructure changes." },
  { q: "How do you monitor cloud applications?", a: "Cloud applications are monitored through metrics (numerical measurements over time), logs (detailed event records), and traces (tracking requests across distributed services), combined with dashboards and automated alerting. The right level of observability investment scales with architectural complexity — a simple application needs less infrastructure than a system spanning many microservices." },
  { q: "What is observability, and how is it different from monitoring?", a: "Monitoring tracks predefined metrics and alerts on known thresholds. Observability is the broader capability to understand a system's internal state from its outputs well enough to diagnose problems you didn't specifically anticipate in advance, combining metrics, logs, and traces — particularly important for distributed or microservices-based applications." },
  { q: "Can US and Canadian businesses hire your DevOps team?", a: "Yes, we work with businesses across the United States and Canada on DevOps consulting and implementation, including startups setting up CI/CD for the first time and enterprises modernizing complex deployment infrastructure. Projects are scoped around each business's actual deployment process and team structure, with remote collaboration throughout assessment, implementation, and ongoing support." },
  { q: "How do you migrate an existing application to a DevOps workflow?", a: "Migrating to a DevOps workflow starts with an assessment of your current manual process, followed by incremental automation — typically starting with the highest-risk or most time-consuming manual steps rather than attempting a complete pipeline rebuild at once. This lets a team validate and build trust in each stage of automation before depending on it fully for production releases." },
];

export const finalCta = {
  headline: "Let's Discuss Your DevOps Infrastructure",
  body: "Whether you're setting up CI/CD for the first time, evaluating whether Kubernetes actually fits your scale, modernizing a fragile deployment process, or building out observability and security practices for a growing engineering team, we can help you think through the real trade-offs before committing to a specific toolchain.",
  steps: [
    "Discuss your current development and deployment process",
    "Assess your infrastructure, team structure, and pain points",
    "Evaluate tooling and architecture options against your actual requirements",
    "Define an implementation plan and timeline",
    "Build, test, and roll out incrementally",
    "Monitor and continue optimizing",
  ],
  crossLinks: [
    { before: "For businesses building or scaling the software product these DevOps practices support, our ", text: "Software Product Development", href: "/services/software-development/software-product-development", after: " and " },
    { before: "", text: "Dedicated Development Team", href: "/services/software-development/dedicated-development-team", after: " services can support the application engineering layer alongside our DevOps work. If your DevOps needs are tied to a specific cloud migration or architecture decision, our " },
    { before: "", text: "Cloud Solutions", href: etPath("cloud-solutions"), after: " team covers that in more depth, and for SaaS products specifically, our " },
    { before: "", text: "SaaS Development", href: etPath("saas-development"), after: " service covers the product engineering layer that typically depends on solid DevOps foundations." },
  ],
  primaryCta: "Talk to a DevOps Engineer",
  secondaryCta: "Discuss Your Cloud & DevOps Project",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
