// components/service-page-renderer.tsx
"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, X, Code2, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import { filterProjects, getPortfolioPath } from "@/data/portfolio";
import { getServicePath, SOFTWARE_DEVELOPMENT_PILLAR_PATH } from "@/data/services-menu";
import { NAVY } from "@/lib/brand";

// ============================================
// TYPES
// ============================================

type ProcessItem = {
  desc: string;
  icon?: React.ComponentType<{ className?: string }>;
  title?: string;
  step?: string;
};

type ProcessStep = ProcessItem | string;

type WhyChooseItem =
  | string
  | {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      desc: string;
    };

type ComparisonRow = {
  factor: string;
  custom: string;
  offTheShelf?: string;
  ready?: string;
};

type SectionIntro = string | string[];

export type ServicePageData = {
  seo: {
    title: string;
    description: string;
    h1: string;
    canonicalPath: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterTitle?: string;
    twitterDescription?: string;
  };
  hero: {
    subheading: string;
    valueProposition: string;
    primaryCta: string;
    secondaryCta: string;
    trustStatement: string;
  };
  whatIs?: {
    heading?: string;
    intro?: SectionIntro;
    benefits?: string[];
    businessValue?: string;
    whoNeeds?: string[];
    components?: string[];
    closing?: string;
  };
  comparison?: {
    heading?: string;
    intro?: SectionIntro;
    rows?: ComparisonRow[];
    closing?: string;
  };
  problems?: {
    intro?: string;
    items?: Array<{
      title: string;
      desc: string;
    }>;
    closing?: string;
  };
  services: Array<{
    title: string;
    desc: string;
    anchor?: string;
  }>;
  servicesCrossLinks?: Array<{
    before: string;
    text: string;
    href: string;
    after: string;
  }>;
  softwareTypes?: string[];
  process?: ProcessStep[];
  technologyGroups?: Array<{
    label: string;
    items: string;
  }>;
  industriesServed?: Array<{
    name: string;
    desc: string;
  }>;
  whyChooseRunner?: WhyChooseItem[];
  relatedServices?: Array<{
    title: string;
    desc: string;
    href: string;
  }>;
  relatedSolutions?: Array<{
    title: string;
    desc: string;
    href: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
  finalCta: {
    headline: string;
    body: string;
    cta: string;
  };
  category: string;
  pillarPath?: string;
  portfolioCategory?: string;
};

type ServicePageRendererProps = {
  pageData: ServicePageData;
  slug: string;
  customFaqAnswer?: (index: number, answer: string) => ReactNode;
};

// ============================================
// SCHEMA COMPONENT
// ============================================

function PageSchema({ pageData }: { pageData: ServicePageData }) {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${pageData.seo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: pageData.seo.h1,
        description: pageData.seo.description,
        url: pageUrl,
      },
      {
        "@type": "Service",
        name: pageData.seo.title,
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        serviceType: pageData.seo.title,
        areaServed: ["United States", "Canada"],
        description: pageData.seo.description,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: pageData.seo.title,
          itemListElement: pageData.services.map((s) => ({
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
          { "@type": "ListItem", position: 3, name: pageData.category, item: `${baseUrl}/${pageData.pillarPath || "#services"}` },
          { "@type": "ListItem", position: 4, name: pageData.seo.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: pageData.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// ============================================
// FAQ ANSWER COMPONENT
// ============================================

function FaqAnswer({ 
  index, 
  answer, 
  customFaqAnswer 
}: { 
  index: number; 
  answer: string; 
  customFaqAnswer?: (index: number, answer: string) => ReactNode;
}) {
  if (customFaqAnswer) {
    return <>{customFaqAnswer(index, answer)}</>;
  }
  return <p>{answer}</p>;
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function ServicePageRenderer({ pageData, slug, customFaqAnswer }: ServicePageRendererProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(pageData.faqs[0]?.q ?? null);
  const portfolioCategory = pageData.portfolioCategory || slug;
  const portfolioPreview = filterProjects(portfolioCategory as any).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <PageSchema pageData={pageData} />
      <SiteHeader />

      <main>
        {/* ============================================
            HERO SECTION
            ============================================ */}
        <section className="relative overflow-hidden border-b border-slate-100" aria-labelledby="page-heading">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs font-medium text-slate-500">
              <Link href="/" className="hover:text-[#0f1a4e]">Home</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href="/#services" className="hover:text-[#0f1a4e]">Services</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href={pageData.pillarPath || "/#services"} className="hover:text-[#0f1a4e]">
                {pageData.category}
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-[#0f1a4e]">{pageData.seo.title}</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Code2 className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {pageData.seo.h1}
                </h1>
                <p className="mt-4 text-lg font-semibold text-[#0f1a4e]">{pageData.hero.subheading}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{pageData.hero.valueProposition}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {pageData.hero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a href="#process" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {pageData.hero.secondaryCta}
                  </a>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-slate-600">{pageData.hero.trustStatement}</p>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
                  alt={`${pageData.seo.title} team collaborating on a project`}
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================
            WHAT IS SECTION
            ============================================ */}
        {pageData.whatIs && (
          <section className="py-20" aria-labelledby="what-is-heading">
            <div className="mx-auto max-w-3xl px-6">
              <h2 id="what-is-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">
                {pageData.whatIs.heading || `What Is ${pageData.seo.title}?`}
              </h2>
              
              {pageData.whatIs.intro && (Array.isArray(pageData.whatIs.intro) ? pageData.whatIs.intro : [pageData.whatIs.intro]).map((p) => (
                <p key={p.slice(0, 40)} className="mt-5 text-[15px] leading-relaxed text-slate-700">{p}</p>
              ))}

              {pageData.whatIs.components && (
                <ul className="mt-4 space-y-3">
                  {pageData.whatIs.components.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {pageData.whatIs.benefits && (
                <>
                  <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Benefits of {pageData.seo.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {pageData.whatIs.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {pageData.whatIs.businessValue && (
                <>
                  <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Business Value</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{pageData.whatIs.businessValue}</p>
                </>
              )}

              {pageData.whatIs.whoNeeds && (
                <>
                  <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Who Needs {pageData.seo.title}?</h3>
                  <ul className="mt-4 space-y-2">
                    {pageData.whatIs.whoNeeds.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f1a4e]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {pageData.whatIs.closing && (
                <p className="mt-5 text-[15px] leading-relaxed text-slate-700">{pageData.whatIs.closing}</p>
              )}
            </div>
          </section>
        )}

        {/* ============================================
            COMPARISON SECTION
            ============================================ */}
        {pageData.comparison && (
          <section className="bg-slate-50 py-20" aria-labelledby="comparison-heading">
            <div className="mx-auto max-w-5xl px-6">
              <h2 id="comparison-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">
                {pageData.comparison.heading || "Comparison"}
              </h2>
              {pageData.comparison.intro && (Array.isArray(pageData.comparison.intro) ? pageData.comparison.intro : [pageData.comparison.intro]).map((p) => (
                <p key={p.slice(0, 40)} className="mt-5 text-[15px] leading-relaxed text-slate-700">{p}</p>
              ))}
              
              {pageData.comparison.rows && (
                <>
                  <h3 className="mt-10 text-xl font-bold text-[#0b1437]">Comparison Table</h3>
                  <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <div className="grid grid-cols-3 bg-[#0f1a4e] text-sm font-bold text-white">
                      <div className="p-4">Factor</div>
                      <div className="border-l border-white/10 p-4 text-center">Custom</div>
                      <div className="border-l border-white/10 p-4 text-center">Off-the-Shelf</div>
                    </div>
                    {pageData.comparison.rows.map((row, i) => (
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
                </>
              )}

              {pageData.comparison.closing && (
                <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{pageData.comparison.closing}</p>
              )}
            </div>
          </section>
        )}

        {/* ============================================
            PROBLEMS SECTION
            ============================================ */}
        {pageData.problems && (
          <section className="py-20" aria-labelledby="problems-heading">
            <div className="mx-auto max-w-5xl px-6">
              <h2 id="problems-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Problems We Solve</h2>
              {pageData.problems.intro && (
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-700">{pageData.problems.intro}</p>
              )}
              {pageData.problems.items && (
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {pageData.problems.items.map((item, i) => (
                    <MotionCard key={item.title} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="font-bold text-[#0b1437]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </MotionCard>
                  ))}
                </div>
              )}
              {pageData.problems.closing && (
                <p className="mt-8 text-[15px] leading-relaxed text-slate-700">{pageData.problems.closing}</p>
              )}
            </div>
          </section>
        )}

        {/* ============================================
            SERVICES SECTION
            ============================================ */}
        <section id="services" className="bg-slate-50 py-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="services-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">
              Our {pageData.seo.title} Services
            </h2>
            <div className="mt-10 space-y-6">
              {pageData.services.map((s, i) => (
                <article key={s.title} id={s.anchor} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </article>
              ))}
            </div>
            {pageData.servicesCrossLinks && (
              <div className="mt-8 space-y-3 text-sm leading-relaxed text-slate-700">
                {pageData.servicesCrossLinks.map((link) => (
                  <p key={link.href}>
                    {link.before}
                    <Link href={link.href} className="font-semibold text-[#0f1a4e] hover:underline">{link.text}</Link>
                    {link.after}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============================================
            SOFTWARE TYPES SECTION
            ============================================ */}
        {pageData.softwareTypes && (
          <section className="py-20" aria-labelledby="types-heading">
            <div className="mx-auto max-w-5xl px-6">
              <h2 id="types-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Types of Software We Build</h2>
              <p className="mt-4 text-[15px] text-slate-600">Our teams have experience building systems across a range of business functions and industry-specific applications, including:</p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {pageData.softwareTypes.map((type) => (
                  <li key={type} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f1a4e]" aria-hidden="true" />
                    {type}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-600">Each of these is built as a genuinely custom system shaped by your specific operational requirements, not a repackaged template.</p>
            </div>
          </section>
        )}

        {/* ============================================
            PROCESS SECTION
            ============================================ */}
        {pageData.process && (
          <section id="process" className="bg-slate-50 py-20" aria-labelledby="process-heading">
            <div className="mx-auto max-w-7xl px-6">
              <h2 id="process-heading" className="text-center text-3xl font-extrabold text-[#0b1437] md:text-4xl">
                Our {pageData.seo.title} Process
              </h2>
              <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {pageData.process.map((item, i) => {
                  const isString = typeof item === "string";
                  const Icon = isString ? undefined : item.icon;
                  const title = isString ? undefined : item.title;
                  const step = isString ? undefined : item.step;
                  const desc = isString ? item : item.desc;

                  return (
                    <MotionCard key={title || step || i} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ backgroundColor: NAVY }}>
                        {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : <span className="text-sm font-bold">{step ?? "#"}</span>}
                      </div>
                      <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Step {i + 1}</p>
                      {title && <h3 className="mt-1 font-bold text-[#0b1437]">{title}</h3>}
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                    </MotionCard>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============================================
            TECHNOLOGIES SECTION
            ============================================ */}
        {pageData.technologyGroups && (
          <section className="py-20" aria-labelledby="tech-heading">
            <div className="mx-auto max-w-5xl px-6">
              <h2 id="tech-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Technologies We Use</h2>
              <p className="mt-4 text-[15px] text-slate-600">We select technologies based on project requirements, long-term maintainability, and your existing technical environment — not by defaulting to a single stack for every client.</p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pageData.technologyGroups.map((g) => (
                  <div key={g.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">{g.label}</h3>
                    <p className="mt-2 text-sm text-slate-700">{g.items}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-600">We also work with microservices architecture where system complexity and independent scalability requirements justify it, alongside API integration work connecting to third-party platforms and internal systems.</p>
            </div>
          </section>
        )}

        {/* ============================================
            INDUSTRIES SECTION
            ============================================ */}
        {pageData.industriesServed && (
          <section className="bg-slate-50 py-20" aria-labelledby="industries-heading">
            <div className="mx-auto max-w-5xl px-6">
              <h2 id="industries-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Industries We Serve</h2>
              <p className="mt-4 text-[15px] text-slate-600">Every industry brings its own regulatory, workflow, and integration requirements. Our teams bring industry-informed context to each engagement:</p>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pageData.industriesServed.map((ind) => (
                  <div key={ind.name} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-[#0b1437]">{ind.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================
            WHY CHOOSE SECTION
            ============================================ */}
        {pageData.whyChooseRunner && (
          <section className="py-20" aria-labelledby="why-heading">
            <div className="mx-auto max-w-5xl px-6">
              <h2 id="why-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions</h2>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {pageData.whyChooseRunner.map((item, i) => {
                  const isString = typeof item === "string";
                  const title = isString ? item : item.title;
                  const desc = isString ? item : item.desc;
                  const Icon = !isString ? item.icon : undefined;

                  return (
                    <MotionCard key={title || i} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e]">
                        {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : <span className="text-sm font-bold">{i + 1}</span>}
                      </div>
                      <h3 className="mt-4 font-bold text-[#0b1437]">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                    </MotionCard>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============================================
            CASE STUDY TEMPLATE
            ============================================ */}
        <section className="bg-slate-50 py-20" aria-labelledby="case-study-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="case-study-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Case Study Preview</h2>
            <article className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8">
              <div className="space-y-6 text-sm">
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[#0f1a4e]">Business Challenge</h3>
                  <p className="mt-2 italic text-slate-600">Describe the specific operational problem the client faced — to be filled with a real, client-approved case study.</p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[#0f1a4e]">Solution</h3>
                  <p className="mt-2 italic text-slate-600">Describe the solution built, including key architecture or technology decisions.</p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[#0f1a4e]">Technology Stack</h3>
                  <p className="mt-2 italic text-slate-600">[e.g., React, Node.js, PostgreSQL, AWS]</p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-[#0f1a4e]">Business Results</h3>
                  <p className="mt-2 italic text-slate-600">Real, verified outcome metrics only — confirmed by the client.</p>
                </div>
              </div>
              <Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a4e]">
                Read the Full Case Study <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
            <p className="mt-4 text-xs text-slate-500">Populate with a real, client-approved project before publishing invented metrics.</p>
          </div>
        </section>

        {/* ============================================
            PORTFOLIO PREVIEW
            ============================================ */}
        <section className="py-20" aria-labelledby="portfolio-heading">
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="portfolio-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Portfolio Preview</h2>
            <p className="mt-4 text-[15px] text-slate-600">Explore a selection of the systems we&apos;ve built for clients across industries.</p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {portfolioPreview.length > 0 ? (
                portfolioPreview.map((project) => (
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
                ))
              ) : (
                <p className="col-span-3 text-center text-sm text-slate-500">Portfolio items coming soon.</p>
              )}
            </div>
            <Link href="/#portfolio" className="mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: NAVY }}>
              View Our Full Portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ============================================
            FAQ SECTION
            ============================================ */}
        <section id="faq" className="bg-slate-50 py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="faq-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {pageData.faqs.map((f, i) => {
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
                            <FaqAnswer index={i} answer={f.a} customFaqAnswer={customFaqAnswer} />
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

        {/* ============================================
            RELATED SERVICES & SOLUTIONS
            ============================================ */}
        {(pageData.relatedServices || pageData.relatedSolutions) && (
          <section className="py-20" aria-labelledby="related-heading">
            <div className="mx-auto max-w-5xl px-6">
              {pageData.relatedServices && (
                <>
                  <h2 id="related-heading" className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Related Services</h2>
                  <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {pageData.relatedServices.map((s) => (
                      <Link key={s.href} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0f1a4e]/20 hover:shadow-lg">
                        <h3 className="font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{s.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0f1a4e]">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {pageData.relatedSolutions && (
                <>
                  <h3 className="mt-14 text-xl font-bold text-[#0b1437]">Related Solutions</h3>
                  <ul className="mt-6 space-y-4">
                    {pageData.relatedSolutions.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="group block rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-[#0f1a4e]/20 hover:bg-white">
                          <span className="font-semibold text-[#0f1a4e] group-hover:underline">{s.title}</span>
                          <span className="mt-1 block text-sm text-slate-600"> — {s.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>
        )}

        {/* ============================================
            FINAL CTA
            ============================================ */}
        <section className="py-20" aria-labelledby="final-cta-heading">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0c1440 100%)` }}>
              <h2 id="final-cta-heading" className="text-3xl font-extrabold md:text-4xl">{pageData.finalCta.headline}</h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75">{pageData.finalCta.body}</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                {pageData.finalCta.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}