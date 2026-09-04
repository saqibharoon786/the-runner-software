"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Lightbulb } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  softwareConsultingSeo,
  consultingHero,
  trustBar,
  whatIsConsulting,
  consultingServices,
  consultingProcess,
  architectureSection,
  modernizationSection,
  techStackSection,
  businessStages,
  buildVsBuy,
  costSection,
  usaCanadaSection,
  securitySection,
  servicesComparison,
  practicalExamples,
  whyChooseRunner,
  caseStudiesSection,
  finalCta,
  consultingFaqs,
  SOFTWARE_DEVELOPMENT_PILLAR_PATH,
} from "@/data/software-consulting-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${softwareConsultingSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: softwareConsultingSeo.h1, description: softwareConsultingSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "Software Consulting",
        name: "Software Consulting Services",
        description:
          "Software consulting services covering technology strategy, software architecture, legacy modernization, cloud consulting, API and integration consulting, AI consulting, performance consulting, security consulting, and DevOps consulting.",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        audience: { "@type": "Audience", audienceType: "Businesses and technical decision-makers seeking software architecture, technology strategy, or modernization guidance" },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: "Software Development", item: `${baseUrl}${SOFTWARE_DEVELOPMENT_PILLAR_PATH}` },
          { "@type": "ListItem", position: 4, name: "Software Consulting", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: consultingFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BulletList({ items, check = false }: { items: string[]; check?: boolean }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
          {check ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          ) : (
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f1a4e]" aria-hidden="true" />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: { factor: string; [key: string]: string }[] }) {
  const keys = headers.slice(1);
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-bold text-[#0b1437]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.factor} className="border-t border-slate-100">
              <td className="px-4 py-3 font-semibold text-[#0b1437]">{row.factor}</td>
              {keys.map((k) => (
                <td key={k} className="px-4 py-3 text-slate-600">{row[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SoftwareConsultingPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(consultingFaqs[0]?.q ?? null);

  return (
    <div className="min-h-screen bg-white">
      <PageSchema />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-slate-100" aria-labelledby="page-heading">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs font-medium text-slate-500">
              <Link href="/" className="hover:text-[#0f1a4e]">Home</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href="/#services" className="hover:text-[#0f1a4e]">Services</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href={SOFTWARE_DEVELOPMENT_PILLAR_PATH} className="hover:text-[#0f1a4e]">Software Development</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-[#0f1a4e]">Software Consulting</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Lightbulb className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {softwareConsultingSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{consultingHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{consultingHero.closing}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {consultingHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {consultingHero.secondaryCta}
                  </Link>
                </div>
                <p className="mt-8 text-sm font-semibold text-[#0b1437]">What this means in practice:</p>
                <BulletList items={consultingHero.benefits} check />
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80"
                  alt={softwareConsultingSeo.imageAlt}
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-slate-50 py-8">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium leading-relaxed text-slate-700">{trustBar.statement}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatIsConsulting.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>{whatIsConsulting.definition}</strong></p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsConsulting.consultantRole}</p>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">Business problems software consulting solves:</p>
            <BulletList items={whatIsConsulting.businessProblems} />
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">Technical problems software consulting solves:</p>
            <BulletList items={whatIsConsulting.technicalProblems} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsConsulting.typicalEngagement}</p>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Software Consulting Services</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {consultingServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{s.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">The Software Consulting Process</h2>
            <div className="mt-10 space-y-4">
              {consultingProcess.map((step) => (
                <div key={step.step} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{step.step}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0b1437]">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">Not every engagement needs all twelve phases — we scope the process to match the actual decision at hand.</p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{architectureSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{architectureSection.intro}</p>
              <BulletList items={architectureSection.patterns} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{architectureSection.example}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{modernizationSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{modernizationSection.intro}</p>
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{modernizationSection.assessmentIntro}</p>
              <BulletList items={modernizationSection.assessment} />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{modernizationSection.strategiesIntro}</p>
              <div className="mt-4 space-y-4">
                {modernizationSection.strategies.map((s) => (
                  <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-[#0b1437]">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{modernizationSection.guidance}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{modernizationSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{techStackSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{techStackSection.intro}</p>
            <div className="mt-8 space-y-5">
              {techStackSection.areas.map((a) => (
                <div key={a.label}>
                  <h3 className="text-sm font-bold text-[#0b1437]">{a.label}</h3>
                  <p className="mt-1 text-sm text-slate-600">{a.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{techStackSection.closing}</p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{businessStages.title}</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {businessStages.stages.map((stage) => (
                <div key={stage.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0b1437]">{stage.title}</h3>
                  <BulletList items={stage.items} check />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{buildVsBuy.title}</h2>
            <p className="mt-4 text-[15px] font-semibold text-slate-700">{buildVsBuy.question}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{buildVsBuy.intro}</p>
            <ComparisonTable
              headers={["Factor", "Build (Custom Software)", "Buy (Existing SaaS/Product)"]}
              rows={buildVsBuy.rows.map((r) => ({ factor: r.factor, build: r.build, buy: r.buy }))}
            />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{buildVsBuy.buildWhen}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{buildVsBuy.buyWhen}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{buildVsBuy.closing}</p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{costSection.title}</h2>
              <p className="mt-4 text-[15px] font-semibold text-slate-700">{costSection.question}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{costSection.intro}</p>
              <BulletList items={costSection.factors} />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{costSection.structuresIntro}</p>
              <BulletList items={costSection.structures} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{costSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{usaCanadaSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{usaCanadaSection.intro}</p>
              <BulletList items={usaCanadaSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{usaCanadaSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{securitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{securitySection.intro}</p>
              <BulletList items={securitySection.practices} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{securitySection.disclaimer}</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{servicesComparison.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{servicesComparison.intro}</p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[800px] text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Service</th>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Primary Purpose</th>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Client Control</th>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {servicesComparison.rows.map((row) => (
                    <tr key={row.service} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-semibold text-[#0b1437]">{row.service}</td>
                      <td className="px-4 py-3 text-slate-600">{row.purpose}</td>
                      <td className="px-4 py-3 text-slate-600">{row.control}</td>
                      <td className="px-4 py-3 text-slate-600">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">{servicesComparison.relationshipIntro}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Software consulting is where you go when the question is &ldquo;what should we build, and how,&rdquo; before or independent of committing to a build.
              {servicesComparison.customLink.before}
              <Link href={servicesComparison.customLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{servicesComparison.customLink.text}</Link>
              {servicesComparison.customLink.after}
              <Link href={servicesComparison.dedicatedLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{servicesComparison.dedicatedLink.text}</Link>
              {servicesComparison.dedicatedLink.after}
              <Link href={servicesComparison.staffAugLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{servicesComparison.staffAugLink.text}</Link>
              {servicesComparison.staffAugLink.after}
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{practicalExamples.title}</h2>
            <p className="mt-4 text-sm italic text-slate-600">{practicalExamples.disclaimer}</p>
            <BulletList items={practicalExamples.examples} check />
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why The Runner Software Solutions</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseRunner.map(({ icon: Icon, title, desc }, i) => (
                <MotionCard key={title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#0b1437]">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                </MotionCard>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-slate-600">
              We don&apos;t use unsupported superlatives to describe ourselves — we&apos;d rather demonstrate the quality of our thinking through the actual substance of a consulting engagement than through marketing language.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-extrabold text-[#0b1437]">{caseStudiesSection.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {caseStudiesSection.body}{" "}
              <Link href={caseStudiesSection.href} className="font-semibold text-[#0f1a4e] hover:underline">
                {caseStudiesSection.linkText}
              </Link>
              {caseStudiesSection.after}
            </p>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {consultingFaqs.map((f) => {
                const isOpen = openFaq === f.q;
                return (
                  <div key={f.q} className={`overflow-hidden rounded-2xl border bg-white transition ${isOpen ? "border-[#0f1a4e]/30 shadow-md" : "border-slate-200"}`}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : f.q)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                      <span className="text-sm font-bold text-[#0b1437]">{f.q}</span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-[#0f1a4e] text-white" : "bg-slate-100 text-[#0f1a4e]"}`}>
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600"><p>{f.a}</p></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14 bg-gradient-to-br from-[#0f1a4e] to-[#0c1440]">
              <h2 className="text-3xl font-extrabold md:text-4xl">{finalCta.headline}</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/80">{finalCta.intro}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                  {finalCta.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  {finalCta.secondaryCta}
                </Link>
              </div>
              <p className="mx-auto mt-6 max-w-lg text-sm text-white/70">{finalCta.closing}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
