"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  Hospital,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Shield,
  Zap,
  DollarSign,
  Lock,
  Smartphone,
  Link2,
  Users,
  ClipboardList,
  Calendar,
  Stethoscope,
  BedDouble,
  Receipt,
  Pill,
  FlaskConical,
  Package,
  BarChart3,
  Globe,
  Star,
  Building2,
} from "lucide-react";

const hmsFaqs = [
  {
    q: "What is a Hospital Management System (HMS)?",
    a: "A Hospital Management System is software that unifies a hospital's clinical, administrative, and financial operations — patient records, appointments, billing, pharmacy, and lab workflows — into one connected platform, replacing fragmented tools and manual processes.",
  },
  {
    q: "Is a Hospital Management System the same as an EMR or HIS?",
    a: 'Not exactly. An EMR (Electronic Medical Record) focuses on clinical documentation. A Hospital Management System is broader — it includes EMR functionality plus billing, pharmacy, inventory, and administration. "HIS" (Hospital Information System) is generally used interchangeably with HMS.',
  },
  {
    q: "How long does it take to implement a Hospital Management System?",
    a: "With a phased rollout — starting with front desk, OPD, and billing — most hospitals can go live with core modules in a matter of weeks, then expand to pharmacy, labs, and radiology in later phases without disrupting daily operations.",
  },
  {
    q: "Can a Hospital Management System support multiple hospital locations?",
    a: "Yes. A properly built HMS supports centralized reporting and administration while still allowing facility-specific users, billing rules, and inventory — ideal for hospital groups, clinic chains, or multi-branch networks.",
  },
  {
    q: "Will a Hospital Management System integrate with our existing lab and imaging equipment?",
    a: "Yes, provided the HMS supports standard healthcare interoperability protocols like HL7 and FHIR, along with PACS connectivity for imaging and direct interfaces for lab analyzers.",
  },
  {
    q: "Is patient data secure in a Hospital Management System?",
    a: "A well-designed HMS uses role-based access control, encrypted data storage, and full audit trails, helping hospitals align with regulations like HIPAA and GDPR based on their specific configuration and governance.",
  },
  {
    q: "Can we start with only a few modules and add more later?",
    a: "Yes — modular Hospital Management Systems let you begin with essentials like registration, billing, and OPD, then add pharmacy, lab, radiology, or a patient portal as your needs and budget grow.",
  },
  {
    q: "What does a Hospital Management System typically cost?",
    a: "Cost depends on hospital size, number of modules, deployment type (cloud vs. on-premises), and integration needs. Right-sized HMS platforms let you pay only for the modules you use, rather than a flat enterprise license.",
  },
  {
    q: "Can a Hospital Management System be customized for our specific workflows?",
    a: "Yes. While core modules cover standard hospital operations, most HMS vendors — including custom software development teams — can configure or extend workflows, reports, and integrations to match how your hospital actually operates.",
  },
  {
    q: "How is a Hospital Management System different from a Clinic Management System?",
    a: "An HMS is built for full hospital operations — inpatient care, multi-department coordination, and complex billing. A Clinic Management System is a lighter solution focused on outpatient appointments, EMR, and billing for single-location practices.",
  },
];

const modules = [
  {
    icon: ClipboardList,
    name: "Patient Registration & EMR",
    desc: "Single patient identity across every visit, department, and encounter",
    color: "text-emerald-600 bg-emerald-500/10",
  },
  {
    icon: Calendar,
    name: "Appointment & Scheduling",
    desc: "Centralized booking across doctors, departments, and diagnostics with SMS/email reminders",
    color: "text-blue-600 bg-blue-500/10",
  },
  {
    icon: Stethoscope,
    name: "OPD Management",
    desc: "Consultation notes, visit billing, and follow-up tracking in one flow",
    color: "text-violet-600 bg-violet-500/10",
  },
  {
    icon: BedDouble,
    name: "IPD Management",
    desc: "Admissions, bed/ward allocation, transfers, and nursing documentation",
    color: "text-rose-600 bg-rose-500/10",
  },
  {
    icon: Receipt,
    name: "Billing & Insurance",
    desc: "Real-time charge capture, insurance claims, and payment tracking",
    color: "text-amber-600 bg-amber-500/10",
  },
  {
    icon: Pill,
    name: "Pharmacy Management",
    desc: "Prescription-linked dispensing, stock, batch, and expiry tracking",
    color: "text-teal-600 bg-teal-500/10",
  },
  {
    icon: FlaskConical,
    name: "Laboratory & Radiology",
    desc: "Order-to-report workflows with machine and PACS integration",
    color: "text-cyan-600 bg-cyan-500/10",
  },
  {
    icon: Package,
    name: "Inventory & Asset Management",
    desc: "Stock levels, reorder alerts, and equipment lifecycle tracking",
    color: "text-orange-600 bg-orange-500/10",
  },
  {
    icon: BarChart3,
    name: "Reports & Analytics Dashboards",
    desc: "Role-based operational, clinical, and financial reporting",
    color: "text-indigo-600 bg-indigo-500/10",
  },
  {
    icon: Globe,
    name: "Patient Portal & Mobile App",
    desc: "Online booking, report access, and bill payments for patients",
    color: "text-pink-600 bg-pink-500/10",
  },
];

const whyUs = [
  {
    icon: Hospital,
    title: "Truly Unified, Not Just 'Integrated'",
    desc: "Many HMS platforms bolt separate modules together and call it integration. Ours is built on a single data core from day one — patient, billing, and pharmacy records update instantly across every module, with no sync delays or duplicate data entry.",
    badge: "🏥",
  },
  {
    icon: Zap,
    title: "Faster Go-Live, Lower Implementation Risk",
    desc: "We deploy in phases — starting with your highest-impact departments (usually front desk, OPD, and billing) — so you go live in weeks, not the 6–12 month timelines common with legacy enterprise HMS vendors.",
    badge: "⚡",
  },
  {
    icon: DollarSign,
    title: "Transparent, Right-Sized Pricing",
    desc: "No inflated enterprise licensing fees for features you'll never use. Pay for the modules your hospital actually needs, and add more — pharmacy, lab, radiology, patient portal — as you grow.",
    badge: "💰",
  },
  {
    icon: Lock,
    title: "Built-In Security & Compliance",
    desc: "Role-based access control, full audit trails, and data encryption are standard, not an add-on — helping you stay aligned with HIPAA, GDPR, and local healthcare data regulations.",
    badge: "🔐",
  },
  {
    icon: Smartphone,
    title: "Modern, Mobile-Ready Experience",
    desc: "Your staff and patients don't live on desktop-only software anymore. Our HMS includes a patient portal and mobile access, so appointment booking, report access, and billing don't require a front-desk visit.",
    badge: "📱",
  },
  {
    icon: Link2,
    title: "Connects With What You Already Use",
    desc: "HL7/FHIR-ready architecture means our HMS talks to your existing lab analyzers, PACS/imaging systems, and accounting tools like QuickBooks — so you're not ripping out working infrastructure to adopt us.",
    badge: "🔗",
  },
];

const evaluationPoints = [
  {
    title: "Deployment fit",
    desc: "Cloud, on-premises, or hybrid based on your infrastructure and data policies",
  },
  {
    title: "Departmental coverage",
    desc: "Does it support your actual workflows (OPD, IPD, pharmacy, labs) or just the basics?",
  },
  {
    title: "Integration readiness",
    desc: "Can it connect to your lab equipment, PACS, and accounting software?",
  },
  {
    title: "Implementation speed",
    desc: "Weeks or months to go live?",
  },
  {
    title: "Scalability",
    desc: "Can it grow from one facility to a multi-hospital network without a system replacement?",
  },
  {
    title: "Total cost of ownership",
    desc: "Licensing, customization, training, and support combined — not just the sticker price",
  },
];

export default function HospitalManagementSystemPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Hospital Management System",
            applicationCategory: "HealthcareApplication",
            operatingSystem: "Web, iOS, Android",
            description:
              "All-in-one Hospital Management System software for managing patients, billing, pharmacy, labs, staff, and reporting on a single unified platform.",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            publisher: {
              "@type": "Organization",
              name: "The Runner Software",
              url: "https://therunnersoftware.com",
            },
            featureList: [
              "Patient Registration & EMR",
              "Appointment & Scheduling",
              "OPD Management",
              "IPD Management",
              "Billing & Insurance",
              "Pharmacy Management",
              "Laboratory & Radiology",
              "Inventory & Asset Management",
              "Reports & Analytics Dashboards",
              "Patient Portal & Mobile App",
            ],
          }),
        }}
      />

      <SiteHeader />

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1437] via-[#0f1a4e] to-[#152456] text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <MotionSection className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
              <Hospital className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              Hospital Management System Software
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              One Platform.{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">
                Every Department.
              </span>{" "}
              Zero Guesswork.
            </h1>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-blue-100/90 md:text-lg">
              <p>
                Running a hospital shouldn&apos;t mean juggling five different tools for patients, billing, pharmacy, and staff. Our{" "}
                <strong className="font-semibold text-white">Hospital Management System (HMS)</strong> brings every department — front desk, OPD, IPD, pharmacy, labs, billing, and administration — onto a single, unified platform, so your team spends less time switching screens and more time treating patients.
              </p>
              <p>
                Whether you&apos;re managing a single clinic-turned-hospital or a multi-facility network with hundreds of beds, our HMS scales with you — without the bloated setup time or rigid workflows that slow down traditional hospital software.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-7 py-4 text-sm font-bold text-[#0b1437] shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none"
              >
                Book a Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none"
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-10">
              {[
                { icon: Shield, label: "HIPAA & GDPR Aligned" },
                { icon: Zap, label: "Go Live in Weeks" },
                { icon: Building2, label: "Multi-Facility Ready" },
                { icon: Users, label: "All Departments Covered" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                  <Icon className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </MotionSection>
        </div>

        {/* Curved divider */}
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 60" className="block h-12 w-full text-white" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── 2. WHAT IS HMS ── */}
      <section className="py-20 md:py-28 bg-white" id="what-is-hms">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionSection>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Clear Definition</span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
                What Is a Hospital Management System?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                A Hospital Management System is software that centralizes a hospital&apos;s clinical, administrative, and financial operations — patient registration, appointments, EMR, billing, pharmacy, lab and radiology, inventory, and reporting — into one connected system, instead of scattered spreadsheets and standalone tools.
              </p>
              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <p className="text-sm font-medium leading-relaxed text-emerald-900">
                  <strong className="font-bold">The result:</strong> every department works off the same real-time data. A nurse updating a patient&apos;s vitals, a pharmacist dispensing medication, and a billing officer generating an invoice are all pulling from — and updating — the same patient record.
                </p>
              </div>
            </MotionSection>

            {/* Visual stats panel */}
            <MotionSection className="grid grid-cols-2 gap-4">
              {[
                { stat: "10+", label: "Core Modules", color: "from-emerald-500 to-teal-600" },
                { stat: "Weeks", label: "Avg Go-Live Time", color: "from-blue-500 to-indigo-600" },
                { stat: "100%", label: "Departments Connected", color: "from-violet-500 to-purple-600" },
                { stat: "HL7/FHIR", label: "Integration Standard", color: "from-rose-500 to-pink-600" },
              ].map(({ stat, label, color }) => (
                <div key={label} className={`rounded-2xl bg-gradient-to-br ${color} p-6 text-white shadow-lg`}>
                  <div className="text-3xl font-extrabold">{stat}</div>
                  <div className="mt-1 text-sm font-medium text-white/80">{label}</div>
                </div>
              ))}
            </MotionSection>
          </div>
        </div>
      </section>

      {/* ── 3. WHY SWITCH ── */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200" id="why-our-hms">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Key Advantages</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Why Hospitals Are Switching to Our HMS
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Most legacy hospital software was built for a different era: slow to deploy, expensive to customize, and painful to scale. We built ours differently.
            </p>
          </MotionSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map(({ icon: Icon, title, desc, badge }, idx) => (
              <MotionCard
                key={title}
                delay={idx * 0.07}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-xl">
                    {badge}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-[#0b1437]">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CORE MODULES ── */}
      <section className="py-20 md:py-28 bg-white" id="modules">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Full Feature Set</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Core Modules of Our Hospital Management System
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every module is built on a shared data core — no re-entry, no sync delays, no data silos.
            </p>
          </MotionSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modules.map(({ icon: Icon, name, desc, color }, idx) => (
              <MotionCard
                key={name}
                delay={idx * 0.05}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white hover:shadow-lg"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-[#0b1437] group-hover:text-emerald-700 transition-colors">
                  {name}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">{desc}</p>
              </MotionCard>
            ))}
          </div>

          {/* Cross-sell banner */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
              <p className="text-sm leading-relaxed text-slate-700">
                <strong className="font-bold text-[#0b1437]">Running a single-location practice?</strong> Our{" "}
                <Link href="/solutions/healthcare" className="font-semibold text-blue-700 underline decoration-blue-300 hover:text-blue-800">
                  Clinic Management System
                </Link>{" "}
                gives you appointments, EMR, billing, and patient communication in a lighter, faster-to-deploy package.
              </p>
            </div>
            <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
              <p className="text-sm leading-relaxed text-slate-700">
                <strong className="font-bold text-[#0b1437]">Pharmacy your main pain point?</strong> Our standalone{" "}
                <Link href="/solutions/healthcare" className="font-semibold text-teal-700 underline decoration-teal-300 hover:text-teal-800">
                  Pharmacy Management System
                </Link>{" "}
                handles inventory, prescriptions, and supplier management on its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SCALE SECTION ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0b1437] via-[#0f1a4e] to-emerald-950 text-white" id="scale">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionSection>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Flexible by Design</span>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                Built to Scale — From One Clinic to a Hospital Network
              </h2>
              <p className="mt-5 text-base leading-relaxed text-blue-100/90 md:text-lg">
                Every hospital&apos;s workflows are a little different, and off-the-shelf software rarely fits perfectly out of the box. That&apos;s why our team also offers{" "}
                <Link href="/services/software-development/custom-software-development" className="font-semibold text-emerald-300 underline decoration-emerald-500/40 hover:text-emerald-200">
                  Custom Software Development
                </Link>{" "}
                — so if your HMS needs a workflow, integration, or report that isn&apos;t standard, we build it around your hospital instead of asking you to change how you operate.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Single clinic going up to full hospital operations",
                  "Multi-specialty hospitals with 50–500+ beds",
                  "Hospital groups and multi-facility networks",
                  "Teaching hospitals and medical colleges",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                    <span className="text-sm text-blue-100/90">{item}</span>
                  </div>
                ))}
              </div>
            </MotionSection>

            {/* Phased rollout visual */}
            <MotionSection>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white">Phased Go-Live Roadmap</h3>
                <p className="mt-2 text-sm text-white/60">Start fast. Expand when ready.</p>
                <div className="mt-6 space-y-4">
                  {[
                    { phase: "Phase 1", label: "Front Desk, OPD & Billing", weeks: "Weeks 1–4", color: "bg-emerald-400" },
                    { phase: "Phase 2", label: "IPD, Nursing & Pharmacy", weeks: "Weeks 5–8", color: "bg-blue-400" },
                    { phase: "Phase 3", label: "Lab, Radiology & Inventory", weeks: "Weeks 9–12", color: "bg-violet-400" },
                    { phase: "Phase 4", label: "Patient Portal & Analytics", weeks: "Week 12+", color: "bg-amber-400" },
                  ].map(({ phase, label, weeks, color }) => (
                    <div key={phase} className="flex items-center gap-4">
                      <div className={`h-2 w-2 shrink-0 rounded-full ${color}`} aria-hidden="true" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-white/50">{phase}</span>
                          <span className="text-xs text-white/40">{weeks}</span>
                        </div>
                        <p className="mt-0.5 text-sm font-medium text-white">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* ── 6. HOW TO CHOOSE ── */}
      <section className="py-20 md:py-28 bg-white" id="how-to-choose">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Buyer&apos;s Guide</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              How to Choose the Right Hospital Management System
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Before you commit to any HMS vendor, evaluate these six criteria carefully.
            </p>
          </MotionSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {evaluationPoints.map(({ title, desc }, idx) => (
              <MotionCard
                key={title}
                delay={idx * 0.07}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition hover:bg-white hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f1a4e] text-sm font-black text-white">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-sm font-bold text-[#0b1437]">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200" id="faq">
        <div className="mx-auto max-w-4xl px-6">
          <MotionSection className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Clear Answers</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </MotionSection>

          {/* FAQ JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: hmsFaqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />

          <div className="mt-12 space-y-3">
            {hmsFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen ? "border-[#0f1a4e]/40 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  >
                    <span className="text-sm font-bold text-[#0b1437] md:text-base" itemProp="name">
                      {idx + 1}. {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform ${
                        isOpen ? "rotate-180 bg-[#0f1a4e] text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
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
                        <div
                          className="border-t border-slate-100 px-6 pb-6 pt-3 text-sm leading-relaxed text-slate-600"
                          itemScope
                          itemType="https://schema.org/Answer"
                          itemProp="acceptedAnswer"
                        >
                          <span itemProp="text">{faq.a}</span>
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

      {/* ── 8. BOTTOM CTA ── */}
      <section className="py-20 bg-white" id="contact-cta">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-[#0f1a4e] to-[#0b1437] p-10 text-center text-white shadow-2xl md:p-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
              <Star className="h-3.5 w-3.5 fill-emerald-300 text-emerald-300" aria-hidden="true" />
              Free Demo Available
            </span>
            <h2 className="mt-6 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Ready to Unify Your Hospital&apos;s Operations?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-100/90 md:text-lg">
              Stop juggling disconnected systems. See how our Hospital Management System brings patients, billing, pharmacy, and staff under one roof — with a go-live timeline measured in weeks, not months.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-7 py-4 text-sm font-bold text-[#0b1437] shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Book a Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
              {["No long-term lock-in", "Phased implementation", "Custom workflows available", "HL7/FHIR ready"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
