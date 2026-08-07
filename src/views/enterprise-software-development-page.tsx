"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, X, Building2, ChevronRight, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import { filterProjects, getPortfolioPath } from "@/data/portfolio";
import { getServicePath, SOFTWARE_DEVELOPMENT_PILLAR_PATH } from "@/data/services-menu";
import {
  enterpriseSoftwareSeo,
  enterpriseSoftwareHero,
  whatIsEnterpriseSoftware,
  comparisonIntro,
  comparisonRows,
  enterpriseChallenges,
  enterpriseSoftwareServices,
  servicesCrossLinks,
  enterpriseSolutions,
  enterpriseSoftwareProcess,
  technologyGroups,
  industriesServed,
  securityPractices,
  securityCallout,
  whyChooseRunner,
  relatedServices,
  relatedSolutions,
  enterpriseSoftwareFaqs,
  finalCta,
} from "@/data/enterprise-software-development-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${enterpriseSoftwareSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: enterpriseSoftwareSeo.h1,
        description: enterpriseSoftwareSeo.description,
        url: pageUrl,
      },
      {
        "@type": "Service",
        name: "Enterprise Software Development",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        serviceType: "Enterprise Software Development",
        areaServed: "Worldwide",
        description: enterpriseSoftwareSeo.description,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: "Software Development", item: `${baseUrl}${SOFTWARE_DEVELOPMENT_PILLAR_PATH}` },
          { "@type": "ListItem", position: 4, name: "Enterprise Software Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: enterpriseSoftwareFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function FaqAnswer({ index, answer }: { index: number; answer: string }) {
  if (index === 1) {
    return (
      <p>
        Enterprise software typically involves greater scale, more complex integration across systems, larger user bases, and stricter compliance requirements than a standalone custom software project. Learn more on our{" "}
        <Link href={getServicePath("custom-software-development")} className="font-semibold text-[#0f1a4e] hover:underline">custom software development</Link> page.
      </p>
    );
  }
  if (index === 16) {
    return (
      <p>
        Yes. Our{" "}
        <Link href={getServicePath("software-consulting")} className="font-semibold text-[#0f1a4e] hover:underline">software consulting</Link> service is designed to help organizations evaluate this decision before committing to a development approach.
      </p>
    );
  }
  if (index === 27) {
    return (
      <p>
        Enterprise software development focuses on internal, organization-specific systems, while software product development is oriented toward building a product for external, market-facing use. Learn more on our{" "}
        <Link href={getServicePath("software-product-development")} className="font-semibold text-[#0f1a4e] hover:underline">software product development</Link> page.
      </p>
    );
  }
  return <p>{answer}</p>;
}

export default function EnterpriseSoftwareDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(enterpriseSoftwareFaqs[0]?.q ?? null);
  const portfolioPreview = filterProjects("erp-solutions").slice(0, 3);

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
              <Link href={SOFTWARE_DEVELOPMENT_PILLAR_PATH} className="hover:text-[#0f1a4e]">Software Development</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-[#0f1a4e]">Enterprise Software Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Building2 className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {enterpriseSoftwareSeo.h1}
                </h1>
                <p className="mt-4 text-lg font-semibold text-[#0f1a4e]">{enterpriseSoftwareHero.subheading}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{enterpriseSoftwareHero.valueProposition}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {enterpriseSoftwareHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a href="#process" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {enterpriseSoftwareHero.secondaryCta}
                  </a>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-slate-600">{enterpriseSoftwareHero.trustStatement}</p>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop"
                  alt="Enterprise software development team working on a large-scale system"
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is Enterprise Software */}
        <section className="py-20" aria-labelledby="what-is-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="what-is-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">What Is Enterprise Software Development?</h2>
            {whatIsEnterpriseSoftware.intro.map((p) => (
              <p key={p.slice(0, 40)} className="mt-5 text-[15px] leading-relaxed text-slate-700">{p}</p>
            ))}
            <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Business Value</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsEnterpriseSoftware.businessValue}</p>
            <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Enterprise Use Cases</h3>
            <ul className="mt-4 space-y-2">
              {whatIsEnterpriseSoftware.useCases.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f1a4e]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Benefits</h3>
            <ul className="mt-4 space-y-3">
              {whatIsEnterpriseSoftware.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Who Needs Enterprise Software?</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsEnterpriseSoftware.whoNeeds}</p>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-slate-50 py-20" aria-labelledby="comparison-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="comparison-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Enterprises Choose Custom Enterprise Software</h2>
            {comparisonIntro.map((p) => (
              <p key={p.slice(0, 40)} className="mt-5 text-[15px] leading-relaxed text-slate-700">{p}</p>
            ))}
            <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Enterprise Software vs. Off-the-Shelf Enterprise Solutions</h3>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="grid grid-cols-3 bg-[#0f1a4e] text-sm font-bold text-white">
                <div className="p-4">Factor</div>
                <div className="border-l border-white/10 p-4 text-center">Custom Enterprise Software</div>
                <div className="border-l border-white/10 p-4 text-center">Off-the-Shelf Enterprise</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.factor} className={`grid grid-cols-3 border-t border-slate-100 text-sm ${i % 2 ? "bg-white" : "bg-slate-50/60"}`}>
                  <div className="p-4 font-semibold text-[#0b1437]">{row.factor}</div>
                  <div className="flex items-start gap-2 border-l border-emerald-100 bg-emerald-50/40 p-4 text-emerald-900">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {row.custom}
                  </div>
                  <div className="flex items-start gap-2 border-l border-slate-100 p-4 text-slate-600">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                    {row.offTheShelf}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20" aria-labelledby="challenges-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="challenges-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Enterprise Challenges We Solve</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {enterpriseChallenges.items.map((item, i) => (
                <MotionCard key={item.title} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-[#0b1437]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </MotionCard>
              ))}
            </div>
            <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{enterpriseChallenges.intro}</p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-slate-50 py-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="services-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Enterprise Software Development Services</h2>
            <div className="mt-10 space-y-6">
              {enterpriseSoftwareServices.map((s) => (
                <article key={s.title} id={s.anchor} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
              {servicesCrossLinks.map((link) => (
                <p key={link.href}>
                  {link.before}
                  <Link href={link.href} className="font-semibold text-[#0f1a4e] hover:underline">{link.text}</Link>
                  {link.after}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-20" aria-labelledby="solutions-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="solutions-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Enterprise Solutions We Build</h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {enterpriseSolutions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f1a4e]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-slate-50 py-20" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="process-heading" className="text-center text-3xl font-extrabold text-[#0b1437] md:text-4xl">Enterprise Development Process</h2>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {enterpriseSoftwareProcess.map(({ icon: Icon, title, desc }, i) => (
                <MotionCard key={title} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ backgroundColor: NAVY }}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Step {i + 1}</p>
                  <h3 className="mt-1 font-bold text-[#0b1437]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="tech-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Technologies We Use</h2>
            <p className="mt-4 text-[15px] text-slate-600">Technology selection is driven by your existing environment, integration requirements, and scalability needs — not a fixed default stack applied to every enterprise engagement.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {technologyGroups.map((g) => (
                <div key={g.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{g.label}</h3>
                  <p className="mt-2 text-sm text-slate-700">{g.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-slate-50 py-20" aria-labelledby="industries-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="industries-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Industries We Serve</h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industriesServed.map((ind) => (
                <div key={ind.name} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-[#0b1437]">{ind.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20" aria-labelledby="security-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="security-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Enterprise Security & Compliance</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-700">
              Enterprise systems carry a different risk profile than smaller applications — larger user bases, more sensitive data, and stricter regulatory obligations. Security and compliance are built into our architecture decisions from the start, not layered on before launch.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {securityPractices.map((item, i) => (
                <MotionCard key={item.title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e]">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-bold text-[#0b1437]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </MotionCard>
              ))}
            </div>
            <blockquote className="mt-10 rounded-2xl border-l-4 border-[#0f1a4e] bg-slate-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{securityCallout.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{securityCallout.body}</p>
            </blockquote>
          </div>
        </section>

        {/* Why Choose */}
        <section className="bg-slate-50 py-20" aria-labelledby="why-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="why-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseRunner.map(({ icon: Icon, title, desc }, i) => (
                <MotionCard key={title} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#0b1437]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Template */}
        <section className="py-20" aria-labelledby="case-study-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="case-study-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Case Study Preview</h2>
            <article className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8">
              <div className="space-y-6 text-sm">
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[#0f1a4e]">Business Challenge</h3>
                  <p className="mt-2 italic text-slate-600">Describe the specific enterprise-scale problem the client faced — legacy modernization, system consolidation, compliance requirement, or similar. To be filled with a real, client-approved case study.</p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[#0f1a4e]">Solution</h3>
                  <p className="mt-2 italic text-slate-600">Describe the enterprise architecture and technology approach used to address the challenge.</p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[#0f1a4e]">Technology Stack</h3>
                  <p className="mt-2 italic text-slate-600">[e.g., .NET, Azure, PostgreSQL, Kubernetes]</p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[#0f1a4e]">Business Results</h3>
                  <p className="mt-2 italic text-slate-600">Real, verified outcome metrics only — confirmed by the client before publishing.</p>
                </div>
              </div>
              <Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a4e]">
                Read the Full Case Study <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
            <p className="mt-4 text-xs text-slate-500">Populate with a real, client-approved enterprise project before publishing invented metrics.</p>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="bg-slate-50 py-20" aria-labelledby="portfolio-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="portfolio-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Portfolio Preview</h2>
            <p className="mt-4 text-[15px] text-slate-600">Explore enterprise software projects we&apos;ve delivered — from legacy modernization initiatives to organization-wide system integrations.</p>
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
              View Our Enterprise Portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {enterpriseSoftwareFaqs.map((f, i) => {
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
                            <FaqAnswer index={i} answer={f.a} />
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

        {/* Related Services & Solutions */}
        <section className="bg-slate-50 py-20" aria-labelledby="related-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="related-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Related Services</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/20 hover:shadow-lg">
                  <h3 className="font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0f1a4e]">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
            <h3 className="mt-14 text-xl font-bold text-[#0b1437]">Related Solutions</h3>
            <p className="mt-2 text-sm text-slate-600">Looking for a specific enterprise system rather than a broader platform initiative?</p>
            <ul className="mt-6 space-y-4">
              {relatedSolutions.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="group block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-[#0f1a4e]/20 hover:shadow-lg">
                    <span className="font-semibold text-[#0f1a4e] group-hover:underline">{s.title}</span>
                    <span className="mt-1 block text-sm text-slate-600">{s.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20" aria-labelledby="final-cta-heading">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0c1440 100%)` }}>
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
