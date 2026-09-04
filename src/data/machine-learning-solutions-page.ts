import type { LucideIcon } from "lucide-react";
import {
  Brain,
  LineChart,
  TrendingUp,
  Shield,
  Database,
  Layers,
  Code2,
  Activity,
  BarChart3,
  Zap,
  Lock,
  Cpu,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const mlSolutionsSeo = {
  title: "Machine Learning Solutions & Development | The Runner",
  description:
    "Custom machine learning solutions — predictive analytics, forecasting, computer vision, and MLOps built for production. Talk to our ML team.",
  h1: "Machine Learning Solutions for Predictive, Intelligent Business Applications",
  canonicalPath: "/services/emerging-technologies/machine-learning-solutions",
  ogTitle: "Machine Learning Solutions & Development | The Runner Software Solutions",
  ogDescription:
    "Custom machine learning solutions — predictive analytics, forecasting, computer vision, and MLOps built for production. Serving businesses in the USA and Canada.",
  twitterTitle: "Machine Learning Solutions & Development | The Runner Software Solutions",
  twitterDescription:
    "Custom machine learning solutions — predictive analytics, forecasting, computer vision, and MLOps built for production. Serving businesses in the USA and Canada.",
};

export const mlHero = {
  intro:
    "Most valuable machine learning work isn't about chasing the latest model architecture — it's about turning existing business data into predictions, classifications, and recommendations that actually improve decisions. The Runner Software Solutions designs and builds custom machine learning solutions: predictive models, forecasting systems, recommendation engines, computer vision applications, and the MLOps infrastructure that keeps them reliable in production, not just in a notebook.",
  summary:
    "Whether you need a proof of concept to validate a predictive use case, a production forecasting system, or full model deployment and monitoring infrastructure, our machine learning development is built on solid engineering fundamentals — clean data pipelines, proper evaluation, and maintainable, monitored systems.",
  primaryCta: "Build Your Machine Learning Solution",
  secondaryCta: "Talk to a Machine Learning Expert",
};

export const whatAreMlSolutions = {
  title: "What Are Machine Learning Solutions?",
  definition:
    "Machine learning solutions are software systems that use data and statistical or computational methods to identify patterns, make predictions, classify information, recommend actions, detect anomalies, or automate specific decisions — learning from historical data rather than following explicitly programmed rules for every scenario.",
  concepts: [
    "Training data — the historical examples a model learns from",
    "Features — the specific input variables a model uses to make predictions",
    "Labels — the known outcomes used to train a model in supervised learning scenarios",
    "Models — the mathematical or statistical structures that learn patterns from data",
    "Training — the process of fitting a model to historical data",
    "Validation — evaluating a model on data it wasn't trained on, to tune it without overfitting",
    "Testing — a final, held-out evaluation to estimate how the model will perform on genuinely new data",
    "Inference — using a trained model to make predictions on new, real-world data",
    "Deployment — putting a trained model into production use",
    "Monitoring — tracking a model's performance and behavior over time after deployment",
  ],
  scopeNote:
    "It's worth being clear about scope: machine learning is broader than simply calling an AI API. Using a third-party AI API is one legitimate way to access AI capability, but machine learning development as a discipline includes building, training, evaluating, deploying, and maintaining models specific to your business's own data — work that a generic API call doesn't cover.",
  aiDevLink: {
    before: "For a broader look at the full AI ecosystem this fits into, see our ",
    text: "AI Development Services",
    href: etPath("ai-development"),
    after: " page. This page focuses specifically on machine learning: prediction, classification, forecasting, recommendation, and the production engineering (MLOps) that keeps these systems reliable over time.",
  },
};

export const mlServices: { title: string; desc: string }[] = [
  { title: "Custom Machine Learning Development", desc: "Building a model and system around your specific business objectives and data, rather than forcing a generic tool to fit a problem it wasn't designed for." },
  { title: "Predictive Analytics", desc: "Using historical data to forecast future outcomes — demand, churn, risk, and more — supporting better business decisions." },
  { title: "Predictive Modeling", desc: "Building, training, and evaluating the models behind predictive analytics — selecting the right algorithm, engineering useful features, and validating performance." },
  { title: "Recommendation System Development", desc: "Surfacing relevant products, content, or actions based on user behavior, using collaborative filtering and content-based approaches." },
  { title: "Classification Model Development", desc: "Predicting a category — fraud or legitimate, spam or not, high-risk or low-risk — supporting a wide range of business decisions." },
  { title: "Regression Model Development", desc: "Predicting continuous numerical outcomes, such as expected revenue, delivery time, or customer lifetime value." },
  { title: "Forecasting Solutions", desc: "Predicting future values over time, supporting demand planning, sales projections, and operational resource planning." },
  { title: "Anomaly Detection", desc: "Identifying unusual patterns in data, supporting fraud detection, system monitoring, and equipment health monitoring." },
  { title: "Customer Churn Prediction", desc: "Identifying customers likely to disengage or cancel, supporting proactive retention strategies." },
  { title: "Fraud Detection", desc: "Flagging suspicious transactions or behavior for review, supporting risk management workflows." },
  { title: "Computer Vision", desc: "Extracting structured information from images and video, supporting quality inspection, document processing, and visual analysis." },
  { title: "Natural Language Processing", desc: "Traditional NLP techniques classify, extract, and structure information from text — distinct from generative language model applications." },
  { title: "Machine Learning Automation", desc: "Applying predictive and classification models to automate specific, data-driven business decisions." },
  { title: "Enterprise Machine Learning", desc: "Governance, security, and scalability requirements of ML systems operating within larger organizations." },
  { title: "MLOps and Model Deployment", desc: "The production engineering discipline that keeps ML models reliable, monitored, and maintainable after deployment." },
  { title: "Machine Learning Integration", desc: "Connecting trained models to the CRM, ERP, websites, and applications where their predictions actually get used." },
];

export const customMlSection = {
  title: "Custom Machine Learning Development",
  intro: "Custom ML solutions are shaped around several specific factors:",
  factors: [
    "Business objectives — what decision or outcome the model needs to support",
    "Available data — what data actually exists to train and validate a model",
    "Data quality — how clean, complete, and representative that data is",
    "Model requirements — the accuracy, latency, and interpretability needs specific to the use case",
    "Infrastructure — what's needed to train, host, and serve the model reliably",
    "Integration requirements — how the model's output needs to reach the systems and people who'll use it",
    "Security — how sensitive data used by the model is protected",
    "Scalability — whether the system needs to support growing data volume or prediction load",
    "Monitoring — how the model's ongoing performance will be tracked",
  ],
  closing:
    "The right machine learning approach depends entirely on the specific business problem and the data actually available — not on defaulting to the most sophisticated technique available. Custom ML development isn't automatically the better choice for every situation, either: for some problems, an existing tool, a simpler statistical approach, or a pre-built API genuinely is the more cost-effective and appropriate answer.",
};

export const mlTypesSection = {
  title: "Machine Learning Types",
  intro: "Understanding the major categories of machine learning helps clarify which approach fits a given business problem.",
  types: [
    { name: "Supervised learning", desc: "Models learn from labeled examples to predict an outcome for new data. Examples include classification and regression." },
    { name: "Unsupervised learning", desc: "Models find structure in data without labeled outcomes — clustering and certain anomaly detection approaches." },
    { name: "Semi-supervised learning", desc: "Models learn from a smaller set of labeled data and a larger set of unlabeled data, useful when labeling is expensive." },
    { name: "Reinforcement learning", desc: "Models learn by taking actions and receiving feedback. Powerful for specialized problems but appropriate for a narrower set of practical business applications." },
  ],
  comparison: {
    headers: ["", "Supervised Learning", "Unsupervised Learning", "Semi-Supervised Learning", "Reinforcement Learning"],
    rows: [
      ["Data required", "Labeled examples", "Unlabeled data", "Small labeled set + larger unlabeled set", "Interaction with an environment"],
      ["Typical tasks", "Classification, regression", "Clustering, anomaly detection", "Classification with limited labels", "Sequential decision-making, optimization"],
      ["Common business use", "Churn prediction, fraud detection, demand forecasting", "Customer segmentation, anomaly detection", "Document categorization with limited labeled examples", "Dynamic pricing, resource allocation"],
      ["Data labeling cost", "Requires labeled data upfront", "No labeling required", "Reduced labeling requirement", "No traditional labeling; requires defined reward signal"],
    ],
  },
};

export const predictiveAnalyticsSection = {
  title: "Predictive Analytics",
  intro: "Predictive analytics turns historical data into forward-looking business insight. Common applications include:",
  applications: [
    "Demand prediction — forecasting future product or service demand",
    "Sales forecasting — projecting future revenue based on historical trends and pipeline data",
    "Customer churn prediction — identifying customers likely to disengage",
    "Risk scoring — quantifying risk for lending, insurance, or operational decisions",
    "Inventory forecasting — predicting stock needs to avoid overstock or shortages",
    "Operational forecasting — anticipating staffing, capacity, or resource needs",
    "Customer behavior analysis — understanding patterns in how customers engage with a product or service",
  ],
  pipeline: "Historical Data → Feature Engineering → Model Training → Validation → Prediction → Business Action",
  closing:
    "Predictive analytics supports better decisions by providing a data-informed estimate of future outcomes — it doesn't replace human judgment, particularly for high-stakes decisions, and we don't promise guaranteed prediction accuracy.",
};

export const predictiveModelingSection = {
  title: "Predictive Modeling",
  intro: "Predictive modeling is the technical work behind predictive analytics: building, training, and validating the models that generate predictions. Key steps include:",
  steps: [
    "Feature engineering — deriving the specific input variables a model actually learns from, often the single highest-leverage part of the process",
    "Model selection — choosing an appropriate algorithm based on the problem, data volume, and interpretability needs",
    "Training — fitting the selected model to historical data",
    "Validation — tuning the model on held-out data to avoid overfitting to the training set",
    "Testing — a final evaluation on data the model has never seen, to estimate real-world performance",
    "Hyperparameter tuning — systematically adjusting model configuration settings to improve performance",
    "Model evaluation — assessing whether the model actually performs well enough for the business problem at hand",
  ],
  algorithms:
    "Common algorithms include linear regression and logistic regression for simpler, interpretable problems; decision trees and random forests for handling non-linear relationships; gradient boosting methods for strong performance on structured/tabular data; clustering algorithms for unsupervised grouping; and neural networks for complex pattern recognition. No single algorithm is universally best — the right choice depends on data volume, feature complexity, interpretability requirements, and computational constraints.",
};

export const recommendationSection = {
  title: "Recommendation System Development",
  intro: "Recommendation systems surface relevant products, content, or actions based on user behavior and preferences. Core approaches include:",
  approaches: [
    "Content-based recommendations — recommending items similar to what a user has previously engaged with, based on item attributes",
    "Collaborative filtering — recommending items based on the behavior of similar users",
    "Hybrid recommendation systems — combining multiple signals for more robust, resilient recommendations",
  ],
  useCases: "Ecommerce product recommendations, streaming content recommendations, SaaS feature or content suggestions, education platform course recommendations, marketplace listing recommendations, and content platform article or media suggestions.",
  challenges: [
    "Cold start — recommending effectively for new users or new items with little interaction history, typically requiring fallback on content-based signals or general popularity",
    "Data quality — recommendation quality depends heavily on having sufficient, clean behavioral data; sparse or noisy interaction data produces weak recommendations regardless of algorithm sophistication",
  ],
};

export const classificationSection = {
  title: "Classification Model Development",
  intro: "Classification models predict a discrete category. Common business use cases include:",
  useCases: [
    "Spam detection — filtering unwanted or malicious content",
    "Lead classification — categorizing incoming leads by quality or fit",
    "Customer segmentation — grouping customers into meaningful categories for targeted strategy",
    "Fraud detection — flagging transactions or behavior as likely fraudulent",
    "Document classification — automatically categorizing incoming documents",
    "Risk classification — categorizing risk level for lending, insurance, or operational decisions",
  ],
  types: "Classification tasks are either binary (two possible outcomes, like fraud/not fraud) or multiclass (more than two categories, like document type).",
  metrics: [
    "Precision — of the items predicted positive, how many actually were",
    "Recall — of the items that were actually positive, how many the model correctly identified",
    "F1 score — a balance between precision and recall",
    "Accuracy — overall proportion of correct predictions, though often misleading for imbalanced datasets",
    "ROC-AUC (where appropriate) — how well the model separates classes across different decision thresholds",
  ],
  closing:
    "Metric selection depends entirely on the business problem — for fraud detection, missing actual fraud (low recall) is often far costlier than flagging a few legitimate transactions for review.",
};

export const regressionSection = {
  title: "Regression Model Development",
  intro: "Regression models predict continuous numerical outcomes rather than categories. Common examples include:",
  examples: [
    "Demand — predicting expected product or service demand as a numeric value",
    "Revenue — projecting expected revenue over a future period",
    "Pricing — predicting an appropriate price point based on relevant factors",
    "Delivery time — estimating expected delivery or completion time",
    "Sales — forecasting expected sales volume",
    "Customer value — predicting expected customer lifetime value",
  ],
  closing:
    "Building a regression model follows a similar path to classification: feature engineering, training on historical data, validation to avoid overfitting, and evaluation using regression-appropriate metrics.",
};

export const forecastingSection = {
  title: "Forecasting Solutions",
  intro: "Forecasting solutions predict future values over time, distinct from a single-point prediction. Common use cases include:",
  useCases: [
    "Sales forecasting — projecting future sales across a time horizon",
    "Demand forecasting — predicting future product or service demand over time",
    "Inventory forecasting — planning stock levels to match anticipated demand",
    "Traffic forecasting — predicting website, application, or physical traffic patterns",
    "Resource planning — anticipating staffing or capacity needs over time",
    "Operational forecasting — projecting other time-based operational metrics",
  ],
  factors: "Forecasting models account for historical patterns, seasonality, trends, and, where relevant, external variables that influence the outcome being forecast.",
  closing:
    "We don't guarantee forecast accuracy — forecasting inherently deals with uncertainty, and accuracy depends on how stable and predictable the underlying patterns actually are. Forecasts are best used as a structured, data-informed input to planning decisions, not a guaranteed outcome.",
};

export const anomalyDetectionSection = {
  title: "Anomaly Detection",
  intro: "Anomaly detection identifies data points or patterns that deviate meaningfully from what's expected. Common use cases include:",
  useCases: [
    "Fraud detection — identifying unusual transaction patterns",
    "Cybersecurity — flagging unusual system or network activity",
    "System monitoring — detecting abnormal application or infrastructure behavior",
    "Equipment monitoring — identifying early signs of equipment failure or malfunction",
    "Financial transactions — flagging unusual account activity",
    "Operational anomalies — surfacing unexpected deviations in business operations",
  ],
  closing:
    "Anomaly detection can use supervised approaches (when labeled examples of past anomalies exist) or unsupervised approaches (when the model learns what \"normal\" looks like and flags deviations). Setting an appropriate detection threshold is a genuine trade-off between false positives and missed anomalies.",
};

export const churnSection = {
  title: "Customer Churn Prediction",
  intro: "Churn prediction models identify patterns in customer data associated with disengagement or cancellation, drawing on:",
  signals: [
    "Customer behavior — how customers are actually using a product or service",
    "Engagement — frequency and depth of interaction over time",
    "Purchase history — patterns in past purchasing or usage behavior",
    "Usage patterns — changes in how intensively a product is being used",
    "Support interactions — frequency and nature of support requests, which can signal frustration or unresolved issues",
  ],
  closing:
    "Churn prediction can support proactive retention strategies — flagging at-risk customers for targeted outreach — but it cannot guarantee customer behavior. A churn model identifies elevated risk based on historical patterns; retention ultimately depends on the effectiveness of the actions taken.",
};

export const fraudSection = {
  title: "Fraud Detection",
  intro: "Machine learning applications for fraud detection typically include:",
  applications: [
    "Transaction monitoring — evaluating transactions in real time or near-real time for suspicious characteristics",
    "Suspicious activity detection — flagging unusual account or user behavior",
    "Anomaly detection — identifying deviations from expected patterns",
    "Risk scoring — assigning a quantified risk level to transactions or accounts for prioritized review",
  ],
  closing:
    "Fraud detection systems have to account for false positives, model drift, evolving fraud patterns, and the ongoing need for human review. We avoid making financial guarantees about fraud detection outcomes — no system eliminates fraud entirely.",
};

export const computerVisionSection = {
  title: "Computer Vision",
  intro: "Computer vision extracts structured information from images and video. Common applications include:",
  applications: [
    "Image classification — categorizing an image based on its content",
    "Object detection — identifying and locating specific objects within an image",
    "Image segmentation — identifying precise boundaries of objects within an image",
    "Visual inspection — automatically identifying defects or anomalies in a manufacturing or quality-control context",
    "Document image analysis — extracting structured information from scanned documents",
    "Quality control — automated visual assessment against defined quality standards",
  ],
  useCases: "Manufacturing quality inspection, retail shelf and inventory analysis, logistics package and damage inspection, security and safety monitoring workflows, and back-office document processing.",
  disclaimer: "We do not make unsupported safety claims about computer vision systems — any safety-critical application requires appropriate independent validation beyond a standard software engagement.",
};

export const nlpSection = {
  title: "Natural Language Processing",
  intro: "Traditional and modern NLP techniques focus on understanding and structuring existing text, which is worth clearly distinguishing from generative language model applications. Common applications include:",
  applications: [
    "Text classification — categorizing documents, messages, or tickets automatically",
    "Sentiment analysis — determining the tone or sentiment expressed in text",
    "Entity extraction — identifying names, dates, locations, or other structured entities within text",
    "Document classification — sorting documents into meaningful categories",
    "Text processing — general structuring and normalization of unstructured text",
    "Information extraction — pulling specific structured data points out of unstructured text",
  ],
  closing:
    "Many practical business problems — classifying support tickets, extracting invoice line items, categorizing incoming documents — are well and cost-effectively solved with traditional ML-based NLP techniques rather than a large generative language model.",
  genAiLink: {
    before: "For projects specifically involving large language models or generative text applications rather than traditional NLP, see our ",
    text: "Generative AI Development",
    href: etPath("generative-ai-development"),
    after: " page.",
  },
  chatbotLink: {
    before: "For projects specifically involving conversational AI, chatbots, or customer-facing language interfaces, see our ",
    text: "AI Chatbot Development",
    href: etPath("ai-chatbot-development"),
    after: " page, which covers that specialized application area in depth.",
  },
};

export const mlAutomationSection = {
  title: "Machine Learning Automation",
  intro: "ML automation applies predictive and classification capabilities to automate specific, data-driven business decisions:",
  applications: [
    "Lead scoring — automatically prioritizing incoming leads",
    "Recommendations — automatically surfacing relevant products or content",
    "Anomaly alerts — automatically flagging unusual patterns for review",
    "Document classification — automatically routing incoming documents",
    "Demand prediction — feeding forecasts directly into inventory or staffing systems",
    "Customer segmentation — automatically grouping customers for targeted strategy",
    "Risk scoring — automatically flagging higher-risk transactions or applications",
  ],
  closing:
    "The right level of automation depends on the stakes involved: lower-stakes, high-volume decisions are often good candidates for full automation, while higher-stakes decisions generally warrant human oversight.",
};

export const enterpriseMlSection = {
  title: "Enterprise Machine Learning",
  intro: "Enterprise ML introduces requirements beyond a typical standalone model project:",
  requirements: [
    "Enterprise data — often larger, more complex, and more distributed across systems",
    "ML platforms — shared infrastructure supporting multiple models and teams",
    "Model governance — clear ownership, approval processes, and documentation for models in production",
    "Security — protecting sensitive enterprise and customer data used by ML systems",
    "Access control — ensuring only appropriate users and systems can access models and their outputs",
    "Monitoring — organization-wide visibility into model health and performance",
    "Scalability — supporting growing data volume, prediction load, and number of models",
    "Integration — connecting cleanly with existing enterprise systems",
    "Auditability — the ability to trace how and why a given prediction was produced",
  ],
  additional: "Enterprise ML also requires data governance, version control for both data and models, reproducibility, and explainability where appropriate — particularly for decisions affecting customers or subject to regulatory scrutiny.",
  productDevLink: {
    before: "For organizations building a complete ML-powered software product rather than a standalone model, our ",
    text: "Software Product Development",
    href: "/services/software-development/software-product-development",
    after: " team can help scope the broader system the ML components will live within.",
  },
};

export const mlopsSection = {
  title: "MLOps",
  intro: "MLOps — machine learning operations — is one of the most consequential and most frequently underinvested parts of a machine learning project.",
  distinction:
    "Machine learning development is the process of building and training a model that performs well on historical data. MLOps is the discipline of reliably running that model in production over time — and a model that performs beautifully in a development notebook still requires substantial production engineering before it's actually useful in a live business system.",
  covers: [
    "Model versioning — tracking exactly which version of a model is deployed",
    "Experiment tracking — recording the parameters, data, and results of different training runs",
    "Data pipelines — reliable, automated processes for getting data to and from models",
    "Model registry — a centralized system for storing, versioning, and managing trained models",
    "CI/CD — automated processes for testing and deploying model updates safely",
    "Deployment — the actual process of putting a model into production serving",
    "Monitoring — ongoing tracking of model performance and behavior in production",
    "Retraining — updating a model as new data becomes available or performance degrades",
    "Rollback — the ability to quickly revert to a previous model version if a new deployment causes problems",
    "Model drift — detecting when a model's performance degrades because real-world data has shifted from what it was trained on",
  ],
  closing:
    "A model that works well in development but lacks proper MLOps infrastructure is a common source of failed ML initiatives — not because the modeling was wrong, but because there was no reliable way to deploy, monitor, and maintain it.",
};

export const modelDeploymentSection = {
  title: "Model Deployment",
  intro: "Deploying a trained model into production involves several architectural choices:",
  options: [
    "API-based inference — exposing the model through an API that other systems call to get predictions",
    "Cloud deployment — hosting the model on cloud infrastructure for scalability and reliability",
    "Containerized deployment — packaging the model and its dependencies for consistent, portable deployment",
    "Batch inference — running predictions on large volumes of data at scheduled intervals",
    "Real-time inference — generating predictions on demand as requests arrive",
    "Edge inference (where appropriate) — running the model directly on a device rather than a central server",
  ],
  closing:
    "Deployment decisions depend on latency requirements, scalability, infrastructure, monitoring, and cost.",
};

export const modelMonitoringSection = {
  title: "Machine Learning Model Monitoring",
  intro: "Deployed models require ongoing monitoring — a model's performance on the day it's deployed is not a permanent guarantee. Key monitoring areas include:",
  areas: [
    "Model performance — tracking accuracy or other relevant metrics against ground truth as it becomes available",
    "Data drift — detecting when the statistical properties of incoming data shift away from what the model was trained on",
    "Concept drift — detecting when the actual relationship between inputs and outcomes changes over time",
    "Latency — tracking how quickly the model is producing predictions in production",
    "Failures — monitoring for errors, timeouts, or unexpected behavior in the serving system",
    "Prediction distribution — watching for unexpected shifts in the pattern of predictions the model is producing",
    "Data quality — catching upstream data quality issues before they degrade model performance",
  ],
  closing:
    "Models degrade over time as the real world changes around them — which is why ongoing monitoring, not a one-time evaluation before launch, is essential.",
};

export const dataPipelinesSection = {
  title: "Machine Learning Data Pipelines",
  intro: "Reliable data pipelines are foundational to any production ML system:",
  stages: [
    "Data collection — gathering the data needed for training and ongoing operation",
    "Cleaning — identifying and correcting errors, duplicates, and inconsistencies",
    "Transformation — converting raw data into a structure suitable for modeling",
    "Feature engineering — deriving the specific input variables a model learns from",
    "Training datasets — data used to fit the model",
    "Validation datasets — held-out data used to tune the model without overfitting",
    "Test datasets — a final, untouched dataset used to estimate real-world performance",
    "Feature pipelines — the automated systems that compute and serve features consistently between training and production",
  ],
  issues: [
    "Missing data — requiring a deliberate strategy for handling gaps",
    "Inconsistent data — formatting or definitional differences across sources",
    "Duplicate data — which can bias training if not addressed",
    "Biased data — which can cause a model to systematically underperform for certain groups or scenarios",
    "Outdated data — which can misrepresent current patterns",
  ],
  closing:
    "Addressing these issues properly is often the majority of the effort in a real-world ML project — more than the modeling itself.",
};

export const modelEvaluationSection = {
  title: "Model Evaluation",
  intro: "Rigorous model evaluation uses metrics appropriate to the type of problem:",
  classificationMetrics: [
    "Precision — of predicted positives, how many were actually correct",
    "Recall — of actual positives, how many the model correctly identified",
    "F1 score — the balance between precision and recall",
    "ROC-AUC (where appropriate) — how well the model distinguishes between classes across thresholds",
  ],
  regressionMetrics: [
    "MAE (Mean Absolute Error) — the average magnitude of prediction errors",
    "MSE (Mean Squared Error) — average squared error, which penalizes larger errors more heavily",
    "RMSE (Root Mean Squared Error) — back in the original units, making it easier to interpret",
    "R² (R-squared) — the proportion of variance in the outcome that the model explains",
  ],
  rankingMetrics: [
    "Precision@k — of the top-k recommended items, how many were actually relevant",
    "Recall@k — of all relevant items, how many appeared in the top-k recommendations",
    "NDCG (where appropriate) — a ranking-quality metric that accounts for the position of relevant results",
  ],
  closing:
    "Both technical and business metrics matter. A model with strong technical metrics that doesn't actually improve the business outcome it was meant to support hasn't delivered real value, regardless of how good its statistical performance looks in isolation.",
};

export const mlSecuritySection = {
  title: "Machine Learning Security",
  intro: "Security has to be built into an ML system from the start, applying standard application security practices alongside ML-specific risks.",
  standardPractices: [
    "Authentication and authorization, controlling who can access models and their outputs",
    "Data access controls, limiting who can access training and inference data",
    "Encryption, for data in transit and at rest",
    "Secure APIs, including rate limiting and proper access scoping for model endpoints",
    "Model access controls, restricting who can query, update, or retrain a model",
    "Sensitive data handling, with deliberate policies for any personal or confidential data",
    "Logging and monitoring, to detect unusual activity or misuse",
  ],
  mlRisks: [
    "Data poisoning — deliberate manipulation of training data to corrupt a model's behavior",
    "Adversarial inputs — inputs specifically crafted to cause a model to make an incorrect prediction",
    "Model leakage — the risk of a model's internal details or training data being exposed",
    "Data leakage — sensitive information inadvertently being exposed through model outputs",
    "Unauthorized inference — unauthorized parties gaining access to make predictions using the model",
    "Insecure model endpoints — poorly secured APIs exposing the model to misuse",
  ],
  disclaimer:
    "We do not claim compliance with any specific regulatory framework — including HIPAA, SOC 2, ISO 27001, or GDPR — unless that compliance has been independently verified for a specific engagement.",
};

export const responsibleMlSection = {
  title: "Responsible Machine Learning",
  intro: "Responsible ML practice involves a set of considerations beyond raw model performance:",
  considerations: [
    "Bias — ML systems can reproduce, and sometimes amplify, biases present in their training data",
    "Fairness — assessing whether a model's outputs treat different groups equitably",
    "Explainability — providing insight into why a model produced a particular output",
    "Transparency — being clear about where and how ML is used within a system, and its known limitations",
    "Human oversight — keeping people appropriately involved in ML-assisted decisions, particularly higher-stakes ones",
    "Data quality — recognizing that model quality is fundamentally limited by the quality of the data it learns from",
    "Responsible deployment — considering the real-world consequences of a model's predictions before putting it into production",
  ],
  closing:
    "We approach these considerations without exaggeration in either direction: ML systems are genuinely useful tools, and they're also genuinely capable of encoding and amplifying flaws present in their training data.",
};

export const mlIntegrationSection = {
  title: "Machine Learning + Existing Software",
  intro: "Most valuable ML implementations connect predictions to systems a business already runs. We integrate ML capabilities with:",
  systems: [
    "CRM systems — surfacing lead scores, churn risk, or other predictive signals within existing sales workflows",
    "ERP systems — feeding forecasts and predictions into operational planning",
    "Ecommerce platforms — powering recommendations, demand forecasting, and personalization",
    "SaaS platforms — embedding predictive features as part of a broader product",
    "Websites — surfacing ML-driven recommendations, search improvements, or personalization",
    "Mobile applications — bringing predictive features to mobile experiences",
    "Internal software — extending proprietary tools with predictive or classification capabilities",
    "Databases — connecting ML systems to structured business data",
  ],
  technical: "Technically, these integrations rely on REST APIs, GraphQL where appropriate, webhooks for real-time updates, event-driven architectures, and proper authentication and authorization.",
  saasLink: {
    before: "For businesses building ML capabilities directly into a SaaS product, our ",
    text: "SaaS Development Services",
    href: etPath("saas-development"),
    after: " page covers the broader platform considerations involved.",
  },
};

export const mlArchitectureSection = {
  title: "Machine Learning Architecture",
  intro: "A typical machine learning system architecture flows through several distinct stages:",
  pipeline: "Data Sources → Data Ingestion → Data Processing → Feature Engineering → Training Pipeline → Model Training → Model Evaluation → Model Registry → Deployment → Inference API → Business Application → Monitoring → Retraining",
  closing:
    "This architecture varies significantly by project — a lightweight recommendation feature and a real-time fraud detection system have very different requirements around latency, data volume, and monitoring rigor.",
};

export const techStackSection = {
  title: "Technology Stack",
  intro: "Technology choices should be driven by the project's specific requirements — data volume, latency needs, team familiarity, and existing infrastructure — not by defaulting to whatever's currently popular.",
  categories: [
    { label: "Programming", desc: "Python is the dominant language for machine learning work, supported by SQL for data querying, and JavaScript/TypeScript for the application layer surrounding ML features." },
    { label: "ML frameworks", desc: "scikit-learn for classical ML tasks; PyTorch and TensorFlow for deep learning; XGBoost and similar gradient boosting libraries for strong performance on structured, tabular data." },
    { label: "Data infrastructure", desc: "PostgreSQL, MongoDB, and MySQL for transactional data, with data warehouses used where analytical workloads at larger scale require them." },
    { label: "MLOps tooling", desc: "Docker for containerized deployments; CI/CD pipelines for safely automating model updates; model registries for tracking and versioning deployed models; experiment tracking tools for recording and comparing training runs." },
    { label: "Cloud infrastructure", desc: "AWS, Azure, and Google Cloud all offer relevant infrastructure and managed ML services, selected based on existing infrastructure, cost, and specific service requirements." },
  ],
  closing:
    "We do not claim official partnerships with AWS, Google, Microsoft, or any other technology provider. Technology selection is a project-by-project decision based on requirements.",
};

export const developmentProcess: { step: number; title: string }[] = [
  { step: 1, title: "Business Discovery — understanding your business, goals, and the decision the ML system needs to support" },
  { step: 2, title: "Problem Definition — translating a business goal into a well-defined, solvable ML problem" },
  { step: 3, title: "Data Assessment — evaluating what data exists, its quality, and what's missing" },
  { step: 4, title: "Data Preparation — cleaning and structuring data for modeling" },
  { step: 5, title: "Exploratory Data Analysis — understanding patterns, distributions, and potential issues in the data" },
  { step: 6, title: "Feature Engineering — deriving the input variables the model will actually learn from" },
  { step: 7, title: "Model Selection — choosing an appropriate algorithm based on the problem and data" },
  { step: 8, title: "Prototype — building an initial version to validate the technical approach" },
  { step: 9, title: "Model Training — fitting the model to prepared training data" },
  { step: 10, title: "Validation — tuning the model on held-out data to avoid overfitting" },
  { step: 11, title: "Evaluation — assessing final performance against both technical and business metrics" },
  { step: 12, title: "Integration — connecting the model to the systems that will consume its predictions" },
  { step: 13, title: "Deployment — putting the model into production" },
  { step: 14, title: "Monitoring — tracking performance and behavior after launch" },
  { step: 15, title: "Optimization — refining the model and system based on real-world performance" },
  { step: 16, title: "Retraining — updating the model as new data becomes available or performance drifts" },
];

export const mvpSection = {
  title: "Machine Learning MVP Development",
  intro: "For startups and businesses testing a new ML-powered idea, an ML MVP or proof of concept validates the approach before committing to complex infrastructure:",
  items: [
    "ML proof of concept — validating that the available data can actually support the intended prediction with a lightweight initial model",
    "MVP — a narrowly scoped, production-usable version of the ML capability",
    "Limited dataset — starting with the data that's realistically available rather than waiting for a perfect dataset",
    "Baseline model — building a simple model first to establish a performance benchmark before investing in more complex approaches",
    "Evaluation — rigorously assessing whether the baseline actually performs well enough to be useful",
    "User feedback — gathering real-world input on whether the model's outputs are actually helpful in practice",
    "Iteration — refining the model and system based on both performance data and user feedback",
  ],
  closing:
    "Starting with a proof of concept and a baseline model lets a business validate a predictive use case before investing in more complex infrastructure or a more sophisticated modeling approach.",
};

export const industriesSection: { industry: string; desc: string }[] = [
  { industry: "Healthcare", desc: "Operational forecasting, document classification for administrative workflows, scheduling optimization, and risk prediction for operational (not diagnostic) purposes. No medical or diagnostic claims." },
  { industry: "Finance", desc: "Fraud detection, risk scoring, anomaly detection in transactions, and financial forecasting, with particular attention to data security, model governance, and auditability." },
  { industry: "Ecommerce", desc: "Product recommendations, demand forecasting, customer segmentation, and churn prediction." },
  { industry: "Education", desc: "Student engagement prediction, personalized content recommendations, enrollment forecasting, and administrative process automation." },
  { industry: "Real Estate", desc: "Property valuation modeling, lead scoring, demand forecasting for specific markets, and document classification." },
  { industry: "Logistics", desc: "Route and demand forecasting, delivery time prediction, anomaly detection in shipping data, and inventory optimization." },
  { industry: "Manufacturing", desc: "Predictive maintenance, visual quality inspection, anomaly detection in production data, and demand forecasting." },
  { industry: "Retail", desc: "Demand and inventory forecasting, customer segmentation, personalized recommendations, and fraud detection." },
  { industry: "SaaS", desc: "Churn prediction, usage-based recommendations, anomaly detection in usage patterns, and feature adoption forecasting." },
  { industry: "Professional Services", desc: "Resource and capacity forecasting, lead scoring, and document classification for administrative workflows." },
  { industry: "Travel", desc: "Demand forecasting, dynamic pricing support, and personalized recommendations." },
];

export const usaSection = {
  title: "Machine Learning Development for USA Businesses",
  body: "We work with businesses across the United States on machine learning development, from early-stage startups validating a predictive use case to enterprises building production forecasting and classification systems. Companies in major technology and business markets — including New York, California, Texas, Washington, Massachusetts, Florida, and Illinois — engage our machine learning developers for custom ML solutions, predictive analytics, and MLOps support.",
};

export const canadaSection = {
  title: "Machine Learning Development for Canadian Businesses",
  body: "We also support Canadian businesses with custom machine learning development, from startups exploring an ML proof of concept to enterprises building production-grade predictive systems. This includes companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, and Edmonton, across industries ranging from ecommerce and finance to logistics and manufacturing.",
};

export const costSection = {
  title: "Machine Learning Development Cost",
  intro: "Machine learning development cost varies significantly based on:",
  factors: [
    "Data complexity — how much data cleaning and preparation is required",
    "Data availability — whether sufficient historical data already exists or needs to be collected",
    "Model complexity — a simple classification model costs far less than a sophisticated deep learning system",
    "Integrations — each connected business system adds development and testing overhead",
    "Infrastructure — the compute and storage needed for training and serving the model",
    "Deployment requirements — real-time inference at scale is more involved than periodic batch predictions",
    "Security requirements — higher-sensitivity data requires more careful engineering",
    "Monitoring — the depth of tracking and alerting implemented for the deployed model",
    "MLOps — the level of production engineering infrastructure required",
    "Maintenance — ongoing retraining, monitoring, and improvement",
  ],
  tiers: [
    "Proof of Concept — validating technical feasibility with a lightweight initial model",
    "ML MVP — a narrowly scoped, production-usable predictive feature",
    "Production ML Application — a fully integrated, monitored ML system supporting a specific business function",
    "Enterprise ML Platform — a larger-scale system supporting multiple models, users, and integrations",
  ],
  closing:
    "These are general industry approximations, not a quote from The Runner Software Solutions — actual project cost depends entirely on your specific requirements and is determined through discovery and assessment.",
};

export const timelineSection = {
  title: "Machine Learning Development Timeline",
  intro: "Timeline depends heavily on scope, and key factors include:",
  factors: [
    "Data readiness — poor-quality or missing data can extend timelines significantly",
    "Problem complexity — how difficult the underlying prediction or classification task genuinely is",
    "Model requirements — the sophistication needed to meet accuracy, latency, or interpretability requirements",
    "Integrations — the number and complexity of connected systems",
    "Infrastructure — how much needs to be built versus already exists",
    "Evaluation — how thoroughly the model needs to be validated before deployment",
    "Deployment — the complexity of the production release process",
    "Monitoring — the depth of ongoing tracking infrastructure required",
  ],
  stages: [
    "Proof of Concept — validating core feasibility, typically the fastest stage",
    "MVP — a working, narrowly scoped predictive feature",
    "Production Model — a fully integrated, monitored model supporting a real business function",
    "Enterprise ML Platform — a larger-scale system with extensive integrations and governance requirements",
  ],
  closing:
    "We don't guarantee fixed timelines before scoping a project, since ML feasibility itself is often uncertain until a proof of concept has evaluated the actual available data.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: "Custom software engineering", desc: "Every ML project is built on solid engineering, not a one-off modeling exercise." },
  { icon: Brain, title: "ML development expertise", desc: "Predictive modeling, classification, forecasting, and recommendation systems done properly." },
  { icon: Layers, title: "Full-stack engineering", desc: "ML components properly integrated into real, usable applications." },
  { icon: Database, title: "Data-driven development", desc: "Built around your actual business data, not a generic dataset." },
  { icon: Zap, title: "Careful model integration", desc: "Predictions connected to the systems and workflows where they're actually used." },
  { icon: Activity, title: "MLOps discipline", desc: "Models stay reliable, monitored, and maintainable in production — not just in a notebook." },
  { icon: LineChart, title: "API integration", desc: "ML capabilities connected to your existing CRM, ERP, and business systems." },
  { icon: Cpu, title: "Scalable architecture", desc: "Architecture matched to actual data volume, latency, and growth requirements." },
  { icon: Shield, title: "Security-conscious development", desc: "Standard application security plus ML-specific risks like data poisoning." },
  { icon: BarChart3, title: "Structured evaluation", desc: "Metrics matched to the actual business problem, not just statistical performance." },
  { icon: TrendingUp, title: "Ongoing monitoring", desc: "Catch model drift and performance degradation before it causes real business impact." },
  { icon: Lock, title: "Maintainable software", desc: "Code a team can reasonably support and extend over time." },
];

export const mlFaqs: { q: string; a: string }[] = [
  { q: "What are machine learning solutions?", a: "Machine learning solutions are software systems that use data and statistical or computational methods to identify patterns, make predictions, classify information, recommend actions, detect anomalies, or automate specific decisions. They learn from historical data rather than following explicitly programmed rules for every scenario." },
  { q: "What does a machine learning development company do?", a: "A machine learning development company assesses whether and how ML can realistically solve a specific business problem, then handles data assessment, feature engineering, model development, evaluation, integration, deployment, and ongoing monitoring. A good ML development partner also builds the MLOps infrastructure needed to keep a model reliable in production." },
  { q: "What are machine learning development services?", a: "Machine learning development services cover the full lifecycle of a production ML system: business and data discovery, feature engineering, model selection and training, evaluation, integration with existing business systems, deployment, and ongoing monitoring and retraining." },
  { q: "How much does machine learning development cost?", a: "Cost depends on data complexity and availability, model complexity, integration scope, infrastructure requirements, and MLOps needs. Estimates range from a modest investment for a proof of concept to a considerably larger one for an enterprise ML platform. These are general industry ranges, not fixed pricing — accurate estimates require proper scoping." },
  { q: "How long does it take to develop a machine learning solution?", a: "Timeline depends heavily on data readiness, which is often the single biggest factor. Additional factors include problem complexity, integration scope, and evaluation and deployment requirements. We generally recommend starting with a proof of concept to assess feasibility before committing to a fixed production timeline." },
  { q: "What is custom machine learning development?", a: "Custom machine learning development means designing a model and system around a specific business's objectives, data, and constraints, rather than applying a generic tool to a problem it wasn't built for. This includes selecting the right modeling approach based on the actual data available and business requirements." },
  { q: "What is predictive analytics?", a: "Predictive analytics uses historical data to forecast future outcomes — such as demand, customer churn, or risk — to support better business decisions. It follows a pipeline from historical data through feature engineering, model training, and validation to a final prediction that informs a business action." },
  { q: "What is predictive modeling?", a: "Predictive modeling is the technical process behind predictive analytics: engineering useful features from raw data, selecting an appropriate algorithm, training the model, validating it on held-out data, and evaluating its performance before deployment." },
  { q: "What types of machine learning models can businesses use?", a: "Businesses commonly use supervised learning models (classification and regression) for tasks like fraud detection or demand forecasting, unsupervised learning for customer segmentation or anomaly detection, and, less commonly, semi-supervised or reinforcement learning approaches for more specialized problems." },
  { q: "Can machine learning integrate with existing software?", a: "Yes. ML capabilities can be integrated with CRM, ERP, ecommerce platforms, SaaS products, websites, mobile applications, and internal software through APIs, webhooks, and event-driven architectures." },
  { q: "Can machine learning predict customer churn?", a: "Yes, churn prediction models identify patterns in customer behavior, engagement, purchase history, and support interactions that are historically associated with disengagement or cancellation. These models support proactive retention strategies but can't guarantee customer behavior." },
  { q: "Can machine learning be used for fraud detection?", a: "Yes, machine learning is widely used for fraud detection through transaction monitoring, anomaly detection, and risk scoring. Effective fraud detection systems account for false positives, evolving fraud patterns, and model drift, and typically combine automated flagging with human review." },
  { q: "What is a recommendation system?", a: "A recommendation system surfaces relevant products, content, or actions based on user behavior and preferences, using techniques like collaborative filtering and content-based approaches. Recommendation quality depends heavily on having sufficient, clean behavioral data." },
  { q: "What is MLOps?", a: "MLOps (machine learning operations) is the production engineering discipline that keeps deployed ML models reliable over time, covering model versioning, experiment tracking, CI/CD, deployment, monitoring, and retraining. A model that performs well in a development notebook still requires this production engineering before it's genuinely useful in a live business system." },
  { q: "How are machine learning models deployed?", a: "Models can be deployed through API-based inference for on-demand predictions, batch inference for large-volume periodic processing, or, in some cases, edge deployment directly on a device. The right approach depends on latency requirements, expected prediction volume, and existing infrastructure." },
  { q: "How do you monitor machine learning models?", a: "We monitor deployed models for performance against ground truth, data drift, concept drift, latency, system failures, and unexpected shifts in prediction patterns. Ongoing monitoring is essential because real-world conditions change over time." },
  { q: "How do you evaluate a machine learning model?", a: "Evaluation uses metrics appropriate to the problem type — precision, recall, and F1 score for classification; MAE, RMSE, and R² for regression; precision@k and recall@k for recommendation systems. We evaluate against both technical metrics and business outcomes." },
  { q: "Can startups build a machine learning MVP?", a: "Yes, ML MVP development is a common and sensible path for startups. This typically starts with a proof of concept using the data realistically available, building a simple baseline model to establish a performance benchmark, and evaluating whether that baseline is actually useful." },
  { q: "Can US businesses hire machine learning developers?", a: "Yes, we work with businesses across the United States on machine learning development projects, from startups to enterprises, using a remote-friendly process covering discovery, data assessment, model development, deployment, and ongoing monitoring." },
  { q: "Can Canadian businesses hire machine learning developers?", a: "Yes, we work with Canadian businesses on machine learning development using the same structured, remote-friendly process applied to every engagement — including data assessment, model development, evaluation, deployment, and MLOps." },
];

export const finalCta = {
  headline: "Get Started with The Runner Software Solutions",
  body: "Building a successful machine learning solution starts with honestly assessing whether your data can actually support the prediction you have in mind — not with jumping straight into model development.",
  steps: [
    "Discuss business objectives — tell us what decision or outcome you're trying to improve",
    "Identify ML opportunities — we help pinpoint where machine learning can realistically add value",
    "Assess data — evaluating what data exists, its quality, and what's missing",
    "Define technical requirements — accuracy, latency, and integration needs specific to your use case",
    "Design ML architecture — structuring the system around your specific data and deployment needs",
    "Build proof of concept — validating the core technical approach before full investment",
    "Develop the model — building and training the production-ready model",
    "Integrate with software — connecting the model to the systems where its output will be used",
    "Test and evaluate — validating performance against both technical and business metrics",
    "Deploy — releasing the system to production",
    "Monitor — tracking performance and data drift after launch",
    "Optimize — refining the model and system based on real-world results",
  ],
  primaryCta: "Build Your Machine Learning Solution",
  secondaryCta: "Discuss Your Machine Learning Project",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
