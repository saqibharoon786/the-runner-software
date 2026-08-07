"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import {
  articleSlugs,
  categorySlugs,
  getArticleBySlug,
  getCategoryBySlug,
  getArticlesByCategory,
  getBlogCategoryPath,
} from "@/data/blog";
import { BlogArticleCard } from "@/components/blog/blog-article-card";
import { SiteHeader } from "@/components/layout/site-header";
import { NAVY } from "@/lib/brand";

export default function BlogSlugPage({ slug }: { slug: string }) {
  const category = getCategoryBySlug(slug);
  const article = getArticleBySlug(slug);

  if (category) {
    const articles = getArticlesByCategory(category.slug);
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader />
        <main>
          <section className="border-b border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="category-heading">
            <div className="mx-auto max-w-6xl px-6">
              <Link href="/blog" className="text-sm font-semibold text-[#0f1a4e] hover:underline">← Back to Blog</Link>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0f1a4e]">Category</p>
                <h1 id="category-heading" className="mt-3 text-4xl font-extrabold text-[#0b1437] md:text-5xl">{category.title}</h1>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">{category.description}</p>
              </motion.div>
            </div>
          </section>
          <section className="py-16 md:py-20" aria-label={`${category.title} articles`}>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.length > 0 ? (
                articles.map((a) => <BlogArticleCard key={a.slug} article={a} />)
              ) : (
                <p className="col-span-full text-center text-slate-500">Articles coming soon in this category.</p>
              )}
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (article) {
    const cat = getCategoryBySlug(article.categorySlug);
    const related = getArticlesByCategory(article.categorySlug).filter((a) => a.slug !== article.slug).slice(0, 2);

    return (
      <div className="min-h-screen bg-white">
        <SiteHeader />
        <main>
          <section className="relative overflow-hidden border-b border-slate-100" aria-labelledby="article-title">
            <div className="absolute inset-0">
              <img src={article.image} alt="" className="h-full w-full object-cover opacity-20" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
            </div>
            <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-24">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <Link href="/blog" className="text-sm font-semibold text-[#0f1a4e] hover:underline">← Back to Blog</Link>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cat && (
                    <Link href={getBlogCategoryPath(cat.slug)} className="rounded-full bg-[#0f1a4e]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0f1a4e]">
                      {cat.title}
                    </Link>
                  )}
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold text-slate-600">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {article.readingTime}
                  </span>
                </div>
                <h1 id="article-title" className="mt-6 text-3xl font-extrabold tracking-tight text-[#0b1437] md:text-4xl">
                  {article.title}
                </h1>
                <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{article.excerpt}</p>
                <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                  <User className="h-4 w-4" aria-hidden="true" />
                  <span><strong className="text-[#0b1437]">{article.author.name}</strong> · {article.author.role}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.publishDateIso}>{article.publishDate}</time>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 md:py-20" aria-label="Article content">
            <div className="mx-auto max-w-3xl px-6">
              <img src={article.image} alt={article.title} className="mb-10 rounded-2xl border border-slate-200 shadow-lg" loading="lazy" />
              <div className="space-y-6">
                {article.content.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-[15px] leading-relaxed text-slate-700">{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="border-t border-slate-100 bg-slate-50 py-16 md:py-20" aria-labelledby="related-articles">
              <div className="mx-auto max-w-6xl px-6">
                <h2 id="related-articles" className="text-2xl font-extrabold text-[#0b1437]">Related Articles</h2>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {related.map((a) => (
                    <BlogArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="pb-20" aria-labelledby="article-cta">
            <div className="mx-auto max-w-4xl px-6">
              <div className="rounded-3xl p-10 text-center text-white shadow-2xl md:p-14" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #152456 100%)` }}>
                <h2 id="article-cta" className="text-2xl font-extrabold md:text-3xl">Ready to Build Your Solution?</h2>
                <p className="mx-auto mt-4 max-w-lg text-sm text-white/75">Talk to our team about turning these insights into a custom software project.</p>
                <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0f1a4e] hover:bg-slate-100">
                  Get Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return null;
}
