"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Search, User } from "lucide-react";
import {
  blogCategories,
  getFeaturedArticles,
  getLatestArticles,
  getPopularArticles,
  getSeoGuideArticles,
  searchArticles,
  getBlogCategoryPath,
} from "@/data/blog";
import { BlogArticleCard } from "@/components/blog/blog-article-card";
import { SiteHeader } from "@/components/layout/site-header";
import { NAVY } from "@/lib/brand";

const PAGE_SIZE = 6;

export default function BlogIndexPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q") ?? undefined;
  const sortParam = searchParams.get("sort");
  const sort = sortParam === "popular" || sortParam === "guides" ? sortParam : "latest";
  const page = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);
  const [searchInput, setSearchInput] = useState(q ?? "");
  const [email, setEmail] = useState("");

  const filteredArticles = useMemo(() => {
    if (q) return searchArticles(q);
    if (sort === "popular") return getPopularArticles();
    if (sort === "guides") return getSeoGuideArticles();
    return getLatestArticles();
  }, [q, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedArticles = filteredArticles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const featured = getFeaturedArticles();
  const latest = getLatestArticles(3);
  const popular = getPopularArticles().slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-slate-100 bg-slate-50 py-16 md:py-24" aria-labelledby="blog-heading">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0f1a4e]">Knowledge Center</p>
              <h1 id="blog-heading" className="mt-4 text-4xl font-extrabold tracking-tight text-[#0b1437] md:text-5xl">
                Blog & Insights
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                Expert guides on software development, AI, cloud technologies, enterprise solutions, and digital transformation.
              </p>
            </motion.div>

            {/* Search */}
            <form
              className="mx-auto mt-10 flex max-w-xl gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const params = new URLSearchParams();
                const trimmed = searchInput.trim();
                if (trimmed) params.set("q", trimmed);
                params.set("sort", "latest");
                router.push(`/blog?${params.toString()}`);
              }}
            >
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  id="blog-search"
                  type="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search articles, topics, categories..."
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-[#0b1437] shadow-sm outline-none transition focus:border-[#0f1a4e]/40 focus:ring-2 focus:ring-[#0f1a4e]/10"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-[#0f1a4e] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0c1440]"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Featured Articles */}
        {!q && sort === "latest" && currentPage === 1 && (
          <section className="py-16 md:py-20" aria-labelledby="featured-heading">
            <div className="mx-auto max-w-6xl px-6">
              <h2 id="featured-heading" className="text-2xl font-extrabold text-[#0b1437]">Featured Articles</h2>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                {featured.map((article, i) => (
                  <motion.div key={article.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <BlogArticleCard article={article} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Latest & Popular side by side when not searching */}
        {!q && sort === "latest" && currentPage === 1 && (
          <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
              <div>
                <h2 className="text-xl font-extrabold text-[#0b1437]">Latest Articles</h2>
                <div className="mt-6 space-y-3">
                  {latest.map((article) => (
                    <BlogArticleCard key={article.slug} article={article} variant="compact" />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#0b1437]">Popular Articles</h2>
                <div className="mt-6 space-y-3">
                  {popular.map((article) => (
                    <BlogArticleCard key={article.slug} article={article} variant="compact" />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="py-16 md:py-20" aria-labelledby="categories-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="categories-heading" className="text-2xl font-extrabold text-[#0b1437]">Categories</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {blogCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={getBlogCategoryPath(cat.slug)}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0b1437] transition hover:border-[#0f1a4e]/30 hover:bg-[#0f1a4e]/5 hover:text-[#0f1a4e]"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="articles-heading">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="articles-heading" className="text-2xl font-extrabold text-[#0b1437]">
                {q ? `Results for "${q}"` : sort === "popular" ? "Popular Articles" : sort === "guides" ? "SEO Guides" : "All Articles"}
              </h2>
              <div className="flex gap-2">
                <Link href="/blog?sort=latest" className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${sort === "latest" && !q ? "bg-[#0f1a4e] text-white" : "border border-slate-200 text-slate-600"}`}>Latest</Link>
                <Link href="/blog?sort=popular" className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${sort === "popular" ? "bg-[#0f1a4e] text-white" : "border border-slate-200 text-slate-600"}`}>Popular</Link>
                <Link href="/blog?sort=guides" className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${sort === "guides" ? "bg-[#0f1a4e] text-white" : "border border-slate-200 text-slate-600"}`}>Guides</Link>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedArticles.map((article, i) => (
                <motion.div key={article.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                  <BlogArticleCard article={article} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav aria-label="Blog pagination" className="mt-12 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/blog?sort=${sort}${q ? `&q=${encodeURIComponent(q)}` : ""}${p > 1 ? `&page=${p}` : ""}`}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition ${
                      p === currentPage ? "bg-[#0f1a4e] text-white" : "border border-slate-200 text-slate-600 hover:border-[#0f1a4e]/30"
                    }`}
                  >
                    {p}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </section>

        {/* Author + Newsletter */}
        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f1a4e]/10">
                  <User className="h-7 w-7 text-[#0f1a4e]" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-[#0b1437]">Written by Experts</h2>
                  <p className="text-sm text-slate-500">Engineers, architects & strategists</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Our blog is authored by senior engineers, solution architects, and industry specialists with 10+ years of experience delivering enterprise software worldwide.
              </p>
            </div>
            <div id="newsletter" className="rounded-2xl border border-slate-200 bg-slate-50 p-8 scroll-mt-24">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-[#0f1a4e]" aria-hidden="true" />
                <h2 className="text-lg font-extrabold text-[#0b1437]">Newsletter Subscription</h2>
              </div>
              <p className="mt-4 text-sm text-slate-600">Get monthly insights on software development, AI, and digital transformation.</p>
              <form
                className="mt-6 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
              >
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0f1a4e]/40 focus:ring-2 focus:ring-[#0f1a4e]/10"
                />
                <button type="submit" className="rounded-lg bg-[#0f1a4e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c1440]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20" aria-labelledby="blog-cta">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #152456 100%)` }}>
              <h2 id="blog-cta" className="text-3xl font-extrabold">Need Expert Help With Your Project?</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-white/75">
                Turn insights into action — book a free consultation with our software development team.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] hover:bg-slate-100"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
