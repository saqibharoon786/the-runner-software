"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Cloud } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  saasDevelopmentSeo,
  saasHero,
  whatIsSaas,
  saasServices,
  customSaasDevelopment,
  saasProductDevelopment,
  saasMvpDevelopment,
  multiTenantSaas,
  saasArchitecture,
  authSection,
  subscriptionSection,
  billingSection,
  apiSection,
  integrationsSection,
  cloudSection,
  scalabilitySection,
  saasSecurity,
  dataArchitecture,
  analyticsSection,
  adminDashboard,
  userDashboard,
  teamManagement,
  automationSection,
  aiIntegrationSection,
  mlIntegrationSection,
  uiUxSection,
  testingSection,
  devopsSection,
  monitoringSection,
  migrationSection,
  enterpriseSaas,
  industryUseCases,
  startupSection,
  enterpriseSection,
  usaSection,
  canadaSection,
  saasCost,
  saasTimeline,
  whyChooseRunner,
  saasFaqs,
  finalCta,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
} from "@/data/saas-development-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${saasDevelopmentSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: saasDevelopmentSeo.h1, description: saasDevelopmentSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "SaaS Development",
        name: "SaaS Development Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: saasDevelopmentSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SaaS Development Services",
          itemListElement: saasServices.map((s) => ({
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
          { "@type": "ListItem", position: 4, name: "SaaS Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: saasFaqs.map((f) => ({
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

function ContextualLink({ before, text, href, after }: { before: string; text: string; href: string; after: string }) {
  return (
    <p className="mt-6 text-[15px] leading-relaxed text-slate-700">
      {before}
      <Link href={href} className="font-semibold text-[#0f1a4e] hover:underline">{text}</Link>
      {after}
    </p>
  );
}

export default function SaasDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(saasFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">SaaS Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Cloud className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {saasDevelopmentSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{saasHero.subheading}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{saasHero.valueProposition}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {saasHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {saasHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"
                  alt="SaaS development services including multi-tenant architecture, subscription billing, and cloud platforms"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is SaaS */}
        <ContentSection id="what-is" title="What Is SaaS Development?">
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsSaas.definition}</p>
          <p className="mt-6 text-sm font-semibold text-[#0b1437]">A SaaS application involves several distinct technical and business components working together:</p>
          <BulletList items={whatIsSaas.components} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700"><strong>Traditional software vs. SaaS software:</strong> {whatIsSaas.traditionalVsSaas}</p>
        </ContentSection>

        {/* Services */}
        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">SaaS Development Services</h2>
            <div className="mt-10 space-y-6">
              {saasServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Custom SaaS Development */}
        <ContentSection id="custom" title={customSaasDevelopment.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">Custom SaaS products are built around the specific realities of your business, not a generic starting template:</p>
          <BulletList items={customSaasDevelopment.factors} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700"><strong>Why custom SaaS development may be appropriate:</strong> {customSaasDevelopment.closing}</p>
        </ContentSection>

        {/* SaaS Product Development */}
        <ContentSection id="product-development" title={saasProductDevelopment.title} alt>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">Building a SaaS product follows a structured path from idea to a live, iterating product:</p>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs leading-relaxed text-slate-700">
            {saasProductDevelopment.flow.split(" → ").map((stage, i, arr) => (
              <span key={stage}>
                {stage}
                {i < arr.length - 1 && <span className="mx-1 text-[#0f1a4e]">→</span>}
              </span>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {saasProductDevelopment.stages.map((stage) => (
              <div key={stage.title}>
                <h3 className="text-sm font-bold text-[#0b1437]">{stage.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{stage.desc}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Key considerations throughout:</h3>
          <BulletList items={saasProductDevelopment.considerations} check />
        </ContentSection>

        {/* SaaS MVP Development */}
        <ContentSection id="mvp" title={saasMvpDevelopment.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{saasMvpDevelopment.intro}</p>
          <BulletList items={saasMvpDevelopment.points} check />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Related concepts:</h3>
          <BulletList items={saasMvpDevelopment.related} />
        </ContentSection>

        {/* Multi-Tenant SaaS Development */}
        <ContentSection id="multi-tenant" title={multiTenantSaas.title} alt wide>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>What is multi-tenancy?</strong> {multiTenantSaas.definition}</p>
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Architectural approaches:</h3>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="bg-[#0f1a4e] text-left text-white">
                  <th className="p-4 font-bold">Approach</th>
                  <th className="p-4 font-bold">Description</th>
                  <th className="p-4 font-bold">Tenant Isolation</th>
                  <th className="p-4 font-bold">Customization</th>
                  <th className="p-4 font-bold">Cost Efficiency</th>
                  <th className="p-4 font-bold">Complexity</th>
                </tr>
              </thead>
              <tbody>
                {multiTenantSaas.rows.map((row, i) => (
                  <tr key={row.approach} className={i % 2 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="p-4 font-semibold text-[#0b1437]">{row.approach}</td>
                    <td className="p-4 text-slate-600">{row.desc}</td>
                    <td className="p-4 text-slate-600">{row.isolation}</td>
                    <td className="p-4 text-slate-600">{row.customization}</td>
                    <td className="p-4 text-slate-600">{row.cost}</td>
                    <td className="p-4 text-slate-600">{row.complexity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Key considerations:</h3>
          <BulletList items={multiTenantSaas.considerations} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{multiTenantSaas.closing}</p>
        </ContentSection>

        {/* SaaS Architecture */}
        <ContentSection id="architecture" title={saasArchitecture.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">A typical SaaS application architecture flows through several distinct layers:</p>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs leading-relaxed text-slate-700">
            {saasArchitecture.flow.split(" → ").map((layer, i, arr) => (
              <span key={layer}>
                {layer}
                {i < arr.length - 1 && <span className="mx-1 text-[#0f1a4e]">→</span>}
              </span>
            ))}
          </div>
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Core architectural components:</h3>
          <BulletList items={saasArchitecture.components} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{saasArchitecture.closing}</p>
        </ContentSection>

        {/* Auth, Subscription, Billing */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{authSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{authSection.intro}</p>
              <BulletList items={authSection.features} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Enterprise requirements:</h3>
              <BulletList items={authSection.enterprise} />
              <p className="mt-6 text-sm text-slate-600">{authSection.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{subscriptionSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{subscriptionSection.intro}</p>
              <BulletList items={subscriptionSection.features} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{subscriptionSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{billingSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{billingSection.intro}</p>
              <BulletList items={billingSection.features} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{billingSection.closing}</p>
            </div>
          </div>
        </section>

        {/* API & Integrations */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{apiSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{apiSection.intro}</p>
              <BulletList items={apiSection.features} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">SaaS APIs enable:</h3>
              <BulletList items={apiSection.enables} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{integrationsSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{integrationsSection.intro}</p>
              <BulletList items={integrationsSection.systems} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Technically, integrations rely on:</h3>
              <BulletList items={integrationsSection.technical} />
            </div>
          </div>
        </section>

        {/* Cloud & Scalability */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cloudSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{cloudSection.intro}</p>
              <BulletList items={cloudSection.features} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{cloudSection.providers}</p>
              <ContextualLink {...cloudSection.cloudLink} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{scalabilitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{scalabilitySection.intro}</p>
              <BulletList items={scalabilitySection.techniques} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{scalabilitySection.closing}</p>
            </div>
          </div>
        </section>

        {/* Security & Data Architecture */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{saasSecurity.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{saasSecurity.intro}</p>
              <BulletList items={saasSecurity.standard} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">SaaS-specific risks worth calling out explicitly:</h3>
              <BulletList items={saasSecurity.saasRisks} />
              <p className="mt-6 text-sm text-slate-600">{saasSecurity.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{dataArchitecture.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{dataArchitecture.intro}</p>
              <BulletList items={dataArchitecture.components} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>Common database technologies:</strong> {dataArchitecture.technologies}</p>
            </div>
          </div>
        </section>

        {/* Analytics, Dashboards, Team Management */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{analyticsSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{analyticsSection.intro}</p>
              <BulletList items={analyticsSection.tracking} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Important SaaS metrics worth understanding:</h3>
              <BulletList items={analyticsSection.metrics} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{analyticsSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{adminDashboard.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{adminDashboard.intro}</p>
              <BulletList items={adminDashboard.features} check />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{userDashboard.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{userDashboard.intro}</p>
              <BulletList items={userDashboard.features} check />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{teamManagement.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{teamManagement.intro}</p>
              <BulletList items={teamManagement.concepts} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>How this differs from simple user accounts:</strong> {teamManagement.closing}</p>
            </div>
          </div>
        </section>

        {/* Automation, AI, ML, UI/UX */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{automationSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{automationSection.intro}</p>
              <BulletList items={automationSection.useCases} check />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Technical foundations:</h3>
              <BulletList items={automationSection.technical} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{aiIntegrationSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{aiIntegrationSection.intro}</p>
              <BulletList items={aiIntegrationSection.examples} check />
              <ContextualLink {...aiIntegrationSection.aiLink} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{mlIntegrationSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mlIntegrationSection.intro}</p>
              <BulletList items={mlIntegrationSection.useCases} check />
              <ContextualLink {...mlIntegrationSection.mlLink} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{uiUxSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{uiUxSection.intro}</p>
              <BulletList items={uiUxSection.requirements} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{uiUxSection.closing}</p>
            </div>
          </div>
        </section>

        {/* Testing, DevOps, Monitoring, Migration */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{testingSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{testingSection.intro}</p>
              <BulletList items={testingSection.types} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{testingSection.multiTenantNote}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{devopsSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{devopsSection.intro}</p>
              <BulletList items={devopsSection.practices} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{devopsSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{monitoringSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{monitoringSection.intro}</p>
              <BulletList items={monitoringSection.areas} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{monitoringSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{migrationSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{migrationSection.intro}</p>
              <h3 className="mt-6 text-xl font-bold text-[#0b1437]">Migration sources we commonly address:</h3>
              <BulletList items={migrationSection.sources} />
              <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Our approach:</h3>
              <BulletList items={migrationSection.approach} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{migrationSection.closing}</p>
            </div>
          </div>
        </section>

        {/* Enterprise SaaS */}
        <ContentSection id="enterprise" title={enterpriseSaas.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{enterpriseSaas.intro}</p>
          <BulletList items={enterpriseSaas.requirements} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{enterpriseSaas.audience}</p>
        </ContentSection>

        {/* Industries, Startups, Enterprises, Geo, Cost, Timeline */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">SaaS Development for Industries</h2>
              <p className="mt-4 text-sm text-slate-500">Illustrative use cases based on common SaaS product patterns across industries — not claims of completed projects.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industryUseCases.map((ind) => (
                  <div key={ind.industry} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-[#0b1437]">{ind.industry}</h3>
                    <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{startupSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{startupSection.intro}</p>
              <BulletList items={startupSection.points} check />
              <ContextualLink {...startupSection.productDevLink} />
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{startupSection.closing}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{enterpriseSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{enterpriseSection.intro}</p>
              <BulletList items={enterpriseSection.points} check />
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
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{saasCost.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How much does SaaS development cost?</strong> {saasCost.intro}</p>
                <BulletList items={saasCost.drivers} />
                <h3 className="mt-6 text-xl font-bold text-[#0b1437]">Rough project categories:</h3>
                <BulletList items={saasCost.tiers} check />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{saasCost.closing}</p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{saasTimeline.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{saasTimeline.intro}</p>
                <BulletList items={saasTimeline.factors} />
                <h3 className="mt-6 text-xl font-bold text-[#0b1437]">General project stages:</h3>
                <BulletList items={saasTimeline.stages} check />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{saasTimeline.closing}</p>
              </div>
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
              We don&apos;t claim to be #1, the best, the largest, or award-winning, and we don&apos;t claim guaranteed ROI, guaranteed revenue outcomes, or official cloud provider partnerships — these outcomes and relationships depend on factors we won&apos;t promise without independent verification.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {saasFaqs.map((f) => {
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
