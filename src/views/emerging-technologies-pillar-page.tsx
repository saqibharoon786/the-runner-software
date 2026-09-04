"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  emergingTechnologiesSeo,
  pillarHero,
  whatAreEmergingTech,
  pillarServices,
  aiDevelopmentSection,
  generativeAiSection,
  aiChatbotSection,
  machineLearningSection,
  saasSection,
  aiSaasSection,
  industryUseCases,
  businessBenefits,
  pillarProcess,
  aiSecuritySection,
  responsibleAiSection,
  technologyStack,
  aiIntegrationSection,
  startupSection,
  enterpriseSection,
  usaSection,
  canadaSection,
  whyChooseRunner,
  pillarFaqs,
  finalCta,
} from "@/data/emerging-technologies-pillar-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${emergingTechnologiesSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: emergingTechnologiesSeo.h1,
        description: emergingTechnologiesSeo.description,
        url: pageUrl,
      },
      {
        "@type": "Service",
        serviceType: "Emerging Technology Solutions",
        name: "Emerging Technology Solutions",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
        ],
        description:
          "Emerging technology development services including AI development, generative AI development, AI chatbot development, machine learning solutions, and SaaS development for businesses in the USA and Canada.",
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Emerging Technology Services",
          itemListElement: pillarServices.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, url: `${baseUrl}${s.href}` },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: "Emerging Technologies", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: pillarFaqs.map((f) => ({
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

export default function EmergingTechnologiesPillarPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(pillarFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">Emerging Technologies</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Sparkles className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {emergingTechnologiesSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{pillarHero.subheading}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{pillarHero.supporting}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{pillarHero.connectedNote}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#our-services" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {pillarHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {pillarHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop"
                  alt="Emerging technology solutions including AI, machine learning, and SaaS development"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are Emerging Technology Solutions */}
        <section className="py-20" aria-labelledby="definition-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="definition-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">What Are Emerging Technology Solutions?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatAreEmergingTech.definition} These technologies can help organizations:</p>
            <ul className="mt-6 space-y-3">
              {whatAreEmergingTech.capabilities.map(({ bold, text }) => (
                <li key={bold} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span><strong className="text-[#0b1437]">{bold}</strong> {text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">{whatAreEmergingTech.disclaimer}</p>
          </div>
        </section>

        {/* Emerging Technology Services */}
        <section id="our-services" className="bg-slate-50 py-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="services-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Emerging Technology Services</h2>
            <p className="mt-4 text-[15px] text-slate-600">
              Our emerging technology work spans five connected service areas — each addressing a distinct technical need, but frequently combined within a single project.
            </p>
            <div className="mt-10 space-y-6">
              {pillarServices.map(({ icon: Icon, letter, title, desc, href, cta }, i) => (
                <MotionCard key={title} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white" style={{ backgroundColor: NAVY }}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">{letter}. {title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                      <Link href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f1a4e] hover:gap-2 transition-all">
                        {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* AI Development */}
        <section className="py-20" aria-labelledby="ai-dev-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="ai-dev-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiDevelopmentSection.title}</h2>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">What is AI development?</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{aiDevelopmentSection.definition}</p>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">AI development work typically includes:</p>
            <BulletList items={aiDevelopmentSection.includes} />
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">When should a business consider AI development?</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{aiDevelopmentSection.whenToConsider}</p>
          </div>
        </section>

        {/* Generative AI */}
        <section className="bg-slate-50 py-20" aria-labelledby="gen-ai-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="gen-ai-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{generativeAiSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{generativeAiSection.definition}</p>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">{generativeAiSection.intro}</p>
            <BulletList items={generativeAiSection.concepts} />
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Building a successful generative AI application requires deliberate attention to:</h3>
            <BulletList items={generativeAiSection.successFactors} check />
            <p className="mt-8 text-sm leading-relaxed text-slate-600">{generativeAiSection.disclaimer}</p>
          </div>
        </section>

        {/* AI Chatbots */}
        <section className="py-20" aria-labelledby="chatbot-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="chatbot-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiChatbotSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiChatbotSection.intro}</p>
            <BulletList items={aiChatbotSection.useCases} check />
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">{aiChatbotSection.comparisonTitle}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{aiChatbotSection.comparison}</p>
          </div>
        </section>

        {/* Machine Learning */}
        <section className="bg-slate-50 py-20" aria-labelledby="ml-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="ml-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{machineLearningSection.title}</h2>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">What is machine learning?</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{machineLearningSection.definition}</p>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Core machine learning approaches:</h3>
            <BulletList items={machineLearningSection.approaches} />
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">The machine learning lifecycle:</h3>
            <ol className="mt-4 space-y-3">
              {machineLearningSection.lifecycle.map(({ step, title, desc }) => (
                <li key={step} className="flex gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{step}</span>
                  <span><strong className="text-[#0b1437]">{title}</strong> — {desc}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{machineLearningSection.dataNote}</p>
          </div>
        </section>

        {/* SaaS Development */}
        <section className="py-20" aria-labelledby="saas-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="saas-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{saasSection.title}</h2>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">What is SaaS development?</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{saasSection.definition}</p>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">Building a SaaS product involves specific architectural requirements:</p>
            <BulletList items={saasSection.requirements} check />
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">How AI and SaaS work together</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{saasSection.aiNote}</p>
          </div>
        </section>

        {/* AI + SaaS */}
        <section className="bg-slate-50 py-20" aria-labelledby="ai-saas-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="ai-saas-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiSaasSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiSaasSection.intro}</p>
            <BulletList items={aiSaasSection.patterns} check />
            <p className="mt-8 rounded-xl border border-[#0f1a4e]/20 bg-white p-5 text-sm leading-relaxed text-slate-700">
              <strong className="text-[#0b1437]">The key principle:</strong> {aiSaasSection.principle}
            </p>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="py-20" aria-labelledby="industries-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="industries-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Emerging Technology Use Cases by Industry</h2>
            <p className="mt-4 text-sm text-slate-500">Illustrative use cases based on common patterns — not claims of completed projects or specific outcomes.</p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industryUseCases.map((ind) => (
                <div key={ind.industry} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-[#0b1437]">{ind.industry}</h3>
                  <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="bg-slate-50 py-20" aria-labelledby="benefits-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="benefits-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Business Benefits of Emerging Technology Adoption</h2>
            <p className="mt-4 text-[15px] text-slate-600">Actual outcomes depend heavily on implementation quality and fit to the specific business problem.</p>
            <BulletList items={businessBenefits} check />
            <p className="mt-8 text-sm leading-relaxed text-slate-500">We don&apos;t make guaranteed financial claims — specific ROI, cost savings, or revenue figures depend on your business, your data, and how well the solution is implemented.</p>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="process-heading" className="text-center text-3xl font-extrabold text-[#0b1437] md:text-4xl">Emerging Technology Development Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-slate-600">Each phase produces a clear deliverable, reducing the risk that an emerging technology project turns into an open-ended experiment.</p>
            <div className="relative mt-14 overflow-x-auto pb-4">
              <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-[#0f1a4e]/20 lg:block" aria-hidden="true" />
              <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-4 xl:grid-cols-8">
                {pillarProcess.map(({ icon: Icon, title, desc }, i) => (
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

        {/* AI Security */}
        <section className="bg-slate-50 py-20" aria-labelledby="security-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="security-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiSecuritySection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiSecuritySection.intro}</p>
            <BulletList items={aiSecuritySection.items} check />
            <p className="mt-8 text-sm leading-relaxed text-slate-600">{aiSecuritySection.disclaimer}</p>
          </div>
        </section>

        {/* Responsible AI */}
        <section className="py-20" aria-labelledby="responsible-ai-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="responsible-ai-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{responsibleAiSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{responsibleAiSection.intro}</p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {responsibleAiSection.practices.map(({ title, desc }) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#0b1437]">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{responsibleAiSection.closing}</p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-slate-50 py-20" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="tech-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Technology Stack</h2>
            <p className="mt-4 text-[15px] text-slate-600">Technology selection is scoped to what the specific project actually requires, not a fixed template applied regardless of fit.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {technologyStack.map((g) => (
                <div key={g.label} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{g.label}</h3>
                  <p className="mt-2 text-sm text-slate-700">{g.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Integration */}
        <section className="py-20" aria-labelledby="integration-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="integration-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiIntegrationSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiIntegrationSection.intro}</p>
            <BulletList items={aiIntegrationSection.systems} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{aiIntegrationSection.technicalNote}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">
              For businesses whose emerging technology needs are part of a broader web presence, our{" "}
              <Link href={aiIntegrationSection.webDevLink} className="font-semibold text-[#0f1a4e] hover:underline">web development</Link> and{" "}
              <Link href={aiIntegrationSection.mobileDevLink} className="font-semibold text-[#0f1a4e] hover:underline">mobile app development</Link> teams can support the surrounding application these capabilities get embedded into.
            </p>
          </div>
        </section>

        {/* Startups & Enterprise */}
        <section className="bg-slate-50 py-20" aria-labelledby="startups-heading">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 id="startups-heading" className="text-2xl font-extrabold text-[#0b1437] md:text-3xl">{startupSection.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{startupSection.intro}</p>
                <BulletList items={startupSection.points} check />
                <p className="mt-6 text-sm leading-relaxed text-slate-600">{startupSection.closing}</p>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0b1437] md:text-3xl">{enterpriseSection.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{enterpriseSection.intro}</p>
                <BulletList items={enterpriseSection.capabilities} check />
                <p className="mt-6 text-sm leading-relaxed text-slate-600">{enterpriseSection.challenges}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  For enterprise initiatives that extend beyond a single AI or SaaS component, our{" "}
                  <Link href={enterpriseSection.productDevLink} className="font-semibold text-[#0f1a4e] hover:underline">software product development</Link> team can support the broader technology roadmap.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USA & Canada */}
        <section className="py-20" aria-labelledby="geo-heading">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 id="geo-heading" className="text-xl font-extrabold text-[#0b1437]">{usaSection.title}</h2>
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
              We don&apos;t claim official OpenAI, Google, or other vendor partnerships, guaranteed ROI, guaranteed AI accuracy, or guaranteed rankings — these outcomes depend on factors specific to each business and implementation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {pillarFaqs.map((f) => {
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
                          <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                            <p>{f.a}</p>
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
