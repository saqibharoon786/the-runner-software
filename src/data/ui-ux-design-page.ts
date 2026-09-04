import type { LucideIcon } from "lucide-react";
import {
  Search,
  Layers,
  Palette,
  Layout,
  Smartphone,
  Shield,
  Code2,
  Eye,
  Users,
} from "lucide-react";
import { getEmergingTechnologiesServicePath, DESIGN_PILLAR_PATH } from "./services-menu";

const etPath = getEmergingTechnologiesServicePath;

export const uiUxDesignSeo = {
  title: "UI/UX Design Services | The Runner Software Solutions",
  description:
    "UI/UX design services grounded in research, information architecture & usability testing — for SaaS, web, and mobile products in the USA and Canada.",
  h1: "UI/UX Design Services Built on Research, Not Just Visual Polish",
  canonicalPath: "/services/design/ui-ux-design",
  ogTitle: "UI/UX Design Services | The Runner Software Solutions",
  ogDescription:
    "Research-driven UI/UX design for SaaS, web, and mobile products — information architecture, design systems, usability testing, and developer handoff, built for the USA and Canada.",
  twitterTitle: "UI/UX Design Services | The Runner Software Solutions",
  twitterDescription:
    "Research-driven UI/UX design for SaaS, web, and mobile products — information architecture, design systems, usability testing, and developer handoff, built for the USA and Canada.",
};

export const uiUxHero = {
  intro:
    "Most UI/UX problems aren't visual problems — they're the result of skipping the research and structural decisions that should happen before anyone opens a design tool. A dashboard that buries the metric users actually check every day, a checkout flow that asks for information in the wrong order, an onboarding sequence that shows every feature before the user has done anything useful — these are information architecture and workflow failures, not color or typography failures. The Runner Software Solutions designs UI/UX for SaaS platforms, web applications, and mobile products for businesses across the United States and Canada, starting from user goals and workflows, not a visual template.",
  summary:
    "UI/UX design services cover the research, structure, and interface work that determines whether a digital product is actually usable — user research, information architecture, wireframing and prototyping, interface design, design systems, usability testing, and the handoff work that gets a design built correctly. We work with startups designing a product from scratch and enterprises redesigning applications that have accumulated years of inconsistent UI and unclear navigation.",
  primaryCta: "Discuss Your Product Design",
  secondaryCta: "Get a UX Consultation",
};

export const uiVsUx = {
  title: "What Is the Difference Between UI and UX Design?",
  ui: "UI (user interface) design is the visual and interactive layer of a product — typography, color, spacing, components, visual hierarchy, and the specific states (default, hover, active, disabled, error) that make an interface behave predictably. UI design answers: what does this look like, and how does it respond when a user interacts with it?",
  ux: "UX (user experience) design is the broader discipline of understanding user goals, mapping workflows, structuring information, and validating that a product actually lets people accomplish what they came to do. UX design answers: does this product make sense, can users find what they need, and does it actually solve their problem efficiently?",
  together:
    "UX defines the structure and logic — what screens exist, what order tasks happen in, what information a user needs at each step. UI gives that structure a visual form users can actually perceive, navigate, and trust. Good product design treats these as inseparable — UX research and structure inform what gets designed, and UI decisions need to reinforce, not fight against, the underlying user workflow.",
};

export const designServices: {
  title: string;
  what: string;
  problem: string;
  when: string;
  deliverables: string;
  webLink?: { before: string; text: string; href: string; after: string };
}[] = [
  { title: "UX Research", what: "Structured investigation into who your users are, what they're trying to accomplish, and where they struggle.", problem: "Design decisions based on assumptions rather than evidence.", when: "Before any significant design work begins on a new product, and before any major redesign.", deliverables: "Research findings summary, user personas, journey maps, and prioritized usability issues." },
  { title: "User Research", what: "The specific methods — interviews, surveys, usability testing, behavioral analysis — used to gather direct evidence from real or representative users.", problem: "The gap between what a team assumes users want and what users actually need or do.", when: "Whenever there's genuine uncertainty about user needs, workflows, or pain points.", deliverables: "Interview recordings/notes, survey results, and synthesized findings." },
  { title: "UX Strategy", what: "Aligning design direction with business objectives, user needs, and technical constraints before detailed design work begins.", problem: "Design work that looks good in isolation but doesn't serve business goals or fit realistic development constraints.", when: "At the start of a significant new product or redesign effort.", deliverables: "A strategy document outlining priorities, success criteria, and key design principles." },
  { title: "Information Architecture", what: "Structuring content, features, and navigation so users can find what they need and understand how parts of a product relate.", problem: "Disorganized products where features exist but are hard to discover.", when: "For any product with meaningful content or feature depth, particularly SaaS platforms.", deliverables: "Site maps, navigation structures, and content hierarchies." },
  { title: "User Flow Design", what: "Mapping the specific sequence of steps a user takes to complete a task, from entry point to completion.", problem: "Workflows with unnecessary steps, unclear next actions, or dead ends.", when: "For any multi-step process — signup, checkout, onboarding, or core product workflows.", deliverables: "Flow diagrams showing decision points, screens, and system responses." },
  { title: "Wireframing", what: "Low-to-mid fidelity layouts establishing structure and content placement without visual design detail.", problem: "Committing to visual design before structural decisions are validated.", when: "Early in a project, before high-fidelity design or development begins.", deliverables: "Low-fidelity and mid-fidelity wireframes for key screens and flows." },
  { title: "Interactive Prototyping", what: "Clickable, navigable representations of a product that simulate real interaction without requiring actual development.", problem: "Validating whether a workflow actually makes sense before investing in development.", when: "For complex workflows, new product concepts, or any design where stakeholder or user validation matters.", deliverables: "Interactive Figma prototypes covering key user flows." },
  { title: "UI Design", what: "The detailed visual design of screens and components — typography, color, spacing, iconography, and interaction states.", problem: "Interfaces that are structurally sound but visually unclear, inconsistent, or untrustworthy.", when: "Once structure and flows are validated, as the design moves toward production-ready fidelity.", deliverables: "High-fidelity screen designs and a component library." },
  { title: "Interaction Design", what: "Defining how interface elements behave and respond to user input — transitions, feedback, micro-interactions, and state changes.", problem: "Interfaces that look complete but feel unresponsive or confusing when actually used.", when: "For any interface with meaningful interactivity beyond static content.", deliverables: "Interaction specifications and prototypes demonstrating key behaviors." },
  { title: "Design Systems", what: "A governed library of reusable components, patterns, and design tokens ensuring consistency across a product.", problem: "Visual and behavioral inconsistency that accumulates as a product grows.", when: "Particularly valuable for SaaS products, enterprise applications, and products maintained by multiple teams.", deliverables: "A documented component library with usage guidelines." },
  { title: "Responsive Web Design", what: "Designing interfaces that adapt appropriately across screen sizes, from mobile browsers to large desktop displays.", problem: "Interfaces that work well on one device size and break down on others.", when: "For any web product accessed across varied devices, which today is nearly universal.", deliverables: "Responsive layouts and breakpoint specifications for key screens.", webLink: { before: "For web products where design and build happen together, our ", text: "Web Development", href: "/services/web-mobile-development/web-development", after: " team implements these responsive layouts directly." } },
  { title: "Mobile App UI/UX Design", what: "Design specifically for native or cross-platform mobile applications, accounting for touch interaction, platform conventions, and mobile-specific constraints.", problem: "Interfaces designed with a desktop mental model that don't work well on mobile devices.", when: "For any dedicated mobile application.", deliverables: "Mobile-specific screens, interaction patterns, and platform-appropriate navigation structures." },
  { title: "SaaS Product Design", what: "Design for subscription software products, accounting for onboarding, role-based access, data-heavy interfaces, and long-term product evolution.", problem: "SaaS products that are hard to onboard into, confusing to navigate as features accumulate.", when: "For any SaaS product from initial build through ongoing feature expansion.", deliverables: "Onboarding flows, core product screens, and a scalable design system." },
  { title: "Dashboard Design", what: "Design specifically for data-dense interfaces where users need to monitor, analyze, and act on information efficiently.", problem: "Dashboards that display data without prioritizing what actually matters to the user's task.", when: "For any product with a reporting, analytics, or monitoring interface.", deliverables: "Dashboard layouts with defined visual hierarchy and role-based views." },
  { title: "Enterprise UX Design", what: "Design for internal or B2B software supporting complex workflows, multiple user roles, and organizational structure.", problem: "Enterprise software that's functionally comprehensive but genuinely difficult for employees to use efficiently.", when: "For internal tools, B2B platforms, and enterprise-scale applications.", deliverables: "Role-based interface designs and workflow documentation." },
  { title: "UX Audit", what: "A structured evaluation of an existing product's usability, accessibility, and design consistency.", problem: "Knowing specifically what's wrong with an underperforming product rather than guessing.", when: "Before committing to a redesign, or when a product is underperforming without a clear diagnosis.", deliverables: "A findings report with prioritized, actionable recommendations." },
  { title: "UI Redesign", what: "Updating the visual design of an existing product while largely preserving its underlying structure and workflows.", problem: "Outdated or inconsistent visual design without requiring a full structural rebuild.", when: "When the underlying UX is sound but the visual design has become dated or inconsistent.", deliverables: "Updated UI designs and an accompanying design system." },
  { title: "Product Redesign", what: "A more comprehensive redesign addressing both structural UX issues and visual design, typically informed by a UX audit.", problem: "Products with deeper usability problems that a visual-only refresh wouldn't fix.", when: "When research or an audit reveals structural, not just visual, problems.", deliverables: "Revised information architecture, flows, and full UI redesign." },
  { title: "Usability Testing", what: "Observing real users attempting to complete tasks with a design or product.", problem: "Design decisions that seem reasonable internally but don't hold up when real users try to use them.", when: "Before launch of significant new flows, and periodically for existing products.", deliverables: "Session recordings, findings, and prioritized recommendations." },
  { title: "Accessibility Design", what: "Designing interfaces usable by people with visual, motor, auditory, or cognitive impairments.", problem: "Products that exclude a meaningful portion of potential users and, in some contexts, carry legal risk.", when: "Ideally from the start of any project, not retrofitted later.", deliverables: "Accessibility annotations integrated into design files and component specifications." },
  { title: "Developer Handoff", what: "The structured transfer of design specifications, assets, and behavior documentation to the development team.", problem: "Designs that look correct in Figma but get built inconsistently due to missing specification.", when: "As an ongoing part of every project, not a one-time event at the end.", deliverables: "Annotated Figma files, design tokens, and component specifications." },
];

export const uxResearch = {
  title: "UX Research",
  intro: "Designers, however experienced, aren't the target user, and internal assumptions about what users want are frequently wrong in specific, consequential ways. Research replaces assumption with evidence.",
  methods: [
    "User interviews — direct conversations uncovering goals, frustrations, and mental models",
    "Surveys — gathering input at scale, useful for validating patterns observed in smaller-scale interviews",
    "Competitor research — understanding how comparable products solve similar problems",
    "Stakeholder interviews — internal perspective from sales, support, and product teams",
    "User personas — synthesized representations of key user types, grounding design decisions in evidence",
    "Customer journey mapping — visualizing a user's full experience across touchpoints",
    "Behavioral analysis — using analytics data to understand what users actually do",
    "Usability testing — observing real task attempts",
    "Analytics — quantitative data on usage patterns, drop-off points, and feature adoption",
    "User pain points — the specific, recurring frustrations research surfaces",
    "Task analysis — breaking down what a user actually needs to accomplish and in what sequence",
  ],
  informs:
    "Navigation structure should reflect how users actually think about content. Workflows should be sequenced around the order users naturally think through a task. Feature priorities should reflect what research shows users actually struggle with. Information architecture should be validated against real user mental models — through methods like card sorting or tree testing — rather than assumed from an org chart.",
};

export const informationArchitecture = {
  title: "Information Architecture",
  intro: "Information architecture is the structural backbone of a product — how content and features are organized, categorized, labeled, and connected.",
  components: [
    "Content hierarchy — what's most important, and does the structure reflect that?",
    "Navigation — the primary means users move through the product",
    "Categories — grouping related content or functionality logically, based on user mental models",
    "Labeling — the words used to describe categories and functions, matching users' vocabulary",
    "Search — for content-heavy or feature-rich products, search often matters as much as navigation",
    "User flows — how information architecture translates into the actual paths users take",
    "Page relationships — how screens and sections connect to each other",
  ],
  example: "Dashboard → Customers → Orders → Reports → Settings — the underlying decision of whether Orders is a sub-section of Customers or a top-level peer depends entirely on how users actually think about the relationship in their own workflow.",
  closing:
    "A feature that's genuinely useful but buried three levels deep in an illogical hierarchy might as well not exist for most users, no matter how well it's designed once found.",
};

export const wireframesPrototypes = {
  title: "Wireframes + Prototypes",
  lowFidelity: "Low-fidelity wireframes establish basic layout and content placement — boxes, rough text, and general structure — deliberately excluding visual design detail.",
  highFidelity: "High-fidelity wireframes add more structural detail while still generally avoiding final visual styling.",
  interactive: "Interactive prototypes are clickable, navigable simulations connecting screens together so a user can move through a flow as if using the real product.",
  production: "Production UI is the final, fully designed interface, specified in enough detail to be built accurately by developers.",
  closing:
    "A workflow that looks reasonable as a static wireframe can reveal real problems once someone actually tries to move through it interactively. We commonly build prototypes in Figma to simulate realistic navigation and test flows before committing engineering time.",
};

export const designSystems = {
  title: "Design Systems",
  intro: "A design system is a governed, documented library of reusable components and design rules that keeps a product visually and behaviorally consistent as it grows.",
  elements: [
    "Design tokens — foundational values (colors, spacing units, typography scales) that everything else references",
    "Typography — a defined type scale and usage rules",
    "Color systems — a defined palette with clear usage rules for primary, secondary, and semantic colors",
    "Spacing — a consistent spacing scale preventing arbitrary padding and margin choices",
    "Buttons, inputs, cards, tables, modals, navigation — core reusable components with all necessary states",
    "Component states — default, hover, active, focus, disabled, error, and loading states for every interactive component",
    "Accessibility — contrast, focus indicators, and semantic structure built into components at the system level",
    "Responsive behavior — how components adapt across screen sizes, defined once at the system level",
  ],
  valuableFor: [
    "SaaS products — long product lifecycles with continuously added features",
    "Enterprise applications — complex, multi-screen applications where consistency affects learnability",
    "Large websites — many pages needing visual and structural consistency",
    "Products with multiple teams — without a shared system, different teams drift toward inconsistent patterns",
    "Rapidly growing applications — a system that lets new features be designed and built faster",
  ],
  closing:
    "A documented system gives developers a clear reference for exactly how a component should look and behave in every state, reducing ambiguity and back-and-forth during implementation.",
};

export const mobileUx = {
  title: "Mobile App UI/UX",
  intro: "Mobile UX has genuinely distinct considerations from desktop or web design, not just a smaller version of the same interface:",
  considerations: [
    "Touch targets — interactive elements sized appropriately for finger interaction",
    "Navigation — mobile navigation patterns (tab bars, bottom sheets, gesture-based navigation)",
    "Gestures — swipe, pinch, and long-press interactions used in ways users expect",
    "Responsive layouts — adapting cleanly across phone and tablet screen sizes",
    "Screen hierarchy — mobile's limited screen real estate demands more deliberate prioritization",
    "Onboarding — mobile onboarding needs to get users to value quickly",
    "Forms — minimizing typing wherever possible on touch keyboards",
    "Notifications — push notifications designed to be useful rather than annoying",
    "Accessibility — platform-specific considerations (VoiceOver, TalkBack)",
    "Platform conventions — iOS and Android each have established interaction conventions",
    "Performance perception — loading states and optimistic UI updates as genuine design considerations",
  ],
  closing:
    "Mobile design has to account for a smaller screen, touch rather than cursor input, variable network conditions, and platform-specific conventions — mobile UX generally can't be a direct port of a desktop design.",
};

export const saasDashboard = {
  title: "SaaS + Dashboard Design",
  intro: "SaaS and dashboard interfaces have distinct requirements, since they're tools people return to and rely on repeatedly:",
  requirements: [
    "Data density — balancing showing enough information against overwhelming the user",
    "Navigation — needs to scale gracefully as a SaaS product's feature set grows",
    "Role-based dashboards — different user roles often need meaningfully different views",
    "Filters — letting users narrow data to what's relevant to their current task",
    "Tables — a core SaaS UI pattern requiring careful attention to sorting and action affordances",
    "Analytics — visualizations that communicate the relevant pattern or trend",
    "Empty states — thoughtfully designed for new users or filtered views with no results",
    "Loading states — communicating that something is happening",
    "Error states — clear, actionable messaging when something goes wrong",
    "Permissions — interface elements that respect what a given user can see or do",
    "Onboarding — guiding new users to their first meaningful success",
    "Search — critical once a product's data or feature set grows beyond what's easily browsable",
    "Notifications — surfacing relevant events without becoming noise",
    "Responsive behavior — many SaaS products need to work reasonably well across desktop and mobile",
  ],
  approach:
    "When designing a dashboard, we first identify the decisions users need to make rather than starting with visual components. High-priority metrics that drive that decision should have stronger visual hierarchy, while secondary information can remain accessible without competing for attention.",
  closing:
    "Enterprise dashboards should prioritize task efficiency rather than visual decoration — for a tool someone uses many times a day, small friction points compound into real cost over time.",
};

export const uxAuditRedesign = {
  title: "UX Audit + Redesign",
  auditSteps: [
    "Heuristic evaluation — assessing the product against established usability principles",
    "User-flow analysis — mapping existing flows to identify unnecessary steps, dead ends, or confusing branches",
    "Navigation review — evaluating whether the current information architecture reflects how users think",
    "Accessibility review — checking against accessibility standards",
    "Mobile responsiveness — evaluating how the product performs across device sizes",
    "Interaction analysis — reviewing how interface elements behave and provide feedback",
    "Conversion friction — identifying specific points where users are likely dropping off",
    "Content hierarchy — assessing whether visual priority matches genuine importance",
    "Visual consistency — cataloging inconsistencies in components, spacing, typography, and color",
    "Usability testing — where appropriate, direct observation of real users attempting key tasks",
  ],
  closing:
    "Redesign priorities should follow directly from what the audit actually surfaces — a product with sound structure but dated visuals needs a different scope of work than one with genuine navigation and workflow problems. We scope redesign work based on audit findings rather than assuming a full rebuild is necessary by default.",
};

export const accessibility = {
  title: "Accessibility",
  intro: "Accessibility should be considered during design, not added at the end. Retrofitting accessibility into a design after visual and interaction decisions are locked in is significantly more expensive and less effective.",
  practices: [
    "WCAG (Web Content Accessibility Guidelines) — the widely referenced standard for web accessibility",
    "Keyboard navigation — ensuring every interactive element is reachable and operable without a mouse",
    "Color contrast — sufficient contrast between text and background",
    "Readable typography — appropriate font sizing, line height, and line length",
    "Focus states — visible indication of which element currently has keyboard focus",
    "Semantic structure — using appropriate HTML/component semantics for assistive technology",
    "Screen readers — designing content and structure that translates coherently when read aloud",
    "Accessible forms — clear labels, error messaging tied to the relevant field, and logical tab order",
    "Touch targets — adequately sized interactive elements",
    "Error messaging — clear, specific, and programmatically associated with the relevant input",
  ],
  disclaimer:
    "We do not make unsupported legal or compliance claims — specific legal accessibility requirements (ADA, AODA, and similar) vary by jurisdiction and context, and formal compliance should be confirmed through appropriate legal and accessibility audit processes.",
};

export const developerHandoff = {
  title: "Design → Development Handoff",
  intro: "Professional design-to-development handoff is an ongoing collaboration, not a single file transfer at the end of a project.",
  items: [
    "Component specifications — exact measurements, spacing, and behavior for every reusable component",
    "Responsive states — how each component and layout behaves across breakpoints",
    "Design tokens — underlying values exported in a form developers can reference directly",
    "Assets — icons, images, and other visual assets exported in appropriate formats",
    "Interaction states — hover, focus, active, and disabled states specified for every interactive element",
    "Spacing and typography — precise, consistent values developers can implement exactly",
    "Component behavior — how a component responds to different data conditions (empty, loading, error, long content)",
    "Figma inspection — using Figma's built-in inspection tools for exact values",
    "Documentation — written guidance accompanying the design files, covering intent and edge cases",
  ],
  closing:
    "Technical constraints can meaningfully affect what's feasible to build, and catching this during design — rather than after a design is finished — avoids expensive late-stage redesign. Ongoing collaboration means developers understand design intent well enough to make good judgment calls on edge cases.",
};

export const designProcess: { step: string; title: string; why: string; decisions: string }[] = [
  { step: "01", title: "Discovery", why: "Every subsequent decision should be grounded in business and product context.", decisions: "Project scope and priorities." },
  { step: "02", title: "User & Business Research", why: "Replacing assumption with evidence before committing to design direction.", decisions: "Key user needs, pain points, and priorities." },
  { step: "03", title: "UX Strategy", why: "Prevents design work that looks good but doesn't serve business or user goals.", decisions: "Project principles and success criteria." },
  { step: "04", title: "Information Architecture", why: "This is the foundation everything else builds on — getting it wrong is expensive to fix later.", decisions: "Site/product structure and navigation model." },
  { step: "05", title: "User Flows", why: "Validates that workflows are logical and efficient before any visual investment.", decisions: "Flow structure for core tasks." },
  { step: "06", title: "Wireframes", why: "Structural changes are cheap here and expensive later.", decisions: "Screen layout and content placement." },
  { step: "07", title: "Prototyping", why: "Surfaces workflow issues that static wireframes don't reveal.", decisions: "Flow refinements based on prototype testing." },
  { step: "08", title: "UI Design", why: "This is where structure becomes a real, usable, trustworthy interface.", decisions: "Final visual treatment for all key screens." },
  { step: "09", title: "Design System", why: "Ensures consistency and speeds up future design and development work.", decisions: "Component structure, states, and documentation standards." },
  { step: "10", title: "Usability Testing", why: "Catches usability issues before launch rather than after.", decisions: "Pre-launch refinements based on test findings." },
  { step: "11", title: "Developer Handoff", why: "Accurate handoff determines whether the built product matches the intended design.", decisions: "Final specifications and asset delivery." },
  { step: "12", title: "Design QA", why: "Implementation gaps are common and correctable if caught early.", decisions: "What needs correction before launch." },
  { step: "13", title: "Iteration", why: "Launch is a starting point — real usage reveals what design decisions actually worked.", decisions: "Ongoing design priorities based on real data." },
];

export const approachSections = {
  research: "Research scope should match the actual uncertainty in a project. We start by identifying the specific questions we genuinely don't have confident answers to, then select research methods suited to answering those questions rather than running a generic research battery.",
  dashboards: "Complex dashboards fail most often from trying to show everything with equal visual weight. Our approach starts by identifying the specific decisions or actions a dashboard needs to support, prioritizing based on decision frequency and consequence, and building in progressive disclosure rather than presenting maximum density on the first screen.",
  aboveFold: "\"Above the fold\" thinking should follow from user priority, not visual convention. We start from what a user most needs to see or do immediately upon landing on a screen — informed by research — rather than defaulting to a generic template.",
  friction: "Friction reduction starts with mapping the actual steps a user currently has to take, then asking which steps are genuinely necessary. We prioritize friction reduction in high-frequency or high-value flows first.",
  responsive: "Responsive design starts from content and task priority, not from shrinking a desktop layout proportionally. Layout decisions are made based on what actually matters most to users on that device context.",
  designSystems: "We build design systems incrementally, starting from patterns that already recur across multiple screens. Token structure is established early, and components are specified with every relevant state.",
  handoff: "We involve development perspective during design, not just at handoff. Final handoff includes exact specifications, design tokens, and explicit documentation of edge-case behavior, followed by design QA against the built product.",
};

export const commonMistakes = [
  "Starting with visual design before structure is validated — leading to expensive rework",
  "Designing for the \"average user\" instead of specific, researched personas",
  "Inconsistent components across screens — the visible symptom of missing design system discipline",
  "Missing states — designs that only show the default, happy-path state",
  "Accessibility treated as a final checklist item rather than a structural consideration from the start",
  "Navigation based on internal org structure rather than user mental models",
  "Overloaded dashboards with no clear visual priority",
  "Handoff specifications that are visually approximate rather than exact",
];

export const uxConversion = {
  title: "UX and Conversion",
  influences: [
    "Conversion — reducing friction and confusion in the path to a desired action",
    "Onboarding — helping new users reach genuine value quickly",
    "Form completion — reducing abandonment through clearer structure and error handling",
    "Checkout — a specific, high-stakes flow where friction directly costs revenue",
    "Lead generation — clearer value communication and lower-friction paths to conversion",
    "Retention — interfaces that remain usable and pleasant as users engage repeatedly",
    "Feature adoption — surfacing relevant functionality at the right moment",
    "Task completion — the fundamental measure of whether a product's UX is actually working",
  ],
  disclaimer:
    "We do not make guaranteed claims like \"great UX will increase conversions by 50%.\" Actual outcomes depend on the specific product, target users, existing traffic quality, the underlying offer, implementation quality, and how thoroughly changes are tested.",
};

export const industryUseCases = [
  { industry: "SaaS / Software Products", desc: "Onboarding, dashboard design, and design systems that scale with continuous feature growth" },
  { industry: "Ecommerce", desc: "Product discovery, cart and checkout flows, and mobile commerce experience" },
  { industry: "FinTech", desc: "Clarity and trust in interfaces handling financial data and transactions" },
  { industry: "Healthcare", desc: "Patient-facing and administrative interfaces with careful attention to clarity and accessibility" },
  { industry: "Education", desc: "Interfaces supporting varied user ages and technical comfort levels" },
  { industry: "Logistics", desc: "Operational dashboards where task efficiency for frequent, repetitive use is the primary goal" },
  { industry: "Enterprise Software", desc: "Complex, role-based interfaces supporting multi-step organizational workflows" },
  { industry: "B2B Platforms", desc: "Interfaces balancing the needs of multiple stakeholder types within a single organization" },
  { industry: "Mobile Applications", desc: "Platform-appropriate design accounting for touch interaction and mobile-specific constraints" },
  { industry: "Customer Portals", desc: "Self-service interfaces usable by customers with varying technical familiarity" },
  { industry: "Internal Business Applications", desc: "Tools designed for daily, repeated use by employees, where efficiency matters most" },
  { industry: "Dashboards", desc: "Data-dense interfaces prioritizing clear visual hierarchy tied to actual user decisions" },
  { industry: "Marketplaces", desc: "Interfaces serving distinct buyer and seller user needs simultaneously" },
];

export const designCost = {
  title: "UI/UX Design Cost",
  intro: "There's no fixed price — cost depends on the number of screens, product complexity, and how much research and testing the project genuinely requires. Key factors:",
  factors: [
    "Number of screens — more screens generally means more design and iteration time",
    "Product complexity — a straightforward marketing site differs substantially from a complex, multi-role SaaS platform",
    "UX research — the scope of research directly affects cost",
    "User testing — usability testing adds cost but often reduces downstream rework",
    "Design system requirements — building a comprehensive design system is a meaningfully larger investment",
    "Responsive designs — designing thoroughly for multiple breakpoints adds design time",
    "Mobile + web platforms — designing for both meaningfully increases scope",
    "Prototypes — the depth and interactivity of prototyping needed",
    "Integrations — designs accounting for specific third-party integrations or complex data sources",
    "Enterprise workflows — complex, multi-role, multi-step workflows require more design and validation effort",
    "Redesign scope — a targeted UI refresh differs substantially from a comprehensive UX and UI redesign",
    "Number of user roles — each distinct role generally requires its own design consideration",
    "Design revisions — the number of review and iteration cycles built into the engagement",
    "Accessibility requirements — thorough accessibility work adds genuine design and validation time",
  ],
  closing:
    "UI-only projects can differ substantially from complete UX research + product design engagements. We scope cost based on your specific project's actual needs, confirmed through discovery.",
};

export const designTimeline = {
  title: "UI/UX Design Timeline",
  intro: "Timeline depends heavily on project scope. Factors that most affect it:",
  factors: [
    "Project scope — a single landing page redesign versus a full product design engagement",
    "Number of screens — more screens require more design and review time",
    "Research requirements — thorough research adds time upfront but often reduces costly revisions later",
    "Complexity — data-dense, multi-role, or highly interactive products take longer",
    "Number of user flows — more distinct workflows to design and validate extends timeline",
    "Design system — building a comprehensive system takes real time but pays off across the project",
    "Testing — usability testing cycles add time but improve confidence in the final design",
    "Stakeholder review — how many people need to review and how quickly they turn around feedback",
    "Platform count — designing for both web and mobile takes longer than a single platform",
  ],
  closing: "We don't provide unrealistic universal timelines — a realistic estimate depends on your specific project scope, confirmed during discovery.",
};

export const usaSection = {
  title: "UI/UX Design Services for USA Businesses",
  body: "We work with businesses across the United States on UI/UX design — serving as a UI/UX design agency for SaaS companies, startups, and enterprises redesigning existing digital products. UI/UX design services in the USA context often involve design for teams already operating with an established brand identity, requiring design work that extends and respects existing visual language rather than starting from a blank slate. As a UI UX design agency serving the USA, our team works remotely with distributed stakeholders throughout research, design, and development handoff.",
};

export const canadaSection = {
  title: "UI/UX Design Services for Canadian Businesses",
  body: "We also support Canadian businesses with UI/UX and product design, including SaaS companies and enterprises across the country. Canadian projects sometimes involve bilingual interface requirements — particularly English/French support — which we factor into information architecture and content design from the start. As a UI UX design agency serving Canada, we work remotely with Canadian teams throughout the design process.",
};

export const whyChooseRunner: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "Research-grounded design decisions", desc: "Structure and workflow decisions informed by actual user research, not designer assumption" },
  { icon: Layers, title: "Genuine UX and UI integration", desc: "The same team carries context from research through final interface design" },
  { icon: Palette, title: "Design system expertise", desc: "Building governed, scalable component libraries appropriate to SaaS and enterprise products" },
  { icon: Shield, title: "Accessibility built in", desc: "Accessibility considered from the start of design work, not retrofitted at the end" },
  { icon: Code2, title: "Development-aware design", desc: "Technical constraints and feasibility considered throughout the design process" },
  { icon: Eye, title: "Honest scope guidance", desc: "Including telling you when a targeted redesign will address your actual problem" },
  { icon: Users, title: "Ongoing collaboration through implementation", desc: "Available for design QA and iteration support through and beyond initial handoff" },
];

export const uiUxFaqs = [
  { q: "What is UI/UX design?", a: "UI/UX design covers both the visual interface (UI) and the underlying user experience (UX) of a digital product. UX design focuses on user goals, workflows, information architecture, and usability. UI design focuses on the visual and interactive layer — typography, color, spacing, and component behavior." },
  { q: "What is the difference between UI and UX design?", a: "UX design is the structural and research-driven discipline of organizing a product so it's usable and logical. UI design is the visual and interaction layer built on top of that structure. They're complementary: strong UX without good UI can feel unclear; strong UI without solid UX can look polished but function confusingly." },
  { q: "What does a UI/UX design agency do?", a: "A UI/UX design agency conducts user and business research, defines information architecture and user flows, creates wireframes and prototypes, designs interfaces and design systems, tests usability, and hands off detailed specifications to development teams." },
  { q: "How much does UI/UX design cost?", a: "Cost depends on the number of screens, product complexity, research and testing scope, design system requirements, and how many platforms and user roles are involved. A UI-only visual refresh costs meaningfully less than a full UX research and product design engagement." },
  { q: "How long does UI/UX design take?", a: "Timeline depends on project scope, number of screens and flows, research depth, design system requirements, testing cycles, and stakeholder review speed. A realistic estimate is confirmed through discovery." },
  { q: "What is UX research?", a: "UX research is structured investigation into who your users are, what they're trying to accomplish, and where they struggle, using methods like interviews, surveys, usability testing, and behavioral analysis. It replaces design assumptions with evidence." },
  { q: "Why is UX research important?", a: "UX research is important because design decisions based on internal assumptions frequently don't match how real users actually think or behave, leading to products that look reasonable internally but don't work well in practice." },
  { q: "What is usability testing?", a: "Usability testing is observing real or representative users attempting to complete specific tasks with a design or product, surfacing friction and confusion that internal review often misses." },
  { q: "What is a design system?", a: "A design system is a governed, documented library of reusable components, design tokens, and usage rules that keeps a product visually and behaviorally consistent as it grows." },
  { q: "What is a UX audit?", a: "A UX audit is a structured evaluation of an existing product's usability, accessibility, and design consistency, identifying specific, prioritized issues that typically inform the scope of a subsequent redesign." },
  { q: "How does UI/UX design improve conversion rates?", a: "UI/UX design can improve conversion by reducing friction and confusion in key flows like onboarding, forms, and checkout. Actual conversion impact depends on the specific product, users, traffic, and offer — we don't promise guaranteed percentage improvements." },
  { q: "How do you design a SaaS dashboard?", a: "SaaS dashboard design starts by identifying the specific decisions users need to make, then giving high-priority metrics stronger visual hierarchy while keeping secondary information accessible without competing for attention." },
  { q: "How do you design a mobile app user experience?", a: "Mobile app UX design accounts for touch targets, platform-specific navigation conventions, gestures, screen hierarchy given limited space, and performance perception — treating mobile as a genuinely distinct design context." },
  { q: "What is the UI/UX design process?", a: "The process typically flows through discovery, user and business research, UX strategy, information architecture, user flows, wireframes, prototyping, UI design, design system development, usability testing, developer handoff, design QA, and post-launch iteration." },
  { q: "What is information architecture?", a: "Information architecture is the structuring of content, features, and navigation so users can find what they need, based on how users actually think about the product rather than internal organizational structure." },
  { q: "What are wireframes?", a: "Wireframes are low-to-mid fidelity layouts establishing structure and content placement without visual design detail, used early to validate structural decisions cheaply before full design or development investment." },
  { q: "What are prototypes?", a: "Prototypes are interactive, clickable representations of a product that simulate real navigation, used to validate whether workflows genuinely make sense before investing in development." },
  { q: "Why is responsive design important?", a: "Responsive design ensures content and functionality adapt appropriately across the wide range of screen sizes users access a product from, rather than just shrinking a layout proportionally." },
  { q: "How do designers work with developers?", a: "Designers collaborate with developers throughout a project, sharing technical constraints during design and providing detailed specifications at handoff, followed by design QA against the built product." },
  { q: "Can US and Canadian businesses hire your UI/UX design team?", a: "Yes, we work with businesses across the United States and Canada on UI/UX and product design, with projects scoped around each business's specific product and users, with remote collaboration throughout research, design, and development handoff." },
];

export const finalCta = {
  headline: "Let's Discuss Your Product Design",
  body: "Whether you're designing a new SaaS product from scratch, redesigning an application that's accumulated years of inconsistency, or need a UX audit to understand what's actually going wrong before committing to a redesign, we can help you think through the right scope and approach.",
  steps: [
    "Discuss your product, users, and goals",
    "Review existing research, analytics, or prior design work",
    "Define project scope — research depth, platforms, design system needs",
    "Plan a design process and timeline",
    "Research, design, prototype, and test",
    "Hand off to development with full specifications",
    "Support design QA and post-launch iteration",
  ],
  crossLinks: [
    { before: "For businesses building the underlying product these designs get implemented into, our ", text: "Software Product Development", href: "/services/software-development/software-product-development", after: " and " },
    { before: "", text: "Mobile App Development", href: "/services/web-mobile-development/mobile-app-development", after: " teams can support development directly alongside our design work. If your product is a SaaS platform specifically, our " },
    { before: "", text: "SaaS Development", href: etPath("saas-development"), after: " team can support the underlying architecture your designs will be built on." },
  ],
  primaryCta: "Start Your UI/UX Project",
  secondaryCta: "Request a UX Audit",
};

export { DESIGN_PILLAR_PATH };
