import type { LucideIcon } from "lucide-react";
import {
  Bot,
  MessageSquare,
  Users,
  ShoppingCart,
  Globe,
  Building2,
  Database,
  Brain,
  Shield,
  BarChart3,
  Code2,
  Layers,
  Zap,
  Lock,
  Activity,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const aiChatbotSeo = {
  title: "AI Chatbot Development Company | The Runner Software",
  description:
    "Custom AI chatbot development — conversational AI, RAG-powered assistants, and CRM-integrated support and sales bots. Talk to our team today.",
  h1: "AI Chatbot Development Services for Smarter Customer Experiences",
  canonicalPath: "/services/emerging-technologies/ai-chatbot-development",
  ogTitle: "AI Chatbot Development Company | The Runner Software Solutions",
  ogDescription:
    "Custom AI chatbot development — conversational AI, RAG-powered assistants, and CRM-integrated support and sales bots for businesses in the USA and Canada.",
  twitterTitle: "AI Chatbot Development Company | The Runner Software Solutions",
  twitterDescription:
    "Custom AI chatbot development — conversational AI, RAG-powered assistants, and CRM-integrated support and sales bots for businesses in the USA and Canada.",
};

export const aiChatbotHero = {
  intro:
    "Most customer questions are repetitive, most sales conversations start the same way, and most support tickets follow familiar patterns — which is exactly the kind of work a well-built AI chatbot can take on. The Runner Software Solutions designs and builds custom AI chatbots and conversational AI systems: customer support assistants, sales chatbots, RAG-powered knowledge assistants, and enterprise conversational platforms, all integrated with the CRM, APIs, and business systems you already run.",
  summary:
    "Whether you need a straightforward website chatbot to answer common questions or a full RAG-powered assistant grounded in your internal documentation, our AI chatbot development services are built on solid engineering — not a wrapper around a generic script.",
  primaryCta: "Build Your AI Chatbot",
  secondaryCta: "Talk to a Chatbot Development Expert",
};

export const whatIsAiChatbot = {
  title: "What Is AI Chatbot Development?",
  definition:
    "AI chatbot development is the engineering process of building conversational software that can understand a user's request, retrieve relevant information, generate a useful response, perform defined actions, and integrate with the business systems needed to actually get the job done.",
  components: [
    "Natural Language Processing (NLP) — techniques for understanding what a user is asking, including intent recognition and entity extraction",
    "Large Language Models (LLMs) — the generative models that produce natural, context-aware responses",
    "Intent recognition — identifying what the user actually wants from a given message",
    "Context management — tracking what's already been discussed within a conversation so responses stay coherent",
    "Conversation memory (where appropriate) — retaining relevant information across a session, or in some cases across sessions",
    "Retrieval — pulling relevant information from a knowledge base or documents to ground responses in accurate information",
    "Knowledge bases — the underlying content a chatbot draws on to answer questions",
    "APIs — the connections that let a chatbot retrieve live data or trigger actions in other systems",
    "Tool calling — the mechanism by which an LLM-based chatbot invokes external functions or APIs to complete a task",
    "Business logic — the rules that govern what the chatbot can and can't do",
    "Authentication — verifying user identity where the conversation requires it",
    "Human handoff — escalating to a person when the situation calls for it",
    "Analytics and monitoring — tracking how the chatbot is actually performing in production",
  ],
  comparisonIntro:
    "It's worth distinguishing traditional rule-based chatbots from AI-powered chatbots, since the terms get used interchangeably even though the underlying technology is very different:",
  comparison: {
    headers: ["", "Traditional Rule-Based Chatbot", "AI-Powered Chatbot"],
    rows: [
      ["How it understands input", "Matches against predefined keywords or decision trees", "Uses NLP/LLMs to interpret meaning and intent, even with varied phrasing"],
      ["Conversation flexibility", "Rigid — users must follow expected paths", "Flexible — can handle open-ended, varied phrasing"],
      ["Knowledge grounding", "Limited to hard-coded responses", "Can retrieve and reason over live knowledge bases and documents"],
      ["Handling novel questions", "Fails or falls back to a generic message", "Can generate a relevant response, or gracefully escalate"],
      ["Setup effort", "Requires mapping every expected conversation path", "Requires knowledge preparation, prompt design, and guardrail configuration"],
      ["Best fit", "Narrow, highly predictable use cases", "Broader support, sales, and knowledge-retrieval use cases"],
    ],
  },
  closing:
    "Most businesses evaluating chatbot options today are really deciding how much AI capability they need, not whether to use a \"chatbot\" at all — and the right level of AI sophistication depends entirely on the use case, not on defaulting to the most advanced option available.",
  aiDevLink: {
    before: "For a broader look at the underlying AI and generative AI technology these systems are built on, see our ",
    text: "AI Development Services",
    href: etPath("ai-development"),
    after: " and ",
  },
  genAiLink: {
    before: "",
    text: "Generative AI Development",
    href: etPath("generative-ai-development"),
    after: " pages — this page focuses specifically on chatbot and conversational AI implementation.",
  },
};

export const chatbotServices: { title: string; desc: string; saasLink?: { before: string; text: string; href: string; after: string } }[] = [
  { title: "Custom AI Chatbot Development", desc: "Designing conversation flows, knowledge sources, integrations, and guardrails around your specific business — not deploying a generic bot template. The foundation for every chatbot project we build." },
  { title: "Conversational AI Development", desc: "Natural language understanding, intent and entity recognition, conversation state management, and — for LLM-powered systems — retrieval and tool calling that let the assistant do more than just talk." },
  { title: "Customer Support Chatbots", desc: "AI-powered support chatbots handle FAQs, order status inquiries, product questions, account support, and basic troubleshooting, while creating tickets and escalating to human agents when a request exceeds their scope." },
  { title: "AI Sales Chatbots", desc: "Lead qualification, product discovery, and appointment scheduling, working alongside your sales team rather than replacing the relationship-building work a human salesperson does." },
  { title: "Lead Generation Chatbots", desc: "Engage website visitors, ask qualifying questions, capture contact information, and route qualified leads to the right sales rep or CRM workflow." },
  { title: "Website AI Chatbots", desc: "Deployed as an embeddable widget, providing visitor context, lead capture, and human handoff directly within your existing site." },
  { title: "Enterprise AI Chatbots", desc: "Internal employee assistance and customer-facing use cases at scale, with role-based access, data isolation, and auditability built in from the start." },
  { title: "RAG Chatbots", desc: "Retrieval-Augmented Generation chatbots ground responses in your actual company documents and knowledge sources, rather than relying solely on an LLM's general training." },
  { title: "Knowledge Base Chatbots", desc: "Turn existing documentation, FAQs, and internal content into a conversational interface, so users can ask a question directly instead of searching through pages of documentation." },
  { title: "AI Virtual Assistants", desc: "Extend beyond answering questions to actively performing tasks — scheduling, retrieving account information, or completing multi-step workflows through API and tool integrations." },
  { title: "Ecommerce AI Chatbots", desc: "Product discovery, recommendations, order and shipping questions, and cart assistance, integrated directly with your product catalog and order systems." },
  {
    title: "SaaS AI Chatbots",
    desc: "Onboarding, feature discovery, in-product support, and workflow automation for SaaS platforms.",
    saasLink: {
      before: "Businesses building or extending a SaaS product with conversational AI may also want to review our ",
      text: "SaaS Development Services",
      href: etPath("saas-development"),
      after: " for the platform-level work that often accompanies a chatbot build.",
    },
  },
  { title: "Omnichannel Chatbots", desc: "Extend a conversational assistant across appropriate channels — website, mobile app, customer portals, and, where supported, external messaging platforms." },
  { title: "Chatbot API Integration", desc: "Connect the assistant to the databases, business systems, and third-party services it needs to retrieve information or take action." },
  { title: "CRM Chatbot Integration", desc: "Create leads, update contact records, log conversation history, and trigger sales workflows directly within your existing CRM." },
  { title: "AI Chatbot Analytics", desc: "Track how the assistant is actually performing in production — conversation volume, containment, escalation rate, and more." },
];

export const customChatbotSection = {
  title: "Custom AI Chatbot Development",
  intro: "Custom AI chatbot development starts with understanding the specifics of your business, not applying a template. Key design considerations include:",
  considerations: [
    "Business goals — what the chatbot is actually meant to accomplish (deflect support tickets, generate leads, assist employees)",
    "Target users — who will actually be talking to the chatbot, and what they need from it",
    "Conversation flows — how the assistant should guide different types of interactions",
    "Knowledge sources — what content the chatbot needs access to in order to answer accurately",
    "Integrations — what systems the chatbot needs to connect to",
    "Permissions — what data and actions different users should be able to access through the chatbot",
    "Security — how sensitive data and actions are protected",
    "Escalation requirements — when and how the chatbot should hand off to a human",
    "Analytics — how success will be measured after launch",
  ],
  closing:
    "Custom development makes sense for businesses with specialized workflows, proprietary knowledge, or integration requirements that off-the-shelf chatbot platforms can't cleanly support. That said, custom chatbots aren't automatically the better choice for every business — a well-configured off-the-shelf platform can be the more practical answer for simpler, well-understood use cases, and we'll say so rather than defaulting to a custom build regardless of fit.",
};

export const conversationalAiSection = {
  title: "Conversational AI Development",
  intro: "Conversational AI is what separates a genuinely useful assistant from a rigid, scripted bot. Core components include:",
  components: [
    "Natural Language Understanding (NLU) — interpreting the meaning behind user input, not just matching keywords",
    "Intent recognition — identifying what the user is trying to accomplish",
    "Entity extraction — pulling out specific pieces of information (dates, product names, order numbers) from user input",
    "Conversation state — tracking where a conversation stands and what's already been established",
    "LLMs — powering flexible, natural-sounding response generation",
    "Retrieval — pulling relevant information into the conversation when needed",
    "Tool calling — letting the assistant invoke external functions to check an order status, book an appointment, or perform another defined action",
    "Response generation — producing a coherent, appropriately scoped reply",
    "Fallback handling — gracefully managing situations the assistant can't confidently resolve",
    "Human escalation — handing off to a person when appropriate",
  ],
  closing:
    "The difference between conversational AI and simple scripted chatbot flows comes down to flexibility: a scripted flow can only handle the specific paths it was built for, while a properly built conversational AI system can understand varied phrasing, hold context across multiple turns, and combine retrieval and tool calling to handle genuinely open-ended requests.",
  mlLink: {
    before: "For chatbots that also rely on predictive intent classification or recommendation logic beyond core LLM capabilities, see our ",
    text: "Machine Learning Solutions",
    href: etPath("machine-learning-solutions"),
    after: " page.",
  },
};

export const customerSupportSection = {
  title: "AI Customer Support Chatbots",
  intro: "AI customer support chatbots are one of the most common and highest-value chatbot applications, typically handling:",
  capabilities: [
    "FAQs — answering common questions without agent involvement",
    "Order status — retrieving and communicating current order information",
    "Product questions — answering specification, compatibility, or usage questions",
    "Account support — helping with common account-related requests",
    "Troubleshooting — walking users through standard diagnostic or resolution steps",
    "Ticket creation — logging issues that require follow-up",
    "Knowledge retrieval — pulling accurate answers from documentation or support content",
    "Support triage — categorizing and prioritizing incoming requests",
    "Escalation to human agents — handing off complex, sensitive, or unresolved issues",
  ],
  closing:
    "Support chatbots typically integrate with help desks, CRMs, ticketing systems, knowledge bases, and relevant databases so responses reflect real, current information rather than static content. Well-built AI support chatbots meaningfully reduce the volume of repetitive requests reaching human agents, freeing up support teams for higher-value work — but they are not a complete replacement for a human support team, particularly for complex, sensitive, or emotionally charged interactions.",
};

export const salesChatbotSection = {
  title: "AI Sales Chatbots",
  intro: "AI sales chatbots support the earlier, more repetitive stages of a sales conversation:",
  capabilities: [
    "Lead qualification — asking questions to gauge fit and intent",
    "Product discovery — helping prospects find the right product or plan",
    "Customer questions — answering common pre-sale questions",
    "Recommendations — suggesting relevant products or plans based on stated needs",
    "Appointment scheduling — booking calls or demos directly within the conversation",
    "Contact capture — collecting contact information for follow-up",
    "Sales routing — directing qualified prospects to the right sales rep or team",
    "CRM updates — logging conversation details and lead information automatically",
  ],
  closing:
    "The goal of an AI sales chatbot is to support your sales team by handling repetitive, high-volume interactions and surfacing qualified opportunities — not to automatically replace the human relationship-building that closes complex deals.",
};

export const leadGenSection = {
  title: "AI Lead Generation Chatbots",
  intro: "Lead generation chatbots are built specifically to convert website visitors into qualified leads:",
  capabilities: [
    "Visitor engagement — proactively starting conversations at the right moment",
    "Qualification questions — gathering the information needed to assess fit",
    "Contact capture — collecting name, email, or phone information",
    "Lead scoring — flagging higher-intent leads for priority follow-up",
    "Routing — directing leads to the appropriate sales rep or team",
    "Appointment booking — scheduling a call directly within the chat",
    "CRM integration — logging captured leads and conversation context automatically",
  ],
  closing:
    "Because lead generation chatbots collect personal information, data privacy and consent need to be handled deliberately — clearly disclosing what information is being collected and how it will be used, and complying with applicable privacy regulations for your specific jurisdiction and industry.",
};

export const ragSection = {
  title: "RAG Chatbot Development",
  intro:
    "Retrieval-Augmented Generation (RAG) is one of the most important technical patterns in modern AI chatbot development, and it's worth explaining properly rather than treating it as a buzzword.",
  steps: [
    "Document ingestion — source documents are collected and prepared",
    "Chunking — documents are broken into smaller, semantically coherent pieces",
    "Embeddings — each chunk is converted into a vector representation that captures its meaning",
    "Vector databases — embeddings are stored in a database optimized for similarity search",
    "Semantic search — the system searches for the most relevant chunks based on meaning, not just keyword matching",
    "Retrieval — the most relevant chunks are pulled and prepared for the model",
    "Reranking (where appropriate) — retrieved results are further refined to prioritize the most relevant content",
    "Context construction — retrieved content is assembled into a prompt for the language model",
    "LLM response generation — the model generates a response grounded in the retrieved content",
    "Citations — where appropriate, the response references the specific source material it drew on",
    "Access control — retrieval respects the same permissions the underlying documents have",
  ],
  useCases:
    "Common RAG use cases: company knowledge bases, product documentation, support documentation, internal policies, standard operating procedures, technical manuals, and general internal knowledge that changes over time.",
  value:
    "RAG helps ground chatbot responses in approved, current business information rather than relying solely on a language model's general training data — which matters enormously for accuracy in domains where getting details wrong has real consequences.",
  limitations: [
    "Poor source documents — a RAG system can only be as accurate as the documents it retrieves from",
    "Retrieval errors — the system may retrieve irrelevant or incomplete content for a given question",
    "Incomplete context — complex questions sometimes require information spread across multiple documents",
    "Hallucinations — even with retrieved context, a language model can still generate content not supported by the source material",
    "Access-control mistakes — if permissions aren't implemented carefully, a RAG system can inadvertently surface content a user shouldn't have access to",
  ],
  closing:
    "We treat these limitations as engineering problems to be actively managed — through careful chunking strategy, retrieval evaluation, citation display, and output validation — not as reasons to avoid RAG altogether.",
};

export const knowledgeBaseSection = {
  title: "Knowledge Base Chatbots",
  intro: "Knowledge base chatbots turn existing content — FAQs, documentation, product catalogs, policies, and internal documents — into a conversational interface.",
  considerations: [
    "Content ingestion — preparing existing content in a format the chatbot can effectively search and retrieve from",
    "Retrieval — finding the most relevant content for a given question, typically using RAG techniques",
    "Permissions — ensuring users only receive information they're authorized to access",
    "Citations — showing users where an answer came from, which builds trust and allows verification",
    "Content updates — keeping the underlying knowledge base current, since a chatbot answering from outdated content is often worse than no chatbot at all",
  ],
  closing:
    "A knowledge base chatbot is only as good as the content it draws from — a significant part of a successful project is often improving and organizing the underlying documentation, not just building the conversational layer on top of it.",
};

export const virtualAssistantSection = {
  title: "AI Virtual Assistants",
  body: "AI virtual assistants extend beyond answering questions into actively performing tasks: retrieving information, scheduling, interacting with APIs, executing defined workflows, and assisting either employees or customers with multi-step processes.",
  distinction:
    "AI chatbot vs. AI virtual assistant — a chatbot is generally focused on conversation, while a virtual assistant is built to actively complete tasks on the user's behalf, often through tool calling and API integrations. In practice, many production systems combine both capabilities.",
};

export const websiteChatbotSection = {
  title: "Website AI Chatbots",
  intro: "Website chatbots are typically the most visible chatbot deployment, appearing as an embeddable widget directly on your site. Key considerations include:",
  considerations: [
    "Website widget — a lightweight, embeddable interface that loads on your site",
    "Responsive design — working properly across desktop and mobile visitors",
    "Authentication — verifying identity where the conversation requires access to account-specific information",
    "Visitor context — using information about the page a visitor is on to provide more relevant responses",
    "Lead capture — collecting contact information from qualified visitors",
    "Analytics — tracking how visitors are actually using the chatbot",
    "CRM integration — logging conversations and leads directly into your sales systems",
    "Human handoff — escalating to a live agent when needed",
  ],
  closing:
    "Website chatbots support a range of goals depending on how they're configured — sales assistance, customer service, product discovery, or onboarding guidance for new users.",
  webDevLink: {
    before: "If your website itself needs new functionality to support a chatbot deployment, our ",
    text: "Web Development Services",
    href: "/services/web-mobile-development/web-development",
    after: " team can handle that alongside the chatbot build.",
  },
};

export const ecommerceSection = {
  title: "Ecommerce AI Chatbots",
  intro: "Ecommerce chatbots help shoppers move through the buying process more efficiently:",
  capabilities: [
    "Product discovery — helping shoppers find relevant products based on stated needs",
    "Product recommendations — suggesting complementary or alternative products",
    "Order questions — answering status and tracking questions",
    "Shipping questions — providing shipping timeline and policy information",
    "Returns — guiding customers through return and exchange processes",
    "Product comparisons — helping shoppers compare options",
    "Customer support — answering common pre- and post-purchase questions",
    "Cart assistance — helping resolve issues that might otherwise cause cart abandonment",
  ],
  closing:
    "Ecommerce chatbots typically integrate with your ecommerce platform, product database, inventory systems, order management system, and CRM to provide accurate, real-time answers. We don't promise guaranteed conversion increases — chatbot impact on conversion depends heavily on implementation quality, the underlying shopping experience, and how well the assistant is actually integrated into the purchase journey.",
};

export const saasChatbotSection = {
  title: "SaaS AI Chatbots",
  intro: "SaaS platforms increasingly use AI chatbots to reduce friction across the user lifecycle:",
  capabilities: [
    "Onboarding — guiding new users through initial setup",
    "Feature discovery — helping users find and understand relevant product features",
    "Support — answering product questions without requiring a support ticket",
    "Knowledge retrieval — surfacing relevant documentation within the product experience",
    "Analytics — helping users understand data or reports within the product",
    "User assistance — providing contextual help based on where a user is in the product",
    "Workflow automation — helping users complete multi-step tasks conversationally",
  ],
  closing:
    "Building a chatbot into a SaaS product often involves broader platform considerations beyond the chatbot itself.",
  saasLink: {
    before: "Our ",
    text: "SaaS Development Services",
    href: etPath("saas-development"),
    after: " page covers the platform-level architecture, multi-tenancy, and billing considerations that frequently come up alongside a chatbot build.",
  },
};

export const enterpriseSection = {
  title: "Enterprise AI Chatbots",
  intro: "Enterprise AI chatbots support both internal and customer-facing use cases at organizational scale:",
  useCases: [
    "Internal AI assistants — helping employees find information or complete routine tasks",
    "Employee support — answering HR, IT, or policy questions",
    "Enterprise knowledge — surfacing information from internal documentation and systems",
    "Customer service — supporting customer-facing interactions at scale",
    "Sales assistance — supporting sales teams with information retrieval and lead qualification",
    "Workflow automation — automating multi-step internal processes",
  ],
  requirements: [
    "Role-based access — different users see and can do different things based on their role",
    "Authentication and authorization — properly verifying identity and permissions",
    "Data isolation — ensuring data from different departments, clients, or business units stays appropriately separated",
    "Auditability — the ability to trace what the chatbot said and did, and why",
    "Security — protecting sensitive enterprise and customer data",
    "Monitoring — ongoing visibility into system behavior and performance",
    "Scalability — supporting concurrent users and growing usage without degrading performance",
    "Integration — connecting cleanly with existing enterprise systems",
  ],
};

export const omnichannelSection = {
  title: "Omnichannel AI Chatbots",
  intro: "Conversational AI systems can be deployed across multiple channels, extending a single underlying assistant to reach users wherever they're already communicating:",
  channels: [
    "Website — the most common deployment channel",
    "Mobile applications — embedded chat experiences within a native or cross-platform app",
    "Messaging platforms — where supported by the relevant platform's API and terms of service",
    "Customer portals — embedded within an existing authenticated customer experience",
    "Internal systems — deployed within internal tools for employee-facing use cases",
  ],
  closing:
    "Channel availability depends entirely on what each platform's API actually supports, and requirements and terms of service can change over time. We don't claim support for any specific third-party messaging integration unless it's technically confirmed and currently supported for your project.",
};

export const crmIntegrationSection = {
  title: "CRM Integration",
  intro: "Connecting a chatbot to your CRM turns conversations into structured, actionable sales and support data:",
  capabilities: [
    "Lead creation — automatically creating new CRM records from qualified conversations",
    "Contact updates — keeping existing contact records current based on conversation content",
    "Conversation history — logging chat transcripts for sales and support context",
    "Lead qualification — passing qualification data collected during the conversation into the CRM",
    "Routing — triggering the right internal workflow based on conversation outcome",
    "Customer information — pulling existing customer data into the conversation for a more personalized interaction",
    "Sales workflow automation — triggering downstream sales processes automatically",
  ],
  closing:
    "CRM integrations are built through the CRM's API, using secure authentication and reliable data synchronization. We don't claim official partnerships with any specific CRM provider — integrations are built against publicly documented APIs, tailored to your specific CRM and workflow.",
};

export const apiIntegrationSection = {
  title: "Chatbot API Integration",
  intro: "Beyond CRM specifically, chatbots frequently need to connect to a range of other systems:",
  patterns: [
    "REST APIs — the most common integration pattern for retrieving data or triggering actions",
    "GraphQL — used where the underlying system's data-fetching patterns benefit from it",
    "Webhooks — enabling real-time updates and event-driven behavior",
    "Databases — direct or API-mediated access to structured business data",
    "Business systems — ERP, inventory, booking, or other operational systems",
    "Authentication services — verifying user identity before granting access to sensitive actions or data",
    "Third-party applications — connecting to whatever tools your business already relies on",
  ],
  closing:
    "API integration is what allows a chatbot to move beyond answering questions and actually retrieve live information or trigger controlled actions — checking real-time inventory, booking an actual appointment, or updating an actual account record.",
};

export const humanHandoffSection = {
  title: "Human Handoff",
  intro: "Human-in-the-loop workflows are essential for many production chatbot systems — a well-designed chatbot knows its limits and hands off appropriately.",
  triggers: [
    "Low-confidence responses — when the system isn't confident it has an accurate answer",
    "Sensitive questions — topics that require human judgment, empathy, or authority",
    "Complex issues — requests that fall outside the chatbot's defined scope or capabilities",
    "Customer frustration — detecting signals that a user needs a human, not another automated response",
    "Authentication requirements — situations requiring identity verification beyond what the chatbot can handle",
    "Explicit requests — a user directly asking to speak with a person",
  ],
  closing:
    "A well-designed escalation flow preserves conversation context so the human agent isn't starting from scratch, and clearly communicates to the user what's happening during the handoff.",
};

export const memoryContextSection = {
  title: "Chatbot Memory & Context",
  intro: "Conversation memory needs to be implemented intentionally, not simply \"store everything\" by default.",
  aspects: [
    "Conversation context — tracking what's been discussed within the current session so responses stay coherent",
    "Session memory — retaining relevant information for the duration of an active conversation",
    "User preferences — remembering stated preferences to personalize future interactions, where appropriate",
    "Long-term memory (where appropriate) — retaining relevant information across multiple sessions",
    "Data privacy — being deliberate about what's actually stored, for how long, and who can access it",
    "Context limits — language models have finite context windows, which requires deliberate decisions about what information to include",
  ],
  closing:
    "Memory should be scoped to what actually improves the user experience for a given use case — indefinitely retaining every detail of every conversation introduces both privacy risk and unnecessary complexity without a corresponding benefit in most applications.",
};

export const securitySection = {
  title: "AI Chatbot Security",
  intro: "Security has to be built into a chatbot from the start, applying standard application security practices alongside risks specific to AI-powered systems.",
  standardPractices: [
    "Authentication and authorization, controlling who can access what through the chatbot",
    "API security, including rate limiting and proper access scoping",
    "Encryption, for data in transit and at rest",
    "Access control, ensuring users only reach data and actions appropriate to their role",
    "Secure data storage, particularly for conversation history and any personal information collected",
    "Input validation and output validation, since chatbots can be manipulated through crafted input",
    "Logging and monitoring, to detect unusual activity or misuse",
    "Rate limiting, to prevent abuse and control cost",
    "Sensitive information handling, with deliberate policies around what the chatbot is permitted to collect, store, or repeat back",
  ],
  aiRisks: [
    "Prompt injection — attempts to manipulate the chatbot's behavior through crafted input text",
    "Data leakage — the risk of sensitive information being exposed through chatbot responses",
    "Unauthorized tool use — a chatbot triggering an action it shouldn't have permission to perform",
    "Malicious input — deliberately adversarial input designed to break or exploit the system",
    "Hallucinations — the model generating plausible-sounding but inaccurate information",
    "Unsafe outputs — responses that are inappropriate, harmful, or outside the chatbot's intended scope",
  ],
  disclaimer:
    "We do not claim compliance with any specific regulatory framework — including HIPAA, SOC 2, ISO 27001, or GDPR — unless that compliance has been independently verified for a specific engagement.",
};

export const guardrailsSection = {
  title: "AI Chatbot Guardrails",
  intro: "Production chatbots require deliberately controlled behavior — an unconstrained system, even a technically capable one, is a liability in a business context. Guardrails typically include:",
  items: [
    "Allowed topics — defining what the chatbot is intended to discuss",
    "Restricted topics — explicitly preventing the chatbot from engaging with certain subjects",
    "Input validation — screening user input for attempts at manipulation or abuse",
    "Output validation — checking generated responses against expected boundaries before they reach the user",
    "Moderation — filtering inappropriate or harmful content, both incoming and outgoing",
    "Tool permissions — strictly scoping what actions the chatbot is allowed to trigger through connected systems",
    "Human approval — requiring human sign-off for higher-stakes actions before they're executed",
    "Fallback behavior — defining a safe, predictable response when the chatbot can't confidently handle a request",
    "Monitoring — ongoing review of chatbot behavior in production, not just at launch",
  ],
  closing:
    "Guardrails aren't a limitation on a chatbot's usefulness — they're what make it safe and predictable enough to actually deploy in a real business context.",
};

export const analyticsSection = {
  title: "Chatbot Analytics",
  intro: "Understanding how a chatbot performs in production is essential to improving it over time. Key metrics we track include:",
  metrics: [
    "Conversation volume — how many conversations the chatbot handles over a given period",
    "Engagement — how users are actually interacting with the assistant",
    "Containment — the proportion of conversations resolved without human escalation",
    "Escalation — how often and why conversations are handed off to a person",
    "Unresolved questions — patterns in questions the chatbot couldn't adequately answer",
    "Response quality — ongoing evaluation of whether responses are accurate and appropriate",
    "User satisfaction — direct feedback where collected",
    "Lead conversion — for sales and lead-gen use cases, how conversations translate into qualified leads",
    "Support resolution — for support use cases, how effectively issues are actually resolved",
    "Fallback rate — how often the chatbot defaults to a generic response",
  ],
  closing:
    "We don't fabricate performance benchmarks or promise specific containment or conversion rates upfront — actual performance depends heavily on use case, knowledge quality, and how well the chatbot is scoped and tuned for your specific audience.",
};

export const architectureSection = {
  title: "AI Chatbot Architecture",
  intro: "A typical AI chatbot architecture flows through several distinct layers:",
  pipeline: "User → Chat Interface → Backend / API → Conversation Layer → Intent / LLM Processing → RAG / Knowledge Base → Business APIs / Tools → Response Validation → AI Response → Analytics / Monitoring → Human Escalation",
  layers: [
    "Chat interface — the widget or application surface the user interacts with",
    "Backend/API — handles requests, authentication, and routing",
    "Conversation layer — manages session state and context",
    "Intent/LLM processing — interprets the user's request and determines how to respond",
    "RAG/knowledge base — retrieves relevant information where the response needs to be grounded in specific content",
    "Business APIs/tools — executed when the chatbot needs to retrieve live data or perform an action",
    "Response validation — checks the generated response against guardrails before it reaches the user",
    "Analytics/monitoring — captures data on how the interaction went",
    "Human escalation — the path to a live agent when needed",
  ],
  closing:
    "This architecture varies meaningfully by project — a simple FAQ bot doesn't need a full RAG pipeline, while an enterprise conversational platform typically needs all of these layers built to scale and to enterprise security standards.",
};

export const techStackSection = {
  title: "Technology Stack",
  intro: "Technology choices should be driven by the specific project's requirements — not by defaulting to whatever's currently trending.",
  categories: [
    { label: "Frontend", desc: "React and Next.js are common choices for building chat interfaces, using JavaScript or TypeScript." },
    { label: "Backend", desc: "Node.js and Express, or Python-based backends, selected based on the existing technology environment and the AI/ML tooling required. Laravel is used where appropriate for projects already built on a PHP-based stack." },
    { label: "AI", desc: "LLM APIs and NLP frameworks power the conversational layer, including OpenAI's APIs where appropriate, and Hugging Face tooling where an open-source or self-hosted model approach fits the project's requirements." },
    { label: "Databases", desc: "PostgreSQL, MongoDB, or MySQL, chosen based on the structure of the underlying business data." },
    { label: "Vector technologies", desc: "For RAG implementations, vector databases such as Pinecone, Qdrant, Weaviate, Milvus, or pgvector store and search embeddings efficiently." },
    { label: "Cloud infrastructure", desc: "AWS, Azure, and Google Cloud all offer relevant infrastructure for hosting and scaling chatbot systems, selected based on existing infrastructure and specific service requirements." },
  ],
  closing:
    "We do not claim official partnerships with any of these technology providers. Technology selection is a project-by-project decision based on requirements, scale, and existing infrastructure — not a fixed stack applied regardless of fit.",
};

export const developmentProcess: { step: number; title: string }[] = [
  { step: 1, title: "Business Discovery — understanding your business, goals, and target users" },
  { step: 2, title: "Use Case Identification — defining specifically what the chatbot needs to do" },
  { step: 3, title: "Conversation Design — mapping out how key conversations should flow" },
  { step: 4, title: "Knowledge Assessment — evaluating what content and data sources are available" },
  { step: 5, title: "Integration Planning — identifying which systems the chatbot needs to connect to" },
  { step: 6, title: "Architecture Design — designing the technical approach appropriate to the project's scope" },
  { step: 7, title: "Prototype — validating the core conversational approach before full development" },
  { step: 8, title: "AI/LLM Integration — connecting the chosen language model and configuring its behavior" },
  { step: 9, title: "RAG/Knowledge Integration — building the retrieval pipeline where the project requires it" },
  { step: 10, title: "Backend Development — building the supporting application logic and infrastructure" },
  { step: 11, title: "Frontend/Chat Interface — building the interface users actually interact with" },
  { step: 12, title: "CRM/API Integration — connecting the chatbot to relevant business systems" },
  { step: 13, title: "Security Testing — validating the system against security and guardrail requirements" },
  { step: 14, title: "Conversation Testing — testing the chatbot against realistic user inputs, including edge cases" },
  { step: 15, title: "Performance Testing — validating response time and reliability under realistic load" },
  { step: 16, title: "Deployment — releasing the chatbot to production" },
  { step: 17, title: "Analytics Setup — implementing the tracking needed to measure real-world performance" },
  { step: 18, title: "Continuous Improvement — refining conversation design, knowledge content, and guardrails based on production data" },
];

export const mvpSection = {
  title: "AI Chatbot MVP Development",
  intro: "For startups and businesses testing a new chatbot concept, an MVP approach lets you validate the idea before investing in a full-featured system:",
  items: [
    "Proof of concept — validating the core technical approach and conversational quality",
    "Limited use case — starting with a narrow, well-defined scope rather than trying to handle everything at once",
    "Initial knowledge base — launching with a focused, well-curated set of content rather than an exhaustive one",
    "Essential integrations — connecting only the systems genuinely needed for the initial use case",
    "Analytics — instrumenting the MVP from day one to understand real usage patterns",
    "User feedback — gathering direct input on where the chatbot succeeds and where it falls short",
    "Iterative improvement — expanding scope, knowledge, and integrations based on what's actually working",
  ],
  closing:
    "Starting narrow and expanding based on real usage data consistently produces better outcomes than attempting to launch a fully comprehensive chatbot on day one.",
};

export const industriesSection: { industry: string; desc: string }[] = [
  { industry: "Healthcare", desc: "Appointment scheduling assistance, general facility and service information, insurance and billing FAQ support, and administrative intake support. Scoped to administrative and informational support — no medical diagnosis or clinical advice." },
  { industry: "Finance", desc: "General account FAQ support, service and product information, appointment or consultation scheduling, and application status inquiries. Particular care around data security and regulatory considerations." },
  { industry: "Ecommerce", desc: "Product discovery, order status and tracking, returns guidance, and pre-purchase question answering." },
  { industry: "Education", desc: "Enrollment and admissions FAQ support, course and program information, student support triage, and administrative assistance." },
  { industry: "Real Estate", desc: "Property inquiry handling, scheduling viewings, lead qualification, and general market or listing information." },
  { industry: "Logistics", desc: "Shipment tracking inquiries, delivery scheduling support, and general service FAQ handling." },
  { industry: "Manufacturing", desc: "Internal knowledge assistance for technical documentation, order and quote status inquiries, and dealer or distributor support." },
  { industry: "Retail", desc: "In-store and online product information, store hours and location inquiries, and loyalty program support." },
  { industry: "SaaS", desc: "Onboarding guidance, feature discovery, in-product support, and account management assistance." },
  { industry: "Professional Services", desc: "Appointment scheduling, general service inquiries, and intake triage before human follow-up." },
  { industry: "Travel", desc: "Booking assistance, itinerary questions, and general travel policy or service inquiries." },
];

export const usaSection = {
  title: "AI Chatbot Development for USA Businesses",
  body: "We work with businesses across the United States on AI chatbot development, from startups building their first customer support assistant to enterprises deploying conversational AI at scale. Companies in major technology markets — including New York, California, Texas, Washington, Massachusetts, Florida, and Illinois — engage our AI chatbot developers for custom chatbot development, RAG-powered knowledge assistants, and CRM-integrated sales and support bots.",
};

export const canadaSection = {
  title: "AI Chatbot Development for Canadian Businesses",
  body: "We also support Canadian businesses with custom AI chatbot development, from startups exploring their first conversational AI use case to enterprises building internal knowledge assistants. This includes companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, and Edmonton, across industries ranging from ecommerce and finance to real estate and professional services.",
};

export const costSection = {
  title: "AI Chatbot Development Cost",
  intro: "AI chatbot development cost varies significantly based on:",
  factors: [
    "Chatbot complexity — a simple FAQ bot costs far less than a full conversational AI platform",
    "AI model — the choice between a lighter-weight model and a more capable one affects both build and ongoing usage cost",
    "Number of integrations — each connected system adds development and testing overhead",
    "Knowledge base — the scope and quality of content that needs to be prepared and ingested",
    "RAG architecture — retrieval pipelines add meaningful engineering complexity",
    "UI/UX — the design and development of the chat interface itself",
    "Authentication — basic anonymous access versus authenticated, personalized experiences",
    "CRM integration — connecting to and properly mapping data with your existing CRM",
    "API integrations — each additional business system connection",
    "Analytics — the depth of tracking and reporting implemented",
    "Security — the rigor required for guardrails, access control, and data protection",
    "Hosting — infrastructure costs for running the chatbot and any associated AI/vector database services",
    "Maintenance — ongoing costs for monitoring, knowledge updates, and improvement",
  ],
  tiers: [
    "Basic chatbot — a narrowly scoped FAQ or informational assistant with minimal integrations",
    "AI chatbot MVP — a focused proof of concept validating a specific use case with essential integrations",
    "RAG chatbot — a knowledge-grounded assistant with a retrieval pipeline and a defined knowledge base",
    "Enterprise conversational AI platform — a full-scale system with extensive integrations, role-based access, and enterprise security requirements",
  ],
  closing:
    "These are general industry approximations, not a quote from The Runner Software Solutions — actual project cost depends entirely on your specific requirements and is determined through discovery and scoping.",
};

export const timelineSection = {
  title: "AI Chatbot Development Timeline",
  intro: "Timeline depends heavily on scope, and factors that affect it include:",
  factors: [
    "Scope — how broad or narrow the chatbot's intended use case is",
    "Conversation complexity — how varied and open-ended the expected conversations are",
    "Integrations — the number and complexity of connected systems",
    "Knowledge sources — how much content needs to be prepared, ingested, and validated",
    "Authentication — whether the chatbot requires identity verification",
    "Security — the depth of guardrail and access-control work required",
    "Testing — how thoroughly conversation quality and edge cases need to be validated",
    "Deployment — the complexity of the release process, including any enterprise infrastructure requirements",
  ],
  stages: [
    "Prototype — a proof of concept validating the core conversational approach, typically the fastest stage",
    "MVP — a focused, production-ready chatbot for a specific use case",
    "Production chatbot — a fully integrated chatbot ready for broad deployment",
    "Enterprise chatbot — a large-scale conversational platform with extensive integrations and security requirements",
  ],
  closing:
    "We don't guarantee fixed delivery times before scoping a project, since knowledge readiness and integration complexity often become clearer only once discovery is underway.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: "Custom software engineering", desc: "Every chatbot project is built on solid engineering, not a wrapper around a generic script." },
  { icon: Brain, title: "Conversational AI expertise", desc: "NLU, intent recognition, context management, and LLM integration done properly." },
  { icon: Layers, title: "Full-stack development", desc: "Chatbots properly integrated into real, usable applications — not isolated demos." },
  { icon: Zap, title: "API integrations", desc: "Thoughtful connections to your existing CRM and business systems." },
  { icon: Database, title: "RAG implementation", desc: "Knowledge-grounded chatbots that draw on your actual company documentation." },
  { icon: Activity, title: "Scalable architecture", desc: "Architecture matched to your project's actual complexity and expected usage." },
  { icon: Shield, title: "Security-conscious development", desc: "Standard application security plus AI-specific risks like prompt injection." },
  { icon: MessageSquare, title: "Structured testing", desc: "Conversation quality testing, not just functional correctness." },
  { icon: BarChart3, title: "Analytics", desc: "See how the chatbot is actually performing after launch." },
  { icon: Lock, title: "Maintainable code", desc: "Code a team can reasonably support and extend over time." },
  { icon: Bot, title: "Long-term support", desc: "Ongoing knowledge updates and performance improvement after launch." },
];

export const aiChatbotFaqs: { q: string; a: string }[] = [
  { q: "What is AI chatbot development?", a: "AI chatbot development is the engineering process of building conversational software that can understand user requests, retrieve relevant information, generate useful responses, and integrate with business systems to take defined actions. It combines natural language processing, large language models, retrieval techniques, and API integrations to create an assistant that can genuinely help users rather than just following a rigid script." },
  { q: "What does an AI chatbot development company do?", a: "An AI chatbot development company designs and builds conversational AI systems tailored to a specific business's use cases, including conversation design, knowledge base integration, CRM and API connections, security and guardrail implementation, testing, deployment, and ongoing optimization based on real usage data." },
  { q: "What are AI chatbot development services?", a: "AI chatbot development services cover the full range of work needed to build and operate a conversational AI system: business discovery, use case identification, conversation design, knowledge assessment, AI/LLM integration, RAG implementation where appropriate, backend and API development, CRM integration, security testing, and analytics setup." },
  { q: "How much does AI chatbot development cost?", a: "Cost depends on chatbot complexity, the AI model used, number of integrations, knowledge base scope, and whether a RAG architecture is required. Estimates range from a modest investment for a basic FAQ-style chatbot to a considerably larger one for an enterprise conversational AI platform. These are general industry ranges, not fixed pricing — accurate estimates require proper scoping." },
  { q: "How long does it take to develop an AI chatbot?", a: "Timeline depends on scope, conversation complexity, the number of integrations required, and how much knowledge content needs to be prepared and validated. A narrowly scoped prototype or MVP can move relatively quickly, while an enterprise chatbot with extensive integrations and security requirements takes considerably longer." },
  { q: "What is the difference between a traditional chatbot and an AI chatbot?", a: "A traditional rule-based chatbot matches user input against predefined keywords or decision trees, and fails or falls back to a generic message when a question doesn't match an expected path. An AI-powered chatbot uses natural language processing and often large language models to interpret meaning and intent, handle varied phrasing, and generate relevant responses." },
  { q: "What is conversational AI?", a: "Conversational AI refers to the technology and techniques — natural language understanding, intent recognition, context management, and often large language models — that allow software to hold flexible, natural conversations with users rather than following rigid, pre-scripted flows." },
  { q: "Can an AI chatbot answer questions from company documents?", a: "Yes, this is typically achieved through Retrieval-Augmented Generation (RAG), where a chatbot searches your actual documents for relevant content and uses that retrieved information to generate an accurate, grounded response." },
  { q: "What is a RAG chatbot?", a: "A RAG (Retrieval-Augmented Generation) chatbot combines a search step with a language model's generation capability: relevant content is retrieved from your documents based on the user's question, and the language model then generates a response grounded in that retrieved content, often with citations back to the source material." },
  { q: "Can an AI chatbot integrate with a CRM?", a: "Yes. AI chatbots can integrate with CRM systems to create leads, update contact records, log conversation history, pass along qualification data, and trigger sales workflows automatically. Integration is typically built through the CRM's API, tailored to your specific CRM platform and sales process." },
  { q: "Can an AI chatbot generate and qualify leads?", a: "Yes, AI lead generation chatbots are specifically designed to engage website visitors, ask qualifying questions, capture contact information, score leads based on responses, and route qualified leads to the right sales team or workflow." },
  { q: "Can AI chatbots automate customer support?", a: "Yes, AI customer support chatbots can handle a significant volume of repetitive requests — FAQs, order status, basic troubleshooting, and ticket creation — while escalating complex, sensitive, or unresolved issues to human agents. They are not a complete replacement for human support, particularly for complex or sensitive interactions." },
  { q: "Can an AI chatbot be integrated into a website?", a: "Yes, website AI chatbots are typically deployed as an embeddable widget that works across desktop and mobile visitors, with features like visitor context awareness, lead capture, analytics, CRM integration, and human handoff built in depending on the specific use case." },
  { q: "Can you build an AI chatbot for a SaaS application?", a: "Yes, we build AI chatbots for SaaS platforms to support onboarding, feature discovery, in-product support, and workflow automation. These projects often involve broader platform-level considerations, such as multi-tenancy and user permissions, alongside the chatbot itself." },
  { q: "Can AI chatbots integrate with existing business software?", a: "Yes, AI chatbots can integrate with a wide range of business software — ERP, ecommerce platforms, ticketing systems, internal databases, and more — through REST APIs, GraphQL, and webhooks." },
  { q: "How do you prevent AI chatbots from giving incorrect answers?", a: "We reduce the risk of incorrect answers through several layers: grounding responses in verified source content via RAG where accuracy matters most, implementing output validation and guardrails, providing citations so users can verify information, and designing appropriate human escalation paths for questions the chatbot can't confidently answer." },
  { q: "How do you secure an AI chatbot?", a: "We apply standard application security practices — authentication, encryption, access control, rate limiting, and monitoring — alongside AI-specific protections against risks like prompt injection, data leakage, and unauthorized tool use." },
  { q: "Can startups build an AI chatbot MVP?", a: "Yes, AI chatbot MVP development is a common and sensible path for startups. This typically means starting with a narrowly scoped use case, a focused knowledge base, and only the essential integrations needed to prove the concept, then expanding based on real usage data." },
  { q: "Can US businesses hire AI chatbot developers?", a: "Yes, we work with businesses across the United States on AI chatbot development projects, from startups to enterprises, using a remote-friendly process covering discovery, conversation design, integration, testing, and ongoing optimization." },
  { q: "Can Canadian businesses hire AI chatbot developers?", a: "Yes, we work with Canadian businesses on AI chatbot development using the same structured, remote-friendly process applied to every engagement — including discovery, conversation design, knowledge integration, security review, and deployment." },
];

export const finalCta = {
  headline: "Get Started with The Runner Software Solutions",
  body: "Building a successful AI chatbot starts with a clear understanding of your business, your users, and the specific problem the chatbot needs to solve — not with jumping straight into implementation.",
  steps: [
    "Discuss business goals — tell us what you're trying to achieve",
    "Define chatbot use cases — pinpointing the specific conversations the chatbot needs to handle",
    "Assess knowledge and data — evaluating what content and systems are available to work with",
    "Plan integrations — identifying which business systems the chatbot needs to connect to",
    "Design conversation architecture — mapping out how key conversations should flow",
    "Build prototype — validating the core approach before full development",
    "Develop chatbot — building the production-ready system",
    "Test — validating conversation quality, integrations, and security",
    "Deploy — releasing the chatbot to production",
    "Monitor and improve — tracking performance and refining the system over time",
  ],
  primaryCta: "Build Your AI Chatbot",
  secondaryCta: "Discuss Your AI Chatbot Project",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
