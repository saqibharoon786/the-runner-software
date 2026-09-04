"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  Hospital,
  Stethoscope,
  Pill,
  School,
  GraduationCap,
  BookOpen,
  Dumbbell,
  Boxes,
  Users2,
  CreditCard,
  Package,
  Home,
  Building2,
  HardHat,
  Truck,
  ArrowRight,
  CheckCircle2,
  Star,
  AlertTriangle,
  ChevronDown,
  Search,
  Check,
  Zap,
  ShieldCheck,
  FileCode,
  Users,
  DollarSign,
  Layers,
  Sparkles,
  ArrowUp,
  HelpCircle,
  Clock,
  Compass,
} from "lucide-react";

const NAVY = "#0f1a4e";

type SolutionItemData = {
  title: string;
  slug: string;
  industry: string;
  bestFor: string;
  description: string;
  icon: any;
  featured?: boolean;
};

const solutionsGlanceTable: SolutionItemData[] = [
  // Healthcare
  {
    title: "Hospital Management System",
    slug: "hospital-management-system",
    industry: "Healthcare",
    bestFor: "Multi-department hospitals, IPD/OPD, pharmacy & labs",
    description:
      "A unified platform for patient registration, OPD/IPD management, billing, pharmacy, labs, radiology, and staff coordination. Built for hospitals that need multi-department operations without the fragmentation of standalone tools. If you're evaluating hospital software, this is the natural starting point — it's designed to scale from a single facility to a multi-hospital network.",
    icon: Hospital,
    featured: true,
  },
  {
    title: "Clinic Management System",
    slug: "clinic-management-system",
    industry: "Healthcare",
    bestFor: "Single-location practices, outpatient clinics",
    description:
      "A lighter, faster-to-deploy solution for single-location practices. Streamlines appointments, EMR, billing, and patient communication without the overhead of a full hospital-scale deployment — ideal for outpatient clinics, specialty practices, and small medical centers.",
    icon: Stethoscope,
  },
  {
    title: "Pharmacy Management System",
    slug: "pharmacy-management-system",
    industry: "Healthcare",
    bestFor: "Independent pharmacies, hospital-linked dispensing",
    description:
      "Manages inventory, prescriptions, suppliers, and sales in one system. Works standalone for independent pharmacies, or integrates directly with our Hospital and Clinic systems for hospitals that want pharmacy operations connected to patient billing.",
    icon: Pill,
  },
  // Education & Fitness
  {
    title: "School Management System",
    slug: "school-management-system",
    industry: "Education & Fitness",
    bestFor: "K–12 admissions, attendance, fees, parent portals",
    description:
      "Covers admissions, attendance, exams, fees, and parent portals in one platform. Reduces the administrative burden on school staff while giving parents real-time visibility into their child's attendance and academic progress.",
    icon: School,
  },
  {
    title: "College Management System",
    slug: "college-management-system",
    industry: "Education & Fitness",
    bestFor: "Higher education, departments, faculty, semesters",
    description:
      "Built for the added complexity of higher education — multiple departments, course catalogs, faculty management, and detailed student records across semesters and programs.",
    icon: GraduationCap,
  },
  {
    title: "Learning Management System (LMS)",
    slug: "learning-management-system",
    industry: "Education & Fitness",
    bestFor: "Online/hybrid course delivery, assessments",
    description:
      "Delivers courses, assessments, and progress tracking online — for institutions running hybrid or fully online programs, or supplementing in-person teaching with digital coursework.",
    icon: BookOpen,
  },
  {
    title: "Gym Management System",
    slug: "gym-management-system",
    industry: "Education & Fitness",
    bestFor: "Memberships, class scheduling, fitness billing",
    description:
      "Manages memberships, class scheduling, billing, and member engagement for fitness businesses — from single-location gyms to multi-branch fitness chains.",
    icon: Dumbbell,
  },
  // Retail & Business
  {
    title: "ERP Software",
    slug: "erp-software",
    industry: "Retail & Business",
    bestFor: "Finance, HR, inventory unified for growing businesses",
    description:
      "Unifies finance, HR, inventory, and operations in one platform. Built for growing businesses that have outgrown separate accounting, HR, and inventory tools and need one source of truth across departments.",
    icon: Boxes,
  },
  {
    title: "CRM Software",
    slug: "crm-software",
    industry: "Retail & Business",
    bestFor: "Sales pipeline, lead automation, customer analytics",
    description:
      "Manages your sales pipeline, leads, automation, and customer analytics in one place — helping sales teams close more consistently instead of losing leads in inboxes and spreadsheets.",
    icon: Users2,
  },
  {
    title: "POS Software",
    slug: "pos-software",
    industry: "Retail & Business",
    bestFor: "Retail checkout, receipts, inventory sync",
    description:
      "Fast checkout, receipts, inventory sync, and reporting for retail and hospitality businesses — built to keep your sales floor and back-office inventory numbers always in sync.",
    icon: CreditCard,
  },
  {
    title: "Inventory Management System",
    slug: "inventory-management-system",
    industry: "Retail & Business",
    bestFor: "Real-time stock tracking, purchase orders",
    description:
      "Real-time stock tracking, barcode scanning, and purchase order management — reducing both overstock and stockouts across single or multi-location retail operations.",
    icon: Package,
  },
  // Real Estate & Enterprise
  {
    title: "Real Estate CRM",
    slug: "real-estate-crm",
    industry: "Real Estate & Enterprise",
    bestFor: "Leads, listings, agent workflows, deal tracking",
    description:
      "Manages leads, listings, agent workflows, and deal tracking in one pipeline — built specifically for how real estate transactions actually move, from lead to closing.",
    icon: Home,
  },
  {
    title: "Property Management System",
    slug: "property-management-system",
    industry: "Real Estate & Enterprise",
    bestFor: "Tenants, leases, maintenance, rent collection",
    description:
      "Handles tenants, leases, maintenance requests, and rent collection for landlords and property managers overseeing residential or commercial portfolios.",
    icon: Building2,
  },
  {
    title: "Construction Management Software",
    slug: "construction-management-software",
    industry: "Real Estate & Enterprise",
    bestFor: "Projects, contractors, budgets, site progress",
    description:
      "Tracks projects, contractors, budgets, and site progress — giving construction firms visibility into project status and cost overruns before they become expensive problems.",
    icon: HardHat,
  },
  {
    title: "Logistics Management System",
    slug: "logistics-management-system",
    industry: "Real Estate & Enterprise",
    bestFor: "Fleet, delivery scheduling, shipment tracking",
    description:
      "Coordinates fleet, delivery scheduling, and shipment tracking for businesses managing distribution and transportation operations.",
    icon: Truck,
  },
];

const faqItems = [
  {
    question: "1. What types of business software solutions do you offer?",
    answer:
      "We offer industry-specific management systems across four categories: Healthcare (hospital, clinic, and pharmacy management), Education & Fitness (school, college, LMS, and gym management), Retail & Business (ERP, CRM, POS, and inventory management), and Real Estate & Enterprise (real estate CRM, property management, construction management, and logistics management).",
  },
  {
    question: "2. Do I need to buy a full enterprise platform, or can I start with just one module?",
    answer:
      "You can start with a single solution that addresses your most urgent need — for example, just a Clinic Management System or just POS Software — and add more modules or connected systems later as your business grows.",
  },
  {
    question: "3. Can different solutions from your platform work together?",
    answer:
      "Yes. Our solutions share a common platform architecture, so businesses operating across multiple areas — such as a hospital managing its own pharmacy and inventory — can connect systems and share data without manual re-entry between tools.",
  },
  {
    question: "4. How long does implementation typically take?",
    answer:
      "Implementation timelines vary by solution and business size, but most core deployments go live in a matter of weeks using a phased rollout, rather than the 6–12 month timelines common with large enterprise software vendors.",
  },
  {
    question: "5. Is your software suitable for small businesses, or only large enterprises?",
    answer:
      "Both. Our modular pricing model lets small businesses start with essential features at a manageable cost, while larger organizations can scale up to multi-location, multi-department deployments without switching platforms.",
  },
  {
    question: "6. What if my business doesn't fit neatly into one of your existing solutions?",
    answer:
      "Our custom software development team can extend any existing solution or build a bespoke system tailored to your specific workflows, so you're not forced to adapt your operations to fit a rigid, pre-built tool.",
  },
  {
    question: "7. Do your solutions include security and compliance features?",
    answer:
      "Yes. Role-based access control, audit trails, and data protection are built into our solutions as standard, helping businesses in regulated industries like healthcare align with requirements such as HIPAA and GDPR based on their configuration.",
  },
  {
    question: "8. Can I get a demo before committing to a solution?",
    answer:
      "Yes. We offer free consultations and demos for every solution listed on this page, so you can evaluate fit before making a purchasing decision.",
  },
  {
    question: "9. How is your software different from generic, all-purpose business tools?",
    answer:
      "Generic tools are built to be broad, not deep — they handle the basics of every industry but excel at none. Our solutions are purpose-built for the specific workflows, terminology, and compliance needs of each industry we serve, which typically means faster staff adoption and less custom workaround work.",
  },
  {
    question: "10. Which solution should I start with if I'm not sure what I need?",
    answer:
      "Start with the operational area causing you the most friction today — whether that's patient billing, class scheduling, inventory tracking, or tenant management — and book a free consultation. Our team can help map your specific workflow to the right starting solution.",
  },
];

export default function SolutionsPage() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("All");
  const [tableSearchQuery, setTableSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredSolutions = useMemo(() => {
    return solutionsGlanceTable.filter((item) => {
      const matchesCategory = activeCategoryFilter === "All" || item.industry === activeCategoryFilter;
      const q = tableSearchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.industry.toLowerCase().includes(q) ||
        item.bestFor.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategoryFilter, tableSearchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <SiteHeader />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1437] via-[#0f1a4e] to-[#152456] text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#4f6bff]/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <MotionSection className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Purpose-Built Industry Management Systems
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Business Software Solutions <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-white bg-clip-text text-transparent">Built Around Your Industry</span>
            </h1>

            <p className="mt-6 text-lg font-medium text-blue-100/90 md:text-xl">
              Generic, one-size-fits-all software forces your business to adapt to the tool. We build it the other way around.
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
              <p>
                Our <strong className="font-semibold text-white">Business Software Solutions</strong> span four core industries —{" "}
                <strong className="font-semibold text-cyan-300">Healthcare</strong>, <strong className="font-semibold text-cyan-300">Education & Fitness</strong>,{" "}
                <strong className="font-semibold text-cyan-300">Retail & Business</strong>, and <strong className="font-semibold text-cyan-300">Real Estate & Enterprise</strong> — with purpose-built management systems for each one. Instead of stretching a generic CRM or spreadsheet system to cover your operations, you get software designed around how your industry actually works, from day one.
              </p>
              <p>
                Whether you&apos;re running a hospital, a school, a retail chain, or a property portfolio, this page is your starting point to find the right solution — and see how it fits into a bigger ecosystem of tools that can grow with your business.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("industry-solutions")}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0f1a4e] shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none"
              >
                Explore All Solutions Below
                <ChevronDown className="h-4 w-4" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Industry quick jump pills */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Healthcare", id: "healthcare-solutions", icon: Hospital },
                { label: "Education & Fitness", id: "education-fitness-solutions", icon: School },
                { label: "Retail & Business", id: "retail-business-solutions", icon: Boxes },
                { label: "Real Estate & Enterprise", id: "real-estate-enterprise-solutions", icon: Building2 },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 transition hover:border-cyan-300 hover:bg-white/15 hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5 text-cyan-400" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </MotionSection>
        </div>

        {/* Curved bottom divider */}
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 60" className="block h-12 w-full text-white" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* 2. WHY INDUSTRY-SPECIFIC SOFTWARE OUTPERFORMS GENERIC TOOLS */}
      <section className="py-20 md:py-28 bg-white" id="why-industry-specific">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Strategic Advantage</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Why Industry-Specific Software Outperforms Generic Tools
            </h2>
            <p className="mt-4 text-base italic text-slate-600 md:text-lg">
              Before we go category by category, it&apos;s worth answering the question every buyer eventually asks:{" "}
              <span className="font-semibold text-[#0b1437]">why not just use one generic system for everything?</span>
            </p>
          </MotionSection>

          {/* Short answer banner */}
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-slate-50 p-6 md:p-8 shadow-sm">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0f1a4e] text-white">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">The Short Answer</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  Generic software is built to be broad, not deep. It handles the basics of every industry adequately, but excels at none. Industry-specific software, by contrast, is built around the actual workflows, compliance needs, and terminology of your field.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Concrete differences */}
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Compliance built in, not bolted on.",
                desc: "A Hospital Management System needs HIPAA-aligned access controls out of the box. A generic CRM does not — and retrofitting compliance later is expensive and risky.",
                color: "bg-emerald-500/10 text-emerald-600",
              },
              {
                icon: FileCode,
                title: "Terminology and workflows match reality.",
                desc: 'A School Management System understands "academic terms," "attendance percentage thresholds," and "parent-teacher portals" natively. A generic tool requires you to force-fit these concepts into fields that weren\'t designed for them.',
                color: "bg-blue-500/10 text-blue-600",
              },
              {
                icon: Users,
                title: "Faster adoption by staff.",
                desc: "When software already speaks your industry's language, training time drops dramatically — nurses, teachers, and property managers recognize the workflows instantly instead of learning a translation layer.",
                color: "bg-purple-500/10 text-purple-600",
              },
              {
                icon: DollarSign,
                title: "Lower long-term cost of customization.",
                desc: "Every workaround you build into a generic platform is technical debt. Industry-specific software eliminates most of that debt before you even start.",
                color: "bg-amber-500/10 text-amber-600",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionCard
                  key={item.title}
                  delay={idx * 0.08}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </MotionCard>
              );
            })}
          </div>

          {/* Core advantage takeaway footer card */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0f1a4e] to-[#1e2f78] p-8 text-white shadow-xl">
            <p className="text-base font-medium leading-relaxed text-blue-100 md:text-lg">
              This is the core advantage of our approach: <strong className="font-bold text-white">every solution below is purpose-built for its industry, but all of them share the same underlying platform philosophy</strong> — unified data, fast implementation, and pricing that scales with what you actually use.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY BREAKDOWN SECTIONS */}
      <div id="industry-solutions" className="bg-slate-50 py-16">
        {/* 3A. Healthcare Solutions */}
        <section id="healthcare-solutions" className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                    <Hospital className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#0b1437] md:text-3xl">Healthcare Solutions</h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">Clinical & Administrative Systems</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f1a4e] hover:underline"
                >
                  Consult Healthcare Experts <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Digital healthcare software for clinics, hospitals, and medical organizations — built to keep patient data, billing, and clinical workflows connected across every department.
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Healthcare operations fail when systems don&apos;t talk to each other — a lab result that doesn&apos;t reach the doctor, a billing record that doesn&apos;t match the pharmacy log. Our healthcare solutions solve this by keeping every department on one shared data core.
              </p>

              {/* Solution cards */}
              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Hospital Management System */}
                <div className="relative flex flex-col justify-between rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-b from-emerald-50/30 to-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                        <Star className="h-3 w-3 fill-white" /> Featured
                      </span>
                      <Hospital className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-[#0b1437]">
                      <Link href="/hospital-management-system" className="hover:text-emerald-700 transition">
                        Hospital Management System
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      A unified platform for patient registration, OPD/IPD management, billing, pharmacy, labs, radiology, and staff coordination. Built for hospitals that need multi-department operations without the fragmentation of standalone tools. If you&apos;re evaluating hospital software, this is the natural starting point — it&apos;s designed to scale from a single facility to a multi-hospital network.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link
                      href="/hospital-management-system"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                    >
                      Explore Hospital System Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Clinic Management System */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">Outpatient & Practices</span>
                      <Stethoscope className="h-6 w-6 text-[#0f1a4e]" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-[#0b1437]">
                      <Link href="/clinic-management-system" className="hover:text-[#0f1a4e] transition">
                        Clinic Management System
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      A lighter, faster-to-deploy solution for single-location practices. Streamlines appointments, EMR, billing, and patient communication without the overhead of a full hospital-scale deployment — ideal for outpatient clinics, specialty practices, and small medical centers.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/clinic-management-system" className="inline-flex items-center gap-2 text-xs font-bold text-[#0f1a4e]">
                      Explore Clinic System Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Pharmacy Management System */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">Inventory & Prescriptions</span>
                      <Pill className="h-6 w-6 text-[#0f1a4e]" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-[#0b1437]">
                      <Link href="/pharmacy-management-system" className="hover:text-[#0f1a4e] transition">
                        Pharmacy Management System
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Manages inventory, prescriptions, suppliers, and sales in one system. Works standalone for independent pharmacies, or integrates directly with our Hospital and Clinic systems for hospitals that want pharmacy operations connected to patient billing.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/pharmacy-management-system" className="inline-flex items-center gap-2 text-xs font-bold text-[#0f1a4e]">
                      Explore Pharmacy System Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Who this is for */}
              <div className="mt-8 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 border border-slate-200">
                <strong className="font-bold text-[#0b1437]">Who this is for:</strong> Hospitals, multi-specialty clinics, diagnostic centers, independent pharmacies, and healthcare networks that need clinical and financial data unified across departments.
              </div>
            </div>
          </div>
        </section>

        {/* 3B. Education & Fitness Solutions */}
        <section id="education-fitness-solutions" className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
                    <School className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#0b1437] md:text-3xl">Education & Fitness Solutions</h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">Academic & Membership Platforms</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f1a4e] hover:underline">
                  Consult Education Specialists <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Software solutions for educational institutions and fitness businesses — covering everything from admissions and academic records to class scheduling and membership billing.
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Schools, colleges, and fitness businesses share a common challenge: managing large numbers of people (students, members) across recurring schedules, payments, and progress tracking. Generic scheduling tools don&apos;t understand academic terms or class-pass memberships — ours does.
              </p>

              {/* Solution cards */}
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* School Management System */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <School className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/school-management-system" className="hover:text-[#0f1a4e] transition">
                        School Management System
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Covers admissions, attendance, exams, fees, and parent portals in one platform. Reduces the administrative burden on school staff while giving parents real-time visibility into their child&apos;s attendance and academic progress.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/school-management-system" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      School Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* College Management System */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <GraduationCap className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/college-management-system" className="hover:text-[#0f1a4e] transition">
                        College Management System
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Built for the added complexity of higher education — multiple departments, course catalogs, faculty management, and detailed student records across semesters and programs.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/college-management-system" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      College Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Learning Management System (LMS) */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <BookOpen className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/learning-management-system" className="hover:text-[#0f1a4e] transition">
                        Learning Management System (LMS)
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Delivers courses, assessments, and progress tracking online — for institutions running hybrid or fully online programs, or supplementing in-person teaching with digital coursework.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/learning-management-system" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      LMS Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Gym Management System */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <Dumbbell className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/gym-management-system" className="hover:text-[#0f1a4e] transition">
                        Gym Management System
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Manages memberships, class scheduling, billing, and member engagement for fitness businesses — from single-location gyms to multi-branch fitness chains.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/gym-management-system" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      Gym Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Who this is for */}
              <div className="mt-8 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 border border-slate-200">
                <strong className="font-bold text-[#0b1437]">Who this is for:</strong> K–12 schools, colleges and universities, online training providers, and gyms or fitness studios that need to manage people, schedules, and payments at scale.
              </div>
            </div>
          </div>
        </section>

        {/* 3C. Retail & Business Solutions */}
        <section id="retail-business-solutions" className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                    <Boxes className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#0b1437] md:text-3xl">Retail & Business Solutions</h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-600">Enterprise Operations & Commerce</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f1a4e] hover:underline">
                  Consult ERP/CRM Engineers <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Business automation software for growing enterprises — unifying finance, operations, inventory, and customer relationships so your business runs on real-time data instead of guesswork.
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                As retail and service businesses grow past a handful of employees, spreadsheets and disconnected point solutions start costing real money — in stockouts, missed follow-ups, and reconciliation errors. Our retail and business tools are built to remove that friction.
              </p>

              {/* Solution cards */}
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* ERP Software */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <Boxes className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/erp-software" className="hover:text-[#0f1a4e] transition">
                        ERP Software
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Unifies finance, HR, inventory, and operations in one platform. Built for growing businesses that have outgrown separate accounting, HR, and inventory tools and need one source of truth across departments.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/erp-software" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      ERP Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* CRM Software */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <Users2 className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/crm-software" className="hover:text-[#0f1a4e] transition">
                        CRM Software
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Manages your sales pipeline, leads, automation, and customer analytics in one place — helping sales teams close more consistently instead of losing leads in inboxes and spreadsheets.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/crm-software" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      CRM Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* POS Software */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <CreditCard className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/pos-software" className="hover:text-[#0f1a4e] transition">
                        POS Software
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Fast checkout, receipts, inventory sync, and reporting for retail and hospitality businesses — built to keep your sales floor and back-office inventory numbers always in sync.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/pos-software" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      POS Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Inventory Management System */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <Package className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/inventory-management-system" className="hover:text-[#0f1a4e] transition">
                        Inventory Management System
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Real-time stock tracking, barcode scanning, and purchase order management — reducing both overstock and stockouts across single or multi-location retail operations.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/inventory-management-system" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      Inventory Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Who this is for */}
              <div className="mt-8 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 border border-slate-200">
                <strong className="font-bold text-[#0b1437]">Who this is for:</strong> Retail chains, distributors, service businesses, and growing SMEs that need finance, sales, and inventory data unified instead of scattered across disconnected tools.
              </div>
            </div>
          </div>
        </section>

        {/* 3D. Real Estate & Enterprise Solutions */}
        <section id="real-estate-enterprise-solutions" className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#0b1437] md:text-3xl">Real Estate & Enterprise Solutions</h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-600">Asset, Property & Logistics Systems</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f1a4e] hover:underline">
                  Consult Enterprise Team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Industry-specific enterprise business solutions for real estate, construction, and logistics operations — built for organizations managing physical assets, properties, and complex projects.
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Real estate, construction, and logistics businesses deal with something most software isn&apos;t built for: managing physical assets — units, sites, vehicles — alongside financial and relationship data. Our real estate and enterprise solutions are purpose-built for exactly that.
              </p>

              {/* Solution cards */}
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Real Estate CRM */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <Home className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/real-estate-crm" className="hover:text-[#0f1a4e] transition">
                        Real Estate CRM
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Manages leads, listings, agent workflows, and deal tracking in one pipeline — built specifically for how real estate transactions actually move, from lead to closing.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/real-estate-crm" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      Real Estate CRM Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Property Management System */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <Building2 className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/property-management-system" className="hover:text-[#0f1a4e] transition">
                        Property Management System
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Handles tenants, leases, maintenance requests, and rent collection for landlords and property managers overseeing residential or commercial portfolios.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/property-management-system" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      Property Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Construction Management Software */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <HardHat className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/construction-management-software" className="hover:text-[#0f1a4e] transition">
                        Construction Management Software
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Tracks projects, contractors, budgets, and site progress — giving construction firms visibility into project status and cost overruns before they become expensive problems.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/construction-management-software" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      Construction Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Logistics Management System */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-lg">
                  <div>
                    <Truck className="h-6 w-6 text-[#0f1a4e]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0b1437]">
                      <Link href="/logistics-management-system" className="hover:text-[#0f1a4e] transition">
                        Logistics Management System
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      Coordinates fleet, delivery scheduling, and shipment tracking for businesses managing distribution and transportation operations.
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <Link href="/logistics-management-system" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f1a4e]">
                      Logistics Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Who this is for */}
              <div className="mt-8 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 border border-slate-200">
                <strong className="font-bold text-[#0b1437]">Who this is for:</strong> Real estate agencies, property management firms, construction contractors, and logistics or distribution companies managing physical assets alongside financial operations.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. SOLUTIONS AT A GLANCE TABLE */}
      <section className="py-20 md:py-28 bg-white" id="solutions-table">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Quick Reference Guide</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl">Solutions at a Glance</h2>
            <p className="mt-4 text-base text-slate-600">
              Use this table as a quick reference, then click through to any solution page for full feature details, pricing guidance, and demo access.
            </p>
          </MotionSection>

          {/* Filter & Search Bar */}
          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {["All", "Healthcare", "Education & Fitness", "Retail & Business", "Real Estate & Enterprise"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    activeCategoryFilter === cat
                      ? "bg-[#0f1a4e] text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#0f1a4e]/30 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={tableSearchQuery}
                onChange={(e) => setTableSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs font-medium focus:border-[#0f1a4e] focus:outline-none focus:ring-2 focus:ring-[#0f1a4e]/10"
              />
            </div>
          </div>

          {/* Table */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-[#0f1a4e] text-xs uppercase text-white font-bold tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4">Industry</th>
                    <th scope="col" className="px-6 py-4">Solution</th>
                    <th scope="col" className="px-6 py-4">Best For</th>
                    <th scope="col" className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredSolutions.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                        No solutions matched your search criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredSolutions.map((item) => {
                      const Icon = item.icon;
                      return (
                        <tr key={item.slug} className="transition hover:bg-slate-50/80">
                          <td className="whitespace-nowrap px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#0b1437]">
                              {item.industry}
                            </span>
                          </td>
                          <td className="px-6 py-4 font-bold text-[#0b1437]">
                            <Link href={`/${item.slug}`} className="group inline-flex items-center gap-2 hover:text-[#0f1a4e]">
                              <Icon className="h-4 w-4 text-[#0f1a4e] transition group-hover:scale-110" />
                              {item.title}
                              {item.featured && (
                                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-amber-800">
                                  Featured
                                </span>
                              )}
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-slate-600 text-xs md:text-sm">{item.bestFor}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-right">
                            <Link
                              href={`/${item.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-bold text-[#0f1a4e] transition hover:translate-x-0.5 hover:underline"
                            >
                              View System <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMON MISTAKES BUSINESSES MAKE WHEN CHOOSING SOFTWARE */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Avoid Costly Traps</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Common Mistakes Businesses Make When Choosing Software
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Even with a clear list of options, many businesses make avoidable mistakes during the selection process — mistakes that cost far more to fix later than to prevent upfront.
            </p>
          </MotionSection>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Choosing based on feature count instead of workflow fit.",
                desc: "A system with 200 features you'll never use isn't better than one with 20 features that match exactly how your team works. Feature-heavy platforms often mean slower onboarding and higher training costs.",
              },
              {
                num: "02",
                title: "Ignoring implementation timeline.",
                desc: 'A "powerful" system that takes eight months to go live can cost you more in lost productivity and delayed ROI than a simpler system that\'s live in three weeks.',
              },
              {
                num: "03",
                title: "Underestimating data migration complexity.",
                desc: "Moving from spreadsheets or a legacy system isn't just a technical task — it needs a clear plan for validating and cleaning historical data before go-live, or you risk carrying old errors into the new system.",
              },
              {
                num: "04",
                title: "Not asking about post-launch support.",
                desc: "Software doesn't stop needing attention after go-live. Ask vendors directly what support looks like in month three, six, and twelve — not just during the sales process.",
              },
              {
                num: "05",
                title: "Overlooking scalability.",
                desc: "Systems that work well for 10 users often behave very differently at 100 users across multiple locations. Confirm the platform has actually been used at the scale you expect to reach.",
              },
            ].map((item, idx) => (
              <MotionCard
                key={item.num}
                delay={idx * 0.06}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-amber-500/80">{item.num}</span>
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-[#0b1437]">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </MotionCard>
            ))}

            {/* Summary takeaway card */}
            <div className="flex flex-col justify-center rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/50 p-7 shadow-sm">
              <div className="flex items-center gap-2 text-amber-800">
                <Sparkles className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Evaluation Pro-Tip</span>
              </div>
              <p className="mt-3 text-sm font-medium leading-relaxed text-amber-950">
                Avoiding these mistakes is largely about slowing down at the evaluation stage — asking vendors pointed questions about timeline, migration, and support before signing, rather than after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW TO CHOOSE THE RIGHT SOLUTION FOR YOUR BUSINESS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Step-by-Step Decision Framework</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              How to Choose the Right Solution for Your Business
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              With multiple systems available across four industries, here&apos;s how to narrow down the right starting point:
            </p>
          </MotionSection>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-5">
            {[
              {
                step: "1",
                title: "Start with your biggest operational pain point.",
                desc: "Don't try to solve everything at once — identify the one workflow (billing, scheduling, inventory, tenant management) causing the most friction today, and start there.",
              },
              {
                step: "2",
                title: "Check for integration between systems.",
                desc: "If you operate across categories — for example, a hospital that also manages its own pharmacy inventory and staff payroll — look for solutions built on the same platform, so data flows between them without manual re-entry.",
              },
              {
                step: "3",
                title: "Evaluate implementation timeline, not just features.",
                desc: "A feature-rich system that takes six months to deploy can cost you more in lost productivity than a simpler system live in weeks.",
              },
              {
                step: "4",
                title: "Confirm the pricing model scales with you.",
                desc: "You should be able to start with core modules and add more as you grow — not pay enterprise-level licensing from day one.",
              },
              {
                step: "5",
                title: "Look for proven use in businesses like yours.",
                desc: "Ask for reference clients in your specific industry and business size, not just a generic product demo.",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:bg-white hover:shadow-md">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f1a4e] text-sm font-black text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#0b1437]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHAT MAKES OUR SOLUTIONS DIFFERENT */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-[#0b1437] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Why Partner With Us</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              What Makes Our Solutions Different from Generic Software Vendors
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Most software vendors force a choice: buy an expensive, over-engineered enterprise platform, or cobble together five different point solutions that don&apos;t talk to each other. We built our solutions to remove that trade-off.
            </p>
          </MotionSection>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Purpose-built per industry",
                desc: "Not generic templates repackaged with different labels",
                icon: Layers,
              },
              {
                title: "Shared platform architecture",
                desc: "Solutions across categories can connect and share data when your business spans multiple areas",
                icon: Boxes,
              },
              {
                title: "Modular, right-sized pricing",
                desc: "Pay for the modules you use today, expand as you grow",
                icon: DollarSign,
              },
              {
                title: "Faster implementation",
                desc: "Phased rollouts get core workflows live in weeks, not months",
                icon: Zap,
              },
              {
                title: "Built-in security & compliance",
                desc: "Role-based access and audit trails as standard features, not costly add-ons",
                icon: ShieldCheck,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionCard
                  key={item.title}
                  delay={idx * 0.06}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">{item.desc}</p>
                </MotionCard>
              );
            })}
          </div>

          {/* Custom Software callout banner */}
          <div className="mt-14 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/60 via-blue-950/60 to-indigo-950/60 p-8 backdrop-blur-md">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Need a Fully Customized Workflow?</h3>
                <p className="mt-2 text-sm text-cyan-100/80 max-w-3xl">
                  And if none of our existing solutions match your exact workflow, our{" "}
                  <strong className="text-white underline font-semibold">
                    <Link href="/custom-software-development">Custom Software Development</Link>
                  </strong>{" "}
                  team builds bespoke systems around your specific operations — so you&apos;re never forced to change how your business runs just to fit the software.
                </p>
              </div>
              <Link
                href="/custom-software-development"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-[#0b1437] transition hover:bg-cyan-300"
              >
                Explore Custom Software <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-white" id="faq">
        <div className="mx-auto max-w-4xl px-6">
          <MotionSection className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Clear Answers</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Got questions about our business software solutions? We&apos;ve got answers.
            </p>
          </MotionSection>

          <div className="mt-12 space-y-4">
            {faqItems.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen ? "border-[#0f1a4e]/40 bg-slate-50/50 shadow-md" : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  >
                    <span className="text-base font-bold text-[#0b1437] md:text-lg">{faq.question}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform ${isOpen ? "bg-[#0f1a4e] text-white rotate-180" : "bg-slate-100 text-slate-600"}`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="border-t border-slate-100 px-6 pb-6 pt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="contact-cta">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1437] via-[#0f1a4e] to-[#1e2f78] p-10 text-center text-white shadow-2xl md:p-16">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Find the Right Solution for Your Business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 md:text-lg">
              From hospitals to schools, retail chains to real estate portfolios — explore the full range of industry-specific solutions above, or talk to our team to map the right system to your exact workflow.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#0f1a4e] shadow-lg transition hover:bg-slate-100"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => scrollToSection("industry-solutions")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-md backdrop-blur-sm transition hover:bg-white/20"
              >
                Browse All Solutions
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
