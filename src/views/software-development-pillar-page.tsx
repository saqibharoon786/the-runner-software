"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Terminal } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import { portfolioProjects, getPortfolioPath } from "@/data/portfolio";
import {
  softwareDevelopmentSeo,
  pillarHero,
  whatAreServices,
  pillarServices,
  industriesServed,
  solutionsWeBuild,
  pillarProcess,
  technologyGroups,
  whyChooseRunner,
  engagementModelsTable,
  engagementModelDetails,
  businessOutcomes,
  relatedServices,
  pillarFaqs,
  finalCta,
} from "@/data/software-development-pillar-page";
import { NAVY } from "@/lib/brand";

type FaqItem = (typeof pillarFaqs)[number];

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${softwareDevelopmentSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: softwareDevelopmentSeo.h1,
        description: softwareDevelopmentSeo.description,
        url: pageUrl,
      },
      {
        "@type": "Service",
        name: "Software Development Services",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        serviceType: "Software Development",
        areaServed: "Worldwide",
        description: softwareDevelopmentSeo.description,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Development Services",
          itemListElement: pillarServices.map((s) => ({
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
          { "@type": "ListItem", position: 3, name: "Software Development", item: pageUrl },
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

function FaqAnswer({ faq }: { faq: FaqItem }) {
  if (faq.links) {
    const [custom, enterprise] = faq.links;
    return (
      <p>
        Custom software development typically applies to a specific application or department, while enterprise software development addresses organization-wide, multi-department systems with greater integration and compliance complexity. See our{" "}
        <Link href={custom.href} className="font-semibold text-[#0f1a4e] hover:underline">{custom.text}</Link> and{" "}
        <Link href={enterprise.href} className="font-semibold text-[#0f1a4e] hover:underline">{enterprise.text}</Link> pages for details.
      </p>
    );
  }
  if (faq.link) {
    const parts = faq.a.split(faq.link.text);
    return (
      <p>
        {parts[0]}
        <Link href={faq.link.href} className="font-semibold text-[#0f1a4e] hover:underline">{faq.link.text}</Link>
        {parts[1] ?? ""}
      </p>
    );
  }
  return <p>{faq.a}</p>;
}

export default function SoftwareDevelopmentPillarPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(pillarFaqs[0]?.q ?? null);
  const portfolioPreview = portfolioProjects.slice(0, 3);

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
              <span className="text-[#0f1a4e]">Software Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Terminal className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {softwareDevelopmentSeo.h1}
                </h1>
                <p className="mt-4 text-lg font-semibold text-[#0f1a4e]">{pillarHero.subheading}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{pillarHero.supporting}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {pillarHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a href="#our-services" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {pillarHero.secondaryCta}
                  </a>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-slate-600">{pillarHero.trustStatement}</p>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
                  alt="Software development team delivering enterprise and custom software services"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Are Software Development Services */}
        <section className="py-20" aria-labelledby="definition-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="definition-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">What Are Software Development Services?</h2>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Definition</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{whatAreServices.definition}</p>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Business Value</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{whatAreServices.businessValue}</p>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Why Companies Invest in Software Development</h3>
            <ul className="mt-4 space-y-2">
              {whatAreServices.whyInvest.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f1a4e]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Benefits of Professional Software Development Services</h3>
            <ul className="mt-4 space-y-2">
              {whatAreServices.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-bold text-[#0b1437]">Types of Software</h3>
            <ul className="mt-4 space-y-2">
              {whatAreServices.softwareTypes.map((t) => (
                <li key={t} className="text-sm text-slate-700">{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Our Services */}
        <section id="our-services" className="bg-slate-50 py-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="services-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Software Development Services</h2>
            <p className="mt-4 text-[15px] text-slate-600">
              The Runner Software Solutions offers a structured range of services designed to meet businesses wherever they are in their technology journey.
            </p>
            <div className="mt-10 space-y-6">
              {pillarServices.map(({ icon: Icon, title, desc, href, cta }, i) => (
                <MotionCard key={title} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white" style={{ backgroundColor: NAVY }}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0b1437]">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                      <Link href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f1a4e] hover:gap-2 transition-all">
                        {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20" aria-labelledby="industries-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="industries-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Industries We Serve</h2>
            <p className="mt-4 text-[15px] text-slate-600">Software needs differ significantly by industry — in workflow structure, compliance requirements, and integration needs.</p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industriesServed.map((ind) => (
                <div key={ind.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-bold text-[#0b1437]">{ind.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions We Build */}
        <section className="bg-slate-50 py-20" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="solutions-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Solutions We Build</h2>
            <p className="mt-4 text-[15px] text-slate-600">Each shaped around the specific operational needs of the business commissioning it, not sold as a fixed template:</p>
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
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="process-heading" className="text-center text-3xl font-extrabold text-[#0b1437] md:text-4xl">Our Software Development Process</h2>
            <div className="relative mt-14 overflow-x-auto pb-4">
              <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-[#0f1a4e]/20 lg:block" aria-hidden="true" />
              <div className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-5 xl:grid-cols-10">
                {pillarProcess.map(({ icon: Icon, title, desc }, i) => (
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
            <p className="mx-auto mt-8 max-w-2xl text-center text-xs italic text-slate-500">
              Process diagram: Discovery through Continuous Improvement — a structured path from initial engagement to long-term evolution.
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-slate-50 py-20" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="tech-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Technologies We Use</h2>
            <p className="mt-4 text-[15px] text-slate-600">We select technologies based on project requirements and long-term maintainability — not a fixed default stack applied to every engagement.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {technologyGroups.map((g) => (
                <div key={g.label} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{g.label}</h3>
                  <p className="mt-2 text-sm text-slate-700">{g.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20" aria-labelledby="why-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="why-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions</h2>
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
          </div>
        </section>

        {/* Engagement Models */}
        <section className="bg-slate-50 py-20" aria-labelledby="engagement-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="engagement-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Software Development Engagement Models</h2>
            <p className="mt-4 text-[15px] text-slate-600">Choosing the right engagement model matters as much as choosing the right technology.</p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-[#0f1a4e] text-left text-white">
                    <th className="p-4 font-bold">Model</th>
                    <th className="p-4 font-bold">Best Suited For</th>
                    <th className="p-4 font-bold">Budget Predictability</th>
                    <th className="p-4 font-bold">Flexibility</th>
                  </tr>
                </thead>
                <tbody>
                  {engagementModelsTable.map((row, i) => (
                    <tr key={row.model} className={i % 2 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="p-4 font-semibold text-[#0b1437]">{row.model}</td>
                      <td className="p-4 text-slate-600">{row.bestFor}</td>
                      <td className="p-4 text-slate-600">{row.budget}</td>
                      <td className="p-4 text-slate-600">{row.flexibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {engagementModelDetails.map((m) => (
                <div key={m.title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#0b1437]">{m.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a4e] hover:underline">
                Not Sure Which Model Fits Your Project? Talk to Our Team <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Business Outcomes */}
        <section className="py-20" aria-labelledby="outcomes-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="outcomes-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Business Outcomes</h2>
            <p className="mt-4 text-[15px] text-slate-600">Software is only valuable to the extent it moves specific business metrics.</p>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {businessOutcomes.map(({ icon: Icon, title, desc }, i) => (
                <MotionCard key={title} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#0b1437]">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </MotionCard>
              ))}
            </div>
            <p className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-xs text-slate-500">
              Insert verified, client-approved metrics here — do not populate with illustrative or estimated numbers.
            </p>
          </div>
        </section>

        {/* Case Studies Template */}
        <section className="bg-slate-50 py-20" aria-labelledby="case-studies-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="case-studies-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Featured Case Studies</h2>
            <p className="mt-4 text-[15px] text-slate-600">How we approach real business challenges — starting with the underlying operational problem.</p>
            <article className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">[Case Study Title]</p>
              <dl className="mt-6 space-y-4 text-sm">
                <div><dt className="font-bold text-[#0b1437]">Challenge</dt><dd className="mt-1 italic text-slate-600">Brief description of the business problem.</dd></div>
                <div><dt className="font-bold text-[#0b1437]">Solution</dt><dd className="mt-1 italic text-slate-600">Brief description of the approach taken.</dd></div>
                <div><dt className="font-bold text-[#0b1437]">Result</dt><dd className="mt-1 italic text-slate-600">Real, verified outcome metric only.</dd></div>
              </dl>
              <Link href="/case-studies" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a4e]">
                Read the Full Case Study <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
            <Link href="/case-studies" className="mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: NAVY }}>
              Explore Our Full Case Study Library <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-20" aria-labelledby="portfolio-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="portfolio-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Portfolio Preview</h2>
            <p className="mt-4 text-[15px] text-slate-600">Custom applications, enterprise systems, and product builds across industries.</p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {portfolioPreview.map((project) => (
                <Link key={project.slug} href={getPortfolioPath(project.slug)} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0f1a4e]">{project.industry} · {project.country}</p>
                  <h3 className="mt-2 font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{project.shortDescription}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">{t}</span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0f1a4e]">View Project <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
            <Link href="/#portfolio" className="mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: NAVY }}>
              View Our Full Portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50 py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
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
                          <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                            <FaqAnswer faq={f} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20" aria-labelledby="related-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="related-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Related Services</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/20 hover:shadow-lg">
                  <h3 className="font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0f1a4e]">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20" aria-labelledby="final-cta-heading">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14 bg-gradient-to-br from-[#0f1a4e] to-[#0c1440]">
              <h2 id="final-cta-heading" className="text-3xl font-extrabold md:text-4xl">{finalCta.headline}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75">{finalCta.body}</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                {finalCta.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
