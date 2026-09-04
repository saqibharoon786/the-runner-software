import type { LucideIcon } from "lucide-react";
import {
  TestTube2,
  Shield,
  Zap,
  Code2,
  Activity,
  Layers,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, EMERGING_TECHNOLOGIES_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const softwareTestingSeo = {
  title: "Software Testing Services & QA Company | The Runner",
  description:
    "Software testing services — manual, automation, API, performance, and security testing built around real business risk. Talk to our QA team.",
  h1: "Software Testing Services Built Around Risk, Not Checklists",
  canonicalPath: "/services/emerging-technologies/software-testing",
  ogTitle: "Software Testing Services | The Runner Software Solutions",
  ogDescription:
    "Manual and automated testing, API and performance testing, security and accessibility validation — built around actual application risk, not a generic checklist.",
  twitterTitle: "Software Testing Services | The Runner Software Solutions",
  twitterDescription:
    "Manual and automated testing, API and performance testing, security and accessibility validation — built around actual application risk, not a generic checklist.",
};

export const testingHero = {
  intro:
    "Most software testing problems aren't a lack of effort — they're a mismatch between where testing time is spent and where the actual risk lives. A cosmetic bug on a marketing page and a failure in a checkout flow are not the same problem, and treating every feature with identical testing depth wastes budget on low-risk areas while leaving high-risk ones under-tested. The Runner Software Solutions provides software testing services — manual and automated, functional and non-functional, from a single QA engagement to embedded testing inside your CI/CD pipeline — built around what actually matters for your application.",
  disclaimer:
    "We won't tell you testing makes software bug-free. No amount of testing does that. What a well-run QA process does is reduce risk, catch problems before your users do, and give your team the information needed to make informed release decisions.",
  primaryCta: "Discuss Your Testing Requirements",
  secondaryCta: "Get a QA Assessment",
};

export const whatAreTestingServices = {
  title: "What Are Software Testing Services?",
  definition:
    "Software testing services are the practice of evaluating an application to identify defects, validate that it behaves as intended, and assess whether it's ready for release — covering everything from individual functions to full end-to-end user workflows, performed manually, through automation, or both.",
  includes:
    "A software testing engagement typically includes some combination of: test strategy and planning, manual exploratory and scripted testing, automated test development, functional and regression testing, API testing, performance and load testing, security testing, accessibility testing, mobile and cross-browser testing, and CI/CD-integrated continuous testing — scoped to the specific application, its risk profile, and its release cadence.",
};

export const qaVsTesting = {
  title: "What Is the Difference Between QA and Software Testing?",
  intro: "These terms get used interchangeably, but they describe related, overlapping disciplines rather than the same thing:",
  qa: "Quality Assurance (QA) is process-oriented. It's the broader strategy for preventing defects before they happen — requirements review, coding standards, process discipline, and the overall approach an organization takes to building quality into software from the start.",
  testing: "Software Testing is product-oriented. It's the direct evaluation of the software itself — running test cases, exploring the application, executing automated suites, and finding defects that already exist in the built product.",
  qualityEngineering:
    "Quality Engineering is the broadest of the three: a combined approach that brings together prevention (QA), detection (testing), automation, observability, and continuous improvement into a single ongoing discipline, rather than treating \"testing\" as a phase that happens right before release.",
  closing:
    "QA processes reduce how many defects get introduced in the first place; testing catches the ones that do; and quality engineering ties both into the broader software delivery process.",
};

export type TestingServiceItem = {
  title: string;
  what: string;
  problem: string;
  when: string;
  process: string;
  extra?: string;
  webLink?: { before: string; text: string; href: string; after: string };
  teamLink?: { before: string; text: string; href: string; after: string };
};

export const testingServices: TestingServiceItem[] = [
  {
    title: "Manual Software Testing",
    what: "Human testers directly interacting with an application to validate behavior, explore edge cases, and assess usability — without relying on scripted automation.",
    problem: "Automated tests only check what they were explicitly written to check. Manual testing finds problems automation wasn't designed to look for.",
    when: "New features before they're stable enough to automate, usability validation, exploratory testing, complex edge-case and negative testing.",
    process: "Test case design, structured functional validation, exploratory testing sessions, negative testing, regression testing, and usability assessment.",
    extra: "We do not treat manual testing as something automation eventually replaces entirely. Mature QA programs use both, deliberately.",
  },
  {
    title: "Test Automation",
    what: "Writing code that executes test scenarios automatically, so repeatable checks — especially regression checks — can run frequently without manual re-execution.",
    problem: "Manually re-running the same regression checks before every release doesn't scale as an application and release frequency grow.",
    when: "Stable, frequently-executed test scenarios; regression suites; API validation on every commit or pull request.",
    process: "Automation strategy, building tests across appropriate layers, CI/CD integration, test data management, and ongoing suite maintenance.",
    extra: "Not every test should be an expensive UI test. If a business rule can be validated at the API layer, testing it there is faster, more stable, and cheaper to maintain.",
  },
  {
    title: "Functional Testing",
    what: "Validating that specific features and functions behave according to requirements.",
    problem: "Confirms the application actually does what it's supposed to do, independent of how it does it.",
    when: "Every release, for every feature that changed or could plausibly have been affected by a change.",
    process: "Deriving test cases from requirements and acceptance criteria, executing against expected outcomes, documenting discrepancies as defects.",
  },
  {
    title: "Regression Testing",
    what: "Re-testing previously working functionality after a code change, to confirm the change didn't break something that used to work.",
    problem: "New code frequently has unintended side effects on unrelated parts of an application.",
    when: "Before every release, and ideally on every meaningful code change through automated regression suites integrated into CI/CD.",
    process: "Maintaining a regression suite covering core, high-risk workflows; prioritizing which tests run at which stage; continuously updating the suite as the application evolves.",
  },
  {
    title: "Smoke and Sanity Testing",
    what: "Smoke testing is a fast, shallow check that a build is stable enough to test further. Sanity testing is a narrower check that a specific fix or change works as intended.",
    problem: "Avoids wasting deeper testing effort on a build that's fundamentally broken.",
    when: "After every build (smoke) and after targeted fixes (sanity).",
    process: "Quick validation of core systems and the specific area changed, before committing to fuller test execution.",
  },
  {
    title: "Integration Testing",
    what: "Validating that separate components or systems — services, modules, third-party APIs — work correctly together.",
    problem: "Components that pass isolated tests can still fail when combined due to mismatched data formats, timing, or error handling.",
    when: "Any application built from multiple services, modules, or third-party integrations.",
    process: "Testing data flow and contracts between components, validating error handling when dependent services fail, testing realistic integration scenarios.",
  },
  {
    title: "System Testing",
    what: "Testing the fully integrated application as a whole, validating that it meets overall requirements end-to-end.",
    problem: "Individual components can each work correctly while the system as a whole still fails to meet a business requirement.",
    when: "Before major releases, and as a final validation stage ahead of production deployment.",
    process: "End-to-end validation against overall business requirements across the complete integrated product.",
  },
  {
    title: "End-to-End Testing",
    what: "Validating complete user workflows from start to finish, through the actual interface, replicating how a real user would move through the application.",
    problem: "Confirms that a full journey actually works as a connected whole, not just as isolated steps.",
    when: "For your highest-value, highest-traffic user workflows specifically — reserved for where full end-to-end confidence genuinely matters.",
    process: "Scripted or automated validation of complete user journeys through the actual interface.",
  },
  {
    title: "API Testing",
    what: "Testing an application's APIs directly — request and response validation, authentication, error handling, and data integrity — without going through the UI.",
    problem: "API tests validate business logic and data contracts faster and more reliably than routing the same validation through a UI.",
    when: "Any application with a defined API layer — often the highest-leverage layer in a modern automation strategy.",
    process: "Endpoint validation, authentication and authorization checks, schema validation, status code verification, error handling, boundary testing, and data integrity checks.",
  },
  {
    title: "Web Application Testing",
    what: "Comprehensive testing of a web application across browser compatibility, responsive behavior, authentication, forms, navigation, API interactions, permissions, accessibility, performance, and security.",
    problem: "Browser-based applications have specific concerns — cross-browser behavior, responsive layouts, session handling — that require dedicated testing attention.",
    when: "For any browser-based application, scaled to which browsers and behaviors actually matter for your user base.",
    process: "Compatibility matrix based on real analytics, functional validation across browsers and screen sizes, and targeted performance and security checks.",
    webLink: {
      before: "If your ",
      text: "web application",
      href: "/services/web-mobile-development/web-development",
      after: " itself needs new development alongside testing, our web development team can work directly with QA on the same project.",
    },
  },
  {
    title: "Mobile App Testing",
    what: "Testing native, hybrid, or cross-platform mobile applications across Android and iOS.",
    problem: "Mobile testing genuinely differs from web testing — device fragmentation, OS versions, network conditions, permissions, notifications, offline behavior, and app lifecycle events.",
    when: "For any native, hybrid, or cross-platform mobile application.",
    process: "Device and OS coverage based on actual user base, platform-specific testing for Android and iOS, network condition testing, and mobile-specific performance monitoring.",
  },
  {
    title: "Cross-Browser and Compatibility Testing",
    what: "Validating that an application behaves consistently across the different browsers, devices, and environments your users actually use.",
    problem: "Browsers render and handle JavaScript differently enough that an application validated only in one browser can behave incorrectly in another.",
    when: "For web applications with users across multiple browsers or devices.",
    process: "Realistic compatibility matrix based on analytics, prioritizing browsers and devices with meaningful usage.",
  },
  {
    title: "Performance Testing",
    what: "Evaluating how an application behaves under expected and extreme conditions — response time, throughput, resource usage, and stability under load.",
    problem: "Performance issues often only surface under realistic or peak traffic, not during normal development testing.",
    when: "Before major releases and when traffic patterns or infrastructure change significantly.",
    process: "Load testing (expected traffic), stress testing (beyond expected levels), spike testing (sudden surges), and endurance testing (sustained load over time).",
    extra: "We don't invent or promise specific performance results upfront — actual performance depends on your application's architecture, infrastructure, and data.",
  },
  {
    title: "Security Testing",
    what: "Evaluating an application for vulnerabilities in authentication, authorization, session management, input validation, access control, and sensitive data handling.",
    problem: "Common vulnerability patterns and misconfigurations can be caught before release, reducing exposure to well-understood attack vectors.",
    when: "As part of a broader security program, ideally integrated throughout development rather than bolted on before release.",
    process: "Authentication and authorization checks, input validation testing, access control validation, API security, and dependency risk review.",
    extra: "Standard QA security testing is not a substitute for a dedicated penetration test or comprehensive security audit — it's one layer within a broader security program.",
  },
  {
    title: "Accessibility Testing",
    what: "Evaluating whether an application can be used effectively by people with disabilities, including those using assistive technology.",
    problem: "Accessibility issues are often structural rather than surface-level — retrofitting them after launch is significantly more expensive.",
    when: "Ideally throughout development, not as a pre-launch checklist item.",
    process: "Keyboard navigation, screen reader compatibility, color contrast, focus states, labeled form fields, semantic structure, and mobile touch target sizing.",
  },
  {
    title: "Usability Testing",
    what: "Evaluating how easily and effectively real users can accomplish their goals within an application.",
    problem: "Functional test cases validate expected behavior against a script — usability testing surfaces friction and confusion that scripts aren't designed to catch.",
    when: "For new features, redesigned workflows, or when user feedback suggests confusion.",
    process: "Structured sessions with representative users, observing task completion, and identifying workflow friction.",
  },
  {
    title: "Database Testing",
    what: "Validating data integrity, correctness, and performance at the database layer.",
    problem: "Data accuracy issues at the database layer can have direct business or financial consequences that UI-level testing may miss.",
    when: "For applications where data accuracy, referential integrity, or query performance has direct business impact.",
    process: "Data validation against business rules, referential integrity checks, query performance, migration correctness, and transaction behavior.",
  },
  {
    title: "Exploratory Testing",
    what: "Unscripted testing where a skilled tester actively investigates the application, using judgment and experience to probe for problems.",
    problem: "Scripted and automated testing confirm the expected — exploratory testing is designed to find the unexpected.",
    when: "New features, after major changes, and as a complement to scripted test coverage.",
    process: "Guided investigation sessions leveraging tester expertise, with findings documented as actionable defects.",
  },
  {
    title: "User Acceptance Testing (UAT)",
    what: "Validation performed by or with actual business stakeholders or end users, confirming the application meets real business needs before final release.",
    problem: "QA-executed testing validates against requirements — UAT validates against real business needs and user expectations.",
    when: "Before final release, when business sign-off is required.",
    process: "Structured UAT scenarios derived from business requirements, executed with stakeholder involvement, with results informing release decisions.",
  },
  {
    title: "Continuous Testing",
    what: "Testing integrated directly into the software delivery pipeline, running automatically and continuously as code changes.",
    problem: "Treating testing as a separate phase after development is \"done\" doesn't scale with modern release cadences.",
    when: "For teams shipping frequently who need quality feedback while defects are still cheap to fix.",
    process: "Automated test suites integrated into CI/CD at appropriate pipeline stages, with fast feedback on every change.",
  },
  {
    title: "QA Consulting",
    what: "Strategic guidance on testing approach, tooling, process, and team structure — for organizations building or improving their own QA capability.",
    problem: "Organizations often know they need better testing but lack a clear strategy for where to invest effort and automation.",
    when: "When building an internal QA function, improving an existing one, or evaluating testing maturity.",
    process: "Assessment of current coverage and gaps, strategy recommendations, tooling guidance, and process design.",
    teamLink: {
      before: "For organizations that need testing capacity embedded directly into an existing engineering team, our ",
      text: "dedicated development team",
      href: "/services/software-development/dedicated-development-team",
      after: " model can include QA specialists as part of that team.",
    },
  },
  {
    title: "Test Strategy & Planning",
    what: "The upfront work of defining what will be tested, how, at what depth, and by whom — grounded in the application's actual risk profile.",
    problem: "Testing without a strategy produces either insufficient coverage on high-risk areas or wasted effort on low-risk ones.",
    when: "At the start of any significant testing engagement or when restructuring an existing QA program.",
    process: "Risk assessment, scope definition, resource and environment planning, and entry/exit criteria for testing phases.",
  },
];

export const automationPyramid = {
  layers: [
    "Unit Tests — most numerous, fastest, most stable",
    "Integration Tests",
    "API / Service Tests",
    "UI / End-to-End Tests — fewest, slowest, most brittle",
  ],
  tools: [
    "Selenium and Playwright for web UI automation",
    "Cypress for JavaScript-heavy front-end testing",
    "Appium for mobile automation across Android and iOS",
    "Postman and similar tools for REST API testing and automation",
  ],
  selectionFactors: [
    "Application architecture — SPA, server-rendered site, or native mobile app",
    "Browser requirements — which browsers and versions matter for your users",
    "Mobile platform — native, hybrid, or cross-platform",
    "Team expertise — a tool the team can maintain is more valuable long-term",
    "Language ecosystem — alignment with the existing tech stack",
    "CI/CD integration — how cleanly a tool fits into the existing pipeline",
  ],
};

export const approachSections = {
  strategy:
    "A test strategy starts with understanding the application, not with a generic testing checklist. We evaluate business risk, application complexity, critical user workflows, release frequency, technology stack, integration points, and existing test coverage gaps. The strategy should look different for a payments platform than for an internal reporting dashboard.",
  automation:
    "We prioritize automation for tests that will run repeatedly, tests validating stable functionality, and tests where manual execution is slow or error-prone. We're deliberately cautious about over-investing in UI automation — a bloated, brittle UI suite that breaks on every minor interface change often costs more in maintenance than it saves.",
  riskPrioritization:
    "A payment workflow, authentication system, or financial transaction generally warrants substantially more testing depth than a low-risk informational page. We assess risk based on business impact of failure, usage frequency, logic complexity, and exposure to external input.",
  commonMistakes: [
    "Insufficient test coverage on high-risk areas specifically",
    "Flaky automated tests that erode trust in the entire suite",
    "Unstable test environments producing false signals",
    "Outdated test cases that no longer reflect actual behavior",
    "Testing too late in the development cycle",
    "Excessive UI automation relative to faster API and unit-level coverage",
    "Poor test data that doesn't reflect realistic production scenarios",
    "Missing edge cases around boundary conditions and error states",
    "Weak regression testing letting previously fixed bugs resurface",
    "Poor defect prioritization treating minor issues equal to critical ones",
    "Unclear acceptance criteria leaving \"done\" ambiguous",
    "Slow CI pipelines discouraging developers from running tests frequently",
  ],
  regression:
    "We maintain regression suites structured around risk and change frequency — a fast, targeted subset on every commit or pull request, and a fuller suite before release. Regression scope is actively maintained: outdated test cases get updated or retired, and newly identified high-risk areas get added.",
  saasTesting:
    "SaaS applications introduce specific testing considerations: multi-tenancy, subscription and billing logic, role-based access control, API-heavy architectures, frequent deployment cadences, and third-party integrations. We weight testing effort toward tenant data isolation and billing logic in particular.",
  apiTesting:
    "We treat the API layer as a primary testing surface, not a secondary check behind UI testing. For applications with a well-defined API layer, this is often where the majority of functional test coverage should live.",
  mobileTesting:
    "We scope device and OS coverage based on your actual user base — analytics-informed, not an attempt to cover every device combination. We test both platforms' genuinely different behaviors and account for real-world network conditions.",
};

export const cicdTestingSection = {
  title: "Testing in CI/CD and DevOps",
  intro: "Modern software delivery moves too fast for testing to remain a separate phase that happens after development is \"done.\" Continuous testing embeds validation directly into the delivery pipeline.",
  pipeline: "Developer → Git Repository → Pull Request → Unit Tests → Build → API / Integration Tests → Security Checks → UI / E2E Tests → Staging → Acceptance Testing → Production → Monitoring",
  stages: [
    "On every commit — fast unit tests, giving developers immediate feedback",
    "On pull requests — unit tests plus targeted integration and API tests",
    "Before deployment — fuller regression suite, relevant UI/E2E tests, plus security checks",
    "After deployment — smoke tests against the live environment and monitoring",
    "Periodically — broader regression sweeps, performance testing, and accessibility audits",
  ],
  closing:
    "This is shift-left testing in practice — moving quality validation earlier in the development process, where defects are cheaper and faster to fix.",
};

export const testingProcess: { step: number; title: string; desc: string }[] = [
  { step: 1, title: "Requirement Analysis", desc: "Understanding what the application is supposed to do, and where ambiguity in requirements might already be a problem." },
  { step: 2, title: "Risk Assessment", desc: "Identifying which areas carry the highest business, security, or safety risk if they fail." },
  { step: 3, title: "Test Strategy", desc: "Defining the overall approach — manual vs. automated, testing types, and depth by area." },
  { step: 4, title: "Test Planning", desc: "Turning strategy into a concrete plan — scope, resources, environments, timeline, and entry/exit criteria." },
  { step: 5, title: "Test Case Design", desc: "Writing specific test cases and scenarios derived from requirements and identified risk areas." },
  { step: 6, title: "Test Environment Setup", desc: "Establishing environments that reliably reflect production behavior, with realistic test data." },
  { step: 7, title: "Test Execution", desc: "Running planned test cases, manual and automated, and recording results." },
  { step: 8, title: "Defect Reporting", desc: "Documenting issues with enough detail for developers to act on efficiently." },
  { step: 9, title: "Regression Testing", desc: "Re-validating previously working functionality after fixes and changes." },
  { step: 10, title: "Automation", desc: "Building or expanding automated coverage for stable, repeatable test scenarios." },
  { step: 11, title: "Performance / Security Validation", desc: "Assessing the application under load and against common vulnerability patterns." },
  { step: 12, title: "Release Validation", desc: "Final confirmation that the application meets defined release criteria." },
  { step: 13, title: "Test Reporting", desc: "Summarizing coverage, results, known issues, and residual risk for informed release decisions." },
  { step: 14, title: "Continuous Improvement", desc: "Feeding lessons from this cycle back into the next cycle's strategy and planning." },
];

export const commonChallenges: { challenge: string; solution: string }[] = [
  { challenge: "Insufficient test coverage on high-risk areas", solution: "Risk-based prioritization, not blanket coverage targets" },
  { challenge: "Flaky automated tests", solution: "More stable test design, better isolation, and actively fixing unreliable tests" },
  { challenge: "Unstable test environments", solution: "Better environment management and more production-like test environments" },
  { challenge: "Outdated test cases", solution: "Regular test suite maintenance as part of ongoing development" },
  { challenge: "Testing too late", solution: "Shift-left practices, integrating testing earlier in the development cycle" },
  { challenge: "Excessive UI automation", solution: "Rebalancing toward unit and API-level coverage per the automation pyramid" },
  { challenge: "Poor test data", solution: "Deliberately designed, realistic test data management" },
  { challenge: "Missing edge cases", solution: "Structured boundary and negative testing as part of test design" },
  { challenge: "Weak regression testing", solution: "Better-maintained, risk-prioritized regression suites" },
  { challenge: "Lack of API testing", solution: "Treating the API layer as a primary test surface" },
  { challenge: "Poor defect prioritization", solution: "Clear severity criteria tied to actual business impact" },
  { challenge: "Unclear acceptance criteria", solution: "Closer collaboration during requirement definition" },
  { challenge: "Slow CI pipelines", solution: "Smarter test distribution across pipeline stages" },
];

export const costSection = {
  title: "How Much Do Software Testing Services Cost?",
  intro: "There's no fixed price for software testing services — cost is a function of scope, and scope varies enormously by application. Here's what actually drives cost:",
  factors: [
    "Application size — the number of features, screens, and workflows that need coverage",
    "Number of platforms — web only, versus web plus iOS plus Android",
    "Number of browsers/devices — a wider compatibility matrix requires more testing time",
    "Testing scope — functional only versus functional plus performance plus security plus accessibility",
    "Automation requirements — building a new automation suite from scratch versus maintaining an existing one",
    "API complexity — the number of endpoints and business logic complexity",
    "Integrations — each third-party integration adds testing surface area",
    "Performance requirements — dedicated load and stress testing adds scope",
    "Security requirements — depth of security testing based on risk profile",
    "Release frequency — weekly releases require more sustained investment than quarterly",
    "Maintenance requirements — ongoing test suite upkeep as the application evolves",
  ],
  closing:
    "A one-time testing project and an ongoing QA engagement have very different cost structures. Neither is inherently better — the right model depends on how frequently you ship and how much testing needs to become continuous versus periodic.",
};

export const timelineSection = {
  title: "How Long Does Software Testing Take?",
  intro: "Timeline depends on application complexity, scope, and how much of the process needs to be built from scratch — there's no universal timeline.",
  factors: [
    "Application complexity and number of features",
    "Number of platforms requiring coverage",
    "How much test coverage already exists versus needs to be built",
    "Automation scope — building new coverage takes longer than executing existing tests",
    "Number and complexity of integrations",
    "Performance and security testing requirements",
    "Defect volume discovered during execution",
    "Release schedule shaping how testing gets structured",
  ],
  closing:
    "We don't provide a fixed timeline without understanding your specific application and scope — an accurate estimate requires a scoping conversation.",
};

export const audienceSection = {
  title: "Software Testing for SaaS, Startups, and Enterprises",
  saas: {
    body: "SaaS companies face specific testing priorities around multi-tenancy and data isolation, subscription and billing accuracy, API-heavy architectures, and frequent deployment cycles that demand strong CI/CD-integrated testing.",
    link: {
      before: "For businesses building or scaling a SaaS product, our ",
      text: "SaaS Development Services",
      href: etPath("saas-development"),
      after: " team can work alongside QA from the architecture stage, so testability is designed in rather than retrofitted.",
    },
  },
  startups:
    "Startups typically need testing proportionate to a limited budget and fast iteration speed — prioritizing testing depth on core value-proposition workflows first, with automation introduced deliberately once functionality stabilizes.",
  enterprises: {
    body: "Enterprises generally require broader test coverage across more integrations, stricter release governance, more extensive regression suites, and closer coordination with existing DevOps and security processes.",
    link: {
      before: "For organizations building complete new platforms rather than testing an existing one, our ",
      text: "software product development",
      href: "/services/software-development/software-product-development",
      after: " team and QA can be engaged together from the start.",
    },
  },
};

export const industriesSection: { industry: string; desc: string }[] = [
  { industry: "SaaS", desc: "Multi-tenancy, billing accuracy, API reliability, and continuous deployment testing." },
  { industry: "FinTech", desc: "Transaction accuracy, calculation correctness, and security testing around financial data." },
  { industry: "Healthcare", desc: "Data accuracy, access control, and workflow reliability — no specific regulatory compliance claims." },
  { industry: "E-commerce", desc: "Checkout and payment flow reliability, inventory accuracy, and performance under peak traffic." },
  { industry: "Education", desc: "Enrollment and grading workflow accuracy, and accessibility for diverse learner needs." },
  { industry: "Logistics", desc: "Data accuracy across tracking and dispatch systems, and integration reliability." },
  { industry: "Enterprise Software", desc: "Integration reliability, role-based access control, and regression stability." },
  { industry: "Banking", desc: "Transaction integrity, security, and access control requiring the deepest testing rigor." },
  { industry: "Insurance", desc: "Calculation accuracy and workflow correctness across underwriting and claims." },
  { industry: "Retail", desc: "Inventory and pricing accuracy, and performance under variable traffic." },
  { industry: "Mobile Applications", desc: "Device fragmentation, OS version coverage, and platform-specific behavior." },
  { industry: "B2B Platforms", desc: "Role-based access, integration reliability, and data accuracy across customer accounts." },
  { industry: "Customer Portals", desc: "Authentication reliability, data privacy, and consistent cross-device experience." },
];

export const usaSection = {
  title: "Software Testing Services for USA Businesses",
  body: "We work with businesses across the United States on software testing services, from startups validating their first release to enterprises maintaining large, actively evolving platforms. Companies across major technology and business markets — including New York, California, Texas, Washington, Massachusetts, Florida, and Illinois — engage our QA team for manual and automated testing, API and performance testing, and continuous testing integrated into CI/CD pipelines.",
};

export const canadaSection = {
  title: "Software Testing Services for Canadian Businesses",
  body: "We also support Canadian businesses with software testing services, from startups building their first automated test suite to enterprises running large-scale regression and performance testing programs. This includes companies in Toronto, Vancouver, Montreal, Calgary, Ottawa, and Edmonton, across industries ranging from SaaS and e-commerce to finance and logistics.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: BarChart3, title: "Risk-based test planning", desc: "Allocating effort based on actual business and technical risk, not equal coverage regardless of stakes." },
  { icon: Zap, title: "Practical automation strategy", desc: "Guided by the automation pyramid — not defaulting to UI automation for everything." },
  { icon: TestTube2, title: "Full-stack QA expertise", desc: "Manual testing, automation, API testing, performance testing, and security testing." },
  { icon: Activity, title: "CI/CD-integrated continuous testing", desc: "Quality feedback happens early and often, not only right before release." },
  { icon: CheckCircle2, title: "Transparent limitations", desc: "We tell you what testing can and can't guarantee rather than promising outcomes no process can deliver." },
  { icon: Layers, title: "Technology-appropriate tooling", desc: "Selected based on your application and team, not a fixed toolset." },
  { icon: Code2, title: "Realistic reporting", desc: "Information needed to make informed release decisions, not a false sense of certainty." },
];

export const testingFaqs: { q: string; a: string }[] = [
  { q: "What are software testing services?", a: "Software testing services are the practice of evaluating an application to identify defects, validate expected behavior, and assess release readiness. This spans manual and automated testing, functional and non-functional testing, and testing across web, mobile, and API layers — scoped to the specific application's risk profile." },
  { q: "What is the difference between QA and software testing?", a: "Quality Assurance (QA) is process-oriented — the broader strategy for preventing defects through requirements review, coding standards, and process discipline. Software testing is product-oriented — directly evaluating the built application to find defects that already exist. They work together: QA reduces how many defects get introduced, and testing catches the ones that make it through." },
  { q: "What is manual testing?", a: "Manual testing is human testers directly interacting with an application to validate behavior, explore edge cases, and assess usability, without relying on automated scripts. It's particularly valuable for exploratory testing, usability assessment, and complex edge-case scenarios that require human judgment." },
  { q: "What is automated testing?", a: "Automated testing uses code to execute test scenarios automatically, making it feasible to repeatedly validate functionality — especially regression checks — quickly and consistently as an application changes. It's typically distributed across unit, integration, API, and UI layers." },
  { q: "Manual testing vs. automation testing — which should I use?", a: "Most applications need both. Automation handles repeatable, stable checks efficiently. Manual testing handles exploratory testing, usability assessment, and edge cases that require human judgment automation isn't designed to catch." },
  { q: "When should testing be automated?", a: "Automate tests that will run repeatedly, that validate stable functionality rather than features still actively changing, and where manual execution is slow or error-prone relative to how often it needs to run." },
  { q: "How much does software testing cost?", a: "Cost depends on application size, platforms and browsers requiring coverage, testing scope, automation requirements, integration complexity, and release frequency. A one-time testing project and an ongoing QA engagement have meaningfully different cost structures." },
  { q: "How long does software testing take?", a: "Timeline depends on application complexity, number of features and platforms, how much existing test coverage there is, automation scope, and defect volume discovered during execution. An accurate estimate requires a scoping conversation specific to your application." },
  { q: "What types of software testing are available?", a: "Major categories include functional testing, regression testing, API testing, performance testing, security testing, accessibility testing, mobile and cross-browser testing, usability testing, and end-to-end testing — each serving a different purpose." },
  { q: "What is regression testing?", a: "Regression testing re-validates previously working functionality after a code change, to confirm the change didn't unintentionally break something that used to work. It's ideally run continuously through automated suites integrated into CI/CD." },
  { q: "What is functional testing?", a: "Functional testing validates that specific features behave according to defined requirements — confirming what the application actually does. Test cases are derived from requirements and acceptance criteria." },
  { q: "What is API testing?", a: "API testing evaluates an application's APIs directly — endpoint behavior, authentication, request and response validation, error handling, and data integrity — without going through the user interface. It's typically faster and more stable than equivalent UI-level testing." },
  { q: "What is performance testing?", a: "Performance testing evaluates how an application behaves under expected and extreme conditions, covering load testing, stress testing, spike testing, and endurance testing. It measures response time, throughput, resource utilization, and identifies bottlenecks." },
  { q: "What is security testing?", a: "Security testing evaluates an application for vulnerabilities in authentication, authorization, session management, input validation, and access control. Standard QA-level security testing catches common patterns but isn't a substitute for a dedicated penetration test or full security audit." },
  { q: "What is mobile app testing?", a: "Mobile app testing evaluates native, hybrid, or cross-platform applications across Android and iOS, covering device fragmentation, OS version differences, network conditions, permissions, notifications, offline behavior, and app lifecycle events." },
  { q: "What is cross-browser testing?", a: "Cross-browser testing validates that a web application behaves consistently across the different browsers your users actually use. Testing scope is typically based on real usage analytics." },
  { q: "What is continuous testing, and how does QA fit into CI/CD?", a: "Continuous testing embeds automated validation directly into the software delivery pipeline. Different tests run at different pipeline stages — fast unit tests on every commit, targeted checks on pull requests, fuller regression before deployment, and smoke tests after deployment." },
  { q: "What is shift-left testing?", a: "Shift-left testing means moving quality validation earlier in the development process — testing during development rather than concentrating effort right before release. This catches defects when they're cheaper and faster to fix." },
  { q: "How do you test SaaS applications?", a: "SaaS testing prioritizes multi-tenancy and data isolation, subscription and billing accuracy, role-based access control, API reliability, and testing compatible with frequent or continuous deployment cycles." },
  { q: "Can US and Canadian businesses hire your software testing team?", a: "Yes, we work with businesses across the United States and Canada on software testing services, from startups to enterprises, using a structured, risk-based process covering strategy, planning, execution, automation, and reporting." },
];

export const finalCta = {
  headline: "Get Started",
  steps: [
    "Discuss your application and goals — what you've built, how it's used, and what's at stake if something breaks",
    "Get a QA assessment — a review of current testing coverage, gaps, and risk areas",
    "Define testing scope — which testing types and depth make sense for your risk profile",
    "Plan automation strategy — where automation adds real, sustainable value",
    "Execute and report — testing execution with clear, actionable defect and coverage reporting",
    "Establish ongoing QA — where relevant, integrating continuous testing into your release process",
  ],
  primaryCta: "Discuss Your Testing Requirements",
  secondaryCta: "Get a QA Assessment",
};

export { EMERGING_TECHNOLOGIES_PILLAR_PATH };
