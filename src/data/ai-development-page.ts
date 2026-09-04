import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Building2,
  Layers,
  Zap,
  Brain,
  Eye,
  MessageSquareText,
  LineChart,
  Star,
  Search,
  ClipboardList,
  FileText,
  PenTool,
  TerminalSquare,
  TestTube2,
  Rocket,
  Shield,
  Activity,
  RefreshCw,
  Code2,
  Cpu,
  Lock,
  Scale,
  TrendingUp,
  Users,
  Database,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const aiDevelopmentSeo = {
  title: "AI Development Services | The Runner Software",
  description:
    "Custom AI development services — machine learning, computer vision, NLP & predictive analytics for scalable business solutions in the USA and Canada.",
  h1: "AI Development Services for Intelligent, Scalable Business Solutions",
  canonicalPath: "/services/emerging-technologies/ai-development",
  ogTitle: "AI Development Services | The Runner Software",
  ogDescription:
    "Custom AI development services — machine learning, computer vision, NLP & predictive analytics for scalable business solutions in the USA and Canada.",
  twitterTitle: "AI Development Services | The Runner Software",
  twitterDescription:
    "Custom AI development services — machine learning, computer vision, NLP & predictive analytics for scalable business solutions in the USA and Canada.",
};

export const aiDevelopmentHero = {
  subheading:
    "The Runner Software Solutions designs, builds, and integrates custom AI systems for businesses across the United States and Canada — from machine learning models that forecast demand or detect anomalies, to computer vision systems that automate visual inspection, to natural language processing that extracts structure from unstructured text.",
  valueProposition:
    "AI development covers the full range of artificial intelligence techniques applied to real business problems, not just the generative AI and chatbot applications that currently dominate public discussion of AI. We build AI-powered features into existing web, mobile, and SaaS applications, develop standalone enterprise AI platforms, and support businesses at every stage — from an early proof of concept validating whether an AI approach is even viable, through to production deployment and ongoing model monitoring. Every engagement starts with a specific business problem, not a predetermined technology.",
  primaryCta: "Start Your AI Project",
  secondaryCta: "Talk to an AI Development Expert",
  trustStatement: "",
};

export const whatIsAiDevelopment = {
  definition:
    "AI development is the process of designing, developing, integrating, deploying, and maintaining software systems that use artificial intelligence techniques to perform tasks that traditionally require human judgment or perception — recognizing patterns, making predictions, understanding language, or interpreting images.",
  areas: [
    "Machine Learning — systems that learn patterns from historical data to make predictions or classifications on new data",
    "Deep Learning — a subset of machine learning using neural networks, particularly effective for complex pattern recognition tasks like image and speech processing",
    "Natural Language Processing (NLP) — techniques for extracting structure and meaning from text, including classification, entity extraction, and sentiment analysis",
    "Computer Vision — techniques for extracting information from images and video, including object detection, classification, and optical character recognition",
    "Predictive Analytics — using historical data and statistical models to forecast future outcomes or flag risk",
    "Recommendation Systems — algorithms that predict what a user is likely to want based on behavioral patterns",
    "Intelligent Automation — combining AI techniques with workflow automation to handle tasks that previously required manual judgment",
    "Conversational AI — systems that understand and respond to natural language input, powering chatbots and voice assistants",
    "Generative AI — a specific, increasingly prominent category of AI, built on large language models, capable of producing novel text, content, or code from a prompt",
  ],
  broaderThanGenAi:
    "It's important to understand that AI development is broader than generative AI. Generative AI — the technology behind LLM-powered chatbots, content generation, and AI copilots — is one significant area within the larger field of AI development, not a synonym for it. Many valuable AI applications don't involve generative AI or large language models at all: a demand forecasting model, a fraud detection system, or a visual quality-inspection tool are all genuine AI development work built on machine learning, computer vision, or predictive analytics rather than LLMs.",
  generativeAiLink: {
    before: "If your specific interest is in LLM-powered applications, knowledge assistants, or generative content tools, our dedicated ",
    text: "Generative AI Development Services",
    href: etPath("generative-ai-development"),
    after: " page covers that area in depth. This page covers the full, broader scope of AI development.",
  },
};

export const aiDevelopmentServices = [
  { title: "Custom AI Software Development", desc: "Custom AI systems are designed around your specific business workflows, data, and requirements — rather than adapting a generic AI tool that approximates what you need. This approach fits problems with unique data structures, business logic, or accuracy requirements that off-the-shelf AI products can't reasonably address." },
  { title: "Enterprise AI Development", desc: "Enterprise AI systems support internal workflow automation, decision support, and integration with enterprise data across departments and systems, built with the scalability, security, and auditability that organizational deployment requires." },
  { title: "AI Application Development", desc: "We embed AI capability directly into web applications, mobile apps, SaaS platforms, and enterprise software — AI features that live inside the products your users and employees already interact with, rather than existing as a separate tool." },
  { title: "AI Integration Services", desc: "We integrate AI capabilities with CRM, ERP, ecommerce platforms, websites, mobile apps, databases, and internal software through APIs, connecting AI-driven insights and automation to the systems your business already runs on." },
  { title: "AI Automation", desc: "We apply AI to automate genuinely repetitive, pattern-based workflows: document processing, data classification, customer support triage, and intelligent routing of requests to the right team or process." },
  { title: "Machine Learning Development", desc: "We build predictive models, classification systems, regression models, forecasting tools, recommendation engines, and anomaly detection systems trained on your organization's actual data." },
  { title: "Computer Vision Development", desc: "We build systems for image classification, object detection, image analysis, optical character recognition (OCR), and visual inspection — applying computer vision to documents, products, and operational imagery." },
  { title: "Natural Language Processing", desc: "We build text classification, sentiment analysis, entity extraction, and document analysis systems that extract structured insight from unstructured text — distinct from, though sometimes complementary to, generative AI applications." },
  { title: "Predictive Analytics", desc: "We build forecasting and risk-prediction models — demand forecasting, customer behavior prediction, and operational insight generation grounded in your historical data." },
  { title: "Recommendation Systems", desc: "We build product and content recommendation engines, personalization systems, and ranking algorithms that surface relevant options based on user behavior and preferences." },
];

export const customAiDevelopment = {
  title: "Custom AI Development",
  steps: [
    "Business problem discovery — clearly defining the specific problem before evaluating any technical approach",
    "Data assessment — evaluating what data is available, its quality, and what gaps might need to be addressed before a model can be built reliably",
    "Model selection — choosing an appropriate technical approach based on the problem and data, not a default preference",
    "Architecture — designing how the AI component fits into the broader application and data infrastructure",
    "API development — building the interfaces through which the AI capability is exposed to the rest of the application",
    "AI integration — connecting the AI component to the application it will actually be used within",
    "Testing — validating that the system performs reliably on realistic new inputs, not just training data",
    "Deployment — releasing the system into production with appropriate monitoring in place",
    "Monitoring — tracking real-world performance after launch, since model behavior on live data can differ from validation results",
  ],
  whyCustom:
    "Off-the-shelf AI products are built to solve a common problem in a general way, which works well when your problem genuinely matches that general case. Custom development makes more sense when your data structure, business logic, accuracy requirements, or integration needs don't fit neatly into an existing product's assumptions. That said, custom AI development isn't automatically the better choice — if an existing tool already solves your problem well and cost-effectively, building a custom system adds unnecessary cost and long-term maintenance burden. We assess this honestly during discovery rather than defaulting to a custom build recommendation.",
};

export const enterpriseAiDevelopment = {
  title: "Enterprise AI Development",
  capabilities: [
    "Enterprise AI platforms — internal systems supporting multiple teams and use cases from shared infrastructure",
    "Internal AI tools — applications that help employees work more efficiently, from document search to decision support",
    "AI-powered workflows — automating multi-step business processes that span departments",
    "Decision-support systems — surfacing relevant data and predictions to support, not replace, human decision-making",
    "Predictive analytics at enterprise scale, integrated with existing business intelligence infrastructure",
    "Intelligent document processing for high-volume document workflows",
    "Enterprise search that understands intent across large, often siloed knowledge bases",
    "CRM AI and ERP AI — AI capability embedded directly into the core systems the business already runs on",
    "Analytics and automation integrated with existing operational reporting",
  ],
  requirements: [
    "Scalability — architecture built to handle enterprise data volume and concurrent usage",
    "Security — access controls and data protection appropriate to enterprise data sensitivity",
    "Access control — ensuring AI systems respect existing organizational permission structures",
    "Auditability — traceable records of AI system behavior and decisions where accountability matters",
    "Monitoring — production-grade visibility into system health and output quality",
    "Integration — connecting to the larger set of systems typical of enterprise environments",
    "Maintainability — built for a team that will maintain and extend the system over years, not just launch it once",
  ],
  closing:
    "Enterprise AI projects typically involve more stakeholders, more integration complexity, and stricter governance requirements than smaller-scale AI applications, which generally means more extensive discovery and architecture planning before development begins. We don't make unsupported compliance claims — regulatory and industry compliance requirements should be confirmed with your compliance function for your specific situation.",
};

export const aiApplicationDevelopment = {
  title: "AI Application Development",
  intro: "AI capability is increasingly embedded directly inside the applications businesses already use, rather than existing as a separate standalone tool:",
  applications: [
    "Web applications — AI-powered search, recommendations, or content features built into an existing or new website",
    "Mobile applications — AI capability like recommendation engines or intelligent features embedded in a mobile app",
    "SaaS platforms — AI-powered dashboards, insights, or automation differentiating a software product",
    "Enterprise software — AI features integrated into internal tools employees already use",
    "Customer portals — AI-driven personalization or support embedded in customer-facing account experiences",
    "Internal business applications — AI capability supporting day-to-day operational tools",
  ],
  buildingBlocks:
    "Building AI into an application involves the same core technical building blocks as any well-engineered feature: APIs connecting the AI component to the rest of the system, authentication controlling who can access AI-powered functionality, user roles determining what different users can see or do with AI features, databases storing the data AI components depend on, analytics tracking how AI features are actually used, dashboards surfacing AI-driven insight to users, and notifications alerting users to AI-generated findings or recommendations that need attention.",
};

export const aiAutomationServices = {
  title: "AI Automation Services",
  intro: "AI automation targets genuinely repetitive, pattern-based work — the kind of task that's time-consuming for people specifically because it's predictable, not because it requires deep judgment:",
  useCases: [
    "Document processing — automatically extracting and structuring data from invoices, forms, or contracts",
    "Email classification — routing incoming messages to the right team or workflow automatically",
    "Lead qualification — automatically scoring or routing inbound leads based on defined criteria",
    "Customer support — automating responses to common, well-defined questions",
    "Data extraction — pulling structured data out of unstructured sources",
    "Workflow routing — directing tasks or requests to the appropriate process or team automatically",
    "Reporting — generating routine reports that previously required manual compilation",
    "Content workflows — automating repetitive steps in content review or processing",
    "Internal knowledge retrieval — helping employees find answers to common internal questions faster",
    "Repetitive administrative tasks — data entry, formatting, or routing tasks that follow predictable patterns",
  ],
  closing:
    "Automation should be based on a measurable, well-defined business process — a workflow you can describe precisely, with data illustrating its current cost or bottleneck — rather than adding AI capability speculatively because automation sounds generically valuable.",
};

export const machineLearningDevelopment = {
  title: "Machine Learning Development",
  approaches: [
    "Supervised learning — training on labeled historical data to predict outcomes for new data",
    "Unsupervised learning — finding patterns or groupings in data without predefined labels",
    "Classification — predicting which category something belongs to",
    "Regression — predicting a continuous numerical value",
    "Clustering — grouping similar data points to reveal natural segments",
    "Forecasting — predicting future values based on historical trends",
    "Anomaly detection — identifying data points that deviate meaningfully from expected patterns",
    "Recommendation systems — predicting what a user is likely to want based on behavioral patterns",
  ],
  lifecycle: [
    { step: 1, title: "Data collection", desc: "Gathering the historical data a model will learn from" },
    { step: 2, title: "Data cleaning", desc: "Addressing missing values, inconsistencies, and errors in raw data" },
    { step: 3, title: "Data preparation", desc: "Structuring and formatting data appropriately for modeling" },
    { step: 4, title: "Feature engineering", desc: "Selecting and transforming the specific data attributes a model will use" },
    { step: 5, title: "Model development", desc: "Building and configuring the model" },
    { step: 6, title: "Training", desc: "Fitting the model to the prepared training data" },
    { step: 7, title: "Evaluation", desc: "Testing model accuracy and reliability against unseen data" },
    { step: 8, title: "Deployment", desc: "Integrating the trained model into production systems" },
    { step: 9, title: "Monitoring", desc: "Tracking real-world performance on live, evolving data" },
    { step: 10, title: "Retraining", desc: "Updating the model periodically as new data becomes available" },
  ],
  dataNote: "Model quality depends fundamentally on data quality — this is worth emphasizing because it's the most common source of underperforming AI projects, not algorithm selection.",
};

export const computerVisionDevelopment = {
  title: "Computer Vision Development",
  techniques: [
    "Image classification — categorizing an entire image into predefined categories",
    "Object detection — identifying and locating specific objects within an image",
    "OCR (Optical Character Recognition) — extracting text from scanned documents or images",
    "Document analysis — combining OCR with structural understanding to process forms, invoices, or contracts",
    "Image segmentation — identifying precise boundaries of specific regions within an image",
    "Visual inspection — automatically detecting defects or irregularities in product or equipment imagery",
    "Video analysis — extracting information from video streams, such as counting or tracking",
  ],
  examples: [
    "Manufacturing — automated visual inspection to flag product defects during production",
    "Document processing — extracting structured data from scanned invoices, forms, or contracts",
    "Retail — shelf and inventory monitoring through image analysis",
    "Logistics — package and label recognition in warehouse and shipping workflows",
    "Healthcare imaging, where appropriate — supporting workflow and administrative tasks, though we do not make medical diagnostic claims",
    "Security workflows — general visual monitoring applications, with facial recognition considered only where legally and ethically appropriate",
  ],
  closing:
    "We evaluate the legal and ethical appropriateness of computer vision applications — particularly around facial recognition and biometric identification — on a case-by-case basis, rather than defaulting to building whatever is technically feasible.",
};

export const nlpDevelopment = {
  title: "Natural Language Processing",
  techniques: [
    "Text classification — categorizing text into predefined categories, such as support ticket routing",
    "Sentiment analysis — determining the emotional tone of text, useful for customer feedback analysis",
    "Entity extraction — identifying specific pieces of information within unstructured text",
    "Document processing — combining classification and extraction to process large volumes of text documents",
    "Text summarization — condensing longer text into shorter summaries",
    "Language classification — identifying the language a piece of text is written in",
    "Search — improving search relevance by understanding text content and structure",
    "Customer feedback analysis — extracting themes and sentiment from reviews, surveys, or support interactions at scale",
  ],
  comparison:
    "Traditional NLP techniques classify, extract, or score text based on trained models, producing structured, predictable outputs from a fixed set of possibilities. Generative AI, built on large language models, produces novel, open-ended text output based on a prompt. Many practical applications combine both — for example, using traditional NLP to classify and route incoming text, and generative AI to draft a response once routing decisions are made.",
  generativeAiLink: {
    before: "For applications centered specifically on LLM-powered generation, our ",
    text: "Generative AI Development Services",
    href: etPath("generative-ai-development"),
    after: " page covers that area in more depth.",
  },
};

export const predictiveAnalytics = {
  title: "Predictive Analytics",
  intro: "Predictive analytics uses historical data and statistical models to forecast future outcomes or flag risk before it materializes:",
  useCases: [
    "Demand forecasting — predicting future product or service demand to inform inventory or staffing decisions",
    "Sales forecasting — projecting future revenue based on historical trends and pipeline data",
    "Customer churn prediction — identifying customers at elevated risk of leaving before they actually do",
    "Risk scoring — quantifying risk for decisions like credit, fraud, or operational exposure",
    "Inventory forecasting — predicting stock needs to reduce both overstock and stockout risk",
    "Operational forecasting — predicting resource or capacity needs based on historical operational patterns",
    "Anomaly detection — flagging data points that deviate from expected patterns, useful for fraud or quality monitoring",
  ],
  closing:
    "Predictive systems support decision-making by surfacing data-driven forecasts and risk signals that would be impractical to calculate manually — they inform human decisions rather than replace them in most business contexts. We don't promise specific accuracy percentages for predictive models, since actual accuracy depends entirely on data quality, problem complexity, and how much historical signal genuinely exists for the outcome being predicted.",
};

export const recommendationSystems = {
  title: "Recommendation Systems",
  intro: "Recommendation systems predict what a user is likely to want based on patterns in behavior — theirs and similar users':",
  types: [
    "Ecommerce recommendations — surfacing relevant products based on browsing and purchase history",
    "Content recommendations — surfacing relevant articles, videos, or other content based on engagement patterns",
    "Personalized experiences — tailoring what a user sees based on their individual behavior and preferences",
    "Product ranking — ordering search or listing results by predicted relevance to a specific user",
    "Collaborative filtering — recommending based on patterns across similar users",
    "Content-based approaches — recommending based on the characteristics of items a user has previously engaged with",
  ],
  value:
    "Recommendation systems increase the likelihood that users find relevant products or content without manually searching for it, which can improve engagement and reduce the friction between a user's intent and finding what they're looking for. The actual business impact depends on the quality of underlying data and how well the recommendation approach fits the specific product and user base.",
};

export const aiExistingSoftware = {
  title: "AI + Existing Software",
  intro: "Most valuable AI applications connect to systems a business already runs on, rather than operating in isolation:",
  systems: [
    "ERP systems — feeding AI-driven forecasts or automation into operational and inventory data",
    "CRM platforms — connecting predictive models or AI insights to customer and lead data",
    "POS systems — integrating AI-driven inventory or demand forecasting with point-of-sale data",
    "Ecommerce platforms — powering recommendations, search, or forecasting from storefront data",
    "Websites — embedding AI-powered search or personalization directly into an existing site",
    "Mobile applications — bringing AI capability into an existing app",
    "SaaS platforms — embedding AI features directly into an existing software product",
    "Databases — the underlying data source most AI applications draw from",
    "Internal software — connecting AI capability to whatever operational tools a business already depends on",
  ],
  technical:
    "Technically, this relies on REST APIs, and GraphQL where flexible, client-driven data queries add genuine value, webhooks for real-time, event-driven integration, authentication to secure connections between systems, data synchronization to keep connected systems consistent, and event-driven systems that trigger AI processing automatically as relevant business events occur.",
};

export const aiVsGenerativeAi = {
  title: "AI Development vs. Generative AI Development",
  intro: "It's worth being precise about how these relate, since the terms are often used loosely.",
  rows: [
    { factor: "Core techniques", aiDev: "Predictive models, classification, computer vision, recommendation systems, traditional NLP, automation", generativeAi: "Text generation, image generation, code generation" },
    { factor: "Underlying technology", aiDev: "Statistical models, neural networks, trained classifiers, rule-based automation", generativeAi: "Large Language Models (LLMs)" },
    { factor: "Typical outputs", aiDev: "A prediction, a category, a score, a detected object, a ranked list", generativeAi: "Novel generated text, content, or code from a prompt" },
    { factor: "Example applications", aiDev: "Demand forecasting, fraud detection, visual quality inspection, product recommendations", generativeAi: "Knowledge assistants, RAG systems, AI copilots, content drafting tools" },
    { factor: "Data relationship", aiDev: "Trained on and predicts from structured historical data", generativeAi: "Trained on massive text corpora, often grounded in specific data via retrieval-augmented generation" },
  ],
  closing:
    "AI development is the broader category. Generative AI is one significant, increasingly prominent area within that broader field. If your project centers on LLM-powered applications, our dedicated Generative AI Development Services page covers that specific area in depth.",
  generativeAiLink: etPath("generative-ai-development"),
};

export const aiChatbotSection = {
  title: "AI Chatbot Development",
  intro: "Conversational AI and AI assistants deserve specific mention as a common, high-value AI application:",
  useCases: [
    "Customer support — answering common questions and resolving straightforward issues automatically",
    "Lead generation — qualifying inbound interest and guiding prospects toward a next step",
    "Sales — assisting with product questions and guiding purchase decisions",
    "Internal support — answering employee questions about policies or internal processes",
    "Knowledge assistants — letting users query organizational knowledge in natural language",
    "FAQ automation — resolving high-volume, repetitive questions without human involvement",
    "CRM integration — logging conversation data and outcomes into existing sales or support systems",
    "Human handoff — recognizing when a conversation needs a live agent and transferring smoothly with context preserved",
  ],
  closing:
    "Modern AI chatbots are typically built on the same generative AI / LLM foundation, applied specifically to conversational interfaces.",
  chatbotLink: {
    before: "For a deeper look at chatbot-specific architecture, conversation design, and deployment considerations, see our dedicated ",
    text: "AI Chatbot Development",
    href: etPath("ai-chatbot-development"),
    after: " page.",
  },
};

export const technologyStack = [
  { label: "Programming languages", items: "Python for AI/ML development; JavaScript and TypeScript for application layers surrounding AI components" },
  { label: "AI/ML frameworks", items: "TensorFlow and PyTorch for building and training models; scikit-learn for traditional ML; Hugging Face for pretrained models and fine-tuning in NLP" },
  { label: "Backend", items: "Node.js and Express, or PHP and Laravel, for the application backend surrounding AI components, with dedicated Python APIs where model-serving logic is best kept in Python" },
  { label: "Frontend", items: "React and Next.js for building interfaces through which users interact with AI-powered features and dashboards" },
  { label: "Databases", items: "PostgreSQL and MySQL for structured application data; MongoDB where a flexible document model fits better; vector databases where semantic search or retrieval-based AI applications require them" },
  { label: "Cloud infrastructure", items: "AWS, Azure, and Google Cloud — choice depending on project requirements, existing organizational relationships, and cost considerations" },
  { label: "AI APIs", items: "OpenAI APIs and other model providers, where appropriate, used for capabilities that don't require custom model training" },
];

export const aiArchitecture = {
  title: "AI Architecture",
  layers: [
    "Frontend — the interface through which users interact with AI-powered features",
    "Backend — the application logic coordinating requests, business rules, and data flow",
    "API layer — the interface through which the frontend and other systems access AI capability",
    "AI service layer — the layer specifically responsible for AI/ML processing, often separated for maintainability and scalability",
    "Model layer — the trained models or model APIs performing predictions, classifications, or generation",
    "Data layer — where training data, application data, and model outputs are stored",
    "Vector databases, where appropriate — specialized storage for embeddings used in semantic search or retrieval-based AI applications",
    "Authentication — controlling access to AI capabilities and the data they process",
    "Monitoring — visibility into system health and AI output quality in production",
    "Logging — traceable records supporting debugging and accountability",
  ],
  factors: [
    "AI use case — a real-time recommendation system has different architectural needs than a batch-processed forecasting model",
    "Data volume — high-volume data pipelines require different infrastructure than smaller, periodic datasets",
    "Latency — applications needing instant responses require different architecture than background processing tasks",
    "Security — sensitive data requirements shape access control and data handling architecture",
    "Scalability — expected usage volume determines infrastructure sizing and design",
    "Model requirements — whether the project uses lightweight models, large pretrained models, or requires GPU infrastructure",
  ],
};

export const aiDataEngineering = {
  title: "AI Data Engineering",
  intro: "AI quality depends heavily on data quality — this is one of the most consistent findings across real-world AI projects, and worth stating plainly rather than glossing over. Data engineering work typically covers:",
  items: [
    "Data collection — gathering the data an AI system will be trained on or operate against",
    "Data cleaning — addressing missing values, duplicates, and inconsistencies",
    "Data validation — verifying data meets the quality and structural requirements a model needs",
    "Data pipelines — automated processes that move and transform data reliably",
    "Feature engineering — selecting and transforming the specific data attributes a model will use",
    "Data storage — appropriate storage architecture for the data volume and access patterns involved",
    "Data governance — clear ownership, access rules, and quality standards for the data an AI system depends on",
    "Data quality — ongoing monitoring to catch degradation that would silently degrade model performance",
  ],
  closing:
    "We don't overclaim what data engineering can fix — if the underlying data genuinely doesn't contain the signal needed to predict an outcome, no amount of data engineering will manufacture a viable model.",
};

export const aiSecurity = {
  title: "AI Security",
  intro: "Security for AI systems requires attention beyond standard application security practices:",
  items: [
    "Authentication and authorization — controlling who can access AI systems and what data or actions they can access",
    "Encryption — protecting sensitive data both in transit and at rest",
    "Secure APIs — authenticated, rate-limited endpoints for AI capabilities",
    "Access control — restricting AI system access to only the data and functions genuinely needed",
    "Data minimization — limiting what sensitive data is actually exposed to AI models or processing pipelines",
    "Secure storage — appropriate handling of training data and model artifacts",
    "Logging and monitoring — tracking system access and behavior for accountability and anomaly detection",
    "Model access — restricting who can modify, retrain, or reconfigure deployed models",
    "Prompt security, where applicable — relevant to LLM-based components of an AI system",
    "Sensitive data handling — particular care around personally identifiable or business-confidential information",
    "Input validation — checking data provided to AI systems before processing",
    "Output validation — checking AI-generated outputs before they're acted on, particularly for consequential decisions",
  ],
  genAiNote:
    "For generative AI-related components specifically, additional considerations apply: prompt injection, data leakage through model outputs, unsafe outputs that need filtering, model misuse prevention, and appropriate guardrails constraining what the system can and cannot do.",
  disclaimer:
    "We do not claim regulatory compliance (HIPAA, SOC 2, ISO standards, GDPR, or others) unless specifically verified for a given engagement.",
};

export const responsibleAi = {
  title: "Responsible AI",
  intro: "Responsible AI development matters because AI systems that behave unpredictably, unfairly, or opaquely create genuine operational and reputational risk for the businesses that deploy them. Our approach considers:",
  practices: [
    { title: "Transparency", desc: "Understanding and being able to explain, to a reasonable degree, how a system arrives at its outputs" },
    { title: "Human oversight", desc: "Keeping humans in the loop for consequential decisions rather than fully automating high-stakes outcomes without review" },
    { title: "Fairness and bias considerations", desc: "Recognizing that models trained on historical data can reflect and perpetuate patterns present in that data" },
    { title: "Privacy", desc: "Handling personal and sensitive data with appropriate care and minimization" },
    { title: "Explainability", desc: "Some model types and use cases genuinely warrant more interpretable approaches, particularly where decisions significantly affect individuals" },
    { title: "Output validation", desc: "Systematically checking AI outputs for accuracy and appropriateness before automating downstream actions" },
    { title: "Monitoring", desc: "Sustained attention to how AI systems behave in production, not just at initial deployment" },
    { title: "Model evaluation", desc: "Ongoing, structured assessment of whether a model continues to perform reliably as data and conditions change" },
  ],
  closing: "Responsible AI isn't a separate compliance checkbox — it's integrated throughout discovery, development, testing, and ongoing maintenance of any AI system we build.",
};

export const aiModelDevelopment = {
  title: "AI Model Development & Integration",
  approaches: [
    "Existing AI models — pretrained models available for common tasks that can be used with little or no additional training",
    "Third-party APIs — AI capability accessed through a vendor's API without building or hosting any model infrastructure yourself",
    "Open-source models — pretrained models that can be self-hosted and fine-tuned on your own data",
    "Custom-trained models — models built and trained specifically on your organization's data for problems that don't match any existing model's assumptions",
  ],
  whenToUse: [
    "Third-party APIs and existing pretrained models are usually the fastest, lowest-cost starting point for well-established problem types",
    "Open-source models make sense when you need more control, lower ongoing per-use cost at scale, or the ability to fine-tune on proprietary data without sending it to a third party",
    "Custom-trained models make sense when your problem is specific enough, or your data distinctive enough, that no existing model performs adequately",
  ],
  tradeoffs: [
    "Cost — third-party APIs typically have lower upfront cost but ongoing usage-based pricing; custom model development has higher upfront cost but potentially lower long-term per-use cost at scale",
    "Performance — custom models can outperform general-purpose models on narrow, well-defined problems, but require sufficient quality training data",
    "Customization — custom-trained models offer the most control over behavior, at the cost of development time",
    "Infrastructure — self-hosted or custom models require infrastructure for training and serving that third-party APIs abstract away",
    "Data privacy — self-hosted or custom models keep data within your infrastructure; third-party APIs involve sending data to an external provider",
    "Maintenance — custom and self-hosted models require ongoing monitoring and retraining; third-party APIs shift much of that maintenance burden to the provider",
  ],
  closing: "Custom model training is not always necessary — a substantial share of valuable AI applications are built effectively using existing models and APIs. We recommend custom model development only when the specific problem genuinely warrants it, not as a default approach.",
};

export const aiDevelopmentProcess = [
  { icon: Search, title: "Business Discovery", desc: "We learn your business, goals, and the operational context around the problem." },
  { icon: ClipboardList, title: "AI Opportunity Assessment", desc: "We evaluate whether AI is genuinely a good fit for the problem, and if so, which type of AI approach." },
  { icon: FileText, title: "Requirements Analysis", desc: "We document functional requirements and success criteria." },
  { icon: Database, title: "Data Assessment", desc: "We evaluate what data is available, its quality, and what gaps might need addressing." },
  { icon: Layers, title: "Technical Feasibility", desc: "We assess whether the proposed approach is realistically achievable given the data and requirements." },
  { icon: PenTool, title: "Solution Architecture", desc: "We design the technical approach, including how AI components integrate with the broader application." },
  { icon: TerminalSquare, title: "Proof of Concept", desc: "We validate the technical approach at a smaller scale before committing to full development." },
  { icon: Brain, title: "Model / AI Integration", desc: "We integrate the selected model or AI service into the application architecture." },
  { icon: Code2, title: "Application Development", desc: "We build the surrounding application the AI capability lives within." },
  { icon: Zap, title: "API Integration", desc: "We connect the AI system to existing business systems as needed." },
  { icon: TestTube2, title: "Testing", desc: "We test functionality, accuracy, and reliability before launch." },
  { icon: Shield, title: "Security Validation", desc: "We review data handling, access controls, and AI-specific security considerations." },
  { icon: Activity, title: "Performance Optimization", desc: "We tune the system for real-world usage patterns and scale." },
  { icon: Rocket, title: "Deployment", desc: "We release the solution into production with a controlled rollout." },
  { icon: Eye, title: "Monitoring", desc: "We track system health and ongoing output quality and accuracy in production." },
  { icon: RefreshCw, title: "Continuous Improvement", desc: "We support ongoing refinement as usage patterns, data, and business needs evolve." },
];

export const aiMvpDevelopment = {
  title: "AI MVP Development",
  intro: "For businesses exploring a new AI idea, we generally recommend validating before fully committing:",
  points: [
    "AI proof of concept — a small-scale technical validation confirming the approach is feasible before larger investment",
    "AI MVP — the smallest viable version of an AI-powered feature or product that still tests the core value proposition",
    "Feature prioritization — focusing on the single AI capability that matters most rather than building broad AI functionality upfront",
    "Validation — using the MVP specifically to learn whether the AI approach delivers real value to users",
    "User feedback — building mechanisms to learn from real usage quickly",
    "Analytics — instrumenting the AI feature from day one so usage data informs what to build next",
    "Iterative development — treating the MVP as a starting point that evolves based on what's learned",
  ],
  closing:
    "Businesses can validate AI ideas before making a large investment by starting with a proof of concept scoped specifically to answer the riskiest technical question — usually \"does this approach actually work well enough on our real data?\" — before committing to full production development.",
};

export const industryUseCases = [
  { industry: "Healthcare", desc: "Patient engagement tools, appointment scheduling automation, document processing for administrative workflows — with no diagnostic claims implied and appropriate clinical oversight required for anything touching diagnosis or treatment" },
  { industry: "Finance", desc: "Fraud detection, risk analysis models, forecasting, and AI-assisted customer support" },
  { industry: "Ecommerce", desc: "Product recommendations, personalization, demand forecasting, and AI-assisted customer support" },
  { industry: "Logistics", desc: "Route optimization, demand forecasting, document processing, and anomaly detection in shipment data" },
  { industry: "Manufacturing", desc: "Predictive maintenance models, visual inspection for quality control, and demand forecasting" },
  { industry: "Real Estate", desc: "Lead scoring, property recommendation systems, document processing, and market analytics" },
  { industry: "Education", desc: "Personalized learning support, student support tools, learning analytics, and content assistance" },
  { industry: "Retail", desc: "Recommendation systems, inventory forecasting, customer analytics, and workflow automation" },
];

export const usaSection = {
  title: "AI Development for USA Businesses",
  body: "We work with businesses across the United States building custom AI solutions, including organizations based in New York, California, Texas, Florida, Washington, Illinois, Massachusetts, and New Jersey, among other states. Whether you're a manufacturer in the Midwest exploring predictive maintenance, a financial services company in New York building fraud detection, or a retailer in California building recommendation systems, we scope AI development around your specific business problem and data. As an AI development company serving the USA, our team works remotely with distributed stakeholders throughout discovery, development, and ongoing support.",
};

export const canadaSection = {
  title: "AI Development for Canadian Businesses",
  body: "We also support Canadian businesses building custom AI solutions, including companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, and Edmonton. Canadian AI projects sometimes involve bilingual requirements — particularly for NLP applications processing both English and French content — which we factor into data and model considerations where relevant. As with our US engagements, Canadian projects are handled remotely across discovery, development, and post-launch support.",
};

export const aiDevelopmentCost = {
  title: "AI Development Cost",
  intro: "AI development cost depends primarily on project complexity, data readiness, and the depth of integration required — not a single flat rate. Key cost drivers include:",
  drivers: [
    "Overall project complexity and the specific AI technique involved",
    "AI model requirements — whether existing models/APIs suffice or custom model development is needed",
    "Data requirements — including how much data preparation and cleaning is needed before modeling can begin",
    "Application complexity surrounding the AI component",
    "Number and complexity of system integrations",
    "Security requirements appropriate to data sensitivity",
    "UI/UX complexity for any user-facing AI features",
    "Backend and infrastructure requirements",
    "Ongoing model usage costs, for projects relying on third-party AI APIs",
    "Testing scope, including AI-specific accuracy and reliability testing",
    "Monitoring infrastructure for post-launch model performance tracking",
    "Ongoing maintenance needs",
  ],
  closing:
    "As a general industry reference point, a proof of concept using existing models or APIs typically represents a smaller investment than a full production application, which in turn is smaller than an enterprise AI platform involving custom model development, extensive data engineering, and multiple system integrations. These are approximate industry patterns rather than The Runner Software Solutions pricing — actual cost depends entirely on your specific scope, confirmed through discovery.",
};

export const aiDevelopmentTimeline = {
  title: "AI Development Timeline",
  intro: "Timeline depends heavily on scope and, critically, on data readiness. As general reference points:",
  tiers: [
    "A proof of concept validating technical feasibility typically has the shortest timeline",
    "An MVP with a focused feature set generally requires more time than a proof of concept but less than a full production application",
    "A business application with moderate integrations and a defined AI capability requires additional time for integration and testing",
    "An enterprise AI platform with extensive integrations, custom model development, and stricter security and governance requirements generally requires the longest timeline",
  ],
  factors: "Factors affecting timeline include data readiness, model complexity, number of integrations, feature scope, security requirements, and testing depth. We don't promise fixed delivery dates upfront — a realistic timeline is confirmed after requirements and data readiness are assessed during discovery.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: "Custom software engineering", desc: "AI solutions built around your specific business problem, not a generic AI product" },
  { icon: Brain, title: "AI development expertise", desc: "Genuine experience across machine learning, computer vision, NLP, and predictive analytics, not just generative AI integration" },
  { icon: Layers, title: "Full-stack capabilities", desc: "The ability to build both the AI component and the surrounding application it lives within" },
  { icon: Zap, title: "API integration", desc: "Deep experience connecting AI capability to ERP, CRM, ecommerce, and other existing business systems" },
  { icon: TrendingUp, title: "Scalable architecture", desc: "Systems designed to handle growth in data volume and usage" },
  { icon: Cpu, title: "AI/ML expertise", desc: "Technical depth across the actual range of AI techniques, applied to the problem that genuinely fits" },
  { icon: Lock, title: "Security-conscious development", desc: "Security addressed throughout the development lifecycle, including AI-specific considerations" },
  { icon: TestTube2, title: "Structured testing", desc: "Dedicated testing of AI accuracy and reliability, not just standard application functionality" },
  { icon: TerminalSquare, title: "Maintainable code", desc: "Built for long-term supportability, not just a working prototype" },
  { icon: Users, title: "Long-term support", desc: "Available for ongoing monitoring, maintenance, and improvement after launch" },
];

export const aiDevelopmentFaqs = [
  { q: "What is AI development?", a: "AI development is the process of designing, developing, integrating, deploying, and maintaining software systems that use artificial intelligence techniques to perform tasks traditionally requiring human judgment or perception. It spans machine learning, deep learning, natural language processing, computer vision, predictive analytics, and recommendation systems, and is broader than generative AI, which is one specific area of AI development built on large language models." },
  { q: "What does an AI development company do?", a: "An AI development company designs, builds, integrates, and maintains AI-powered software systems, including custom machine learning models, computer vision applications, NLP systems, and AI-powered features embedded in existing applications. This typically includes data assessment, model development or integration, application development, security implementation, and ongoing monitoring and maintenance after launch. Scope varies from a small proof of concept to a full enterprise AI platform." },
  { q: "What are AI development services?", a: "AI development services cover the full range of work involved in bringing an AI capability to production — business problem assessment, data evaluation, model selection or development, application development, API integration with existing business systems, testing, deployment, and ongoing monitoring. Services span custom AI software, enterprise AI platforms, AI-powered applications, and AI automation across machine learning, computer vision, and NLP use cases." },
  { q: "How much does AI development cost?", a: "AI development cost depends on project complexity, data readiness, whether existing AI models/APIs suffice or custom model development is needed, and the scope of application development and integrations. A proof of concept using existing AI services typically costs less than a full production application, which in turn costs less than an enterprise AI platform involving custom model development. These are general industry patterns rather than fixed pricing — an accurate estimate requires discovery." },
  { q: "How long does AI development take?", a: "Timelines vary significantly based on scope and data readiness. A proof of concept typically has the shortest timeline, while an enterprise AI platform with custom model development and extensive integrations requires the longest. Data readiness in particular meaningfully affects timeline — data requiring significant cleaning or collection extends the schedule. A realistic timeline is confirmed after requirements and data readiness are assessed during discovery." },
  { q: "What is custom AI development?", a: "Custom AI development means building an AI system designed around your specific business workflows, data structure, and requirements, rather than adapting a generic AI tool. This makes sense when your problem, data, or accuracy requirements don't fit neatly into an existing product's assumptions. It's not automatically the better choice — when an existing tool already solves the problem well, custom development adds unnecessary cost and long-term maintenance burden." },
  { q: "What types of AI solutions can you develop?", a: "We develop machine learning models for prediction, classification, and forecasting; computer vision systems for image and document analysis; natural language processing for text classification and entity extraction; recommendation systems; AI automation for repetitive workflows; and enterprise AI platforms combining several of these techniques. We also develop generative AI and AI chatbot solutions, covered in more depth on their own dedicated service pages." },
  { q: "What is the difference between AI and machine learning?", a: "Artificial intelligence is the broader field concerned with building systems that perform tasks typically requiring human intelligence. Machine learning is a specific subset of AI focused on systems that learn patterns from data to make predictions, rather than following explicitly programmed rules. All machine learning is AI, but AI also includes other approaches, including rule-based systems and generative AI models." },
  { q: "What is the difference between AI and generative AI?", a: "AI development is the broader category, including predictive models, classification, computer vision, recommendation systems, and traditional NLP. Generative AI is one specific, increasingly prominent area within AI, built on large language models capable of producing novel text, content, or code from a prompt. Not every AI application involves generative AI — many valuable AI systems, like fraud detection or demand forecasting, don't use LLMs at all." },
  { q: "Can AI integrate with existing business software?", a: "Yes, AI capabilities can integrate with existing ERP, CRM, ecommerce platforms, POS systems, and internal software through REST APIs, webhooks, and data synchronization. This allows AI-driven predictions, automation, or insights to work directly within the systems your business already runs on, rather than requiring a separate standalone tool." },
  { q: "Can AI be integrated into a mobile application?", a: "Yes, AI capabilities such as recommendation engines, predictive features, or intelligent search can be integrated into existing or new mobile applications through APIs. This typically involves building a backend AI service that the mobile app communicates with, since mobile apps generally call AI capability remotely rather than running complex models entirely on-device." },
  { q: "Can you build an AI-powered SaaS product?", a: "Yes, we build SaaS products with embedded AI capability — AI-powered dashboards, automated insights, recommendation features, or predictive analytics built directly into a subscription software product. This combines SaaS product engineering with AI development, ensuring the AI feature solves a genuine problem for the product's users rather than being added without clear value." },
  { q: "Can you develop AI chatbots?", a: "Yes, AI chatbot development is one of our core AI application areas, covering conversational assistants for customer support, sales, and internal use, typically built on generative AI and large language models. Our dedicated AI Chatbot Development page covers conversation design, CRM integration, and deployment considerations in more depth." },
  { q: "Can you develop computer vision solutions?", a: "Yes, computer vision development covers image classification, object detection, OCR, document analysis, and visual inspection applications, used in contexts like manufacturing quality control, document processing, and retail inventory monitoring. We evaluate the legal and ethical appropriateness of computer vision applications, particularly around facial recognition, on a case-by-case basis rather than defaulting to whatever is technically feasible." },
  { q: "Can you develop predictive analytics solutions?", a: "Yes, predictive analytics development covers demand forecasting, sales forecasting, customer churn prediction, risk scoring, and anomaly detection, built on your organization's historical data. These systems support human decision-making by surfacing data-driven forecasts and risk signals, rather than replacing judgment entirely. We don't promise specific accuracy percentages, since actual accuracy depends on data quality and problem complexity." },
  { q: "What programming languages are used for AI development?", a: "Python is the standard language for AI and machine learning development, supported by frameworks like TensorFlow, PyTorch, and scikit-learn. JavaScript and TypeScript are used for the application layers surrounding AI components, including APIs, backend services, and frontend interfaces that AI capability gets embedded within." },
  { q: "How do you secure AI applications?", a: "AI application security covers authentication, authorization, encryption, secure APIs, access control, data minimization, and input/output validation. For AI systems involving LLM components specifically, additional considerations include prompt injection prevention, data leakage protection, and guardrails constraining system behavior. We don't claim formal compliance certifications like HIPAA or SOC 2 unless specifically verified for a given engagement." },
  { q: "Can startups build AI MVPs?", a: "Yes, we recommend starting with a proof of concept to validate technical feasibility on real data before committing to full development, followed by an AI MVP focused on the single capability that matters most. This sequencing lets startups validate whether an AI approach genuinely delivers value before making a larger investment, avoiding the common pattern of overbuilding before confirming feasibility." },
  { q: "Can US businesses hire your AI development team?", a: "Yes, we work with businesses across the United States on AI development, including organizations in states like New York, California, Texas, and Florida. Projects are scoped around each business's specific problem and data, with remote collaboration throughout discovery, development, and ongoing support regardless of location within the US." },
  { q: "Can Canadian businesses hire your AI development team?", a: "Yes, we work remotely with Canadian businesses on AI development, including companies in Toronto, Vancouver, Montreal, and other Canadian cities. For Canadian projects, we account for considerations like bilingual data requirements where relevant, with the entire process handled remotely from discovery through ongoing support." },
];

export const finalCta = {
  headline: "Let's Build Your AI Solution",
  body: "Whether you're exploring your first AI use case, need to add predictive or automation capability to an existing application, or are building an enterprise AI platform from the ground up, we can help you define a realistic path forward — grounded in your actual data and business problem, not generic AI positioning.",
  steps: [
    "Discuss business goals",
    "Identify AI opportunities specific to your operations",
    "Assess data and technical requirements",
    "Define solution architecture",
    "Build a proof of concept to validate feasibility",
    "Develop the solution",
    "Test and deploy",
    "Monitor and improve after launch",
  ],
  crossLinks: [
    { before: "For businesses whose AI needs extend into a broader platform, our ", text: "Software Product Development", href: "/services/software-development/software-product-development", after: " team can support the wider technology roadmap alongside the AI component, and our " },
    { before: "", text: "Machine Learning Solutions", href: etPath("machine-learning-solutions"), after: " and " },
    { before: "", text: "SaaS Development Services", href: etPath("saas-development"), after: " pages go deeper into those specific areas if that's where your project is headed." },
  ],
  primaryCta: "Build a Custom AI Solution",
  secondaryCta: "Discuss Your AI Idea",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
