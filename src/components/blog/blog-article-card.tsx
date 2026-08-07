import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogArticle } from "@/data/blog";
import { getBlogArticlePath, getCategoryBySlug } from "@/data/blog";

type BlogArticleCardProps = {
  article: BlogArticle;
  onNavigate?: () => void;
  variant?: "default" | "compact";
};

export function BlogArticleCard({ article, onNavigate, variant = "default" }: BlogArticleCardProps) {
  const category = getCategoryBySlug(article.categorySlug);

  if (variant === "compact") {
    return (
      <Link
        href={getBlogArticlePath(article.slug)}
        onClick={onNavigate}
        className="group flex gap-3 rounded-xl border border-slate-200/80 bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#0f1a4e]/20 hover:shadow-md hover:shadow-[#4f6bff]/10"
      >
        <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg">
          <img src={article.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold text-[#0b1437] line-clamp-2 group-hover:text-[#0f1a4e]">{article.title}</p>
          <p className="mt-1 text-[10px] text-slate-500">{article.readingTime}</p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0f1a4e]/20 hover:shadow-xl hover:shadow-[#4f6bff]/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          width={800}
          height={500}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-[#0f1a4e] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            {category.title}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          <time dateTime={article.publishDateIso}>{article.publishDate}</time>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 normal-case">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingTime}
          </span>
        </div>
        <h3 className="mt-4 flex-1 text-base font-bold leading-snug text-[#0b1437] group-hover:text-[#0f1a4e]">{article.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-2">{article.excerpt}</p>
        <p className="mt-4 text-xs font-semibold text-slate-500">{article.author.name}</p>
        <Link
          href={getBlogArticlePath(article.slug)}
          onClick={onNavigate}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0f1a4e]"
        >
          Reads More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
