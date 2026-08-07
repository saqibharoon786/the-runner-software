import type { Metadata } from "next";
import ContactPage from "@/views/contact-page";

export const metadata: Metadata = {
  title: "Contact Us — The Runner Software Solutions",
  description:
    "Get in touch with The Runner Software Solutions for a free consultation on your next web, mobile, or AI-powered project.",
  openGraph: {
    title: "Contact Us — The Runner Software Solutions",
    description:
      "Get in touch with The Runner Software Solutions for a free consultation on your next project.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <ContactPage />;
}
