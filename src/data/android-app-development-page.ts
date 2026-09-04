import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  Code2,
  Shield,
  Layers,
  Zap,
  Server,
  RefreshCw,
  Wrench,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { WEB_MOBILE_DEVELOPMENT_PILLAR_PATH } from "./services-menu";

export { WEB_MOBILE_DEVELOPMENT_PILLAR_PATH };

export const androidAppDevelopmentSeo = {
  title: "Android App Development Company | The Runner Software",
  description:
    "Custom Android app development services for startups and enterprises. Native Kotlin engineering, secure APIs, and scalable architecture. Talk to our team.",
  h1: "Custom Android App Development for Scalable Business Applications",
  canonicalPath: "/services/web-mobile-development/android-app-development",
  ogTitle: "Android App Development Services | The Runner Software Solutions",
  ogDescription:
    "Custom Android app development with native Kotlin engineering, secure backend architecture, and Google Play deployment for startups and enterprises.",
  twitterTitle: "Android App Development Services | The Runner Software Solutions",
  twitterDescription:
    "Custom Android app development with native Kotlin engineering, secure backend architecture, and Google Play deployment for startups and enterprises.",
  imageAlt: "Custom Android app development services by The Runner Software Solutions",
};

export const androidHero = {
  intro:
    "Android powers the majority of smartphones in use worldwide, and for most businesses it is the fastest way to put a product directly into customers' or employees' hands. The Runner Software Solutions designs and builds custom Android applications — from early-stage MVPs to enterprise-grade systems — using native Kotlin engineering, secure backend architecture, and interfaces built around how real users actually work.",
  closing:
    "Whether you need a customer-facing Android app, an internal field-service tool, or a full modernization of a legacy application, our Android app development services are built around your business logic, not a generic template.",
  primaryCta: "Start Your Android App Project",
  secondaryCta: "Talk to an Android App Development Expert",
};

export const whatIsAndroid = {
  title: "What Is Android App Development?",
  intro:
    "Android app development is the process of planning, designing, building, testing, deploying, and maintaining software applications that run on Android devices — phones, tablets, and, where relevant, wearables and embedded hardware.",
  layersIntro: "A finished Android application is rarely just a front-end interface. It typically depends on several connected layers working together:",
  layers: [
    "Frontend (Android client): the screens, navigation, and interactions a user sees on their device.",
    "Backend: the servers, business logic, and data processing that support the application.",
    "APIs: the communication layer between the Android client and backend services.",
    "Databases: structured storage for user data, transactions, and application state.",
    "Authentication: secure login and identity verification.",
    "Push and in-app notifications: timely communication with users.",
    "Device capabilities: camera, GPS, sensors, storage, and biometrics.",
    "Analytics: usage data that informs product decisions.",
    "Third-party integrations: connections to CRM, ERP, payment, or marketing systems.",
    "Google Play deployment: the process of publishing and maintaining the app in the Play Store.",
  ],
  approachesIntro: "It's worth distinguishing Android app development from adjacent approaches, since businesses often confuse them:",
  approaches: [
    "Native Android app — built specifically for Android using Kotlin and the Android SDK, with full access to platform APIs and device hardware.",
    "Cross-platform app — a single codebase (e.g., React Native, Flutter) deployed to both Android and iOS, trading some platform-specific performance for shared code.",
    "Mobile-responsive website — a website that adapts to mobile screens but runs in a browser, not installed as an app.",
    "Progressive Web App (PWA) — a web application with some app-like behavior but without full native device access.",
  ],
  closing:
    "Each approach has legitimate use cases. Native Android development is generally the right choice when performance, deep device integration, or long-term scalability matter most to the business.",
};

export type AndroidServiceItem = {
  title: string;
  desc: string;
  bullets?: string[];
  link?: { before: string; text: string; href: string; after: string };
};

export const androidServices: AndroidServiceItem[] = [
  {
    title: "Custom Android App Development",
    desc: "No two businesses run the same workflows, which is why off-the-shelf software rarely fits well for long. Custom Android app development means building an application around your specific processes — how your sales team tracks leads, how your warehouse manages inventory, how your patients book appointments — instead of forcing your business to adapt to a generic tool. This approach costs more upfront than a template solution but pays off in fewer workarounds, better adoption, and a system that can grow with the business.",
  },
  {
    title: "Native Android App Development",
    desc: "Native Android app development means building directly on the Android platform using Kotlin, the Android SDK, and Jetpack libraries, rather than a cross-platform framework. This gives full access to Android-specific APIs, hardware sensors, background processing, and platform-level performance optimizations.",
    bullets: [
      "Heavy use of device hardware (camera, GPS, Bluetooth, biometrics)",
      "High-performance UI, animations, or real-time data processing",
      "Deep integration with Android system features (notifications, widgets, background services)",
      "Long-term scalability and maintainability as a standalone Android product",
    ],
    link: {
      before: "For simpler applications, or products that need to launch on both Android and iOS quickly with a shared codebase, a cross-platform approach can be a reasonable trade-off — covered further in the ",
      text: "comparison section below",
      href: "#android-native-vs-cross-platform",
      after: ".",
    },
  },
  {
    title: "Android UI/UX Development",
    desc: "Good Android UI/UX design is the difference between an app people use once and one they keep coming back to. Our design process covers user flows, wireframes, and interactive prototypes before a single line of production code is written, so navigation, touch interactions, and screen layouts are validated early. We design for accessibility and for the range of screen sizes and densities across the Android ecosystem, following Material Design principles as a foundation rather than a rigid template.",
  },
  {
    title: "Android Backend Development",
    desc: "Most Android applications are only as good as the backend behind them. Our Android backend development covers the APIs, authentication systems, databases, and business logic that power the mobile client — along with cloud infrastructure, notification systems, and the integrations that connect your app to the rest of your business software.",
  },
  {
    title: "Android API Development",
    desc: "Android API development involves building the REST (and, where appropriate, GraphQL) endpoints that let the mobile application securely exchange data with backend systems. This includes authentication and authorization, request validation, webhook handling, rate limiting, and structured error handling — all of which affect how reliable and secure the finished application feels to end users.",
  },
  {
    title: "Enterprise Android App Development",
    desc: "Enterprise Android app development typically involves higher stakes around security, access control, and integration than a consumer app. We build employee-facing applications, field-service tools, internal workflow systems, and partner-facing apps with role-based access control, secure authentication, and connections into existing ERP or CRM systems.",
    link: {
      before: "For organizations weighing a broader internal platform strategy, our ",
      text: "enterprise web development services",
      href: "/services/web-mobile-development/enterprise-web-development",
      after: " can complement an Android rollout with a matching web-based administration layer.",
    },
  },
  {
    title: "Android MVP Development",
    desc: "For startups, Android MVP development is about proving the core value proposition with the smallest defensible feature set — not building every feature you can imagine. We help prioritize the workflows that matter most, instrument the app with analytics from day one, and structure the codebase so it can scale once the concept is validated rather than requiring a rebuild.",
  },
  {
    title: "Android App Modernization",
    desc: "Legacy Android applications accumulate technical debt: outdated SDK versions, deprecated libraries, architecture that no longer matches current best practices, and UI patterns that feel dated next to modern apps. Android app modernization addresses these issues incrementally or through a fuller rebuild, depending on how much of the existing codebase is worth preserving.",
  },
  {
    title: "Android App Maintenance",
    desc: "Launch is the beginning, not the end. Android app maintenance covers ongoing work required to keep an application reliable: responding to Android OS updates, patching dependencies, fixing bugs identified through crash monitoring, applying security updates, and shipping incremental feature improvements based on user feedback.",
  },
];

export const kotlinSection = {
  title: "Kotlin and Modern Android Development",
  intro:
    "Kotlin is Google's recommended language for Android development, and for good reason: it reduces boilerplate compared to older Java-based Android code, has built-in null-safety that eliminates a common source of crashes, and integrates directly with the Android SDK and Jetpack libraries.",
  technologiesIntro: "A few of the technologies that shape modern native Android engineering, and the problems they actually solve:",
  technologies: [
    "Jetpack — a set of Android libraries (lifecycle management, navigation, data persistence) that reduce the amount of repetitive plumbing code needed for common app patterns.",
    "Jetpack Compose — Android's modern declarative UI toolkit. Instead of manually managing view hierarchies, developers describe what the UI should look like for a given state, and Compose handles the rendering.",
    "Coroutines — Kotlin's approach to asynchronous programming, used for network calls, database queries, and other operations that shouldn't block the main thread.",
    "Android Architecture Components (including ViewModel) — patterns for separating UI logic from business logic, which keeps screens responsive during configuration changes and makes the codebase easier to test.",
    "Room (where appropriate) — a persistence library that provides a structured layer over SQLite for local data storage and offline access.",
    "Dependency injection (where appropriate) — a pattern that decouples components from the objects they depend on, making an application's codebase more testable and easier to maintain as it grows.",
  ],
  closing:
    "We don't default to every tool in this list for every project. Technology choices are matched to the actual complexity and requirements of the application.",
};

export const architectureSection = {
  title: "Android App Architecture",
  intro:
    "A well-structured Android application separates concerns into distinct layers so that changes in one area — say, a new API endpoint — don't ripple unpredictably through the rest of the codebase.",
  layers: [
    "Presentation layer (UI) — screens, components, and user interaction handling.",
    "Business logic layer — the rules and workflows that define what the application actually does.",
    "Data layer — the API layer, local database, and caching that supply data to the business logic.",
    "Authentication layer — identity verification and session management.",
    "Local storage and caching — for offline access and reduced network dependency.",
    "Background processing — work that continues independent of the active screen, such as sync jobs or notifications.",
  ],
  approaches: [
    "MVVM (Model-View-ViewModel) — separates UI state management from the UI itself, which pairs naturally with Jetpack's Architecture Components.",
    "Clean Architecture — organizes code into independent layers with strict boundaries, which improves testability and long-term maintainability on larger codebases.",
    "Modular architecture — breaks a large application into independently buildable modules, which can speed up build times and let teams work on different parts of the app in parallel.",
  ],
  closing:
    "The right architecture depends on the size and expected lifespan of the application. A simple single-screen utility app doesn't need the same architectural rigor as a multi-year enterprise platform — over-engineering a small app adds cost without adding value, just as under-engineering a large one creates maintenance problems down the line.",
};

export const featuresSection = {
  title: "Android App Features",
  intro: "Feature selection should be driven by user needs and business outcomes, not by what's technically possible.",
  features: [
    "User registration, login, and social authentication",
    "User profiles and role-based access",
    "Push and in-app notifications",
    "Search and filters",
    "Messaging",
    "File uploads and camera access",
    "Location, GPS, and maps",
    "Payments, subscriptions, and shopping carts",
    "Order tracking and booking",
    "Reviews and ratings",
    "Analytics and reporting",
    "Offline functionality",
    "Admin dashboards",
    "API integrations",
  ],
};

export const uiUxSection = {
  title: "Android UI/UX Development",
  intro:
    "Android UI/UX development covers how an application looks, feels, and behaves — and it has a direct, measurable relationship with usability, retention, engagement, and conversion.",
  considerations: [
    "Navigation patterns — bottom navigation, drawers, and tabs each suit different app structures.",
    "Material Design principles — Google's design system provides a consistent, familiar foundation for Android users.",
    "Responsive layouts across screen sizes — Android devices span a wide range of screen dimensions and densities.",
    "Accessibility — appropriate touch target sizes, color contrast, and screen-reader support.",
    "Onboarding — the first few screens a new user sees heavily influence whether they continue using the app.",
    "Forms, error states, loading states, and empty states",
    "Design systems — a shared library of reusable components keeps the app visually consistent.",
    "Jetpack Compose (where appropriate) — allows UI states to be built and previewed more efficiently.",
  ],
};

export const backendSection = {
  title: "Android Backend & API Development",
  intro:
    "Most Android applications of any real complexity depend on a backend. Understanding how that backend is structured matters just as much as the mobile client itself.",
  components: [
    "REST APIs, and GraphQL where the data-fetching patterns of the application benefit from it",
    "Backend frameworks such as Node.js, Express.js, or Laravel, selected based on project requirements",
    "Databases such as PostgreSQL, MySQL, or MongoDB, chosen based on data shape and read/write patterns",
    "Authentication and authorization systems that control who can access what",
    "File storage for user-uploaded content",
    "Background jobs for processes that shouldn't block the user-facing app",
    "Webhooks for real-time communication with third-party systems",
    "Logging and monitoring so issues can be identified and diagnosed before they become widespread problems",
  ],
  closing:
    "A well-designed backend isn't just a data store — it's the layer that enforces business rules, keeps data consistent, and determines how well the application will scale as usage grows.",
  webLink: {
    before: "Businesses evaluating a broader web presence alongside their Android app may also want to review our ",
    text: "web development services",
    href: "/services/web-mobile-development/web-development",
    after: " for backend and website work that shares the same underlying systems.",
  },
};

export const integrationsSection = {
  title: "Android App Integrations",
  intro: "Very few business applications operate in isolation. Android app integrations connect your mobile application to the other systems your business already relies on, including:",
  systems: [
    "CRM systems — syncing customer and lead data",
    "ERP systems — connecting inventory, orders, and operations data",
    "Ecommerce platforms — product catalogs, checkout, and order management",
    "Payment gateways — processing transactions securely",
    "Accounting systems — syncing financial data",
    "Shipping and logistics systems — tracking and fulfillment",
    "Analytics platforms — behavioral and usage data",
    "Marketing platforms — campaign and audience data",
    "Customer support systems — ticketing and communication history",
    "Internal business software — proprietary or industry-specific tools",
  ],
  closing:
    "Technically, integrations rely on secure API authentication, reliable data synchronization, webhook handling for real-time updates, retry logic for failed requests, structured error handling, and logging so integration issues can be caught and resolved quickly.",
};

export const securitySection = {
  title: "Android App Security",
  intro: "Security has to be built into an Android application from the start, not bolted on before launch.",
  practices: [
    "HTTPS for all network communication, without exception",
    "Secure authentication and authorization, including proper session and token handling",
    "Secure token storage on-device, avoiding plaintext storage of sensitive credentials",
    "Encryption for sensitive data, both in transit and at rest",
    "Secure local storage practices for any data cached on the device",
    "API security, including rate limiting and proper access scoping",
    "Input validation on both client and server",
    "Access control, ensuring users can only reach the data and actions appropriate to their role",
    "Dependency management, keeping third-party libraries updated",
    "Secure logging, avoiding sensitive data ending up in logs",
    "Vulnerability management as an ongoing process",
    "Certificate considerations where relevant to the application's networking setup",
    "Monitoring for unusual activity or potential breaches after launch",
  ],
  closing:
    "Security is treated as an ongoing responsibility throughout development, testing, deployment, and maintenance — not a checklist item completed once before release.",
};

export const performanceSection = {
  title: "Android App Performance",
  intro: "Performance directly shapes how users perceive an application's quality, and poor performance is one of the most common reasons users abandon or uninstall apps.",
  areas: [
    "Startup time",
    "Memory management",
    "Battery usage",
    "Network optimization",
    "API performance",
    "Image optimization",
    "Caching and lazy loading",
    "Efficient rendering",
    "Database optimization",
    "Background task management",
    "Crash monitoring",
  ],
  closing:
    "We don't promise specific benchmark scores, since performance depends heavily on device, network conditions, and how an app is actually used in the field — but performance is treated as a first-class engineering concern throughout the project, not an afterthought before launch.",
};

export const deviceCompatibilitySection = {
  title: "Android Device Compatibility",
  intro:
    "The Android ecosystem is intentionally open, which means it's also fragmented in ways iOS is not. A serious Android development process has to account for:",
  considerations: [
    "A wide range of screen sizes and resolutions",
    "Multiple Android OS versions still in active use",
    "Differences across device manufacturers and their customizations of Android",
    "Hardware differences in cameras, sensors, and processing power",
    "Permission models that vary by Android version",
    "Variations in device capabilities and performance tiers",
  ],
  closing:
    "Assuming all Android devices behave identically is one of the more common — and costly — mistakes in mobile development. Compatibility testing across a representative range of devices, OS versions, and screen configurations is a core part of how we validate an application before release.",
};

export const testingSection = {
  title: "Android App Testing & QA",
  intro: 'Testing an Android application well means testing more than "does it work on my phone." Our QA process typically covers:',
  types: [
    "Functional testing",
    "UI testing",
    "API testing",
    "Integration testing",
    "Regression testing",
    "Device testing across a range of manufacturers, screen sizes, and hardware",
    "OS version testing",
    "Performance testing",
    "Security testing",
    "Usability testing",
    "Crash testing",
    "Network condition testing",
  ],
  closing:
    "Thorough testing before release reduces the number of critical issues discovered by end users — which is both a user-experience issue and, on Google Play, something that can affect app ratings and visibility.",
};

export const googlePlaySection = {
  title: "Google Play Deployment",
  intro: "Publishing an Android application involves more than uploading a build. Our deployment process covers:",
  items: [
    "Setting up and configuring the Google Play Console",
    "Preparing the app listing, including screenshots, descriptions, and metadata",
    "Structuring testing tracks (internal, closed, open) before a full production release",
    "Completing required privacy information and data-safety declarations",
    "Managing application signing correctly",
    "Establishing a versioning strategy for future updates",
    "Coordinating production deployment and monitoring the rollout",
  ],
  disclaimer:
    "Google Play's policies and review requirements change over time, and app approval is ultimately at Google's discretion — we prepare submissions carefully to align with current requirements, but approval cannot be guaranteed by any development partner.",
};

export const developmentProcess = [
  { step: 1, title: "Discovery", desc: "Understanding your business, users, and goals" },
  { step: 2, title: "Business Requirements", desc: "Defining what the application actually needs to do" },
  { step: 3, title: "Product Strategy", desc: "Aligning features with business outcomes" },
  { step: 4, title: "Feature Prioritization", desc: "Deciding what belongs in the first release versus later phases" },
  { step: 5, title: "Technical Architecture", desc: "Selecting the right architecture and technology stack" },
  { step: 6, title: "UX/UI Design", desc: "Designing user flows and interface screens" },
  { step: 7, title: "Prototype", desc: "Validating design decisions before full development begins" },
  { step: 8, title: "Backend/API Development", desc: "Building the systems that power the app" },
  { step: 9, title: "Android Development", desc: "Building the native Android client" },
  { step: 10, title: "Third-Party Integrations", desc: "Connecting to CRM, ERP, payment, or other systems" },
  { step: 11, title: "QA & Testing", desc: "Validating functionality, performance, and reliability" },
  { step: 12, title: "Security Validation", desc: "Reviewing the application against security best practices" },
  { step: 13, title: "Performance Optimization", desc: "Tuning for speed and efficiency" },
  { step: 14, title: "Google Play Preparation", desc: "Assembling everything needed for submission" },
  { step: 15, title: "Deployment", desc: "Releasing the application to production" },
  { step: 16, title: "Monitoring", desc: "Tracking stability and usage after launch" },
  { step: 17, title: "Maintenance", desc: "Ongoing updates, fixes, and improvements" },
];

export const mvpComparison = {
  title: "Android MVP Development",
  intro:
    "Startups often come to us with a long list of desired features and a limited budget or timeline — Android MVP development is about resolving that tension deliberately.",
  rows: [
    { label: "Goal", mvp: "Validate core value proposition", full: "Serve full range of user needs" },
    { label: "Feature scope", mvp: "Minimal, focused on core workflow", full: "Broad, covering edge cases and secondary use cases" },
    { label: "Timeline", mvp: "Shorter", full: "Longer" },
    { label: "Cost", mvp: "Lower", full: "Higher" },
    { label: "Risk", mvp: "Lower financial exposure before validation", full: "Higher investment before market feedback" },
    { label: "Iteration", mvp: "Expected and encouraged", full: "Changes are costlier post-launch" },
  ],
  closing:
    'We generally advise against packing an MVP with features "just in case" — every additional feature adds development time and complexity without necessarily adding validation value.',
};

export const enterpriseSection = {
  title: "Enterprise Android App Development",
  intro:
    "Enterprise Android app development carries different priorities than a typical consumer app. Common enterprise use cases include employee applications, field-service tools, logistics and dispatch apps, customer-facing applications tied into internal systems, partner applications, and internal workflow tools.",
  requirements: [
    "Secure authentication, often integrated with existing identity systems",
    "Role-based access control across multiple user types",
    "ERP and CRM integrations so the app reflects live business data",
    "Reporting for internal stakeholders",
    "Offline functionality where field conditions demand it",
    "Centralized administration for IT and operations teams",
    "Scalability to support growing headcount or usage",
    "Monitoring to maintain reliability across a distributed user base",
  ],
  closing:
    "Enterprise-specific challenges usually center on integration complexity and access control rather than the mobile UI itself — getting an app to talk correctly and securely with existing systems is often the hardest part of the project.",
  productLink: {
    before: "For organizations planning a broader internal software strategy beyond mobile, our ",
    text: "software product development",
    href: "/services/software-development/software-product-development",
    after: " team can help scope systems that support both web and Android access points.",
  },
};

export const modernizationSection = {
  title: "Android App Modernization",
  intro:
    "Legacy Android applications tend to accumulate problems gradually: outdated SDK versions that no longer receive security patches, deprecated dependencies, architecture that predates current best practices, degraded performance, and interfaces that feel dated against current user expectations.",
  factors: [
    "How much of the existing codebase is salvageable versus fundamentally outdated",
    "Whether the current architecture can reasonably support new features",
    "How critical uptime and continuity are during the transition",
    "Budget and timeline constraints",
  ],
  closing:
    "In many cases, incremental modernization — updating dependencies, refactoring problematic modules, and migrating architecture piece by piece — is less disruptive and lower-risk than a ground-up rebuild, though there are situations where a legacy codebase is genuinely holding a product back and a rebuild is the more sustainable choice.",
};

export const maintenanceSection = {
  title: "Android App Maintenance",
  intro: 'Mobile applications are not "set and forget" software. After launch, ongoing maintenance is required to keep the application functioning correctly and securely, including:',
  items: [
    "Adapting to Android OS updates",
    "Responding to Google Play policy changes",
    "Applying dependency updates",
    "Bug fixes based on real-world usage and crash reports",
    "Crash monitoring",
    "Security updates as new vulnerabilities are identified",
    "Responding to API changes in connected third-party services",
    "Performance optimization as usage patterns and data volume grow",
    "Feature improvements based on user feedback and business needs",
  ],
  closing:
    "Without ongoing maintenance, even a well-built Android application tends to degrade over time as the platform and its dependencies evolve around it.",
};

export const industriesSection = [
  { industry: "Healthcare", desc: "Patient portals, appointment scheduling workflows, and secure communication between patients and providers." },
  { industry: "Finance", desc: "Secure account access, financial dashboards, and transaction workflows with emphasis on authentication and data protection." },
  { industry: "Ecommerce", desc: "Mobile commerce experiences, product catalogs, checkout flows, and order tracking." },
  { industry: "Education", desc: "Learning applications, student portals, assignment tracking, and notification systems." },
  { industry: "Logistics", desc: "Driver applications, dispatching tools, and real-time delivery tracking for distributed teams." },
  { industry: "Real Estate", desc: "Property discovery apps, lead management tools, and scheduling for property viewings." },
  { industry: "Retail", desc: "Mobile commerce, loyalty programs, and order tracking integrated with in-store systems." },
  { industry: "Manufacturing", desc: "Field and floor applications for inventory, quality checks, and operational reporting." },
  { industry: "Travel", desc: "Booking workflows, itinerary management, and location-based features." },
  { industry: "SaaS", desc: "Companion mobile apps that extend a web-based product to mobile users." },
  { industry: "Professional Services", desc: "Client-facing portals and internal scheduling or case-management tools." },
];

export const usaSection = {
  title: "Android App Development for USA Businesses",
  body: "We work with businesses across the United States on Android app development services, from early-stage startups to established enterprises modernizing legacy systems. Companies in major markets — including New York, California, Texas, Florida, Washington, Illinois, Massachusetts, New Jersey, Georgia, and North Carolina — engage us for custom Android app development, backend and API engineering, and long-term maintenance support. Whether your team is based in a major metro or operates remotely across the country, our Android app development company works the same structured process: discovery, architecture, design, engineering, QA, and ongoing support.",
};

export const canadaSection = {
  title: "Android App Development for Canadian Businesses",
  body: "We also support Canadian businesses with custom Android app development, from startups building their first MVP to enterprises modernizing existing applications. This includes companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton, and Winnipeg, across industries ranging from ecommerce and logistics to healthcare and finance. Our Android app development services for Canadian businesses follow the same architecture, security, and QA standards applied to every project we take on.",
};

export const costSection = {
  title: "Android App Development Cost",
  intro: "Android app development cost varies significantly based on:",
  factors: [
    "App complexity",
    "Number of features",
    "UI/UX complexity",
    "Backend requirements",
    "APIs and third-party integrations",
    "Authentication requirements",
    "Payment systems",
    "Location services",
    "Messaging features",
    "Admin dashboards",
    "Security requirements",
    "Testing scope",
    "Ongoing maintenance",
  ],
  closing:
    "Industry cost estimates for Android app development commonly range from roughly the low tens of thousands of dollars for a simple, narrowly scoped application to several hundred thousand dollars or more for a complex enterprise system with extensive integrations. These are general industry approximations, not a quote from The Runner Software Solutions — actual project cost depends entirely on your specific requirements and is determined through discovery and scoping.",
};

export const timelineSection = {
  title: "Android App Development Timeline",
  intro: "Timeline, like cost, depends heavily on scope. Rough illustrative examples:",
  examples: [
    "Simple Android MVP — a narrowly scoped app with core workflows only, typically the fastest to build",
    "Business Android application — a moderately featured app with a backend, a handful of integrations, and standard security requirements",
    "Ecommerce Android app — includes product catalogs, checkout, payments, and order tracking",
    "Complex enterprise Android application — multiple user roles, deep integrations with existing systems, and higher security requirements",
  ],
  closing:
    "We don't commit to fixed delivery dates before scoping a project, since committing to a date before understanding the actual requirements tends to produce inaccurate estimates.",
};

export const nativeVsCrossPlatform = {
  title: "Android Native vs Cross-Platform Development",
  intro:
    "One of the most common early decisions in mobile strategy is native versus cross-platform development. Neither is universally better — the right choice depends on the project.",
  rows: [
    { factor: "Performance", native: "Generally best possible performance and responsiveness", cross: "Good, but can lag native in performance-intensive scenarios" },
    { factor: "Platform-specific APIs", native: "Full, direct access to Android APIs and hardware", cross: "Access via bridges/plugins; occasional limitations for newer APIs" },
    { factor: "Code reuse", native: "Android-only codebase", cross: "Shared codebase across Android and iOS" },
    { factor: "Development effort (multi-platform)", native: "Higher, since iOS requires a separate codebase", cross: "Lower, due to shared code" },
    { factor: "Maintenance", native: "Maintained independently per platform", cross: "Single codebase to maintain, but framework dependencies add their own overhead" },
    { factor: "UI consistency", native: "Matches Android platform conventions precisely", cross: "Can approximate native look, with some trade-offs" },
    { factor: "Testing", native: "Focused on one platform's device/OS matrix", cross: "Testing spans both platforms, with framework-specific edge cases" },
    { factor: "Device capabilities", native: "Full native access", cross: "Generally strong, occasionally requires native modules for newer features" },
    { factor: "Long-term considerations", native: "Well-suited to performance-critical, long-lived, Android-first products", cross: "Well-suited to faster multi-platform launches and smaller teams" },
  ],
  closing:
    "Native Android development tends to make the most sense when performance, deep hardware integration, or long-term platform-specific scalability are priorities. Cross-platform development is a reasonable choice when speed to market across both Android and iOS, and a leaner development team, matter more than squeezing out the last degree of platform-specific performance.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Smartphone, title: "Custom Android engineering", desc: "Built around your actual business workflows, not a generic template." },
  { icon: CheckCircle2, title: "Business-focused requirements", desc: "Starts with your goals, not a feature checklist." },
  { icon: Layers, title: "Scalable architecture", desc: "Selected to match the real complexity and expected lifespan of your application." },
  { icon: Code2, title: "Kotlin and modern Android practices", desc: "Including Jetpack Compose and current architecture patterns where appropriate." },
  { icon: Server, title: "Backend and API engineering", desc: "Supports the mobile client reliably, not as an afterthought." },
  { icon: RefreshCw, title: "Third-party integrations", desc: "Built with proper error handling, retries, and data consistency in mind." },
  { icon: Shield, title: "Security-conscious development", desc: "Applied throughout the lifecycle, not just before launch." },
  { icon: Zap, title: "Performance optimization", desc: "Treated as an ongoing engineering discipline." },
  { icon: CheckCircle2, title: "Structured device and OS testing", desc: "Rather than assuming one device represents the whole Android ecosystem." },
  { icon: Wrench, title: "Maintainable code", desc: "That doesn't become a liability a year after launch." },
  { icon: Building2, title: "Long-term support", desc: "For maintenance, updates, and modernization as your application and business grow." },
];

export const whyChooseMobileLink = {
  before: "If you're evaluating whether Android is the right starting point, or whether a broader ",
  text: "mobile app development",
  href: "/services/web-mobile-development/mobile-app-development",
  after: " strategy covering both platforms makes more sense, our team can walk through the trade-offs with you directly.",
};

export const finalCta = {
  headline: "Get Started with The Runner Software Solutions",
  intro:
    "Building a successful Android application starts with a clear understanding of your business, your users, and your constraints — not with jumping straight into code.",
  steps: [
    "Share your requirements — tell us about your business, your goals, and the problem the app needs to solve",
    "Define users and workflows — we work with you to map out who will use the app and how",
    "Review technical requirements — backend needs, integrations, security, and compliance considerations",
    "Select architecture and technology — matched to your project's actual complexity and timeline",
    "Plan development — a scoped roadmap from MVP or first release through to long-term maintenance",
  ],
  primaryCta: "Start Your Android App Project",
  secondaryCta: "Discuss Your Android App Idea",
  tertiaryCta: "Build Your Android MVP",
  quaternaryCta: "Modernize Your Android Application",
};

export const androidFaqs = [
  {
    q: "What is Android app development?",
    a: "Android app development is the process of planning, designing, building, testing, deploying, and maintaining applications that run on Android devices. It typically involves a native or cross-platform client application, backend services, APIs, databases, and integrations with other business systems. A complete Android app development project also includes ongoing maintenance after launch, since Android OS updates, dependency changes, and evolving user needs require continued engineering work well past the initial release.",
  },
  {
    q: "What does an Android app development company do?",
    a: "An Android app development company handles the full lifecycle of building a mobile application: discovery and requirements gathering, UI/UX design, native Android engineering, backend and API development, third-party integrations, security implementation, quality assurance testing, Google Play deployment, and ongoing maintenance. A good development partner works closely with your business to align technical decisions with your actual goals, rather than applying a one-size-fits-all template to every project.",
  },
  {
    q: "How much does Android app development cost?",
    a: "Cost depends on app complexity, number of features, backend requirements, integrations, security needs, and testing scope. Industry estimates commonly range from the low tens of thousands of dollars for a simple app to several hundred thousand dollars or more for a complex enterprise application, though actual cost varies by project. These figures are general industry approximations, not fixed pricing — accurate cost estimates require a proper scoping and discovery process based on your specific requirements.",
  },
  {
    q: "How long does it take to develop an Android app?",
    a: "Timeline depends on scope: a simple MVP with limited features can be built faster than a business application with a backend and integrations, and a complex enterprise app with multiple integrations and heightened security requirements takes longer still. Factors affecting timeline include feature count, UI complexity, backend scope, number of integrations, testing requirements, and stakeholder approval cycles. We avoid committing to a fixed delivery date before understanding actual project requirements through discovery.",
  },
  {
    q: "What is custom Android app development?",
    a: "Custom Android app development means building an application specifically around your business's unique workflows, rather than adapting a pre-built template or generic solution. This typically results in better fit for how your team or customers actually operate, though it generally requires more upfront investment than off-the-shelf software. Custom development also gives you full ownership of the codebase and the flexibility to evolve the application as your business changes.",
  },
  {
    q: "What programming language is used for Android app development?",
    a: "Kotlin is Google's recommended and most widely used language for native Android development today, having largely succeeded Java as the primary language for new Android projects. Kotlin integrates directly with the Android SDK and Jetpack libraries, and offers features like null-safety and reduced boilerplate that help reduce common sources of bugs. Cross-platform frameworks use other languages, such as Dart for Flutter or JavaScript/TypeScript for React Native.",
  },
  {
    q: "Why is Kotlin used for Android development?",
    a: "Kotlin is used because it reduces boilerplate code compared to older Java-based Android development, has built-in null-safety that helps prevent a common class of runtime crashes, and is fully interoperable with existing Java-based Android code and libraries. It's also Google's officially recommended language for Android, meaning new Android SDK features and Jetpack libraries are generally designed with Kotlin as the primary language in mind.",
  },
  {
    q: "What is the difference between native Android and cross-platform development?",
    a: "Native Android development uses Kotlin and the Android SDK to build directly for the Android platform, giving full access to platform APIs, hardware, and performance optimizations, but requires a separate codebase for iOS. Cross-platform development uses a single shared codebase across Android and iOS, which speeds up multi-platform launches and reduces development effort, at the cost of some performance and platform-specific flexibility compared to native. Neither approach is universally better; the right choice depends on your product's requirements.",
  },
  {
    q: "Can you develop a custom Android application for my business?",
    a: "Yes. The Runner Software Solutions builds custom Android applications for businesses across industries, including startups, SaaS companies, ecommerce businesses, healthcare organizations, logistics companies, and enterprises. The process starts with discovery and requirements gathering to understand your specific workflows, followed by architecture, design, engineering, and testing tailored to your project's actual needs.",
  },
  {
    q: "Can an Android app integrate with an existing website?",
    a: "Yes, Android applications can be integrated with an existing website through shared APIs and backend systems, allowing data like user accounts, orders, or content to stay synchronized between the two. The specific integration approach depends on how your website's backend is built and what data needs to flow between the platforms. This is a common requirement for businesses extending an existing web presence into mobile.",
  },
  {
    q: "Can an Android app integrate with an ERP or CRM?",
    a: "Yes. Android applications can be integrated with ERP and CRM systems through APIs, allowing the mobile app to read and write data like customer records, inventory levels, or order status in real time. These integrations typically require secure authentication, reliable data synchronization, and error handling to keep data consistent between systems, particularly for enterprise applications with high transaction volumes.",
  },
  {
    q: "Can you develop the backend and APIs for an Android app?",
    a: "Yes, we build the full backend and API layer that powers Android applications, including databases, authentication systems, business logic, and the REST or GraphQL APIs the mobile client communicates with. Backend architecture is designed to match the specific data and scalability requirements of the application, rather than applying a generic setup regardless of project needs.",
  },
  {
    q: "How do you secure an Android application?",
    a: "Security is applied throughout the application lifecycle, including HTTPS for all network traffic, secure authentication and authorization, encrypted data storage and transmission, input validation, proper access control, and regular dependency updates to avoid known vulnerabilities. Security testing and monitoring continue after launch as well, since new vulnerabilities can emerge in dependencies or platform behavior over time.",
  },
  {
    q: "Can you build an Android ecommerce application?",
    a: "Yes, we build Android ecommerce applications including product catalogs, search and filtering, shopping carts, secure payment processing, and order tracking. Ecommerce apps typically require careful backend design to handle inventory, transactions, and integrations with payment gateways and shipping systems reliably, along with thorough testing of checkout and payment flows before launch.",
  },
  {
    q: "Can you develop an Android MVP for a startup?",
    a: "Yes. Android MVP development is one of our core services for startups, focused on identifying the smallest feature set needed to validate your core product idea with real users. We prioritize workflows based on your goals, build in analytics from the start, and structure the codebase so it can scale once the concept is validated, rather than requiring a full rebuild later.",
  },
  {
    q: "Can you modernize an existing Android application?",
    a: "Yes, Android app modernization is one of our core services, covering everything from updating outdated dependencies and SDK versions to refactoring architecture or performing a full rebuild where warranted. The right approach depends on how much of the existing codebase is salvageable and how critical continuity is during the transition, which we assess as part of the project scoping process.",
  },
  {
    q: "How do you test Android applications across different devices?",
    a: "We test across a representative range of device manufacturers, screen sizes, and Android OS versions relevant to the target user base, covering functional, UI, performance, and security testing alongside device- and OS-specific compatibility checks. This helps catch issues that only appear on certain hardware or software configurations, which is particularly important given how fragmented the Android device ecosystem is compared to other platforms.",
  },
  {
    q: "Can you help publish an Android app on Google Play?",
    a: "Yes, we handle Google Play deployment including Play Console setup, app listing preparation, testing track configuration, privacy and data-safety declarations, application signing, and production release management. Google Play's review process and policies are ultimately controlled by Google and can change over time, so while we prepare submissions carefully, approval cannot be guaranteed by any development partner.",
  },
  {
    q: "Can US businesses hire an Android app development company remotely?",
    a: "Yes, remote Android app development is a standard and widely used working model for US businesses, allowing companies across states and time zones to work with a development team without requiring in-person meetings. We work with businesses across the United States using structured communication and project management processes designed for remote collaboration throughout discovery, design, development, and delivery.",
  },
  {
    q: "Can Canadian businesses hire an Android app development company remotely?",
    a: "Yes, Canadian businesses regularly engage Android app development companies remotely, and this is a standard way of sourcing specialized mobile development expertise. We work with businesses across Canada using the same structured, remote-friendly process applied to every project, covering discovery, architecture, design, development, testing, and ongoing maintenance.",
  },
];
