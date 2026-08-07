"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ServicesMegaMenuDesktop, ServicesMegaMenuMobile } from "@/components/layout/services-mega-menu";
import { SolutionsMegaMenuDesktop, SolutionsMegaMenuMobile } from "@/components/layout/solutions-mega-menu";
import { IndustriesMegaMenuDesktop, IndustriesMegaMenuMobile } from "@/components/layout/industries-mega-menu";
import { CaseStudiesMegaMenuDesktop, CaseStudiesMegaMenuMobile } from "@/components/layout/case-studies-mega-menu";
import { BlogMegaMenuDesktop, BlogMegaMenuMobile } from "@/components/layout/blog-mega-menu";
import { BrandLogo } from "@/components/layout/brand-logo";
import { NAVY } from "@/lib/brand";

const navLinks = ["Home", "Services", "Solutions", "Industries", "Portfolio", "Case Studies", "About Us", "Blog", "Contact"] as const;

type OpenMenu = "services" | "solutions" | "industries" | "case-studies" | "blog" | null;

function navHref(label: string) {
  if (label === "Contact") return "/contact";
  return `/#${label.toLowerCase().replace(/\s+/g, "-")}`;
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const solutionsTriggerRef = useRef<HTMLButtonElement>(null);
  const industriesTriggerRef = useRef<HTMLButtonElement>(null);
  const caseStudiesTriggerRef = useRef<HTMLButtonElement>(null);
  const blogTriggerRef = useRef<HTMLButtonElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenu = useCallback(() => setOpenMenu(null), []);

  const openMenuById = useCallback((menu: OpenMenu) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }, []);

  const toggleMenu = useCallback((menu: "services" | "solutions" | "industries" | "case-studies" | "blog") => {
    setOpenMenu((current) => (current === menu ? null : menu));
  }, []);

  // Handle scroll events for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (servicesTriggerRef.current?.contains(target)) return;
      if (solutionsTriggerRef.current?.contains(target)) return;
      if (industriesTriggerRef.current?.contains(target)) return;
      if (caseStudiesTriggerRef.current?.contains(target)) return;
      if (blogTriggerRef.current?.contains(target)) return;
      if (megaMenuRef.current?.contains(target)) return;
      closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [openMenu, closeMenu]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      style={{ 
        backgroundColor: NAVY,
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
        transition: "box-shadow 0.3s ease"
      }}
      className="text-white"
    >
      <div className="mx-auto flex min-w-0 max-w-[1440px] items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4 xl:gap-4 2xl:py-5">
        <BrandLogo onClick={() => setMobileOpen(false)} className="shrink-0" />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-3 whitespace-nowrap text-[13px] font-medium text-white/80 xl:flex 2xl:gap-5 2xl:text-[14px]"
          aria-label="Primary"
        >
          {navLinks.map((label) => {
            if (label === "Services") {
              return (
                <div key={label} className="shrink-0" onMouseEnter={() => openMenuById("services")} onMouseLeave={scheduleClose}>
                  <button
                    ref={servicesTriggerRef}
                    type="button"
                    aria-expanded={openMenu === "services"}
                    aria-haspopup="true"
                    aria-controls="services-mega-menu"
                    onClick={() => toggleMenu("services")}
                    className={`flex shrink-0 items-center gap-0.5 whitespace-nowrap transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm ${openMenu === "services" ? "text-white" : ""}`}
                  >
                    {label}
                    <ChevronDown className={`h-3.5 w-3.5 transition duration-200 ${openMenu === "services" ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>
              );
            }

            if (label === "Solutions") {
              return (
                <div key={label} className="shrink-0" onMouseEnter={() => openMenuById("solutions")} onMouseLeave={scheduleClose}>
                  <button
                    ref={solutionsTriggerRef}
                    type="button"
                    aria-expanded={openMenu === "solutions"}
                    aria-haspopup="true"
                    aria-controls="solutions-mega-menu"
                    onClick={() => toggleMenu("solutions")}
                    className={`flex shrink-0 items-center gap-0.5 whitespace-nowrap transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm ${openMenu === "solutions" ? "text-white" : ""}`}
                  >
                    {label}
                    <ChevronDown className={`h-3.5 w-3.5 transition duration-200 ${openMenu === "solutions" ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>
              );
            }

            if (label === "Industries") {
              return (
                <div key={label} className="shrink-0" onMouseEnter={() => openMenuById("industries")} onMouseLeave={scheduleClose}>
                  <button
                    ref={industriesTriggerRef}
                    type="button"
                    aria-expanded={openMenu === "industries"}
                    aria-haspopup="true"
                    aria-controls="industries-mega-menu"
                    onClick={() => toggleMenu("industries")}
                    className={`flex shrink-0 items-center gap-0.5 whitespace-nowrap transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm ${openMenu === "industries" ? "text-white" : ""}`}
                  >
                    {label}
                    <ChevronDown className={`h-3.5 w-3.5 transition duration-200 ${openMenu === "industries" ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>
              );
            }

            if (label === "Case Studies") {
              return (
                <div key={label} className="shrink-0" onMouseEnter={() => openMenuById("case-studies")} onMouseLeave={scheduleClose}>
                  <button
                    ref={caseStudiesTriggerRef}
                    type="button"
                    aria-expanded={openMenu === "case-studies"}
                    aria-haspopup="true"
                    aria-controls="case-studies-mega-menu"
                    onClick={() => toggleMenu("case-studies")}
                    className={`flex shrink-0 items-center gap-0.5 whitespace-nowrap transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm ${openMenu === "case-studies" ? "text-white" : ""}`}
                  >
                    {label}
                    <ChevronDown className={`h-3.5 w-3.5 transition duration-200 ${openMenu === "case-studies" ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>
              );
            }

            if (label === "Blog") {
              return (
                <div key={label} className="shrink-0" onMouseEnter={() => openMenuById("blog")} onMouseLeave={scheduleClose}>
                  <button
                    ref={blogTriggerRef}
                    type="button"
                    aria-expanded={openMenu === "blog"}
                    aria-haspopup="true"
                    aria-controls="blog-mega-menu"
                    onClick={() => toggleMenu("blog")}
                    className={`flex shrink-0 items-center gap-0.5 whitespace-nowrap transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm ${openMenu === "blog" ? "text-white" : ""}`}
                  >
                    {label}
                    <ChevronDown className={`h-3.5 w-3.5 transition duration-200 ${openMenu === "blog" ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>
              );
            }

            if (label === "Contact") {
              return (
                <Link key={label} href="/contact" className="flex shrink-0 items-center whitespace-nowrap transition hover:text-white">
                  {label}
                </Link>
              );
            }

            return (
              <a
                key={label}
                href={navHref(label)}
                className={`flex shrink-0 items-center whitespace-nowrap transition hover:text-white ${label === "Home" ? "text-white" : ""}`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden items-center rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#0f1a4e] shadow-lg transition hover:bg-slate-100 sm:inline-flex sm:px-4 sm:py-2.5 sm:text-sm xl:px-5"
          >
            <span className="hidden 2xl:inline">Get Free Consultation</span>
            <span className="2xl:hidden">Free Consultation</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white xl:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMobileOpen((v) => {
                if (v) setOpenMenu(null);
                return !v;
              });
            }}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full hidden xl:block ${openMenu ? "pointer-events-auto" : "pointer-events-none"}`}
        onMouseEnter={() => openMenu && openMenuById(openMenu)}
        onMouseLeave={scheduleClose}
      >
        <div className="px-6 pb-4 pt-2">
          {openMenu === "services" && (
            <ServicesMegaMenuDesktop isOpen menuRef={megaMenuRef} onClose={closeMenu} />
          )}
          {openMenu === "solutions" && (
            <SolutionsMegaMenuDesktop isOpen menuRef={megaMenuRef} onClose={closeMenu} />
          )}
          {openMenu === "industries" && (
            <IndustriesMegaMenuDesktop isOpen menuRef={megaMenuRef} onClose={closeMenu} />
          )}
          {openMenu === "case-studies" && (
            <CaseStudiesMegaMenuDesktop isOpen menuRef={megaMenuRef} onClose={closeMenu} />
          )}
          {openMenu === "blog" && (
            <BlogMegaMenuDesktop isOpen menuRef={megaMenuRef} onClose={closeMenu} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 xl:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[min(100vw,28rem)] flex-col overflow-x-hidden overflow-y-auto overscroll-contain border-l border-white/10 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-6 xl:hidden"
              style={{ backgroundColor: NAVY }}
            >
              <nav className="min-w-0 flex-1 space-y-1" aria-label="Mobile">
                {navLinks.map((label) => {
                  if (label === "Services") {
                    return (
                      <div key={label} className="border-b border-white/10 py-2">
                        <button
                          type="button"
                          aria-expanded={openMenu === "services"}
                          onClick={() => setOpenMenu((current) => (current === "services" ? null : "services"))}
                          className="flex w-full items-center justify-between py-3 text-left text-[15px] font-medium text-white"
                        >
                          {label}
                          <ChevronDown className={`h-4 w-4 transition ${openMenu === "services" ? "rotate-180" : ""}`} aria-hidden="true" />
                        </button>
                        <ServicesMegaMenuMobile
                          isOpen={openMenu === "services"}
                          onClose={() => {
                            closeMenu();
                            setMobileOpen(false);
                          }}
                        />
                      </div>
                    );
                  }

                  if (label === "Solutions") {
                    return (
                      <div key={label} className="border-b border-white/10 py-2">
                        <button
                          type="button"
                          aria-expanded={openMenu === "solutions"}
                          onClick={() => setOpenMenu((current) => (current === "solutions" ? null : "solutions"))}
                          className="flex w-full items-center justify-between py-3 text-left text-[15px] font-medium text-white"
                        >
                          {label}
                          <ChevronDown className={`h-4 w-4 transition ${openMenu === "solutions" ? "rotate-180" : ""}`} aria-hidden="true" />
                        </button>
                        <SolutionsMegaMenuMobile
                          isOpen={openMenu === "solutions"}
                          onClose={() => {
                            closeMenu();
                            setMobileOpen(false);
                          }}
                        />
                      </div>
                    );
                  }

                  if (label === "Industries") {
                    return (
                      <div key={label} className="border-b border-white/10 py-2">
                        <button
                          type="button"
                          aria-expanded={openMenu === "industries"}
                          onClick={() => setOpenMenu((current) => (current === "industries" ? null : "industries"))}
                          className="flex w-full items-center justify-between py-3 text-left text-[15px] font-medium text-white"
                        >
                          {label}
                          <ChevronDown className={`h-4 w-4 transition ${openMenu === "industries" ? "rotate-180" : ""}`} aria-hidden="true" />
                        </button>
                        <IndustriesMegaMenuMobile
                          isOpen={openMenu === "industries"}
                          onClose={() => {
                            closeMenu();
                            setMobileOpen(false);
                          }}
                        />
                      </div>
                    );
                  }

                  if (label === "Case Studies") {
                    return (
                      <div key={label} className="border-b border-white/10 py-2">
                        <button
                          type="button"
                          aria-expanded={openMenu === "case-studies"}
                          onClick={() => setOpenMenu((current) => (current === "case-studies" ? null : "case-studies"))}
                          className="flex w-full items-center justify-between py-3 text-left text-[15px] font-medium text-white"
                        >
                          {label}
                          <ChevronDown className={`h-4 w-4 transition ${openMenu === "case-studies" ? "rotate-180" : ""}`} aria-hidden="true" />
                        </button>
                        <CaseStudiesMegaMenuMobile
                          isOpen={openMenu === "case-studies"}
                          onClose={() => {
                            closeMenu();
                            setMobileOpen(false);
                          }}
                        />
                      </div>
                    );
                  }

                  if (label === "Blog") {
                    return (
                      <div key={label} className="border-b border-white/10 py-2">
                        <button
                          type="button"
                          aria-expanded={openMenu === "blog"}
                          onClick={() => setOpenMenu((current) => (current === "blog" ? null : "blog"))}
                          className="flex w-full items-center justify-between py-3 text-left text-[15px] font-medium text-white"
                        >
                          {label}
                          <ChevronDown className={`h-4 w-4 transition ${openMenu === "blog" ? "rotate-180" : ""}`} aria-hidden="true" />
                        </button>
                        <BlogMegaMenuMobile
                          isOpen={openMenu === "blog"}
                          onClose={() => {
                            closeMenu();
                            setMobileOpen(false);
                          }}
                        />
                      </div>
                    );
                  }

                  if (label === "Contact") {
                    return (
                      <Link
                        key={label}
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="block border-b border-white/10 py-4 text-[15px] font-medium text-white/90 hover:text-white"
                      >
                        {label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={label}
                      href={navHref(label)}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-white/10 py-4 text-[15px] font-medium text-white/90 hover:text-white"
                    >
                      {label}
                    </a>
                  );
                })}
              </nav>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0f1a4e]"
              >
                Get Free Consultation
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}