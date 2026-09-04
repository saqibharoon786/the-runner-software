"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Cloud } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  cloudSolutionsSeo,
  cloudHero,
  whatAreCloudSolutions,
  whyBusinessesNeedCloud,
  cloudServices,
  awsSection,
  azureSection,
  googleCloudSection,
  platformComparison,
  cloudSecurity,
  cloudDevops,
  cloudCostOptimization,
  architectureEvaluation,
  architectureDecisions,
  migrationChallenges,
  architectureMistakes,
  cloudProcess,
  migrationStrategies,
  enterpriseCloud,
  useCases,
  industryUseCases,
  cloudCost,
  migrationTimeline,
  usaSection,
  canadaSection,
  whyChooseRunner,
  cloudFaqs,
  finalCta,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
} from "@/data/cloud-solutions-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${cloudSolutionsSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: cloudSolutionsSeo.h1, description: cloudSolutionsSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "Cloud Solutions",
        name: "Cloud Solutions Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: cloudSolutionsSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cloud Solutions Services",
          itemListElement: cloudServices.map((s) => ({
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
          { "@type": "ListItem", position: 4, name: "Cloud Solutions", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: cloudFaqs.map((f) => ({
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

export default function CloudSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(cloudFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">Cloud Solutions</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Cloud className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {cloudSolutionsSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{cloudHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600"><strong>In short:</strong> {cloudHero.summary}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {cloudHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {cloudHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
                  alt="Cloud solutions and cloud engineering services for AWS, Azure, and Google Cloud"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544197150-b99a580bb7a6?w=1200&auto=format&fit=crop"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are Cloud Solutions */}
        <ContentSection id="what-is" title="What Are Cloud Solutions?">
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatAreCloudSolutions.definition}</p>
          <p className="mt-6 text-sm font-semibold text-[#0b1437]">In practice, &quot;cloud solutions&quot; spans a range of distinct work:</p>
          <BulletList items={whatAreCloudSolutions.spans} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{whatAreCloudSolutions.closing}</p>
        </ContentSection>

        {/* Why Businesses Need Cloud */}
        <ContentSection id="why-cloud" title={whyBusinessesNeedCloud.title} alt>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whyBusinessesNeedCloud.intro}</p>
          <BulletList items={whyBusinessesNeedCloud.reasons} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{whyBusinessesNeedCloud.closing}</p>
        </ContentSection>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Cloud Solutions We Provide</h2>
            <div className="mt-10 space-y-6">
              {cloudServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* AWS, Azure, Google Cloud */}
        <ContentSection id="platforms" title="AWS, Microsoft Azure, and Google Cloud" alt wide>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">Cloud platform selection is a genuine architectural decision, not a matter of brand preference. Here&apos;s how the three major providers generally compare, without claiming any one is universally superior:</p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">{awsSection.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{awsSection.body}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">{azureSection.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{azureSection.body}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0b1437]">{googleCloudSection.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{googleCloudSection.body}</p>
            </div>
          </div>
          <h3 className="mt-10 text-xl font-bold text-[#0b1437]">{platformComparison.title}</h3>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="bg-[#0f1a4e] text-left text-white">
                  <th className="p-4 font-bold">Factor</th>
                  <th className="p-4 font-bold">AWS</th>
                  <th className="p-4 font-bold">Microsoft Azure</th>
                  <th className="p-4 font-bold">Google Cloud</th>
                </tr>
              </thead>
              <tbody>
                {platformComparison.rows.map((row, i) => (
                  <tr key={row.factor} className={i % 2 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="p-4 font-semibold text-[#0b1437]">{row.factor}</td>
                    <td className="p-4 text-slate-600">{row.aws}</td>
                    <td className="p-4 text-slate-600">{row.azure}</td>
                    <td className="p-4 text-slate-600">{row.gcp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>No provider is universally superior.</strong> {platformComparison.closing}</p>
        </ContentSection>

        {/* Security, DevOps, Cost */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cloudSecurity.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{cloudSecurity.intro}</p>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Core security practices we implement:</p>
              <BulletList items={cloudSecurity.practices} check />
              <p className="mt-6 text-sm text-slate-600">{cloudSecurity.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cloudDevops.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{cloudDevops.intro}</p>
              <BulletList items={cloudDevops.practices} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{cloudDevops.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cloudCostOptimization.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How can businesses reduce cloud costs?</strong> {cloudCostOptimization.intro}</p>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">How we approach cloud cost optimization:</p>
              <BulletList items={cloudCostOptimization.approaches} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{cloudCostOptimization.closing}</p>
            </div>
          </div>
        </section>

        {/* Architecture Evaluation & Decisions */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{architectureEvaluation.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{architectureEvaluation.intro}</p>
              <BulletList items={architectureEvaluation.questions} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{architectureEvaluation.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{architectureDecisions.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{architectureDecisions.intro}</p>
              <div className="mt-8 space-y-6">
                {architectureDecisions.decisions.map((d) => (
                  <div key={d.title}>
                    <h3 className="text-sm font-bold text-[#0b1437]">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Migration Challenges & Mistakes */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{migrationChallenges.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{migrationChallenges.intro}</p>
              <BulletList items={migrationChallenges.challenges} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{migrationChallenges.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{architectureMistakes.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{architectureMistakes.intro}</p>
              <BulletList items={architectureMistakes.mistakes} />
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-extrabold text-[#0b1437] md:text-4xl">Cloud Development Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-slate-600">Each phase produces a clear deliverable and decision point, reducing the risk of an open-ended project without a defined path to a working, well-architected production environment.</p>
            <div className="relative mt-14 overflow-x-auto pb-4">
              <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-5 xl:grid-cols-10">
                {cloudProcess.map(({ icon: Icon, title, desc }, i) => (
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

        {/* Migration Strategies & Enterprise */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{migrationStrategies.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{migrationStrategies.intro}</p>
              <div className="mt-8 space-y-4">
                {migrationStrategies.strategies.map((s) => (
                  <div key={s.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-[#0b1437]">
                      {s.title}
                      {s.subtitle && <span className="font-normal text-slate-500"> ({s.subtitle})</span>}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>When each may be appropriate:</strong> {migrationStrategies.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{enterpriseCloud.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{enterpriseCloud.intro}</p>
              <BulletList items={enterpriseCloud.requirements} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{enterpriseCloud.closing}</p>
              <ContextualLink {...enterpriseCloud.productDevLink} />
            </div>
          </div>
        </section>

        {/* Use Cases, Industries, Geo, Cost, Timeline */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Cloud Solutions by Use Case</h2>
              <BulletList items={useCases} check />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Cloud Solutions for Industries</h2>
              <p className="mt-4 text-sm text-slate-500">Illustrative use cases based on common cloud project patterns across industries — not claims of completed projects.</p>
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
            <div className="max-w-3xl space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cloudCost.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How much do cloud solutions cost?</strong> {cloudCost.intro}</p>
                <BulletList items={cloudCost.factors} />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{cloudCost.closing}</p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{migrationTimeline.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{migrationTimeline.intro}</p>
                <BulletList items={migrationTimeline.factors} />
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{migrationTimeline.closing}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions?</h2>
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
            <p className="mt-8 text-sm leading-relaxed text-slate-500">
              We do not claim to be #1, the largest, or award-winning, and we do not claim official AWS, Microsoft, or Google Cloud partnership status unless independently verified. We don&apos;t fabricate client names, project counts, performance improvement statistics, or case study results.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {cloudFaqs.map((f) => {
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
                <Link href={finalCta.crossLinks[3].href} className="font-semibold text-white underline hover:text-white/90">{finalCta.crossLinks[3].text}</Link>
                {finalCta.crossLinks[3].after}
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
