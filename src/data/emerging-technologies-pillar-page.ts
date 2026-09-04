import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Sparkles,
  MessageSquare,
  Brain,
  Cloud,
  Search,
  ClipboardList,
  FileText,
  PenTool,
  Layers,
  TerminalSquare,
  TestTube2,
  Rocket,
  Shield,
  Activity,
  RefreshCw,
  TrendingUp,
  Cpu,
  Lock,
  Eye,
  Scale,
  Zap,
  Users,
  Code2,
  LineChart,
  Globe,
  Building2,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const emergingTechnologiesSeo = {
  title: "Emerging Technology Solutions | The Runner Software",
  description:
    "AI, generative AI, chatbots, machine learning & SaaS development for smarter, scalable businesses in the USA and Canada. Explore our technology services.",
  h1: "Emerging Technology Solutions for Smarter, Scalable Businesses",
  canonicalPath: "/services/emerging-technologies",
  ogTitle: "Emerging Technology Solutions | The Runner Software",
  ogDescription:
    "AI, generative AI, chatbots, machine learning & SaaS development for smarter, scalable businesses in the USA and Canada.",
  twitterTitle: "Emerging Technology Solutions | The Runner Software",
  twitterDescription:
    "AI, generative AI, chatbots, machine learning & SaaS development for smarter, scalable businesses in the USA and Canada.",
};

export const pillarHero = {
  subheading:
    "The Runner Software Solutions helps businesses in the United States and Canada put artificial intelligence, generative AI, machine learning, conversational AI, and SaaS engineering to work on real operational problems — not as standalone experiments, but as integrated parts of the software your business already runs on.",
  supporting:
    "Whether you need a custom AI-powered feature inside an existing product, a generative AI assistant built on your own knowledge base, an AI chatbot handling customer inquiries, a machine learning model driving forecasting or recommendations, or a full SaaS product built from the ground up, we design and build technology that solves a defined business problem.",
  connectedNote:
    "These technologies aren't independent of each other. A SaaS product often becomes more valuable with an AI-powered feature inside it. A generative AI assistant is frequently the technology underneath what a business experiences as an \"AI chatbot.\" Machine learning models frequently power the predictions that make an AI application useful in the first place. We approach emerging technology adoption as a connected set of engineering decisions, not five separate services bolted together.",
  primaryCta: "Explore Emerging Technology Solutions",
  secondaryCta: "Discuss Your Technology Project",
};

export const whatAreEmergingTech = {
  definition:
    "Emerging technology solutions, in a business software context, refer to the application of artificial intelligence, generative AI, machine learning, conversational AI, and modern SaaS architecture to solve concrete operational and product problems.",
  capabilities: [
    { bold: "Automate repetitive processes", text: "that currently consume staff time on predictable, rules-based work" },
    { bold: "Improve customer experiences", text: "through faster response times, personalized interactions, and self-service tools that actually work" },
    { bold: "Analyze data", text: "to surface patterns and trends that would be impractical to find manually" },
    { bold: "Support decision-making", text: "with predictive models and structured insights rather than intuition alone" },
    { bold: "Build new digital products", text: "— SaaS platforms, AI-powered tools, and applications that didn't previously exist in the business" },
    { bold: "Improve operational efficiency", text: "by reducing manual handoffs and repetitive administrative work" },
    { bold: "Create scalable software", text: "that supports growth without a proportional increase in operational overhead" },
    { bold: "Personalize user experiences", text: "based on behavior, preferences, or context" },
    { bold: "Modernize legacy workflows", text: "that have outgrown spreadsheets, manual processes, or outdated internal tools" },
  ],
  disclaimer:
    "These are genuine capabilities, not guaranteed outcomes — the actual value any of these technologies deliver depends on how well they're matched to a real business problem, how good the underlying data is, and how carefully the solution is built, tested, and maintained. We don't present AI or SaaS adoption as an automatic path to specific revenue, cost savings, or ROI figures, since actual results depend on factors specific to each business and implementation.",
};

export type PillarService = {
  icon: LucideIcon;
  letter: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
};

export const pillarServices: PillarService[] = [
  {
    icon: Bot,
    letter: "A",
    title: "AI Development",
    desc: "Custom AI software and AI-powered applications built around a specific business problem — from AI-powered search and recommendation systems to intelligent document processing and decision-support tools. AI development covers both building new AI-native applications and integrating AI capabilities into existing software through APIs and custom models.",
    href: etPath("ai-development"),
    cta: "AI Development Services",
  },
  {
    icon: Sparkles,
    letter: "B",
    title: "Generative AI Development",
    desc: "Generative AI development covers applications built on large language models (LLMs) — knowledge assistants that answer questions from your own documents, AI copilots embedded in internal tools, semantic search that understands meaning rather than just keywords, and retrieval-augmented generation (RAG) systems that ground LLM responses in your actual data rather than the model's general training.",
    href: etPath("generative-ai-development"),
    cta: "Generative AI Development",
  },
  {
    icon: MessageSquare,
    letter: "C",
    title: "AI Chatbot Development",
    desc: "AI chatbot development covers conversational assistants for customer support, sales lead qualification, internal employee support, and FAQ automation — built on modern conversational AI rather than the rigid, decision-tree chatbots of a decade ago.",
    href: etPath("ai-chatbot-development"),
    cta: "AI Chatbot Development",
  },
  {
    icon: Brain,
    letter: "D",
    title: "Machine Learning Solutions",
    desc: "Machine learning solutions cover predictive analytics, classification, recommendation systems, forecasting, and anomaly detection — the statistical and algorithmic layer that often sits underneath what businesses experience as \"AI.\"",
    href: etPath("machine-learning-solutions"),
    cta: "Machine Learning Solutions",
  },
  {
    icon: Cloud,
    letter: "E",
    title: "SaaS Development",
    desc: "SaaS development covers building multi-tenant software products from the ground up — subscription billing, user and role management, dashboards, APIs, and the cloud infrastructure a scalable software product depends on. AI capabilities are increasingly a differentiating part of modern SaaS products.",
    href: etPath("saas-development"),
    cta: "SaaS Development Services",
  },
];

export const aiDevelopmentSection = {
  title: "AI Development",
  definition:
    "AI development is the process of designing, building, and integrating artificial intelligence capabilities into software applications to solve a specific business problem — whether that's automating a decision, extracting structure from unstructured data, or powering a recommendation or search experience.",
  includes: [
    "Custom AI software — applications built specifically around your data and workflows, rather than a generic AI tool",
    "AI application development — building new products where AI capability is core to the value proposition",
    "AI integrations — adding AI capability to existing software through APIs, without a full rebuild",
    "AI automation — applying AI to reduce manual effort in specific, well-defined processes",
    "Enterprise AI — AI systems built to operate reliably within larger organizational and technical environments",
    "AI-powered search — search that understands meaning and context, not just exact keyword matches",
    "Intelligent document processing — extracting structured data from documents, forms, or unstructured text",
    "Recommendation systems — surfacing relevant products, content, or actions based on data patterns",
    "Predictive systems and decision support — using historical data to inform forecasts or flag items needing attention",
  ],
  whenToConsider:
    "Generally, when there's a specific, recurring problem — a manual process that's genuinely repetitive and pattern-based, a volume of unstructured data that's hard to use as-is, or a decision that would benefit from structured, data-driven support — rather than pursuing AI because it's currently a prominent industry topic. AI development tends to deliver the most value when it targets a problem clearly defined before development begins.",
};

export const generativeAiSection = {
  title: "Generative AI",
  definition:
    "Generative AI refers to a specific class of AI models — most commonly Large Language Models (LLMs) — capable of producing novel text, structured content, code, or other output based on a prompt, rather than simply classifying or predicting from fixed categories.",
  intro: "Building a genuinely useful generative AI application involves more than connecting an API to an LLM:",
  concepts: [
    "Retrieval-Augmented Generation (RAG) — grounding LLM responses in your organization's actual documents and data",
    "Embeddings — numerical representations of text meaning that allow content to be compared and searched by semantic similarity",
    "Vector databases — specialized databases optimized for storing and searching embeddings efficiently at scale",
    "Semantic search — search that understands the intent and meaning behind a query",
    "AI agents — systems that can take multi-step actions, potentially calling tools or APIs, to complete a task",
    "AI copilots — AI assistants embedded directly within an existing workflow or application",
    "Document intelligence — extracting, summarizing, or answering questions about content from large document sets",
    "Content generation — producing drafts, summaries, or structured content as a starting point for human review",
    "Enterprise knowledge assistants — internal tools that let employees query organizational knowledge in natural language",
  ],
  successFactors: [
    "Data — the quality and structure of the content the system draws from directly determines output quality",
    "Prompts — prompt design meaningfully affects output reliability and needs iteration",
    "Retrieval — how relevant content is found and surfaced to the model matters as much as the model itself",
    "Evaluation — systematically testing whether outputs are actually accurate and useful",
    "Security — protecting sensitive data referenced in prompts and retrieved content",
    "Monitoring — ongoing visibility into how the system performs in real use",
    "Guardrails — constraints that keep the system's outputs within appropriate bounds",
    "Cost management — LLM API usage costs scale with volume and need to be architected with cost awareness",
  ],
  disclaimer:
    "We don't claim access to proprietary models or specific vendor partnerships beyond what's independently verifiable — generative AI applications are typically built using publicly available LLM APIs, integrated thoughtfully into your specific data and workflow context.",
};

export const aiChatbotSection = {
  title: "AI Chatbots",
  intro:
    "Modern conversational AI has moved well beyond the rigid, decision-tree chatbots most businesses associate with the term. AI-powered chatbots use LLMs and natural language understanding to handle a genuinely wider range of conversational scenarios:",
  useCases: [
    "Customer service — answering common questions, resolving straightforward issues, and reducing ticket volume",
    "Lead generation and sales — qualifying inbound interest and guiding prospects toward a next step",
    "Internal support — answering employee questions about policies, benefits, or internal processes",
    "Knowledge base access — letting users ask natural-language questions instead of searching through static documentation",
    "Appointment workflows — handling scheduling and rescheduling conversationally",
    "FAQ automation — resolving the high-volume, repetitive questions that consume support team time",
    "Human escalation — recognizing when a conversation needs a human agent and handing off smoothly",
    "CRM integration — logging conversation data and outcomes directly into existing sales or support systems",
    "Analytics — tracking conversation volume, resolution rates, and common topics to inform ongoing improvement",
  ],
  comparisonTitle: "Traditional chatbot vs. AI-powered conversational assistant",
  comparison:
    "A traditional chatbot follows a fixed decision tree — if a user's input doesn't match a pre-programmed pattern, the conversation breaks down. An AI-powered conversational assistant, built on an LLM, can understand varied phrasing, maintain context across a conversation, and handle a much broader range of inputs without needing every possible phrasing pre-programmed. This makes AI-powered assistants substantially more capable for genuinely open-ended interactions, though they still need well-defined guardrails, clear escalation paths, and careful testing to perform reliably in a business context.",
};

export const machineLearningSection = {
  title: "Machine Learning",
  definition:
    "Machine learning is a subset of AI focused on building systems that identify patterns in data and use those patterns to make predictions or decisions, rather than following explicitly programmed rules for every scenario.",
  approaches: [
    "Supervised learning — training a model on labeled historical data to predict outcomes for new data",
    "Unsupervised learning — finding patterns or groupings in data without predefined labels",
    "Classification — predicting which category something belongs to",
    "Regression — predicting a continuous numerical value",
    "Clustering — grouping similar data points together to reveal natural segments",
    "Recommendation — predicting what a user is likely to want based on behavior patterns",
    "Forecasting — predicting future values based on historical trends",
    "Anomaly detection — identifying data points that deviate meaningfully from expected patterns",
  ],
  lifecycle: [
    { step: 1, title: "Data collection", desc: "Gathering the historical data the model will learn from" },
    { step: 2, title: "Data preparation", desc: "Cleaning, structuring, and validating data quality before modeling begins" },
    { step: 3, title: "Feature engineering", desc: "Selecting and transforming the specific data attributes the model will use" },
    { step: 4, title: "Model development", desc: "Building and training the model on prepared data" },
    { step: 5, title: "Evaluation", desc: "Testing model accuracy and reliability against held-out data before deployment" },
    { step: 6, title: "Deployment", desc: "Integrating the trained model into production systems" },
    { step: 7, title: "Monitoring", desc: "Tracking real-world model performance on new data" },
    { step: 8, title: "Retraining", desc: "Updating the model periodically as new data becomes available" },
  ],
  dataNote:
    "Machine learning work is only as good as the data behind it — a model trained on incomplete, biased, or poorly structured data will produce unreliable predictions regardless of the underlying algorithm's sophistication. Data quality assessment is typically the first real technical step in any machine learning project, before model selection.",
};

export const saasSection = {
  title: "SaaS Development",
  definition:
    "SaaS (Software as a Service) development is the process of building software products delivered over the internet on a subscription basis, typically serving many customers (\"tenants\") from a shared, centrally managed platform rather than software installed and run separately for each customer.",
  requirements: [
    "Multi-tenant architecture — supporting multiple customer organizations securely from shared infrastructure",
    "User authentication and role-based access — managing user accounts and permissions across roles",
    "Subscription management and billing — handling recurring billing, plan tiers, and payment processing",
    "Dashboards — the core interface customers use to interact with the product",
    "APIs — enabling customers or partners to integrate the SaaS product with their own systems",
    "Integrations — connecting to the other tools your customers already use",
    "Cloud infrastructure — architecture that scales reliably as the customer base grows",
    "Scalability — designed from the outset to support growth in users and data volume",
    "Analytics — usage tracking that informs product decisions and customer-facing reporting",
    "Monitoring — visibility into system health and performance in production",
    "Security — particularly important in multi-tenant systems, where a security gap can expose one customer's data to another",
  ],
  aiNote:
    "Modern SaaS products increasingly differentiate through AI-powered features embedded directly in the product — AI-assisted search, automated reporting, predictive insights, or an in-app AI assistant. Building this well requires both solid SaaS architecture and thoughtful AI integration; adding AI without a strong underlying product tends to produce a feature nobody uses, not a competitive advantage.",
};

export const aiSaasSection = {
  title: "AI + SaaS: Building AI Into Software Products",
  intro:
    "AI capability is increasingly a differentiator inside SaaS products rather than a standalone offering. Common patterns include:",
  patterns: [
    "AI-powered dashboards — surfacing the insights that matter most rather than requiring users to dig through raw data",
    "AI assistants embedded in the product — helping users accomplish tasks within the application itself",
    "Automated reporting — generating summaries or reports that previously required manual compilation",
    "Predictive analytics within the product — surfacing forecasts or risk flags directly in the user's workflow",
    "Intelligent search — letting users find what they need using natural language rather than exact-match filters",
    "Recommendations — surfacing relevant content, actions, or next steps based on usage patterns",
    "Workflow automation — using AI to handle steps in a process that previously required manual judgment",
    "Document processing — automatically extracting or structuring data from documents uploaded to the product",
    "AI customer support — embedding conversational AI directly into the product experience",
  ],
  principle:
    "AI should solve a real problem your product's users actually have — not be added because AI is currently a prominent industry trend. An AI feature that doesn't measurably improve how users accomplish their goals adds engineering and maintenance cost without corresponding value, and can actively hurt the product if it produces unreliable or confusing results.",
};

export const industryUseCases = [
  { industry: "Healthcare", desc: "Intelligent document processing for patient records, AI-assisted appointment scheduling, and conversational assistants for routine patient questions" },
  { industry: "Finance", desc: "Anomaly detection for fraud monitoring, predictive models for credit or risk assessment, and AI-assisted document review for compliance" },
  { industry: "Ecommerce", desc: "Product recommendation systems, AI-powered search, demand forecasting for inventory planning, and conversational shopping assistants" },
  { industry: "Education", desc: "AI-assisted content generation for course materials, intelligent tutoring or Q&A assistants, and predictive models for student support" },
  { industry: "Logistics", desc: "Route optimization models, demand forecasting, and anomaly detection for shipment tracking irregularities" },
  { industry: "Real Estate", desc: "AI-powered property search and matching, automated lead qualification, and predictive pricing models" },
  { industry: "Manufacturing", desc: "Predictive maintenance models that flag equipment issues before failure, and anomaly detection in quality control data" },
  { industry: "Retail", desc: "Customer segmentation for targeted marketing, demand forecasting, and recommendation engines" },
  { industry: "Travel", desc: "Dynamic pricing models, personalized recommendation systems, and conversational booking assistants" },
  { industry: "SaaS", desc: "AI-powered features embedded directly into product dashboards, intelligent search, and usage-pattern-based recommendations" },
  { industry: "Professional Services", desc: "Document intelligence for contract or case review, AI-assisted drafting tools, and internal knowledge assistants" },
];

export const businessBenefits = [
  "Automation of genuinely repetitive, pattern-based work, freeing staff time for higher-value tasks",
  "Operational efficiency gains from reducing manual handoffs and administrative overhead",
  "Faster workflows where AI or automation removes a bottleneck in an existing process",
  "Improved customer experience through faster response times and more relevant, personalized interactions",
  "Better decision support from data-driven insight rather than intuition alone",
  "Personalized experiences that adapt to individual user behavior or context",
  "Scalable software that supports business growth without proportional increases in operational cost",
  "Data-driven insights that surface patterns not easily visible through manual analysis",
  "Product innovation — new capabilities that differentiate a product in its market",
  "Reduced manual work on tasks that are well-suited to automation",
];

export const pillarProcess = [
  { icon: Search, title: "Business Discovery", desc: "We learn your business, goals, and the operational context surrounding the problem you're trying to solve." },
  { icon: ClipboardList, title: "Problem Identification", desc: "We clarify the specific problem worth solving, since emerging technology should target a defined need." },
  { icon: Layers, title: "Technology Assessment", desc: "We evaluate which technology — AI, generative AI, machine learning, a chatbot, or SaaS — actually fits the problem." },
  { icon: FileText, title: "Data Assessment", desc: "We evaluate what data is available, its quality, and what gaps might need to be addressed." },
  { icon: PenTool, title: "Solution Architecture", desc: "We design the technical approach, including how the solution will integrate with your existing systems." },
  { icon: PenTool, title: "UX/UI Design", desc: "We design the interface for the parts of the solution users will interact with directly." },
  { icon: TerminalSquare, title: "Prototype / Proof of Concept", desc: "We validate the technical approach on a smaller scale before committing to full development." },
  { icon: Code2, title: "Development", desc: "We build the solution according to the validated architecture and design." },
  { icon: Brain, title: "AI/ML Model Integration", desc: "We integrate trained models or AI capabilities into the broader application." },
  { icon: Zap, title: "API & System Integration", desc: "We connect the solution to existing business systems — ERP, CRM, databases, or other applications." },
  { icon: TestTube2, title: "Testing", desc: "We test functionality, accuracy, and reliability before launch." },
  { icon: Shield, title: "Security Validation", desc: "We review data handling, access controls, and API security." },
  { icon: Activity, title: "Performance Optimization", desc: "We tune the solution for real-world usage patterns and scale." },
  { icon: Rocket, title: "Deployment", desc: "We release the solution into production with a controlled rollout." },
  { icon: Eye, title: "Monitoring", desc: "We track system health and, for AI/ML components, ongoing output quality and accuracy." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "We support ongoing refinement as usage patterns, data, and business needs evolve." },
];

export const aiSecuritySection = {
  title: "AI & Data Security",
  intro: "Security for AI-powered and data-driven applications requires attention beyond standard application security practices:",
  items: [
    "Data protection — safeguarding the data these systems are trained on, retrieve from, or process",
    "Authentication and authorization — controlling who can access AI systems and what data or actions they can access",
    "Encryption — protecting sensitive data both in transit and at rest",
    "API security — securing the endpoints that AI models and services expose",
    "Secure storage — appropriate handling of training data, embeddings, and sensitive content",
    "Access controls — restricting AI system access to only the data and functions genuinely needed",
    "Data minimization — limiting what sensitive data is actually exposed to AI models or included in prompts",
    "Logging and monitoring — tracking system access and behavior for accountability",
    "Model access controls — restricting who can modify, retrain, or reconfigure deployed models",
    "Prompt security — protecting against prompt injection and other attacks specific to LLM-based systems",
    "Sensitive data handling — particular care around personally identifiable or business-confidential information",
    "AI output validation — checking AI-generated outputs before they're acted on automatically",
  ],
  disclaimer:
    "We do not claim compliance with HIPAA, SOC 2, ISO standards, or GDPR unless specifically verified for a given engagement — these frameworks involve organizational and process requirements beyond technical implementation.",
};

export const responsibleAiSection = {
  title: "Responsible AI Development",
  intro:
    "Responsible AI development matters for businesses because AI systems that behave unpredictably, unfairly, or opaquely create real operational and reputational risk. Our approach considers:",
  practices: [
    { title: "Transparency", desc: "Understanding and being able to explain, to a reasonable degree, how an AI system arrives at its outputs" },
    { title: "Human oversight", desc: "Keeping humans in the loop for consequential decisions rather than fully automating high-stakes outcomes without review" },
    { title: "Data privacy", desc: "Handling personal and sensitive data used by AI systems with appropriate care and minimization" },
    { title: "Bias considerations", desc: "Recognizing that models trained on historical data can reflect and perpetuate patterns present in that data" },
    { title: "Output validation", desc: "Systematically checking AI outputs for accuracy and appropriateness before automating downstream actions" },
    { title: "Hallucination management", desc: "Building in retrieval grounding, validation, and appropriate uncertainty signaling for generative AI" },
    { title: "Model evaluation", desc: "Ongoing, structured assessment of whether a model continues to perform reliably" },
    { title: "Security and monitoring", desc: "Sustained attention to how AI systems behave in production, not just at initial deployment" },
  ],
  closing:
    "Responsible AI isn't a separate add-on step — it's a set of practices integrated throughout discovery, development, testing, and ongoing maintenance of any AI system we build.",
};

export const technologyStack = [
  { label: "AI", items: "Python for AI/ML development; LLM APIs for generative AI; vector databases and embeddings for RAG; established ML frameworks for predictive modeling" },
  { label: "Backend", items: "Node.js and Express, or PHP and Laravel — serving as the integration layer connecting AI/ML components to the rest of an application" },
  { label: "Frontend", items: "React and Next.js for building interfaces through which users interact with AI-powered features, dashboards, and SaaS products" },
  { label: "Databases", items: "PostgreSQL and MySQL for structured application and tenant data; MongoDB where a flexible, document-based data model fits better" },
  { label: "Cloud infrastructure", items: "AWS, Azure, and Google Cloud — choice depending on project requirements, existing organizational relationships, and cost considerations" },
];

export const aiIntegrationSection = {
  title: "AI Integration With Existing Software",
  intro: "Emerging technology solutions rarely operate in isolation — most deliver value by connecting to systems a business already runs on:",
  systems: [
    "ERP systems — feeding AI-driven insights or automation into operational and inventory data",
    "CRM platforms — connecting AI chatbots or predictive models to customer and lead data",
    "Ecommerce platforms — powering product recommendations, search, or demand forecasting",
    "Websites — embedding chatbots, AI-powered search, or personalization directly into an existing site",
    "Mobile applications — bringing AI capability into an existing app",
    "Internal business systems — connecting AI tools to whatever operational software a business already depends on",
    "Databases — the underlying data source most AI and ML applications draw from",
    "APIs — the standard mechanism connecting AI/ML components to everything else",
  ],
  technicalNote:
    "Technically, this relies on REST APIs, and GraphQL where flexible, client-driven queries add genuine value, along with webhooks for event-driven integration, authentication to secure connections, and data synchronization to keep connected systems consistent.",
  webDevLink: "/services/web-mobile-development/web-development",
  mobileDevLink: "/services/web-mobile-development/mobile-app-development",
};

export const startupSection = {
  title: "Emerging Technology for Startups",
  intro: "Startups exploring AI, machine learning, or SaaS development face a particular tradeoff: the appeal of building something technically ambitious versus the discipline of validating demand before investing heavily. Our approach for startups emphasizes:",
  points: [
    "MVP development — building the smallest version of the product that validates the core value proposition",
    "Proof of concept — validating technical feasibility on a small scale before committing to full development",
    "AI MVP and SaaS MVP approaches that avoid overbuilding before there's evidence of real demand",
    "Product-market validation — treating early usage data as a signal to inform what to build next",
    "Rapid iteration — building in a way that supports quick changes as you learn what resonates with users",
    "Analytics from day one — instrumenting the product so decisions are grounded in real usage data",
    "Scalable architecture — building the technical foundation so a validated MVP can grow without a full rebuild",
  ],
  closing:
    "Startups can avoid overengineering by resisting the temptation to build every AI capability that seems technically interesting, and instead focusing engineering effort on the smallest set of features that tests the actual value proposition to real users.",
};

export const enterpriseSection = {
  title: "Enterprise Emerging Technology",
  intro: "Enterprise adoption of AI, machine learning, and SaaS technology involves distinct challenges compared to smaller-scale implementations:",
  capabilities: [
    "Enterprise AI — systems that need to operate reliably across larger, more complex organizational environments",
    "Internal AI assistants — knowledge tools that need to respect existing access controls and data governance",
    "Workflow automation — automating processes that often span multiple departments and existing systems",
    "Knowledge management — making large, often siloed bodies of institutional knowledge searchable and usable",
    "Predictive analytics — models that need to integrate with existing business intelligence infrastructure",
    "Enterprise SaaS — internal or customer-facing SaaS products built to enterprise scale and governance requirements",
    "Integrations — connecting new AI/ML capability to a larger number of existing enterprise systems",
    "Security — meeting enterprise security expectations, often stricter than smaller-scale deployments",
    "Scalability and monitoring — supporting real enterprise usage volume with production-grade visibility",
  ],
  challenges:
    "Enterprise technology adoption challenges commonly include navigating data that's siloed across multiple legacy systems, aligning a new AI or SaaS initiative with existing IT governance and security requirements, and managing organizational change as new tools shift how teams actually work.",
  productDevLink: "/services/software-development/software-product-development",
};

export const usaSection = {
  title: "Emerging Technology Solutions for USA Businesses",
  body: "We work with businesses across the United States adopting AI, machine learning, generative AI, and SaaS technology, including organizations based in New York, California, Texas, Florida, Washington, Illinois, and Massachusetts, among other states. Whether you're a startup in California validating an AI-powered SaaS MVP, a logistics company in Texas exploring predictive forecasting, or an enterprise on the East Coast building an internal knowledge assistant, we scope technology solutions around your specific business problem rather than a generic AI offering. As an emerging technology development partner serving the USA, our team works remotely with distributed stakeholders throughout discovery, development, and ongoing support.",
};

export const canadaSection = {
  title: "Emerging Technology Solutions for Canadian Businesses",
  body: "We also support Canadian businesses adopting AI, machine learning, and SaaS technology, including companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, and Edmonton. Canadian projects sometimes involve bilingual requirements — particularly for AI chatbots and SaaS products serving both English and French-speaking users — which we factor into design and content architecture where relevant. As with our US engagements, Canadian projects are handled remotely across discovery, development, and post-launch support.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: "Custom software engineering", desc: "Solutions built around your specific business problem, not a generic AI or SaaS template" },
  { icon: Brain, title: "AI integration expertise", desc: "Genuine experience connecting AI and machine learning capabilities to real applications and business data" },
  { icon: Cpu, title: "Modern technology stack", desc: "Current, well-supported frameworks and tools selected for project fit, not defaulted regardless of requirements" },
  { icon: TrendingUp, title: "Business-first approach", desc: "Technology recommendations grounded in a real, defined problem rather than adopting AI for its own sake" },
  { icon: Layers, title: "Scalable architecture", desc: "Systems designed to grow with your business, whether that's a SaaS product's user base or an AI system's usage volume" },
  { icon: Zap, title: "API integration", desc: "Deep experience connecting emerging technology to ERP, CRM, ecommerce, and other existing business systems" },
  { icon: Lock, title: "Security-conscious development", desc: "Security addressed throughout the development lifecycle, including AI-specific considerations like prompt security and data minimization" },
  { icon: TerminalSquare, title: "Maintainable software", desc: "Built for long-term supportability, not just a working prototype" },
  { icon: TestTube2, title: "Structured QA", desc: "Dedicated testing, including evaluation of AI/ML output quality and reliability, not just standard functional testing" },
  { icon: Users, title: "Long-term support", desc: "Available for ongoing maintenance, monitoring, and improvement after launch" },
];

export const pillarFaqs = [
  { q: "What are emerging technology solutions?", a: "Emerging technology solutions refer to the application of artificial intelligence, generative AI, machine learning, conversational AI, and modern SaaS architecture to solve concrete business problems — automating repetitive work, improving customer experience, supporting data-driven decisions, and building new digital products. These technologies help organizations modernize legacy workflows, personalize user experiences, and create more scalable software, though actual outcomes depend on how well the technology fits the specific business problem and how carefully it's implemented, tested, and maintained." },
  { q: "What emerging technologies does The Runner Software Solutions develop?", a: "We develop custom AI applications, generative AI solutions including LLM-powered knowledge assistants and RAG systems, AI chatbots for customer and internal support, machine learning solutions for prediction and forecasting, and full SaaS products from MVP through enterprise scale. We frequently combine these — for example, embedding a machine learning model or generative AI feature directly into a SaaS product — rather than treating them as entirely separate services." },
  { q: "What is AI development?", a: "AI development is the process of designing, building, and integrating artificial intelligence capabilities into software to solve a specific business problem, such as automating a decision, extracting structure from unstructured data, or powering search and recommendations. It covers both building new AI-native applications and adding AI capability to existing software through APIs and custom models, and is most effective when targeted at a clearly defined problem rather than pursued generically." },
  { q: "What is generative AI development?", a: "Generative AI development covers applications built on large language models capable of producing text, structured content, or other output based on a prompt. This includes knowledge assistants that answer questions from your own documents using retrieval-augmented generation, semantic search, AI copilots embedded in workflows, and document intelligence tools. Building a reliable generative AI application requires careful attention to data quality, prompt design, evaluation, security, and cost management — not just connecting an API to an LLM." },
  { q: "What is an AI chatbot?", a: "An AI chatbot is a conversational assistant powered by natural language understanding, typically built on large language models, capable of handling a wide range of phrasing and maintaining context across a conversation — unlike traditional rule-based chatbots limited to pre-programmed decision trees. AI chatbots are used for customer support, lead qualification, internal employee assistance, and FAQ automation, with human escalation paths for situations requiring a live agent." },
  { q: "What is machine learning?", a: "Machine learning is a subset of AI focused on building systems that identify patterns in historical data and use those patterns to make predictions or decisions, rather than following explicitly programmed rules for every scenario. Common applications include classification, forecasting, recommendation systems, and anomaly detection. Machine learning models are only as reliable as the data they're trained on, making data quality a critical first step in any project." },
  { q: "What is SaaS development?", a: "SaaS (Software as a Service) development is the process of building software products delivered over the internet on a subscription basis, serving multiple customer organizations from shared, centrally managed infrastructure. It requires specific architectural elements beyond a standard web application, including multi-tenant data isolation, subscription billing, role-based access management, and infrastructure designed to scale reliably as the customer base grows." },
  { q: "How can AI help a business?", a: "AI can help automate repetitive, pattern-based processes, improve customer experience through faster and more relevant interactions, support decision-making with data-driven predictions, and enable new product capabilities like intelligent search or personalized recommendations. The actual benefit depends heavily on whether AI is applied to a well-defined problem with adequate underlying data — AI adopted without a clear target problem tends to add cost without proportional value." },
  { q: "How much does AI development cost?", a: "AI development cost depends on the complexity of the problem being solved, the quality and availability of underlying data, whether the project involves custom model development or integration of existing AI services, and the scope of integration with existing systems. Costs vary significantly between a straightforward AI-powered feature and a complex enterprise AI system with extensive data preparation and integration needs, so an accurate estimate requires a discovery conversation about your specific requirements." },
  { q: "How long does it take to develop an AI solution?", a: "Timelines vary significantly based on the complexity of the problem, data readiness, and whether the project requires custom model training versus integrating existing AI services. Projects involving substantial data preparation or novel model development generally take longer than those integrating well-established AI capabilities into an existing application. A realistic timeline is typically confirmed after a discovery phase that assesses data availability and technical feasibility." },
  { q: "Can AI integrate with existing business software?", a: "Yes, AI and machine learning capabilities can integrate with existing ERP, CRM, ecommerce platforms, websites, and mobile applications through REST APIs, webhooks, and data synchronization. This allows AI-driven insights, chatbots, or automation to work directly within the systems your business already runs on, rather than requiring users to adopt an entirely separate tool." },
  { q: "Can you develop an AI-powered SaaS product?", a: "Yes, combining SaaS product engineering with AI capability is one of our core areas of work — building multi-tenant SaaS architecture with AI-powered features like intelligent search, automated reporting, predictive analytics, or an embedded AI assistant. The key is ensuring the AI feature solves a genuine problem for the product's users rather than being added as a differentiator without clear value." },
  { q: "What is the difference between AI and machine learning?", a: "Artificial intelligence is the broader field concerned with building systems that perform tasks typically requiring human intelligence. Machine learning is a specific subset of AI focused on systems that learn patterns from data to make predictions, rather than following explicitly programmed rules. All machine learning is AI, but not all AI relies on machine learning — some AI systems use other approaches, including generative AI models built on large language models." },
  { q: "What is the difference between generative AI and traditional AI?", a: "Traditional AI and machine learning systems typically classify, predict, or recommend from a fixed set of possible outputs based on patterns in data. Generative AI, most commonly built on large language models, can produce novel text, content, or structured output based on a prompt, rather than selecting from predefined categories. Generative AI applications often incorporate retrieval-augmented generation to ground outputs in specific organizational data rather than relying solely on the model's general training." },
  { q: "Can you build a custom AI chatbot?", a: "Yes, custom AI chatbot development is a core service, covering conversational assistants for customer support, sales lead qualification, and internal employee support, built on modern conversational AI rather than rigid decision trees. We design chatbots around your specific use case, knowledge base, and escalation requirements, with CRM integration and analytics to track performance after launch." },
  { q: "Can startups use AI and machine learning solutions?", a: "Yes, startups can use AI and machine learning, typically starting with a proof of concept to validate technical feasibility before committing to full development, since not every AI idea is viable at the scale or budget a startup can support initially. We recommend an MVP-focused approach — validating the core value proposition with the smallest reasonable feature set — rather than building extensive AI capability before there's evidence of real user demand." },
  { q: "Can emerging technologies be integrated into existing applications?", a: "Yes, AI, machine learning, and generative AI capabilities can be integrated into existing web applications, mobile apps, and business systems through APIs, without requiring a full rebuild. This typically involves adding AI-powered features — search, recommendations, chatbots, or predictive insights — to software you already operate, connected through REST APIs, webhooks, and appropriate authentication." },
  { q: "How do you secure AI-powered applications?", a: "AI application security covers data protection, authentication and authorization, encryption, API security, and access controls restricting AI systems to only the data and functions genuinely needed. For generative AI specifically, this also includes prompt security to prevent injection attacks, data minimization in what's exposed to models, and output validation before AI-generated content is acted on automatically. We don't claim formal compliance certifications like HIPAA or SOC 2 unless specifically verified for a given engagement." },
  { q: "Can you develop emerging technology solutions for US businesses?", a: "Yes, we work with businesses across the United States on AI, machine learning, generative AI, and SaaS development, including organizations in states like New York, California, Texas, and Florida. Projects are scoped around each business's specific problem and industry context, with remote collaboration throughout discovery, development, and ongoing support." },
  { q: "Can Canadian businesses hire emerging technology developers remotely?", a: "Yes, we work remotely with Canadian businesses on AI, machine learning, and SaaS development, including companies in Toronto, Vancouver, Montreal, and other Canadian cities. For Canadian projects, we account for considerations like bilingual requirements where relevant, with the entire process — from discovery through development and ongoing support — handled remotely using standard collaboration tools." },
];

export const finalCta = {
  headline: "Let's Build Your Emerging Technology Solution",
  body: "Whether you're exploring AI for the first time, ready to build a generative AI assistant on your own data, need a conversational AI chatbot, want to add machine learning-driven predictions to an existing product, or are building a new SaaS product from scratch, we can help you define a realistic path forward.",
  steps: [
    "Discuss your business goals",
    "Identify the specific technology opportunity worth pursuing",
    "Define requirements",
    "Evaluate technical feasibility, particularly important for AI and ML initiatives",
    "Create a solution architecture",
    "Develop an MVP or prototype to validate the approach",
    "Build and deploy the full solution",
    "Monitor and improve after launch",
  ],
  primaryCta: "Build an AI-Powered Product",
  secondaryCta: "Talk to a Technology Expert",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
