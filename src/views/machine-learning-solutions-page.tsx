"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Brain } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  mlSolutionsSeo,
  mlHero,
  whatAreMlSolutions,
  mlServices,
  customMlSection,
  mlTypesSection,
  predictiveAnalyticsSection,
  predictiveModelingSection,
  recommendationSection,
  classificationSection,
  regressionSection,
  forecastingSection,
  anomalyDetectionSection,
  churnSection,
  fraudSection,
  computerVisionSection,
  nlpSection,
  mlAutomationSection,
  enterpriseMlSection,
  mlopsSection,
  modelDeploymentSection,
  modelMonitoringSection,
  dataPipelinesSection,
  modelEvaluationSection,
  mlSecuritySection,
  responsibleMlSection,
  mlIntegrationSection,
  mlArchitectureSection,
  techStackSection,
  developmentProcess,
  mvpSection,
  industriesSection,
  usaSection,
  canadaSection,
  costSection,
  timelineSection,
  whyChooseRunner,
  mlFaqs,
  finalCta,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
} from "@/data/machine-learning-solutions-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${mlSolutionsSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: mlSolutionsSeo.h1, description: mlSolutionsSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "Machine Learning Solutions",
        name: "Machine Learning Development Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: mlSolutionsSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Machine Learning Development Services",
          itemListElement: mlServices.slice(0, 10).map((s) => ({
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
          { "@type": "ListItem", position: 4, name: "Machine Learning Solutions", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: mlFaqs.map((f) => ({
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

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-[#0b1437] md:text-3xl">{title}</h2>
      {children}
    </div>
  );
}

export default function MachineLearningSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(mlFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">Machine Learning Solutions</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Brain className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {mlSolutionsSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{mlHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{mlHero.summary}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {mlHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {mlHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=80"
                  alt="Machine learning solutions for predictive analytics and intelligent business applications"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are ML Solutions */}
        <section id="what-is-ml" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatAreMlSolutions.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatAreMlSolutions.definition}</p>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">Building a machine learning solution involves a specific set of concepts worth understanding upfront:</p>
            <BulletList items={whatAreMlSolutions.concepts} check />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatAreMlSolutions.scopeNote}</p>
            <ContextualLink {...whatAreMlSolutions.aiDevLink} />
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Machine Learning Development Services</h2>
            <p className="mt-4 text-sm text-slate-600">End-to-end machine learning development services, from problem definition and data assessment through model development, deployment, and ongoing monitoring.</p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mlServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{s.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Custom ML + ML Types */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={customMlSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{customMlSection.intro}</p>
              <BulletList items={customMlSection.factors} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{customMlSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={mlTypesSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mlTypesSection.intro}</p>
              <div className="mt-6 space-y-4">
                {mlTypesSection.types.map((t) => (
                  <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-4">
                    <h3 className="text-sm font-bold text-[#0b1437]">{t.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{t.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[700px] text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      {mlTypesSection.comparison.headers.map((h) => (
                        <th key={h} className="px-3 py-3 font-bold text-[#0b1437]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mlTypesSection.comparison.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-slate-100 last:border-0">
                        {row.map((cell, i) => (
                          <td key={cell} className={`px-3 py-3 ${i === 0 ? "font-semibold text-[#0b1437]" : "text-slate-600"}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionBlock>
          </div>
        </section>

        {/* Predictive Analytics + Modeling + Recommendation */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={predictiveAnalyticsSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{predictiveAnalyticsSection.intro}</p>
              <BulletList items={predictiveAnalyticsSection.applications} check />
              <PipelineDiagram pipeline={predictiveAnalyticsSection.pipeline} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{predictiveAnalyticsSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={predictiveModelingSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{predictiveModelingSection.intro}</p>
              <BulletList items={predictiveModelingSection.steps} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{predictiveModelingSection.algorithms}</p>
            </SectionBlock>
            <SectionBlock title={recommendationSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{recommendationSection.intro}</p>
              <BulletList items={recommendationSection.approaches} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>Common use cases:</strong> {recommendationSection.useCases}</p>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Two challenges come up consistently:</p>
              <BulletList items={recommendationSection.challenges} />
            </SectionBlock>
          </div>
        </section>

        {/* Classification, Regression, Forecasting, Anomaly, Churn, Fraud */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={classificationSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{classificationSection.intro}</p>
              <BulletList items={classificationSection.useCases} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{classificationSection.types}</p>
              <BulletList items={classificationSection.metrics} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{classificationSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={regressionSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{regressionSection.intro}</p>
              <BulletList items={regressionSection.examples} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{regressionSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={forecastingSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{forecastingSection.intro}</p>
              <BulletList items={forecastingSection.useCases} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{forecastingSection.factors}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{forecastingSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={anomalyDetectionSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{anomalyDetectionSection.intro}</p>
              <BulletList items={anomalyDetectionSection.useCases} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{anomalyDetectionSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={churnSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{churnSection.intro}</p>
              <BulletList items={churnSection.signals} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{churnSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={fraudSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{fraudSection.intro}</p>
              <BulletList items={fraudSection.applications} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{fraudSection.closing}</p>
            </SectionBlock>
          </div>
        </section>

        {/* Computer Vision, NLP, Automation, Enterprise */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={computerVisionSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{computerVisionSection.intro}</p>
              <BulletList items={computerVisionSection.applications} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>Use cases:</strong> {computerVisionSection.useCases}</p>
              <p className="mt-4 text-sm text-slate-600">{computerVisionSection.disclaimer}</p>
            </SectionBlock>
            <SectionBlock title={nlpSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{nlpSection.intro}</p>
              <BulletList items={nlpSection.applications} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{nlpSection.closing}</p>
              <ContextualLink {...nlpSection.genAiLink} />
              <ContextualLink {...nlpSection.chatbotLink} />
            </SectionBlock>
            <SectionBlock title={mlAutomationSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mlAutomationSection.intro}</p>
              <BulletList items={mlAutomationSection.applications} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{mlAutomationSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={enterpriseMlSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{enterpriseMlSection.intro}</p>
              <BulletList items={enterpriseMlSection.requirements} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{enterpriseMlSection.additional}</p>
              <ContextualLink {...enterpriseMlSection.productDevLink} />
            </SectionBlock>
          </div>
        </section>

        {/* MLOps, Deployment, Monitoring, Data Pipelines, Evaluation */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={mlopsSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mlopsSection.intro}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mlopsSection.distinction}</p>
              <BulletList items={mlopsSection.covers} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{mlopsSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={modelDeploymentSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{modelDeploymentSection.intro}</p>
              <BulletList items={modelDeploymentSection.options} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{modelDeploymentSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={modelMonitoringSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{modelMonitoringSection.intro}</p>
              <BulletList items={modelMonitoringSection.areas} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{modelMonitoringSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={dataPipelinesSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{dataPipelinesSection.intro}</p>
              <BulletList items={dataPipelinesSection.stages} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">Common data quality issues:</p>
              <BulletList items={dataPipelinesSection.issues} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{dataPipelinesSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={modelEvaluationSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{modelEvaluationSection.intro}</p>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Classification metrics:</p>
              <BulletList items={modelEvaluationSection.classificationMetrics} />
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Regression metrics:</p>
              <BulletList items={modelEvaluationSection.regressionMetrics} />
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Ranking/recommendation metrics:</p>
              <BulletList items={modelEvaluationSection.rankingMetrics} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{modelEvaluationSection.closing}</p>
            </SectionBlock>
          </div>
        </section>

        {/* Security, Responsible ML, Integration, Architecture, Tech Stack */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={mlSecuritySection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mlSecuritySection.intro}</p>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Standard security practices:</p>
              <BulletList items={mlSecuritySection.standardPractices} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">ML-specific risks:</p>
              <BulletList items={mlSecuritySection.mlRisks} />
              <p className="mt-6 text-sm text-slate-600">{mlSecuritySection.disclaimer}</p>
            </SectionBlock>
            <SectionBlock title={responsibleMlSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{responsibleMlSection.intro}</p>
              <BulletList items={responsibleMlSection.considerations} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{responsibleMlSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={mlIntegrationSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mlIntegrationSection.intro}</p>
              <BulletList items={mlIntegrationSection.systems} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{mlIntegrationSection.technical}</p>
              <ContextualLink {...mlIntegrationSection.saasLink} />
            </SectionBlock>
            <SectionBlock title={mlArchitectureSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mlArchitectureSection.intro}</p>
              <PipelineDiagram pipeline={mlArchitectureSection.pipeline} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{mlArchitectureSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={techStackSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{techStackSection.intro}</p>
              <div className="mt-6 space-y-4">
                {techStackSection.categories.map((cat) => (
                  <div key={cat.label} className="rounded-xl border border-slate-200 bg-white p-4">
                    <h3 className="text-sm font-bold text-[#0b1437]">{cat.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{cat.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{techStackSection.closing}</p>
            </SectionBlock>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Machine Learning Development Process</h2>
            <p className="mt-4 text-sm text-slate-600">Structured to reduce risk and validate assumptions before committing to full-scale development.</p>
            <div className="mt-10 space-y-3">
              {developmentProcess.map((step) => (
                <div key={step.step} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{step.step}</span>
                  <p className="text-sm text-slate-700">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MVP, Industries, Cost, Timeline, Geo */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{mvpSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mvpSection.intro}</p>
              <BulletList items={mvpSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{mvpSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Machine Learning for Industries</h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industriesSection.map((ind) => (
                  <div key={ind.industry} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-[#0b1437]">{ind.industry}</h3>
                    <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-3xl space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{costSection.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{costSection.intro}</p>
                <BulletList items={costSection.factors} />
                <p className="mt-6 text-sm font-semibold text-[#0b1437]">Scope tiers:</p>
                <BulletList items={costSection.tiers} />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{costSection.closing}</p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{timelineSection.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{timelineSection.intro}</p>
                <BulletList items={timelineSection.factors} />
                <p className="mt-6 text-sm font-semibold text-[#0b1437]">Illustrative stages:</p>
                <BulletList items={timelineSection.stages} />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{timelineSection.closing}</p>
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
              We are not an official AWS, Google, or Microsoft partner, and we don&apos;t promise guaranteed ROI or guaranteed model accuracy.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {mlFaqs.map((f) => {
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
