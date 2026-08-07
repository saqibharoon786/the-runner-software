"use client";

import type { RefObject } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Shield, Globe, Headphones, Star } from "lucide-react";
import { solutionColumns, getSolutionPath, type SolutionItem } from "@/data/solutions-menu";
import { NAVY } from "@/lib/brand";
import { megaMenuMobileShellClass, megaMenuPanelPaddingClass, megaMenuPanelRootClass, megaMenuNavScrollClass } from "@/lib/mega-menu-layout";

type SolutionCardProps = {
  item: SolutionItem;
  onNavigate?: () => void;
};

function SolutionCard({ item, onNavigate }: SolutionCardProps) {
  const Icon = item.icon;

  return (
    <Link
      href={getSolutionPath(item.slug)}
      onClick={onNavigate}
      className="group relative flex gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/25 hover:shadow-lg hover:shadow-[#4f6bff]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f1a4e]/30"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e] ring-1 ring-[#0f1a4e]/5 transition duration-300 group-hover:bg-[#0f1a4e] group-hover:text-white group-hover:ring-[#0f1a4e]/20 group-hover:shadow-md group-hover:shadow-[#4f6bff]/20">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1 pr-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] font-bold leading-snug text-[#0b1437] transition group-hover:text-[#0f1a4e]">{item.title}</span>
          {item.featured && (
            <span className="inline-flex items-center gap-0.5 rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-800">
              <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" aria-hidden="true" />
              Featured
            </span>
          )}
        </div>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{item.description}</p>
      </div>
      <ArrowRight
        className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0f1a4e] opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}

function SolutionsFeaturedCTA({ onNavigate }: { onNavigate?: () => void }) {
  const features = [
    { icon: Layers, label: "Custom Development" },
    { icon: Shield, label: "Enterprise Security" },
    { icon: Globe, label: "Worldwide Delivery" },
    { icon: Headphones, label: "Dedicated Support" },
  ];

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#0f1a4e]/10 p-6 md:p-8"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #152456 50%, #1a2d6e 100%)` }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#4f6bff]/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-12 left-1/3 h-36 w-36 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <h3 className="text-xl font-extrabold leading-snug text-white md:text-2xl">Looking for a Custom Business Solution?</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
            We design custom software solutions tailored to your business processes, helping organizations automate operations, improve productivity, and scale efficiently.
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col items-center gap-5 lg:items-end">
          <div className="relative hidden h-28 w-28 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 sm:flex" aria-hidden="true">
            <Layers className="h-12 w-12 text-white/80" />
            <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-[#0f1a4e] shadow-lg">
              <Shield className="h-5 w-5" />
            </div>
          </div>
          <Link
            href="/contact"
            onClick={onNavigate}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

type SolutionsMegaMenuPanelProps = {
  onNavigate?: () => void;
  className?: string;
  compact?: boolean;
};

export function SolutionsMegaMenuPanel({ onNavigate, className = "", compact = false }: SolutionsMegaMenuPanelProps) {
  const navClass = megaMenuNavScrollClass(compact, "max-h-[380px] space-y-2 overflow-y-auto pr-1");

  return (
    <div className={`${megaMenuPanelRootClass(compact)} ${className}`}>
      <div className={`grid grid-cols-1 xl:grid-cols-4 ${megaMenuPanelPaddingClass(compact)}`}>
        {solutionColumns.map((column) => {
          const ColIcon = column.icon;
          return (
            <div key={column.title} className="min-w-0">
              <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f1a4e] to-[#3550c4] text-white shadow-md shadow-[#0f1a4e]/20">
                  <ColIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-[#0b1437]">{column.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{column.description}</p>
                </div>
              </div>
              <nav aria-label={column.title} className={navClass}>
                {column.items.map((item) => (
                  <SolutionCard key={item.slug} item={item} onNavigate={onNavigate} />
                ))}
              </nav>
            </div>
          );
        })}
      </div>
      <div className={`border-t border-slate-100 bg-slate-50/50 ${compact ? "p-3 sm:p-4" : "p-6 md:p-8"}`}>
        <SolutionsFeaturedCTA onNavigate={onNavigate} />
      </div>
    </div>
  );
}

type SolutionsMegaMenuDesktopProps = {
  isOpen: boolean;
  onClose: () => void;
  menuRef?: RefObject<HTMLDivElement | null>;
};

export function SolutionsMegaMenuDesktop({ isOpen, onClose, menuRef }: SolutionsMegaMenuDesktopProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="solutions-mega-menu"
          role="region"
          aria-label="Solutions menu"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="mx-auto w-full max-w-[1300px]"
        >
          <SolutionsMegaMenuPanel onNavigate={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type SolutionsMegaMenuMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SolutionsMegaMenuMobile({ isOpen, onClose }: SolutionsMegaMenuMobileProps) {
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
            <SolutionsMegaMenuPanel onNavigate={onClose} compact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
