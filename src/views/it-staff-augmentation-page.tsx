"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, UserPlus } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  itStaffAugmentationSeo,
  staffAugHero,
  trustBar,
  whatIsStaffAug,
  howItWorks,
  professionalsSection,
  techExpertise,
  whenToUse,
  benefitsSection,
  engagementComparison,
  costSection,
  usaCanadaSection,
  securitySection,
  workflowSection,
  whyChooseRunner,
  caseStudiesSection,
  finalCta,
  staffAugFaqs,
  SOFTWARE_DEVELOPMENT_PILLAR_PATH,
} from "@/data/it-staff-augmentation-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${itStaffAugmentationSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: itStaffAugmentationSeo.h1, description: itStaffAugmentationSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "IT Staff Augmentation",
        name: "IT Staff Augmentation Services",
        description:
          "IT staff augmentation services providing frontend, backend, mobile, QA, DevOps, cloud, and AI engineering talent that integrates directly into a client's existing team, sprint process, and codebase.",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        audience: { "@type": "Audience", audienceType: "Businesses and engineering teams seeking additional software development capacity or specialized technical skills" },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: "Software Development", item: `${baseUrl}${SOFTWARE_DEVELOPMENT_PILLAR_PATH}` },
          { "@type": "ListItem", position: 4, name: "IT Staff Augmentation", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: staffAugFaqs.map((f) => ({
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

function WorkflowDiagram({ diagram }: { diagram: string }) {
  return (
    <pre className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-[#0b1437] font-mono whitespace-pre">
      {diagram}
    </pre>
  );
}

export default function ItStaffAugmentationPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(staffAugFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">IT Staff Augmentation</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <UserPlus className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {itStaffAugmentationSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{staffAugHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{staffAugHero.closing}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {staffAugHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {staffAugHero.secondaryCta}
                  </Link>
                </div>
                <p className="mt-8 text-sm font-semibold text-[#0b1437]">What you get:</p>
                <BulletList items={staffAugHero.benefits} check />
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
                  alt={itStaffAugmentationSeo.imageAlt}
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-slate-50 py-8">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium leading-relaxed text-slate-700">{trustBar.statement}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatIsStaffAug.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>{whatIsStaffAug.definition}</strong></p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsStaffAug.intro}</p>
            <div className="mt-8 space-y-4">
              {whatIsStaffAug.details.map((d) => (
                <div key={d.label}>
                  <h3 className="text-sm font-bold text-[#0b1437]">{d.label}</h3>
                  <p className="mt-1 text-sm text-slate-600">{d.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsStaffAug.engagementModels}</p>
          </div>
        </section>

        <section id="process" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{howItWorks.title}</h2>
            <div className="mt-10 space-y-4">
              {howItWorks.steps.map((step) => (
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

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{professionalsSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{professionalsSection.intro}</p>
            <BulletList items={professionalsSection.roles} />
            <ContextualLink {...professionalsSection.webLink} />
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{techExpertise.title}</h2>
            <div className="mt-8 space-y-5">
              {techExpertise.groups.map((g) => (
                <div key={g.label}>
                  <h3 className="text-sm font-bold text-[#0b1437]">{g.label}</h3>
                  <p className="mt-1 text-sm text-slate-600">{g.items}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{techExpertise.closing}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whenToUse.title}</h2>
            <p className="mt-4 text-sm font-semibold text-[#0b1437]">{whenToUse.goodFitIntro}</p>
            <BulletList items={whenToUse.goodFit} check />
            <p className="mt-8 text-sm font-semibold text-[#0b1437]">{whenToUse.notIdealIntro}</p>
            <BulletList items={whenToUse.notIdeal} />
            <ContextualLink {...whenToUse.dedicatedTeamLink} />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{whenToUse.outsourcingNote}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whenToUse.closing}</p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{benefitsSection.title}</h2>
            <BulletList items={benefitsSection.benefits} check />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{benefitsSection.closing}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{engagementComparison.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{engagementComparison.intro}</p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[800px] text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Model</th>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Client Control</th>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Provider Responsibility</th>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {engagementComparison.rows.map((row) => (
                    <tr key={row.model} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-semibold text-[#0b1437]">{row.model}</td>
                      <td className="px-4 py-3 text-slate-600">{row.control}</td>
                      <td className="px-4 py-3 text-slate-600">{row.responsibility}</td>
                      <td className="px-4 py-3 text-slate-600">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">{engagementComparison.closingIntro}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{engagementComparison.closing}</p>
            <ContextualLink {...engagementComparison.dedicatedLink} />
            <ContextualLink {...engagementComparison.customLink} />
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{costSection.title}</h2>
              <p className="mt-4 text-[15px] font-semibold text-slate-700">{costSection.question}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{costSection.intro}</p>
              <BulletList items={costSection.factors} />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{costSection.evaluationIntro}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{costSection.evaluation}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{costSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{usaCanadaSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{usaCanadaSection.intro}</p>
              <BulletList items={usaCanadaSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{usaCanadaSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{securitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{securitySection.intro}</p>
              <BulletList items={securitySection.practices} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{securitySection.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{workflowSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{workflowSection.intro}</p>
              <WorkflowDiagram diagram={workflowSection.diagram} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{workflowSection.practice}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{workflowSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
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
            <p className="mt-8 text-sm leading-relaxed text-slate-600">
              We don&apos;t claim to be the best or number one staff augmentation company — we focus on being genuinely useful to the specific engineering gap you&apos;re trying to fill, and we&apos;ll tell you honestly if staff augmentation isn&apos;t actually the right model for your situation.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-extrabold text-[#0b1437]">{caseStudiesSection.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {caseStudiesSection.body}{" "}
              <Link href={caseStudiesSection.link.href} className="font-semibold text-[#0f1a4e] hover:underline">
                Explore our {caseStudiesSection.link.text}
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions About IT Staff Augmentation</h2>
            <div className="mt-10 space-y-3">
              {staffAugFaqs.map((f) => {
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
              <p className="mx-auto mt-6 max-w-md text-left text-sm font-semibold text-white/90">What happens next:</p>
              <ol className="mx-auto mt-3 max-w-md space-y-2 text-left text-sm text-white/80">
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
