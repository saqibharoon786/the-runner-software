import fs from "fs";
import path from "path";

const root = path.resolve(".");

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, content) {
  const full = path.join(root, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}

function stripRouteBoilerplate(content) {
  let result = content;
  result = result.replace(/^import \{ createFileRoute[^}]*\} from "@tanstack\/react-router";\n/m, "");
  result = result.replace(/^import \{ createFileRoute, Link[^}]*\} from "@tanstack\/react-router";\n/m, "");
  result = result.replace(/^import \{ createFileRoute, Link, notFound[^}]*\} from "@tanstack\/react-router";\n/m, "");
  result = result.replace(/^import \{ createFileRoute, Link, useNavigate[^}]*\} from "@tanstack\/react-router";\n/m, "");
  result = result.replace(/^export const Route = createFileRoute[\s\S]*?\n\}\);\n\n/m, "");
  result = result.replace(/^type BlogSearch[\s\S]*?\n\n/m, "");
  return result;
}

function convertLinks(content) {
  let result = content;
  result = result.replace(/\bto=\{([^}]+)\}/g, "href={$1}");
  result = result.replace(/\bto="([^"]+)"/g, 'href="$1"');
  result = result.replace(/\bto='([^']+)'/g, "href='$1'");
  result = result.replace(/\s+hash="newsletter"/g, "");
  result = result.replace(
    /href="\/blog"\s+search=\{\{ sort: "latest" \}\}/g,
    'href="/blog?sort=latest"',
  );
  result = result.replace(
    /href="\/blog"\s+search=\{\{ sort: "popular" \}\}/g,
    'href="/blog?sort=popular"',
  );
  result = result.replace(
    /href="\/blog"\s+search=\{\{ sort: "guides" \}\}/g,
    'href="/blog?sort=guides"',
  );
  result = result.replace(
    /href="\/blog"\s+search=\{\{ sort, q, page: p \}\}/g,
    "href={`/blog?sort=${sort}${q ? `&q=${encodeURIComponent(q)}` : \"\"}${p > 1 ? `&page=${p}` : \"\"}`}",
  );
  return result;
}

function addUseClientAndLink(content) {
  const hasUseClient = content.startsWith('"use client"');
  let body = content;
  if (!hasUseClient) {
    body = '"use client";\n\n' + body;
  }
  if (!body.includes('from "next/link"')) {
    body = body.replace(
      /^(\"use client\";\n\n)/,
      '$1import Link from "next/link";\n',
    );
  }
  body = body.replace(/import \{ Link \} from "@tanstack\/react-router";\n/g, "");
  body = body.replace(/import Link from "next\/link";\nimport Link from "next\/link";\n/g, 'import Link from "next/link";\n');
  return body;
}

function convertIndex() {
  let content = read("src/routes/index.tsx");
  content = stripRouteBoilerplate(content);
  content = content.replace(/^import \{ createFileRoute, Link \} from "@tanstack\/react-router";\n/m, "");
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(/^function Index\(\)/m, "export default function HomePage()");
  write("src/views/home-page.tsx", content);
}

function convertContact() {
  let content = read("src/routes/contact.tsx");
  content = stripRouteBoilerplate(content);
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(/^function ContactPage\(\)/m, "export default function ContactPage()");
  write("src/views/contact-page.tsx", content);
}

function convertBlogIndex() {
  let content = read("src/routes/blog/index.tsx");
  content = stripRouteBoilerplate(content);
  content = content.replace(
    /import \{ createFileRoute, Link, useNavigate \} from "@tanstack\/react-router";\n/,
    "",
  );
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(
    /const \{ q, sort, page = 1 \} = Route\.useSearch\(\);\n  const navigate = useNavigate\(\);/,
    `const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q") ?? undefined;
  const sortParam = searchParams.get("sort");
  const sort = sortParam === "popular" || sortParam === "guides" ? sortParam : "latest";
  const page = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);`,
  );
  content = content.replace(
    /navigate\(\{ to: "\/blog", search: \{ q: searchInput\.trim\(\) \|\| undefined, sort: "latest" \} \}\);/,
    `const params = new URLSearchParams();
                const trimmed = searchInput.trim();
                if (trimmed) params.set("q", trimmed);
                params.set("sort", "latest");
                router.push(\`/blog?\${params.toString()}\`);`,
  );
  content = content.replace(
    /^import \{ useMemo, useState \} from "react";/m,
    'import { useMemo, useState } from "react";\nimport { useRouter, useSearchParams } from "next/navigation";',
  );
  content = content.replace(/^function BlogIndexPage\(\)/m, "export default function BlogIndexPage()");
  write("src/views/blog-index-page.tsx", content);
}

function convertBlogSlug() {
  let content = read("src/routes/blog/$slug.tsx");
  content = stripRouteBoilerplate(content);
  content = content.replace(/import \{ createFileRoute, Link, notFound \} from "@tanstack\/react-router";\n/, "");
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(
    /^function BlogSlugPage\(\)/m,
    "export default function BlogSlugPage({ slug }: { slug: string })",
  );
  content = content.replace(/const \{ slug \} = Route\.useParams\(\);\n  /, "");
  content = content.replace(/\n  throw notFound\(\);\n\}$/, "\n}");
  write("src/views/blog-slug-page.tsx", content);
}

function convertCaseStudiesIndex() {
  let content = read("src/routes/case-studies/index.tsx");
  content = stripRouteBoilerplate(content);
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(/^function CaseStudiesIndexPage\(\)/m, "export default function CaseStudiesIndexPage()");
  write("src/views/case-studies-index-page.tsx", content);
}

function convertCaseStudySlug() {
  let content = read("src/routes/case-studies/$slug.tsx");
  content = stripRouteBoilerplate(content);
  content = content.replace(/import \{ createFileRoute, Link, notFound \} from "@tanstack\/react-router";\n/, "");
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(
    /^function CaseStudyDetailPage\(\)/m,
    "export default function CaseStudyDetailPage({ slug }: { slug: string })",
  );
  content = content.replace(/const \{ slug \} = Route\.useParams\(\);\n  /, "");
  write("src/views/case-study-slug-page.tsx", content);
}

function convertPortfolioSlug() {
  let content = read("src/routes/portfolio/$slug.tsx");
  content = stripRouteBoilerplate(content);
  content = content.replace(/import \{ createFileRoute, Link, notFound \} from "@tanstack\/react-router";\n/, "");
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(
    /^function PortfolioDetailPage\(\)/m,
    "export default function PortfolioDetailPage({ slug }: { slug: string })",
  );
  content = content.replace(/const \{ slug \} = Route\.useParams\(\);\n  /, "");
  write("src/views/portfolio-slug-page.tsx", content);
}

function convertIndustrySlug() {
  let content = read("src/routes/industries/$slug.tsx");
  content = stripRouteBoilerplate(content);
  content = content.replace(/import \{ createFileRoute, Link, notFound \} from "@tanstack\/react-router";\n/, "");
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(
    /^function IndustryPage\(\)/m,
    "export default function IndustryPage({ slug }: { slug: string })",
  );
  content = content.replace(/const \{ slug \} = Route\.useParams\(\);\n  /, "");
  write("src/views/industry-slug-page.tsx", content);
}

function convertServiceSolutionSlug() {
  let content = read("src/routes/$slug.tsx");
  content = stripRouteBoilerplate(content);
  content = content.replace(/import \{ createFileRoute, Link, notFound \} from "@tanstack\/react-router";\n/, "");
  content = convertLinks(content);
  content = addUseClientAndLink(content);
  content = content.replace(
    /^function SlugPage\(\)/m,
    "export default function ServiceSolutionPage({ slug }: { slug: string })",
  );
  content = content.replace(/const \{ slug \} = Route\.useParams\(\);\n  /, "");
  write("src/views/service-solution-slug-page.tsx", content);
}

function updateComponent(file) {
  let content = read(file);
  if (!content.includes("@tanstack/react-router")) return;
  const isClient =
    content.includes("useState") ||
    content.includes("useEffect") ||
    content.includes("useCallback") ||
    content.includes("useMemo") ||
    content.includes("useRef") ||
    content.includes("framer-motion") ||
    content.includes("AnimatePresence");
  content = content.replace(/import \{ Link \} from "@tanstack\/react-router";\n/g, 'import Link from "next/link";\n');
  content = convertLinks(content);
  if (isClient && !content.startsWith('"use client"')) {
    content = '"use client";\n\n' + content;
  }
  write(file, content);
}

convertIndex();
convertContact();
convertBlogIndex();
convertBlogSlug();
convertCaseStudiesIndex();
convertCaseStudySlug();
convertPortfolioSlug();
convertIndustrySlug();
convertServiceSolutionSlug();

[
  "src/components/layout/site-header.tsx",
  "src/components/layout/brand-logo.tsx",
  "src/components/layout/services-mega-menu.tsx",
  "src/components/layout/solutions-mega-menu.tsx",
  "src/components/layout/industries-mega-menu.tsx",
  "src/components/layout/case-studies-mega-menu.tsx",
  "src/components/layout/blog-mega-menu.tsx",
  "src/components/blog/blog-article-card.tsx",
  "src/components/portfolio/portfolio-section.tsx",
  "src/components/home/motion.tsx",
].forEach(updateComponent);

// Fix blog mega menu newsletter hash
let blogMenu = read("src/components/layout/blog-mega-menu.tsx");
blogMenu = blogMenu.replace(
  /href="\/blog"\s*\n\s*onClick=\{onNavigate\}/,
  'href="/blog#newsletter"\n            onClick={onNavigate}',
);
write("src/components/layout/blog-mega-menu.tsx", blogMenu);

console.log("Migration script complete");
