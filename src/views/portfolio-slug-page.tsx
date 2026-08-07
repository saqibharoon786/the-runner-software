"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MapPin, Minus, Plus } from "lucide-react";
import { getPortfolioBySlug, getPortfolioPath, portfolioSlugs, techBadgeMap } from "@/data/portfolio";
import { TechLogo } from "@/components/home/tech-logos";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection } from "@/components/home/motion";
import { NAVY } from "@/lib/brand";

export default function PortfolioDetailPage({ slug }: { slug: string }) {
  const project = getPortfolioBySlug(slug)!;
  const related = project.relatedSlugs.map(getPortfolioBySlug).filter(Boolean);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden border-b border-slate-100" aria-labelledby="project-title">
          <div className="absolute inset-0">
            <img src={project.image} alt="" className="h-full w-full object-cover opacity-20" loading="eager" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#0f1a4e]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0f1a4e]">{project.industry}</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold text-slate-600">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {project.country}
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-800">{project.status}</span>
              </div>
              <h1 id="project-title" className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b1437] md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4 text-[#0f1a4e]" aria-hidden="true" /> {project.timeline}</span>
                <span><strong className="text-[#0b1437]">Type:</strong> {project.projectType}</span>
                <span><strong className="text-[#0b1437]">Category:</strong> {project.businessCategory}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 md:py-20" aria-labelledby="overview-heading">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
            <MotionSection variant="fadeLeft">
              <h2 id="overview-heading" className="text-2xl font-extrabold text-[#0b1437]">Project Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Business Results</h3>
                <p className="mt-2 text-lg font-extrabold text-[#0b1437]">{project.businessImpact}</p>
              </div>
            </MotionSection>
            <MotionSection>
              <img
                src={project.image}
                alt={`${project.title} dashboard interface`}
                loading="lazy"
                width={1200}
                height={800}
                className="rounded-2xl border border-slate-200 shadow-xl"
              />
            </MotionSection>
          </div>
        </section>

        {/* Client Requirements & Challenges */}
        <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b1437]">Client Requirements</h2>
              <ul className="mt-6 space-y-3">
                {project.clientRequirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0f1a4e]" aria-hidden="true" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b1437]">Challenges</h2>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">{project.challenge}</p>
              <h3 className="mt-8 text-lg font-bold text-[#0b1437]">Our Solution</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 md:py-20" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="tech-heading" className="text-2xl font-extrabold text-[#0b1437]">Technology Stack</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((tech) => {
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

        {/* Features */}
        <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="features-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="features-heading" className="text-2xl font-extrabold text-[#0b1437]">Key Features</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-[#0f1a4e]" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-[#0b1437]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-16 md:py-20" aria-labelledby="screenshots-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="screenshots-heading" className="text-2xl font-extrabold text-[#0b1437]">Dashboard Screenshots</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {project.screenshots.map((shot, i) => (
                <motion.img
                  key={shot}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  src={shot}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="rounded-2xl border border-slate-200 shadow-lg transition hover:scale-[1.02]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-heading" className="text-2xl font-extrabold text-[#0b1437]">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-3">
              {project.faqs.map((faq, i) => {
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

        {/* Related Projects */}
        {related.length > 0 && (
          <section className="py-16 md:py-20" aria-labelledby="related-heading">
            <div className="mx-auto max-w-6xl px-6">
              <h2 id="related-heading" className="text-2xl font-extrabold text-[#0b1437]">Related Projects</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rel) => rel && (
                  <Link
                    key={rel.slug}
                    href={getPortfolioPath(rel.slug)}
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

        {/* CTA */}
        <section className="py-16 md:py-20" aria-labelledby="portfolio-cta-heading">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #152456 100%)` }}>
              <h2 id="portfolio-cta-heading" className="text-3xl font-extrabold">Ready to Build Your Next Software Product?</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75">
                Let&apos;s transform your business with custom software tailored to your goals.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] hover:bg-slate-100">
                  Get Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/#portfolio" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
