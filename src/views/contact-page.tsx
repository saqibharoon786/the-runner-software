"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/brand";

const NAVY = "#0f1a4e";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <BrandLogo darkBackground />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </header>

      {/* Contact section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0f1a4e]">Get in Touch</span>
            <h1 className="mt-3 text-4xl font-extrabold text-[#0b1437] md:text-5xl">Let&apos;s build something amazing</h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] text-slate-600">
              Tell us about your project and get a free consultation from our senior engineering team.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1a4e] to-[#0c1440] p-8 text-white shadow-2xl md:p-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
                  Start your project today
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  We typically respond within one business day. Whether you have a detailed spec or just an idea, we can help.
                </p>
                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Email</div>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Phone</div>
                      <a href={`tel:${CONTACT_PHONE}`} className="font-medium hover:underline">{CONTACT_PHONE}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Office</div>
                      <div className="font-medium">Lahore, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-sm placeholder-white/60 ring-1 ring-white/20 focus:outline-none focus:ring-white/60"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-sm placeholder-white/60 ring-1 ring-white/20 focus:outline-none focus:ring-white/60"
                />
                <input
                  type="text"
                  placeholder="Company (optional)"
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-sm placeholder-white/60 ring-1 ring-white/20 focus:outline-none focus:ring-white/60"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-sm placeholder-white/60 ring-1 ring-white/20 focus:outline-none focus:ring-white/60"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0f1a4e] hover:bg-slate-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
