"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, GitBranch } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  devopsServicesSeo,
  devopsHero,
  whatAreDevopsServices,
  whyBusinessesNeedDevops,
  devopsServices,
  cicdSection,
  iacSection,
  containersKubernetes,
  devsecopsSection,
  cloudDevopsSection,
  observabilitySection,
  haDrSection,
  deploymentStrategies,
  devopsEvaluation,
  architectureDecisions,
  cicdMistakes,
  whenKubernetes,
  deploymentAutomation,
  devopsSecurity,
  cloudCostDevops,
  iacChallenges,
  devopsProcess,
  commonChallenges,
  devopsCost,
  usaSection,
  canadaSection,
  whyChooseRunner,
  devopsFaqs,
  finalCta,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
} from "@/data/devops-services-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${devopsServicesSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: devopsServicesSeo.h1, description: devopsServicesSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "DevOps Services",
        name: "DevOps Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        description: devopsServicesSeo.description,
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "DevOps Services",
          itemListElement: devopsServices.map((s) => ({
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
          { "@type": "ListItem", position: 4, name: "DevOps Services", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: devopsFaqs.map((f) => ({
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

export default function DevopsServicesPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(devopsFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">DevOps Services</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <GitBranch className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {devopsServicesSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{devopsHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600"><strong>In short:</strong> {devopsHero.summary}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {devopsHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {devopsHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1667372393119-3d4c48d91b5a?w=1200&auto=format&fit=crop&q=80"
                  alt="DevOps services including CI/CD, infrastructure as code, and cloud automation"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop"; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are DevOps Services */}
        <ContentSection id="what-is" title="What Are DevOps Services?">
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatAreDevopsServices.definition}</p>
          <BulletList items={whatAreDevopsServices.areas} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700"><strong>What does a DevOps engineer do?</strong> {whatAreDevopsServices.engineerRole}</p>
        </ContentSection>

        {/* Why Businesses Need DevOps */}
        <ContentSection id="why-devops" title={whyBusinessesNeedDevops.title} alt>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whyBusinessesNeedDevops.intro}</p>
          <BulletList items={whyBusinessesNeedDevops.painPoints} check />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{whyBusinessesNeedDevops.closing}</p>
        </ContentSection>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">DevOps Services We Provide</h2>
            <div className="mt-10 space-y-6">
              {devopsServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* CI/CD */}
        <ContentSection id="cicd" title={cicdSection.title} alt>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>What is CI/CD?</strong> {cicdSection.definition}</p>
          <p className="mt-6 text-sm font-semibold text-[#0b1437]">A realistic CI/CD workflow:</p>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono text-xs leading-relaxed text-slate-700">
            {cicdSection.workflow.split(" → ").map((step, i, arr) => (
              <span key={step}>
                {step}
                {i < arr.length - 1 && <span className="mx-1 text-[#0f1a4e]">→</span>}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-[#0b1437]">Components worth understanding individually:</p>
          <BulletList items={cicdSection.components} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{cicdSection.closing}</p>
        </ContentSection>

        {/* Infrastructure as Code */}
        <ContentSection id="iac" title={iacSection.title}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>What is infrastructure as code?</strong> {iacSection.definition}</p>
          <p className="mt-6 text-sm font-semibold text-[#0b1437]">Why this matters:</p>
          <BulletList items={iacSection.whyMatters} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>Terraform and alternative approaches:</strong> {iacSection.terraformNote}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{iacSection.closing}</p>
        </ContentSection>

        {/* Containers + Kubernetes */}
        <ContentSection id="kubernetes" title={containersKubernetes.title} alt>
          <h3 className="mt-6 text-xl font-bold text-[#0b1437]">Docker and containerization fundamentals:</h3>
          <BulletList items={containersKubernetes.docker} check />
          <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Kubernetes fundamentals, for teams that need orchestration at scale:</h3>
          <BulletList items={containersKubernetes.k8s} check />
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>When Kubernetes makes sense:</strong> {containersKubernetes.whenK8sMakesSense}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>When a simpler deployment architecture may be better:</strong> {containersKubernetes.whenSimpler}</p>
        </ContentSection>

        {/* DevSecOps, Cloud DevOps, Observability, HA/DR */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{devsecopsSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{devsecopsSection.intro}</p>
              <BulletList items={devsecopsSection.practices} check />
              <p className="mt-6 text-sm text-slate-600">{devsecopsSection.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cloudDevopsSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{cloudDevopsSection.intro}</p>
              <ContextualLink {...cloudDevopsSection.cloudLink} />
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Core cloud DevOps concepts:</p>
              <BulletList items={cloudDevopsSection.concepts} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{cloudDevopsSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{observabilitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{observabilitySection.intro}</p>
              <BulletList items={observabilitySection.components} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{observabilitySection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{haDrSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{haDrSection.intro}</p>
              <BulletList items={haDrSection.practices} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{haDrSection.closing}</p>
            </div>
          </div>
        </section>

        {/* Deployment Strategies */}
        <ContentSection id="deployment-strategies" title={deploymentStrategies.title} alt wide>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{deploymentStrategies.intro}</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="bg-[#0f1a4e] text-left text-white">
                  <th className="p-4 font-bold">Strategy</th>
                  <th className="p-4 font-bold">Description</th>
                  <th className="p-4 font-bold">Risk</th>
                  <th className="p-4 font-bold">Infra Cost</th>
                  <th className="p-4 font-bold">Complexity</th>
                  <th className="p-4 font-bold">Rollback</th>
                  <th className="p-4 font-bold">Release Speed</th>
                </tr>
              </thead>
              <tbody>
                {deploymentStrategies.rows.map((row, i) => (
                  <tr key={row.strategy} className={i % 2 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="p-4 font-semibold text-[#0b1437]">{row.strategy}</td>
                    <td className="p-4 text-slate-600">{row.desc}</td>
                    <td className="p-4 text-slate-600">{row.risk}</td>
                    <td className="p-4 text-slate-600">{row.cost}</td>
                    <td className="p-4 text-slate-600">{row.complexity}</td>
                    <td className="p-4 text-slate-600">{row.rollback}</td>
                    <td className="p-4 text-slate-600">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-700"><strong>When each may be appropriate:</strong> {deploymentStrategies.closing}</p>
        </ContentSection>

        {/* Evaluation & Architecture Decisions */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{devopsEvaluation.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{devopsEvaluation.intro}</p>
              <BulletList items={devopsEvaluation.questions} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{devopsEvaluation.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{architectureDecisions.title}</h2>
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

        {/* Mistakes, Kubernetes, Approaches */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cicdMistakes.title}</h2>
              <BulletList items={cicdMistakes.mistakes} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whenKubernetes.title}</h2>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">Kubernetes tends to be genuinely justified when:</p>
              <BulletList items={whenKubernetes.justified} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">Kubernetes tends to be over-engineering when:</p>
              <BulletList items={whenKubernetes.overEngineering} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whenKubernetes.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{deploymentAutomation.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{deploymentAutomation.body}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{devopsSecurity.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{devopsSecurity.body}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{cloudCostDevops.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{cloudCostDevops.body}</p>
              <ContextualLink {...cloudCostDevops.cloudLink} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{iacChallenges.title}</h2>
              <BulletList items={iacChallenges.challenges} />
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">DevOps Implementation Process</h2>
            <div className="mt-10 space-y-6">
              {devopsProcess.map((step) => (
                <div key={step.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-sm font-bold text-white">{step.step}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#0b1437]">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-600"><strong>Why it matters:</strong> {step.why}</p>
                      <p className="mt-1 text-sm text-slate-600"><strong>Decisions made:</strong> {step.decisions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Challenges, Cost, Geo */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Common DevOps Challenges</h2>
              <BulletList items={commonChallenges} check />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{devopsCost.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>How much do DevOps services cost?</strong> {devopsCost.intro}</p>
              <BulletList items={devopsCost.factors} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{devopsCost.closing}</p>
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
              We do not claim to be #1, the largest, or award-winning, and we do not claim official AWS, Microsoft, Google Cloud, HashiCorp, or other vendor partnership status unless independently verified. We don&apos;t fabricate client names, uptime percentages, cost savings figures, deployment frequency improvements, or case study results.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {devopsFaqs.map((f) => {
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
