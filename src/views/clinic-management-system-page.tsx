"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Shield,
  Zap,
  DollarSign,
  Lock,
  TrendingUp,
  MessageSquare,
  Calendar,
  ClipboardList,
  Receipt,
  Bell,
  Globe,
  BarChart3,
  Users,
  Star,
  Hospital,
  Pill,
} from "lucide-react";

const cmsFaqs = [
  {
    q: "What is a Clinic Management System?",
    a: "A Clinic Management System is software built for single-location outpatient practices, managing appointment scheduling, electronic medical records, billing, and patient communication in one connected platform.",
  },
  {
    q: "How is a Clinic Management System different from a Hospital Management System?",
    a: "A Clinic Management System is a lighter solution focused on outpatient appointments, EMR, and billing for single-location practices. A Hospital Management System supports full inpatient and outpatient operations across multiple departments, including pharmacy, labs, and radiology.",
  },
  {
    q: "How long does it take to implement a Clinic Management System?",
    a: "Because it's built specifically for outpatient practices rather than full hospital operations, most clinics can be scheduling appointments and documenting visits within days of onboarding.",
  },
  {
    q: "Does your Clinic Management System include a patient portal?",
    a: "Yes. Patients can book appointments, view visit history, and pay bills online through the patient portal included with the Clinic Management System.",
  },
  {
    q: "Is patient data secure and compliant with healthcare regulations?",
    a: "Yes. Role-based access control, encrypted data storage, and audit trails are built into the Clinic Management System by default, supporting HIPAA and GDPR alignment based on your practice's specific configuration.",
  },
  {
    q: "Can the Clinic Management System handle insurance and self-pay billing?",
    a: "Yes. The system supports visit-level billing for insurance, self-pay, and mixed payment workflows, with invoice generation and payment tracking built in.",
  },
  {
    q: "Can my clinic upgrade to a full Hospital Management System later?",
    a: "Yes. The Clinic Management System shares the same underlying platform as our Hospital Management System, so practices that grow into multi-department or inpatient operations can transition without starting from scratch.",
  },
  {
    q: "Does the system reduce missed appointments?",
    a: "Yes. Automated SMS and email reminders are built in to reduce no-shows, along with patient-facing visibility into upcoming appointments through the patient portal.",
  },
  {
    q: "Can the Clinic Management System connect with a pharmacy system?",
    a: "Yes. It can connect directly with our standalone Pharmacy Management System if your clinic handles medication dispensing, keeping prescriptions, stock, and billing data in sync.",
  },
  {
    q: "How much does a Clinic Management System typically cost?",
    a: "Pricing depends on practice size and the specific modules needed, but independent practices generally pay significantly less than hospital-scale software, since the system is priced for outpatient-only operations rather than full hospital functionality.",
  },
];

const features = [
  {
    icon: Calendar,
    name: "Appointment Scheduling",
    desc: "Centralized booking with automated SMS/email reminders to reduce no-shows",
    color: "text-blue-600 bg-blue-500/10",
  },
  {
    icon: ClipboardList,
    name: "Electronic Medical Records (EMR)",
    desc: "Digital patient charts, visit notes, and clinical history in one place",
    color: "text-emerald-600 bg-emerald-500/10",
  },
  {
    icon: Receipt,
    name: "Visit-Level Billing",
    desc: "Invoice generation, payment tracking, and insurance/self-pay support",
    color: "text-amber-600 bg-amber-500/10",
  },
  {
    icon: Bell,
    name: "Patient Communication",
    desc: "Automated reminders, visit summaries, and secure messaging",
    color: "text-violet-600 bg-violet-500/10",
  },
  {
    icon: Globe,
    name: "Patient Portal",
    desc: "Online appointment booking, visit history, and bill payments for patients",
    color: "text-pink-600 bg-pink-500/10",
  },
  {
    icon: BarChart3,
    name: "Reporting & Insights",
    desc: "Operational and financial reports for clinic performance tracking",
    color: "text-indigo-600 bg-indigo-500/10",
  },
  {
    icon: Users,
    name: "Role-Based Access",
    desc: "Staff-specific permissions with full audit trail visibility",
    color: "text-rose-600 bg-rose-500/10",
  },
];

const whySwitch = [
  {
    badge: "⚡",
    title: "Live in Days, Not Months",
    desc: "Purpose-built for single-location practices rather than full hospital operations, our Clinic Management System deploys fast — most clinics are scheduling appointments and documenting visits within days of onboarding, not months.",
  },
  {
    badge: "🗂️",
    title: "One Patient Record, Not Three",
    desc: "Appointment history, clinical notes, and billing all live against the same patient profile. No more re-entering patient details across a scheduling app, an EMR tool, and a billing spreadsheet.",
  },
  {
    badge: "💬",
    title: "Fewer No-Shows, Better Communication",
    desc: "Automated SMS and email reminders reduce missed appointments, while patients get visibility into their own visit history and upcoming schedule — cutting down on front-desk phone calls just to confirm bookings.",
  },
  {
    badge: "💰",
    title: "Priced for Independent Practices",
    desc: "No enterprise hospital-scale licensing. You pay for what a clinic actually needs — scheduling, EMR, and billing — without paying for inpatient, lab, or radiology modules you'll never use.",
  },
  {
    badge: "🔐",
    title: "Secure, Compliant Records by Default",
    desc: "Role-based access, encrypted patient data, and audit trails are standard — supporting HIPAA and GDPR alignment based on your practice's configuration, without requiring a separate compliance add-on.",
  },
  {
    badge: "📈",
    title: "Room to Grow",
    desc: "If your clinic eventually expands into multi-department or inpatient operations, our Clinic Management System shares the same underlying platform as our full Hospital Management System — so you're not forced into a disruptive system migration later.",
  },
];

const howToChoose = [
  {
    title: "Match the software to your practice's actual scale.",
    desc: "A single-location outpatient clinic doesn't need inpatient bed management — look for software built specifically for outpatient workflows.",
  },
  {
    title: "Check implementation speed.",
    desc: "Clinics can't afford months-long rollouts — ask vendors for a realistic go-live timeline, not just a feature list.",
  },
  {
    title: "Confirm compliance is built in.",
    desc: "Role-based access and audit trails should be standard, not a costly add-on module.",
  },
  {
    title: "Look for a growth path.",
    desc: "If your clinic might expand into inpatient or multi-department care later, confirm the vendor offers a system that scales without forcing a full migration.",
  },
  {
    title: "Ask about patient-facing tools.",
    desc: "A patient portal and automated reminders directly reduce no-shows and front-desk workload — confirm these are included, not sold separately.",
  },
];

export default function ClinicManagementSystemPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* JSON-LD SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Clinic Management System",
            applicationCategory: "HealthcareApplication",
            operatingSystem: "Web, iOS, Android",
            description:
              "All-in-one Clinic Management System software for managing appointments, EMR, billing, and patient communication on a single connected platform.",
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
              "Appointment Scheduling",
              "Electronic Medical Records (EMR)",
              "Visit-Level Billing",
              "Patient Communication",
              "Patient Portal",
              "Reporting & Insights",
              "Role-Based Access",
            ],
          }),
        }}
      />

      <SiteHeader />

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1437] via-[#0f1a4e] to-[#152456] text-white">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <MotionSection className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
              <Stethoscope className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              Clinic Management System Software
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Appointments, Records, and Billing —{" "}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Finally in One Place
              </span>
            </h1>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-blue-100/90 md:text-lg">
              <p>
                Independent clinics and outpatient practices don&apos;t need hospital-scale software — they need something fast to set up, easy for staff to learn, and reliable enough to run daily operations without constant workarounds.
              </p>
              <p>
                Our <strong className="font-semibold text-white">Clinic Management System</strong> streamlines appointment scheduling, electronic medical records (EMR), billing, and patient communication into a single platform — so your front desk, clinicians, and billing staff all work from the same real-time patient data, instead of juggling a paper diary, a separate EMR tool, and a spreadsheet for invoices.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-400 focus:outline-none"
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
                { icon: Zap, label: "Live in Days" },
                { icon: Shield, label: "HIPAA & GDPR Aligned" },
                { icon: Users, label: "Built for Outpatient Clinics" },
                { icon: TrendingUp, label: "Scales to HMS" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                  <Icon className="h-4 w-4 text-blue-400" aria-hidden="true" />
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

      {/* ── 2. WHAT IS CMS ── */}
      <section className="py-20 md:py-28 bg-white" id="what-is-cms">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionSection>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Clear Definition</span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
                What Is a Clinic Management System?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                A Clinic Management System is software built specifically for single-location outpatient practices — it manages patient scheduling, clinical documentation, billing, and communication in one connected system, replacing the mix of paper records, standalone EMR software, and manual invoicing many clinics still rely on.
              </p>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <p className="text-sm font-medium leading-relaxed text-blue-900">
                  <strong className="font-bold">Unlike hospital-grade systems</strong> built for inpatient care and multi-department coordination, a Clinic Management System is designed to be lighter, faster to deploy, and simpler for small clinical teams to run day to day — without sacrificing the accuracy and record-keeping a growing practice needs.
                </p>
              </div>
            </MotionSection>

            {/* Visual stat cards */}
            <MotionSection className="grid grid-cols-2 gap-4">
              {[
                { stat: "Days", label: "Avg Go-Live Time", color: "from-blue-500 to-cyan-600" },
                { stat: "7+", label: "Core Features", color: "from-emerald-500 to-teal-600" },
                { stat: "100%", label: "Outpatient Focused", color: "from-violet-500 to-purple-600" },
                { stat: "→ HMS", label: "Upgrade Path Ready", color: "from-amber-500 to-orange-600" },
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
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200" id="why-our-cms">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Key Advantages</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Why Clinics Are Switching to Our Clinic Management System
            </h2>
          </MotionSection>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whySwitch.map(({ badge, title, desc }, idx) => (
              <MotionCard
                key={title}
                delay={idx * 0.07}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl"
              >
                <span className="text-2xl" aria-hidden="true">{badge}</span>
                <h3 className="mt-4 text-base font-bold text-[#0b1437]">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CORE FEATURES ── */}
      <section className="py-20 md:py-28 bg-white" id="features">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Everything You Need</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Core Features of Our Clinic Management System
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every feature is connected — one patient record powering every workflow.
            </p>
          </MotionSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map(({ icon: Icon, name, desc, color }, idx) => (
              <MotionCard
                key={name}
                delay={idx * 0.06}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white hover:shadow-lg"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-[#0b1437] transition-colors group-hover:text-blue-700">
                  {name}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">{desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BUILT FOR INDEPENDENT PRACTICES ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0b1437] via-[#0f1a4e] to-[#0d2060] text-white" id="built-for">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <MotionSection>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Independent Practices — Backed by a Bigger Platform</span>
              <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                Start Small. Scale When You&apos;re Ready.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-blue-100/90 md:text-lg">
                If your clinic&apos;s needs go beyond outpatient scheduling and billing — for example, you&apos;re managing inpatient beds, multiple departments, or lab and radiology services — our{" "}
                <Link href="/hospital-management-system" className="font-semibold text-blue-300 underline decoration-blue-500/40 hover:text-blue-200">
                  Hospital Management System
                </Link>{" "}
                picks up exactly where the Clinic Management System leaves off, on the same underlying platform.
              </p>
              <p className="mt-4 text-base leading-relaxed text-blue-100/90">
                And if medication dispensing and pharmacy inventory are a core part of your clinic&apos;s operations, our standalone{" "}
                <Link href="/solutions/healthcare" className="font-semibold text-emerald-300 underline decoration-emerald-500/40 hover:text-emerald-200">
                  Pharmacy Management System
                </Link>{" "}
                handles prescriptions, stock, and supplier management — either on its own or connected directly to your clinic&apos;s patient and billing records.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "No disruptive system migration when you grow",
                  "Same patient data carries over to HMS",
                  "Pharmacy integration available from day one",
                  "All three systems share one underlying platform",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                    <span className="text-sm text-blue-100/90">{item}</span>
                  </div>
                ))}
              </div>
            </MotionSection>

            {/* Platform ecosystem visual */}
            <MotionSection>
              <div className="space-y-4">
                {[
                  {
                    icon: Stethoscope,
                    label: "Clinic Management System",
                    sub: "Appointments · EMR · Billing · Patient Portal",
                    active: true,
                    color: "border-blue-400/60 bg-blue-500/10",
                    iconColor: "text-blue-400 bg-blue-400/10",
                  },
                  {
                    icon: Hospital,
                    label: "Hospital Management System",
                    sub: "OPD · IPD · Pharmacy · Labs · Radiology",
                    active: false,
                    color: "border-white/10 bg-white/5",
                    iconColor: "text-emerald-400 bg-emerald-400/10",
                  },
                  {
                    icon: Pill,
                    label: "Pharmacy Management System",
                    sub: "Prescriptions · Inventory · Suppliers",
                    active: false,
                    color: "border-white/10 bg-white/5",
                    iconColor: "text-teal-400 bg-teal-400/10",
                  },
                ].map(({ icon: Icon, label, sub, active, color, iconColor }) => (
                  <div
                    key={label}
                    className={`relative flex items-center gap-4 rounded-2xl border p-5 backdrop-blur-sm transition-all ${color} ${active ? "shadow-lg shadow-blue-500/10" : ""}`}
                  >
                    {active && (
                      <span className="absolute right-4 top-4 rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Current
                      </span>
                    )}
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconColor}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${active ? "text-white" : "text-white/70"}`}>{label}</p>
                      <p className="mt-0.5 text-xs text-white/40">{sub}</p>
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-xs text-white/50">
                    Not sure which fits?{" "}
                    <Link href="/solutions/healthcare" className="font-semibold text-blue-300 hover:text-blue-200 underline">
                      Compare all three healthcare solutions →
                    </Link>
                  </p>
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Buyer&apos;s Checklist</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              How to Choose the Right Clinic Management System
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Five things to check before committing to any clinic software vendor.
            </p>
          </MotionSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {howToChoose.map(({ title, desc }, idx) => (
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

          {/* FAQPage JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: cmsFaqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />

          <div className="mt-12 space-y-3">
            {cmsFaqs.map((faq, idx) => {
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
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1f5c] via-[#0f1a4e] to-[#0b1437] p-10 text-center text-white shadow-2xl md:p-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
              <Star className="h-3.5 w-3.5 fill-blue-300 text-blue-300" aria-hidden="true" />
              Free Demo Available
            </span>
            <h2 className="mt-6 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Ready to Simplify Your Clinic&apos;s Operations?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 md:text-lg">
              Stop juggling separate tools for scheduling, records, and billing. See how our Clinic Management System brings your practice onto one connected platform — live in days, not months.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400"
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
              {[
                "Live in days",
                "No inpatient modules you won't use",
                "HIPAA & GDPR aligned",
                "Upgradeable to full HMS",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" aria-hidden="true" />
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
