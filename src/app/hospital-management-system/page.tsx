import type { Metadata } from "next";
import HospitalManagementSystemPage from "@/views/hospital-management-system-page";

export const metadata: Metadata = {
  title: "Hospital Management System Software – All-in-One HMS for Hospitals & Clinics",
  description:
    "Run your hospital on one unified platform. Manage patients, billing, pharmacy, labs, staff and reporting with our all-in-one Hospital Management System. Book a free demo today.",
  keywords: [
    "hospital management system",
    "hospital management software",
    "HMS software",
    "hospital information system",
    "hospital billing software",
    "EMR software",
    "healthcare management system",
    "clinic management software",
    "pharmacy management",
    "hospital ERP",
  ],
  openGraph: {
    title: "Hospital Management System Software – All-in-One HMS for Hospitals & Clinics",
    description:
      "Run your hospital on one unified platform. Manage patients, billing, pharmacy, labs, staff and reporting with our all-in-one Hospital Management System. Book a free demo today.",
    type: "website",
    url: "/hospital-management-system",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Management System Software – All-in-One HMS for Hospitals & Clinics",
    description:
      "Run your hospital on one unified platform. Manage patients, billing, pharmacy, labs, staff and reporting with our all-in-one Hospital Management System. Book a free demo today.",
  },
  alternates: {
    canonical: "/hospital-management-system",
  },
};

export default function Page() {
  return <HospitalManagementSystemPage />;
}
