import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";
import { NAVY_FOOTER } from "@/lib/brand";
import { footerLinks } from "@/data/home-page-content";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY_FOOTER }} className="text-white/80" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <BrandLogo asLink={false} darkBackground />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Enterprise software development for businesses worldwide — custom builds, cloud, AI, and long-term support.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" /> [Email]
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" /> [Phone]
              </div>
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
            { title: "Services", href: "/#services", items: footerLinks.services },
            { title: "Solutions", href: "/solutions", items: footerLinks.solutions },
            { title: "Industries", href: "/#industries", items: footerLinks.industries },
            { title: "Resources", href: "/blog", items: footerLinks.resources },
          ].map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <Link href={col.href} className="text-sm font-bold text-white hover:text-cyan-300 transition">
                {col.title}
              </Link>
              <ul className="mt-5 space-y-2.5 text-sm text-white/70">
                {col.items.map((item) => (
                  <li key={item}>
                    {col.title === "Solutions" ? (
                      <Link href="/solutions" className="transition hover:text-white">
                        {item}
                      </Link>
                    ) : (
                      <span className="cursor-default">{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-white/50">
            <MapPin className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />Locations: [Office locations — verified addresses only]
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-white/50 md:flex-row md:text-left">
          <div>© {new Date().getFullYear()} The Runner Software Solutions. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
