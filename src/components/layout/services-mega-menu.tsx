"use client";

import type { RefObject } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import {
  serviceColumns,
  getServicePath,
  SOFTWARE_DEVELOPMENT_PILLAR_PATH,
  WEB_MOBILE_DEVELOPMENT_PILLAR_PATH,
  EMERGING_TECHNOLOGIES_PILLAR_PATH,
  type ServiceItem,
} from "@/data/services-menu";

const pillarColumnPaths: Record<number, string> = {
  0: SOFTWARE_DEVELOPMENT_PILLAR_PATH,
  1: WEB_MOBILE_DEVELOPMENT_PILLAR_PATH,
  2: EMERGING_TECHNOLOGIES_PILLAR_PATH,
};
import { NAVY } from "@/lib/brand";
import { megaMenuMobileShellClass, megaMenuPanelPaddingClass, megaMenuPanelRootClass, megaMenuNavScrollClass } from "@/lib/mega-menu-layout";

type ServiceLinkProps = {
  item: ServiceItem;
  onNavigate?: () => void;
};

function ServiceLink({ item, onNavigate }: ServiceLinkProps) {
  const Icon = item.icon;

  return (
    <Link
      href={getServicePath(item.slug)}
      onClick={onNavigate}
      className="group flex gap-3 rounded-xl p-3 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f1a4e]/30"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e] transition group-hover:bg-[#0f1a4e] group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-bold leading-snug text-[#0b1437] group-hover:text-[#0f1a4e]">{item.title}</span>
          {item.featured && (
            <span className="inline-flex items-center gap-0.5 rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-800">
              <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" aria-hidden="true" />
              Featured
            </span>
          )}
        </div>
        <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">{item.description}</p>
      </div>
    </Link>
  );
}

function FeaturedCard({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-2xl p-6 text-white shadow-xl"
      style={{ background: `linear-gradient(145deg, ${NAVY} 0%, #162560 55%, #1e3070 100%)` }}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-blue-400/20 blur-2xl" aria-hidden="true" />

      <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20" aria-hidden="true">
        <Sparkles className="h-8 w-8 text-white/90" />
        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-[#0f1a4e]">
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>

      <h3 className="relative text-lg font-extrabold leading-snug">Need a Custom Software Solution?</h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/75">
        Our experts help startups and enterprises build scalable software products that drive business growth.
      </p>
      <Link
        href={getServicePath("custom-software-development")}
        onClick={onNavigate}
        className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#0f1a4e] transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        Explore Custom Software
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

type ServicesMegaMenuPanelProps = {
  onNavigate?: () => void;
  className?: string;
  compact?: boolean;
};

export function ServicesMegaMenuPanel({ onNavigate, className = "", compact = false }: ServicesMegaMenuPanelProps) {
  const navClass = megaMenuNavScrollClass(compact, "max-h-[420px] space-y-0.5 overflow-y-auto pr-1");

  return (
    <div className={`${megaMenuPanelRootClass(compact)} ${compact ? "p-3 sm:p-4" : "p-6 md:p-8"} ${className}`}>
      <div className={`grid grid-cols-1 lg:grid-cols-4 ${compact ? "gap-4" : "gap-8"}`}>
        {serviceColumns.map((column, colIndex) => (
          <div key={column.title} className="min-w-0">
            {pillarColumnPaths[colIndex] ? (
              <Link
                href={pillarColumnPaths[colIndex]}
                onClick={onNavigate}
                className="group inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e] transition hover:text-[#0c1440]"
              >
                {column.title}
                <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ) : (
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f1a4e]">{column.title}</h3>
            )}
            {column.description && (
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{column.description}</p>
            )}
            <nav aria-label={column.title} className={navClass}>
              {column.items.map((item) => (
                <ServiceLink key={item.slug} item={item} onNavigate={onNavigate} />
              ))}
            </nav>
          </div>
        ))}
        <div className="min-w-0">
          <FeaturedCard onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

type ServicesMegaMenuDesktopProps = {
  isOpen: boolean;
  onClose: () => void;
  menuRef?: RefObject<HTMLDivElement | null>;
};

export function ServicesMegaMenuDesktop({ isOpen, onClose, menuRef }: ServicesMegaMenuDesktopProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="services-mega-menu"
          role="region"
          aria-label="Services menu"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="mx-auto w-full max-w-[1200px]"
        >
          <ServicesMegaMenuPanel onNavigate={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type ServicesMegaMenuMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ServicesMegaMenuMobile({ isOpen, onClose }: ServicesMegaMenuMobileProps) {
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
            <ServicesMegaMenuPanel onNavigate={onClose} compact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
