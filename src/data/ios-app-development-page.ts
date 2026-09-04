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
  Palette,
} from "lucide-react";
import { WEB_MOBILE_DEVELOPMENT_PILLAR_PATH } from "./services-menu";

export { WEB_MOBILE_DEVELOPMENT_PILLAR_PATH };

export const iosAppDevelopmentSeo = {
  title: "iOS App Development Company | The Runner Software",
  description:
    "Custom iOS app development for iPhone and iPad. Native Swift and SwiftUI engineering, secure APIs, and scalable architecture. Talk to our team today.",
  h1: "Custom iOS App Development for High-Performance Digital Products",
  canonicalPath: "/services/web-mobile-development/ios-app-development",
  ogTitle: "iOS App Development Services | The Runner Software Solutions",
  ogDescription:
    "Custom iOS app development for iPhone and iPad with native Swift and SwiftUI engineering, secure backend architecture, and App Store deployment.",
  twitterTitle: "iOS App Development Services | The Runner Software Solutions",
  twitterDescription:
    "Custom iOS app development for iPhone and iPad with native Swift and SwiftUI engineering, secure backend architecture, and App Store deployment.",
};

export const iosHero = {
  intro:
    "Apple's ecosystem sets a high bar for polish, performance, and reliability — and iOS users notice when an app doesn't meet it. The Runner Software Solutions designs and builds custom iOS applications for iPhone and iPad using native Swift and SwiftUI engineering, secure backend architecture, and interfaces built around how people actually use Apple devices.",
  closing:
    "Whether you need a customer-facing iPhone app, a productivity-focused iPad experience, or a full modernization of a legacy iOS application, our iOS app development services are shaped around your business requirements, not a generic build template.",
  primaryCta: "Start Your iOS App Project",
  secondaryCta: "Talk to an iOS App Development Expert",
};

export const whatIsIos = {
  title: "What Is iOS App Development?",
  intro:
    "iOS app development is the process of designing, engineering, testing, deploying, and maintaining applications built for Apple's mobile platforms — iPhone and iPad, running iOS and iPadOS.",
  layersIntro: "A production-ready iOS application is rarely just a front-end interface. It typically involves several connected layers:",
  layers: [
    "Native iOS application (frontend): the screens, navigation, and interactions users see on iPhone or iPad.",
    "Backend systems: the servers, business logic, and data processing behind the app.",
    "APIs: the communication layer between the iOS client and backend services.",
    "Databases: structured storage for user data, transactions, and application state.",
    "Authentication: secure login, session handling, and identity verification.",
    "Push and in-app notifications: timely communication that brings users back into the app.",
    "Analytics: usage data that informs product decisions after launch.",
    "Third-party integrations: connections to CRM, ERP, payment, or marketing platforms.",
    "App Store deployment: the process of preparing, submitting, and maintaining the app on Apple's App Store.",
  ],
  approachesIntro: "It's worth distinguishing native iOS development from related approaches, since the terms often get used loosely:",
  approaches: [
    "Native iOS app — built specifically for Apple platforms using Swift and the iOS SDK, with full access to platform APIs and device hardware.",
    "Cross-platform app — a single codebase (e.g., React Native, Flutter) deployed to both iOS and Android, trading some platform-specific performance and polish for shared code.",
    "Mobile website — a website that adapts to mobile screens but runs in Safari or another browser, without being installed as an app.",
    "Progressive Web App (PWA) — a web application with some app-like behavior, but without full native device access or a true App Store presence.",
  ],
  closing:
    "For businesses where interface polish, performance, and deep integration with Apple's platform genuinely matter to the product, native iOS app development is generally the stronger long-term choice.",
};

export type IosServiceItem = {
  title: string;
  desc: string;
  bullets?: string[];
  link?: { before: string; text: string; href: string; after: string };
  secondLink?: { before: string; text: string; href: string; after: string };
};

export const iosServices: IosServiceItem[] = [
  {
    title: "Custom iOS App Development",
    desc: "Custom iOS app development means building an application around your specific business processes — not adapting a generic template to fit. Whether it's a booking workflow unique to your operations, an internal tool built around how your team actually works, or a customer experience tailored to your brand, custom development produces software that fits the business instead of forcing the business to work around the software.",
  },
  {
    title: "Native iOS App Development",
    desc: "Native iOS app development uses Swift, SwiftUI, and — where appropriate — UIKit, built directly on the iOS SDK. This gives full access to Apple's platform APIs, hardware capabilities, and the performance characteristics users expect from a well-built iOS app.",
    bullets: [
      "Deep use of device hardware (camera, Face ID/Touch ID, location, sensors)",
      "High-performance UI, smooth animations, or real-time interactions",
      "Tight integration with iOS system features (widgets, notifications, background processing, Apple Sign-In)",
      "Long-term product scalability and maintainability as a dedicated iOS product",
    ],
    link: {
      before: "For teams that need to launch on both iOS and Android quickly with a shared codebase, a cross-platform approach can be a reasonable trade-off — covered in more detail in the ",
      text: "native vs. cross-platform comparison below",
      href: "#native-vs-cross-platform",
      after: ".",
    },
  },
  {
    title: "iPhone App Development",
    desc: "iPhone remains the primary Apple device for most consumer and business applications, and iPhone app development covers the full range of what the platform can do — camera and photo library access, location services, push notifications, biometric authentication through Face ID or Touch ID, and consistent performance across the current range of supported iPhone models. iPhone-specific design and engineering decisions directly affect App Store ratings and user retention, so we treat iPhone UX as a first-class part of the build, not an afterthought.",
  },
  {
    title: "iPad App Development",
    desc: "iPad applications aren't simply a scaled-up iPhone app. Larger screens open up multitasking, split-view layouts, and productivity-focused workflows that make sense on iPad but not on a phone. iPad app development is common for business tools — point-of-sale systems, field-service apps, dashboards, and internal productivity tools — where the extra screen real estate genuinely improves how people work. We design responsive interfaces that adapt properly across iPhone and iPad rather than stretching one layout across both.",
  },
  {
    title: "Enterprise iOS App Development",
    desc: "Enterprise iOS app development typically prioritizes security, access control, and integration with existing systems over consumer-style polish alone. We build employee applications, field-service tools, customer portals, and partner-facing apps with secure authentication, role-based access, and connections into ERP or CRM systems your business already relies on.",
    link: {
      before: "Organizations evaluating a broader mobile strategy across platforms may also want to review our ",
      text: "Android app development services",
      href: "/services/web-mobile-development/android-app-development",
      after: " to plan iOS and Android releases together rather than as separate, disconnected efforts.",
    },
    secondLink: {
      before: "For organizations planning a broader internal software strategy beyond mobile, our ",
      text: "software product development",
      href: "/services/software-development/software-product-development",
      after: " team can help scope systems that support both web and iOS access points.",
    },
  },
  {
    title: "iOS MVP Development",
    desc: "For startups, iOS MVP development means identifying the smallest set of core workflows needed to validate the product idea with real users — not building every feature on the roadmap at once. We prioritize based on your goals, instrument the app with analytics from day one, and build the technical foundation so it can scale once the concept is validated instead of requiring a rebuild.",
  },
  {
    title: "iOS UI/UX Development",
    desc: "Good iOS UI/UX design follows Apple's platform conventions closely enough to feel native and intuitive, while still reflecting your brand. Our process covers user journeys, wireframes, and interactive prototypes before development begins, with attention to navigation patterns, accessibility, and responsive layouts across iPhone and iPad screen sizes.",
  },
  {
    title: "iOS Backend Development",
    desc: "Most iOS applications of real complexity depend on backend infrastructure. Our iOS backend development covers the APIs, authentication systems, databases, and business logic that power the mobile client, along with cloud infrastructure, notification delivery, and the integrations that connect the app to the rest of your business systems.",
  },
  {
    title: "iOS App Modernization",
    desc: "Legacy iOS applications accumulate problems over time: outdated Swift language versions, deprecated APIs, architecture that no longer aligns with current best practices, and interfaces that feel dated against current App Store norms. iOS app modernization addresses these issues incrementally or through a more complete rebuild, depending on how much of the existing codebase is worth preserving.",
  },
  {
    title: "iOS App Maintenance",
    desc: "Launch is the starting point, not the finish line. iOS app maintenance covers the ongoing work needed to keep an application reliable — adapting to new iOS releases, patching dependencies, fixing bugs surfaced through crash monitoring, applying security updates, and shipping incremental improvements based on real user feedback.",
  },
];

export const swiftSection = {
  title: "Swift Development",
  intro:
    "Swift is Apple's modern programming language for iOS, iPadOS, and the broader Apple platform ecosystem, and it's the standard choice for native app development on Apple devices today.",
  reasons: [
    "Type safety — Swift's strict type system catches many classes of bugs at compile time rather than at runtime, which reduces the number of issues that make it into production.",
    "Modern language features — optionals, pattern matching, and value types (structs and enums) encourage code that's easier to reason about and less prone to unexpected nil-related crashes.",
    "Asynchronous programming support — Swift's concurrency model (async/await and structured concurrency) makes it more straightforward to write network calls and other asynchronous operations correctly.",
    "Structured error handling — Swift's do/try/catch model encourages explicit handling of failure cases instead of silently ignoring them.",
    "Maintainability — Swift's readability and consistency make codebases easier for new engineers to pick up over the life of a product.",
    "Performance — Swift is compiled and designed for speed, which supports the smooth, responsive experience iOS users expect.",
    "Reusable code — well-structured Swift code, particularly with SwiftUI, tends to produce components that can be reused across screens and features.",
  ],
  closing: "We don't treat Swift adoption as an end in itself — it's the practical foundation that supports building reliable, maintainable iOS applications.",
};

export const swiftUiSection = {
  title: "SwiftUI Development",
  intro:
    "SwiftUI is Apple's modern, declarative framework for building user interfaces across iOS, iPadOS, and other Apple platforms. Instead of manually managing view hierarchies and low-level state updates, developers describe what the interface should look like for a given state, and SwiftUI handles rendering and updates automatically.",
  characteristics: [
    "Declarative UI — interface code describes the desired end state rather than a sequence of manual update instructions.",
    "Reusable components — SwiftUI encourages building small, composable views that can be reused across different screens.",
    "State management — SwiftUI's property wrappers (like @State and @Binding) provide a structured way to keep UI in sync with underlying data.",
    "Responsive interfaces — SwiftUI layouts adapt more naturally across iPhone and iPad screen sizes than older approaches.",
    "Previews — SwiftUI's live preview tooling speeds up the design-to-development feedback loop significantly.",
    "Accessibility — SwiftUI has strong built-in support for accessibility features.",
    "Apple platform integration — SwiftUI works closely with newer Apple APIs and platform features as they're introduced.",
  ],
  uikitNote:
    "SwiftUI is a strong default for most new iOS projects, but it isn't automatically the right choice for every scenario. UIKit, Apple's older but still fully supported UI framework, remains relevant for applications with highly complex custom interactions, legacy codebases already built on UIKit, or specific low-level control requirements that SwiftUI doesn't yet fully expose. We select between SwiftUI and UIKit — or a mix of both — based on the actual technical requirements of the project, not by default.",
};

export const architectureSection = {
  title: "iOS App Architecture",
  intro:
    "A well-structured iOS application separates concerns into distinct layers, so a change in one area — say, a new API endpoint — doesn't ripple unpredictably through the rest of the codebase.",
  layers: [
    "Presentation layer (UI) — screens, components, and user interaction handling",
    "Business logic layer — the rules and workflows that define what the application actually does",
    "Data layer — the API layer, local database, and caching that supply data to business logic",
    "Authentication layer — identity verification and session management",
    "Local storage and caching — for offline access and reduced network dependency",
    "Background processing — work that continues independent of the active screen, such as sync jobs or notification handling",
  ],
  approaches: [
    "MVVM (Model-View-ViewModel) — separates UI state management from the interface itself, pairing naturally with SwiftUI's data-binding model.",
    "Clean Architecture — organizes code into independent layers with strict boundaries, which improves testability and maintainability on larger codebases.",
    "Modular architecture — breaks a large application into independently buildable modules, useful for larger teams working on different parts of the app in parallel.",
  ],
  closing:
    "The right architecture depends on project size and expected lifespan. A simple single-purpose app doesn't need the same architectural rigor as a multi-year enterprise platform — over-engineering adds cost without adding value, and under-engineering creates maintenance headaches down the line.",
};

export const featuresSection = {
  title: "iOS App Features",
  intro: "Feature decisions should be driven by user needs and business goals, not by what's technically possible to build.",
  features: [
    "User registration, login, and Apple Sign-In",
    "User profiles and role-based access",
    "Push and in-app notifications",
    "Search and filters",
    "Messaging",
    "File uploads, camera, and photo library access",
    "Location, GPS, and Maps",
    "Face ID / Touch ID",
    "Payments, subscriptions, and shopping carts",
    "Order tracking and booking",
    "Reviews and ratings",
    "Analytics and reporting",
    "Offline functionality (where appropriate)",
    "Admin dashboards",
    "API integrations",
  ],
};

export const uiUxSection = {
  title: "iOS UI/UX Design",
  intro:
    "iOS UI/UX design has a direct, measurable relationship with usability, engagement, retention, conversion, and App Store reviews, where poor usability is a common source of negative feedback.",
  considerations: [
    "Apple Human Interface Guidelines (HIG) — used as a strong starting point, adapted to match brand identity rather than followed rigidly.",
    "Navigation patterns — tab bars, navigation stacks, and modals each suit different app structures.",
    "Typography — Apple's system fonts and dynamic type support affect both legibility and accessibility.",
    "Touch interactions — gesture support and touch target sizing directly affect usability.",
    "Accessibility — support for VoiceOver, Dynamic Type, and sufficient color contrast.",
    "Responsive layouts across iPhone and iPad",
    "Onboarding — the first few screens heavily influence whether a new user continues using the app.",
    "Forms, error states, loading states, and empty states",
    "Design systems — a shared library of reusable SwiftUI components keeps the app visually consistent.",
  ],
  disclaimer:
    "We do not claim any Apple endorsement or design partnership — our design approach is informed by Apple's public guidelines, not an affiliated or certified relationship with Apple.",
};

export const backendSection = {
  title: "iOS Backend & API Development",
  intro:
    "Most iOS applications of any real complexity depend on backend infrastructure. Understanding how that backend is structured matters as much as the mobile client itself.",
  components: [
    "REST APIs, and GraphQL where the app's data-fetching patterns benefit from it",
    "Backend frameworks such as Node.js, Express, or Laravel, selected based on project requirements",
    "Databases such as PostgreSQL, MySQL, or MongoDB, chosen based on data shape and read/write patterns",
    "Authentication and authorization systems",
    "File storage for user-uploaded content",
    "Background processing for tasks that shouldn't block the user-facing app",
    "Webhooks for real-time communication with third-party systems",
    "Third-party API integrations",
    "Logging and monitoring",
  ],
  closing:
    "A well-designed backend enforces business rules, keeps data consistent, and determines how well the application scales as usage grows — it's not just a data store behind the app.",
  webLink: {
    before: "Businesses evaluating a broader digital presence beyond mobile may also want to review our ",
    text: "web development services",
    href: "/services/web-mobile-development/web-development",
    after: " for backend and website work that shares the same underlying systems.",
  },
};

export const integrationsSection = {
  title: "iOS App Integrations",
  intro: "Very few business applications operate in isolation. iOS app integrations connect your mobile application to the other systems your business already relies on, including:",
  systems: [
    "CRM systems — syncing customer and lead data",
    "ERP systems — connecting inventory, orders, and operations data",
    "Ecommerce platforms — product catalogs, checkout, and order management",
    "Payment gateways — processing transactions securely",
    "Accounting systems — syncing financial data",
    "Shipping systems — tracking and fulfillment",
    "Analytics platforms — behavioral and usage data",
    "Marketing platforms — campaign and audience data",
    "Customer support systems — ticketing and communication history",
    "Internal business software — proprietary or industry-specific tools",
  ],
  closing:
    "Technically, integrations depend on secure API authentication, reliable data synchronization, webhook handling for real-time updates, retry logic for failed requests, structured error handling, and logging so integration issues can be caught and resolved quickly.",
};

export const securitySection = {
  title: "iOS App Security",
  intro: "Security has to be built into an iOS application from the start, not bolted on before submission to the App Store.",
  practices: [
    "HTTPS for all network communication, without exception",
    "Secure authentication and authorization, including proper session and token handling",
    "Keychain for secure on-device storage of credentials and sensitive tokens",
    "Encryption for sensitive data, both in transit and at rest",
    "Secure local storage practices for any data cached on the device",
    "API security, including rate limiting and proper access scoping",
    "Input validation on both client and server",
    "Access control, ensuring users can only reach the data and actions appropriate to their role",
    "Dependency management, keeping third-party libraries updated",
    "Secure logging, avoiding sensitive data ending up in logs",
    "Vulnerability management as an ongoing process",
    "Biometric authentication through Face ID or Touch ID, implemented using Apple's secure frameworks",
    "Privacy considerations, including proper handling of App Store privacy disclosures and permission requests",
  ],
  closing:
    "Security is treated as an ongoing responsibility throughout development, testing, deployment, and maintenance — not a checklist item completed once before submission.",
};

export const performanceSection = {
  title: "iOS App Performance",
  intro: "Performance shapes how users perceive an application's quality, and poor performance is a common reason for App Store uninstalls and negative reviews.",
  areas: [
    "App startup time",
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
    "We don't promise specific benchmark scores, since performance depends heavily on device model, network conditions, and real-world usage patterns — but performance is treated as a first-class engineering concern throughout the project, not an afterthought before submission.",
};

export const deviceCompatibilitySection = {
  title: "Apple Device Compatibility",
  intro:
    "Apple's hardware lineup is narrower than Android's, but device and OS compatibility still requires deliberate engineering attention.",
  considerations: [
    "iPhone models currently supported, which vary in screen size, processing power, and available hardware features",
    "iPad models and their distinct layout and multitasking capabilities",
    "Screen sizes across the current iPhone and iPad lineup",
    "iOS and iPadOS versions still in active use among the target audience",
    "Device capabilities, including camera, biometric hardware, and sensors",
    "Orientation support, particularly relevant for iPad applications",
    "Performance differences across older and newer supported devices",
    "Accessibility features and how the app behaves with them enabled",
  ],
  closing:
    "Testing across a representative range of supported devices and iOS versions is a core part of how we validate an application before release.",
};

export const testingSection = {
  title: "iOS App Testing & QA",
  intro: 'Testing an iOS application well means testing more than "does it work on my phone." Our QA process typically covers:',
  types: [
    "Functional testing",
    "UI testing",
    "API testing",
    "Integration testing",
    "Regression testing",
    "Device testing across supported iPhone and iPad models",
    "iOS version testing",
    "Performance testing",
    "Security testing",
    "Usability testing",
    "Crash testing",
    "Network-condition testing",
  ],
  testFlight:
    "We use TestFlight, Apple's official beta distribution platform, to get builds in front of internal stakeholders and beta testers before a public release. Thorough testing before submission reduces the number of critical issues discovered by end users, and can also reduce the likelihood of App Store review rejections related to obvious bugs or crashes; it does not guarantee Apple's approval.",
};

export const appStoreSection = {
  title: "App Store Deployment",
  intro: "Publishing an iOS application involves more than uploading a build. Our deployment process covers:",
  items: [
    "Setting up and managing App Store Connect",
    "Preparing app metadata, screenshots, and descriptions",
    "Completing required app privacy information disclosures",
    "Managing app signing and the necessary certificates and provisioning profiles",
    "Establishing a versioning strategy for future updates",
    "Coordinating TestFlight distribution ahead of public release",
    "Managing release management and production deployment",
  ],
  disclaimer:
    "Apple's App Store policies and review requirements change over time, and approval is ultimately at Apple's discretion. We prepare submissions carefully to align with current guidelines, but App Store approval cannot be guaranteed by any development partner.",
};

export const developmentProcess = [
  { step: 1, title: "Discovery", desc: "Understanding your business, users, and goals" },
  { step: 2, title: "Business Requirements", desc: "Defining what the application actually needs to do" },
  { step: 3, title: "Product Strategy", desc: "Aligning features with business outcomes" },
  { step: 4, title: "Feature Prioritization", desc: "Deciding what belongs in the first release versus later phases" },
  { step: 5, title: "Technical Architecture", desc: "Selecting the right architecture and technology approach" },
  { step: 6, title: "UX/UI Design", desc: "Designing user journeys and interface screens" },
  { step: 7, title: "Prototype", desc: "Validating design decisions before full development begins" },
  { step: 8, title: "Backend/API Development", desc: "Building the systems that power the app" },
  { step: 9, title: "iOS Development", desc: "Building the native Swift/SwiftUI client" },
  { step: 10, title: "Third-Party Integrations", desc: "Connecting to CRM, ERP, payment, or other systems" },
  { step: 11, title: "QA & Testing", desc: "Validating functionality, performance, and reliability" },
  { step: 12, title: "Security Validation", desc: "Reviewing the application against security best practices" },
  { step: 13, title: "Performance Optimization", desc: "Tuning for speed and efficiency" },
  { step: 14, title: "TestFlight Preparation", desc: "Packaging builds for internal and beta testing" },
  { step: 15, title: "App Store Preparation", desc: "Assembling metadata, screenshots, and privacy disclosures" },
  { step: 16, title: "Deployment", desc: "Submitting and releasing the application to production" },
  { step: 17, title: "Monitoring", desc: "Tracking stability and usage after launch" },
  { step: 18, title: "Maintenance", desc: "Ongoing updates, fixes, and improvements" },
];

export const mvpComparison = {
  title: "iOS MVP Development",
  intro:
    "Startups often come to us with an ambitious feature list and a limited budget or timeline — iOS MVP development is about resolving that tension deliberately.",
  rows: [
    { label: "Goal", mvp: "Validate core value proposition", full: "Serve full range of user needs" },
    { label: "Feature scope", mvp: "Minimal, focused on core workflow", full: "Broad, covering edge cases and secondary use cases" },
    { label: "Timeline", mvp: "Shorter", full: "Longer" },
    { label: "Cost", mvp: "Lower", full: "Higher" },
    { label: "Risk", mvp: "Lower financial exposure before validation", full: "Higher investment before market feedback" },
    { label: "Iteration", mvp: "Expected and encouraged", full: "Changes are costlier post-launch" },
  ],
  closing:
    'We generally advise against packing an MVP with features "just in case" — every additional feature adds development time and App Store review complexity without necessarily adding validation value.',
};

export const enterpriseSection = {
  title: "Enterprise iOS App Development",
  intro:
    "Enterprise iOS app development carries different priorities than a typical consumer app. Common enterprise use cases include employee applications, field-service tools, customer portals tied into internal systems, partner applications, and internal workflow tools.",
  requirements: [
    "Secure authentication, often integrated with existing identity systems",
    "Role-based permissions across multiple user types",
    "ERP and CRM integrations so the app reflects live business data",
    "Enterprise reporting for internal stakeholders",
    "Offline workflows where field conditions demand it",
    "Centralized administration for IT and operations teams",
    "Scalability to support growing headcount or usage",
    "Monitoring to maintain reliability across a distributed user base",
  ],
  closing:
    "Enterprise-specific challenges usually center on integration complexity, access control, and device management considerations, rather than the mobile UI itself.",
};

export const modernizationSection = {
  title: "iOS App Modernization",
  intro:
    "Legacy iOS applications tend to accumulate problems gradually: outdated Swift language versions, deprecated APIs, architecture that predates current best practices, degraded performance, and interfaces that feel dated against current App Store norms.",
  factors: [
    "How much of the existing codebase is salvageable versus fundamentally outdated",
    "Whether the current architecture can reasonably support new features",
    "How critical uptime and continuity are during the transition",
    "Budget and timeline constraints",
  ],
  closing:
    "In many cases, incremental modernization — updating the Swift language version, refactoring problematic modules, and migrating from UIKit to SwiftUI piece by piece — is less disruptive than a ground-up rebuild, though there are situations where a legacy codebase is genuinely holding a product back and a rebuild is the more sustainable choice.",
};

export const maintenanceSection = {
  title: "iOS App Maintenance",
  intro: 'Mobile applications are not "set and forget" software. After launch, ongoing maintenance is required to keep the application functioning correctly and securely, including:',
  items: [
    "Adapting to new iOS releases",
    "Responding to broader Apple platform changes, including updates to App Store guidelines",
    "Applying dependency updates",
    "Bug fixes based on real-world usage and crash reports",
    "Security patches as new vulnerabilities are identified",
    "Crash monitoring",
    "Responding to API changes in connected third-party services",
    "Performance optimization as usage patterns and data volume grow",
    "Feature improvements based on user feedback and business needs",
  ],
  closing:
    "Without ongoing maintenance, even a well-built iOS application tends to degrade over time as the platform and its dependencies evolve around it.",
};

export const industriesSection = [
  { industry: "Healthcare", desc: "Patient portals, appointment scheduling, and secure communication between patients and providers." },
  { industry: "Finance", desc: "Secure account access, financial dashboards, and transaction workflows with emphasis on authentication and encryption." },
  { industry: "Ecommerce", desc: "Product browsing, checkout flows, and order tracking optimized for the iPhone shopping experience." },
  { industry: "Education", desc: "Learning applications and student portals, often paired with iPad-specific layouts for classroom and study use." },
  { industry: "Logistics", desc: "Driver applications, real-time tracking, and dispatch workflows for distributed field teams." },
  { industry: "Real Estate", desc: "Property discovery apps, lead management tools, and scheduling for property viewings." },
  { industry: "Retail", desc: "Mobile commerce, loyalty programs, and order tracking integrated with in-store systems." },
  { industry: "Manufacturing", desc: "Field and floor applications for inventory, quality checks, and operational reporting, frequently on iPad." },
  { industry: "Travel", desc: "Booking workflows, itinerary management, and location-based features." },
  { industry: "SaaS", desc: "Companion iOS apps that extend a web-based product to iPhone and iPad users." },
  { industry: "Professional Services", desc: "Client-facing portals and internal scheduling or case-management tools." },
];

export const usaSection = {
  title: "iOS App Development for USA Businesses",
  body: "We work with businesses across the United States on iOS app development services, from early-stage startups to established enterprises modernizing legacy applications. Companies in major markets — including New York, California, Texas, Florida, Washington, Illinois, Massachusetts, New Jersey, Georgia, and North Carolina — engage us for custom iOS app development, iPhone app development, backend and API engineering, and long-term maintenance support. Whether your team is based in a major metro or operates remotely across the country, our iOS app development company works the same structured process: discovery, architecture, design, engineering, QA, and ongoing support.",
};

export const canadaSection = {
  title: "iOS App Development for Canadian Businesses",
  body: "We also support Canadian businesses with custom iOS app development, from startups building their first iPhone MVP to enterprises modernizing existing applications. This includes companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton, and Winnipeg, across industries ranging from ecommerce and logistics to healthcare and finance. Our iOS app development services for Canadian businesses follow the same architecture, security, and QA standards applied to every project we take on.",
};

export const costSection = {
  title: "iOS App Development Cost",
  intro: "iOS app development cost varies significantly based on:",
  factors: [
    "App complexity",
    "Number of features",
    "UI/UX complexity",
    "iPhone and iPad requirements",
    "Backend requirements",
    "APIs and third-party integrations",
    "Authentication requirements",
    "Payments and subscriptions",
    "Location services",
    "Messaging features",
    "Admin dashboards",
    "Security requirements",
    "Testing scope",
    "Deployment and App Store preparation",
    "Ongoing maintenance",
  ],
  closing:
    "Industry cost estimates for iOS app development commonly range from roughly the low tens of thousands of dollars for a simple, narrowly scoped application to several hundred thousand dollars or more for a complex enterprise system with extensive integrations. These are general industry approximations, not a quote from The Runner Software Solutions — actual project cost depends entirely on your specific requirements and is determined through discovery and scoping.",
};

export const timelineSection = {
  title: "iOS App Development Timeline",
  intro: "Timeline, like cost, depends heavily on scope. Rough illustrative examples:",
  examples: [
    "Simple MVP — a narrowly scoped app with core workflows only, typically the fastest to build",
    "Business application — a moderately featured app with a backend, a handful of integrations, and standard security requirements",
    "Ecommerce app — includes product catalogs, checkout, payments, and order tracking",
    "Enterprise application — multiple user roles, deep integrations with existing systems, and higher security requirements",
  ],
  closing:
    "We don't commit to fixed delivery dates before scoping a project, since committing to a date before understanding actual requirements tends to produce inaccurate estimates — and App Store review timing itself is outside any development partner's direct control.",
};

export const nativeVsCrossPlatform = {
  title: "Native iOS vs. Cross-Platform Development",
  intro:
    "One of the most common early decisions in mobile strategy is native versus cross-platform development. Neither is universally better — the right choice depends on the project.",
  rows: [
    { factor: "Performance", native: "Generally best possible performance and responsiveness on Apple devices", cross: "Good, but can lag native in performance-intensive scenarios" },
    { factor: "Platform-specific APIs", native: "Full, direct access to iOS APIs and hardware", cross: "Access via bridges/plugins; occasional limitations for newer Apple APIs" },
    { factor: "Code reuse", native: "iOS-only codebase", cross: "Shared codebase across iOS and Android" },
    { factor: "Development effort (multi-platform)", native: "Higher, since Android requires a separate codebase", cross: "Lower, due to shared code" },
    { factor: "Maintenance", native: "Maintained independently per platform", cross: "Single codebase to maintain, but framework dependencies add their own overhead" },
    { factor: "UI consistency", native: "Matches Apple platform conventions precisely", cross: "Can approximate native look, with some trade-offs" },
    { factor: "Testing", native: "Focused on Apple's device/OS matrix", cross: "Testing spans both platforms, with framework-specific edge cases" },
    { factor: "Device capabilities", native: "Full native access, including newest Apple APIs at launch", cross: "Generally strong, occasionally requires native modules for newer features" },
    { factor: "Long-term considerations", native: "Well-suited to performance-critical, long-lived, iOS-first products", cross: "Well-suited to faster multi-platform launches and smaller teams" },
  ],
  closing:
    "Native iOS development tends to make the most sense when performance, deep hardware integration, or long-term platform-specific scalability are priorities. Cross-platform development is a reasonable choice when speed to market across both iOS and Android, and a leaner development team, matter more.",
  mobileLink: {
    before: "Businesses weighing both platforms may also want to review our dedicated ",
    text: "mobile app development",
    href: "/services/web-mobile-development/mobile-app-development",
    after: " overview for a broader look at cross-platform strategy.",
  },
};

export const swiftVsCrossPlatform = {
  title: "Swift vs. Cross-Platform Technologies",
  intro:
    "Beyond the general native-vs-cross-platform decision, it's worth understanding how Swift/SwiftUI compares specifically to the two most common cross-platform frameworks.",
  rows: [
    { factor: "Platform integration", swift: "Deepest possible integration with Apple APIs and hardware", reactNative: "Strong, via native modules and bridges", flutter: "Strong, via platform channels" },
    { factor: "Code reuse across iOS/Android", swift: "None — iOS only", reactNative: "High", flutter: "High" },
    { factor: "UI approach", swift: "Declarative, uses native iOS rendering", reactNative: "JavaScript-driven, renders to native components", flutter: "Renders its own UI engine (Skia), consistent across platforms" },
    { factor: "Native capabilities", swift: "Full, immediate access to new Apple APIs", reactNative: "Generally strong, occasional lag on newest APIs", flutter: "Generally strong, occasional lag on newest APIs" },
    { factor: "Maintenance", swift: "iOS-specific codebase and skill set", reactNative: "JavaScript/React skill set, shared with web teams in some cases", flutter: "Dart skill set, less commonly shared with other teams" },
    { factor: "Team expertise required", swift: "Swift/iOS specialists", reactNative: "JavaScript/React developers", flutter: "Dart/Flutter developers" },
    { factor: "Best fit", swift: "iOS-first products prioritizing performance and platform fidelity", reactNative: "Teams with existing React/JavaScript expertise building for both platforms", flutter: "Teams wanting highly consistent UI across platforms from one codebase" },
  ],
  closing:
    "No single technology is universally superior — the right choice depends on your existing team's skill set, whether Android is a near-term requirement, and how much platform-specific performance and polish the product genuinely needs.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Smartphone, title: "Custom iOS engineering", desc: "Built around your actual business workflows, not a generic template." },
  { icon: CheckCircle2, title: "Business-first requirements", desc: "Starts with your goals, not a feature checklist." },
  { icon: Layers, title: "Scalable architecture", desc: "Selected to match the real complexity and expected lifespan of your application." },
  { icon: Code2, title: "Swift and SwiftUI expertise", desc: "Applied where they're the right fit, alongside UIKit where appropriate." },
  { icon: Server, title: "Backend and API engineering", desc: "Supports the mobile client reliably, not as an afterthought." },
  { icon: RefreshCw, title: "Third-party integrations", desc: "Built with proper error handling, retries, and data consistency in mind." },
  { icon: Shield, title: "Security-conscious development", desc: "Applied throughout the lifecycle, including Keychain and biometric authentication." },
  { icon: Zap, title: "Performance optimization", desc: "Treated as an ongoing engineering discipline." },
  { icon: CheckCircle2, title: "Structured device and OS testing", desc: "Including TestFlight distribution before public release." },
  { icon: Wrench, title: "Maintainable code", desc: "Doesn't become a liability a year after launch." },
  { icon: Building2, title: "Long-term support", desc: "Maintenance, updates, and modernization as your application and business grow." },
  { icon: Palette, title: "Platform-informed design", desc: "Informed by Apple's public guidelines — not claimed Apple partnership or certification." },
];

export const finalCta = {
  headline: "Get Started with The Runner Software Solutions",
  intro:
    "Building a successful iOS application starts with a clear understanding of your business, your users, and your constraints — not with jumping straight into code.",
  steps: [
    "Share your requirements — tell us about your business, your goals, and the problem the app needs to solve",
    "Define users and workflows — we work with you to map out who will use the app and how",
    "Review technical requirements — backend needs, integrations, security, and platform (iPhone, iPad, or both)",
    "Select architecture — matched to your project's actual complexity and timeline",
    "Define development scope — a clear, prioritized feature set for the first release",
    "Plan implementation — a scoped roadmap from MVP or first release through to long-term maintenance",
  ],
  primaryCta: "Start Your iOS App Project",
  secondaryCta: "Discuss Your iOS App Idea",
  tertiaryCta: "Build Your iOS MVP",
  quaternaryCta: "Modernize Your iOS Application",
};

export const iosFaqs = [
  {
    q: "What is iOS app development?",
    a: "iOS app development is the process of designing, engineering, testing, deploying, and maintaining applications for Apple's mobile platforms — iPhone and iPad. It typically involves a native application built with Swift and SwiftUI, backend services, APIs, databases, and integrations with other business systems. A complete iOS app development project also includes ongoing maintenance after launch, since new iOS releases, dependency changes, and evolving user needs require continued engineering work well past initial submission.",
  },
  {
    q: "What does an iOS app development company do?",
    a: "An iOS app development company handles the full lifecycle of building an Apple-platform application: discovery and requirements gathering, UI/UX design, native Swift and SwiftUI engineering, backend and API development, third-party integrations, security implementation, quality assurance testing, App Store deployment, and ongoing maintenance. A good development partner aligns technical decisions with your actual business goals, rather than applying the same template to every project.",
  },
  {
    q: "How much does iOS app development cost?",
    a: "Cost depends on app complexity, number of features, backend requirements, integrations, iPhone/iPad support scope, security needs, and testing coverage. Industry estimates commonly range from the low tens of thousands of dollars for a simple app to several hundred thousand dollars or more for a complex enterprise application, though actual cost varies by project. These figures are general industry approximations, not fixed pricing — accurate estimates require proper scoping based on your specific requirements.",
  },
  {
    q: "How long does it take to develop an iOS app?",
    a: "Timeline depends on scope: a simple MVP with limited features builds faster than a business application with a backend and integrations, and a complex enterprise app with multiple integrations and heightened security requirements takes longer still. Factors include feature count, UI complexity, backend scope, number of integrations, whether iPad support is needed alongside iPhone, testing requirements, and App Store preparation and review time. We avoid committing to a fixed delivery date before understanding actual requirements through discovery.",
  },
  {
    q: "What is custom iOS app development?",
    a: "Custom iOS app development means building an application specifically around your business's unique workflows, rather than adapting a pre-built template or generic solution. This generally produces a better fit for how your team or customers actually operate, though it typically requires more upfront investment than off-the-shelf software. Custom development also gives you full ownership of the codebase and the flexibility to evolve the application as your business changes.",
  },
  {
    q: "What programming language is used for iOS app development?",
    a: "Swift is Apple's modern, recommended programming language for iOS, iPadOS, and the broader Apple platform ecosystem, and it's the standard choice for new native app development on Apple devices. Swift offers type safety, structured error handling, and modern concurrency support that help reduce common sources of bugs. Cross-platform frameworks use other languages, such as JavaScript/TypeScript for React Native or Dart for Flutter.",
  },
  {
    q: "Why is Swift used for iOS development?",
    a: "Swift is used because it offers strong type safety that catches many bugs at compile time, structured error handling, and modern concurrency support for cleaner asynchronous code. It's also Apple's officially recommended language for iOS development, meaning new Apple APIs and platform features are generally designed with Swift as the primary language in mind. Swift's readability also makes codebases easier to maintain over the long term.",
  },
  {
    q: "What is SwiftUI?",
    a: "SwiftUI is Apple's modern, declarative framework for building user interfaces across iOS, iPadOS, and other Apple platforms. Instead of manually managing view hierarchies, developers describe the desired interface for a given state, and SwiftUI handles rendering and updates. It offers strong built-in accessibility support and adapts more naturally across iPhone and iPad screen sizes compared to older UI approaches, though UIKit remains relevant for certain complex or legacy scenarios.",
  },
  {
    q: "What is the difference between native iOS and cross-platform development?",
    a: "Native iOS development uses Swift and the iOS SDK to build directly for Apple's platform, giving full access to platform APIs, hardware, and performance optimizations, but requires a separate codebase for Android. Cross-platform development uses a single shared codebase across iOS and Android, which speeds up multi-platform launches and reduces development effort, at the cost of some performance and platform-specific polish compared to native. Neither approach is universally better; the right choice depends on your product's requirements.",
  },
  {
    q: "Can you develop both iPhone and iPad applications?",
    a: "Yes. We build applications for iPhone, iPad, or both, with layouts designed specifically for each device type rather than simply stretching a phone interface onto a larger screen. iPad applications often take advantage of multitasking and larger-screen workflows that don't apply to iPhone, particularly for business and productivity-focused apps, so we design and test each device experience deliberately.",
  },
  {
    q: "Can an iOS app integrate with an existing website?",
    a: "Yes, iOS applications can be integrated with an existing website through shared APIs and backend systems, allowing data like user accounts, orders, or content to stay synchronized between the two. The specific integration approach depends on how your website's backend is built and what data needs to flow between the platforms. This is a common requirement for businesses extending an existing web presence into mobile.",
  },
  {
    q: "Can an iOS app integrate with an ERP or CRM?",
    a: "Yes. iOS applications can be integrated with ERP and CRM systems through APIs, allowing the mobile app to read and write data like customer records, inventory levels, or order status in real time. These integrations typically require secure authentication, reliable data synchronization, and error handling to keep data consistent between systems, particularly for enterprise applications with high transaction volumes.",
  },
  {
    q: "Can you develop the backend and APIs for an iOS application?",
    a: "Yes, we build the full backend and API layer that powers iOS applications, including databases, authentication systems, business logic, and the REST or GraphQL APIs the mobile client communicates with. Backend architecture is designed to match the specific data and scalability requirements of the application, rather than applying a generic setup regardless of project needs.",
  },
  {
    q: "How do you secure an iOS application?",
    a: "Security is applied throughout the application lifecycle, including HTTPS for all network traffic, secure authentication and authorization, Keychain for secure on-device credential storage, encrypted data transmission and storage, input validation, and proper access control. We also implement biometric authentication through Apple's secure Face ID and Touch ID frameworks where appropriate, and keep dependencies updated to avoid known vulnerabilities. Security monitoring continues after launch as well.",
  },
  {
    q: "Can you build an ecommerce iOS application?",
    a: "Yes, we build iOS ecommerce applications including product catalogs, search and filtering, shopping carts, secure payment processing, and order tracking. Ecommerce apps typically require careful backend design to handle inventory, transactions, and integrations with payment gateways and shipping systems reliably, along with thorough testing of checkout and payment flows — including any applicable App Store in-app purchase requirements — before launch.",
  },
  {
    q: "Can you develop an iOS MVP for a startup?",
    a: "Yes. iOS MVP development is one of our core services for startups, focused on identifying the smallest set of user journeys needed to validate your core product idea with real users. We prioritize workflows based on your goals, build in analytics from the start, and structure the codebase so it can scale once the concept is validated, rather than requiring a full rebuild later.",
  },
  {
    q: "Can you modernize an existing iOS application?",
    a: "Yes, iOS app modernization is one of our core services, covering everything from updating outdated Swift versions and dependencies to migrating from UIKit to SwiftUI, refactoring architecture, or performing a full rebuild where warranted. The right approach depends on how much of the existing codebase is salvageable and how critical continuity is during the transition, which we assess as part of project scoping.",
  },
  {
    q: "How do you test iOS applications before launch?",
    a: "We test across a representative range of supported iPhone and iPad models and iOS versions relevant to the target user base, covering functional, UI, performance, and security testing alongside device- and OS-specific compatibility checks. We use TestFlight, Apple's official beta distribution platform, to get builds in front of internal stakeholders and testers before submitting for public release, which helps catch issues before they reach a wider audience or the App Store review team.",
  },
  {
    q: "Can you help publish an iOS app on the Apple App Store?",
    a: "Yes, we handle App Store deployment including App Store Connect setup, metadata and screenshot preparation, app privacy disclosures, app signing and provisioning, TestFlight distribution, and production release management. Apple's App Store review process and guidelines are ultimately controlled by Apple and can change over time, so while we prepare submissions carefully to align with current requirements, approval cannot be guaranteed by any development partner.",
  },
  {
    q: "Can US and Canadian businesses hire an iOS app development company remotely?",
    a: "Yes, remote iOS app development is a standard and widely used working model for both US and Canadian businesses, allowing companies across states, provinces, and time zones to work with a development team without requiring in-person meetings. We work with businesses across the United States and Canada using structured communication and project management processes designed for remote collaboration throughout discovery, design, development, and delivery.",
  },
];
