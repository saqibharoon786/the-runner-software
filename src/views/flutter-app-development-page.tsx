"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Smartphone } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  flutterAppDevelopmentSeo,
  flutterHero,
  customFlutterSection,
  whatIsFlutter,
  flutterServices,
  applicationsWeBuild,
  featuresWeBuild,
  techStackSection,
  flutterVsNative,
  flutterVsReactNative,
  developmentProcess,
  performanceSection,
  securitySection,
  scalableBackendSection,
  seoWebSection,
  costSection,
  timelineSection,
  whyChooseRunner,
  isFlutterRightSection,
  finalCta,
  flutterFaqs,
  WEB_MOBILE_DEVELOPMENT_PILLAR_PATH,
} from "@/data/flutter-app-development-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${flutterAppDevelopmentSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: flutterAppDevelopmentSeo.h1, description: flutterAppDevelopmentSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "Flutter App Development",
        name: "Flutter App Development Services",
        description:
          "Custom Flutter app development for Android and iOS from a single codebase, including UI/UX design, API and backend integration, authentication, payments, push notifications, performance optimization, and app store deployment.",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        audience: { "@type": "Audience", audienceType: "Businesses seeking custom cross-platform mobile application development" },
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Flutter App Development Services",
          itemListElement: flutterServices.map((s) => ({
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
          { "@type": "ListItem", position: 4, name: "Flutter App Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: flutterFaqs.map((f) => ({
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

function ComparisonTable({ headers, rows }: { headers: string[]; rows: { factor: string; [key: string]: string }[] }) {
  const keys = headers.slice(1);
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-bold text-[#0b1437]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.factor} className="border-t border-slate-100">
              <td className="px-4 py-3 font-semibold text-[#0b1437]">{row.factor}</td>
              {keys.map((k) => (
                <td key={k} className="px-4 py-3 text-slate-600">{row[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArchitectureDiagram({ diagram }: { diagram: string }) {
  return (
    <pre className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-[#0b1437] font-mono whitespace-pre">
      {diagram}
    </pre>
  );
}

export default function FlutterAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(flutterFaqs[0]?.q ?? null);

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
              <Link href={WEB_MOBILE_DEVELOPMENT_PILLAR_PATH} className="hover:text-[#0f1a4e]">Web & Mobile Development</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-[#0f1a4e]">Flutter App Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Smartphone className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {flutterAppDevelopmentSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{flutterHero.intro}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {flutterHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {flutterHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80"
                  alt={flutterAppDevelopmentSeo.imageAlt}
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
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{customFlutterSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{customFlutterSection.intro}</p>
            <BulletList items={customFlutterSection.benefits} check />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{customFlutterSection.closing}</p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatIsFlutter.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700"><strong>{whatIsFlutter.definition}</strong></p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsFlutter.conceptsIntro}</p>
            <BulletList items={whatIsFlutter.concepts} />
            <p className="mt-6 text-sm font-semibold text-[#0b1437]">{whatIsFlutter.architectureIntro}</p>
            <ArchitectureDiagram diagram={whatIsFlutter.architectureDiagram} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsFlutter.example}</p>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Flutter App Development Services</h2>
            <div className="mt-10 space-y-6">
              {flutterServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  {s.link && <ContextualLink {...s.link} />}
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{applicationsWeBuild.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{applicationsWeBuild.intro}</p>
              <BulletList items={applicationsWeBuild.items} check />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{featuresWeBuild.title}</h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {featuresWeBuild.features.map((f) => (
                  <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-[#0b1437]">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{techStackSection.title}</h2>
            <div className="mt-8 space-y-6">
              {[techStackSection.mobile, techStackSection.backend, techStackSection.databases, techStackSection.apis, techStackSection.deployment].map((item) => (
                <div key={item.label}>
                  <h3 className="text-sm font-bold text-[#0b1437]">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{techStackSection.closing}</p>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{flutterVsNative.title}</h2>
              <ComparisonTable
                headers={["Factor", "Flutter", "Native (Android + iOS separately)"]}
                rows={flutterVsNative.rows.map((r) => ({ factor: r.factor, flutter: r.flutter, native: r.native }))}
              />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{flutterVsNative.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{flutterVsReactNative.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{flutterVsReactNative.intro}</p>
              <div className="mt-8 space-y-4">
                {flutterVsReactNative.comparisons.map((c) => (
                  <div key={c.label} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="text-sm font-bold text-[#0b1437]">{c.label}</h3>
                    <p className="mt-2 text-sm text-slate-600"><span className="font-semibold">Flutter:</span> {c.flutter}</p>
                    <p className="mt-1 text-sm text-slate-600"><span className="font-semibold">React Native:</span> {c.rn}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{flutterVsReactNative.closing}</p>
            </div>
          </div>
        </section>

        <section id="process" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Flutter App Development Process</h2>
            <div className="mt-10 space-y-4">
              {developmentProcess.map((step) => (
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
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{performanceSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{performanceSection.intro}</p>
              <BulletList items={performanceSection.areas} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{performanceSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{securitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{securitySection.intro}</p>
              <BulletList items={securitySection.practices} check />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{scalableBackendSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{scalableBackendSection.intro}</p>
              <ArchitectureDiagram diagram={scalableBackendSection.diagram} />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{scalableBackendSection.backendIntro}</p>
              <BulletList items={scalableBackendSection.backendItems} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{scalableBackendSection.closing}</p>
              <ContextualLink {...scalableBackendSection.softwareLink} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{seoWebSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{seoWebSection.intro}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{seoWebSection.closing}</p>
              <ContextualLink {...seoWebSection.seoLink} />
            </div>
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
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{isFlutterRightSection.title}</h2>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">{isFlutterRightSection.goodFitIntro}</p>
              <BulletList items={isFlutterRightSection.goodFit} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{isFlutterRightSection.notIdealIntro}</p>
              <BulletList items={isFlutterRightSection.notIdeal} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{isFlutterRightSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions for Flutter Development?</h2>
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
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions About Flutter App Development</h2>
            <div className="mt-10 space-y-3">
              {flutterFaqs.map((f) => {
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
              <div className="mt-8">
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
