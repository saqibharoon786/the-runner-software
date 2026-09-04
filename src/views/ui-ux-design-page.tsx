"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Palette } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  uiUxDesignSeo,
  uiUxHero,
  uiVsUx,
  designServices,
  uxResearch,
  informationArchitecture,
  wireframesPrototypes,
  designSystems,
  mobileUx,
  saasDashboard,
  uxAuditRedesign,
  accessibility,
  developerHandoff,
  designProcess,
  approachSections,
  commonMistakes,
  uxConversion,
  industryUseCases,
  designCost,
  designTimeline,
  usaSection,
  canadaSection,
  whyChooseRunner,
  uiUxFaqs,
  finalCta,
  DESIGN_PILLAR_PATH,
} from "@/data/ui-ux-design-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${uiUxDesignSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: uiUxDesignSeo.h1, description: uiUxDesignSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "UI/UX Design",
        name: "UI/UX Design Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: uiUxDesignSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "UI/UX Design Services",
          itemListElement: designServices.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: "Design", item: `${baseUrl}${DESIGN_PILLAR_PATH}` },
          { "@type": "ListItem", position: 4, name: "UI/UX Design", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: uiUxFaqs.map((f) => ({
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

function ContentSection({ id, title, children, alt = false }: { id?: string; title: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={alt ? "bg-slate-50 py-20" : "py-20"}>
      <div className="mx-auto max-w-3xl px-6">
        <h2 id={id ? `${id}-heading` : undefined} className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function ContextualLink({ before, text, href, after }: { before: string; text: string; href: string; after: string }) {
  return (
    <p className="mt-4 text-sm leading-relaxed text-slate-600">
      {before}
      <Link href={href} className="font-semibold text-[#0f1a4e] hover:underline">{text}</Link>
      {after}
    </p>
  );
}

export default function UiUxDesignPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(uiUxFaqs[0]?.q ?? null);

  return (
    <div className="min-h-screen bg-white">
      <PageSchema />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-100" aria-labelledby="page-heading">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs font-medium text-slate-500">
              <Link href="/" className="hover:text-[#0f1a4e]">Home</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href="/#services" className="hover:text-[#0f1a4e]">Services</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href={DESIGN_PILLAR_PATH} className="hover:text-[#0f1a4e]">Design</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-[#0f1a4e]">UI/UX Design</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Palette className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {uiUxDesignSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{uiUxHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600"><strong>In short:</strong> {uiUxHero.summary}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {uiUxHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {uiUxHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80"
                  alt="UI/UX design services including research, wireframes, and design systems"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&auto=format&fit=crop"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* UI vs UX */}
        <ContentSection id="ui-vs-ux" title={uiVsUx.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>UI (user interface) design:</strong> {uiVsUx.ui}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>UX (user experience) design:</strong> {uiVsUx.ux}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>How they work together:</strong> {uiVsUx.together}</p>
        </ContentSection>

        {/* Services */}
        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">UI/UX Design Services</h2>
            <div className="mt-10 space-y-6">
              {designServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600"><strong>What it is:</strong> {s.what}</p>
                  <p className="mt-2 text-sm text-slate-600"><strong>What problem it solves:</strong> {s.problem}</p>
                  <p className="mt-2 text-sm text-slate-600"><strong>When a business needs it:</strong> {s.when}</p>
                  <p className="mt-2 text-sm text-slate-600"><strong>Deliverables may include:</strong> {s.deliverables}</p>
                  {s.webLink && <ContextualLink {...s.webLink} />}
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* UX Research & IA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{uxResearch.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{uxResearch.intro}</p>
              <BulletList items={uxResearch.methods} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>How research informs design decisions:</strong> {uxResearch.informs}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{informationArchitecture.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{informationArchitecture.intro}</p>
              <BulletList items={informationArchitecture.components} check />
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs leading-relaxed text-slate-700">
                {informationArchitecture.example.split(" → ").map((part, i, arr) => (
                  <span key={part}>
                    {part}
                    {i < arr.length - 1 && <span className="mx-1 text-[#0f1a4e]">→</span>}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{informationArchitecture.closing}</p>
            </div>
          </div>
        </section>

        {/* Wireframes, Design Systems, Mobile, SaaS */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{wireframesPrototypes.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>Low-fidelity wireframes:</strong> {wireframesPrototypes.lowFidelity}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>High-fidelity wireframes:</strong> {wireframesPrototypes.highFidelity}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>Interactive prototypes:</strong> {wireframesPrototypes.interactive}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>Production UI:</strong> {wireframesPrototypes.production}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{wireframesPrototypes.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{designSystems.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{designSystems.intro}</p>
              <BulletList items={designSystems.elements} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">Why design systems become particularly valuable for:</p>
              <BulletList items={designSystems.valuableFor} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{designSystems.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{mobileUx.title}</h2>
              <BulletList items={mobileUx.considerations} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{mobileUx.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{saasDashboard.title}</h2>
              <BulletList items={saasDashboard.requirements} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{saasDashboard.approach}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{saasDashboard.closing}</p>
            </div>
          </div>
        </section>

        {/* Audit, Accessibility, Handoff */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{uxAuditRedesign.title}</h2>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">How a UX audit works — components we typically evaluate:</p>
              <ol className="mt-4 space-y-2">
                {uxAuditRedesign.auditSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{uxAuditRedesign.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{accessibility.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{accessibility.intro}</p>
              <BulletList items={accessibility.practices} check />
              <p className="mt-6 text-sm text-slate-600">{accessibility.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{developerHandoff.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{developerHandoff.intro}</p>
              <BulletList items={developerHandoff.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{developerHandoff.closing}</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">UI/UX Design Process</h2>
            <div className="mt-10 space-y-4">
              {designProcess.map((step) => (
                <div key={step.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-sm font-bold text-white">{step.step}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#0b1437]">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-600"><strong>Why it matters:</strong> {step.why}</p>
                      <p className="mt-1 text-sm text-slate-600"><strong>Decisions made:</strong> {step.decisions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach sections, mistakes, conversion */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">How We Approach UX Research</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.research}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">How We Design Complex SaaS Dashboards</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.dashboards}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">How We Decide What Belongs Above the Fold</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.aboveFold}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">How We Reduce User Friction</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.friction}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">How We Approach Responsive Design</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.responsive}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">How We Build Design Systems</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.designSystems}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">How We Prepare Designs for Development</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.handoff}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Common UI/UX Mistakes We Look For</h2>
              <BulletList items={commonMistakes} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{uxConversion.title}</h2>
              <BulletList items={uxConversion.influences} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{uxConversion.disclaimer}</p>
            </div>
          </div>
        </section>

        {/* Industries, Cost, Timeline, Geo */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">UI/UX Design for Industries</h2>
              <p className="mt-4 text-sm text-slate-500">Design requirements differ meaningfully by product type — a marketing website and an internal tool have fundamentally different priorities.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industryUseCases.map((ind) => (
                  <div key={ind.industry} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-[#0b1437]">{ind.industry}</h3>
                    <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-3xl space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{designCost.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How much does UI/UX design cost?</strong> {designCost.intro}</p>
                <BulletList items={designCost.factors} />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{designCost.closing}</p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{designTimeline.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How long does UI/UX design take?</strong> {designTimeline.intro}</p>
                <BulletList items={designTimeline.factors} />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{designTimeline.closing}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-extrabold text-[#0b1437]">{usaSection.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{usaSection.body}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-extrabold text-[#0b1437]">{canadaSection.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{canadaSection.body}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions?</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <p className="mt-8 text-sm leading-relaxed text-slate-500">
              We do not claim to be #1, the largest, or award-winning, and we do not fabricate client names, user counts, conversion percentages, or research statistics.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {uiUxFaqs.map((f) => {
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

        {/* Final CTA */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14 bg-gradient-to-br from-[#0f1a4e] to-[#0c1440]">
              <h2 className="text-3xl font-extrabold md:text-4xl">{finalCta.headline}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75">{finalCta.body}</p>
              <ol className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-white/80">
                {finalCta.steps.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/75">
                {finalCta.crossLinks[0].before}
                <Link href={finalCta.crossLinks[0].href} className="font-semibold text-white underline hover:text-white/90">{finalCta.crossLinks[0].text}</Link>
                {finalCta.crossLinks[0].after}
                <Link href={finalCta.crossLinks[1].href} className="font-semibold text-white underline hover:text-white/90">{finalCta.crossLinks[1].text}</Link>
                {finalCta.crossLinks[1].after}
                <Link href={finalCta.crossLinks[2].href} className="font-semibold text-white underline hover:text-white/90">{finalCta.crossLinks[2].text}</Link>
                {finalCta.crossLinks[2].after}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                  {finalCta.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  {finalCta.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
