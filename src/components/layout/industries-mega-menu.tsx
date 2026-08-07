"use client";

import type { RefObject } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Layers, Shield, Sparkles } from "lucide-react";
import { industryColumns, getIndustryPath, type IndustryItem } from "@/data/industries-menu";
import { NAVY } from "@/lib/brand";
import { megaMenuMobileShellClass, megaMenuPanelPaddingClass, megaMenuPanelRootClass } from "@/lib/mega-menu-layout";

type IndustryCardProps = {
  item: IndustryItem;
  onNavigate?: () => void;
};

function IndustryCard({ item, onNavigate }: IndustryCardProps) {
  const Icon = item.icon;

  return (
    <Link
      href={getIndustryPath(item.slug)}
      onClick={onNavigate}
      className="group relative flex flex-col gap-3 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/25 hover:shadow-lg hover:shadow-[#4f6bff]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f1a4e]/30"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f1a4e]/10 to-[#4f6bff]/10 text-[#0f1a4e] transition duration-300 group-hover:scale-110 group-hover:from-[#0f1a4e] group-hover:to-[#3550c4] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#4f6bff]/20">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <ArrowRight
          className="h-4 w-4 shrink-0 text-[#0f1a4e] opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
      <div>
        <h4 className="text-[13px] font-bold text-[#0b1437] transition group-hover:text-[#0f1a4e]">{item.title}</h4>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{item.description}</p>
      </div>
    </Link>
  );
}

function IndustriesFeaturedCard({ onNavigate }: { onNavigate?: () => void }) {
  const features = [
    { icon: Layers, label: "Custom Built" },
    { icon: Shield, label: "Secure" },
    { icon: Sparkles, label: "Scalable" },
    { icon: Globe, label: "Worldwide Delivery" },
  ];

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#0f1a4e]/10 p-6 md:p-8"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #152456 50%, #1a2d6e 100%)` }}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#4f6bff]/20 blur-3xl" aria-hidden="true" />
      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <h3 className="text-xl font-extrabold leading-snug text-white md:text-2xl">Industry-Specific Software Solutions</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
            We build scalable software tailored to the unique workflows and challenges of your industry.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5 lg:items-end">
          <div className="relative hidden h-24 w-24 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 sm:flex" aria-hidden="true">
            <Globe className="h-10 w-10 text-white/80" />
          </div>
          <Link
            href="/#industries"
            onClick={onNavigate}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Explore Industries
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

type IndustriesMegaMenuPanelProps = {
  onNavigate?: () => void;
  className?: string;
  compact?: boolean;
};

export function IndustriesMegaMenuPanel({ onNavigate, className = "", compact = false }: IndustriesMegaMenuPanelProps) {
  return (
    <div className={`${megaMenuPanelRootClass(compact)} ${className}`}>
      <div className={`grid grid-cols-1 xl:grid-cols-4 ${megaMenuPanelPaddingClass(compact)}`}>
        {industryColumns.map((column) => (
          <div key={column.title} className="min-w-0">
            <h3 className="border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">
              {column.title}
            </h3>
            <nav aria-label={column.title} className="mt-4 grid grid-cols-1 gap-3">
              {column.items.map((item) => (
                <IndustryCard key={item.slug} item={item} onNavigate={onNavigate} />
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className={`border-t border-slate-100 bg-slate-50/50 ${compact ? "p-3 sm:p-4" : "p-6 md:p-8"}`}>
        <IndustriesFeaturedCard onNavigate={onNavigate} />
      </div>
    </div>
  );
}

type IndustriesMegaMenuDesktopProps = {
  isOpen: boolean;
  onClose: () => void;
  menuRef?: RefObject<HTMLDivElement | null>;
};

export function IndustriesMegaMenuDesktop({ isOpen, onClose, menuRef }: IndustriesMegaMenuDesktopProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="industries-mega-menu"
          role="region"
          aria-label="Industries menu"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mx-auto w-full max-w-[1300px]"
        >
          <IndustriesMegaMenuPanel onNavigate={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type IndustriesMegaMenuMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function IndustriesMegaMenuMobile({ isOpen, onClose }: IndustriesMegaMenuMobileProps) {
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
            <IndustriesMegaMenuPanel onNavigate={onClose} compact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
