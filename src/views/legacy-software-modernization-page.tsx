"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, RefreshCw } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  legacyModernizationSeo,
  legacyHero,
  preserveDataSection,
  whatIsLegacy,
  signsSection,
  legacyServices,
  strategiesSection,
  modernizeVsReplace,
  assessmentSection,
  dataMigrationSection,
  securitySection,
  integrationSection,
  technologiesSection,
  architectureSection,
  incrementalSteps,
  modernizationProcess,
  benefitsSection,
  industriesSection,
  whyChooseRunner,
  costSection,
  timelineSection,
  finalCta,
  legacyFaqs,
  SOFTWARE_DEVELOPMENT_PILLAR_PATH,
} from "@/data/legacy-software-modernization-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${legacyModernizationSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: legacyModernizationSeo.h1, description: legacyModernizationSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "Legacy Software Modernization",
        name: "Legacy Software Modernization Services",
        description:
          "Legacy software modernization services including application assessment, database modernization, API modernization, security modernization, and data migration using rehost, replatform, refactor, rearchitect, rebuild, or replace strategies.",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        audience: {
          "@type": "Audience",
          audienceType: "Businesses and organizations operating outdated software systems in need of modernization",
        },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: "Software Development", item: `${baseUrl}${SOFTWARE_DEVELOPMENT_PILLAR_PATH}` },
          { "@type": "ListItem", position: 4, name: "Legacy Software Modernization", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: legacyFaqs.map((f) => ({
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
    <p className="mt-3 text-xs leading-relaxed text-slate-600">
      {before}
      <Link href={href} className="font-semibold text-[#0f1a4e] hover:underline">
        {text}
      </Link>
      {after}
    </p>
  );
}

function DiagramBlock({ content }: { content: string }) {
  return (
    <pre className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700 font-mono whitespace-pre">
      {content}
    </pre>
  );
}

export default function LegacySoftwareModernizationPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(legacyFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">Legacy Software Modernization</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <RefreshCw className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {legacyModernizationSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{legacyHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{legacyHero.goals}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {legacyHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {legacyHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80"
                  alt={legacyModernizationSeo.imageAlt}
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{preserveDataSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{preserveDataSection.intro}</p>
            <BulletList items={preserveDataSection.items} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{preserveDataSection.risk}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{preserveDataSection.closing}</p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatIsLegacy.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>{whatIsLegacy.definition}</strong></p>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">{whatIsLegacy.problemsIntro}</p>
            <BulletList items={whatIsLegacy.problems} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsLegacy.closing}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{signsSection.title}</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {signsSection.signs.map((sign, i) => (
                <MotionCard key={sign.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0b1437]">{sign.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{sign.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Legacy Software Modernization Services</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {legacyServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{s.desc}</p>
                  {s.link && <ContextualLink {...s.link} />}
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{strategiesSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{strategiesSection.intro}</p>
            <div className="mt-8 space-y-4">
              {strategiesSection.strategies.map((s) => (
                <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">{strategiesSection.factorsIntro}</p>
            <BulletList items={strategiesSection.factors} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{strategiesSection.closing}</p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{modernizeVsReplace.title}</h2>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">{modernizeVsReplace.modernizeIntro}</p>
            <BulletList items={modernizeVsReplace.modernizeWhen} check />
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">{modernizeVsReplace.replaceIntro}</p>
            <BulletList items={modernizeVsReplace.replaceWhen} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{modernizeVsReplace.closing}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{assessmentSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{assessmentSection.intro}</p>
              <BulletList items={assessmentSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{assessmentSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{dataMigrationSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{dataMigrationSection.intro}</p>
              <BulletList items={dataMigrationSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{dataMigrationSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{securitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{securitySection.intro}</p>
              <BulletList items={securitySection.practices} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{securitySection.disclaimer}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{integrationSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{integrationSection.intro}</p>
            <DiagramBlock content={integrationSection.diagram} />
            <BulletList items={integrationSection.elements} check />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{integrationSection.examples}</p>
            <ContextualLink {...integrationSection.seoLink} />
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{technologiesSection.title}</h2>
              <div className="mt-8 space-y-5">
                {technologiesSection.groups.map((g) => (
                  <div key={g.label}>
                    <h3 className="text-sm font-bold text-[#0b1437]">{g.label}</h3>
                    <p className="mt-1 text-sm text-slate-600">{g.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{technologiesSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{architectureSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{architectureSection.intro}</p>
              <DiagramBlock content={architectureSection.diagram} />
              <BulletList items={architectureSection.elements} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{architectureSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{incrementalSteps.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{incrementalSteps.intro}</p>
            <ol className="mt-6 space-y-3">
              {incrementalSteps.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{incrementalSteps.closing}</p>
          </div>
        </section>

        <section id="process" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Legacy Software Modernization Process</h2>
            <div className="mt-10 space-y-4">
              {modernizationProcess.map((step) => (
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

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{benefitsSection.title}</h2>
            <BulletList items={benefitsSection.benefits} check />
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Legacy Software Modernization for Different Industries</h2>
            <p className="mt-4 text-sm italic text-slate-600">
              Across all industries, these are general patterns that inform how we scope an engagement, not a claim of specific prior client work in any of these sectors.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industriesSection.map((item, i) => (
                <MotionCard key={item.industry} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0b1437]">{item.industry}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions for Legacy Modernization?</h2>
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
              We are not making claims about specific years of modernization experience, number of applications migrated, client counts, awards, or certifications — our approach is demonstrated through the technical substance of this page, not unverified credentials.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{costSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{costSection.intro}</p>
              <BulletList items={costSection.factors} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{costSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{timelineSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{timelineSection.intro}</p>
              <BulletList items={timelineSection.factors} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{timelineSection.closing}</p>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions About Legacy Software Modernization</h2>
            <div className="mt-10 space-y-3">
              {legacyFaqs.map((f) => {
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
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/70">{finalCta.body}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={finalCta.ctaHref} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                  {finalCta.ctaText} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
