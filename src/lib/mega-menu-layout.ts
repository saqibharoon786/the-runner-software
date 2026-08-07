/** Shared layout tokens for mega menu panels inside the mobile nav drawer. */
export function megaMenuPanelRootClass(compact?: boolean) {
  return compact
    ? "min-w-0 max-w-full overflow-x-hidden rounded-xl border border-slate-200/80 bg-white/95 shadow-lg backdrop-blur-xl"
    : "overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-2xl shadow-[#0f1a4e]/10 backdrop-blur-xl";
}

export function megaMenuPanelPaddingClass(compact?: boolean) {
  return compact ? "gap-4 p-3 sm:p-4" : "gap-6 p-4 sm:gap-8 sm:p-6 md:p-8";
}

/** Desktop panels use nested scroll; mobile drawer scrolls as one page. */
export function megaMenuNavScrollClass(compact?: boolean, desktopClass = "max-h-[480px] space-y-2.5 overflow-y-auto pr-1") {
  return compact ? "mt-4 space-y-2.5" : `mt-4 ${desktopClass}`;
}

export const megaMenuMobileShellClass = "mega-menu-mobile-shell min-w-0 max-w-full overflow-x-hidden lg:hidden";
