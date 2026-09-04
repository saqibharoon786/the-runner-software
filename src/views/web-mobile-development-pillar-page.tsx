"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Globe } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  webMobileDevelopmentSeo,
  pillarHero,
  whatCustomMeans,
  webDevelopmentServices,
  mobileDevelopmentServices,
  mobileCoreConsiderations,
  technologyStack,
  technologyClosing,
  solutionsWeBuild,
  pillarProcess,
  processClosing,
  whyChooseRunner,
  productComparison,
  industriesSection,
  performanceSecuritySection,
  customApplicationSection,
  pillarFaqs,
  finalCta,
  pillarChildServices,
} from "@/data/web-mobile-development-pillar-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${webMobileDevelopmentSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: webMobileDevelopmentSeo.h1,
        description: webMobileDevelopmentSeo.description,
        url: pageUrl,
      },
      {
        "@type": "Service",
        serviceType: "Web & Mobile Development",
        name: "Web & Mobile Development Services",
        description:
          "Custom web and mobile development services including business websites, eCommerce platforms, web applications, and Android and iOS mobile app development.",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        audience: { "@type": "Audience", audienceType: "Businesses seeking custom web and mobile software development" },
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web & Mobile Development Services",
          itemListElement: pillarChildServices.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, url: `${baseUrl}${s.href}` },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: "Web & Mobile Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: pillarFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
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

export default function WebMobileDevelopmentPillarPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(pillarFaqs[0]?.q ?? null);

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
              <span className="text-[#0f1a4e]">Web & Mobile Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Globe className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {webMobileDevelopmentSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{pillarHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{pillarHero.supporting}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {pillarHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {pillarHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
                  alt={webMobileDevelopmentSeo.imageAlt}
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Custom Means */}
        <section className="py-20" aria-labelledby="custom-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="custom-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatCustomMeans.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatCustomMeans.intro}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatCustomMeans.templateVsCustom}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatCustomMeans.professionalOutcomes}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatCustomMeans.closing}</p>
          </div>
        </section>

        {/* Child Services Quick Links */}
        <section id="our-services" className="bg-slate-50 py-20" aria-labelledby="child-services-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="child-services-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Web & Mobile Services</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillarChildServices.map(({ icon: Icon, title, desc, href }, i) => (
                <MotionCard key={title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg text-white" style={{ backgroundColor: NAVY }}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#0b1437]">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                  <Link href={href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0f1a4e] hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Web Development Services */}
        <section className="py-20" aria-labelledby="web-services-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="web-services-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Web Development Services</h2>
            <div className="mt-10 space-y-6">
              {webDevelopmentServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  {s.seoLink && <ContextualLink {...s.seoLink} />}
                  {s.href && (
                    <Link href={s.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f1a4e] hover:gap-2 transition-all">
                      Explore {s.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Development Services */}
        <section className="bg-slate-50 py-20" aria-labelledby="mobile-services-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="mobile-services-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Mobile App Development Services</h2>
            <div className="mt-10 space-y-6">
              {mobileDevelopmentServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  {s.href && (
                    <Link href={s.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f1a4e] hover:gap-2 transition-all">
                      Explore {s.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </MotionCard>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold text-[#0b1437]">Across native and cross-platform mobile projects, we work through the same core technical considerations:</p>
            <ul className="mt-4 space-y-2">
              {mobileCoreConsiderations.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="tech-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Web & Mobile Development Technology Stack</h2>
            <div className="mt-8 grid grid-cols-1 gap-4">
              {technologyStack.map((g) => (
                <div key={g.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{g.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{g.items}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{technologyClosing}</p>
          </div>
        </section>

        {/* Solutions We Build */}
        <section className="bg-slate-50 py-20" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="solutions-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Web & Mobile Solutions We Build</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {solutionsWeBuild.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f1a4e]" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20" aria-labelledby="process-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="process-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Web & Mobile Development Process</h2>
            <div className="mt-10 space-y-4">
              {pillarProcess.map(({ step, icon: Icon, title, desc }) => (
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

        {/* Why Choose */}
        <section className="bg-slate-50 py-20" aria-labelledby="why-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="why-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions?</h2>
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

        {/* Website vs Web App vs Mobile */}
        <section className="py-20" aria-labelledby="comparison-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="comparison-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{productComparison.title}</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{productComparison.website}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{productComparison.webApp}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{productComparison.mobileApp}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{productComparison.both}</p>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-slate-50 py-20" aria-labelledby="industries-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="industries-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Web & Mobile Development for Different Industries</h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industriesSection.map((ind) => (
                <div key={ind.industry} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#0b1437]">{ind.industry}</h3>
                  <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance, Security & Scalability */}
        <section className="py-20" aria-labelledby="perf-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="perf-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{performanceSecuritySection.title}</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {performanceSecuritySection.items.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-bold text-[#0b1437]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Application CTA */}
        <section className="bg-slate-50 py-20" aria-labelledby="custom-app-heading">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 id="custom-app-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{customApplicationSection.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{customApplicationSection.intro}</p>
            <p className="mt-6 text-left text-sm leading-relaxed text-slate-600">
              {customApplicationSection.softwareDevLink.before}
              <Link href={customApplicationSection.softwareDevLink.href} className="font-semibold text-[#0f1a4e] hover:underline">
                {customApplicationSection.softwareDevLink.text}
              </Link>
              {customApplicationSection.softwareDevLink.after}
              <Link href={customApplicationSection.uiUxLink.href} className="font-semibold text-[#0f1a4e] hover:underline">
                {customApplicationSection.uiUxLink.text}
              </Link>
              {customApplicationSection.uiUxLink.after}
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
              {customApplicationSection.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions About Web & Mobile Development</h2>
            <div className="mt-10 space-y-3">
              {pillarFaqs.map((f) => {
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
        <section className="pb-20" aria-labelledby="final-cta-heading">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14 bg-gradient-to-br from-[#0f1a4e] to-[#0c1440]">
              <h2 id="final-cta-heading" className="text-3xl font-extrabold md:text-4xl">{finalCta.headline}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80">{finalCta.body}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                  {finalCta.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  {finalCta.secondaryCta}
                </Link>
                <Link href={finalCta.contactLink.href} className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  {finalCta.contactLink.text}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
