import type { LucideIcon } from "lucide-react";
import {
  Hospital,
  GraduationCap,
  Pill,
  FlaskConical,
  Dumbbell,
  Trophy,
  Store,
  ShoppingCart,
  UtensilsCrossed,
  Hotel,
  Plane,
  Coffee,
  Home,
  HardHat,
  Factory,
  Truck,
  Bus,
  Landmark,
  Shield,
  Scale,
  Users,
  Radio,
  Building,
  HeartHandshake,
} from "lucide-react";

export type IndustryItem = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
};

export type IndustryColumn = {
  title: string;
  items: IndustryItem[];
};

export const industryColumns: IndustryColumn[] = [
  {
    title: "Healthcare & Education",
    items: [
      { title: "Healthcare", slug: "healthcare", description: "Custom software for hospitals, clinics and healthcare providers.", icon: Hospital },
      { title: "Education", slug: "education", description: "Digital learning platforms for schools, colleges and universities.", icon: GraduationCap },
      { title: "Pharmacy", slug: "pharmacy", description: "Pharmacy management and medicine inventory systems.", icon: Pill },
      { title: "Laboratory", slug: "laboratory", description: "Laboratory information management software.", icon: FlaskConical },
      { title: "Fitness & Gym", slug: "fitness", description: "Gym membership and fitness management software.", icon: Dumbbell },
      { title: "Sports Academy", slug: "sports", description: "Sports academy automation solutions.", icon: Trophy },
    ],
  },
  {
    title: "Retail & Hospitality",
    items: [
      { title: "Retail", slug: "retail", description: "Retail automation and inventory management.", icon: Store },
      { title: "Ecommerce", slug: "ecommerce", description: "Online stores and marketplace platforms.", icon: ShoppingCart },
      { title: "Restaurant", slug: "restaurant", description: "Restaurant POS and order management systems.", icon: UtensilsCrossed },
      { title: "Hotel", slug: "hotel", description: "Hotel booking and hospitality software.", icon: Hotel },
      { title: "Travel & Tourism", slug: "travel", description: "Travel agency and booking management.", icon: Plane },
      { title: "Food & Beverage", slug: "food-beverage", description: "Software for food production and restaurant chains.", icon: Coffee },
    ],
  },
  {
    title: "Business & Enterprise",
    items: [
      { title: "Real Estate", slug: "real-estate", description: "CRM and property management platforms.", icon: Home },
      { title: "Construction", slug: "construction", description: "Construction ERP and project management.", icon: HardHat },
      { title: "Manufacturing", slug: "manufacturing", description: "Manufacturing ERP and production planning.", icon: Factory },
      { title: "Logistics", slug: "logistics", description: "Fleet and logistics management software.", icon: Truck },
      { title: "Transportation", slug: "transportation", description: "Transportation management solutions.", icon: Bus },
      { title: "Finance", slug: "finance", description: "Financial software and fintech platforms.", icon: Landmark },
    ],
  },
  {
    title: "Modern Industries",
    items: [
      { title: "Insurance", slug: "insurance", description: "Insurance claim and policy management.", icon: Shield },
      { title: "Legal", slug: "legal", description: "Law firm and legal practice software.", icon: Scale },
      { title: "HR & Recruitment", slug: "hr-recruitment", description: "Recruitment and HR automation.", icon: Users },
      { title: "Telecommunications", slug: "telecommunications", description: "Telecom management solutions.", icon: Radio },
      { title: "Government", slug: "government", description: "Digital public service platforms.", icon: Building },
      { title: "Non-Profit", slug: "non-profit", description: "NGO and donation management software.", icon: HeartHandshake },
    ],
  },
];

export const allIndustries: IndustryItem[] = industryColumns.flatMap((col) => col.items);

export const industrySlugs = new Set(allIndustries.map((i) => i.slug));

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return allIndustries.find((i) => i.slug === slug);
}

export function getIndustryPath(slug: string) {
  return `/industries/${slug}` as const;
}
