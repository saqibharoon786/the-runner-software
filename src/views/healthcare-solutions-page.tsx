"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  Hospital,
  Stethoscope,
  Pill,
  ArrowRight,
  CheckCircle2,
  Star,
  AlertTriangle,
  ChevronDown,
  Shield,
  FileText,
  Workflow,
  Database,
  Zap,
  Lock,
  DollarSign,
  Link2,
  HelpCircle,
  Building2,
  Users,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const NAVY = "#0f1a4e";

const healthcareFaqs = [
  {
    question: "1. What healthcare software solutions do you offer?",
    answer:
      "We offer three core healthcare solutions: a Hospital Management System for multi-department hospitals, a Clinic Management System for single-location practices, and a Pharmacy Management System for independent or hospital-linked pharmacies.",
  },
  {
    question: "2. What's the difference between a Hospital Management System and a Clinic Management System?",
    answer:
      "A Hospital Management System supports full inpatient and outpatient operations across multiple departments — including labs, pharmacy, and radiology. A Clinic Management System is a lighter solution focused on appointments, EMR, and billing for single-location outpatient practices.",
  },
  {
    question: "3. Can our pharmacy operate as a standalone system, or does it need to connect to a hospital or clinic?",
    answer:
      "The Pharmacy Management System works as a fully standalone solution for independent pharmacies, and can also connect directly to our Hospital or Clinic Management Systems if you want dispensing and billing data unified across departments.",
  },
  {
    question: "4. Are your healthcare solutions compliant with HIPAA and GDPR?",
    answer:
      "Our healthcare solutions include role-based access control, encrypted data storage, and audit trails designed to support HIPAA and GDPR alignment, with the specific compliance posture depending on your organization's governance and configuration.",
  },
  {
    question: "5. How long does implementation take for a healthcare solution?",
    answer:
      "Most healthcare deployments use a phased rollout — starting with registration, appointments, and billing — allowing core workflows to go live in weeks, with pharmacy, lab, and radiology modules added in later phases.",
  },
  {
    question: "6. Can your healthcare software integrate with our existing lab equipment and imaging systems?",
    answer:
      "Yes. Our healthcare solutions are built with HL7/FHIR-ready architecture and support integration with lab analyzers and PACS/imaging systems, with the specific integration scope defined based on your existing equipment.",
  },
  {
    question: "7. Can a small clinic upgrade to the full Hospital Management System later?",
    answer:
      "Yes. Our healthcare solutions share the same underlying platform, so clinics that grow into multi-department operations can transition to the Hospital Management System without starting from scratch.",
  },
  {
    question: "8. Do you offer a patient portal or mobile access?",
    answer:
      "Yes, patient portal and mobile access capabilities are available across our healthcare solutions, allowing patients to book appointments, view reports, and manage billing online.",
  },
  {
    question: "9. How is your healthcare software priced?",
    answer:
      "Pricing is modular — you pay for the specific solution and modules your organization needs today, whether that's a single Clinic Management System or a full multi-department Hospital Management System, and can expand as you grow.",
  },
  {
    question: "10. Can I request a demo before choosing a healthcare solution?",
    answer:
      "Yes. We offer free demos for the Hospital Management System, Clinic Management System, and Pharmacy Management System, so you can evaluate fit for your organization before making a decision.",
  },
];

export default function HealthcareSolutionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
        <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <MotionSection className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
              <Hospital className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              Digital Healthcare Software Solutions
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Healthcare Solutions <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">Built for Real Clinical Operations</span>
            </h1>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-blue-100/90 md:text-lg">
              <p>
                Healthcare doesn&apos;t run on spreadsheets, sticky notes, and five disconnected tools — but too many clinics and hospitals still operate that way. A patient&apos;s history lives in one system, billing in another, and pharmacy stock in a third, with staff manually reconciling all three by hand.
              </p>
              <p>
                Our <strong className="font-semibold text-white">Healthcare Solutions</strong> exist to close that gap. Whether you&apos;re running a single outpatient clinic or a multi-department hospital, we provide purpose-built software that keeps patient records, billing, and pharmacy operations connected — so your team spends less time on data entry and more time on patient care.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-7 py-4 text-sm font-bold text-[#0b1437] shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none"
              >
                Book a Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none"
              >
                Talk to Our Healthcare Team
                <ArrowRight className="h-4 w-4" />
              </Link>
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

      {/* 2. WHY GENERIC SOFTWARE FAILS HEALTHCARE ORGANIZATIONS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Clinical Workflow Barriers</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Why Generic Software Fails Healthcare Organizations
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Most generic business software — CRMs, accounting tools, basic scheduling apps — was never designed for clinical workflows. When healthcare organizations try to force-fit these tools, three problems show up almost immediately:
            </p>
          </MotionSection>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Compliance gets bolted on, not built in.",
                desc: "Generic software rarely ships with the role-based access controls and audit trails needed to align with HIPAA, GDPR, or local healthcare data regulations. Retrofitting compliance later is expensive and risky.",
                color: "bg-red-500/10 text-red-600 border-red-200",
              },
              {
                icon: FileText,
                title: "Clinical terminology doesn't map cleanly.",
                desc: 'Concepts like "admission," "discharge summary," or "consultant charge mapping" don\'t exist in generic CRM fields — staff end up creating workarounds that break down at scale.',
                color: "bg-amber-500/10 text-amber-600 border-amber-200",
              },
              {
                icon: Workflow,
                title: "Departments stay disconnected.",
                desc: "A generic tool might handle appointments well, but it won't connect that appointment to a lab order, a pharmacy dispense, or a billing invoice automatically.",
                color: "bg-blue-500/10 text-blue-600 border-blue-200",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionCard
                  key={item.title}
                  delay={idx * 0.08}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:bg-white hover:shadow-xl"
                >
                  <div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </MotionCard>
              );
            })}
          </div>

          {/* Bottom takeaway banner */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-[#0f1a4e] to-[#0b1437] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-[#0b1437]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="text-base font-medium leading-relaxed text-emerald-100 md:text-lg">
                  <strong className="font-bold text-white">Purpose-built healthcare software solves all three by design</strong> — compliance, terminology, and cross-department data flow are the foundation, not an afterthought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR HEALTHCARE SOFTWARE SOLUTIONS */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200" id="healthcare-products">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Purpose-Built Systems</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Our Healthcare Software Solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We offer three core healthcare solutions, each built for a different scale of operation — from a single clinic to a full multi-department hospital.
            </p>
          </MotionSection>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Hospital Management System */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-50/40 via-white to-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white">
                    <Star className="h-3.5 w-3.5 fill-white" /> Featured Solution
                  </span>
                  <Hospital className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-[#0b1437]">
                  <Link href="/hospital-management-system" className="hover:text-emerald-700 transition">
                    Hospital Management System
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  A unified platform for hospitals managing inpatient and outpatient care, billing, pharmacy, laboratory, radiology, and staff operations across departments. Built to scale from a single hospital to a multi-facility network, with phased implementation that gets core workflows live without disrupting ongoing patient care. This is the right starting point for any hospital, medical center, or multi-department healthcare facility evaluating new software.
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200/80 pt-6">
                <p className="text-xs font-semibold text-slate-500">
                  <strong className="font-bold text-emerald-800">Best for:</strong> Hospitals, multi-specialty medical centers, and healthcare networks needing full clinical and financial integration across departments.
                </p>
                <Link
                  href="/hospital-management-system"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f1a4e] px-5 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-[#1a2d6e]"
                >
                  Explore Hospital System <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Clinic Management System */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Outpatient & Practices</span>
                  <Stethoscope className="h-7 w-7 text-[#0f1a4e]" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-[#0b1437]">
                  <Link href="/clinic-management-system" className="hover:text-[#0f1a4e] transition">
                    Clinic Management System
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  A faster, lighter-weight solution for single-location practices. Streamlines appointment scheduling, EMR documentation, billing, and patient communication — without the deployment overhead of a full hospital-scale system. Ideal for outpatient practices that need modern software without hospital-level complexity.
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200/80 pt-6">
                <p className="text-xs font-semibold text-slate-500">
                  <strong className="font-bold text-[#0b1437]">Best for:</strong> Independent clinics, specialty practices, diagnostic centers, and small medical offices.
                </p>
                <Link
                  href="/clinic-management-system"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-xs font-bold text-[#0b1437] transition hover:bg-slate-100"
                >
                  Explore Clinic System <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Pharmacy Management System */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Prescriptions & Inventory</span>
                  <Pill className="h-7 w-7 text-[#0f1a4e]" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-[#0b1437]">
                  <Link href="/pharmacy-management-system" className="hover:text-[#0f1a4e] transition">
                    Pharmacy Management System
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Manages prescriptions, inventory, suppliers, and sales in a single system. Works as a standalone solution for independent pharmacies, or connects directly with our Hospital and Clinic systems so dispensing, stock levels, and billing stay in sync automatically.
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200/80 pt-6">
                <p className="text-xs font-semibold text-slate-500">
                  <strong className="font-bold text-[#0b1437]">Best for:</strong> Independent pharmacies, hospital-linked dispensaries, and multi-location pharmacy chains.
                </p>
                <Link
                  href="/pharmacy-management-system"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-xs font-bold text-[#0b1437] transition hover:bg-slate-100"
                >
                  Explore Pharmacy System <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT MAKES OUR HEALTHCARE SOLUTIONS DIFFERENT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Key Advantages</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              What Makes Our Healthcare Solutions Different
            </h2>
          </MotionSection>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Database,
                title: "🏥 One Shared Data Core",
                desc: "Unlike platforms that bolt separate modules together, our healthcare solutions share a single data core. A patient registered at the front desk, seen in OPD, prescribed medication, and billed for the visit — all of that flows through one connected record, with no manual re-entry between departments.",
              },
              {
                icon: Zap,
                title: "⚡ Phased, Low-Disruption Implementation",
                desc: "Healthcare organizations can't afford weeks of downtime. We deploy in phases — starting with the highest-impact workflows like registration, OPD, and billing — so core operations go live in weeks while more complex modules like pharmacy and lab integration roll out afterward.",
              },
              {
                icon: Lock,
                title: "🔐 Compliance as a Default, Not an Upsell",
                desc: "Role-based access control, encrypted data storage, and full audit trails come standard across every healthcare solution — supporting alignment with HIPAA, GDPR, and regional healthcare data regulations based on your specific configuration.",
              },
              {
                icon: DollarSign,
                title: "💰 Right-Sized Pricing for Any Scale",
                desc: "A single clinic shouldn't pay enterprise hospital pricing, and a growing hospital shouldn't be locked out of scaling. Our modular approach lets you start with what you need today — Clinic Management, Pharmacy Management, or full Hospital Management — and expand as your organization grows.",
              },
              {
                icon: Link2,
                title: "🔗 Built to Integrate, Not Isolate",
                desc: "Our healthcare solutions are designed with HL7/FHIR-ready architecture, supporting integration with lab analyzers, PACS/imaging systems, and accounting platforms — so you're not forced to abandon infrastructure that already works.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionCard
                  key={item.title}
                  delay={idx * 0.06}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-[#0b1437]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </MotionCard>
              );
            })}

            {/* Custom CTA highlight card */}
            <div className="flex flex-col justify-between rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-900 to-[#0f1a4e] p-7 text-white shadow-lg">
              <div>
                <Sparkles className="h-6 w-6 text-emerald-400" />
                <h3 className="mt-4 text-lg font-bold text-white">Need a Custom Clinical Workflow?</h3>
                <p className="mt-2 text-xs leading-relaxed text-emerald-100/80">
                  Our engineering team can customize any module or build bespoke clinical software aligned to your exact operating protocols.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-xs font-bold text-[#0b1437] transition hover:bg-emerald-300"
              >
                Talk to an Expert <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HEALTHCARE SOLUTIONS COMPARISON TABLE */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">System Comparison</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl">
              Healthcare Solutions Comparison
            </h2>
          </MotionSection>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-[#0f1a4e] text-xs uppercase text-white font-bold tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4">Solution</th>
                    <th scope="col" className="px-6 py-4">Ideal Scale</th>
                    <th scope="col" className="px-6 py-4">Core Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="transition hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-[#0b1437]">
                      <Link href="/hospital-management-system" className="hover:text-emerald-700 flex items-center gap-2">
                        <Hospital className="h-4 w-4 text-emerald-600" />
                        Hospital Management System
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-xs md:text-sm">
                      Multi-department hospitals, hospital networks
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-xs md:text-sm">
                      Full IPD/OPD, billing, pharmacy, lab & radiology integration
                    </td>
                  </tr>

                  <tr className="transition hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-[#0b1437]">
                      <Link href="/clinic-management-system" className="hover:text-[#0f1a4e] flex items-center gap-2">
                        <Stethoscope className="h-4 w-4 text-[#0f1a4e]" />
                        Clinic Management System
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-xs md:text-sm">
                      Single-location practices
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-xs md:text-sm">
                      Appointments, EMR, billing, patient communication
                    </td>
                  </tr>

                  <tr className="transition hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-[#0b1437]">
                      <Link href="/pharmacy-management-system" className="hover:text-[#0f1a4e] flex items-center gap-2">
                        <Pill className="h-4 w-4 text-[#0f1a4e]" />
                        Pharmacy Management System
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-xs md:text-sm">
                      Independent or hospital-linked pharmacies
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-xs md:text-sm">
                      Prescription dispensing, inventory, supplier management
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 text-sm text-slate-700">
            <p className="leading-relaxed">
              <strong className="font-bold text-[#0b1437]">Not sure which fits your organization?</strong> Start with your biggest current bottleneck — patient records, billing accuracy, or pharmacy inventory — and use that as your entry point. All three solutions are built to connect later if your needs expand.
            </p>
          </div>
        </div>
      </section>

      {/* 6. HOW TO CHOOSE THE RIGHT HEALTHCARE SOFTWARE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Evaluation Framework</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              How to Choose the Right Healthcare Software
            </h2>
          </MotionSection>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-5">
            {[
              {
                step: "1",
                title: "Match software to your scale, not your ambitions.",
                desc: "A single clinic doesn't need full hospital-grade IPD management — start with what fits your current operations.",
              },
              {
                step: "2",
                title: "Verify compliance capabilities upfront.",
                desc: "Ask specifically about role-based access, audit trails, and how the vendor supports HIPAA/GDPR alignment — don't assume it's included.",
              },
              {
                step: "3",
                title: "Check integration with lab & imaging equipment.",
                desc: "Confirm HL7/FHIR support and PACS connectivity if you already have diagnostic equipment in place.",
              },
              {
                step: "4",
                title: "Ask about implementation timeline and disruption.",
                desc: "Healthcare operations can't tolerate long downtime — get a clear phased rollout plan before committing.",
              },
              {
                step: "5",
                title: "Confirm the pricing model scales with you.",
                desc: "You should be able to start small and expand modules later, not pay full enterprise pricing from day one.",
              },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition hover:bg-white hover:shadow-md">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-sm font-black text-white">
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

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200" id="faq">
        <div className="mx-auto max-w-4xl px-6">
          <MotionSection className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Clear Answers</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0b1437] md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </MotionSection>

          <div className="mt-12 space-y-4">
            {healthcareFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen ? "border-[#0f1a4e]/40 bg-white shadow-md" : "border-slate-200 bg-white hover:border-slate-300"
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

      {/* 8. BOTTOM CTA BANNER */}
      <section className="py-20 bg-white" id="contact-cta">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-[#0f1a4e] to-[#0b1437] p-10 text-center text-white shadow-2xl md:p-16">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Find the Right Healthcare Software for Your Organization
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-100/90 md:text-lg">
              From single clinics to multi-department hospitals, explore our healthcare solutions above or talk to our team to find the right fit for your organization&apos;s scale and workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-7 py-4 text-sm font-bold text-[#0b1437] shadow-lg transition hover:bg-emerald-300"
              >
                Book a Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-md backdrop-blur-sm transition hover:bg-white/20"
              >
                Talk to Our Healthcare Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
