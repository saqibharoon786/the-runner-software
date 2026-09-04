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

export const reactNativeDevelopmentSeo = {
  title: "React Native Development Services | The Runner",
  description:
    "Custom React Native development for scalable Android & iOS apps. Expert cross-platform engineering, integrations & support for USA and Canada businesses.",
  h1: "Custom React Native Development for Scalable Mobile Applications",
  canonicalPath: "/services/web-mobile-development/react-native-development",
  ogTitle: "React Native Development Services | The Runner Software Solutions",
  ogDescription:
    "Custom React Native development for Android and iOS from a shared codebase — cross-platform engineering, native modules, backend/API development, and long-term support.",
  twitterTitle: "React Native Development Services | The Runner Software Solutions",
  twitterDescription:
    "Custom React Native development for Android and iOS from a shared codebase — cross-platform engineering, native modules, backend/API development, and long-term support.",
  imageAlt: "Custom React Native development services by The Runner Software Solutions",
};

export const reactNativeHero = {
  intro:
    "The Runner Software Solutions builds custom React Native applications for Android and iOS from a single, shared codebase — combining React's component architecture with JavaScript and TypeScript to deliver cross-platform apps without maintaining two separate native builds. Our React Native engineering covers UI development, native module integration where platform-specific functionality is required, backend and API architecture, third-party integrations, security, and performance optimization.",
  closing:
    "We work with startups building an MVP that needs to reach both app stores quickly, and with enterprises running React Native applications that need modernization, native module development, or deeper integration with ERP and CRM systems. Every build accounts for the realities of shipping a production app: dependency management, OS compatibility as Android and iOS evolve, and the testing discipline cross-platform apps require.",
  primaryCta: "Start Your React Native Project",
  secondaryCta: "Talk to a React Native Development Expert",
};

export const whatIsReactNative = {
  title: "What Is React Native Development?",
  intro:
    "React Native development is the process of building mobile applications using React Native — a framework that lets developers write application logic and UI in JavaScript or TypeScript, using React's component model, while rendering to genuine native UI components on Android and iOS rather than a web view. The result is a single, largely shared codebase that runs on both platforms, with the ability to drop into native Kotlin/Java or Swift/Objective-C code when a feature requires direct platform access.",
  conceptsIntro: "Key concepts that define React Native development:",
  concepts: [
    "React provides the component-based architecture, state management patterns, and declarative UI paradigm that React Native is built on",
    "JavaScript/TypeScript is the language application logic is written in, with TypeScript adding static typing for larger, longer-lived codebases",
    "Android and iOS are the two platforms a single React Native codebase can target simultaneously",
    "Native modules allow React Native code to call directly into native Android or iOS code when a feature needs capabilities the framework doesn't expose by default",
    "Native APIs — device hardware and OS-level services (camera, GPS, biometrics, notifications) — are accessible through React Native's core libraries or custom native modules",
    "Components are the reusable building blocks of the UI, written once and shared across both platforms in most cases",
    "Shared code — the majority of business logic, state management, and UI in a typical React Native app is written once and runs on both platforms",
    "Backend/API systems — most React Native applications depend on backend services for data, authentication, and business logic, communicating over REST or GraphQL APIs",
  ],
  closing:
    "Businesses consider React Native when they need to reach both Android and iOS users without maintaining two fully separate native codebases, when their team has existing JavaScript or React expertise, or when the product's iteration speed benefits from a shared codebase. React Native isn't automatically the right choice for every mobile project — see the dedicated comparison sections below on when native development or Flutter might be a better fit.",
};

export type ReactNativeServiceItem = {
  title: string;
  desc: string;
  link?: { before: string; text: string; href: string; after: string };
};

export const reactNativeServices: ReactNativeServiceItem[] = [
  {
    title: "Custom React Native App Development",
    desc: "We design React Native applications around your specific business requirements and user workflows, rather than adapting a generic template — including custom UI, business logic, and integration architecture built for your actual product.",
  },
  {
    title: "Cross-Platform React Native Development",
    desc: "React Native's core value is a shared codebase: business logic, most UI components, and state management written once and running on both Android and iOS, with platform-specific implementation applied selectively where a feature genuinely needs to behave differently per platform.",
  },
  {
    title: "React Native UI/UX Development",
    desc: "We design user flows, wireframes, and prototypes before development, building toward a reusable component library and design system — with responsive layouts, animations, and accessibility considered from the start, and platform-specific UI conventions respected where they matter to the user experience.",
  },
  {
    title: "React Native MVP Development",
    desc: "For early-stage products, we scope a minimum feature set that validates your core assumptions, instrument the app with analytics from day one, and build the architecture to support iterative development as user feedback comes in.",
  },
  {
    title: "Enterprise React Native Development",
    desc: "Enterprise React Native applications — employee tools, field-service apps, partner applications — need secure authentication, role-based access, ERP/CRM integration, and reporting. Cross-platform development is particularly valuable at the enterprise level, where reaching both Android and iOS users with a single engineering team reduces long-term maintenance overhead.",
    link: {
      before: "For enterprise mobile projects that are part of a broader platform initiative, our ",
      text: "software product development",
      href: "/services/software-development/software-product-development",
      after: " team can support the wider technology roadmap alongside the mobile application.",
    },
  },
  {
    title: "React Native Ecommerce Development",
    desc: "We build mobile commerce experiences in React Native — product catalogs, search and filtering, cart and checkout, payment integration, order tracking, customer profiles, and push notifications for order updates and promotions.",
  },
  {
    title: "React Native Backend Development",
    desc: "Most React Native applications depend on backend infrastructure — APIs, authentication, databases, business logic, and cloud infrastructure — built specifically to support mobile client requirements like efficient payloads and reliable offline/online transitions.",
  },
  {
    title: "React Native API Integration",
    desc: "We build and integrate REST APIs, and GraphQL where appropriate, connecting React Native apps to backend services and third-party platforms, with proper authentication, data synchronization, and webhook handling.",
  },
  {
    title: "React Native App Migration",
    desc: "We support migration to React Native from native Android or iOS codebases, from older React Native versions, or from legacy hybrid frameworks — always beginning with a technical audit of the existing application before proposing a migration strategy.",
  },
  {
    title: "React Native App Modernization",
    desc: "For applications built on outdated React Native versions or accumulated technical debt, we address outdated dependencies, architecture issues, performance problems, and security gaps without necessarily requiring a full rebuild.",
  },
  {
    title: "React Native App Maintenance",
    desc: "Post-launch, React Native apps need ongoing dependency updates, React Native version upgrades, OS compatibility maintenance, bug fixes, security patching, and performance monitoring as Android and iOS continue to evolve.",
  },
];

export const reactEcosystemSection = {
  title: "React Native + React Ecosystem",
  intro:
    "React Native is built on React, but writing React Native code isn't the same as writing React for the web — it's important to understand both the connection and the difference.",
  carriesOverTitle: "What carries over from React:",
  carriesOver: [
    "Components — the same mental model of building UI from composable, reusable components",
    "Props and state — the same patterns for passing data down and managing component-local state",
    "Hooks — useState, useEffect, useContext, and custom hooks work the same way conceptually in React Native as in React for web",
    "Reusable logic — business logic, custom hooks, and state management patterns are often directly transferable in concept",
    "Component architecture — the same principles of composition, lifting state up, and separating presentational from container components apply",
  ],
  differentTitle: "What's genuinely different:",
  different:
    "React Native doesn't render HTML — there's no div or span; instead, React Native provides its own primitive components (View, Text, Image, ScrollView, etc.) that map to native platform UI elements. Styling uses a JavaScript-based system similar to CSS but not identical to it, with no direct CSS file support. Navigation, gestures, and platform APIs work differently than in a browser environment. React web code cannot simply be copied into a React Native project — the component tree, styling approach, and available APIs are fundamentally different, even though the underlying React concepts transfer directly.",
  closing:
    "For teams with existing React web expertise, this means a real head start on the conceptual model and development patterns, but genuine ramp-up time is still required to learn React Native's specific component library, styling system, and native integration points.",
};

export const typescriptSection = {
  title: "JavaScript & TypeScript for React Native",
  intro:
    "React Native applications are written in JavaScript or TypeScript. While JavaScript works perfectly well for smaller projects, TypeScript adds meaningful value as application size and team size grow:",
  benefits: [
    "Type safety — catching a whole class of bugs at compile time rather than at runtime in production",
    "Interfaces — clearly defining the shape of data flowing through the app, particularly valuable for API response handling",
    "Generics, used where appropriate, allow reusable components and functions to work safely across multiple data types",
    "Asynchronous programming — Promises and async/await are core to how React Native apps handle API calls, and TypeScript's type checking extends cleanly to async code",
    "Maintainability — type definitions serve as living documentation for developers joining the project later",
    "Developer productivity — IDE autocomplete and inline error detection reduce debugging time",
    "Code quality — enforced typing tends to surface design issues earlier in development",
  ],
  closing:
    "We generally recommend TypeScript for any React Native application beyond a small prototype, given how much it reduces a specific, common category of runtime errors — but the decision depends on team familiarity and project scope, which we assess during discovery.",
};

export const architectureSection = {
  title: "React Native Architecture",
  intro: "A React Native application is built from several distinct layers:",
  layers: [
    "Presentation layer — the components and screens users interact with directly",
    "Components — reusable UI building blocks, ideally organized into a coherent, shared component library",
    "Navigation — managing screen transitions and the app's overall information architecture",
    "State management — handling application data and how it flows through the component tree",
    "Business logic — the rules governing how the app actually behaves, ideally separated from UI code for testability",
    "Service layer — a clear abstraction between UI code and external calls (APIs, storage, device features)",
    "API layer — how the app communicates with backend services",
    "Data layer — how data is structured, cached, and kept consistent across the app",
    "Local storage — persisting data on-device for offline access or performance",
    "Backend — the server-side systems the app depends on for data and business logic",
    "Authentication — verifying user identity and managing session state",
    "Caching — reducing redundant network requests and improving perceived performance",
  ],
  stateIntro: "State and data management approaches we select from based on project complexity:",
  stateApproaches: [
    "Redux Toolkit — well suited to larger applications with complex, shared state and a need for predictable, centralized state management",
    "Context API — appropriate for simpler state-sharing needs where a full state management library would be unnecessary overhead",
    "Zustand — a lighter-weight alternative to Redux for applications that need shared state management without Redux's boilerplate",
    "React Query / TanStack Query — purpose-built for server state (API data, caching, refetching, synchronization), often used alongside a separate solution for local UI state",
  ],
  closing:
    "We don't default to the most feature-rich library for every project. A small app with limited shared state doesn't need Redux Toolkit's overhead; a data-heavy app with frequent API interaction genuinely benefits from TanStack Query's caching and synchronization capabilities regardless of app size.",
};

export const newArchitectureSection = {
  title: "React Native New Architecture",
  intro:
    "React Native's modern architecture represents a significant shift in how the JavaScript and native layers of an app communicate, with real implications for performance and native integration:",
  technologies: [
    "Fabric — React Native's new rendering system, changing how the UI layer communicates with native platform views to reduce overhead in rendering and updates",
    "TurboModules — the modernized native module system, enabling native modules to be loaded lazily rather than all at app startup, with more direct, type-safe communication between JavaScript and native code",
    "JSI (JavaScript Interface) — allows JavaScript to hold direct references to native objects and call native methods synchronously, replacing the older asynchronous bridge",
    "Bridgeless architecture, where relevant, removes the traditional React Native bridge entirely, with JSI handling communication directly",
  ],
  closing:
    "What this means practically: the new architecture reduces communication overhead between JavaScript and native code, which matters most for apps with frequent, high-volume interaction between the two layers — heavy list rendering, animations, or apps making extensive use of custom native modules. We don't make specific performance-multiplier claims, since actual impact depends heavily on the specific application's architecture and usage patterns.",
};

export const featuresTable = {
  title: "React Native Features and Their Business Value",
  intro: "Feature scope should reflect what your specific users need to accomplish — adding capability without a clear user or business justification adds development and maintenance cost without proportional value.",
  rows: [
    { feature: "User registration & login", value: "The entry point for personalized experiences and secure data access" },
    { feature: "Social authentication", value: "Reduces signup friction where appropriate to the user base" },
    { feature: "User profiles & role-based access", value: "Personalizes the experience and controls what different users can see or do" },
    { feature: "Push & in-app notifications", value: "Drives re-engagement and delivers timely information" },
    { feature: "Search & filters", value: "Reduces friction navigating large content or product sets" },
    { feature: "Messaging", value: "Supports in-app communication rather than routing users to external tools" },
    { feature: "File uploads, camera & photo library access", value: "Enables document capture, profile photos, and content-driven workflows" },
    { feature: "Location, GPS & maps", value: "Powers delivery tracking, nearby search, and location-aware features" },
    { feature: "Biometrics", value: "Enables fast, secure authentication using Face ID or fingerprint sensors" },
    { feature: "Payments & subscriptions", value: "Enables monetization or transactional workflows within the app" },
    { feature: "Shopping carts, orders & booking", value: "Supports commerce and reservation-based workflows" },
    { feature: "Reviews & ratings", value: "Builds trust and provides product/service feedback signals" },
    { feature: "Offline functionality", value: "Keeps critical workflows usable without reliable connectivity" },
    { feature: "Admin dashboards", value: "Gives business teams visibility and control over app data" },
    { feature: "API integrations", value: "Connects the app to the broader systems a business already runs on" },
  ],
};

export const uiUxSection = {
  title: "React Native UI/UX Development",
  intro: "Good React Native UI/UX is built through deliberate design work, not ad-hoc component assembly:",
  considerations: [
    "Reusable components — a shared component library that keeps the UI consistent and reduces duplicate work as the app grows",
    "Responsive layouts — adapting cleanly across the range of screen sizes within each platform",
    "Platform-specific UI — respecting Android's Material Design conventions and iOS's Human Interface Guidelines where platform-native feel matters",
    "Accessibility — ensuring the app is usable with screen readers, adequate touch target sizing, and appropriate color contrast",
    "Touch interactions — gestures and interaction patterns that feel natural for mobile use",
    "Typography and navigation — consistent, legible type systems and navigation patterns appropriate to the app's information architecture",
    "Onboarding — helping new users understand the app's value without excessive friction",
    "Forms, error states, loading states, and empty states — designed deliberately, since these commonly occurring states significantly affect perceived app quality",
    "Design systems — a governing set of components, spacing, and typography rules that keep the app visually coherent as it grows",
    "Animations — used purposefully to communicate state changes and improve perceived responsiveness, not as decoration",
  ],
  closing:
    "React Native supports building a UI that feels consistent across platforms while still respecting platform-specific conventions where users genuinely expect them — the framework doesn't force a choice between identical everywhere and fully native feel everywhere.",
};

export const backendSection = {
  title: "React Native Backend & API Development",
  intro: "Most React Native applications depend on backend services rather than functioning entirely on-device. Backend development typically covers:",
  components: [
    "REST APIs, and GraphQL where a project benefits from flexible, client-driven data queries",
    "Authentication and authorization — verifying identity and controlling access to protected resources",
    "Databases structured around the app's actual data model and usage patterns",
    "Business logic — server-side rules governing application behavior",
    "File storage — for user-uploaded images, documents, or media",
    "Notifications — server-side infrastructure triggering push notifications based on app events",
    "Webhooks — for real-time, event-driven communication with external systems",
    "Third-party APIs — connecting the app to external services and platforms",
    "Logging and monitoring — visibility into backend behavior, errors, and performance",
  ],
  closing:
    "Backend technology selection depends on project requirements: Node.js and Express for JavaScript-consistent full-stack development, PHP and Laravel where hosting environment or team expertise favors it, and databases like PostgreSQL, MySQL, or MongoDB chosen based on how structured or flexible the application's data model needs to be.",
};

export const integrationsSection = {
  title: "React Native API Integrations",
  intro: "React Native apps frequently need to connect to external systems and services. Integration work typically covers:",
  systems: [
    "REST APIs and GraphQL as the standard integration layer",
    "Payment gateways for in-app transactions",
    "Maps for location-based features",
    "Analytics platforms for usage and engagement tracking",
    "CRM systems — pushing customer or lead data captured through the app",
    "ERP systems — syncing operational or inventory data",
    "Ecommerce platforms — connecting a mobile shopping experience to product and order data",
    "Accounting systems — reducing manual transaction reconciliation",
    "Shipping platforms — for delivery and fulfillment tracking",
    "Communication platforms — for in-app or transactional messaging",
    "Customer support systems — surfacing help content or tickets within the app",
    "Internal business systems — connecting mobile workflows to existing operational software",
  ],
  closing:
    "Technically, integration work involves authentication, data mapping, synchronization logic, retries and webhook handling, error handling, logging, and API versioning awareness. We don't claim specific completed integrations beyond what's verified for a given engagement.",
};

export const nativeModulesSection = {
  title: "React Native Native Module Development",
  intro:
    "React Native's JavaScript layer covers most application needs, but some functionality requires direct access to native Android or iOS code — this is where native module development comes in.",
  whenUsefulTitle: "When native modules are useful:",
  whenUseful: [
    "Accessing device hardware or SDKs not exposed by React Native's core libraries or well-maintained community packages",
    "Integrating with platform-specific services — Bluetooth connectivity, specialized camera controls, background services, or biometric authentication flows",
    "Wrapping an existing native SDK for use within a React Native app",
    "Achieving performance characteristics for specific operations that benefit from native-level execution",
  ],
  approachTitle: "Technical approach:",
  approach: [
    "Android native modules are typically written in Kotlin, with Java used where a project's existing codebase requires it",
    "iOS native modules are typically written in Swift, with Objective-C used where integration with existing Objective-C code is necessary",
    "Native modules expose native functionality to the JavaScript layer through React Native's module system — traditionally via the bridge, and increasingly via TurboModules under the New Architecture",
    "Common use cases include camera and hardware integration, Bluetooth connectivity, biometric authentication, background services, push notification handling, and wrapping platform-specific SDKs",
  ],
  closing:
    "Native module development requires genuine platform-specific engineering knowledge — Kotlin/Java for Android, Swift/Objective-C for iOS — in addition to React Native expertise.",
};

export const securitySection = {
  title: "React Native Security",
  intro: "Security is addressed throughout the development lifecycle, not as a final pre-launch step. Our approach covers:",
  practices: [
    "HTTPS enforcement for all network communication",
    "Secure authentication with proper session and token expiration handling",
    "Authorization ensuring users only access what they're permitted to",
    "Secure token storage — using Keychain on iOS and Android's secure storage APIs, rather than plain local storage",
    "Encryption for sensitive data, both in transit and, where appropriate, at rest",
    "API security — authentication, rate limiting, and input validation on every endpoint",
    "Input validation across all forms and data entry points",
    "Access control appropriate to user roles and permission levels",
    "Dependency management — keeping React Native, native modules, and third-party libraries patched against known vulnerabilities",
    "Secure logging that avoids capturing sensitive data",
    "Vulnerability management — ongoing monitoring for newly disclosed issues in dependencies",
    "Biometric authentication, implemented using platform-native APIs for secure, low-friction login",
  ],
  closing:
    "Security is addressed across architecture, development, testing, and deployment — not treated as a checklist item at the end. We do not claim compliance with HIPAA, PCI DSS, SOC 2, or ISO 27001 unless specifically verified for a given engagement.",
};

export const performanceSection = {
  title: "React Native Performance Optimization",
  intro: "Performance directly affects user experience and app retention. Key considerations specific to React Native include:",
  areas: [
    "JavaScript thread vs. UI thread — blocking the JavaScript thread can cause visible UI lag",
    "Unnecessary re-renders — addressed through careful component structure and memoization",
    "Memoization — using React.memo, useMemo, and useCallback deliberately",
    "List optimization — using FlatList or similar virtualized list components correctly for long scrollable lists",
    "Image optimization — appropriately sized and cached images",
    "Lazy loading — loading screens and heavy components only when needed",
    "Caching — reducing redundant network requests for data that doesn't change frequently",
    "API optimization — efficient backend calls that don't block perceived app responsiveness",
    "Memory usage — managing memory carefully, particularly for image-heavy or list-heavy screens",
    "Startup performance — minimizing the time from app launch to usable interface",
    "Native modules, used where JavaScript-layer performance genuinely isn't sufficient",
    "Hermes — React Native's JavaScript engine optimized for mobile, where appropriate for the project",
    "Performance monitoring — ongoing visibility into real-world app performance",
  ],
  closing:
    "We don't promise specific performance scores, since real-world performance depends on device conditions, network environment, and actual usage patterns.",
};

export const testingSection = {
  title: "React Native Testing & QA",
  intro: "Thorough testing matters given the range of devices and OS versions React Native apps run across. QA typically covers:",
  types: [
    "Unit testing — verifying individual functions and logic in isolation",
    "Component testing — validating that individual UI components render and behave correctly",
    "Integration testing — confirming that components, state management, and API calls work correctly together",
    "End-to-end testing — validating complete user flows through the actual app",
    "API testing — validating backend endpoints independent of the frontend",
    "Regression testing — ensuring new changes don't break existing functionality",
    "UI testing — checking visual consistency and correct behavior across screen sizes",
    "Android testing and iOS testing — both need dedicated testing attention",
    "Device testing — across a representative range of physical devices",
    "Performance testing — under realistic device and network conditions",
    "Security testing — reviewing authentication, data handling, and API security",
    "Usability testing — validating that real users can complete key workflows",
    "Network-condition testing — verifying app behavior under slow, intermittent, or offline connectivity",
    "Crash monitoring — identifying and resolving stability issues in production",
  ],
  closing: "We select testing tools and frameworks appropriate to the project's stack and requirements rather than defaulting to a fixed toolset regardless of fit.",
};

export const deploymentSection = {
  title: "React Native Deployment",
  androidTitle: "Android deployment",
  android:
    "Involves the Google Play Console, including application signing, building release builds, using testing tracks before full release, and managing app versioning across releases.",
  iosTitle: "iOS deployment",
  ios:
    "Involves App Store Connect, including certificates and provisioning profiles, TestFlight for beta distribution, and release management appropriate to your rollout strategy.",
  beyondTitle: "Beyond platform-specific submission, deployment also involves:",
  beyond: [
    "Environment configuration — managing distinct settings for development, staging, and production environments",
    "CI/CD — automated build and deployment pipelines that make releases reliable and repeatable",
    "Staging — a pre-production environment for final validation before release",
    "Production — the live environment your users actually interact with",
    "Monitoring — post-release visibility into app health, crashes, and performance",
  ],
  disclaimer:
    "We prepare and support submissions for both platforms, but we don't guarantee App Store or Google Play approval — review outcomes depend on each platform's specific policies at the time of submission.",
};

export const expoVsCli = {
  title: "Expo vs. React Native CLI",
  rows: [
    { factor: "Development speed", expo: "Faster initial setup and iteration, especially for standard app needs", cli: "More setup required, but full control from the start" },
    { factor: "Native access", expo: "Growing native module support via Expo modules, with EAS Build enabling custom native code", cli: "Full, unrestricted native access from day one" },
    { factor: "Configuration", expo: "Simplified, managed configuration", cli: "Manual configuration of native build settings" },
    { factor: "Build process", expo: "Managed builds via EAS, or local builds", cli: "Fully manual/local native build process" },
    { factor: "Libraries", expo: "Broad support for common needs; some specialized native libraries may require additional configuration", cli: "Full compatibility with any React Native native library" },
    { factor: "Custom native modules", expo: "Supported via config plugins and EAS Build, with some added complexity", cli: "Directly supported without workarounds" },
    { factor: "Team requirements", expo: "Lower native development expertise required for many projects", cli: "Native (Kotlin/Swift) expertise more directly useful day-to-day" },
    { factor: "Project complexity", expo: "Well suited to standard apps without deep custom native requirements", cli: "Better suited to apps with extensive native customization needs" },
    { factor: "Maintenance", expo: "Expo's managed updates simplify some maintenance tasks", cli: "Full manual control over native dependency updates" },
  ],
  closing:
    "Neither approach is universally better. Expo has matured significantly and now supports most native module needs through EAS Build and config plugins, making it a strong default for many projects. The bare React Native CLI workflow makes more sense for applications with extensive, complex native customization requirements. We assess this based on your specific feature requirements during discovery.",
};

export const developmentProcess = [
  { step: 1, title: "Discovery", desc: "We learn your business, users, and the problem the app needs to solve." },
  { step: 2, title: "Requirements Analysis", desc: "We document functional requirements, platform needs, and integration scope." },
  { step: 3, title: "Product Strategy", desc: "We define the app's core value proposition and how it fits your broader business goals." },
  { step: 4, title: "Feature Prioritization", desc: "We identify essential features versus those that can wait, keeping initial scope achievable." },
  { step: 5, title: "Architecture Planning", desc: "We design the technical foundation, including state management approach, Expo vs. CLI workflow, and backend structure." },
  { step: 6, title: "UI/UX Design", desc: "We design user flows and interfaces, validated before development begins." },
  { step: 7, title: "Prototype", desc: "We build a clickable prototype so you can review the experience before full development investment." },
  { step: 8, title: "React Native Development", desc: "We build the application according to the approved design and architecture." },
  { step: 9, title: "Backend/API Development", desc: "We build the server-side systems the app depends on." },
  { step: 10, title: "Third-Party Integrations", desc: "We connect the app to any required external systems, testing each thoroughly." },
  { step: 11, title: "Native Module Development", desc: "Where platform-specific functionality is needed, we build and integrate native modules for Android and iOS." },
  { step: 12, title: "QA & Testing", desc: "We test functionality, performance, and behavior across relevant devices and OS versions." },
  { step: 13, title: "Security Validation", desc: "We review authentication, data handling, and API security before launch." },
  { step: 14, title: "Performance Optimization", desc: "We tune startup time, rendering performance, and resource usage." },
  { step: 15, title: "Staging", desc: "We validate the app in a production-equivalent environment before release." },
  { step: 16, title: "Android Deployment", desc: "We manage Google Play Console submission and release." },
  { step: 17, title: "iOS Deployment", desc: "We manage App Store Connect submission and release." },
  { step: 18, title: "Monitoring", desc: "We track app health, crashes, and performance immediately post-launch." },
  { step: 19, title: "Maintenance", desc: "We provide ongoing support as OS versions, dependencies, and business needs evolve." },
];

export const mvpSection = {
  title: "React Native MVP Development",
  intro: "MVP development in React Native focuses on validating a product idea with the smallest reasonable feature set:",
  items: [
    "MVP scope — the minimum set of features that still delivers real value and tests your core assumption",
    "Core workflows — focusing engineering effort on the one or two flows that matter most",
    "Feature prioritization — separating what's essential from what can be added after validation",
    "Validation — building specifically to learn whether your core hypothesis holds",
    "Analytics — instrumented from day one so early usage data informs what to build next",
    "Feedback — creating mechanisms to learn from real users quickly",
    "Iterative releases — treating the MVP as a starting point that evolves based on real usage",
    "Scalable architecture — building the technical foundation so a validated MVP can grow without a full rebuild",
  ],
  closing:
    "React Native is particularly useful for startups that want to reach both Android and iOS users while sharing substantial application logic across platforms, keeping engineering cost lower than maintaining two separate native codebases during the validation phase.",
};

export const enterpriseSection = {
  title: "Enterprise React Native Development",
  intro:
    "Enterprise React Native applications serve internal or business-critical functions, which shifts the technical priorities:",
  useCases: [
    "Employee, customer, field-service, and partner applications — each with distinct access and workflow requirements",
    "Logistics applications — dispatch, delivery tracking, and driver-facing tools, often with offline requirements",
    "Internal workflow applications — digitizing processes that currently run manually",
    "Secure authentication and role-based access — critical for apps handling sensitive business or customer data",
    "ERP and CRM integrations — connecting mobile workflows to core business systems",
    "Reporting — giving management visibility into field or operational activity",
    "Offline functionality — essential where connectivity can't be assumed",
    "Centralized administration — managing users, permissions, and content across the organization",
    "Scalability and monitoring — supporting real usage volume with visibility into system health",
  ],
  closing:
    "Enterprise-specific technical challenges in React Native include managing native module dependencies across a larger codebase, coordinating React Native version upgrades across a team, and ensuring the shared codebase strategy doesn't create bottlenecks when platform-specific requirements diverge significantly.",
};

export const migrationSection = {
  title: "React Native App Migration",
  intro:
    "Migrating to React Native — from native Android, native iOS, an older React Native version, or a legacy hybrid framework — requires careful assessment before any code is written:",
  items: [
    "Technical audit — understanding the existing application's architecture, dependencies, and functionality",
    "Dependency analysis — identifying which native modules, libraries, or platform-specific code need equivalents",
    "Architecture assessment — evaluating whether the existing app's structure can inform the new architecture",
    "Migration strategy — deciding between a full rewrite and an incremental approach based on audit findings",
    "Incremental migration — where feasible, migrating screen-by-screen or feature-by-feature",
    "Testing — validating that migrated functionality behaves correctly against the original application",
    "Release planning — a controlled rollout that manages risk during the transition",
    "Rollback considerations — planning for the possibility that a migration phase needs to be reversed",
  ],
  closing:
    "We don't recommend a migration approach without first auditing the existing application — the right strategy depends heavily on what's actually in the current codebase.",
};

export const modernizationSection = {
  title: "React Native App Modernization",
  intro: "Applications running on outdated React Native versions accumulate specific, recognizable problems:",
  problems: [
    "Outdated dependencies — libraries that haven't been updated, sometimes with known security vulnerabilities",
    "Old architecture — apps built before the New Architecture missing its performance and native-integration benefits",
    "Poor performance — often from unaddressed re-render issues, unoptimized lists, or outdated native module implementations",
    "Inconsistent UI — accumulated design debt as features were added without a governing design system",
    "Technical debt — shortcuts taken under deadline pressure that make ongoing development slower and riskier",
    "Security issues — accumulated over time as dependencies age without updates",
    "Outdated APIs — both the app's own API layer and third-party integrations that may have changed",
    "State management problems — state logic that's grown unwieldy without a clear governing pattern",
    "Testing gaps — insufficient test coverage that makes changes riskier than they should be",
    "CI/CD improvements — manual or fragile deployment processes that could be automated",
  ],
  closing:
    "Modernization vs. rebuilding depends on the state of the existing codebase. If the architecture is fundamentally sound but outdated, targeted modernization is often more cost-effective than starting over. If technical debt has accumulated to the point where the existing architecture actively works against further development, a full rebuild may ultimately cost less.",
};

export const maintenanceSection = {
  title: "React Native App Maintenance",
  intro: "React Native applications need ongoing technical attention because both the framework and its dependencies evolve continuously:",
  items: [
    "React Native upgrades — new versions bring performance improvements, bug fixes, and eventually deprecate older APIs",
    "React upgrades — React Native's underlying React version also needs periodic updates",
    "Dependency updates — third-party libraries and native modules need regular maintenance",
    "Android OS changes and iOS changes — both platforms release regular updates that can affect app behavior",
    "Bug fixing — addressing issues that surface in real-world production use",
    "Security updates — patching newly discovered vulnerabilities in the framework or dependencies",
    "Performance monitoring — catching degradation before it affects users broadly",
    "Crash monitoring — identifying and resolving stability issues quickly",
    "API changes — third-party services and integrations evolve their own APIs over time",
    "Feature enhancements — ongoing development as business needs and user feedback evolve",
  ],
  closing:
    "Maintenance is essential for long-term application reliability because React Native's ecosystem moves quickly — falling significantly behind on versions makes future upgrades progressively harder and riskier.",
};

export const industriesSection = [
  { industry: "Healthcare", desc: "Patient portals, appointment management, and secure provider-patient communication, with particular attention to data handling." },
  { industry: "Finance", desc: "Secure dashboards, account access, and transaction workflows, with strong authentication requirements." },
  { industry: "Ecommerce", desc: "Product browsing, checkout, payments, and order tracking." },
  { industry: "Education", desc: "Student portals, learning applications, and notification systems." },
  { industry: "Logistics", desc: "Driver applications, dispatching tools, and delivery tracking." },
  { industry: "Real Estate", desc: "Property search, lead management, and scheduling workflows." },
  { industry: "Manufacturing", desc: "Field-service applications and internal workflow tools." },
  { industry: "Retail", desc: "Mobile commerce and loyalty program integration." },
  { industry: "Travel", desc: "Booking workflows and itinerary management." },
  { industry: "SaaS", desc: "Companion mobile apps extending core product functionality." },
  { industry: "Professional Services", desc: "Client portals and secure scheduling or document sharing." },
];

export const usaSection = {
  title: "React Native Development for USA Businesses",
  body: "We work with businesses across the United States building custom React Native applications, including organizations based in New York, California, Texas, Florida, Washington, Illinois, Massachusetts, New Jersey, Georgia, and North Carolina, among other states. Whether you're a startup in California validating an MVP across both app stores, a logistics company in Texas building driver and dispatch tools, or an enterprise modernizing an existing React Native codebase, we scope architecture around your specific requirements. As a React Native development company serving the USA, our team works remotely with distributed stakeholders throughout discovery, development, and ongoing support.",
};

export const canadaSection = {
  title: "React Native Development for Canadian Businesses",
  body: "We also support Canadian businesses building custom React Native applications, including companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton, and Winnipeg. Canadian React Native projects sometimes involve bilingual interface requirements — particularly English/French support — which we factor into UI and content architecture where relevant. As with our US engagements, Canadian projects are handled remotely across discovery, development, and post-launch support.",
};

export const costSection = {
  title: "React Native App Development Cost",
  intro: "How much does React Native app development cost? Cost depends primarily on application complexity, the scope of native module development required, and backend/integration depth — not a single flat rate. Key cost drivers include:",
  factors: [
    "Overall application complexity and number of distinct features",
    "UI/UX complexity, including custom design vs. simpler interface patterns",
    "Whether both Android and iOS are targeted simultaneously",
    "Backend requirements and API development scope",
    "Third-party integrations (payments, ERP, CRM, analytics, etc.)",
    "Authentication complexity, including social or biometric login",
    "Payment and subscription functionality",
    "Location services and mapping features",
    "Messaging or real-time communication features",
    "Admin dashboard requirements",
    "Native module development, where platform-specific functionality is required",
    "Security requirements appropriate to data sensitivity",
    "Testing scope, including device and OS coverage",
    "Deployment and app-store submission support",
    "Ongoing maintenance needs",
  ],
  closing:
    "As a general industry reference point, a simple MVP with a narrow feature set typically represents a smaller investment than a full-featured business application with multiple integrations, which in turn is smaller than an enterprise application with extensive native module development and deep system integration. These are approximate industry patterns rather than The Runner Software Solutions pricing — actual cost depends entirely on your specific scope, confirmed through discovery.",
};

export const timelineSection = {
  title: "React Native Development Timeline",
  intro: "How long does React Native development take? Timeline depends heavily on scope. As general reference points:",
  examples: [
    "A simple MVP with a focused feature set typically has a shorter development cycle than a full-featured application",
    "A standard business application with moderate integrations generally requires more time to account for backend development and testing",
    "An ecommerce application involves added complexity around payments, catalogs, and order management, typically extending the timeline",
    "A complex enterprise application with extensive native module development, integrations, and strict security requirements generally requires the longest timeline",
  ],
  closing:
    "We don't promise fixed delivery dates upfront — a realistic timeline is confirmed after requirements are defined during discovery.",
};

export const rnVsFlutter = {
  title: "React Native vs. Flutter",
  intro:
    "Neither framework is universally superior — the right choice depends on team background, UI requirements, and how the mobile app fits into your broader technology stack.",
  rows: [
    { factor: "Programming language", rn: "JavaScript/TypeScript", flutter: "Dart" },
    { factor: "UI approach", rn: "Renders to native platform UI components", flutter: "Renders its own UI via its own rendering engine" },
    { factor: "Ecosystem", rn: "Large JavaScript/React ecosystem, extensive community packages", flutter: "Growing ecosystem, strong first-party widget library" },
    { factor: "Code reuse", rn: "High code sharing between iOS and Android, plus conceptual overlap with React web", flutter: "High code sharing between iOS and Android" },
    { factor: "Native integration", rn: "Native modules via TurboModules/JSI, mature community support", flutter: "Native integration via platform channels, also mature" },
    { factor: "Performance considerations", rn: "Strong performance, especially with the New Architecture (Fabric/JSI/Hermes)", flutter: "Strong, consistent performance from Flutter's own rendering engine" },
    { factor: "Development workflow", rn: "Familiar to teams with React/JavaScript backgrounds", flutter: "Requires learning Dart, distinct from most web stacks" },
    { factor: "Team skills", rn: "Leverages existing JavaScript/React talent pools", flutter: "Requires Dart-specific expertise, a smaller but growing talent pool" },
    { factor: "Libraries", rn: "Very large package ecosystem via npm", flutter: "Growing package ecosystem via pub.dev" },
    { factor: "Maintenance", rn: "Requires managing React Native, React, and native dependency updates", flutter: "Requires managing Flutter SDK and Dart package updates" },
    { factor: "Long-term considerations", rn: "Strong fit for teams already invested in JavaScript/React", flutter: "Strong fit for teams prioritizing pixel-consistent UI across platforms" },
  ],
  closing:
    "React Native makes sense when your team has existing JavaScript or React expertise, when you want to share concepts with a web application, or when you want to draw on JavaScript's very large talent pool. Flutter may make more sense when pixel-perfect, highly consistent UI across platforms is a priority.",
};

export const rnVsNative = {
  title: "React Native vs. Native Development",
  intro:
    "React Native is a strong choice for most business applications that need to reach both Android and iOS users. Native development may be preferable for applications requiring maximum performance or immediate access to brand-new platform capabilities.",
  rows: [
    { factor: "Performance", rn: "Strong for most apps; New Architecture narrows the gap further", android: "Maximum possible performance on Android", ios: "Maximum possible performance on iOS" },
    { factor: "Code sharing", rn: "High — most logic shared across both platforms", android: "None — Android-only codebase", ios: "None — iOS-only codebase" },
    { factor: "Platform-specific APIs", rn: "Available via native modules, sometimes with added integration work", android: "Full, immediate access", ios: "Full, immediate access" },
    { factor: "Development effort", rn: "Lower — single codebase for both platforms", android: "Higher — separate codebase required for iOS", ios: "Higher — separate codebase required for Android" },
    { factor: "UI consistency", rn: "Consistent across platforms with the ability to respect platform conventions", android: "Fully native Android feel", ios: "Fully native iOS feel" },
    { factor: "Native capabilities", rn: "Strong coverage via core libraries and native modules", android: "Immediate access to every new Android capability", ios: "Immediate access to every new iOS capability" },
    { factor: "Maintenance", rn: "One codebase, one team, generally lower long-term maintenance", android: "Requires Android-specific expertise", ios: "Requires iOS-specific expertise" },
    { factor: "Testing", rn: "Shared logic testing plus per-platform testing still required", android: "Testing scoped to Android only", ios: "Testing scoped to iOS only" },
    { factor: "Long-term considerations", rn: "Strong fit for most business applications targeting both platforms", android: "Best fit for Android-only, performance-critical products", ios: "Best fit for iOS-only, performance-critical products" },
  ],
  closing:
    "We assess this against your specific requirements rather than defaulting to either approach.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Smartphone, title: "Custom React Native engineering", desc: "Applications built around your specific business requirements, not a generic template." },
  { icon: Code2, title: "React expertise", desc: "Genuine understanding of React's component model, not just surface-level familiarity." },
  { icon: Layers, title: "JavaScript/TypeScript proficiency", desc: "Including TypeScript adoption for larger applications where type safety reduces risk." },
  { icon: RefreshCw, title: "Cross-platform development", desc: "Engineering discipline around genuinely shared code across Android and iOS." },
  { icon: CheckCircle2, title: "Android + iOS coverage", desc: "Real experience across both platforms' conventions, testing requirements, and deployment processes." },
  { icon: Server, title: "Scalable architecture", desc: "State management and backend architecture selected based on actual application complexity." },
  { icon: Zap, title: "Modern React Native architecture", desc: "Familiarity with Fabric, TurboModules, JSI, and Hermes." },
  { icon: Wrench, title: "Native module development", desc: "Genuine Kotlin/Swift engineering capability for platform-specific functionality." },
  { icon: Shield, title: "Security-conscious development", desc: "Security considered throughout the development lifecycle." },
  { icon: Building2, title: "Long-term support", desc: "Available for ongoing maintenance and feature development after launch." },
];

export const finalCta = {
  headline: "Let's Build Your React Native Application",
  intro:
    "If you're ready to build a cross-platform mobile app, need to modernize an existing React Native codebase, or want to explore whether React Native is the right fit for your product, we can help you plan a path forward.",
  steps: [
    "Share your requirements and product goals",
    "Define your users and the core workflows the app needs to support",
    "Review technical requirements, including platforms, backend, and integrations",
    "Select the right architecture — Expo vs. CLI, state management approach, native module needs",
    "Define development scope",
    "Plan implementation",
  ],
  primaryCta: "Start Your React Native Project",
  secondaryCta: "Discuss Your Mobile App Idea",
  contextualLinks: [
    {
      before: "For businesses weighing React Native against other mobile approaches, our broader ",
      text: "mobile app development",
      href: "/services/web-mobile-development/mobile-app-development",
      after: " service covers native iOS, native Android, and Flutter as well, and our ",
    },
    {
      before: "",
      text: "Flutter app development",
      href: "/services/web-mobile-development/flutter-app-development",
      after: " service is worth a look if pixel-consistent cross-platform UI is your top priority. If your primary requirement is native platform depth on Android specifically, our dedicated ",
    },
    {
      before: "",
      text: "Android app development",
      href: "/services/web-mobile-development/android-app-development",
      after: " service may be a better starting point.",
    },
  ],
};

export const reactNativeFaqs = [
  {
    q: "What is React Native development?",
    a: "React Native development is the process of building mobile applications using React Native — a framework that lets developers write application logic and UI in JavaScript or TypeScript, using React's component model, while rendering to genuine native UI components on Android and iOS. This produces a single, largely shared codebase that runs on both platforms, with the ability to integrate native Kotlin/Swift code when a feature requires direct platform access. React Native development covers UI, state management, backend/API integration, native module development, and app-store deployment for both platforms.",
  },
  {
    q: "What does a React Native development company do?",
    a: "A React Native development company designs, builds, tests, and maintains cross-platform mobile applications using React Native. This typically includes UI/UX design, application development, backend and API development, third-party integrations, native module development for platform-specific functionality, security implementation, and app-store deployment support for both Google Play and the Apple App Store. Many React Native development companies also handle migrations from native codebases or older frameworks, and provide ongoing maintenance covering React Native upgrades and dependency management.",
  },
  {
    q: "How much does React Native app development cost?",
    a: "React Native app development cost depends on application complexity, UI/UX requirements, backend and integration scope, and the amount of native module development required for platform-specific features. A simple MVP typically costs less than a full-featured business application, which in turn typically costs less than an enterprise application with extensive native modules and integrations. These are general industry patterns rather than fixed pricing — an accurate estimate requires a discovery conversation about your specific requirements.",
  },
  {
    q: "How long does it take to develop a React Native app?",
    a: "Development timelines vary significantly with scope. A simple MVP typically has a shorter timeline than a full-featured business application, and a complex enterprise application with extensive native module development and integrations generally requires the longest timeline. Factors affecting duration include feature complexity, backend scope, number of integrations, native module requirements, testing depth, and stakeholder approval speed. A realistic timeline is typically confirmed after requirements are defined during discovery.",
  },
  {
    q: "What is custom React Native development?",
    a: "Custom React Native development means building an application around a business's specific workflows, user needs, and integration requirements rather than a generic template. This includes custom UI, business logic tailored to your actual processes, and integration architecture designed for your systems. Custom development gives full control over the codebase and architecture, allowing the application to scale and evolve according to your specific long-term product roadmap.",
  },
  {
    q: "What programming languages are used with React Native?",
    a: "React Native applications are primarily written in JavaScript or TypeScript, using React's component model. TypeScript is generally recommended for larger applications given the type safety benefits it provides. When native module development is required, Android modules are typically written in Kotlin (or Java where needed), and iOS modules are typically written in Swift (or Objective-C where needed) — requiring genuine native platform expertise in addition to React Native skills.",
  },
  {
    q: "Is React Native good for both Android and iOS apps?",
    a: "Yes, React Native is specifically designed to build applications for both Android and iOS from a largely shared codebase, reducing development and maintenance effort compared to maintaining two separate native codebases. Most business logic and UI can be shared, with platform-specific implementation applied selectively where a feature genuinely needs different behavior per platform. It's a strong fit for most business applications targeting both platforms, though extremely performance-intensive apps may still favor native development.",
  },
  {
    q: "What is the difference between React Native and Flutter?",
    a: "React Native uses JavaScript/TypeScript and renders to native platform UI components, while Flutter uses Dart and renders its own UI through its own rendering engine, producing highly consistent visuals across platforms. React Native tends to suit teams with existing JavaScript/React expertise, while Flutter tends to suit teams prioritizing pixel-consistent cross-platform UI. Neither framework is universally superior — the right choice depends on team background and specific project requirements.",
  },
  {
    q: "What is the difference between React Native and native development?",
    a: "React Native builds applications from a shared codebase targeting both Android and iOS, offering lower development effort and strong performance for most apps. Native development builds fully separate applications per platform using each platform's own languages, offering maximum performance and immediate access to new platform capabilities at the cost of maintaining two codebases. React Native suits most business applications; native development suits performance-critical or platform-exclusive products.",
  },
  {
    q: "Can React Native apps use native Android and iOS features?",
    a: "Yes, React Native apps can access native device features through core libraries covering common needs like camera, location, and notifications, and through custom native modules when a feature requires deeper platform-specific integration — such as Bluetooth connectivity, specialized biometric flows, or wrapping a platform-specific SDK. Native module development requires genuine Kotlin/Swift engineering expertise alongside React Native skills.",
  },
  {
    q: "Can React Native integrate with an existing website?",
    a: "Yes, React Native applications can share backend infrastructure and APIs with an existing website, allowing consistent data and business logic across both platforms. This typically involves connecting the app to the same backend APIs the website uses, though the mobile app's frontend is built separately from the website's frontend, since React Native doesn't render web pages directly.",
  },
  {
    q: "Can React Native integrate with an ERP or CRM?",
    a: "Yes, React Native apps can integrate with ERP and CRM systems through API connections and webhook handling, synchronizing data such as customer information, orders, or operational data between the app and back-office systems. This requires proper authentication, data mapping, and error handling to ensure data stays consistent between the mobile app and the connected business systems.",
  },
  {
    q: "Can you develop the backend and APIs for a React Native application?",
    a: "Yes, backend and API development is a core part of our React Native services, covering REST APIs (and GraphQL where appropriate), authentication, databases, business logic, file storage, and push notification infrastructure. Backend architecture is built specifically to support mobile client requirements, including efficient data payloads and reliable handling of offline/online connectivity transitions.",
  },
  {
    q: "How secure are React Native applications?",
    a: "React Native applications can be built to a high security standard when security is addressed throughout development — including HTTPS enforcement, secure token storage using Keychain (iOS) and Android's secure storage, encryption of sensitive data, API security, and input validation. Security depends on how the application is built and maintained, not on the framework alone. We don't claim compliance certifications like HIPAA or PCI DSS unless specifically verified for a given engagement.",
  },
  {
    q: "Can you build an ecommerce app using React Native?",
    a: "Yes, we build mobile commerce applications in React Native covering product browsing, search and filtering, cart, checkout, payment integration, and order tracking. These apps are often connected to an existing ecommerce backend or built alongside a new one, sharing product and order data between the mobile app and any existing web storefront.",
  },
  {
    q: "Can React Native be used to build an MVP?",
    a: "Yes, React Native is a strong option for MVP development because it lets you reach both Android and iOS users from a single, largely shared codebase, keeping engineering cost lower than maintaining separate native builds during the validation phase. We scope MVP development around your core value proposition, instrumenting analytics from day one to inform iteration after launch.",
  },
  {
    q: "What is the difference between Expo and React Native CLI?",
    a: "Expo provides a managed development workflow with faster setup, simplified configuration, and growing native module support via EAS Build, while React Native CLI (the bare workflow) offers full, direct native access and configuration control from the start. Expo suits most standard apps without extensive custom native requirements; the CLI workflow suits apps needing deep native customization. The right choice depends on your specific feature requirements.",
  },
  {
    q: "How do you test React Native applications?",
    a: "React Native testing covers unit testing, component testing, integration testing, end-to-end testing, and API testing, along with platform-specific Android and iOS testing since the app still produces genuinely separate builds per platform. We also test across representative devices, under varying network conditions, and for performance, security, and crash stability before release, using tools appropriate to the project's specific stack.",
  },
  {
    q: "Can you publish React Native apps on Google Play and the Apple App Store?",
    a: "Yes, we support app-store preparation and submission for both platforms, including application signing and release builds for Google Play, and certificates, provisioning, and TestFlight testing for the Apple App Store. We don't guarantee approval on either platform, since review outcomes depend on each platform's specific policies at the time of submission, which can change independently of the app's development.",
  },
  {
    q: "Can US and Canadian businesses hire a React Native development company remotely?",
    a: "Yes, we work remotely with businesses across the United States and Canada, including organizations in states and provinces spanning both countries. Remote collaboration is coordinated through standard project management and communication tools throughout discovery, development, and post-launch support, allowing businesses to work with our React Native development team regardless of their specific location.",
  },
];
