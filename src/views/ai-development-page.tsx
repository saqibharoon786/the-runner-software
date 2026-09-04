"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Bot } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  aiDevelopmentSeo,
  aiDevelopmentHero,
  whatIsAiDevelopment,
  aiDevelopmentServices,
  customAiDevelopment,
  enterpriseAiDevelopment,
  aiApplicationDevelopment,
  aiAutomationServices,
  machineLearningDevelopment,
  computerVisionDevelopment,
  nlpDevelopment,
  predictiveAnalytics,
  recommendationSystems,
  aiExistingSoftware,
  aiVsGenerativeAi,
  aiChatbotSection,
  technologyStack,
  aiArchitecture,
  aiDataEngineering,
  aiSecurity,
  responsibleAi,
  aiModelDevelopment,
  aiDevelopmentProcess,
  aiMvpDevelopment,
  industryUseCases,
  usaSection,
  canadaSection,
  aiDevelopmentCost,
  aiDevelopmentTimeline,
  whyChooseRunner,
  aiDevelopmentFaqs,
  finalCta,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
} from "@/data/ai-development-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${aiDevelopmentSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: aiDevelopmentSeo.h1, description: aiDevelopmentSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "AI Development",
        name: "AI Development Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: aiDevelopmentSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Development Services",
          itemListElement: aiDevelopmentServices.map((s) => ({
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
          { "@type": "ListItem", position: 4, name: "AI Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: aiDevelopmentFaqs.map((f) => ({
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
    <section id={id} className={alt ? "bg-slate-50 py-20" : "py-20"} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="mx-auto max-w-3xl px-6">
        <h2 id={id ? `${id}-heading` : undefined} className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function AiDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(aiDevelopmentFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">AI Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Bot className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {aiDevelopmentSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{aiDevelopmentHero.subheading}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{aiDevelopmentHero.valueProposition}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {aiDevelopmentHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {aiDevelopmentHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop"
                  alt="AI development services including machine learning, computer vision, and NLP"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is AI Development */}
        <ContentSection id="what-is" title="What Is AI Development?">
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsAiDevelopment.definition}</p>
          <p className="mt-6 text-sm font-semibold text-[#0b1437]">AI development spans several distinct technical areas, each suited to different kinds of business problems:</p>
          <BulletList items={whatIsAiDevelopment.areas} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700"><strong className="text-[#0b1437]">It&apos;s important to understand that AI development is broader than generative AI.</strong> {whatIsAiDevelopment.broaderThanGenAi}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            {whatIsAiDevelopment.generativeAiLink.before}
            <Link href={whatIsAiDevelopment.generativeAiLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{whatIsAiDevelopment.generativeAiLink.text}</Link>
            {whatIsAiDevelopment.generativeAiLink.after}
          </p>
        </ContentSection>

        {/* AI Development Services */}
        <section id="services" className="bg-slate-50 py-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="services-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">AI Development Services</h2>
            <div className="mt-10 space-y-6">
              {aiDevelopmentServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Custom AI Development */}
        <ContentSection id="custom-ai" title={customAiDevelopment.title}>
          <p className="mt-4 text-sm font-semibold text-[#0b1437]">Custom AI development follows a structured path from business problem to production system:</p>
          <BulletList items={customAiDevelopment.steps} check />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Why custom AI development, rather than an off-the-shelf tool?</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{customAiDevelopment.whyCustom}</p>
        </ContentSection>

        {/* Enterprise AI */}
        <ContentSection id="enterprise-ai" title={enterpriseAiDevelopment.title} alt>
          <BulletList items={enterpriseAiDevelopment.capabilities} check />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Enterprise-specific requirements</h3>
          <BulletList items={enterpriseAiDevelopment.requirements} />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{enterpriseAiDevelopment.closing}</p>
        </ContentSection>

        {/* AI Application Development */}
        <ContentSection id="ai-apps" title={aiApplicationDevelopment.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiApplicationDevelopment.intro}</p>
          <BulletList items={aiApplicationDevelopment.applications} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiApplicationDevelopment.buildingBlocks}</p>
        </ContentSection>

        {/* AI Automation */}
        <ContentSection id="ai-automation" title={aiAutomationServices.title} alt>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiAutomationServices.intro}</p>
          <BulletList items={aiAutomationServices.useCases} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiAutomationServices.closing}</p>
        </ContentSection>

        {/* Machine Learning */}
        <ContentSection id="ml" title={machineLearningDevelopment.title}>
          <p className="mt-4 text-sm font-semibold text-[#0b1437]">Core approaches include:</p>
          <BulletList items={machineLearningDevelopment.approaches} />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">The machine learning lifecycle:</h3>
          <ol className="mt-4 space-y-3">
            {machineLearningDevelopment.lifecycle.map(({ step, title, desc }) => (
              <li key={step} className="flex gap-3 text-sm text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{step}</span>
                <span><strong className="text-[#0b1437]">{title}</strong> — {desc}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{machineLearningDevelopment.dataNote}</p>
        </ContentSection>

        {/* Computer Vision */}
        <ContentSection id="computer-vision" title={computerVisionDevelopment.title} alt>
          <BulletList items={computerVisionDevelopment.techniques} />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Practical business examples:</h3>
          <BulletList items={computerVisionDevelopment.examples} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{computerVisionDevelopment.closing}</p>
        </ContentSection>

        {/* NLP */}
        <ContentSection id="nlp" title={nlpDevelopment.title}>
          <BulletList items={nlpDevelopment.techniques} check />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Traditional NLP vs. generative AI</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{nlpDevelopment.comparison}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            {nlpDevelopment.generativeAiLink.before}
            <Link href={nlpDevelopment.generativeAiLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{nlpDevelopment.generativeAiLink.text}</Link>
            {nlpDevelopment.generativeAiLink.after}
          </p>
        </ContentSection>

        {/* Predictive Analytics & Recommendations */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{predictiveAnalytics.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{predictiveAnalytics.intro}</p>
              <BulletList items={predictiveAnalytics.useCases} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{predictiveAnalytics.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{recommendationSystems.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{recommendationSystems.intro}</p>
              <BulletList items={recommendationSystems.types} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{recommendationSystems.value}</p>
            </div>
          </div>
        </section>

        {/* AI + Existing Software */}
        <ContentSection id="integration" title={aiExistingSoftware.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiExistingSoftware.intro}</p>
          <BulletList items={aiExistingSoftware.systems} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiExistingSoftware.technical}</p>
        </ContentSection>

        {/* AI vs Generative AI Comparison */}
        <section className="bg-slate-50 py-20" aria-labelledby="comparison-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="comparison-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiVsGenerativeAi.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiVsGenerativeAi.intro}</p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-[#0f1a4e] text-left text-white">
                    <th className="p-4 font-bold"></th>
                    <th className="p-4 font-bold">AI Development (broader)</th>
                    <th className="p-4 font-bold">Generative AI (specific area)</th>
                  </tr>
                </thead>
                <tbody>
                  {aiVsGenerativeAi.rows.map((row, i) => (
                    <tr key={row.factor} className={i % 2 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="p-4 font-semibold text-[#0b1437]">{row.factor}</td>
                      <td className="p-4 text-slate-600">{row.aiDev}</td>
                      <td className="p-4 text-slate-600">{row.generativeAi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">
              {aiVsGenerativeAi.closing.split("Generative AI Development Services")[0]}
              <Link href={aiVsGenerativeAi.generativeAiLink} className="font-semibold text-[#0f1a4e] hover:underline">Generative AI Development Services</Link>
              {aiVsGenerativeAi.closing.split("Generative AI Development Services")[1]}
            </p>
          </div>
        </section>

        {/* AI Chatbot */}
        <ContentSection id="chatbots" title={aiChatbotSection.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiChatbotSection.intro}</p>
          <BulletList items={aiChatbotSection.useCases} check />
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiChatbotSection.closing}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            {aiChatbotSection.chatbotLink.before}
            <Link href={aiChatbotSection.chatbotLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{aiChatbotSection.chatbotLink.text}</Link>
            {aiChatbotSection.chatbotLink.after}
          </p>
        </ContentSection>

        {/* Tech Stack & Architecture */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">AI Development Technology Stack</h2>
              <p className="mt-4 text-[15px] text-slate-600">Technology selection is scoped to the specific project&apos;s requirements, not applied as a fixed template regardless of fit.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {technologyStack.map((g) => (
                  <div key={g.label} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{g.label}</h3>
                    <p className="mt-2 text-sm text-slate-700">{g.items}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiArchitecture.title}</h2>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">AI systems are built from several distinct architectural layers:</p>
              <BulletList items={aiArchitecture.layers} />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Architecture decisions change based on:</h3>
              <BulletList items={aiArchitecture.factors} check />
            </div>
          </div>
        </section>

        {/* Data Engineering, Security, Responsible AI */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiDataEngineering.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiDataEngineering.intro}</p>
              <BulletList items={aiDataEngineering.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiDataEngineering.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiSecurity.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiSecurity.intro}</p>
              <BulletList items={aiSecurity.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiSecurity.genAiNote}</p>
              <p className="mt-4 text-sm text-slate-600">{aiSecurity.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{responsibleAi.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{responsibleAi.intro}</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {responsibleAi.practices.map(({ title, desc }) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-[#0b1437]">{title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{responsibleAi.closing}</p>
            </div>
          </div>
        </section>

        {/* Model Development */}
        <ContentSection id="models" title={aiModelDevelopment.title} alt>
          <BulletList items={aiModelDevelopment.approaches} check />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">When each approach makes sense:</h3>
          <BulletList items={aiModelDevelopment.whenToUse} />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Trade-offs to weigh:</h3>
          <BulletList items={aiModelDevelopment.tradeoffs} />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiModelDevelopment.closing}</p>
        </ContentSection>

        {/* Process */}
        <section id="process" className="py-20" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="process-heading" className="text-center text-3xl font-extrabold text-[#0b1437] md:text-4xl">AI Development Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-slate-600">Each phase produces a clear deliverable, reducing the risk that an AI initiative turns into an open-ended experiment.</p>
            <div className="relative mt-14 overflow-x-auto pb-4">
              <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-4 xl:grid-cols-8">
                {aiDevelopmentProcess.map(({ icon: Icon, title, desc }, i) => (
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

        {/* MVP, Industries, Geo */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiMvpDevelopment.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiMvpDevelopment.intro}</p>
              <BulletList items={aiMvpDevelopment.points} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiMvpDevelopment.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">AI Development for Industries</h2>
              <p className="mt-4 text-sm text-slate-500">Illustrative use cases based on common AI application patterns — not claims of completed projects or guaranteed outcomes.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industryUseCases.map((ind) => (
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

        {/* Cost & Timeline */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiDevelopmentCost.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How much does AI development cost?</strong> {aiDevelopmentCost.intro}</p>
              <BulletList items={aiDevelopmentCost.drivers} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiDevelopmentCost.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiDevelopmentTimeline.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How long does AI development take?</strong> {aiDevelopmentTimeline.intro}</p>
              <BulletList items={aiDevelopmentTimeline.tiers} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiDevelopmentTimeline.factors}</p>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-slate-50 py-20" aria-labelledby="why-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="why-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions?</h2>
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
              We don&apos;t claim to be an official OpenAI partner, official Google partner, or claim guaranteed ROI, guaranteed AI accuracy, or guaranteed business results — these outcomes depend on factors specific to each business, its data, and its implementation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {aiDevelopmentFaqs.map((f) => {
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
        <section className="pb-20" aria-labelledby="final-cta-heading">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14 bg-gradient-to-br from-[#0f1a4e] to-[#0c1440]">
              <h2 id="final-cta-heading" className="text-3xl font-extrabold md:text-4xl">{finalCta.headline}</h2>
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
