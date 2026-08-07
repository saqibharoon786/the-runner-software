"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionSection, MotionCard } from "@/components/home/motion";
import { TechLogo, techStackTabs } from "@/components/home/tech-logos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  heroContent,
  whyChooseUs,
  homeServices,
  homeIndustries,
  developmentProcess,
  trustSection,
  businessOutcomes,
  engagementModels,
  faqCategories,
  homeFaqs,
  footerLinks,
  type FaqCategory,
} from "@/data/home-page-content";
import {
  getFeaturedArticles,
  getPopularArticles,
  getLatestArticles,
  getBlogArticlePath,
  getCategoryBySlug,
} from "@/data/blog";
import {
  ChevronDown,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  FolderCheck,
  Code2,
  UsersRound,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Search,
  Clock,
  Star,
  Quote,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import { SiteHeader } from "@/components/layout/site-header";
import { BrandLogo } from "@/components/layout/brand-logo";
import { PortfolioSection } from "@/components/portfolio/portfolio-section";
import { NAVY_FOOTER } from "@/lib/brand";

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(homeFaqs[0]?.question ?? null);
  const [faqSearch, setFaqSearch] = useState("");
  const [faqCategory, setFaqCategory] = useState<FaqCategory | "All">("All");
  const [showStickyCta, setShowStickyCta] = useState(false);

  const featuredArticles = getFeaturedArticles();
  const popularArticles = getPopularArticles().slice(0, 4);
  const latestArticles = getLatestArticles(6);

  const filteredFaqs = useMemo(() => {
    const q = faqSearch.toLowerCase().trim();
    return homeFaqs.filter((f) => {
      const matchesCategory = faqCategory === "All" || f.category === faqCategory;
      const matchesSearch =
        !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q) || f.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [faqSearch, faqCategory]);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <FaqSchema />
      <SiteHeader />

      {/* 1. Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-10 pb-24 lg:grid-cols-2 lg:pb-32">
          <MotionSection className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
              <span aria-hidden="true">🚀</span> {heroContent.trustLine}
            </span>
            <h1 id="hero-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl lg:text-6xl">
              {heroContent.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600">{heroContent.supporting}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0f1a4e] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#0f1a4e]/30 transition hover:-translate-y-0.5 hover:bg-[#0c1440]"
              >
                {heroContent.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f1a4e] text-white">
                  <Briefcase className="h-3 w-3" aria-hidden="true" />
                </span>
                {heroContent.secondaryCta}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-slate-700">
              {heroContent.enterpriseTrust.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden="true" />
                  {f}
                </div>
              ))}
            </div>
          </MotionSection>
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src={dashboardHero.src}
              alt="The Runner Software Solutions enterprise dashboard and analytics platform preview"
              width={1408}
              height={1008}
              loading="eager"
              fetchPriority="high"
              className="relative z-10 w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 80" className="block h-16 w-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z" fill="#0f1a4e" />
          </svg>
        </div>

        {/* Stats bar */}
        <div className="relative bg-gradient-to-r from-[#0f1a4e] to-[#0c1440]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
            {[
              { icon: Code2, num: heroContent.metrics[0].value, label: heroContent.metrics[0].label, bg: "bg-purple-500/90" },
              { icon: FolderCheck, num: heroContent.metrics[1].value, label: heroContent.metrics[1].label, bg: "bg-green-500/90" },
              { icon: UsersRound, num: heroContent.metrics[2].value, label: heroContent.metrics[2].label, bg: "bg-white/15" },
              { icon: Star, num: heroContent.metrics[3].value, label: heroContent.metrics[3].label, bg: "bg-yellow-500/90" },
            ].map(({ icon: Icon, num, label, bg }) => (
              <div key={label} className="flex items-center gap-4 text-white">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <div className="text-3xl font-extrabold leading-none">{num}</div>
                  <div className="mt-1 text-sm font-semibold">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24" aria-labelledby="why-choose-heading">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-2xl text-center">
            <h2 id="why-choose-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">{whyChooseUs.headline}</h2>
            <p className="mt-4 text-[15px] text-slate-600">{whyChooseUs.subheadline}</p>
          </MotionSection>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.cards.map(({ icon: Icon, title, desc }, i) => (
              <MotionCard
                key={title}
                delay={i * 0.05}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/30 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f1a4e]/10 text-[#0f1a4e] transition group-hover:bg-[#0f1a4e] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#0b1437]">✔ {title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="bg-slate-50 py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">
              Software Development Services Built Around Business Outcomes
            </h2>
            <p className="mt-4 text-[15px] text-slate-600">From custom builds to enterprise-scale systems — engineered to solve real problems.</p>
          </div>
          <div className="mt-16 space-y-8">
            {homeServices.map(({ icon: Icon, title, desc, outcome, href }, i) => {
              const reversed = i % 2 === 1;
              return (
                <MotionCard
                  key={title}
                  delay={i * 0.04}
                  className={`group flex flex-col gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/20 hover:shadow-xl lg:flex-row lg:items-center ${reversed ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f1a4e] to-[#3550c4] text-white shadow-lg transition group-hover:scale-105">
                    <Icon className="h-9 w-9" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0b1437]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                    <p className="mt-3 text-sm font-semibold text-[#0f1a4e]">
                      <span className="font-bold text-slate-500">Business outcome:</span> {outcome}
                    </p>
                    <Link href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f1a4e] transition group-hover:gap-2">
                      Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Technology Stack */}
      <section id="technologies" className="py-24" aria-labelledby="tech-heading">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-2xl text-center">
            <h2 id="tech-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">Technology Expertise Across the Full Stack</h2>
            <p className="mt-4 text-[15px] text-slate-600">The right technology for the job — not the trend.</p>
          </MotionSection>
          <TooltipProvider delayDuration={200}>
            <Tabs defaultValue="frontend" className="mt-14">
              <TabsList className="mx-auto flex h-auto w-full max-w-4xl flex-wrap justify-center gap-1 bg-slate-100 p-2">
                {techStackTabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id} className="rounded-lg px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#0f1a4e] data-[state=active]:text-white">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {techStackTabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-8">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {tab.items.map((tech) => (
                      <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                          <motion.div whileHover={{ y: -4 }} className="flex cursor-default flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0f1a4e]/25 hover:shadow-lg">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50">
                              <TechLogo tech={tech} size="lg" />
                            </div>
                            <span className="text-sm font-semibold text-[#0b1437]">{tech.name}</span>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs bg-[#0f1a4e] text-white">
                          <p className="font-semibold">{tech.name}</p>
                          <p className="mt-1 text-white/80">{tech.note}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </TooltipProvider>
        </div>
      </section>

      {/* 5. Industries */}
      <section id="industries" className="bg-slate-50 py-24" aria-labelledby="industries-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="industries-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">Industry Solutions Built Around Real Operational Needs</h2>
            <p className="mt-4 text-[15px] text-slate-600">Software shaped by the workflows, compliance, and constraints of your sector.</p>
          </div>
          <div className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {homeIndustries.map((ind) => (
              <article key={ind.slug} className="w-[320px] shrink-0 snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-bold text-[#0b1437]">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{ind.desc}</p>
                {ind.projectsDelivered && (
                  <p className="mt-3 text-xs font-semibold text-slate-500">Projects Delivered: {ind.projectsDelivered}</p>
                )}
                <p className="mt-3 text-sm text-[#0f1a4e]">
                  <span className="font-bold text-slate-500">Business outcome:</span> {ind.outcome}
                </p>
                <Link href={`/industries/${ind.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0f1a4e]">
                  View Industry <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Portfolio */}
      <PortfolioSection />

      {/* 7. Case Studies — template */}
      <section id="case-studies" className="py-24" aria-labelledby="case-studies-heading">
        <div className="mx-auto max-w-4xl px-6">
          <MotionSection className="mx-auto max-w-2xl text-center">
            <h2 id="case-studies-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">
              Case Studies: Engineering Solutions to Real Business Problems
            </h2>
            <p className="mt-4 text-[15px] text-slate-600">How we translate technical execution into measurable outcomes.</p>
          </MotionSection>
          <div className="relative mt-16">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0f1a4e]/30 via-[#0f1a4e]/20 to-transparent" aria-hidden="true" />
            <article className="relative ml-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8">
              <div className="absolute -left-[3.25rem] top-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f1a4e] text-white">
                <FileText className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Template — populate with client-approved data</p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">Challenge</h3>
                  <p className="mt-2 text-sm italic text-slate-600">Describe the business problem the client faced — operational, technical, or growth-related.</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">Solution</h3>
                  <p className="mt-2 text-sm italic text-slate-600">Describe the approach: architecture, technology, methodology.</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f1a4e]">Results</h3>
                  <ul className="mt-2 space-y-1 text-sm italic text-slate-600">
                    <li>Metric 1 — e.g., verified improvement from project data</li>
                    <li>Metric 2 — e.g., verified reduction in manual work</li>
                    <li>Metric 3 — e.g., verified cost reduction</li>
                  </ul>
                </div>
              </div>
              <Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a4e]">
                View Full Case Study <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
            <p className="mt-6 text-center text-xs text-slate-500">
              Case study metrics must come from actual project data with client sign-off before publishing.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Development Process */}
      <section className="bg-slate-50 py-24" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="process-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">{developmentProcess.headline}</h2>
            <p className="mt-4 text-[15px] text-slate-600">{developmentProcess.subheadline}</p>
          </div>
          <div className="relative mt-16 overflow-x-auto pb-4">
            <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-[#0f1a4e]/20 lg:block" aria-hidden="true" />
            <div className="flex min-w-max gap-6 lg:min-w-0 lg:grid lg:grid-cols-7">
              {developmentProcess.steps.map(({ icon: Icon, title, desc, timeline, deliverables, output }, i) => (
                <div key={title} className="w-52 shrink-0 text-center lg:w-auto">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0f1a4e] to-[#3550c4] text-white shadow-lg">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">Step {i + 1}</div>
                  <h3 className="mt-1 text-sm font-bold text-[#0b1437]">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                  <dl className="mt-3 space-y-1 text-left text-[10px] text-slate-500">
                    <div><dt className="font-bold uppercase">Timeline</dt><dd>{timeline}</dd></div>
                    <div><dt className="font-bold uppercase">Deliverables</dt><dd>{deliverables}</dd></div>
                    <div><dt className="font-bold uppercase">Output</dt><dd>{output}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials — template */}
      <section id="testimonials" className="relative overflow-hidden py-24 bg-[#0f1a4e]" aria-labelledby="testimonials-heading">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 id="testimonials-heading" className="text-4xl font-extrabold text-white md:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-[15px] text-white/70">Feedback from the businesses we&apos;ve partnered with.</p>
          <article className="mt-12 rounded-2xl border border-dashed border-white/30 bg-white/5 p-10 text-left backdrop-blur-sm">
            <div className="flex gap-1 text-yellow-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <Quote className="mt-6 h-8 w-8 text-white/30" aria-hidden="true" />
            <blockquote className="mt-4 text-sm italic leading-relaxed text-white/80">
              &ldquo;Real client quote, collected with permission.&rdquo;
            </blockquote>
            <footer className="mt-8 border-t border-white/10 pt-6 text-sm text-white/70">
              <p className="font-bold text-white">[Client Name], [Title] at [Company Name]</p>
              <p className="mt-1">🌍 [Country] · Project: [Project Type]</p>
            </footer>
          </article>
          <p className="mt-6 text-xs text-white/50">Collect 6–10 real testimonials with client permission before publishing.</p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className="py-28" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-6">
          <MotionSection className="mx-auto max-w-2xl text-center">
            <h2 id="faq-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-[15px] text-slate-600">Answers to common questions from businesses evaluating a software development partner.</p>
          </MotionSection>

          <div className="relative mt-10">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search FAQs..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              aria-label="Search FAQs"
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm shadow-sm focus:border-[#0f1a4e]/40 focus:outline-none focus:ring-2 focus:ring-[#0f1a4e]/10"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
            <button
              type="button"
              role="tab"
              aria-selected={faqCategory === "All"}
              onClick={() => setFaqCategory("All")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${faqCategory === "All" ? "bg-[#0f1a4e] text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-[#0f1a4e]/30"}`}
            >
              All
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={faqCategory === cat}
                onClick={() => setFaqCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${faqCategory === cat ? "bg-[#0f1a4e] text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-[#0f1a4e]/30"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-3" role="list">
            {filteredFaqs.length === 0 ? (
              <p className="text-center text-sm text-slate-500">No FAQs match your search.</p>
            ) : (
              filteredFaqs.map((f) => {
                const isOpen = openFaq === f.question;
                return (
                  <motion.div key={f.question} role="listitem" layout className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? "border-[#0f1a4e]/30 bg-white shadow-lg" : "border-slate-200 bg-white hover:border-slate-300"}`}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : f.question)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                      <span className="text-base font-bold text-[#0b1437]">{f.question}</span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-[#0f1a4e] text-white" : "bg-slate-100 text-[#0f1a4e]"}`}>
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{f.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* 11. Knowledge Center */}
      <section id="blog" className="bg-slate-50 py-28" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-2xl text-center">
            <h2 id="blog-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">Knowledge Center</h2>
            <p className="mt-4 text-[15px] text-slate-600">Insights on software development, AI, cloud, and digital transformation.</p>
          </MotionSection>

          {featuredArticles[0] && (
            <MotionCard delay={0.05} className="mt-14">
              <Link href={getBlogArticlePath(featuredArticles[0].slug)} className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:shadow-xl lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img src={featuredArticles[0].image} alt={featuredArticles[0].title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#0f1a4e] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Featured</span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0f1a4e]">{getCategoryBySlug(featuredArticles[0].categorySlug)?.title}</span>
                  <h3 className="mt-3 text-2xl font-extrabold text-[#0b1437] group-hover:text-[#0f1a4e]">{featuredArticles[0].title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{featuredArticles[0].excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
                    <span>{featuredArticles[0].author.name}</span>
                    <span>·</span>
                    <time dateTime={featuredArticles[0].publishDateIso}>{featuredArticles[0].publishDate}</time>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{featuredArticles[0].readingTime}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a4e]">Read Article <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                </div>
              </Link>
            </MotionCard>
          )}

          {popularArticles.length > 0 && (
            <div className="mt-16">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">Popular Articles</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {popularArticles.map((b, i) => (
                  <BlogCard key={b.slug} article={b} delay={i * 0.04} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">Latest Articles</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((b, i) => (
                <BlogCard key={b.slug} article={b} delay={i * 0.04} />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-lg bg-[#0f1a4e] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0c1440]">
              Explore the Knowledge Center <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Trust Section */}
      <section className="border-y border-slate-100 py-24" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-7xl px-6">
          <MotionSection className="mx-auto max-w-2xl text-center">
            <h2 id="trust-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">{trustSection.headline}</h2>
            <p className="mt-4 text-[15px] text-slate-600">{trustSection.subheadline}</p>
          </MotionSection>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {trustSection.items.map(({ icon: Icon, title, desc }, i) => (
              <MotionCard key={title} delay={i * 0.04} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f1a4e] text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0b1437]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Business Outcomes */}
      <section className="bg-gradient-to-br from-[#0f1a4e]/5 via-slate-50 to-[#3550c4]/5 py-24" aria-labelledby="outcomes-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="outcomes-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">{businessOutcomes.headline}</h2>
            <p className="mt-4 text-[15px] text-slate-600">{businessOutcomes.subheadline}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {businessOutcomes.items.map(({ icon: Icon, title, desc }, i) => (
              <MotionCard key={title} delay={i * 0.05} className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f1a4e]/10 text-[#0f1a4e]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-bold text-[#0b1437]">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Engagement Models */}
      <section className="py-24" aria-labelledby="engagement-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="engagement-heading" className="text-4xl font-extrabold text-[#0b1437] md:text-5xl">{engagementModels.headline}</h2>
            <p className="mt-4 text-[15px] text-slate-600">{engagementModels.subheadline}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.models.map((model) => (
              <div
                key={model.title}
                className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${model.recommended ? "border-[#0f1a4e] bg-[#0f1a4e]/5 ring-2 ring-[#0f1a4e]/20" : "border-slate-200 bg-white"}`}
              >
                {model.recommended && (
                  <span className="rounded-full bg-[#0f1a4e] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Recommended</span>
                )}
                <h3 className={`font-bold text-[#0b1437] ${model.recommended ? "mt-3" : ""}`}>{model.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{model.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-[#0f1a4e] px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-[#0f1a4e] hover:text-white">
              {engagementModels.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-slate-50 py-20" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-5xl px-6">
          <MotionSection variant="scale" className="overflow-hidden rounded-3xl p-10 text-white shadow-2xl md:p-14 bg-gradient-to-br from-[#0f1a4e] to-[#0c1440]">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="cta-heading" className="text-3xl font-extrabold md:text-4xl">Book a Free Consultation</h2>
              <p className="mt-4 text-sm text-white/70">Tell us about your project and we will follow up with a scoped proposal aligned to your goals.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* 15. Footer */}
      <footer style={{ backgroundColor: NAVY_FOOTER }} className="text-white/80" role="contentinfo">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-2">
              <BrandLogo asLink={false} />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
                Enterprise software development for businesses worldwide — custom builds, cloud, AI, and long-term support.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden="true" /> [Email]</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden="true" /> [Phone]</div>
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-white/80">
                  Book a Free Consultation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-6 flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social link" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Services", items: footerLinks.services },
              { title: "Solutions", items: footerLinks.solutions },
              { title: "Industries", items: footerLinks.industries },
              { title: "Resources", items: footerLinks.resources },
            ].map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <div className="text-sm font-bold text-white">{col.title}</div>
                <ul className="mt-5 space-y-2.5 text-sm text-white/70">
                  {col.items.map((item) => (
                    <li key={item}><span className="cursor-default">{item}</span></li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-xs text-white/50"><MapPin className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />Locations: [Office locations — verified addresses only]</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-white/50 md:flex-row md:text-left">
            <div>© {new Date().getFullYear()} The Runner Software Solutions. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="transition hover:text-white">Privacy Policy</a>
              <a href="#" className="transition hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky secondary CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 right-6 z-50">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0f1a4e] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:bg-[#0c1440]">
              Book a Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BlogCard({ article, delay }: { article: ReturnType<typeof getLatestArticles>[number]; delay: number }) {
  return (
    <MotionCard delay={delay}>
      <Link href={getBlogArticlePath(article.slug)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute left-3 top-3 rounded-full bg-[#0f1a4e] px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
            {getCategoryBySlug(article.categorySlug)?.title}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h4 className="text-sm font-bold leading-snug text-[#0b1437] group-hover:text-[#0f1a4e]">{article.title}</h4>
          <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-slate-500">
            <span>{article.author.name}</span>
            <span>·</span>
            <time dateTime={article.publishDateIso}>{article.publishDate}</time>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
          <p className="mt-2 flex-1 text-xs text-slate-600 line-clamp-2">{article.excerpt}</p>
          <span className="mt-4 text-xs font-semibold text-[#0f1a4e]">Read Article →</span>
        </div>
      </Link>
    </MotionCard>
  );
}
