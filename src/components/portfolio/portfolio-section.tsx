"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, MapPin, Layers } from "lucide-react";
import {
  portfolioFilters,
  portfolioProjects,
  featuredProjects,
  businessImpactKpis,
  filterProjects,
  getPortfolioPath,
  techBadgeMap,
  type PortfolioCategory,
  type PortfolioProject,
} from "@/data/portfolio";
import { TechLogo } from "@/components/home/tech-logos";
import { MotionSection, MotionCard } from "@/components/home/motion";
import { NAVY } from "@/lib/brand";

function TechBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {technologies.slice(0, 5).map((tech) => {
        const meta = techBadgeMap[tech];
        if (!meta) {
          return (
            <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
              {tech}
            </span>
          );
        }
        return (
          <span
            key={tech}
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-700"
          >
            <TechLogo tech={{ name: tech, slug: meta.slug, color: meta.color }} size="sm" className="h-3.5 w-3.5" />
            {tech}
          </span>
        );
      })}
    </div>
  );
}

function FeaturedProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <MotionCard delay={index * 0.08} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:border-[#0f1a4e]/20 hover:shadow-2xl hover:shadow-[#4f6bff]/10">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} dashboard screenshot`}
            loading="lazy"
            width={1200}
            height={750}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a4e]/95 via-[#0f1a4e]/40 to-transparent opacity-90 transition group-hover:opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4f6bff]/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0f1a4e] backdrop-blur-sm">
              {project.industry}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold text-white ring-1 ring-white/25 backdrop-blur-md">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {project.country}
            </span>
          </div>
          <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold text-white">{project.status}</span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">{project.businessCategory}</p>
          <h3 className="mt-2 text-xl font-extrabold text-[#0b1437] md:text-2xl">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{project.shortDescription}</p>
          <div className="mt-4">
            <TechBadges technologies={project.technologies} />
          </div>
          <Link
            href={getPortfolioPath(project.slug)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:gap-3"
            style={{ backgroundColor: NAVY }}
          >
            View Case Study
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </MotionCard>
  );
}

function PortfolioGridCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-md backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-[#0f1a4e]/25 hover:shadow-xl hover:shadow-[#4f6bff]/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} — ${project.industry} project`}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a4e]/90 via-[#0f1a4e]/30 to-transparent opacity-80 transition group-hover:opacity-95" />
        <div className="absolute inset-0 bg-[#4f6bff]/10 opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#0f1a4e]">{project.industry}</span>
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">{project.country}</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 translate-y-2 rounded-xl border border-white/20 bg-white/10 p-3 opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Business Impact</p>
          <p className="mt-1 text-xs font-semibold text-white">{project.businessImpact}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{project.title}</h3>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-[#0f1a4e] opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
        </div>

        <dl className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
          <div>
            <dt className="font-bold uppercase tracking-wider text-slate-400">Type</dt>
            <dd className="mt-0.5 font-medium text-slate-700">{project.projectType}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wider text-slate-400">Timeline</dt>
            <dd className="mt-0.5 inline-flex items-center gap-1 font-medium text-slate-700">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {project.timeline}
            </dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wider text-slate-400">Status</dt>
            <dd className="mt-0.5 font-medium text-emerald-700">{project.status}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-wider text-slate-400">Category</dt>
            <dd className="mt-0.5 font-medium text-[#0f1a4e]">{project.businessCategory}</dd>
          </div>
        </dl>

        <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600">{project.description}</p>

        <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Technology Stack</p>
            <div className="mt-2">
              <TechBadges technologies={project.technologies} />
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#0f1a4e]">Case Study Preview</p>
            <p className="mt-1 text-[11px] text-slate-600"><strong>Challenge:</strong> {project.challenge}</p>
            <p className="mt-1 text-[11px] font-semibold text-[#0b1437]">{project.businessImpact}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={getPortfolioPath(project.slug)}
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg border border-[#0f1a4e]/20 bg-[#0f1a4e]/5 px-3 py-2.5 text-xs font-semibold text-[#0f1a4e] transition hover:bg-[#0f1a4e] hover:text-white"
          >
            View Project
          </Link>
          <Link
            href={getPortfolioPath(project.slug)}
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg px-3 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5"
            style={{ backgroundColor: NAVY }}
          >
            View Case Study
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");
  const filtered = filterProjects(activeFilter);
  const gridProjects = activeFilter === "all" ? portfolioProjects : filtered;

  return (
    <section id="portfolio" className="bg-slate-50 py-28" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-7xl px-6">
        <MotionSection className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0f1a4e]">Portfolio</span>
          <h2 id="portfolio-heading" className="mt-3 text-4xl font-extrabold text-[#0b1437] md:text-5xl">
            Selected Work
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Real projects. Real technology decisions. Real business impact.
          </p>
        </MotionSection>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter portfolio projects">
          {portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative rounded-full px-4 py-2.5 text-xs font-semibold transition duration-300 ${
                  isActive ? "text-white shadow-lg shadow-[#0f1a4e]/25" : "border border-slate-200 bg-white text-slate-600 hover:border-[#0f1a4e]/30 hover:text-[#0f1a4e]"
                }`}
                style={isActive ? { backgroundColor: NAVY } : undefined}
              >
                {filter.label}
                {isActive && (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 rounded-full ring-2 ring-[#4f6bff]/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured */}
        {(activeFilter === "all" || featuredProjects.some((p) => p.categories.includes(activeFilter))) && (
          <div className="mt-16">
            <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">Featured Projects</h3>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {(activeFilter === "all" ? featuredProjects : featuredProjects.filter((p) => p.categories.includes(activeFilter))).map(
                (project, i) => (
                  <FeaturedProjectCard key={project.slug} project={project} index={i} />
                ),
              )}
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="mt-20">
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">All Projects</h3>
          <motion.div layout className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {gridProjects.map((project, i) => (
                <PortfolioGridCard key={project.slug} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Business Impact KPIs */}
        <MotionSection className="mt-24">
          <h3 className="text-center text-2xl font-extrabold text-[#0b1437]">Business Impact We Deliver</h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
            Measurable outcomes from custom software built for real business challenges.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {businessImpactKpis.map((kpi, i) => (
              <MotionCard key={kpi.label} delay={i * 0.05} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-2xl font-extrabold text-[#0f1a4e]">{kpi.value}</div>
                <div className="mt-1 text-xs font-semibold text-slate-600">{kpi.label}</div>
              </MotionCard>
            ))}
          </div>
        </MotionSection>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-3xl border border-[#0f1a4e]/10 p-10 text-center shadow-2xl md:p-14"
          style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #152456 100%)` }}
        >
          <div className="relative">
            <Layers className="mx-auto h-10 w-10 text-white/40" aria-hidden="true" />
            <h3 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">Ready to Build Your Next Software Product?</h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75">
              Let&apos;s transform your business with custom software tailored to your goals.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                View All Case Studies
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
