import type { LucideIcon } from "lucide-react";
import {
  Zap,
  Shield,
  MessageSquare,
  UserCheck,
  Workflow,
  LifeBuoy,
  Lock,
  Settings,
  Clock,
  Puzzle,
  Building2,
  Rocket,
  Monitor,
  Smartphone,
  Bot,
  Cloud,
  BarChart3,
  Handshake,
  Server,
  Compass,
  TestTube2,
  TrendingUp,
  DollarSign,
  Cog,
  LineChart,
  Layers,
  Heart,
  UsersRound,
  FileKey,
  GitBranch,
  FlaskConical,
  Search,
  FileText,
  PenTool,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import { getServicePath } from "./services-menu";

export const heroContent = {
  h1: "Enterprise Software Development That Turns Complexity Into Competitive Advantage",
  supporting:
    "The Runner Software Solutions helps enterprises, SMEs, and fast-growing startups design, build, and scale custom software that solves real operational challenges. From enterprise applications and AI development to cloud solutions and ERP/CRM systems, our teams engineer software built for security, performance, and long-term growth — not just launch day.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "View Our Work",
  trustLine: "Trusted by Growing Businesses Worldwide",
  metrics: [
    { value: "10+", label: "Years in Software Engineering" },
    { value: "200+", label: "Projects Delivered Globally" },
    { value: "50+", label: "Dedicated Engineers & Architects" },
    { value: "95%", label: "Client Retention Rate" },
  ],
  securityChips: [
    { icon: "🔒", title: "Security-First Development", desc: "Secure coding, code review, and infrastructure hardening built into every sprint" },
    { icon: "⚙️", title: "Built to Scale", desc: "Architecture designed for growth in users, data, and transaction volume" },
    { icon: "🕒", title: "Long-Term Support", desc: "Dedicated post-launch maintenance and monitoring" },
  ],
  enterpriseTrust: ["Agile Delivery", "Dedicated Teams", "Transparent Reporting", "Enterprise-Grade Security Practices"],
};

export const whyChooseUs = {
  headline: "Why Businesses Choose The Runner Software Solutions",
  subheadline: "Every engagement is built around outcomes, not just output.",
  cards: [
    { icon: Zap, title: "Faster Delivery", desc: "Structured agile sprints and experienced teams mean your product reaches market faster — without cutting corners on quality." },
    { icon: Shield, title: "Enterprise Security", desc: "Security practices are embedded from architecture through deployment, reducing risk exposure for business-critical systems." },
    { icon: MessageSquare, title: "Transparent Development", desc: "Real-time visibility into progress, budget, and timelines — so decision-makers are never left guessing about project status." },
    { icon: UserCheck, title: "Dedicated Project Manager", desc: "A single point of accountability who understands your business context, not just your ticket backlog." },
    { icon: Workflow, title: "Agile Methodology", desc: "Iterative delivery lets you adapt priorities as your business evolves, instead of locking you into a rigid, outdated spec." },
    { icon: LifeBuoy, title: "Post-Launch Support", desc: "Ongoing monitoring, maintenance, and enhancement — so your software keeps performing as your business grows." },
  ],
};

export type HomeService = {
  icon: LucideIcon;
  title: string;
  desc: string;
  outcome: string;
  href: string;
};

export const homeServices: HomeService[] = [
  { icon: Puzzle, title: "Custom Software Development", desc: "Software built around your exact workflows instead of forcing you into someone else's process.", outcome: "Fewer workarounds, higher operational efficiency.", href: getServicePath("custom-software-development") },
  { icon: Building2, title: "Enterprise Software Development", desc: "Large-scale systems engineered for reliability, integration, and long-term maintainability.", outcome: "Reduced technical debt and system downtime.", href: getServicePath("enterprise-software-development") },
  { icon: Rocket, title: "Software Product Development", desc: "End-to-end product engineering from MVP to scalable release.", outcome: "Faster time-to-market with a product built to grow.", href: getServicePath("software-product-development") },
  { icon: Monitor, title: "Web Development", desc: "Fast, secure, and scalable web applications built on modern frameworks.", outcome: "Better user experience and higher conversion performance.", href: getServicePath("web-development") },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps with consistent performance across devices.", outcome: "Broader customer reach and engagement.", href: getServicePath("mobile-app-development") },
  { icon: Bot, title: "AI Development", desc: "Custom AI features — automation, predictive analytics, intelligent workflows.", outcome: "Reduced manual effort and smarter decision-making.", href: getServicePath("ai-development") },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud architecture, migration, and optimization across major platforms.", outcome: "Lower infrastructure costs and improved scalability.", href: getServicePath("cloud-solutions") },
  { icon: BarChart3, title: "ERP Development", desc: "Unified systems connecting operations, finance, and inventory.", outcome: "Better cross-department visibility and control.", href: "/erp-software" },
  { icon: Handshake, title: "CRM Development", desc: "CRM platforms tailored to your sales and customer service workflows.", outcome: "Improved customer retention and sales visibility.", href: "/crm-software" },
  { icon: Server, title: "DevOps", desc: "CI/CD pipelines and infrastructure automation for faster, safer releases.", outcome: "Reduced deployment risk and faster iteration cycles.", href: getServicePath("devops-services") },
  { icon: Compass, title: "Software Consulting", desc: "Strategic guidance on architecture, technology, and digital transformation planning.", outcome: "Reduced risk in high-stakes technology decisions.", href: getServicePath("software-consulting") },
  { icon: TestTube2, title: "QA & Testing", desc: "Manual and automated testing to catch issues before they reach production.", outcome: "Higher reliability and fewer post-launch defects.", href: getServicePath("software-testing") },
];

export type HomeIndustry = {
  name: string;
  slug: string;
  desc: string;
  outcome: string;
  projectsDelivered?: string;
};

export const homeIndustries: HomeIndustry[] = [
  { name: "Healthcare", slug: "healthcare", desc: "Secure, compliant systems including patient management and telehealth platforms.", outcome: "Improved patient data accessibility and care coordination.", projectsDelivered: "[X]" },
  { name: "Education", slug: "education", desc: "Learning management and student information systems for modern institutions.", outcome: "Streamlined administration and better learning outcomes.", projectsDelivered: "[X]" },
  { name: "Retail", slug: "retail", desc: "E-commerce and omnichannel platforms built for scale.", outcome: "Higher conversion and inventory accuracy.", projectsDelivered: "[X]" },
  { name: "Finance", slug: "finance", desc: "Secure transaction processing and compliance-focused reporting tools.", outcome: "Reduced compliance risk and faster reporting.", projectsDelivered: "[X]" },
  { name: "Real Estate", slug: "real-estate", desc: "Property management and listing platforms tailored to real estate operations.", outcome: "Faster deal cycles and better lead visibility." },
  { name: "Construction", slug: "construction", desc: "Project and resource management software for field and office teams.", outcome: "Improved project visibility and resource allocation." },
  { name: "Manufacturing", slug: "manufacturing", desc: "ERP and production systems improving supply chain visibility.", outcome: "Reduced downtime and better production planning." },
  { name: "Hospitality", slug: "hotel", desc: "Booking and guest management platforms for hospitality operations.", outcome: "Higher occupancy and smoother guest experiences." },
  { name: "Fitness", slug: "fitness", desc: "Membership, scheduling, and engagement platforms for fitness businesses.", outcome: "Increased member retention and operational efficiency." },
  { name: "Logistics", slug: "logistics", desc: "Fleet management and route optimization for logistics operations.", outcome: "Lower delivery costs and improved route efficiency." },
];

export const developmentProcess = {
  headline: "Our Software Development Process",
  subheadline: "A structured, transparent path from idea to long-term support.",
  steps: [
    { icon: Search, title: "Discovery", desc: "Understanding business goals, current systems, and constraints.", timeline: "[X weeks]", deliverables: "Discovery report, requirements document", output: "Validated project scope" },
    { icon: FileText, title: "Planning", desc: "Defining architecture, technology stack, and delivery roadmap.", timeline: "[X weeks]", deliverables: "Technical roadmap, project plan", output: "Approved development plan" },
    { icon: PenTool, title: "UI/UX Design", desc: "Designing intuitive, user-centered interfaces.", timeline: "[X weeks]", deliverables: "Wireframes, prototypes, design system", output: "Approved UI/UX design" },
    { icon: TerminalSquare, title: "Development", desc: "Building the software in iterative agile sprints.", timeline: "Ongoing per sprint", deliverables: "Working software increments", output: "Functional, tested modules" },
    { icon: TestTube2, title: "Testing", desc: "Functional, performance, and security testing.", timeline: "[X weeks]", deliverables: "QA reports, bug tracking", output: "Production-ready software" },
    { icon: Rocket, title: "Deployment", desc: "Managed release with minimal operational disruption.", timeline: "[X days]", deliverables: "Deployment plan, rollback procedure", output: "Live, stable release" },
    { icon: Wrench, title: "Support", desc: "Ongoing monitoring, maintenance, and enhancement.", timeline: "Continuous", deliverables: "SLA-based support", output: "Sustained system performance" },
  ],
};

export const trustSection = {
  headline: "Why Businesses Trust The Runner Software Solutions",
  subheadline: "Engineering discipline built into every stage of delivery.",
  items: [
    { icon: Lock, title: "Security-First Development", desc: "Secure coding standards, dependency auditing, and infrastructure hardening applied from day one — not bolted on before launch." },
    { icon: TestTube2, title: "Quality Assurance", desc: "Dedicated QA processes covering functional, performance, and regression testing across every release cycle." },
    { icon: Workflow, title: "Agile Methodology", desc: "Iterative sprints with regular demos, keeping stakeholders aligned and able to adjust priorities as needs evolve." },
    { icon: GitBranch, title: "Code Review Process", desc: "Every code change is peer-reviewed against internal standards before merging, reducing defects and maintaining consistency." },
    { icon: Server, title: "CI/CD Pipeline", desc: "Automated build, test, and deployment pipelines reduce release risk and speed up delivery cycles." },
    { icon: FlaskConical, title: "Testing Standards", desc: "Structured test plans and automated test coverage ensure reliability across functional and edge-case scenarios." },
    { icon: LifeBuoy, title: "Post-Launch Support", desc: "SLA-backed maintenance and monitoring to keep systems stable and performant after go-live." },
  ],
};

export const businessOutcomes = {
  headline: "Business Outcomes We Deliver",
  subheadline: "Software is only valuable if it moves the business forward.",
  items: [
    { icon: TrendingUp, title: "Increase Productivity", desc: "Streamlined workflows reduce time spent on manual, repetitive tasks." },
    { icon: DollarSign, title: "Reduce Costs", desc: "Efficient architecture and automation lower long-term operational and infrastructure costs." },
    { icon: Cog, title: "Automate Operations", desc: "Intelligent automation reduces reliance on manual processes across departments." },
    { icon: LineChart, title: "Real-Time Reporting", desc: "Centralized, real-time data gives leadership faster, better-informed decisions." },
    { icon: Layers, title: "Scalable Architecture", desc: "Systems built to grow with your business, without costly re-platforming." },
    { icon: Heart, title: "Better Customer Experience", desc: "Faster, more reliable digital experiences that improve customer satisfaction and retention." },
  ],
};

export const engagementModels = {
  headline: "Flexible Engagement Models for Every Project",
  subheadline: "Choose the model that fits your project's scope, timeline, and budget certainty.",
  models: [
    { title: "Fixed Price", desc: "Best suited for projects with clearly defined scope and requirements, where budget predictability is a priority. Ideal for smaller, well-scoped projects like MVPs or single-feature builds.", recommended: false },
    { title: "Dedicated Team", desc: "Best suited for long-term projects requiring an embedded team that works as an extension of your internal staff. Ideal for ongoing product development and evolving roadmaps.", recommended: true },
    { title: "Staff Augmentation", desc: "Best suited for businesses that need to scale existing internal teams with specialized skills, without the overhead of direct hiring. Ideal for filling specific skill gaps on a flexible basis.", recommended: false },
    { title: "Time & Material", desc: "Best suited for projects with evolving requirements where scope may shift as development progresses. Ideal for iterative, discovery-driven projects.", recommended: false },
  ],
  cta: "Not Sure Which Model Fits? Talk to Our Team",
};

export type FaqCategory = "General" | "Services" | "Process" | "Pricing & Engagement" | "Security" | "Support";

export type HomeFaq = {
  category: FaqCategory;
  question: string;
  answer: string;
};

export const faqCategories: FaqCategory[] = ["General", "Services", "Process", "Pricing & Engagement", "Security", "Support"];

export const homeFaqs: HomeFaq[] = [
  { category: "General", question: "What does The Runner Software Solutions do?", answer: "We design, build, and scale custom software for enterprises, SMEs, and startups — including web and mobile applications, enterprise platforms, AI features, cloud solutions, and ERP/CRM systems. Every engagement is structured around your business outcomes, not just deliverables." },
  { category: "General", question: "What industries do you work with?", answer: "We work across healthcare, education, retail, finance, real estate, construction, manufacturing, hospitality, fitness, logistics, and other sectors. Our teams adapt to industry-specific workflows, compliance requirements, and operational constraints." },
  { category: "General", question: "Where is your team located, and do you work with international clients?", answer: "We serve clients internationally with delivery teams operating across multiple time zones. We align working hours with your region and communicate through your preferred channels — Slack, Microsoft Teams, Jira, or daily stand-ups." },
  { category: "General", question: "How long has The Runner Software Solutions been in business?", answer: "We have been delivering custom software for growing businesses worldwide. Contact us for current company history and credentials relevant to your evaluation process." },
  { category: "General", question: "What makes you different from other software development companies?", answer: "We combine senior engineering talent with transparent agile delivery, dedicated project management, and long-term post-launch support. You get real visibility into progress and budgets, security embedded from architecture through deployment, and software engineered for long-term growth." },
  { category: "Services", question: "Do you build custom software for startups as well as enterprises?", answer: "Yes. We help startups launch focused MVPs quickly and help enterprises modernize legacy systems and scale to higher transaction volumes. The engagement model and team composition adapt to your stage and scope." },
  { category: "Services", question: "What is the difference between custom software and off-the-shelf software?", answer: "Off-the-shelf software is built for a generic market and often requires workarounds as you grow. Custom software is engineered around your exact workflows, integrations, and compliance needs — giving you better fit, ownership, and long-term scalability." },
  { category: "Services", question: "Can you modernize our legacy systems?", answer: "Yes. We assess existing architecture, identify migration risks, and deliver phased modernization — whether that means refactoring in place, strangling monoliths into services, or rebuilding on a modern stack with minimal operational disruption." },
  { category: "Services", question: "Do you develop AI-powered features and automation?", answer: "Yes. We build custom AI capabilities including workflow automation, predictive analytics, intelligent document processing, and LLM integrations — scoped to real business problems with measurable ROI." },
  { category: "Services", question: "Can you build and customize ERP and CRM systems?", answer: "Yes. We develop unified ERP and CRM platforms tailored to your operations, sales workflows, and reporting needs — connecting finance, inventory, customer data, and cross-department visibility in one system." },
  { category: "Services", question: "Do you offer cloud migration services?", answer: "Yes. We plan and execute cloud architecture, migration, and optimization across AWS, Microsoft Azure, and Google Cloud Platform — with a focus on security, cost efficiency, and scalability." },
  { category: "Services", question: "Do you provide UI/UX design as part of development?", answer: "Yes. UI/UX design is integrated into our process — from discovery and wireframes through prototypes and design systems — so the product is intuitive for your users before development begins." },
  { category: "Services", question: "Do you offer QA and testing as a standalone service?", answer: "Yes. We provide manual and automated QA, regression testing, performance testing, and release validation — either as part of a full build or as a standalone engagement for existing products." },
  { category: "Process", question: "What is your software development process?", answer: "Our process spans Discovery, Planning, UI/UX Design, Development, Testing, Deployment, and ongoing Support. Each phase has defined deliverables and expected outputs, with iterative agile sprints during development." },
  { category: "Process", question: "How long does a typical project take?", answer: "Timelines depend on scope and complexity. MVPs may launch in weeks; mid-size platforms often take several months; enterprise systems can span longer engagements. We provide realistic timelines after discovery, not generic estimates." },
  { category: "Process", question: "How do you handle changing requirements mid-project?", answer: "Agile delivery is built for change. Priorities can be reprioritized between sprints with transparent impact on timeline and budget. Your dedicated project manager keeps stakeholders aligned on trade-offs." },
  { category: "Process", question: "How do you keep clients updated during development?", answer: "You receive regular sprint demos, progress reports, and access to project tracking tools. Decision-makers always have visibility into status, blockers, and upcoming milestones." },
  { category: "Process", question: "What happens if we need to scale the team up or down mid-project?", answer: "We can adjust team composition based on sprint needs — adding specialists for integrations, QA, or DevOps, or scaling back when scope stabilizes. Changes are discussed transparently before implementation." },
  { category: "Process", question: "Do you provide documentation at the end of a project?", answer: "Yes. Deliverables include technical documentation, deployment guides, and handover materials appropriate to your internal team’s needs — so you can maintain and extend the system confidently." },
  { category: "Pricing & Engagement", question: "What engagement models do you offer?", answer: "We offer Fixed Price, Dedicated Team, Staff Augmentation, and Time & Material models. The right model depends on scope certainty, timeline, and how closely you want us embedded in your workflow." },
  { category: "Pricing & Engagement", question: "How is pricing determined for a custom software project?", answer: "Pricing is based on scope, complexity, integrations, compliance requirements, and team composition. After discovery, we provide a detailed proposal aligned to your chosen engagement model." },
  { category: "Pricing & Engagement", question: "Do you offer dedicated development teams?", answer: "Yes. Dedicated teams work exclusively on your product — managed by us, aligned to your roadmap, and scaled as your needs evolve. This model suits long-term product development and evolving requirements." },
  { category: "Pricing & Engagement", question: "What is the minimum project size you take on?", answer: "We work on projects ranging from focused MVPs to multi-year enterprise platforms. Share your goals in a consultation and we will recommend an approach that fits your budget and timeline." },
  { category: "Pricing & Engagement", question: "Do you sign NDAs before discussing project details?", answer: "Yes. We sign mutual NDAs before detailed discovery so your ideas, data, and business context remain confidential from the first conversation." },
  { category: "Security", question: "How do you ensure the security of the software you build?", answer: "Security is embedded from architecture through deployment — secure coding standards, dependency auditing, code review, infrastructure hardening, and role-based access controls are applied throughout delivery." },
  { category: "Security", question: "Do you follow any specific compliance standards?", answer: "We align engineering practices to your industry requirements — including GDPR, HIPAA, SOC 2, and PCI-DSS where applicable. Compliance scope is defined during discovery based on your sector and data handling needs." },
  { category: "Security", question: "How do you handle data privacy for client projects?", answer: "We follow data minimization principles, encrypt data in transit and at rest, and implement access controls aligned to your policies. Data residency and retention requirements are agreed before development begins." },
  { category: "Support", question: "Do you provide support after the software is launched?", answer: "Yes. We offer SLA-backed post-launch support including monitoring, maintenance, bug fixes, and planned enhancements — so your system stays stable as your business grows." },
  { category: "Support", question: "What does your post-launch maintenance include?", answer: "Maintenance typically covers uptime monitoring, security patches, dependency updates, performance optimization, and prioritized bug resolution. Scope and SLAs are defined in your support agreement." },
  { category: "Support", question: "How do we get started with a project?", answer: "Book a free consultation. We will review your goals, discuss approach and engagement models, and follow up with a scoped proposal and recommended next steps." },
];

export const footerLinks = {
  services: [
    "Custom Software Development", "Enterprise Software Development", "Software Product Development",
    "Web Development", "Mobile App Development", "AI Development", "Cloud Solutions",
    "ERP Development", "CRM Development", "DevOps", "Software Consulting", "QA & Testing",
  ],
  solutions: ["Business Automation", "Digital Transformation", "Enterprise Applications", "Workflow Automation", "SaaS Development"],
  industries: ["Healthcare", "Education", "Retail", "Finance", "Real Estate", "Construction", "Manufacturing", "Hospitality", "Fitness", "Logistics"],
  technologies: ["Frontend", "Backend", "Mobile", "AI", "Cloud", "DevOps", "Database", "CMS"],
  resources: ["Blog / Knowledge Center", "Case Studies", "Portfolio", "FAQ"],
  company: ["About Us", "Careers", "Contact"],
};
