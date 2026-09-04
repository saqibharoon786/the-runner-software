import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Globe,
  ShoppingCart,
  Layers,
  Smartphone,
  Code2,
  Server,
  Database,
  Plug,
  Search,
  ClipboardList,
  PenTool,
  TerminalSquare,
  TestTube2,
  Rocket,
  Wrench,
  Shield,
  Zap,
  CheckCircle2,
  RefreshCw,
  Lock,
  Activity,
} from "lucide-react";
import {
  getWebMobileDevelopmentServicePath,
  WEB_MOBILE_DEVELOPMENT_PILLAR_PATH,
} from "./services-menu";

const wmPath = getWebMobileDevelopmentServicePath;

export { WEB_MOBILE_DEVELOPMENT_PILLAR_PATH };

export const webMobileDevelopmentSeo = {
  title: "Web & Mobile Development Services | The Runner",
  description:
    "Custom web and mobile development — scalable websites, web apps, and Android/iOS applications built for performance and security. Get a free consultation.",
  h1: "Web & Mobile Development Services",
  canonicalPath: "/services/web-mobile-development",
  ogTitle: "Web & Mobile Development Services | The Runner Software Solutions",
  ogDescription:
    "Custom websites, web applications, and Android/iOS mobile apps — built on modern, scalable architecture and designed around your actual business requirements.",
  twitterTitle: "Web & Mobile Development Services | The Runner Software Solutions",
  twitterDescription:
    "Custom websites, web applications, and Android/iOS mobile apps — built on modern, scalable architecture and designed around your actual business requirements.",
  imageAlt: "Custom web and mobile application development by The Runner Software Solutions",
};

export const pillarHero = {
  intro:
    "Most businesses don't actually need \"a website\" or \"an app\" — they need a specific problem solved: customers who can't complete checkout on mobile, a sales team tracking leads in spreadsheets because no CRM fits how they work, or a booking process that loses half its prospects to a clunky form. The Runner Software Solutions builds custom websites, web applications, and mobile apps for Android and iOS, engineered around the actual workflow, performance, and security requirements of your business rather than a generic template.",
  supporting:
    "We work across the full stack — frontend, backend, databases, APIs, and deployment — so a project doesn't stall at the handoff between \"the people who designed it\" and \"the people who built it.\" That means faster iteration, fewer integration surprises, and software that's genuinely maintainable once it's live.",
  primaryCta: "Get a Free Project Consultation",
  secondaryCta: "Discuss Your Project",
};

export const whatCustomMeans = {
  title: "What Custom Web & Mobile Development Actually Means",
  intro:
    "Web and mobile development covers building the software your business runs on: the website that represents you publicly, the web application your team or customers log into to get work done, and the mobile app that puts your product in someone's hand. Each of these is a different engineering problem with different requirements — a marketing site prioritizes content and conversion, while a web application prioritizes data integrity, user roles, and workflow logic.",
  templateVsCustom:
    "The difference between template-based solutions and custom development comes down to fit. A page builder or off-the-shelf platform gets you something functional quickly, within whatever boundaries the platform sets. Custom development means the software is built around how your business actually operates — your specific data model, your specific user roles, your specific integrations — rather than you adapting your process to fit a tool's limitations. That flexibility costs more upfront, but it removes the ceiling that templated tools eventually hit as a business grows.",
  professionalOutcomes:
    "Professional development improves the outcome in ways that compound over time: performance that holds up as traffic or data volume grows, security that's designed in rather than patched on, an interface that fits real user behavior instead of a generic layout, and a codebase structured so the next feature doesn't require rebuilding the last one. Businesses choose custom web and mobile development specifically when a template can't reasonably support their workflow, when the software itself is meant to be a competitive advantage, or when integration with existing systems (a CRM, an inventory system, a payment processor) requires more flexibility than a pre-built platform allows.",
  closing:
    "The Runner Software Solutions works as a full-service development partner across this entire scope — websites, web applications, and mobile apps — so a business building a connected product (a website, a customer portal, and a companion mobile app, for example) doesn't need to coordinate three separate vendors with three different technical approaches.",
};

export type WebServiceItem = {
  title: string;
  desc: string;
  seoLink?: { before: string; text: string; href: string; after: string };
  href?: string;
};

export const webDevelopmentServices: WebServiceItem[] = [
  {
    title: "Custom Web Development",
    desc: "Custom web development means the site or application is built specifically for your business requirements — your content structure, your user workflows, your integrations — rather than configured within the constraints of a page builder or generic CMS template. This is the right starting point when your requirements go beyond what a templated solution can reasonably support.",
    href: wmPath("web-development"),
  },
  {
    title: "Full-Stack Web Development",
    desc: "Full-stack development covers the complete technical picture: the frontend (what users see and interact with), the backend (the application logic and server-side processing), APIs (the interfaces connecting the frontend, backend, and any external systems), databases (structured storage for your application's data), authentication (secure login and access control), integrations with third-party services, and deployment to production infrastructure. Working across the full stack means architectural decisions are made with the whole system in mind, not siloed by team boundary.",
  },
  {
    title: "Business Website Development",
    desc: "Professional corporate and business websites focused on clearly communicating who you are, what you offer, and converting visitors into leads or customers — built with clean code, fast load times, and a content structure that supports both users and search engines.",
    seoLink: {
      before: "For businesses that also need their new site or application to actually rank and drive traffic, our ",
      text: "SEO Services",
      href: "/services/seo",
      after: " team can work alongside development from launch.",
    },
  },
  {
    title: "eCommerce Development",
    desc: "Custom ecommerce development covers the full commercial workflow: product catalogs structured for search and browsing, shopping carts and checkout flows designed to minimize friction, payment integrations with the processors your business actually uses, order management from placement through fulfillment, inventory tracking that stays accurate as sales happen, customer accounts for repeat buyers, and admin dashboards that give your team visibility and control without needing a developer for routine changes.",
    href: wmPath("ecommerce-development"),
  },
  {
    title: "Web Application Development",
    desc: "Beyond a website, many businesses need a genuine application — a SaaS product, a customer or partner portal, an internal dashboard, or a management system built around specific business logic. These projects involve real application architecture: authentication, role-based permissions, a properly designed database, and business rules encoded in the backend rather than assumed to happen manually.",
  },
  {
    title: "Responsive Web Development",
    desc: "Every site and application we build is designed to work properly across desktop, tablet, and mobile screens from the start — not as a secondary adaptation of a desktop-first design. Responsive development means layout, navigation, and interaction patterns are considered for the full range of devices your actual users are on.",
  },
];

export const mobileDevelopmentServices: WebServiceItem[] = [
  {
    title: "Android App Development",
    desc: "Native Android development targets Google's platform directly, giving full access to Android-specific APIs and device hardware. This is the right approach when performance, deep platform integration, or Android-specific requirements are priorities.",
    href: wmPath("android-app-development"),
  },
  {
    title: "iOS App Development",
    desc: "Native iOS development targets Apple's platform — iPhone and iPad — with direct access to Apple's APIs and hardware, and the interaction patterns iOS users expect.",
    href: wmPath("ios-app-development"),
  },
  {
    title: "Cross-Platform App Development",
    desc: "For projects that need to reach both Android and iOS efficiently, cross-platform frameworks let a single codebase power both platforms, meaningfully reducing duplicated engineering effort compared to two separate native builds. Flutter is a strong option when UI consistency and dual-platform reach are top priorities. React Native tends to fit well for teams with existing React or JavaScript expertise. Neither is universally the right answer — the choice depends on your team, timeline, and how platform-specific your feature requirements are, and we scope this decision against your actual project rather than defaulting to one framework.",
    href: wmPath("mobile-app-development"),
  },
];

export const mobileCoreConsiderations = [
  "UI/UX design appropriate to each platform's conventions",
  "API integration connecting the app to backend systems",
  "Authentication for secure user access",
  "Push notifications for re-engagement and time-sensitive communication",
  "Payment integration for transactional apps",
  "Location features where GPS or mapping genuinely add value",
  "Backend integration so the app isn't operating on static or disconnected data",
  "App performance tuned for real device conditions rather than just a development environment",
  "Security covering data storage and API communication",
  "App deployment and maintenance covering Google Play and Apple App Store submission and ongoing updates",
];

export const technologyStack = [
  {
    label: "Frontend",
    items: "React.js and Next.js for building modern, component-based interfaces — Next.js specifically where server-side rendering or static generation improves performance and SEO. JavaScript, HTML5, and CSS3 as the underlying foundation, with Tailwind CSS for efficient, consistent styling.",
  },
  {
    label: "Backend",
    items: "Node.js and Express.js for JavaScript-based backend development, keeping a consistent language across frontend and backend where that's a genuine advantage for the project. PHP and Laravel for projects where that ecosystem fits the existing infrastructure or team expertise. Python/Django where a project's requirements — data processing, specific library ecosystems — call for it.",
  },
  {
    label: "Mobile",
    items: "Flutter for single-codebase cross-platform apps prioritizing UI consistency; React Native where React/JavaScript team expertise makes it the more efficient path to both platforms.",
  },
  {
    label: "Databases",
    items: "PostgreSQL and MySQL for structured, relational data with well-defined relationships — the right fit for most transactional business applications. MongoDB where a more flexible, document-based data model genuinely fits the application's data shape better.",
  },
  {
    label: "APIs & Integrations",
    items: "REST APIs as the standard interface layer connecting frontend, backend, and mobile clients to shared business logic. Third-party API integrations connecting your application to the tools your business already depends on. Payment gateways for ecommerce and transactional applications. Authentication systems for secure, properly scoped user access. Business integrations with CRM, ERP, or other systems your operations already run on.",
  },
];

export const technologyClosing =
  "Technology selection follows the project's actual requirements — team expertise, performance needs, integration requirements, and long-term maintainability — rather than a default stack applied regardless of fit.";

export const solutionsWeBuild = [
  "Business and corporate websites — the public-facing foundation of your brand and lead generation",
  "eCommerce platforms — full online storefronts with catalog, checkout, and order management",
  "SaaS applications — subscription software delivered to multiple customers, with the multi-tenancy and billing logic that requires",
  "Customer portals — authenticated, self-service access to account information, orders, or data",
  "Admin dashboards — internal tools giving your team visibility and control over application data and operations",
  "CRM systems — customer and lead management built around your specific sales process",
  "ERP systems — operational systems tying together inventory, orders, and business workflows",
  "Inventory management systems — real-time tracking of stock across locations or channels",
  "POS systems — point-of-sale software integrated with inventory and order data",
  "Hospital management systems — administrative and scheduling systems for healthcare operations",
  "School management systems — enrollment, scheduling, and administrative tools for educational institutions",
  "Booking platforms — appointment and reservation systems with calendar and availability logic",
  "Custom business applications — software built around a workflow specific enough that no existing tool fits",
  "Mobile applications — native or cross-platform apps extending your product to Android and iOS",
  "API-driven applications — systems built around a well-structured API layer, supporting web, mobile, and third-party integrations from a shared backend",
];

export const pillarProcess = [
  { step: 1, icon: Search, title: "Discovery & Requirements", desc: "Understanding your business, users, and what the software actually needs to accomplish, before any technical decisions are made." },
  { step: 2, icon: ClipboardList, title: "Technical Planning", desc: "Defining architecture, technology stack, and scope based on the requirements gathered — this is where the shape of the whole project gets decided." },
  { step: 3, icon: PenTool, title: "UI/UX Design", desc: "Wireframes and interface design focused on how real users will actually move through the product, not just visual polish." },
  { step: 4, icon: Monitor, title: "Frontend Development", desc: "Building the interface layer users interact with, based on the approved designs." },
  { step: 5, icon: Server, title: "Backend & API Development", desc: "Building the application logic, business rules, and the API layer that connects everything together." },
  { step: 6, icon: Database, title: "Database Development", desc: "Designing and implementing the data layer that structures, stores, and protects your application's information." },
  { step: 7, icon: Plug, title: "Integration", desc: "Connecting the application to third-party services, payment processors, or existing business systems it needs to work with." },
  { step: 8, icon: TestTube2, title: "Testing & Quality Assurance", desc: "Validating functionality, catching defects, and confirming the application behaves correctly before it reaches real users." },
  { step: 9, icon: Rocket, title: "Deployment", desc: "Releasing the application to production infrastructure, configured for the performance and reliability the project requires." },
  { step: 10, icon: Wrench, title: "Maintenance & Support", desc: "Ongoing updates, bug fixes, and improvements after launch — software doesn't stop needing attention once it ships." },
];

export const processClosing =
  "Each phase matters because skipping or rushing it tends to surface as a problem later — under-invested discovery leads to scope changes mid-build, and under-invested testing leads to defects reaching production instead of being caught beforehand.";

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Code2, title: "Custom development", desc: "Built around your specific requirements, not adapted from a generic template." },
  { icon: Layers, title: "Scalable architecture", desc: "Designed to handle growth in users, data, and traffic without requiring a rebuild." },
  { icon: Zap, title: "Modern technologies", desc: "Applied where they genuinely fit the project, not defaulted to because they're trending." },
  { icon: Monitor, title: "Responsive experiences", desc: "That work properly across desktop, tablet, and mobile from the start." },
  { icon: Shield, title: "Secure development practices", desc: "Applied throughout the build, not addressed only before launch." },
  { icon: Activity, title: "Performance optimization", desc: "Treated as an ongoing engineering concern, not a one-time checklist item." },
  { icon: Plug, title: "API integrations", desc: "Connecting your new software to the systems your business already runs on." },
  { icon: RefreshCw, title: "Clean, maintainable code", desc: "That doesn't become a liability a year after launch." },
  { icon: CheckCircle2, title: "Business-focused solutions", desc: "Technical decisions explicitly tied to your actual goals, not built for their own sake." },
  { icon: Wrench, title: "Post-launch support", desc: "For the updates and fixes every live application eventually needs." },
];

export const productComparison = {
  title: "Website vs. Web Application vs. Mobile App: What Fits Your Business",
  website:
    "A website is usually enough when your primary goal is communicating information and converting visitors — a marketing site, a portfolio, a service business's online presence. Most of the value is in content, clarity, and conversion, not application logic.",
  webApp:
    "A web application is the better choice when users need to log in and do something — track data, manage an account, complete a multi-step workflow. This requires authentication, a database, and application logic that a content-driven website doesn't need. If you're describing user accounts, dashboards, or \"logged-in\" functionality, you're describing a web application, not a website.",
  mobileApp:
    "A mobile app makes sense when your use case depends on device hardware (camera, GPS, biometrics), when reliable push notifications matter for re-engagement, when offline functionality is genuinely required, or when the experience benefits meaningfully from native performance and platform-specific interaction patterns that a browser can't fully replicate.",
  both:
    "Many businesses eventually need both — a web presence (marketing site and/or web application) alongside one or more mobile apps, ideally sharing a common backend so business logic isn't duplicated and drifting out of sync across platforms. We architect these as connected systems from the start when a project's scope calls for it, rather than as disconnected builds that happen to share a brand.",
};

export const industriesSection = [
  { industry: "Healthcare", desc: "Patient-facing scheduling and communication tools, and administrative systems for practice or facility management, with particular attention to data access control." },
  { industry: "Education", desc: "Student and enrollment management systems, learning platforms, and parent/student communication tools." },
  { industry: "eCommerce", desc: "Full storefront platforms, alongside backend systems for inventory, order management, and customer data." },
  { industry: "Real Estate", desc: "Property listing and search platforms, lead management tools, and scheduling systems for viewings and appointments." },
  { industry: "Logistics", desc: "Tracking and dispatch systems, often requiring real-time data updates and integration with partner systems." },
  { industry: "Finance", desc: "Secure account access, transaction workflows, and reporting dashboards, with heightened attention to data security and access control." },
  { industry: "Retail", desc: "Inventory and POS integration, customer loyalty systems, and omnichannel experiences connecting online and in-store operations." },
  { industry: "Professional Services", desc: "Client portals, scheduling and intake systems, and internal tools supporting case or project management." },
  { industry: "Startups", desc: "MVP-scoped builds that validate a core idea efficiently, with architecture that can scale once the concept is proven rather than requiring a rebuild." },
  { industry: "Small & Medium Businesses", desc: "Right-sized custom tools that replace inefficient manual processes or outgrown spreadsheets, without the overhead of enterprise-scale systems they don't yet need." },
];

export const performanceSecuritySection = {
  title: "Built for Performance, Security & Scalability",
  items: [
    { title: "Performance", desc: "Fast page load and application response times through efficient code, appropriate caching, and optimized database queries, since slow software costs conversions and user trust regardless of how well it's designed visually." },
    { title: "Responsive architecture", desc: "Applications built to perform consistently across the device and connection conditions your actual users have, not just an ideal testing environment." },
    { title: "Secure authentication", desc: "Properly implemented login and session management, avoiding common security gaps in how user identity is verified and maintained." },
    { title: "API security", desc: "Authentication, rate limiting, and input validation on every API endpoint, since APIs are a common target for exploitation if left under-protected." },
    { title: "Database optimization", desc: "Indexing and query design that keeps performance stable as data volume grows, rather than degrading as your application succeeds." },
    { title: "Error handling", desc: "Applications designed to fail gracefully and inform both users and your team when something goes wrong, instead of failing silently or confusingly." },
    { title: "Scalable architecture", desc: "Systems designed to handle growth in traffic and data appropriate to your actual trajectory, avoiding both premature over-engineering and under-engineering that creates expensive rework later." },
    { title: "Code maintainability", desc: "A codebase structured so future changes are safe and efficient, not an accumulating source of risk with every new feature." },
    { title: "Testing", desc: "Functional and regression testing integrated into the development process, catching problems before they reach production." },
    { title: "Deployment best practices", desc: "Structured, repeatable deployment processes that reduce the risk of a release causing unexpected downtime or bugs." },
  ],
};

export const customApplicationSection = {
  title: "Need a Custom Web or Mobile Application?",
  intro:
    "Off-the-shelf software works well until your business's specific workflow, integration needs, or growth trajectory outgrow what a generic platform can support. At that point, the cost of working around a tool's limitations starts to exceed the cost of building something that actually fits. If you're finding yourself building workarounds, manually bridging systems that should talk to each other, or hitting a ceiling on what your current tools can do, custom development is worth evaluating directly against your specific situation.",
  softwareDevLink: {
    before: "For businesses looking to pair a new build with a complete technology strategy across more than web and mobile, our ",
    text: "Software Development Services",
    href: "/services/software-development",
    after: " team can scope a broader engagement, and our ",
  },
  uiUxLink: {
    before: "",
    text: "UI/UX Design Services",
    href: "/services/design/ui-ux-design",
    after: " team can lead interface design work alongside the build.",
  },
  cta: "Talk to Our Development Team",
};

export const pillarFaqs = [
  {
    q: "What is web and mobile development?",
    a: "Web and mobile development is the design, engineering, and maintenance of software that runs in a browser (web) or on a phone or tablet (mobile). It spans everything from a marketing website to a complex web application, and from native Android or iOS apps to cross-platform mobile builds, each suited to different business needs and technical requirements.",
  },
  {
    q: "How much does custom web development cost?",
    a: "Cost depends on the scope of the project — a marketing website, a web application with backend logic and integrations, and a full ecommerce platform sit at genuinely different cost levels because they involve different amounts of underlying engineering. Factors include design complexity, number of features, integrations, and backend requirements. We provide accurate estimates after understanding your specific project rather than a generic price.",
  },
  {
    q: "How long does it take to develop a website or web application?",
    a: "Timeline depends on scope, feature count, integrations, and design complexity. A focused business website typically moves faster than a web application involving authentication, a database, and custom business logic. We scope realistic timelines during discovery based on your actual requirements rather than a generic range.",
  },
  {
    q: "What is the difference between a website and a web application?",
    a: "A website is primarily informational, focused on communicating who you are and converting visitors, with minimal backend logic. A web application is interactive software where users log in and perform actions, requiring authentication, a database, and application logic well beyond a content-driven site. If your project involves user accounts or a dashboard, it's a web application.",
  },
  {
    q: "Do you develop Android and iOS mobile applications?",
    a: "Yes, we build native Android applications, native iOS applications, and cross-platform mobile apps using frameworks like Flutter and React Native, depending on which approach best fits your project's performance requirements, timeline, and target platforms.",
  },
  {
    q: "Which technologies do you use for web development?",
    a: "Our core stack includes React and Next.js for frontend development, Node.js and Express (along with PHP/Laravel and Python/Django where appropriate) for backend development, and PostgreSQL, MySQL, or MongoDB for data storage, selected based on your project's specific requirements rather than a fixed default.",
  },
  {
    q: "Can you integrate APIs and third-party services?",
    a: "Yes, we build and integrate REST APIs connecting your application to third-party services, payment gateways, authentication providers, and existing business systems like CRM or ERP platforms, so a new application works with the tools your business already relies on rather than operating in isolation.",
  },
  {
    q: "Can you build custom software for my business?",
    a: "Yes, custom software development is our core focus — applications built specifically around your business's workflows, data, and integration requirements rather than adapted from a generic template. This includes web applications, mobile apps, and the backend systems that support them.",
  },
  {
    q: "Do you provide website and mobile app maintenance?",
    a: "Yes, ongoing maintenance and support is part of our process after launch, covering updates, bug fixes, security patches, and incremental improvements — software requires continued attention after it ships, not just at the point of initial delivery.",
  },
  {
    q: "How do I start a web or mobile development project?",
    a: "The process starts with a consultation to understand your business goals, users, and technical requirements. From there, we move into technical planning and design before development begins, so the project's scope and approach are clear before significant engineering work starts.",
  },
];

export const finalCta = {
  headline: "Ready to Build Your Web or Mobile Solution?",
  body: "Whether you're starting with a clear specification or still working through what your business actually needs, the right next step is a conversation about your specific requirements — not a generic proposal. The Runner Software Solutions works with businesses to turn a set of requirements into a scalable, secure, properly maintained digital product, across websites, web applications, and mobile apps.",
  primaryCta: "Get a Free Project Consultation",
  secondaryCta: "Discuss Your Project",
  contactLink: {
    text: "Contact The Runner Software Solutions",
    href: "/contact",
  },
};

export type PillarChildService = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
};

export const pillarChildServices: PillarChildService[] = [
  { icon: Monitor, title: "Web Development", desc: "High-performance web apps with modern frameworks.", href: wmPath("web-development") },
  { icon: Globe, title: "Enterprise Web Development", desc: "Secure, scalable web platforms for global teams.", href: wmPath("enterprise-web-development") },
  { icon: ShoppingCart, title: "Ecommerce Development", desc: "Conversion-focused stores with payments and analytics.", href: wmPath("ecommerce-development") },
  { icon: Layers, title: "CMS Development", desc: "Flexible content platforms tailored to your editors.", href: wmPath("cms-development") },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps users love.", href: wmPath("mobile-app-development") },
  { icon: Smartphone, title: "Android App Development", desc: "Polished Android apps for phones, tablets, and TV.", href: wmPath("android-app-development") },
  { icon: Smartphone, title: "iOS App Development", desc: "Premium iOS experiences built for App Store success.", href: wmPath("ios-app-development") },
  { icon: Smartphone, title: "Flutter App Development", desc: "Beautiful cross-platform apps from a single codebase.", href: wmPath("flutter-app-development") },
  { icon: Smartphone, title: "React Native Development", desc: "Fast mobile delivery with shared React expertise.", href: wmPath("react-native-development") },
];
