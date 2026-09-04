import type { Metadata } from "next";
import SolutionsPage from "@/views/solutions-page";

export const metadata: Metadata = {
  title: "Business Software Solutions – Industry-Specific Management Systems | The Runner Software",
  description:
    "Explore all-in-one software solutions for healthcare, education, retail, and real estate businesses. From hospital management to ERP and property management — find the right system to run your business.",
  openGraph: {
    title: "Business Software Solutions – Industry-Specific Management Systems | The Runner Software",
    description:
      "Explore all-in-one software solutions for healthcare, education, retail, and real estate businesses. From hospital management to ERP and property management — find the right system to run your business.",
    type: "website",
    url: "/solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Software Solutions – Industry-Specific Management Systems | The Runner Software",
    description:
      "Explore all-in-one software solutions for healthcare, education, retail, and real estate businesses. From hospital management to ERP and property management — find the right system to run your business.",
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function Page() {
  return <SolutionsPage />;
}
