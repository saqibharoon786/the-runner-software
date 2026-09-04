"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  enterpriseWebDevelopmentSeo,
  enterpriseHero,
  complexRequirements,
  whatIsEnterprise,
  enterpriseServices,
  technologyStack,
  technologyClosing,
  applicationsWeBuild,
  securitySection,
  scalabilitySection,
  integrationsSection,
  uiUxSection,
  developmentProcess,
  processClosing,
  customVsOffTheShelf,
  benefitsSection,
  industriesSection,
  industriesDisclaimer,
  whyChooseRunner,
  whyChooseSoftwareLink,
  seoPerformanceSection,
  costSection,
  enterpriseFaqs,
  finalCta,
  WEB_MOBILE_DEVELOPMENT_PILLAR_PATH,
} from "@/data/enterprise-web-development-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${enterpriseWebDevelopmentSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: enterpriseWebDevelopmentSeo.h1, description: enterpriseWebDevelopmentSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "Enterprise Web Development",
        name: "Enterprise Web Development Services",
        description:
          "Custom enterprise web development including portals, dashboards, and API-driven business applications, architected for scalability, security, and integration with existing enterprise systems.",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        audience: { "@type": "Audience", audienceType: "Enterprises and organizations seeking custom, scalable business web applications" },
        url: pageUrl,
        category: "Web & Mobile Development",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Enterprise Web Development Services",
          itemListElement: enterpriseServices.map((s) => ({
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
          { "@type": "ListItem", position: 3, name: "Web & Mobile Development", item: `${baseUrl}${WEB_MOBILE_DEVELOPMENT_PILLAR_PATH}` },
          { "@type": "ListItem", position: 4, name: "Enterprise Web Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: enterpriseFaqs.map((f) => ({
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

export default function EnterpriseWebDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(enterpriseFaqs[0]?.q ?? null);

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
              <Link href={WEB_MOBILE_DEVELOPMENT_PILLAR_PATH} className="hover:text-[#0f1a4e]">Web & Mobile Development</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-[#0f1a4e]">Enterprise Web Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Building2 className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {enterpriseWebDevelopmentSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{enterpriseHero.intro}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {enterpriseHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {enterpriseHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80"
                  alt={enterpriseWebDevelopmentSeo.imageAlt}
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Complex Requirements */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{complexRequirements.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{complexRequirements.intro}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{complexRequirements.closing}</p>
          </div>
        </section>

        {/* What Is Enterprise Web Development */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatIsEnterprise.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsEnterprise.definition}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsEnterprise.layersIntro}</p>
            <p className="mt-4 rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold text-[#0f1a4e] ring-1 ring-slate-200">{whatIsEnterprise.layersFlow}</p>
            <BulletList items={whatIsEnterprise.layerDescriptions} />
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">This structure shows up across a wide range of enterprise application types:</p>
            <BulletList items={whatIsEnterprise.applicationTypes} check />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Enterprise Web Development Services</h2>
            <div className="mt-10 space-y-6">
              {enterpriseServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  {s.bullets && <BulletList items={s.bullets} check />}
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Enterprise Web Development Technology Stack</h2>
            <div className="mt-8 space-y-4">
              {technologyStack.map((g) => (
                <div key={g.label} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{g.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{g.items}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{technologyClosing}</p>
          </div>
        </section>

        {/* Applications We Build */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Enterprise Applications We Build</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {applicationsWeBuild.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f1a4e]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Security + Scalability + Integrations */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{securitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{securitySection.intro}</p>
              <BulletList items={securitySection.practices} check />
              <p className="mt-6 text-sm leading-relaxed text-slate-500">{securitySection.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{scalabilitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{scalabilitySection.intro}</p>
              <BulletList items={scalabilitySection.techniques} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{scalabilitySection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{integrationsSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{integrationsSection.intro}</p>
              <BulletList items={integrationsSection.systems} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{integrationsSection.closing}</p>
            </div>
          </div>
        </section>

        {/* UI/UX */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{uiUxSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{uiUxSection.intro}</p>
            <BulletList items={uiUxSection.considerations} check />
            <ContextualLink {...uiUxSection.uiUxLink} />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Enterprise Web Development Process</h2>
            <div className="mt-10 space-y-4">
              {developmentProcess.map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: NAVY }}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0f1a4e]">Step {step}</p>
                    <h3 className="text-sm font-bold text-[#0b1437]">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{processClosing}</p>
          </div>
        </section>

        {/* Custom vs Off-the-Shelf + Benefits */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{customVsOffTheShelf.title}</h2>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{customVsOffTheShelf.customMakesSense}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{customVsOffTheShelf.offTheShelfBetter}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{benefitsSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{benefitsSection.intro}</p>
              <BulletList items={benefitsSection.benefits} check />
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Enterprise Web Development Across Industries</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industriesSection.map((ind) => (
                <div key={ind.industry} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#0b1437]">{ind.industry}</h3>
                  <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">{industriesDisclaimer}</p>
          </div>
        </section>

        {/* Why Choose + SEO Performance + Cost */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions for Enterprise Development?</h2>
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
              <ContextualLink {...whyChooseSoftwareLink} />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{seoPerformanceSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{seoPerformanceSection.intro}</p>
              <BulletList items={seoPerformanceSection.considerations} check />
              <ContextualLink {...seoPerformanceSection.seoLink} />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{costSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{costSection.intro}</p>
              <BulletList items={costSection.factors} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{costSection.closing}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions About Enterprise Web Development</h2>
            <div className="mt-10 space-y-3">
              {enterpriseFaqs.map((f) => {
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
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">{finalCta.body}</p>
              <Link href={finalCta.contactLink.href} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                {finalCta.contactLink.text} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
