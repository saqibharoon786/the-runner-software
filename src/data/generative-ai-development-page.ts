import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
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
  Layers,
  Zap,
  Brain,
  Database,
  Users,
  TrendingUp,
  Bot,
  MessageSquare,
  Eye,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const generativeAiDevelopmentSeo = {
  title: "Generative AI Development Services | The Runner",
  description:
    "Custom Generative AI development — LLM applications, RAG, AI agents & knowledge assistants for businesses in the USA and Canada. Build with confidence.",
  h1: "Generative AI Development Services for Intelligent Business Applications",
  canonicalPath: "/services/emerging-technologies/generative-ai-development",
  ogTitle: "Generative AI Development Services | The Runner",
  ogDescription:
    "Custom Generative AI development — LLM applications, RAG, AI agents & knowledge assistants for businesses in the USA and Canada.",
  twitterTitle: "Generative AI Development Services | The Runner",
  twitterDescription:
    "Custom Generative AI development — LLM applications, RAG, AI agents & knowledge assistants for businesses in the USA and Canada.",
};

export const generativeAiHero = {
  subheading:
    "The Runner Software Solutions builds custom generative AI applications — LLM-powered knowledge assistants grounded in your own data, AI agents that carry out multi-step tasks, AI copilots embedded in internal tools, and retrieval-augmented generation (RAG) systems that make your organization's documents genuinely searchable and usable.",
  valueProposition:
    "Generative AI development is our focused specialty within the broader field of AI: building production-grade applications on large language models, not just wiring a chat interface to an API. We work with businesses that have real internal knowledge — documentation, policies, product information, historical records — that's currently hard to search or use, and with businesses that want to embed AI copilots or automation directly into existing products and workflows. Every generative AI system we build accounts for the specific engineering challenges LLM applications introduce: grounding responses in real data, evaluating output quality, managing cost, and securing systems against generative-AI-specific risks like prompt injection.",
  primaryCta: "Start Your Generative AI Project",
  secondaryCta: "Talk to a Generative AI Expert",
};

export const whatIsGenerativeAi = {
  definition:
    "Generative AI development is the engineering process involved in creating applications capable of generating or transforming content — text, code, images, audio, video, or structured information — using AI models trained to produce novel output rather than simply classify or predict from fixed categories.",
  components: [
    "Large Language Models (LLMs) and foundation models — the underlying models capable of understanding and generating text",
    "APIs — the interfaces through which applications access LLM capability",
    "Embeddings — numerical representations of text meaning, enabling content to be compared and searched by semantic similarity",
    "Vector databases — specialized storage systems optimized for searching embeddings efficiently at scale",
    "Retrieval systems — the logic that finds and surfaces relevant content to ground an LLM's response in real, specific data",
    "Prompt engineering — the deliberate design of instructions and context given to an LLM to produce reliable, useful output",
    "AI agents — systems that can take multi-step actions, potentially calling tools or APIs, to complete a task",
    "Application logic — the surrounding software that connects generative AI capability to a real user-facing product or workflow",
    "Evaluation — systematic testing of whether outputs are actually accurate and useful",
    "Security — protecting the application against risks specific to LLM-based systems",
  ],
  closing:
    "Generative AI development is meaningfully more than connecting an application to an LLM API. A basic API integration can produce a working demo, but a production-ready generative AI application requires grounding responses in the right data, designing and iterating on prompts, evaluating output quality systematically, managing cost as usage scales, and securing the system against risks like prompt injection and data leakage.",
};

export const generativeAiServices = [
  { title: "Custom Generative AI Development", desc: "We design generative AI applications around your specific business workflows and data — not a generic chatbot template, but a system built for your actual use case, content, and integration requirements." },
  { title: "LLM Application Development", desc: "We build applications powered by large language models — conversational tools, content generation systems, classification and extraction tools, and applications using structured output and function calling to interact reliably with other systems." },
  { title: "RAG Development", desc: "We build retrieval-augmented generation systems that ground LLM responses in your organization's own documents and data, rather than relying solely on a model's general training — one of the most technically demanding and business-critical parts of production generative AI work." },
  { title: "AI Agent Development", desc: "We build AI agents capable of reasoning through multi-step tasks, calling tools and APIs, and completing workflows that go beyond a single question-and-answer exchange, with appropriate human oversight built in." },
  { title: "AI Copilot Development", desc: "We build AI copilots that assist human workers within their existing tools and workflows — augmenting judgment and speeding up tasks rather than operating fully autonomously." },
  { title: "AI Knowledge Assistant Development", desc: "We build internal AI assistants that let employees query company documentation, policies, and structured data in natural language, with proper access control and citation of sources." },
  { title: "Enterprise Generative AI", desc: "We build generative AI systems designed for organizational scale — governance, access control, auditability, and integration with existing enterprise systems." },
  { title: "AI Document Intelligence", desc: "We build generative AI-powered document processing systems that extract, classify, summarize, and structure information from contracts, invoices, reports, and other business documents." },
  { title: "Semantic Search", desc: "We build search systems that understand the meaning behind a query, not just exact keyword matches — surfacing relevant results even when the wording doesn't match exactly." },
  { title: "Generative AI Integration", desc: "We integrate generative AI capability into existing web applications, mobile apps, SaaS platforms, and enterprise systems through APIs." },
  { title: "AI Automation", desc: "We apply generative AI to automate content-heavy, judgment-adjacent workflows — document processing, research assistance, and reporting — with appropriate human review for sensitive decisions." },
  { title: "Generative AI MVP Development", desc: "We help businesses validate a generative AI product idea through a scoped proof of concept and MVP before committing to a full platform build." },
];

export const customGenerativeAi = {
  title: "Custom Generative AI Development",
  steps: [
    "Business requirements — clearly defining what the application actually needs to accomplish and for whom",
    "Model selection — choosing an appropriate LLM based on capability, cost, latency, and data privacy requirements",
    "Prompt design — crafting and iterating on the instructions and context given to the model",
    "Data integration — connecting the application to the specific data it needs to be useful and accurate",
    "Retrieval — building the logic that finds and surfaces relevant content to ground responses",
    "Application architecture — designing how the generative AI component fits into the broader system",
    "APIs — building the interfaces connecting generative AI capability to the rest of the application",
    "Security — protecting the application against LLM-specific risks alongside standard application security",
    "Evaluation — systematically testing output quality before and after launch",
    "Deployment — releasing the system into production with monitoring in place",
    "Monitoring — tracking real-world output quality, cost, and performance after launch",
  ],
  closing:
    "Why simply adding an LLM API doesn't automatically create a production-ready AI product: A prototype that calls an LLM API and displays the response can be built quickly, but production use introduces requirements a prototype doesn't need to satisfy — consistent output quality across a wide range of real user inputs, grounding in accurate and current data, cost management as usage scales, security against adversarial inputs, and a way to systematically evaluate whether the system is actually working well over time.",
};

export const llmApplicationDevelopment = {
  title: "LLM Application Development",
  applicationTypes: [
    "Conversational applications — interfaces where users interact with the system through natural language dialogue",
    "Text generation — producing drafts, summaries, or structured content as a starting point for human review",
    "Summarization — condensing longer documents or conversations into concise summaries",
    "Classification — using an LLM's language understanding to categorize text",
    "Extraction — pulling specific structured information out of unstructured text",
    "Transformation — converting content from one format or style to another",
    "Content workflows — multi-step processes where an LLM assists at one or more stages",
    "Structured output — configuring an LLM to return data in a specific, predictable format like JSON",
    "Function calling / tool usage — allowing an LLM to invoke specific functions or external tools as part of generating a response",
  ],
  integrationTargets: [
    "SaaS platforms — embedding LLM-powered features directly into a subscription software product",
    "Websites — powering AI-assisted search, content generation, or interactive tools",
    "Mobile applications — bringing conversational or content-generation capability into an app",
    "Enterprise platforms — embedding LLM capability into internal tools and workflows",
    "Internal systems — connecting LLM capability to operational tools employees already use",
  ],
};

export const ragDevelopment = {
  title: "RAG Development",
  definition:
    "Retrieval-Augmented Generation (RAG) is the technique of grounding an LLM's response in specific, relevant content retrieved from your own data — rather than relying solely on the model's general training, which has a fixed knowledge cutoff and no awareness of your organization's private information.",
  pipeline: [
    "Document ingestion — bringing source documents into the system",
    "Chunking — breaking documents into appropriately sized segments",
    "Embeddings — converting each chunk into a numerical representation capturing its semantic meaning",
    "Vector databases — storing embeddings in a system optimized for fast similarity search at scale",
    "Metadata — attaching structured information to chunks to support filtering and access control",
    "Semantic search — finding chunks whose meaning matches a user's query",
    "Retrieval — finding and pulling the most relevant chunks for a given query",
    "Reranking — reordering initially retrieved results by relevance",
    "Context construction — assembling retrieved chunks into a well-structured prompt",
    "LLM generation — the model producing a response grounded in the retrieved context",
    "Citations — surfacing which source documents informed the response",
    "Evaluation — systematically testing whether retrieval finds the right content and responses are accurate",
  ],
  whyRag:
    "A general-purpose LLM has no knowledge of your internal policies, current product documentation, or proprietary data. RAG solves this by retrieving relevant, current, organization-specific content and including it directly in what the model sees when generating a response.",
  useCases: [
    "Internal knowledge bases — letting employees query company knowledge in natural language",
    "Policies — making HR, compliance, or operational policies searchable and answerable conversationally",
    "Product documentation — powering customer or internal support tools grounded in accurate, current product information",
    "Support documentation — reducing support ticket volume by letting users self-serve against grounded documentation",
    "Company knowledge — surfacing institutional knowledge that would otherwise require asking a specific person",
    "Technical manuals — making dense technical documentation more accessible through natural language queries",
    "Enterprise documents — searching and querying large document repositories that are otherwise hard to navigate",
  ],
  limitations: [
    "Poor source data — RAG can only surface what exists in the underlying documents",
    "Incorrect retrieval — if the retrieval step doesn't find genuinely relevant content, the LLM will generate based on wrong context",
    "Incomplete context — chunking and context length limits mean the model doesn't always see the full picture",
    "Hallucinations — even with retrieval, LLMs can occasionally generate content not supported by retrieved context",
    "Access-control issues — RAG systems need to respect who is allowed to see which source content",
  ],
};

export const aiAgentDevelopment = {
  title: "AI Agent Development",
  intro: "AI agents are systems that go beyond a single question-and-answer exchange — they can reason through a task, take actions, and interact with other systems to accomplish a multi-step goal:",
  capabilities: [
    "Reasoning through tasks — breaking a goal down into steps and determining what actions are needed",
    "Tool and function calling — invoking specific functions, APIs, or external tools as part of completing a task",
    "Accessing APIs — connecting to business systems to retrieve information or take action",
    "Retrieving information — pulling relevant data needed to complete a step",
    "Multi-step workflows — executing a sequence of actions toward a larger goal",
    "Interacting with business systems — reading from or writing to CRMs, databases, or other operational systems",
  ],
  technicalComponents: [
    "Planning — the agent's process for determining what steps are needed and in what order",
    "Memory, where appropriate — retaining context across a multi-step task or across sessions",
    "Workflow orchestration — coordinating multiple steps, tools, and potentially multiple models",
    "Human approval — building in checkpoints where a human reviews or approves an agent's proposed action",
    "Guardrails — constraints limiting what actions an agent can take and under what conditions",
    "Monitoring — visibility into what an agent is doing and why",
  ],
  examples: [
    "Sales agents — assisting with lead research, qualification, and follow-up task execution",
    "Research assistants — gathering and synthesizing information from multiple sources",
    "Customer service agents — handling multi-step support interactions",
    "Internal operations agents — automating multi-step internal processes",
    "Data analysis assistants — helping users query and interpret data through natural language",
    "Workflow automation agents — executing defined multi-step business processes with appropriate checkpoints",
  ],
  closing:
    "We build AI agents with realistic expectations about current agent capability — genuinely useful for well-scoped, multi-step tasks with appropriate guardrails and human oversight, not positioned as fully autonomous decision-makers for high-stakes or open-ended business functions.",
};

export const aiCopilotDevelopment = {
  title: "AI Copilot Development",
  intro: "AI copilots are assistants embedded directly within a human worker's existing tools and workflow, designed to augment their work rather than replace it:",
  types: [
    "Coding copilots — assisting developers with code suggestions, review, and documentation",
    "Sales copilots — helping sales teams draft outreach, summarize account history, or prepare for calls",
    "Customer support copilots — assisting support agents with suggested responses or relevant knowledge base content",
    "Analytics copilots — helping users query and interpret data through natural language",
    "Operations copilots — assisting operational staff with routine documentation, reporting, or process tasks",
    "Knowledge copilots — surfacing relevant internal information as an employee works",
  ],
  closing:
    "Copilots are designed to augment human workers rather than necessarily replace them — the human remains in control of the final decision or output, with the AI copilot handling the drafting, summarizing, or retrieval work that would otherwise take up disproportionate time.",
};

export const aiKnowledgeAssistants = {
  title: "AI Knowledge Assistants",
  intro: "Internal AI knowledge assistants let employees query organizational knowledge in natural language, rather than searching through static documentation or asking colleagues directly:",
  contentTypes: [
    "Company documentation — policies, procedures, and internal reference material",
    "Policies and SOPs — standard operating procedures employees can query directly",
    "Product manuals — technical or product documentation surfaced through natural language questions",
    "FAQs — commonly asked internal questions answered automatically and consistently",
    "Internal knowledge — institutional knowledge that would otherwise live only in specific people's heads",
    "Structured databases — connecting natural language queries to structured internal data sources",
  ],
  considerations: [
    "RAG — the underlying technique making the assistant's answers grounded in actual company content",
    "Access control — ensuring the assistant only surfaces content a given user is permitted to see",
    "Citations — showing users which source documents informed a given answer",
    "Permissions — respecting existing organizational role-based access",
    "Data security — protecting sensitive internal content throughout the retrieval and generation pipeline",
    "User roles — potentially tailoring available content or capability based on a user's role",
  ],
  closing:
    "Enterprise knowledge assistants require more careful access-control engineering than a typical consumer-facing RAG application, since internal content often includes material that shouldn't be uniformly accessible to every employee.",
};

export const aiDocumentIntelligence = {
  title: "AI Document Intelligence",
  intro: "Generative AI-powered document processing extends beyond traditional OCR and extraction by adding language understanding to how documents are processed:",
  useCases: [
    "Contracts — extracting key terms, obligations, and dates from legal agreements",
    "Invoices — automatically extracting line items, amounts, and vendor information",
    "Reports — summarizing lengthy reports into digestible key points",
    "Forms — extracting structured data from submitted forms",
    "Applications — processing structured application data for review workflows",
    "Proposals — summarizing or extracting key details from business proposals",
    "Technical documents — making dense technical content searchable and summarizable",
    "Business records — extracting and structuring data from varied business document formats",
  ],
  approach: [
    "OCR — converting scanned or image-based documents into machine-readable text where needed",
    "Extraction — pulling specific structured fields out of document content",
    "Classification — automatically categorizing incoming documents by type",
    "Summarization — condensing long documents into concise summaries",
    "Structured output — returning extracted data in a consistent, predictable format",
    "Validation — checking extracted data against expected formats or business rules",
    "Human review — building in review steps for high-stakes documents",
  ],
  disclaimer:
    "We do not make legal or medical accuracy guarantees for document intelligence systems — any application processing legal, medical, or otherwise high-stakes documents should include appropriate human review.",
};

export const semanticSearch = {
  title: "Semantic Search",
  intro: "Semantic search finds content based on meaning rather than exact keyword matching, using the same embedding technology that underlies RAG:",
  techniques: [
    "Embeddings — numerical representations capturing the meaning of text",
    "Semantic similarity — measuring how closely related two pieces of text are in meaning",
    "Vector search — finding content with similar embeddings to a query",
    "Hybrid search — combining semantic search with traditional keyword search",
    "Metadata filtering — narrowing search results by structured attributes alongside semantic relevance",
    "Ranking — ordering results by a combination of relevance signals",
    "Retrieval — the overall process of finding and returning the most relevant content for a query",
  ],
  comparisonRows: [
    { factor: "Matching approach", keyword: "Exact or partial word/phrase matching", semantic: "Meaning-based similarity, regardless of exact wording" },
    { factor: "Handles synonyms", keyword: "Poorly, unless explicitly configured", semantic: "Naturally, since meaning is what's compared" },
    { factor: "Handles natural language queries", keyword: "Often struggles with conversational phrasing", semantic: "Well suited to natural, conversational queries" },
    { factor: "Implementation complexity", keyword: "Lower — mature, well-established technology", semantic: "Higher — requires embeddings and vector infrastructure" },
    { factor: "Best fit", keyword: "Precise, known-term lookups", semantic: "Exploratory or natural-language queries where exact wording is unpredictable" },
  ],
  useCases:
    "Internal knowledge search where employees phrase questions differently than documents are written, product search where customers describe what they want in their own words, and support content search where users describe a problem rather than searching for an exact error message.",
};

export const vectorDatabasesEmbeddings = {
  title: "Vector Databases & Embeddings",
  embeddingsDef:
    "Embeddings are numerical representations of text (or other content) that capture semantic meaning as coordinates in a high-dimensional space, such that content with similar meaning ends up positioned close together, regardless of exact wording.",
  vectorDbDef:
    "Vector databases are specialized database systems optimized for storing embeddings and performing fast similarity search across potentially millions of vectors — a task traditional relational databases aren't optimized for.",
  uses: [
    "RAG — vector databases are the retrieval infrastructure that makes finding relevant source content fast and scalable",
    "Semantic search — the same underlying infrastructure powers meaning-based search",
    "Recommendations — finding similar items based on embedding similarity",
    "Knowledge assistants — the retrieval backbone for grounding assistant responses in organizational content",
    "Document retrieval — efficiently searching large document collections by meaning",
  ],
  technologies:
    "Examples of vector database technologies we may work with depending on project requirements: Pinecone, Weaviate, Qdrant, Milvus, and PostgreSQL with the pgvector extension. We select the specific vector database based on project scale, existing infrastructure, and operational requirements — we don't claim formal partnerships with any of these vendors.",
};

export const promptEngineering = {
  title: "Prompt Engineering",
  intro: "Prompt engineering is the deliberate, iterative design of the instructions and context given to an LLM to produce reliable, useful output:",
  techniques: [
    "System prompts — the foundational instructions establishing an LLM's role, constraints, and behavior",
    "Instruction design — crafting clear, specific instructions that reduce ambiguity",
    "Structured outputs — designing prompts that reliably produce output in a specific, parseable format",
    "Few-shot examples — including example inputs and desired outputs within a prompt",
    "Prompt templates — reusable, parameterized prompt structures that maintain consistency",
    "Context management — deciding what information to include in a given prompt",
    "Tool instructions — for agentic systems, clearly specifying when and how the model should use available tools",
    "Evaluation — systematically testing how prompt changes affect output quality",
  ],
  closing:
    "Production generative AI systems require more than a single prompt. A single, static prompt rarely holds up across the full range of real user inputs a production system encounters. Reliable systems typically involve iterative prompt refinement based on evaluation results, prompt templates that adapt to different contexts, and ongoing adjustment as usage patterns reveal edge cases.",
};

export const llmModelStrategy = {
  title: "LLM Model Strategy",
  approaches: [
    "Commercial APIs — accessing LLM capability through a vendor's hosted API",
    "Open-source models — models with publicly available weights that can be run independently",
    "Hosted models — models run on managed infrastructure you don't operate directly",
    "Self-hosted models — models deployed and run on infrastructure you control directly",
    "Fine-tuned models — models further trained on your specific data to adapt behavior or task performance",
  ],
  selectionFactors: [
    "Cost — commercial APIs typically have usage-based pricing; self-hosting shifts cost toward infrastructure",
    "Latency — self-hosted models can offer more predictable latency",
    "Privacy — self-hosted or open-source models keep data within your infrastructure",
    "Performance — different models have different capability levels for a given task",
    "Context requirements — how much context a use case needs to process at once",
    "Customization — fine-tuning offers deeper behavioral customization than prompting alone",
    "Infrastructure — self-hosted and fine-tuned models require infrastructure and expertise",
  ],
  closing: "No single model is always best. The right choice depends on your specific use case's cost sensitivity, latency requirements, data privacy needs, and performance requirements — we evaluate this during discovery rather than defaulting to one provider or approach.",
};

export const fineTuningVsRag = {
  title: "Fine-Tuning vs. RAG",
  intro: "These two techniques solve different problems, and understanding the distinction matters for making the right architectural choice.",
  rows: [
    { factor: "Solves", rag: "Giving the model access to specific, current, or private knowledge it wasn't trained on", fineTuning: "Adapting the model's behavior, style, tone, or task performance" },
    { factor: "Best for", rag: "Knowledge that changes frequently or is private to your organization", fineTuning: "Consistent behavior patterns, specialized task formats, or domain-specific style" },
    { factor: "Data freshness", rag: "Easy to update — just update the underlying documents/knowledge base", fineTuning: "Requires retraining to incorporate new information" },
    { factor: "Cost profile", rag: "Retrieval and context costs scale with usage", fineTuning: "Upfront training cost, then typically lower per-use cost for the adapted behavior" },
    { factor: "Knowledge scope", rag: "Can draw on large, growing document collections", fineTuning: "Limited to what was included in the fine-tuning dataset" },
    { factor: "Transparency", rag: "Retrieved sources can be cited, supporting explainability", fineTuning: "Learned behavior is less directly traceable to specific source examples" },
  ],
  ragNote: "RAG is generally useful when the system needs access to changing or private knowledge — internal documents, current product information, or any content that updates regularly.",
  fineTuningNote: "Fine-tuning may be useful for specific behavior, style, or task adaptation — for example, consistently formatting output in a particular way, or improving performance on a narrow, well-defined task where prompting alone doesn't achieve reliable results.",
  closing: "These techniques solve different problems and are often complementary rather than competing — some production systems use both: a fine-tuned model for consistent task behavior, combined with RAG for access to current, organization-specific knowledge.",
};

export const generativeAiAutomation = {
  title: "Generative AI Automation",
  intro: "Generative AI can automate content-heavy and language-intensive workflows that traditional automation struggles with:",
  useCases: [
    "Document workflows — processing, classifying, and extracting data from incoming documents",
    "Email processing — classifying, summarizing, or drafting responses to incoming email",
    "Content workflows — assisting with drafting, editing, or reviewing content at various stages",
    "Customer support — handling common inquiries and drafting responses for agent review",
    "Data extraction — pulling structured information from unstructured text sources",
    "Research — gathering and synthesizing information from multiple sources toward a specific question",
    "Reporting — generating draft reports or summaries from underlying data",
    "Internal knowledge retrieval — helping employees find answers without manual searching",
    "Workflow routing — using language understanding to direct incoming requests to the right process",
  ],
  closing:
    "Human approval and validation matter for sensitive workflows. For automation touching financial transactions, legal commitments, customer communications with real consequences, or any other high-stakes decision, we build in human review checkpoints rather than fully automating the decision.",
};

export const enterpriseGenerativeAi = {
  title: "Enterprise Generative AI",
  intro: "Enterprise generative AI deployment involves distinct governance and technical requirements beyond a smaller-scale application:",
  capabilities: [
    "Internal AI assistants — knowledge tools respecting existing organizational access controls",
    "Enterprise search — search across large, often siloed knowledge bases spanning multiple systems",
    "Knowledge systems — centralized, governed access to organizational knowledge",
    "AI copilots — embedded assistance across multiple internal tools and workflows",
    "Workflow automation — automating processes that span departments and existing systems",
    "Document intelligence — high-volume document processing integrated with existing document management systems",
    "AI analytics — natural language interfaces to enterprise data and reporting",
    "Enterprise integrations — connecting generative AI capability to the broader set of systems typical of enterprise environments",
  ],
  requirements: [
    "Access control — respecting existing organizational permission structures throughout retrieval and generation",
    "Security — meeting enterprise security expectations, often stricter than smaller-scale deployments",
    "Privacy — careful handling of sensitive data referenced in prompts, retrieved content, and generated outputs",
    "Monitoring — production-grade visibility into system usage, cost, and output quality",
    "Scalability — architecture that handles enterprise-scale usage volume reliably",
    "Governance — clear ownership, policies, and oversight for how generative AI is deployed and used",
    "Auditability — traceable records supporting accountability, particularly important for regulated industries",
    "Model evaluation — ongoing, structured assessment of output quality at enterprise scale",
  ],
  closing:
    "Enterprise generative AI projects typically require more extensive discovery, stakeholder alignment, and governance planning than smaller deployments, given the number of systems, data sources, and user groups typically involved.",
};

export const generativeAiExistingSoftware = {
  title: "Generative AI + Existing Software",
  intro: "Generative AI applications deliver the most value connected to systems a business already runs on:",
  systems: [
    "CRM systems — grounding AI assistants or copilots in customer and account data",
    "ERP systems — connecting generative AI to operational and inventory data",
    "Ecommerce platforms — powering AI-assisted product search or customer support grounded in real product data",
    "Websites — embedding AI-powered search or assistants directly into an existing site",
    "Mobile applications — bringing conversational or content-generation capability into an app",
    "SaaS platforms — embedding generative AI features into an existing software product",
    "Databases — the underlying structured data source many generative AI applications need to reference",
    "Internal software — connecting generative AI capability to whatever operational tools a business already depends on",
  ],
  saasLink: {
    before: "For a broader view of how AI features integrate into SaaS product architecture generally, our ",
    text: "SaaS Development Services",
    href: etPath("saas-development"),
    after: " page covers the surrounding product engineering.",
  },
  technical:
    "Technically, this relies on REST APIs, and GraphQL where flexible, client-driven queries add genuine value, webhooks for event-driven integration, authentication to secure connections, and authorization to ensure generative AI components respect existing access controls, alongside data synchronization to keep retrieved content current.",
};

export const generativeAiSecurity = {
  title: "Generative AI Security",
  intro: "Generative AI systems require security attention beyond standard application security practices:",
  standard: [
    "Authentication and authorization — controlling who can access generative AI capabilities and what data they can reach",
    "Encryption — protecting sensitive data in transit and at rest",
    "API security — authenticated, rate-limited access to LLM and application endpoints",
    "Data isolation — ensuring one user's or tenant's data doesn't leak into another's context or responses",
    "Access controls — restricting what data and functions a generative AI system can reach",
    "Secure model access — controlling how the application connects to and authenticates with LLM providers",
    "Sensitive information handling — particular care around personally identifiable or confidential information",
    "Logging and monitoring — tracking system usage and behavior for accountability and anomaly detection",
  ],
  genAiThreats: [
    "Prompt injection — malicious input designed to manipulate an LLM into ignoring its instructions",
    "Data leakage — sensitive information inadvertently appearing in generated output",
    "Malicious inputs — adversarial input designed to extract unintended information or behavior",
    "Insecure tool calls — for agentic systems, ensuring tool/function calls can't be manipulated into unauthorized actions",
    "Hallucinations — generated content not actually grounded in fact, with security implications when acted on without review",
    "Unauthorized data retrieval — RAG systems retrieving and surfacing content a given user shouldn't have access to",
    "Model misuse — using the system for purposes beyond its intended, sanctioned use",
  ],
  guardrails:
    "Guardrails and validation address these risks through input validation, output validation, scoped tool permissions, and access-control-aware retrieval.",
  disclaimer:
    "We do not claim compliance with HIPAA, SOC 2, ISO 27001, GDPR, or other regulatory frameworks unless specifically verified for a given engagement.",
};

export const aiGuardrails = {
  title: "AI Guardrails",
  intro: "Guardrails are the constraints and validation mechanisms that keep a generative AI system's behavior within appropriate bounds:",
  mechanisms: [
    "Input validation — screening and constraining what reaches the model",
    "Output validation — checking generated content against expected formats, appropriateness, and factual grounding",
    "Moderation — filtering generated content for inappropriate, unsafe, or off-policy output",
    "Structured outputs — constraining the model to produce output in specific, predictable formats",
    "Access controls — limiting what data and functions the system can actually reach",
    "Tool restrictions — for agentic systems, limiting which tools an agent can call and under what conditions",
    "Human approval — requiring human review before consequential actions execute",
    "Monitoring — ongoing visibility into system behavior in production",
    "Evaluation — systematic testing of whether guardrails are actually functioning as intended",
  ],
  closing:
    "LLMs are probabilistic systems that don't guarantee a specific output for a given input, and can occasionally be manipulated through crafted adversarial input. Guardrails meaningfully reduce the practical risk and impact of unreliable or manipulated output reaching users or triggering unintended actions.",
};

export const llmEvaluation = {
  title: "LLM Evaluation",
  intro: "Evaluating whether a generative AI application actually works well requires more structure than informal impression-based testing:",
  criteria: [
    "Accuracy — whether generated content is factually correct",
    "Relevance — whether responses actually address what the user asked",
    "Groundedness — for RAG systems specifically, whether the response is actually supported by the retrieved context",
    "Hallucination rate — how often the system generates content not actually supported by available information",
    "Retrieval quality — for RAG systems, whether the retrieval step is finding genuinely relevant content",
    "Response consistency — whether the system produces reasonably consistent output for similar inputs",
    "Latency — how quickly the system responds",
    "Cost — the per-request or per-usage cost of running the system at production volume",
    "Safety — whether the system avoids generating harmful, inappropriate, or policy-violating content",
  ],
  approach: [
    "Test datasets — representative sets of realistic inputs used to systematically test system behavior",
    "Evaluation criteria — clearly defined standards for what counts as a good or acceptable response",
    "Human evaluation — human review of system outputs, particularly important for nuanced quality judgments",
    "Automated evaluation — programmatic checks for specific quality dimensions",
    "Continuous monitoring — ongoing evaluation in production, not just at launch",
  ],
  closing:
    "We don't promise specific accuracy percentages for generative AI systems — actual output quality depends heavily on the specific use case, underlying data quality, and how well the system is scoped and evaluated.",
};

export const generativeAiProcess = [
  { icon: Search, title: "Business Discovery", desc: "We learn your business, goals, and the operational context around the problem." },
  { icon: ClipboardList, title: "AI Opportunity Assessment", desc: "We evaluate whether generative AI is genuinely the right fit versus other approaches." },
  { icon: FileText, title: "Use Case Definition", desc: "We clearly define the specific use case and success criteria." },
  { icon: Database, title: "Data Assessment", desc: "We evaluate what source data or knowledge base the system will need to draw on." },
  { icon: Brain, title: "Model Strategy", desc: "We determine the right model approach — commercial API, open-source, fine-tuned, or a combination." },
  { icon: Layers, title: "Architecture Design", desc: "We design the technical architecture, including retrieval, agent, or application logic as relevant." },
  { icon: TerminalSquare, title: "Proof of Concept", desc: "We validate the approach at a smaller scale before committing to full development." },
  { icon: PenTool, title: "Prompt / Retrieval Design", desc: "We design and iterate on prompts and, where relevant, retrieval logic." },
  { icon: Code2, title: "Application Development", desc: "We build the surrounding application the generative AI capability lives within." },
  { icon: Zap, title: "Integration", desc: "We connect the system to existing business systems and data sources." },
  { icon: TestTube2, title: "Evaluation", desc: "We systematically test output quality against defined criteria." },
  { icon: Shield, title: "Security Testing", desc: "We test for prompt injection, data leakage, and other generative-AI-specific risks." },
  { icon: Activity, title: "Performance Testing", desc: "We validate latency and cost under realistic usage conditions." },
  { icon: Rocket, title: "Deployment", desc: "We release the system into production with a controlled rollout." },
  { icon: Eye, title: "Monitoring", desc: "We track output quality, cost, and system health in production." },
  { icon: RefreshCw, title: "Continuous Optimization", desc: "We refine prompts, retrieval, and system behavior based on real usage data over time." },
];

export const generativeAiMvp = {
  title: "Generative AI MVP Development",
  intro: "For businesses exploring a generative AI product idea, validating before large investment is particularly important:",
  points: [
    "AI proof of concept — a small-scale technical validation confirming the core approach is feasible on your actual data",
    "MVP — the smallest viable version of the generative AI application that still tests the core value proposition",
    "Feature prioritization — focusing on the single generative AI capability that matters most",
    "User testing — getting real users interacting with the system early to surface issues internal testing misses",
    "Prompt iteration — refining prompts based on real usage patterns",
    "Model evaluation — systematically assessing output quality as the system evolves",
    "Analytics — instrumenting the system from day one so usage data informs what to build next",
    "Feedback loops — building mechanisms to learn from real user interactions quickly",
  ],
  closing:
    "Startups and businesses new to generative AI can validate a product idea before building a large platform by scoping a proof of concept specifically around the riskiest question — usually \"does this approach produce genuinely useful output on our real data and real user queries?\" — before investing in a full production build.",
};

export const industryUseCases = [
  { industry: "Healthcare", desc: "Administrative document processing, patient communication drafting assistance, and internal knowledge assistants — with no diagnostic claims and appropriate clinical oversight" },
  { industry: "Finance", desc: "Document intelligence for compliance-related paperwork, internal knowledge assistants for policy questions, and AI-assisted research and reporting" },
  { industry: "Ecommerce", desc: "AI-powered product search and discovery, customer support assistants grounded in product and order data, and content generation for product descriptions" },
  { industry: "Education", desc: "AI-assisted content generation for course materials, intelligent Q&A assistants for course content, and administrative document processing" },
  { industry: "Real Estate", desc: "AI-powered property search through natural language queries, document intelligence for contracts and listings, and lead-qualification assistants" },
  { industry: "Logistics", desc: "Document intelligence for shipping and customs paperwork, and internal knowledge assistants for operational procedures" },
  { industry: "Manufacturing", desc: "Technical document search and summarization, and internal knowledge assistants for equipment manuals and procedures" },
  { industry: "Retail", desc: "AI-powered product search, customer support assistants, and content generation for product content" },
  { industry: "SaaS", desc: "AI copilots embedded directly in product workflows, and knowledge assistants for in-app help content" },
  { industry: "Professional Services", desc: "Document intelligence for contract or case review, AI-assisted drafting tools, and internal knowledge assistants for firm knowledge" },
];

export const usaSection = {
  title: "Generative AI Development for USA Businesses",
  body: "We work with businesses across the United States building custom generative AI applications, including organizations based in New York, California, Texas, Washington, Massachusetts, Florida, and Illinois, among other states. Whether you're a SaaS company in California embedding an AI copilot into your product, a professional services firm on the East Coast building a document intelligence tool, or an enterprise building an internal knowledge assistant grounded in company documentation, we scope generative AI architecture around your specific data and use case. As a generative AI development company serving the USA, our team works remotely with distributed stakeholders throughout discovery, development, and ongoing support.",
};

export const canadaSection = {
  title: "Generative AI Development for Canadian Businesses",
  body: "We also support Canadian businesses building custom generative AI applications, including companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, and Edmonton. Canadian generative AI projects sometimes involve bilingual requirements — particularly for knowledge assistants and RAG systems that need to work across both English and French source content — which we factor into retrieval and model considerations where relevant. As with our US engagements, Canadian projects are handled remotely across discovery, development, and post-launch support.",
};

export const generativeAiCost = {
  title: "Generative AI Development Cost",
  intro: "Cost depends on application complexity, model selection, data volume, and the sophistication of the RAG or agent architecture involved. Key cost drivers include:",
  drivers: [
    "Overall application complexity and the specific generative AI capability involved",
    "Model selection — commercial API usage costs scale with volume; self-hosted or fine-tuned models involve different cost structures",
    "Token usage — ongoing operational cost tied directly to how much text is processed and generated",
    "Data volume — the amount of source content that needs ingestion, chunking, and embedding for RAG systems",
    "RAG architecture complexity — including retrieval sophistication, reranking, and access-control requirements",
    "Integrations with existing business systems",
    "UI/UX complexity for user-facing components",
    "Security requirements appropriate to data sensitivity",
    "Infrastructure — particularly relevant for self-hosted or fine-tuned model approaches",
    "Evaluation — the scope of testing needed to validate output quality",
    "Monitoring infrastructure for post-launch tracking",
    "Ongoing maintenance needs",
  ],
  closing:
    "As general industry reference points: an MVP using commercial LLM APIs with a focused use case typically represents a smaller investment; a medium-complexity application involving RAG and moderate integrations represents a mid-range investment; and an enterprise generative AI platform with extensive access control and agent capability represents the largest investment. These are approximate industry patterns rather than The Runner Software Solutions pricing — actual cost depends entirely on your specific scope, confirmed through discovery.",
};

export const generativeAiTimeline = {
  title: "Generative AI Development Timeline",
  intro: "Timeline depends on several factors specific to generative AI projects:",
  factors: [
    "Data readiness — how much source content needs preparation before it can be used for RAG",
    "Use-case complexity — a simple LLM-powered feature has a shorter timeline than a multi-agent system with tool calling",
    "Model requirements — whether existing commercial APIs suffice or custom/fine-tuned models are needed",
    "Integrations — the number and complexity of connections to existing business systems",
    "Security — the depth of security review and guardrail implementation required",
    "Evaluation — building and running a proper evaluation process takes real time",
    "UI/UX — the complexity of any user-facing interface",
    "Infrastructure — particularly relevant for self-hosted or fine-tuned model deployments",
  ],
  stages: [
    "A proof of concept typically has the shortest timeline, scoped specifically to validate feasibility",
    "An MVP takes longer to account for a complete, usable feature set",
    "A production application requires additional time for full integration, evaluation, and security testing",
    "An enterprise platform requires the longest timeline given governance, access control, and multi-system integration requirements",
  ],
  closing:
    "We don't guarantee specific delivery dates upfront — a realistic timeline is confirmed after data readiness and use-case complexity are assessed during discovery.",
};

export const technologyStack = [
  { label: "Languages", items: "Python for AI/LLM application development; JavaScript and TypeScript for application layers, APIs, and frontend interfaces" },
  { label: "AI/LLM ecosystem", items: "OpenAI APIs and other commercial model providers; Hugging Face for open-source models; model APIs selected based on capability, cost, and latency requirements" },
  { label: "Backend", items: "Node.js and Express, or Python APIs, for the application backend surrounding generative AI components" },
  { label: "Frontend", items: "React and Next.js for building interfaces through which users interact with generative AI features" },
  { label: "Databases", items: "PostgreSQL, MongoDB, and MySQL for structured application data, alongside dedicated vector technologies for embedding storage and retrieval" },
  { label: "Vector technologies", items: "Pinecone, Qdrant, Weaviate, Milvus, and PostgreSQL with pgvector, selected based on project scale and operational requirements" },
  { label: "Cloud infrastructure", items: "AWS, Azure, and Google Cloud — choice depending on project requirements and existing organizational relationships" },
];

export const generativeAiArchitecture = {
  title: "Generative AI Architecture",
  layers: [
    "User → Frontend → Backend/API → AI Application Layer → Prompt / Agent / RAG Logic → Model → Vector Database / Business Database → External APIs / Tools → Response Validation → User",
  ],
  factors: [
    "Scalability — high-traffic applications need architecture that handles concurrent requests efficiently",
    "Latency — interactive, conversational applications have stricter latency requirements than background batch-processing tasks",
    "Cost — architecture decisions directly affect ongoing operational cost, which needs to be designed for rather than discovered after launch",
    "Security — sensitive data requirements shape how data flows through the pipeline",
    "Observability — production systems need logging and monitoring built into the architecture from the start",
    "Model availability — architecture needs to account for what happens if a model provider experiences downtime or rate limiting",
  ],
  closing: "We design generative AI architecture around the specific use case's actual requirements rather than applying the same pattern regardless of latency, scale, or security needs.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: "Custom software engineering", desc: "Generative AI applications built around your specific business problem and data, not a generic chatbot template" },
  { icon: Sparkles, title: "Generative AI engineering", desc: "Genuine technical depth in RAG, AI agents, prompt engineering, and LLM evaluation, not just basic API integration" },
  { icon: Layers, title: "Full-stack development", desc: "The ability to build both the generative AI component and the surrounding application it lives within" },
  { icon: Brain, title: "LLM integration", desc: "Experience across commercial APIs, open-source models, and fine-tuning approaches, selected based on project fit" },
  { icon: Database, title: "RAG expertise", desc: "Deep technical understanding of retrieval architecture, from chunking and embeddings through reranking and access-controlled retrieval" },
  { icon: Bot, title: "AI agents", desc: "Realistic, well-scoped agent development with appropriate guardrails and human oversight" },
  { icon: Zap, title: "API integration", desc: "Experience connecting generative AI capability to CRM, ERP, ecommerce, and other existing business systems" },
  { icon: TrendingUp, title: "Scalable architecture", desc: "Systems designed to handle growth in usage volume and data" },
  { icon: Lock, title: "Security-conscious development", desc: "Attention to generative-AI-specific risks like prompt injection and data leakage, alongside standard application security" },
  { icon: TestTube2, title: "Structured testing", desc: "Systematic LLM evaluation, not just informal spot-checking of outputs" },
  { icon: TerminalSquare, title: "Maintainable software", desc: "Built for long-term supportability, including ongoing prompt and retrieval refinement" },
  { icon: Users, title: "Long-term support", desc: "Available for ongoing monitoring, evaluation, and improvement after launch" },
];

export const generativeAiFaqs = [
  { q: "What is Generative AI development?", a: "Generative AI development is the engineering process of building applications capable of generating or transforming content — text, code, images, or structured information — using large language models and foundation models. It involves more than connecting to an LLM API: production applications require grounding responses in real data through retrieval, iterative prompt design, systematic evaluation, cost management, and security specific to LLM-based systems like protection against prompt injection." },
  { q: "What does a Generative AI development company do?", a: "A Generative AI development company designs and builds applications powered by large language models, including RAG systems, AI agents, AI copilots, and knowledge assistants. This covers model selection, retrieval architecture, prompt engineering, application development, security implementation specific to LLM risks, and evaluation of output quality, from an initial proof of concept through production deployment and ongoing monitoring." },
  { q: "What are Generative AI development services?", a: "Generative AI development services cover custom LLM application development, RAG systems that ground AI responses in your own data, AI agent development for multi-step task automation, AI copilot development for embedded workplace assistance, document intelligence, semantic search, and integration of generative AI capability into existing business systems." },
  { q: "How much does Generative AI development cost?", a: "Cost depends on application complexity, model selection, data volume for RAG systems, and integration scope. An MVP using commercial LLM APIs with a focused use case typically costs less than a medium-complexity RAG application, which costs less than an enterprise platform with agent capability and organization-wide access control. These are general industry patterns rather than fixed pricing — an accurate estimate requires discovery." },
  { q: "How long does Generative AI development take?", a: "Timeline depends on data readiness, use-case complexity, and integration scope. A proof of concept has the shortest timeline, while an enterprise platform with extensive access control and multi-system integration takes the longest. Data readiness for RAG systems in particular can significantly affect timeline, and a realistic estimate is confirmed after discovery." },
  { q: "What is LLM application development?", a: "LLM application development is building software powered by large language models — covering conversational interfaces, text generation, summarization, classification, extraction, and function calling that lets an LLM interact with other systems. LLMs can be integrated into SaaS platforms, websites, mobile apps, and enterprise systems as embedded features rather than standalone tools." },
  { q: "What is Retrieval-Augmented Generation (RAG)?", a: "RAG is a technique that grounds an LLM's responses in specific content retrieved from your own data — documents, policies, product information — rather than relying solely on the model's general training. It involves document ingestion, chunking, embeddings, vector database storage, retrieval, and generating a response based on the retrieved context, making AI outputs accurate to your organization's actual, current information." },
  { q: "What is the difference between RAG and fine-tuning?", a: "RAG gives a model access to specific, updatable knowledge by retrieving relevant content at query time, making it well suited to information that changes frequently or is private to your organization. Fine-tuning adapts a model's behavior, style, or task performance through additional training, better suited to consistent formatting or specialized task adaptation. They solve different problems and are sometimes used together." },
  { q: "What are AI agents?", a: "AI agents are systems that reason through multi-step tasks, call tools and APIs, and take actions toward completing a goal, rather than responding to a single prompt. They're used for tasks like research assistance, multi-step customer service interactions, and workflow automation, typically built with guardrails and human approval checkpoints for consequential actions rather than full autonomy." },
  { q: "What is an AI copilot?", a: "An AI copilot is an assistant embedded within a human worker's existing tools and workflow, designed to augment their work — drafting, summarizing, or retrieving relevant information — rather than fully automating a task. Examples include coding copilots, sales copilots, and customer support copilots, where the human remains in control of the final output or decision." },
  { q: "Can Generative AI integrate with existing software?", a: "Yes, generative AI can integrate with CRM, ERP, ecommerce platforms, websites, mobile apps, and SaaS platforms through REST APIs, webhooks, authentication, and data synchronization, grounding AI capability in your actual business data and respecting existing access controls." },
  { q: "Can you build a custom AI knowledge assistant?", a: "Yes, custom AI knowledge assistant development covers internal tools that let employees query company documentation, policies, and structured data in natural language, built on RAG with proper access control, citations, and permission-aware retrieval so users only see content they're authorized to access." },
  { q: "Can you build an AI-powered SaaS product?", a: "Yes, we build SaaS products with embedded generative AI features — AI copilots, intelligent search, or automated content generation — combining generative AI development with SaaS product engineering, ensuring the AI feature genuinely solves a problem for the product's users." },
  { q: "What are vector databases used for in Generative AI?", a: "Vector databases store embeddings and enable fast similarity search across large content collections, forming the retrieval infrastructure behind RAG systems, semantic search, and recommendation features. They allow generative AI applications to quickly find semantically relevant content rather than relying on exact keyword matching." },
  { q: "How do you reduce hallucinations in Generative AI applications?", a: "Hallucinations are reduced through retrieval-augmented generation that grounds responses in real source data, careful prompt design, structured output constraints, systematic evaluation of groundedness, and output validation before content is used or displayed. No approach eliminates hallucinations entirely, which is why human review remains important for high-stakes applications." },
  { q: "How do you secure Generative AI applications?", a: "Generative AI security covers standard practices like authentication, encryption, and access control, plus LLM-specific protections against prompt injection, data leakage, unauthorized data retrieval in RAG systems, and insecure tool calls in agentic systems, implemented through input/output validation and appropriate guardrails." },
  { q: "Can startups build a Generative AI MVP?", a: "Yes, we recommend starting with a proof of concept validating whether the approach produces useful output on your actual data, followed by a focused MVP testing the core value proposition with real users. This sequencing helps validate a generative AI product idea before committing to a full platform build." },
  { q: "Can Generative AI automate business workflows?", a: "Yes, generative AI can automate document processing, email classification, content drafting, research, and reporting workflows, particularly for content-heavy or language-intensive tasks. We build in human approval checkpoints for sensitive or high-stakes workflows rather than fully automating consequential decisions without review." },
  { q: "Can US businesses hire Generative AI developers?", a: "Yes, we work with businesses across the United States on generative AI development, including organizations in states like New York, California, Texas, and Washington. Projects are scoped around each business's specific data and use case, with remote collaboration throughout discovery, development, and ongoing support." },
  { q: "Can Canadian businesses hire Generative AI developers?", a: "Yes, we work remotely with Canadian businesses on generative AI development, including companies in Toronto, Vancouver, Montreal, and other Canadian cities, accounting for considerations like bilingual source content where relevant, with the entire process handled remotely." },
];

export const finalCta = {
  headline: "Let's Build Your Generative AI Application",
  body: "Whether you're ready to build a knowledge assistant grounded in your own documentation, an AI agent that handles multi-step tasks, an AI copilot embedded in your product, or you're still validating whether generative AI is the right fit for a specific problem, we can help you define a realistic path forward.",
  steps: [
    "Discuss your idea",
    "Identify the AI opportunity worth pursuing",
    "Assess data and technical requirements",
    "Design architecture",
    "Build a proof of concept",
    "Develop the product",
    "Test and evaluate",
    "Deploy",
    "Monitor and optimize",
  ],
  crossLinks: [
    { before: "For projects centered on prediction, classification, or automation not built on LLMs, our broader ", text: "AI Development Services", href: etPath("ai-development"), after: " page covers that wider scope. If your interest is specifically in a conversational customer-facing assistant, see our dedicated " },
    { before: "", text: "AI Chatbot Development", href: etPath("ai-chatbot-development"), after: " page, and if your generative AI feature is part of a larger predictive analytics need, our " },
    { before: "", text: "Machine Learning Solutions", href: etPath("machine-learning-solutions"), after: " page may also be relevant." },
  ],
  primaryCta: "Build Your AI Product",
  secondaryCta: "Talk to a Generative AI Expert",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
