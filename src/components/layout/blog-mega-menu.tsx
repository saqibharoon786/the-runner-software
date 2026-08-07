"use client";

import type { RefObject } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Mail,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  softwareDevelopmentCards,
  technologyEngineeringCards,
  businessIndustryCards,
  featuredQuickLinks,
  getFeaturedArticleForMenu,
  getBlogCategoryPath,
  getBlogArticlePath,
  type BlogMenuCard,
} from "@/data/blog-menu";
import { NAVY } from "@/lib/brand";
import { megaMenuMobileShellClass, megaMenuPanelPaddingClass, megaMenuPanelRootClass, megaMenuNavScrollClass } from "@/lib/mega-menu-layout";

function CategoryInsightCard({
  item,
  onNavigate,
  countLabel,
}: {
  item: BlogMenuCard;
  onNavigate?: () => void;
  countLabel: (item: BlogMenuCard) => string;
}) {
  const Icon = item.icon;
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.22, ease: "easeOut" }}>
      <Link
        href={getBlogCategoryPath(item.slug)}
        onClick={onNavigate}
        className="group block rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 backdrop-blur-sm transition duration-300 hover:border-[#4f6bff]/40 hover:bg-white hover:shadow-md hover:shadow-[#4f6bff]/12"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0f1a4e] to-[#3550c4] text-white transition duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#4f6bff]/25">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-[12px] font-bold leading-snug text-[#0b1437] group-hover:text-[#0f1a4e]">{item.title}</h4>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#0f1a4e] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
            </div>
            <p className="mt-1 text-[10px] leading-relaxed text-slate-500 line-clamp-2">{item.description}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#0f1a4e]">
              {countLabel(item)}
              <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function IndustryInsightCard({ item, onNavigate }: { item: BlogMenuCard; onNavigate?: () => void }) {
  const Icon = item.icon;
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.22, ease: "easeOut" }}>
      <Link
        href={getBlogCategoryPath(item.slug)}
        onClick={onNavigate}
        className="group block rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 backdrop-blur-sm transition duration-300 hover:border-[#4f6bff]/40 hover:bg-white hover:shadow-md hover:shadow-[#4f6bff]/12"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e] transition duration-300 group-hover:bg-[#0f1a4e] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#4f6bff]/20">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-[12px] font-bold text-[#0b1437] group-hover:text-[#0f1a4e]">{item.title}</h4>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#0f1a4e] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
            </div>
            <p className="mt-1 text-[10px] leading-relaxed text-slate-500 line-clamp-2">{item.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#0f1a4e]">{item.caseStudyCount} Case Studies</span>
              <span className="text-[10px] font-semibold text-[#0f1a4e] opacity-0 transition group-hover:opacity-100">
                Explore →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function FeaturedArticleCard({ onNavigate }: { onNavigate?: () => void }) {
  const article = getFeaturedArticleForMenu();
  if (!article) return null;

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Link
        href={getBlogArticlePath(article.slug)}
        onClick={onNavigate}
        className="group block overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[#4f6bff]/40 hover:shadow-xl hover:shadow-[#4f6bff]/15"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1437]/50 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-[#0f1a4e] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
            Featured
          </span>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {article.readingTime}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishDateIso}>{article.publishDate}</time>
          </div>
          <h4 className="mt-2.5 text-[14px] font-bold leading-snug text-[#0b1437] group-hover:text-[#0f1a4e]">{article.title}</h4>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-500 line-clamp-2">{article.excerpt}</p>
          <p className="mt-3 text-[10px] font-semibold text-slate-600">{article.author.name}</p>
          <span className="mt-3 inline-flex items-center gap-1 rounded-lg bg-[#0f1a4e]/5 px-3 py-2 text-[11px] font-semibold text-[#0f1a4e] transition group-hover:bg-[#0f1a4e] group-hover:text-white">
            Read Article
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function KnowledgeCenterBottomCTA({ onNavigate }: { onNavigate?: () => void }) {
  const features = [
    "100+ Expert Articles",
    "Real Project Insights",
    "SEO & Growth Guides",
    "Enterprise Best Practices",
  ];

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#0f1a4e]/10 p-6 text-white md:p-8"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162560 50%, #1e3070 100%)` }}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#4f6bff]/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-10 left-1/3 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" aria-hidden="true" />

      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-white/80" aria-hidden="true" />
            <h3 className="text-lg font-extrabold md:text-xl">Explore Our Knowledge Center</h3>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
            Stay updated with the latest insights on software development, AI, cloud technologies, business automation, and digital transformation.
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {features.map((label) => (
              <li key={label} className="flex items-center gap-2 text-[11px] text-white/90">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col gap-2.5 sm:flex-row lg:flex-col lg:min-w-[200px]">
          <Link
            href="/blog"
            onClick={onNavigate}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0f1a4e] transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Visit Blog
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/blog#newsletter"
            onClick={onNavigate}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Subscribe for Updates
          </Link>
        </div>
      </div>

      {/* Decorative illustration */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:flex" aria-hidden="true">
        <div className="relative h-20 w-28">
          <div className="absolute bottom-0 left-0 h-14 w-20 rounded-lg border border-white/15 bg-white/5" />
          <div className="absolute bottom-8 right-0 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-[#4f6bff]/30">
            <Sparkles className="h-5 w-5 text-white/90" />
          </div>
          <div className="absolute bottom-12 left-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-emerald-400/20">
            <TrendingUp className="h-4 w-4 text-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

type BlogMegaMenuPanelProps = {
  onNavigate?: () => void;
  className?: string;
  compact?: boolean;
};

export function BlogMegaMenuPanel({ onNavigate, className = "", compact = false }: BlogMegaMenuPanelProps) {
  const navClass = megaMenuNavScrollClass(compact, "max-h-[480px] space-y-2.5 overflow-y-auto pr-1");

  return (
    <div className={`${megaMenuPanelRootClass(compact)} ${className}`}>
      <div className={`grid grid-cols-1 xl:grid-cols-4 ${megaMenuPanelPaddingClass(compact)}`}>
        {/* Column 1 — Software Development */}
        <div className="min-w-0">
          <h3 className="border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">
            Software Development
          </h3>
          <nav aria-label="Software development topics" className={navClass}>
            {softwareDevelopmentCards.map((item) => (
              <CategoryInsightCard
                key={item.slug}
                item={item}
                onNavigate={onNavigate}
                countLabel={(c) => `${c.articleCount} Articles`}
              />
            ))}
          </nav>
        </div>

        {/* Column 2 — Technology & Engineering */}
        <div className="min-w-0">
          <h3 className="border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">
            Technology & Engineering
          </h3>
          <nav aria-label="Technology and engineering topics" className={navClass}>
            {technologyEngineeringCards.map((item) => (
              <CategoryInsightCard
                key={item.slug}
                item={item}
                onNavigate={onNavigate}
                countLabel={(c) => `${c.articleCount} Articles`}
              />
            ))}
          </nav>
        </div>

        {/* Column 3 — Business & Industry */}
        <div className="min-w-0">
          <h3 className="border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">
            Business & Industry
          </h3>
          <nav aria-label="Business and industry insights" className={navClass}>
            {businessIndustryCards.map((item) => (
              <IndustryInsightCard key={item.slug} item={item} onNavigate={onNavigate} />
            ))}
          </nav>
        </div>

        {/* Column 4 — Featured Content */}
        <div className="min-w-0">
          <h3 className="border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">
            Featured Content
          </h3>
          <FeaturedArticleCard onNavigate={onNavigate} />
          <nav aria-label="Blog quick access" className={`mt-4 grid gap-2 ${compact ? "grid-cols-1" : "grid-cols-2"}`}>
            {featuredQuickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onNavigate}
                className="group rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 text-[10px] font-semibold text-[#0b1437] transition hover:-translate-y-0.5 hover:border-[#4f6bff]/35 hover:bg-white hover:text-[#0f1a4e] hover:shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Full-width bottom CTA */}
      <div className={`border-t border-slate-100 bg-slate-50/50 ${compact ? "px-3 py-4" : "px-6 py-5 md:px-8 md:py-6"}`}>
        <KnowledgeCenterBottomCTA onNavigate={onNavigate} />
      </div>
    </div>
  );
}

type BlogMegaMenuDesktopProps = {
  isOpen: boolean;
  onClose: () => void;
  menuRef?: RefObject<HTMLDivElement | null>;
};

export function BlogMegaMenuDesktop({ isOpen, onClose, menuRef }: BlogMegaMenuDesktopProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="blog-mega-menu"
          role="region"
          aria-label="Blog and knowledge center menu"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mx-auto w-full max-w-[1300px]"
        >
          <BlogMegaMenuPanel onNavigate={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type BlogMegaMenuMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function BlogMegaMenuMobile({ isOpen, onClose }: BlogMegaMenuMobileProps) {
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
            <BlogMegaMenuPanel onNavigate={onClose} compact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
