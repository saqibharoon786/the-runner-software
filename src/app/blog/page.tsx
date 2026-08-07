import type { Metadata } from "next";
import { Suspense } from "react";
import BlogIndexPage from "@/views/blog-index-page";

export const metadata: Metadata = {
  title: "Blog & Knowledge Center | The Runner Software Solutions",
  description:
    "Expert insights on software development, AI, cloud computing, ERP, CRM, and digital transformation from The Runner Software Solutions.",
  openGraph: {
    title: "Blog | The Runner Software Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <BlogIndexPage />
    </Suspense>
  );
}
