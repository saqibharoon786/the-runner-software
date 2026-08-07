import type { LucideIcon } from "lucide-react";
import {
  Hospital,
  GraduationCap,
  Store,
  Building2,
  Stethoscope,
  Pill,
  FlaskConical,
  FileHeart,
  Video,
  School,
  BookOpen,
  Dumbbell,
  Trophy,
  Users,
  Boxes,
  Users2,
  CreditCard,
  Package,
  Warehouse,
  Briefcase,
  Calculator,
  UtensilsCrossed,
  Hotel,
  Home,
  HardHat,
  Truck,
  Factory,
  Car,
  UserCheck,
  Files,
} from "lucide-react";

export type SolutionItem = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};

export type SolutionColumn = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: SolutionItem[];
};

export const solutionColumns: SolutionColumn[] = [
  {
    title: "Healthcare Solutions",
    description: "Digital healthcare solutions for clinics, hospitals and medical organizations.",
    icon: Hospital,
    items: [
      { title: "Hospital Management System", slug: "hospital-management-system", description: "Unified platform for patients, billing, pharmacy, labs and staff.", icon: Hospital, featured: true },
      { title: "Clinic Management System", slug: "clinic-management-system", description: "Streamline appointments, EMR, billing and patient communication.", icon: Stethoscope },
      { title: "Pharmacy Management System", slug: "pharmacy-management-system", description: "Inventory, prescriptions, suppliers and sales in one system.", icon: Pill },
      { title: "Laboratory Management System", slug: "laboratory-management-system", description: "Track samples, results, equipment and lab workflows.", icon: FlaskConical },
      { title: "Electronic Medical Records (EMR)", slug: "electronic-medical-records", description: "Secure digital records accessible across departments.", icon: FileHeart },
      { title: "Telemedicine Solution", slug: "telemedicine-solution", description: "Virtual consultations, scheduling and remote patient care.", icon: Video },
    ],
  },
  {
    title: "Education & Fitness",
    description: "Software solutions for educational institutions and fitness businesses.",
    icon: GraduationCap,
    items: [
      { title: "School Management System", slug: "school-management-system", description: "Admissions, attendance, exams, fees and parent portals.", icon: School },
      { title: "College Management System", slug: "college-management-system", description: "Manage departments, courses, faculty and student records.", icon: GraduationCap },
      { title: "Learning Management System (LMS)", slug: "learning-management-system", description: "Deliver courses, assessments and progress tracking online.", icon: BookOpen },
      { title: "Gym Management System", slug: "gym-management-system", description: "Manage memberships, attendance, trainers, payments and reports.", icon: Dumbbell, featured: true },
      { title: "Sports Academy Management", slug: "sports-academy-management", description: "Coaching schedules, athlete profiles, fees and performance.", icon: Trophy },
      { title: "Coaching Center Management", slug: "coaching-center-management", description: "Classes, batches, enrollments and fee management simplified.", icon: Users },
    ],
  },
  {
    title: "Retail & Business",
    description: "Business automation software for growing enterprises.",
    icon: Store,
    items: [
      { title: "ERP Software", slug: "erp-software", description: "Unify finance, HR, inventory and operations in one platform.", icon: Boxes },
      { title: "CRM Software", slug: "crm-software", description: "Pipeline, leads, automation and customer analytics.", icon: Users2 },
      { title: "POS Software", slug: "pos-software", description: "Fast checkout, receipts, inventory sync and reporting.", icon: CreditCard },
      { title: "Inventory Management System", slug: "inventory-management-system", description: "Real-time stock, barcode tracking and purchase orders.", icon: Package },
      { title: "Warehouse Management System", slug: "warehouse-management-system", description: "Optimize picking, packing, shipping and warehouse ops.", icon: Warehouse },
      { title: "HRMS Software", slug: "hrms-software", description: "Payroll, attendance, leaves and employee self-service.", icon: Briefcase },
      { title: "Accounting Software", slug: "accounting-software", description: "Ledgers, invoicing, expenses and financial reporting.", icon: Calculator },
      { title: "Restaurant Management System", slug: "restaurant-management-system", description: "POS, KDS, table management, inventory and online orders.", icon: UtensilsCrossed },
      { title: "Hotel Management System", slug: "hotel-management-system", description: "Reservations, housekeeping, billing and guest experience.", icon: Hotel },
    ],
  },
  {
    title: "Real Estate & Enterprise",
    description: "Industry-specific enterprise business solutions.",
    icon: Building2,
    items: [
      { title: "Real Estate CRM", slug: "real-estate-crm", description: "Leads, listings, agent workflows and deal tracking.", icon: Home },
      { title: "Property Management System", slug: "property-management-system", description: "Tenants, leases, maintenance and rent collection.", icon: Building2 },
      { title: "Construction Management Software", slug: "construction-management-software", description: "Projects, contractors, budgets and site progress.", icon: HardHat },
      { title: "Logistics Management System", slug: "logistics-management-system", description: "Fleet, routes, shipments and real-time tracking.", icon: Truck },
      { title: "Manufacturing ERP", slug: "manufacturing-erp", description: "Production planning, BOM, quality and supply chain.", icon: Factory },
      { title: "Fleet Management System", slug: "fleet-management-system", description: "Vehicle tracking, maintenance, fuel and driver logs.", icon: Car },
      { title: "Visitor Management System", slug: "visitor-management-system", description: "Check-in, badges, security logs and host notifications.", icon: UserCheck },
      { title: "Document Management System", slug: "document-management-system", description: "Secure storage, versioning, search and access control.", icon: Files },
    ],
  },
];

export const allSolutions: SolutionItem[] = solutionColumns.flatMap((col) => col.items);

export const solutionSlugs = new Set(allSolutions.map((s) => s.slug));

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return allSolutions.find((s) => s.slug === slug);
}

export function getSolutionPath(slug: string) {
  return `/${slug}` as const;
}
