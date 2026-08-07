"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { caseStudies, getCaseStudyPath } from "@/data/case-studies-menu";
import { SiteHeader } from "@/components/layout/site-header";
import { NAVY } from "@/lib/brand";

export default function CaseStudiesIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        <section className="border-b border-slate-100 bg-slate-50 py-16 md:py-24" aria-labelledby="case-studies-heading">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0f1a4e]">Success Stories</p>
              <h1 id="case-studies-heading" className="mt-4 text-4xl font-extrabold tracking-tight text-[#0b1437] md:text-5xl">
                Case Studies
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                Real client projects showcasing how we solve complex business challenges through custom software development.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20" aria-label="All case studies">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/20 hover:shadow-xl hover:shadow-[#4f6bff]/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#0f1a4e]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#0f1a4e]">
                      {study.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {study.country}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-extrabold text-[#0b1437] group-hover:text-[#0f1a4e]">{study.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{study.shortDescription}</p>
                  <p className="mt-3 text-xs font-semibold text-emerald-700">{study.businessImpact}</p>
                  <Link
                    href={getCaseStudyPath(study.slug)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f1a4e]"
                  >
                    View Case Study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="pb-20" aria-labelledby="case-studies-cta">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #152456 100%)` }}>
              <h2 id="case-studies-cta" className="text-3xl font-extrabold">Ready to Start Your Success Story?</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75">
                Book a free consultation and discover how custom software can transform your business.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] hover:bg-slate-100"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
