"use client";

import { useMemo, useState, type RefObject } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Globe,
  LayoutDashboard,
  Search,
  Shield,
  TrendingUp,
} from "lucide-react";
import {
  caseStudyFilters,
  filterCaseStudiesForMenu,
  industrySuccessStories,
  megaMenuTechStack,
  solutionsDelivered,
  getCaseStudyPath,
  type CaseStudyFilterId,
  type FeaturedCaseStudyMenuItem,
} from "@/data/case-studies-menu";
import { getIndustryPath } from "@/data/industries-menu";
import { techBadgeMap } from "@/data/portfolio";
import { TechLogo } from "@/components/home/tech-logos";
import { NAVY } from "@/lib/brand";
import { megaMenuMobileShellClass, megaMenuPanelPaddingClass, megaMenuPanelRootClass, megaMenuNavScrollClass } from "@/lib/mega-menu-layout";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f6bff]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

function EnterpriseDashboardIllustration() {
  return (
    <div className="relative mx-auto mb-5 w-full max-w-[220px]" aria-hidden="true">
      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <LayoutDashboard className="h-3.5 w-3.5 text-[#4f6bff]" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/70">Analytics</span>
          </div>
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {[72, 48, 88].map((h, i) => (
            <div key={i} className="flex flex-col items-center justify-end rounded-md border border-white/10 bg-white/5 p-1.5">
              <div className="w-full rounded-sm bg-gradient-to-t from-[#4f6bff] to-[#4f6bff]/40" style={{ height: `${h * 0.28}px` }} />
              <span className="mt-1 text-[7px] font-semibold text-white/50">{["Ops", "Rev", "KPI"][i]}</span>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-md border border-white/10 bg-[#0f1a4e]/40 p-2">
          <div className="flex items-end gap-0.5">
            {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-400/80 to-emerald-400/30"
                style={{ height: `${h * 0.35}px` }}
              />
            ))}
          </div>
        </div>

        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-[#4f6bff]/30 shadow-lg shadow-[#4f6bff]/20">
          <BarChart3 className="h-4 w-4 text-white" />
        </div>
        <div className="absolute -bottom-2 -left-2 flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/10">
          <Cloud className="h-3.5 w-3.5 text-white/80" />
        </div>
      </div>
    </div>
  );
}

function TechStackBadge({ tech }: { tech: string }) {
  const meta = techBadgeMap[tech];
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? 1.06 : 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      title={tech}
      className={`relative inline-flex cursor-default items-center gap-1.5 rounded-full border bg-white px-2.5 py-1 text-[10px] font-semibold text-[#0b1437] shadow-sm transition-shadow duration-300 ${
        hovered ? "border-[#4f6bff]/50 shadow-md shadow-[#4f6bff]/20" : "border-slate-200"
      }`}
    >
      {meta && <TechLogo tech={{ name: tech, slug: meta.slug, color: meta.color }} size="sm" />}
      {tech}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0f1a4e] px-2 py-1 text-[9px] font-semibold text-white shadow-lg"
            role="tooltip"
          >
            {tech}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.span>
  );
}

function PremiumProjectCard({
  item,
  onNavigate,
}: {
  item: FeaturedCaseStudyMenuItem;
  onNavigate?: () => void;
}) {
  const countryLabel = item.countryFlag ? `${item.countryFlag} ${item.country}` : item.country;
  const isPositive = item.outcomeBadge.startsWith("↑") || item.outcomeBadge.includes("Uptime");

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={getCaseStudyPath(item.slug)}
        onClick={onNavigate}
        aria-label={`${item.title} case study — ${item.outcomeBadge}`}
        className={`group block cursor-pointer overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#4f6bff]/50 hover:shadow-xl hover:shadow-[#4f6bff]/20 ${focusRing}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1437]/70 via-[#0b1437]/10 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-[#0f1a4e] px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white shadow-sm">
            {item.industry}
          </span>
          <span className="absolute right-3 top-3 hidden rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-semibold text-[#0b1437] shadow-sm backdrop-blur-sm min-[420px]:inline-flex">
            Real Client Project
          </span>
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h4 className="text-[13px] font-bold leading-snug text-[#0b1437] transition-colors group-hover:text-[#0f1a4e]">
                {item.title}
              </h4>
              <p className="mt-1 text-[10px] font-semibold text-slate-500">{countryLabel}</p>
            </div>
            <ArrowRight
              className="mt-0.5 h-4 w-4 shrink-0 text-[#0f1a4e] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>

          <p className="text-[11px] leading-relaxed text-slate-500 line-clamp-2">{item.shortDescription}</p>

          <div className="flex flex-wrap items-center gap-1.5">
            {item.technologies.slice(0, 4).map((tech) => {
              const meta = techBadgeMap[tech];
              return (
                <span
                  key={tech}
                  title={tech}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50 p-1.5 transition-all duration-300 group-hover:border-[#4f6bff]/30 group-hover:bg-white group-hover:shadow-sm group-hover:shadow-[#4f6bff]/10"
                >
                  {meta ? (
                    <TechLogo tech={{ name: tech, slug: meta.slug, color: meta.color }} size="sm" />
                  ) : (
                    <span className="text-[9px] font-bold text-[#0f1a4e]">{tech.slice(0, 2)}</span>
                  )}
                </span>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
            <span
              className={`rounded-full px-3 py-1.5 text-[11px] font-bold tracking-tight shadow-sm ${
                isPositive ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60" : "bg-blue-50 text-[#0f1a4e] ring-1 ring-[#4f6bff]/20"
              }`}
            >
              {item.outcomeBadge}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0f1a4e]">
              View Case Study
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function IndustryCard({ item, onNavigate }: { item: (typeof industrySuccessStories)[number]; onNavigate?: () => void }) {
  const Icon = item.icon;
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.22, ease: "easeOut" }}>
      <Link
        href={getIndustryPath(item.slug)}
        onClick={onNavigate}
        aria-label={`${item.title} — ${item.projectCount}+ projects, ${item.businessImpact}`}
        className={`group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 transition-all duration-300 hover:border-[#4f6bff]/45 hover:bg-[#4f6bff]/5 hover:shadow-lg hover:shadow-[#4f6bff]/15 ${focusRing}`}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0f1a4e] to-[#3550c4] text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#4f6bff]/30">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{item.title}</div>
          <div className="text-[10px] font-semibold text-[#0f1a4e]">{item.projectCount}+ Projects</div>
          <div className="mt-0.5 text-[10px] leading-snug text-slate-500">{item.businessImpact}</div>
        </div>
        <ArrowRight
          className="h-4 w-4 shrink-0 text-[#0f1a4e] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}

function SolutionCard({ item, onNavigate }: { item: (typeof solutionsDelivered)[number]; onNavigate?: () => void }) {
  const Icon = item.icon;
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.22, ease: "easeOut" }}>
      <Link
        href={item.href}
        onClick={onNavigate}
        aria-label={`${item.title} — ${item.caseStudyCount} case studies`}
        className={`group block cursor-pointer rounded-xl border border-slate-200/80 bg-white/90 p-4 transition-all duration-300 hover:border-[#4f6bff]/45 hover:bg-[#4f6bff]/5 hover:shadow-lg hover:shadow-[#4f6bff]/15 ${focusRing}`}
      >
        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0f1a4e]/8 text-[#0f1a4e] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0f1a4e] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#4f6bff]/25">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-[12px] font-bold leading-snug text-[#0b1437] group-hover:text-[#0f1a4e]">{item.title}</h4>
              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 text-[#0f1a4e] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
            <p className="mt-1.5 text-[10px] leading-relaxed text-slate-500">{item.description}</p>
            <div className="mt-2.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#0f1a4e]">{item.caseStudyCount} Case Studies</span>
              <span className="text-[10px] font-semibold text-[#0f1a4e] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Projects →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function PremiumCTA({ onNavigate, compact }: { onNavigate?: () => void; compact?: boolean }) {
  const trustBadges = [
    { icon: TrendingUp, label: "250+ Successful Projects" },
    { icon: Globe, label: "Global Clients" },
    { icon: Shield, label: "Enterprise Grade Security" },
    { icon: CheckCircle2, label: "Free Consultation" },
  ];

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl text-white shadow-xl ${compact ? "p-4" : "p-6"}`}
      style={{ background: `linear-gradient(145deg, ${NAVY} 0%, #162560 55%, #1e3070 100%)` }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#4f6bff]/30 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl" aria-hidden="true" />

      {!compact && <EnterpriseDashboardIllustration />}

      <h3 className="relative text-lg font-extrabold leading-snug">Ready to Build Your Success Story?</h3>
      <p className="relative mt-3 flex-1 text-xs leading-relaxed text-white/75">
        Discover how we help startups, SMEs and enterprises automate operations, improve productivity and scale through custom software development.
      </p>

      <ul className="relative mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2" aria-label="Trust highlights">
        {trustBadges.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-[11px] font-semibold text-white/95 backdrop-blur-sm"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-400/15">
              <Icon className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
            </span>
            {label}
          </li>
        ))}
      </ul>

      <div className="relative mt-6 space-y-2.5">
        <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }}>
          <Link
            href="/contact"
            onClick={onNavigate}
        className={`group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-4 py-3.5 text-sm font-semibold text-[#0f1a4e] shadow-lg shadow-black/10 transition-colors duration-300 hover:bg-slate-100 hover:shadow-xl ${focusRing}`}
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </motion.div>
        <Link
          href="/case-studies"
          onClick={onNavigate}
          className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/30 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10 ${focusRing}`}
        >
          View All Case Studies
        </Link>
      </div>
    </div>
  );
}

type CaseStudiesMegaMenuPanelProps = {
  onNavigate?: () => void;
  className?: string;
  compact?: boolean;
};

export function CaseStudiesMegaMenuPanel({ onNavigate, className = "", compact = false }: CaseStudiesMegaMenuPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilterId>("all");

  const filteredProjects = useMemo(
    () => filterCaseStudiesForMenu(searchQuery, activeFilter),
    [searchQuery, activeFilter],
  );

  return (
    <div className={`${megaMenuPanelRootClass(compact)} ${className}`}>
      {/* Search + Filters + Tech Stack */}
      <div className={`border-b border-slate-100 bg-slate-50/80 ${compact ? "px-3 py-3" : "px-4 py-4 sm:px-6 md:px-8"}`}>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <div className="relative min-w-0 flex-1 lg:max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Case Studies..."
              aria-label="Search case studies"
              className={`w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-[#0b1437] shadow-sm transition focus:border-[#0f1a4e]/40 focus:ring-2 focus:ring-[#4f6bff]/15 ${focusRing}`}
            />
          </div>
          <div
          className={`mega-menu-scroll flex gap-1.5 pb-0.5 ${compact ? "-mx-0.5 overflow-x-auto px-0.5 flex-nowrap" : "-mx-1 overflow-x-auto px-1 lg:flex-wrap lg:overflow-visible"}`}
          role="group"
          aria-label="Filter case studies"
        >
            {caseStudyFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold transition-all duration-200 ${focusRing} ${
                  activeFilter === filter.id
                    ? "bg-[#0f1a4e] text-white shadow-md shadow-[#0f1a4e]/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#0f1a4e]/25 hover:text-[#0f1a4e]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`mt-3 flex items-center gap-2 ${compact ? "mega-menu-scroll -mx-0.5 overflow-x-auto px-0.5 pb-1 flex-nowrap" : "mt-4 flex-wrap"}`}
          role="list"
          aria-label="Technology stack"
        >
          {!compact && <span className="mr-1 shrink-0 text-[10px] font-bold uppercase tracking-widest text-slate-400">Tech Stack</span>}
          {megaMenuTechStack.map((tech) => (
            <TechStackBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>

      {/* 4 Columns */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ${megaMenuPanelPaddingClass(compact)}`}>
        <div className="min-w-0">
          <h3 className="border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">
            Featured Case Studies
          </h3>
          <nav
            aria-label="Featured case studies"
            className={`mega-menu-scroll ${megaMenuNavScrollClass(compact, "max-h-[min(560px,60vh)] space-y-3 overflow-y-auto overscroll-contain pr-1.5 lg:max-h-[560px]")}`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((item) => (
                  <motion.div
                    key={item.slug}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <PremiumProjectCard item={item} onNavigate={onNavigate} />
                  </motion.div>
                ))
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500"
                  role="status"
                >
                  No case studies match your search. Try another keyword or filter.
                </motion.p>
              )}
            </AnimatePresence>
          </nav>
        </div>

        <div className="min-w-0">
          <h3 className="border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">
            Industry Success Stories
          </h3>
          <nav
            aria-label="Industry success stories"
            className={
              compact
                ? "mt-4 grid grid-cols-1 gap-2"
                : "mega-menu-scroll mt-4 grid max-h-[min(560px,60vh)] grid-cols-1 gap-2 overflow-y-auto overscroll-contain pr-1.5 lg:max-h-none lg:overflow-visible"
            }
          >
            {industrySuccessStories.map((item) => (
              <IndustryCard key={item.slug} item={item} onNavigate={onNavigate} />
            ))}
          </nav>
        </div>

        <div className="min-w-0">
          <h3 className="border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">
            Solutions Delivered
          </h3>
          <nav
            aria-label="Solutions delivered"
            className={`mega-menu-scroll ${megaMenuNavScrollClass(compact, "max-h-[min(560px,60vh)] space-y-2 overflow-y-auto overscroll-contain pr-1.5 lg:max-h-[560px]")}`}
          >
            {solutionsDelivered.map((item) => (
              <SolutionCard key={item.title} item={item} onNavigate={onNavigate} />
            ))}
          </nav>
        </div>

        <div className="min-w-0 xl:sticky xl:top-0 xl:self-start">
          <PremiumCTA onNavigate={onNavigate} compact={compact} />
        </div>
      </div>
    </div>
  );
}

type CaseStudiesMegaMenuDesktopProps = {
  isOpen: boolean;
  onClose: () => void;
  menuRef?: RefObject<HTMLDivElement | null>;
};

export function CaseStudiesMegaMenuDesktop({ isOpen, onClose, menuRef }: CaseStudiesMegaMenuDesktopProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="case-studies-mega-menu"
          role="region"
          aria-label="Case studies menu"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mx-auto w-full max-w-[1300px]"
        >
          <CaseStudiesMegaMenuPanel onNavigate={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type CaseStudiesMegaMenuMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CaseStudiesMegaMenuMobile({ isOpen, onClose }: CaseStudiesMegaMenuMobileProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={megaMenuMobileShellClass}
        >
          <div className="pt-3">
            <CaseStudiesMegaMenuPanel onNavigate={onClose} compact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
