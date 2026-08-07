"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";
import { getIndustryBySlug, industrySlugs } from "@/data/industries-menu";
import { SiteHeader } from "@/components/layout/site-header";
import { NAVY } from "@/lib/brand";

export default function IndustryPage({ slug }: { slug: string }) {
  const industry = getIndustryBySlug(slug)!;
  const Icon = industry.icon as LucideIcon;

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
              <Icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b1437] md:text-5xl">
              {industry.title} Software Development
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">{industry.description}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              style={{ backgroundColor: NAVY }}
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b1437]">Industry Expertise</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Software built around your industry's unique workflows",
                  "Compliance-aware architecture for regulated sectors",
                  "Integrations with industry-standard tools and APIs",
                  "Dedicated team with cross-border delivery experience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-lg font-bold text-[#0b1437]">Ready to build for {industry.title}?</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Book a free consultation and receive a tailored proposal for your industry within 3–5 business days.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a4e] hover:underline">
                Talk to an expert <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
