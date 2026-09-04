"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  generativeAiDevelopmentSeo,
  generativeAiHero,
  whatIsGenerativeAi,
  generativeAiServices,
  customGenerativeAi,
  llmApplicationDevelopment,
  ragDevelopment,
  aiAgentDevelopment,
  aiCopilotDevelopment,
  aiKnowledgeAssistants,
  aiDocumentIntelligence,
  semanticSearch,
  vectorDatabasesEmbeddings,
  promptEngineering,
  llmModelStrategy,
  fineTuningVsRag,
  generativeAiAutomation,
  enterpriseGenerativeAi,
  generativeAiExistingSoftware,
  generativeAiSecurity,
  aiGuardrails,
  llmEvaluation,
  generativeAiProcess,
  generativeAiMvp,
  industryUseCases,
  usaSection,
  canadaSection,
  generativeAiCost,
  generativeAiTimeline,
  technologyStack,
  generativeAiArchitecture,
  whyChooseRunner,
  generativeAiFaqs,
  finalCta,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
} from "@/data/generative-ai-development-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${generativeAiDevelopmentSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: generativeAiDevelopmentSeo.h1, description: generativeAiDevelopmentSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "Generative AI Development",
        name: "Generative AI Development Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: generativeAiDevelopmentSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Generative AI Development Services",
          itemListElement: generativeAiServices.map((s) => ({
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
          { "@type": "ListItem", position: 4, name: "Generative AI Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: generativeAiFaqs.map((f) => ({
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

function ContentSection({ id, title, children, alt = false, wide = false }: { id?: string; title: string; children: React.ReactNode; alt?: boolean; wide?: boolean }) {
  return (
    <section id={id} className={alt ? "bg-slate-50 py-20" : "py-20"}>
      <div className={`mx-auto px-6 ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        <h2 id={id ? `${id}-heading` : undefined} className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function GenerativeAiDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(generativeAiFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">Generative AI Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Sparkles className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {generativeAiDevelopmentSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{generativeAiHero.subheading}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{generativeAiHero.valueProposition}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {generativeAiHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {generativeAiHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1676299255476-40c8c9a8a8a8?w=1200&auto=format&fit=crop&q=80"
                  alt="Generative AI development services including LLM applications, RAG, and AI agents"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is Generative AI */}
        <ContentSection id="what-is" title="What Is Generative AI Development?">
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsGenerativeAi.definition}</p>
          <p className="mt-6 text-sm font-semibold text-[#0b1437]">Building a genuinely useful generative AI application involves several distinct technical components:</p>
          <BulletList items={whatIsGenerativeAi.components} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{whatIsGenerativeAi.closing}</p>
        </ContentSection>

        {/* Services */}
        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Generative AI Development Services</h2>
            <div className="mt-10 space-y-6">
              {generativeAiServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Generative AI */}
        <ContentSection id="custom" title={customGenerativeAi.title}>
          <BulletList items={customGenerativeAi.steps} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{customGenerativeAi.closing}</p>
        </ContentSection>

        {/* LLM Application Development */}
        <ContentSection id="llm-apps" title={llmApplicationDevelopment.title} alt>
          <p className="mt-4 text-sm font-semibold text-[#0b1437]">Large language models can power a range of application types:</p>
          <BulletList items={llmApplicationDevelopment.applicationTypes} />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">LLMs can be integrated into:</h3>
          <BulletList items={llmApplicationDevelopment.integrationTargets} check />
        </ContentSection>

        {/* RAG Development - detailed */}
        <ContentSection id="rag" title={ragDevelopment.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{ragDevelopment.definition}</p>
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">The RAG pipeline, technically:</h3>
          <ol className="mt-4 space-y-2">
            {ragDevelopment.pipeline.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{ragDevelopment.whyRag}</p>
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Common use cases:</h3>
          <BulletList items={ragDevelopment.useCases} check />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Limitations worth understanding upfront:</h3>
          <BulletList items={ragDevelopment.limitations} />
        </ContentSection>

        {/* AI Agents & Copilots */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiAgentDevelopment.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiAgentDevelopment.intro}</p>
              <BulletList items={aiAgentDevelopment.capabilities} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Technical components:</h3>
              <BulletList items={aiAgentDevelopment.technicalComponents} />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Example applications:</h3>
              <BulletList items={aiAgentDevelopment.examples} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiAgentDevelopment.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiCopilotDevelopment.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiCopilotDevelopment.intro}</p>
              <BulletList items={aiCopilotDevelopment.types} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiCopilotDevelopment.closing}</p>
            </div>
          </div>
        </section>

        {/* Knowledge Assistants & Document Intelligence */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiKnowledgeAssistants.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiKnowledgeAssistants.intro}</p>
              <BulletList items={aiKnowledgeAssistants.contentTypes} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Technical and governance considerations:</h3>
              <BulletList items={aiKnowledgeAssistants.considerations} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiKnowledgeAssistants.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiDocumentIntelligence.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiDocumentIntelligence.intro}</p>
              <BulletList items={aiDocumentIntelligence.useCases} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Technical approach:</h3>
              <BulletList items={aiDocumentIntelligence.approach} />
              <p className="mt-6 text-sm text-slate-600">{aiDocumentIntelligence.disclaimer}</p>
            </div>
          </div>
        </section>

        {/* Semantic Search */}
        <ContentSection id="semantic-search" title={semanticSearch.title} alt wide>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{semanticSearch.intro}</p>
          <BulletList items={semanticSearch.techniques} />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Traditional keyword search vs. semantic search:</h3>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-[#0f1a4e] text-left text-white">
                  <th className="p-4 font-bold"></th>
                  <th className="p-4 font-bold">Traditional Keyword Search</th>
                  <th className="p-4 font-bold">Semantic Search</th>
                </tr>
              </thead>
              <tbody>
                {semanticSearch.comparisonRows.map((row, i) => (
                  <tr key={row.factor} className={i % 2 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="p-4 font-semibold text-[#0b1437]">{row.factor}</td>
                    <td className="p-4 text-slate-600">{row.keyword}</td>
                    <td className="p-4 text-slate-600">{row.semantic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>Practical business use cases:</strong> {semanticSearch.useCases}</p>
        </ContentSection>

        {/* Vector DBs, Prompt Engineering, Model Strategy */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{vectorDatabasesEmbeddings.title}</h2>
              <h3 className="mt-6 text-xl font-bold text-[#0b1437]">What are embeddings?</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{vectorDatabasesEmbeddings.embeddingsDef}</p>
              <h3 className="mt-6 text-xl font-bold text-[#0b1437]">What are vector databases?</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{vectorDatabasesEmbeddings.vectorDbDef}</p>
              <h3 className="mt-6 text-xl font-bold text-[#0b1437]">Why they&apos;re useful:</h3>
              <BulletList items={vectorDatabasesEmbeddings.uses} check />
              <p className="mt-6 text-sm text-slate-600">{vectorDatabasesEmbeddings.technologies}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{promptEngineering.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{promptEngineering.intro}</p>
              <BulletList items={promptEngineering.techniques} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{promptEngineering.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{llmModelStrategy.title}</h2>
              <BulletList items={llmModelStrategy.approaches} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Selection depends on:</h3>
              <BulletList items={llmModelStrategy.selectionFactors} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{llmModelStrategy.closing}</p>
            </div>
          </div>
        </section>

        {/* Fine-Tuning vs RAG */}
        <ContentSection id="rag-vs-finetuning" title={fineTuningVsRag.title} alt wide>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{fineTuningVsRag.intro}</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-[#0f1a4e] text-left text-white">
                  <th className="p-4 font-bold"></th>
                  <th className="p-4 font-bold">RAG</th>
                  <th className="p-4 font-bold">Fine-Tuning</th>
                </tr>
              </thead>
              <tbody>
                {fineTuningVsRag.rows.map((row, i) => (
                  <tr key={row.factor} className={i % 2 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="p-4 font-semibold text-[#0b1437]">{row.factor}</td>
                    <td className="p-4 text-slate-600">{row.rag}</td>
                    <td className="p-4 text-slate-600">{row.fineTuning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{fineTuningVsRag.ragNote}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{fineTuningVsRag.fineTuningNote}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{fineTuningVsRag.closing}</p>
        </ContentSection>

        {/* Automation & Enterprise */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{generativeAiAutomation.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{generativeAiAutomation.intro}</p>
              <BulletList items={generativeAiAutomation.useCases} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{generativeAiAutomation.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{enterpriseGenerativeAi.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{enterpriseGenerativeAi.intro}</p>
              <BulletList items={enterpriseGenerativeAi.capabilities} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Enterprise-specific requirements:</h3>
              <BulletList items={enterpriseGenerativeAi.requirements} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{enterpriseGenerativeAi.closing}</p>
            </div>
          </div>
        </section>

        {/* Existing Software Integration */}
        <ContentSection id="integration" title={generativeAiExistingSoftware.title} alt>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{generativeAiExistingSoftware.intro}</p>
          <BulletList items={generativeAiExistingSoftware.systems} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">
            {generativeAiExistingSoftware.saasLink.before}
            <Link href={generativeAiExistingSoftware.saasLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{generativeAiExistingSoftware.saasLink.text}</Link>
            {generativeAiExistingSoftware.saasLink.after}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{generativeAiExistingSoftware.technical}</p>
        </ContentSection>

        {/* Security, Guardrails, Evaluation */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{generativeAiSecurity.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{generativeAiSecurity.intro}</p>
              <BulletList items={generativeAiSecurity.standard} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Generative AI-specific threats:</h3>
              <BulletList items={generativeAiSecurity.genAiThreats} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{generativeAiSecurity.guardrails}</p>
              <p className="mt-4 text-sm text-slate-600">{generativeAiSecurity.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiGuardrails.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiGuardrails.intro}</p>
              <BulletList items={aiGuardrails.mechanisms} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiGuardrails.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{llmEvaluation.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{llmEvaluation.intro}</p>
              <BulletList items={llmEvaluation.criteria} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Evaluation approach:</h3>
              <BulletList items={llmEvaluation.approach} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{llmEvaluation.closing}</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-extrabold text-[#0b1437] md:text-4xl">Generative AI Development Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-slate-600">Each phase produces a clear deliverable — generative AI systems typically need more iteration after initial launch than traditional software.</p>
            <div className="relative mt-14 overflow-x-auto pb-4">
              <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-4 xl:grid-cols-8">
                {generativeAiProcess.map(({ icon: Icon, title, desc }, i) => (
                  <div key={title} className="w-44 shrink-0 text-center lg:w-auto">
                    <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md" style={{ backgroundColor: NAVY }}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-[#0f1a4e]">Step {i + 1}</p>
                    <h3 className="mt-1 text-xs font-bold text-[#0b1437]">{title}</h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MVP, Industries, Geo, Cost, Timeline, Tech, Architecture */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{generativeAiMvp.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{generativeAiMvp.intro}</p>
              <BulletList items={generativeAiMvp.points} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{generativeAiMvp.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Generative AI Use Cases by Industry</h2>
              <p className="mt-4 text-sm text-slate-500">Illustrative use cases based on common generative AI application patterns — not claims of completed projects.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industryUseCases.map((ind) => (
                  <div key={ind.industry} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
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
            <div className="max-w-3xl space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{generativeAiCost.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How much does Generative AI development cost?</strong> {generativeAiCost.intro}</p>
                <BulletList items={generativeAiCost.drivers} />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{generativeAiCost.closing}</p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{generativeAiTimeline.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{generativeAiTimeline.intro}</p>
                <BulletList items={generativeAiTimeline.factors} />
                <h3 className="mt-6 text-xl font-bold text-[#0b1437]">General project stages:</h3>
                <BulletList items={generativeAiTimeline.stages} check />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{generativeAiTimeline.closing}</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Technology Stack</h2>
              <p className="mt-4 text-[15px] text-slate-600">Technology selection is scoped to what a specific generative AI project actually requires.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {technologyStack.map((g) => (
                  <div key={g.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{g.label}</h3>
                    <p className="mt-2 text-sm text-slate-700">{g.items}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{generativeAiArchitecture.title}</h2>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs leading-relaxed text-slate-700">
                {generativeAiArchitecture.layers[0].split(" → ").map((layer, i, arr) => (
                  <span key={layer}>
                    {layer}
                    {i < arr.length - 1 && <span className="mx-1 text-[#0f1a4e]">→</span>}
                  </span>
                ))}
              </div>
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">This architecture varies by use case:</h3>
              <BulletList items={generativeAiArchitecture.factors} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{generativeAiArchitecture.closing}</p>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-slate-50 py-20">
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
              We don&apos;t claim to be an official OpenAI partner, official Google partner, or claim guaranteed ROI, guaranteed accuracy, or guaranteed business results — these outcomes depend on factors specific to each business, its data, and its implementation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {generativeAiFaqs.map((f) => {
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
