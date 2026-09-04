"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, TestTube2 } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  softwareTestingSeo,
  testingHero,
  whatAreTestingServices,
  qaVsTesting,
  testingServices,
  automationPyramid,
  approachSections,
  cicdTestingSection,
  testingProcess,
  commonChallenges,
  costSection,
  timelineSection,
  audienceSection,
  industriesSection,
  usaSection,
  canadaSection,
  whyChooseRunner,
  testingFaqs,
  finalCta,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
} from "@/data/software-testing-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${softwareTestingSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: softwareTestingSeo.h1, description: softwareTestingSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "Software Testing Services",
        name: "Software Testing Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: softwareTestingSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Testing Services",
          itemListElement: testingServices.slice(0, 10).map((s) => ({
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
          { "@type": "ListItem", position: 3, name: "Emerging Technologies", item: `${baseUrl}${EMERGING_TECHNOLOGIES_PILLAR_PATH}` },
          { "@type": "ListItem", position: 4, name: "Software Testing", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: testingFaqs.map((f) => ({
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

function ContextualLink({ before, text, href, after }: { before: string; text: string; href: string; after: string }) {
  return (
    <p className="mt-4 text-sm leading-relaxed text-slate-600">
      {before}
      <Link href={href} className="font-semibold text-[#0f1a4e] hover:underline">{text}</Link>
      {after}
    </p>
  );
}

function PipelineDiagram({ pipeline }: { pipeline: string }) {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs leading-relaxed text-slate-700">
      {pipeline.split(" → ").map((part, i, arr) => (
        <span key={part}>
          {part}
          {i < arr.length - 1 && <span className="mx-1 text-[#0f1a4e]">→</span>}
        </span>
      ))}
    </div>
  );
}

export default function SoftwareTestingPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(testingFaqs[0]?.q ?? null);

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
              <Link href={EMERGING_TECHNOLOGIES_PILLAR_PATH} className="hover:text-[#0f1a4e]">Emerging Technologies</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-[#0f1a4e]">Software Testing</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <TestTube2 className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {softwareTestingSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{testingHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{testingHero.disclaimer}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {testingHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {testingHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80"
                  alt="Software testing services including manual and automated QA"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are Testing Services + QA vs Testing */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatAreTestingServices.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatAreTestingServices.definition}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatAreTestingServices.includes}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{qaVsTesting.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{qaVsTesting.intro}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>Quality Assurance (QA):</strong> {qaVsTesting.qa}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>Software Testing:</strong> {qaVsTesting.testing}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>Quality Engineering:</strong> {qaVsTesting.qualityEngineering}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{qaVsTesting.closing}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Software Testing Services</h2>
            <div className="mt-10 space-y-6">
              {testingServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600"><strong>What it is:</strong> {s.what}</p>
                  <p className="mt-2 text-sm text-slate-600"><strong>What problem it solves:</strong> {s.problem}</p>
                  <p className="mt-2 text-sm text-slate-600"><strong>When it&apos;s needed:</strong> {s.when}</p>
                  <p className="mt-2 text-sm text-slate-600"><strong>What the process involves:</strong> {s.process}</p>
                  {s.extra && <p className="mt-4 text-sm text-slate-600">{s.extra}</p>}
                  {s.webLink && <ContextualLink {...s.webLink} />}
                  {s.teamLink && <ContextualLink {...s.teamLink} />}
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Pyramid + Tools */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Test Automation Tools & Strategy</h2>
            <p className="mt-4 text-sm font-semibold text-[#0b1437]">The automation pyramid:</p>
            <div className="mt-4 space-y-2">
              {automationPyramid.layers.map((layer, i) => (
                <div key={layer} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700" style={{ marginLeft: `${i * 12}px` }}>
                  {layer}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">Relevant tools:</p>
            <BulletList items={automationPyramid.tools} check />
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">Tool selection factors:</p>
            <BulletList items={automationPyramid.selectionFactors} />
          </div>
        </section>

        {/* First-Hand QA Engineering */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-12">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">First-Hand QA Engineering: How We Actually Think About Testing</h2>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">How We Build a Software Testing Strategy</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.strategy}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">How We Decide What to Automate</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.automation}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">How We Prioritize High-Risk Test Scenarios</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.riskPrioritization}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">Common QA Mistakes We Look For</h3>
              <BulletList items={approachSections.commonMistakes} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">How We Approach Regression Testing</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.regression}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">How We Test Complex SaaS Applications</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.saasTesting}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">How We Approach API Testing</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.apiTesting}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">How We Approach Mobile App Testing</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{approachSections.mobileTesting}</p>
            </div>
          </div>
        </section>

        {/* CI/CD Testing */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cicdTestingSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{cicdTestingSection.intro}</p>
            <PipelineDiagram pipeline={cicdTestingSection.pipeline} />
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">Different tests belong at different pipeline stages:</p>
            <BulletList items={cicdTestingSection.stages} check />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{cicdTestingSection.closing}</p>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">The Software Testing Process</h2>
            <div className="mt-10 space-y-4">
              {testingProcess.map((step) => (
                <div key={step.step} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{step.step}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0b1437]">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Common Software Testing Challenges</h2>
            <div className="mt-8 space-y-4">
              {commonChallenges.map((item) => (
                <div key={item.challenge} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-[#0b1437]">{item.challenge}</p>
                  <p className="mt-1 text-xs text-slate-600">→ {item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost, Timeline, Audience, Industries, Geo */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{costSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{costSection.intro}</p>
              <BulletList items={costSection.factors} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{costSection.closing}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{timelineSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{timelineSection.intro}</p>
              <BulletList items={timelineSection.factors} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{timelineSection.closing}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{audienceSection.title}</h2>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>SaaS companies:</strong> {audienceSection.saas.body}</p>
              <ContextualLink {...audienceSection.saas.link} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>Startups:</strong> {audienceSection.startups}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>Enterprises:</strong> {audienceSection.enterprises.body}</p>
              <ContextualLink {...audienceSection.enterprises.link} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Industries and Use Cases</h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industriesSection.map((ind) => (
                  <div key={ind.industry} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-[#0b1437]">{ind.industry}</h3>
                    <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                  </div>
                ))}
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
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why The Runner Software Solutions</h2>
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
              We don&apos;t promise bug-free software, guaranteed defect reduction percentages, or specific automation coverage numbers upfront.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {testingFaqs.map((f) => {
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
              <ol className="mx-auto mt-6 max-w-lg space-y-2 text-left text-sm text-white/80">
                {finalCta.steps.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
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
