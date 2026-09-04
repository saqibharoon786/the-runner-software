import type { Metadata } from "next";
import HealthcareSolutionsPage from "@/views/healthcare-solutions-page";

export const metadata: Metadata = {
  title: "Healthcare Software Solutions – Hospital, Clinic & Pharmacy Management Systems",
  description:
    "Digital healthcare solutions for clinics, hospitals, and medical organizations. Manage patients, billing, and pharmacy operations with purpose-built healthcare software. Book a free demo.",
  openGraph: {
    title: "Healthcare Software Solutions – Hospital, Clinic & Pharmacy Management Systems",
    description:
      "Digital healthcare solutions for clinics, hospitals, and medical organizations. Manage patients, billing, and pharmacy operations with purpose-built healthcare software. Book a free demo.",
    type: "website",
    url: "/solutions/healthcare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Software Solutions – Hospital, Clinic & Pharmacy Management Systems",
    description:
      "Digital healthcare solutions for clinics, hospitals, and medical organizations. Manage patients, billing, and pharmacy operations with purpose-built healthcare software. Book a free demo.",
  },
  alternates: {
    canonical: "/solutions/healthcare",
  },
};

export default function Page() {
  return <HealthcareSolutionsPage />;
}
