import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  articleSlugs,
  categorySlugs,
  getArticleBySlug,
  getCategoryBySlug,
} from "@/data/blog";
import BlogSlugPage from "@/views/blog-slug-page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...categorySlugs, ...articleSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const article = getArticleBySlug(slug);

  if (category) {
    return {
      title: `${category.title} Articles | The Runner Software Solutions Blog`,
      description: category.description,
      openGraph: {
        title: `${category.title} | The Runner Blog`,
        type: "website",
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }

  if (article) {
    return {
      title: `${article.title} | The Runner Software Solutions Blog`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        type: "article",
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }

  return {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!categorySlugs.has(slug) && !articleSlugs.has(slug)) {
    notFound();
  }

  const article = getArticleBySlug(slug);
  const category = getCategoryBySlug(slug);

  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        datePublished: article.publishDateIso,
        author: { "@type": "Person", name: article.author.name },
        articleSection: getCategoryBySlug(article.categorySlug)?.title,
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <BlogSlugPage slug={slug} />
    </>
  );
}
