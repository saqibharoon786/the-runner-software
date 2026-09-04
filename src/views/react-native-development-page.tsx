"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, ChevronRight, Smartphone } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionSection, MotionCard } from "@/components/home/motion";
import {
  reactNativeDevelopmentSeo,
  reactNativeHero,
  whatIsReactNative,
  reactNativeServices,
  reactEcosystemSection,
  typescriptSection,
  architectureSection,
  newArchitectureSection,
  featuresTable,
  uiUxSection,
  backendSection,
  integrationsSection,
  nativeModulesSection,
  securitySection,
  performanceSection,
  testingSection,
  deploymentSection,
  expoVsCli,
  developmentProcess,
  mvpSection,
  enterpriseSection,
  migrationSection,
  modernizationSection,
  maintenanceSection,
  industriesSection,
  usaSection,
  canadaSection,
  costSection,
  timelineSection,
  rnVsFlutter,
  rnVsNative,
  whyChooseRunner,
  finalCta,
  reactNativeFaqs,
  WEB_MOBILE_DEVELOPMENT_PILLAR_PATH,
} from "@/data/react-native-development-page";
import { NAVY } from "@/lib/brand";

function PageSchema() {
  const baseUrl = "https://[yourdomain].com";
  const pageUrl = `${baseUrl}${reactNativeDevelopmentSeo.canonicalPath}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: reactNativeDevelopmentSeo.h1, description: reactNativeDevelopmentSeo.description, url: pageUrl },
      {
        "@type": "Service",
        serviceType: "React Native Development",
        name: "React Native Development Services",
        description:
          "Custom React Native development services including cross-platform Android and iOS applications, native module development, MVP development, enterprise applications, backend/API development, and ongoing maintenance and support.",
        provider: { "@type": "Organization", name: "The Runner Software Solutions" },
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Canada" }],
        url: pageUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "React Native Development Services",
          itemListElement: reactNativeServices.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/#services` },
          { "@type": "ListItem", position: 3, name: "Web & Mobile Development", item: `${baseUrl}${WEB_MOBILE_DEVELOPMENT_PILLAR_PATH}` },
          { "@type": "ListItem", position: 4, name: "React Native Development", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: reactNativeFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function BulletList({ items, check = false }: { items: string[]; check?: boolean }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
          {check ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
          ) : (
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f1a4e]" aria-hidden="true" />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

function ContextualLink({ before, text, href, after }: { before: string; text: string; href: string; after: string }) {
  return (
    <p className="mt-4 text-sm leading-relaxed text-slate-600">
      {before}
      <Link href={href} className="font-semibold text-[#0f1a4e] hover:underline">{text}</Link>
      {after}
    </p>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: { factor: string; [key: string]: string }[] }) {
  const keys = headers.slice(1);
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-bold text-[#0b1437]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.factor} className="border-t border-slate-100">
              <td className="px-4 py-3 font-semibold text-[#0b1437]">{row.factor}</td>
              {keys.map((k) => (
                <td key={k} className="px-4 py-3 text-slate-600">{row[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ReactNativeDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(reactNativeFaqs[0]?.q ?? null);

  return (
    <div className="min-h-screen bg-white">
      <PageSchema />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-slate-100" aria-labelledby="page-heading">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs font-medium text-slate-500">
              <Link href="/" className="hover:text-[#0f1a4e]">Home</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href="/#services" className="hover:text-[#0f1a4e]">Services</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href={WEB_MOBILE_DEVELOPMENT_PILLAR_PATH} className="hover:text-[#0f1a4e]">Web & Mobile Development</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-[#0f1a4e]">React Native Development</span>
            </nav>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <MotionSection>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: NAVY }}>
                  <Smartphone className="h-7 w-7" aria-hidden="true" />
                </div>
                <h1 id="page-heading" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b1437] md:text-5xl">
                  {reactNativeDevelopmentSeo.h1}
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{reactNativeHero.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{reactNativeHero.closing}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5" style={{ backgroundColor: NAVY }}>
                    {reactNativeHero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1437] transition hover:bg-slate-50">
                    {reactNativeHero.secondaryCta}
                  </Link>
                </div>
              </MotionSection>
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80"
                  alt={reactNativeDevelopmentSeo.imageAlt}
                  loading="eager"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{whatIsReactNative.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{whatIsReactNative.intro}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsReactNative.conceptsIntro}</p>
            <BulletList items={whatIsReactNative.concepts} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{whatIsReactNative.closing}</p>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">React Native Development Services</h2>
            <div className="mt-10 space-y-6">
              {reactNativeServices.map((s, i) => (
                <MotionCard key={s.title} delay={i * 0.02} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0b1437]">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  {s.link && <ContextualLink {...s.link} />}
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{reactEcosystemSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{reactEcosystemSection.intro}</p>
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{reactEcosystemSection.carriesOverTitle}</p>
              <BulletList items={reactEcosystemSection.carriesOver} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{reactEcosystemSection.differentTitle}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{reactEcosystemSection.different}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{reactEcosystemSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{typescriptSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{typescriptSection.intro}</p>
              <BulletList items={typescriptSection.benefits} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{typescriptSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{architectureSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{architectureSection.intro}</p>
              <BulletList items={architectureSection.layers} />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{architectureSection.stateIntro}</p>
              <BulletList items={architectureSection.stateApproaches} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{architectureSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{newArchitectureSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{newArchitectureSection.intro}</p>
              <BulletList items={newArchitectureSection.technologies} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{newArchitectureSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{featuresTable.title}</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-700">{featuresTable.intro}</p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Feature</th>
                    <th className="px-4 py-3 font-bold text-[#0b1437]">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {featuresTable.rows.map((row) => (
                    <tr key={row.feature} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-semibold text-[#0b1437]">{row.feature}</td>
                      <td className="px-4 py-3 text-slate-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{uiUxSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{uiUxSection.intro}</p>
              <BulletList items={uiUxSection.considerations} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{uiUxSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{backendSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{backendSection.intro}</p>
              <BulletList items={backendSection.components} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{backendSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{integrationsSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{integrationsSection.intro}</p>
              <BulletList items={integrationsSection.systems} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{integrationsSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{nativeModulesSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{nativeModulesSection.intro}</p>
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{nativeModulesSection.whenUsefulTitle}</p>
              <BulletList items={nativeModulesSection.whenUseful} check />
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{nativeModulesSection.approachTitle}</p>
              <BulletList items={nativeModulesSection.approach} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{nativeModulesSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{securitySection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{securitySection.intro}</p>
              <BulletList items={securitySection.practices} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{securitySection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{performanceSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{performanceSection.intro}</p>
              <BulletList items={performanceSection.areas} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{performanceSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{testingSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{testingSection.intro}</p>
              <BulletList items={testingSection.types} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{testingSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{deploymentSection.title}</h2>
              <p className="mt-4 text-sm font-semibold text-[#0b1437]">{deploymentSection.androidTitle}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{deploymentSection.android}</p>
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{deploymentSection.iosTitle}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{deploymentSection.ios}</p>
              <p className="mt-6 text-sm font-semibold text-[#0b1437]">{deploymentSection.beyondTitle}</p>
              <BulletList items={deploymentSection.beyond} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{deploymentSection.disclaimer}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{expoVsCli.title}</h2>
              <ComparisonTable
                headers={["Factor", "Expo", "React Native CLI / Bare Workflow"]}
                rows={expoVsCli.rows.map((r) => ({ factor: r.factor, expo: r.expo, cli: r.cli }))}
              />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{expoVsCli.closing}</p>
            </div>
          </div>
        </section>

        <section id="process" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">React Native Development Process</h2>
            <div className="mt-10 space-y-4">
              {developmentProcess.map((step) => (
                <div key={step.step} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f1a4e] text-xs font-bold text-white">{step.step}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0b1437]">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{mvpSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{mvpSection.intro}</p>
              <BulletList items={mvpSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{mvpSection.closing}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{enterpriseSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{enterpriseSection.intro}</p>
              <BulletList items={enterpriseSection.useCases} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{enterpriseSection.closing}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{migrationSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{migrationSection.intro}</p>
              <BulletList items={migrationSection.items} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{migrationSection.closing}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{modernizationSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{modernizationSection.intro}</p>
              <BulletList items={modernizationSection.problems} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{modernizationSection.closing}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{maintenanceSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{maintenanceSection.intro}</p>
              <BulletList items={maintenanceSection.items} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{maintenanceSection.closing}</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">React Native Development for Industries</h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industriesSection.map((ind) => (
                  <div key={ind.industry} className="rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-[#0b1437]">{ind.industry}</h3>
                    <p className="mt-1 text-sm text-slate-600">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-extrabold text-[#0b1437]">{usaSection.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{usaSection.body}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 className="text-xl font-extrabold text-[#0b1437]">{canadaSection.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{canadaSection.body}</p>
              </div>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{costSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{costSection.intro}</p>
              <BulletList items={costSection.factors} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{costSection.closing}</p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{timelineSection.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{timelineSection.intro}</p>
              <BulletList items={timelineSection.examples} check />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{timelineSection.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{rnVsFlutter.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{rnVsFlutter.intro}</p>
              <ComparisonTable
                headers={["Factor", "React Native", "Flutter"]}
                rows={rnVsFlutter.rows.map((r) => ({ factor: r.factor, rn: r.rn, flutter: r.flutter }))}
              />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{rnVsFlutter.closing}</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">{rnVsNative.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{rnVsNative.intro}</p>
              <ComparisonTable
                headers={["Factor", "React Native", "Native Android", "Native iOS"]}
                rows={rnVsNative.rows.map((r) => ({ factor: r.factor, rn: r.rn, android: r.android, ios: r.ios }))}
              />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-700">{rnVsNative.closing}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Why Choose The Runner Software Solutions?</h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseRunner.map(({ icon: Icon, title, desc }, i) => (
                <MotionCard key={title} delay={i * 0.03} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f1a4e]/10 text-[#0f1a4e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#0b1437]">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-extrabold text-[#0b1437] md:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-3">
              {reactNativeFaqs.map((f) => {
                const isOpen = openFaq === f.q;
                return (
                  <div key={f.q} className={`overflow-hidden rounded-2xl border bg-white transition ${isOpen ? "border-[#0f1a4e]/30 shadow-md" : "border-slate-200"}`}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : f.q)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                      <span className="text-sm font-bold text-[#0b1437]">{f.q}</span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-[#0f1a4e] text-white" : "bg-slate-100 text-[#0f1a4e]"}`}>
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600"><p>{f.a}</p></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14 bg-gradient-to-br from-[#0f1a4e] to-[#0c1440]">
              <h2 className="text-3xl font-extrabold md:text-4xl">{finalCta.headline}</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/80">{finalCta.intro}</p>
              <ol className="mx-auto mt-6 max-w-lg space-y-2 text-left text-sm text-white/80">
                {finalCta.steps.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mx-auto mt-6 max-w-2xl text-left text-sm leading-relaxed text-white/80">
                {finalCta.contextualLinks.map((link, i) => (
                  <span key={link.href}>
                    {link.before}
                    <Link href={link.href} className="font-semibold text-white underline underline-offset-2 hover:text-white/90">{link.text}</Link>
                    {link.after}
                  </span>
                ))}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] transition hover:bg-slate-100">
                  {finalCta.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  {finalCta.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
