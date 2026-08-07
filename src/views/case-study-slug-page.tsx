"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Minus, Plus, Quote } from "lucide-react";
import {
  caseStudySlugs,
  getCaseStudyBySlug,
  getCaseStudyPath,
} from "@/data/case-studies-menu";
import { TechLogo } from "@/components/home/tech-logos";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection } from "@/components/home/motion";
import { techBadgeMap } from "@/data/portfolio";
import { NAVY } from "@/lib/brand";

export default function CaseStudyDetailPage({ slug }: { slug: string }) {
  const study = getCaseStudyBySlug(slug)!;
  const related = study.relatedSlugs.map(getCaseStudyBySlug).filter(Boolean);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden border-b border-slate-100" aria-labelledby="case-study-title">
          <div className="absolute inset-0">
            <img src={study.image} alt="" className="h-full w-full object-cover opacity-20" loading="eager" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#0f1a4e]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0f1a4e]">{study.industry}</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold text-slate-600">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {study.country}
                </span>
              </div>
              <h1 id="case-study-title" className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b1437] md:text-5xl">
                {study.title}
              </h1>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-600">{study.shortDescription}</p>
              <p className="mt-4 text-sm font-semibold text-emerald-700">{study.businessImpact}</p>
            </motion.div>
          </div>
        </section>

        {/* Client Overview */}
        <section className="py-16 md:py-20" aria-labelledby="client-overview-heading">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
            <MotionSection variant="fadeLeft">
              <h2 id="client-overview-heading" className="text-2xl font-extrabold text-[#0b1437]">Client Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{study.clientOverview}</p>
            </MotionSection>
            <MotionSection>
              <img
                src={study.image}
                alt={`${study.title} platform overview`}
                loading="lazy"
                width={1200}
                height={800}
                className="rounded-2xl border border-slate-200 shadow-xl"
              />
            </MotionSection>
          </div>
        </section>

        {/* Business Challenge & Project Goals */}
        <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b1437]">Business Challenge</h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">{study.businessChallenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b1437]">Project Goals</h2>
              <ul className="mt-6 space-y-3">
                {study.projectGoals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0f1a4e]" aria-hidden="true" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-16 md:py-20" aria-labelledby="solution-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="solution-heading" className="text-2xl font-extrabold text-[#0b1437]">Our Solution</h2>
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-600">{study.solution}</p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="tech-heading" className="text-2xl font-extrabold text-[#0b1437]">Technology Stack</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {study.technologies.map((tech) => {
                const meta = techBadgeMap[tech];
                return (
                  <span key={tech} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    {meta && <TechLogo tech={{ name: tech, slug: meta.slug, color: meta.color }} size="sm" />}
                    <span className="text-sm font-semibold text-[#0b1437]">{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Delivered */}
        <section className="py-16 md:py-20" aria-labelledby="features-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="features-heading" className="text-2xl font-extrabold text-[#0b1437]">Features Delivered</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.features.map((feature) => (
                <div key={feature} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <CheckCircle2 className="h-5 w-5 text-[#0f1a4e]" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-[#0b1437]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Screenshots */}
        <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="screenshots-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="screenshots-heading" className="text-2xl font-extrabold text-[#0b1437]">Dashboard Screenshots</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {study.screenshots.map((shot, i) => (
                <motion.img
                  key={`${shot}-${i}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  src={shot}
                  alt={`${study.title} dashboard screenshot ${i + 1}`}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="rounded-2xl border border-slate-200 shadow-lg transition hover:scale-[1.02]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 md:py-20" aria-labelledby="process-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="process-heading" className="text-2xl font-extrabold text-[#0b1437]">Development Process</h2>
            <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.developmentProcess.map((step, i) => (
                <li key={step} className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#0f1a4e]">Step {i + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-[#0b1437]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Business Results */}
        <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="results-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="results-heading" className="text-2xl font-extrabold text-[#0b1437]">Business Results</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {study.results.map((result) => (
                <div key={result} className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                  <p className="text-sm font-semibold text-[#0b1437]">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="py-16 md:py-20" aria-labelledby="testimonial-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="testimonial-heading" className="sr-only">Client Testimonial</h2>
            <blockquote className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-12">
              <Quote className="h-10 w-10 text-[#0f1a4e]/20" aria-hidden="true" />
              <p className="mt-4 text-lg font-medium leading-relaxed text-[#0b1437] md:text-xl">&ldquo;{study.testimonial.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-slate-100 pt-6">
                <cite className="not-italic">
                  <span className="block text-sm font-bold text-[#0b1437]">{study.testimonial.name}</span>
                  <span className="text-xs text-slate-500">{study.testimonial.role}</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Related Case Studies */}
        {related.length > 0 && (
          <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="related-heading">
            <div className="mx-auto max-w-6xl px-6">
              <h2 id="related-heading" className="text-2xl font-extrabold text-[#0b1437]">Related Case Studies</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {related.map((rel) => rel && (
                  <Link
                    key={rel.slug}
                    href={getCaseStudyPath(rel.slug)}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img src={rel.image} alt={rel.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{rel.title}</h3>
                      <p className="mt-1 text-xs text-slate-500">{rel.industry} · {rel.country}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-16 md:py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-heading" className="text-2xl font-extrabold text-[#0b1437]">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-3">
              {study.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q} className={`overflow-hidden rounded-xl border bg-white ${isOpen ? "border-[#0f1a4e]/30 shadow-md" : "border-slate-200"}`}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-bold text-[#0b1437]">{faq.q}</span>
                      {isOpen ? <Minus className="h-4 w-4 text-[#0f1a4e]" /> : <Plus className="h-4 w-4 text-[#0f1a4e]" />}
                    </button>
                    {isOpen && <div className="px-5 pb-4 text-sm text-slate-600">{faq.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pb-20" aria-labelledby="case-study-cta-heading">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #152456 100%)` }}>
              <h2 id="case-study-cta-heading" className="text-3xl font-extrabold">Ready to Solve Your Business Challenge?</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75">
                Let&apos;s discuss how custom software can deliver measurable results for your organization.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] hover:bg-slate-100">
                  Get Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                  All Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
