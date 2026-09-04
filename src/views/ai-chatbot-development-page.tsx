"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Bot } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  aiChatbotSeo,
  aiChatbotHero,
  whatIsAiChatbot,
  chatbotServices,
  customChatbotSection,
  conversationalAiSection,
  customerSupportSection,
  salesChatbotSection,
  leadGenSection,
  ragSection,
  knowledgeBaseSection,
  virtualAssistantSection,
  websiteChatbotSection,
  ecommerceSection,
  saasChatbotSection,
  enterpriseSection,
  omnichannelSection,
  crmIntegrationSection,
  apiIntegrationSection,
  humanHandoffSection,
  memoryContextSection,
  securitySection,
  guardrailsSection,
  analyticsSection,
  architectureSection,
  techStackSection,
  developmentProcess,
  mvpSection,
  industriesSection,
  usaSection,
  canadaSection,
  costSection,
  timelineSection,
  whyChooseRunner,
  aiChatbotFaqs,
  finalCta,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
} from "@/data/ai-chatbot-development-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${aiChatbotSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: aiChatbotSeo.h1, description: aiChatbotSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "AI Chatbot Development",
        name: "AI Chatbot Development Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: aiChatbotSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Chatbot Development Services",
          itemListElement: chatbotServices.slice(0, 10).map((s) => ({
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
          { "@type": "ListItem", position: 4, name: "AI Chatbot Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: aiChatbotFaqs.map((f) => ({
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

function SectionBlock({ title, children, alt = false }: { title: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <div className={alt ? "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" : ""}>
      <h2 className="text-2xl font-extrabold text-[#0b1437] md:text-3xl">{title}</h2>
      {children}
    </div>
  );
}

export default function AiChatbotDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(aiChatbotFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">AI Chatbot Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Bot className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {aiChatbotSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{aiChatbotHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{aiChatbotHero.summary}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {aiChatbotHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {aiChatbotHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80"
                  alt="AI chatbot development services for customer support and conversational AI"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1535378620166-27370829422?w=1200&auto=format&fit=crop"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is AI Chatbot Development */}
        <section id="what-is-ai-chatbot" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatIsAiChatbot.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsAiChatbot.definition}</p>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">A production AI chatbot typically involves several connected components:</p>
            <BulletList items={whatIsAiChatbot.components} check />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsAiChatbot.comparisonIntro}</p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    {whatIsAiChatbot.comparison.headers.map((h) => (
                      <th key={h} className="px-4 py-3 font-bold text-[#0b1437]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {whatIsAiChatbot.comparison.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 font-semibold text-[#0b1437]">{row[0]}</td>
                      <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                      <td className="px-4 py-3 text-slate-600">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsAiChatbot.closing}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {whatIsAiChatbot.aiDevLink.before}
              <Link href={whatIsAiChatbot.aiDevLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{whatIsAiChatbot.aiDevLink.text}</Link>
              {whatIsAiChatbot.aiDevLink.after}
              <Link href={whatIsAiChatbot.genAiLink.href} className="font-semibold text-[#0f1a4e] hover:underline">{whatIsAiChatbot.genAiLink.text}</Link>
              {whatIsAiChatbot.genAiLink.after}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">AI Chatbot Development Services</h2>
            <p className="mt-4 text-sm text-slate-600">End-to-end AI chatbot development services, from conversation design and knowledge integration through deployment, security, and ongoing optimization.</p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {chatbotServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{s.desc}</p>
                  {s.saasLink && <ContextualLink {...s.saasLink} />}
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Custom + Conversational AI */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={customChatbotSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{customChatbotSection.intro}</p>
              <BulletList items={customChatbotSection.considerations} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{customChatbotSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={conversationalAiSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{conversationalAiSection.intro}</p>
              <BulletList items={conversationalAiSection.components} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{conversationalAiSection.closing}</p>
              <ContextualLink {...conversationalAiSection.mlLink} />
            </SectionBlock>
          </div>
        </section>

        {/* Support, Sales, Lead Gen */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            {[customerSupportSection, salesChatbotSection, leadGenSection].map((sec) => (
              <SectionBlock key={sec.title} title={sec.title}>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{sec.intro}</p>
                <BulletList items={sec.capabilities} check />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{sec.closing}</p>
              </SectionBlock>
            ))}
          </div>
        </section>

        {/* RAG + Knowledge Base */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={ragSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{ragSection.intro}</p>
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">How RAG works:</p>
              <ol className="mt-4 space-y-2">
                {ragSection.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{ragSection.useCases}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{ragSection.value}</p>
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">RAG limitations are worth being upfront about:</p>
              <BulletList items={ragSection.limitations} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{ragSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={knowledgeBaseSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{knowledgeBaseSection.intro}</p>
              <BulletList items={knowledgeBaseSection.considerations} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{knowledgeBaseSection.closing}</p>
            </SectionBlock>
          </div>
        </section>

        {/* Virtual Assistant, Website, Ecommerce, SaaS */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={virtualAssistantSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{virtualAssistantSection.body}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{virtualAssistantSection.distinction}</p>
            </SectionBlock>
            <SectionBlock title={websiteChatbotSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{websiteChatbotSection.intro}</p>
              <BulletList items={websiteChatbotSection.considerations} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{websiteChatbotSection.closing}</p>
              <ContextualLink {...websiteChatbotSection.webDevLink} />
            </SectionBlock>
            <SectionBlock title={ecommerceSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{ecommerceSection.intro}</p>
              <BulletList items={ecommerceSection.capabilities} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{ecommerceSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={saasChatbotSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{saasChatbotSection.intro}</p>
              <BulletList items={saasChatbotSection.capabilities} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{saasChatbotSection.closing}</p>
              <ContextualLink {...saasChatbotSection.saasLink} />
            </SectionBlock>
          </div>
        </section>

        {/* Enterprise, Omnichannel, CRM, API */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={enterpriseSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{enterpriseSection.intro}</p>
              <BulletList items={enterpriseSection.useCases} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">Enterprise deployments carry additional requirements:</p>
              <BulletList items={enterpriseSection.requirements} />
            </SectionBlock>
            <SectionBlock title={omnichannelSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{omnichannelSection.intro}</p>
              <BulletList items={omnichannelSection.channels} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{omnichannelSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={crmIntegrationSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{crmIntegrationSection.intro}</p>
              <BulletList items={crmIntegrationSection.capabilities} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{crmIntegrationSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={apiIntegrationSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{apiIntegrationSection.intro}</p>
              <BulletList items={apiIntegrationSection.patterns} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{apiIntegrationSection.closing}</p>
            </SectionBlock>
          </div>
        </section>

        {/* Handoff, Memory, Security, Guardrails, Analytics */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={humanHandoffSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{humanHandoffSection.intro}</p>
              <BulletList items={humanHandoffSection.triggers} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{humanHandoffSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={memoryContextSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{memoryContextSection.intro}</p>
              <BulletList items={memoryContextSection.aspects} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{memoryContextSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={securitySection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{securitySection.intro}</p>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Standard security practices include:</p>
              <BulletList items={securitySection.standardPractices} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">AI-specific risks that require particular attention:</p>
              <BulletList items={securitySection.aiRisks} />
              <p className="mt-6 text-sm text-slate-600">{securitySection.disclaimer}</p>
            </SectionBlock>
            <SectionBlock title={guardrailsSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{guardrailsSection.intro}</p>
              <BulletList items={guardrailsSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{guardrailsSection.closing}</p>
            </SectionBlock>
            <SectionBlock title={analyticsSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{analyticsSection.intro}</p>
              <BulletList items={analyticsSection.metrics} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{analyticsSection.closing}</p>
            </SectionBlock>
          </div>
        </section>

        {/* Architecture + Tech Stack */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <SectionBlock title={architectureSection.title}>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{architectureSection.intro}</p>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs leading-relaxed text-slate-700">
                {architectureSection.pipeline.split(" → ").map((part, i, arr) => (
                  <span key={part}>
                    {part}
                    {i < arr.length - 1 && <span className="mx-1 text-[#0f1a4e]">→</span>}
                  </span>
                ))}
              </div>
              <BulletList items={architectureSection.layers} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{architectureSection.closing}</p>
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
        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">AI Chatbot Development Process</h2>
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

        {/* MVP + Industries + Cost + Timeline + Geo */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{mvpSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mvpSection.intro}</p>
              <BulletList items={mvpSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{mvpSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">AI Chatbot Development for Industries</h2>
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
        <section className="bg-slate-50 py-20">
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
              We are not an official OpenAI or Google partner, and we don&apos;t promise guaranteed ROI, guaranteed conversion increases, or guaranteed chatbot accuracy.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {aiChatbotFaqs.map((f) => {
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
