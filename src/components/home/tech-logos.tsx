/** Official technology logos via Simple Icons CDN */

export type TechItem = {
  name: string;
  slug: string;
  color?: string;
};

export const trustedTechnologies: TechItem[] = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "Laravel", slug: "laravel", color: "FF2D20" },
  { name: "Flutter", slug: "flutter", color: "02569B" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "AWS", slug: "amazonaws", color: "232F3E" },
  { name: "Azure", slug: "microsoftazure", color: "0078D4" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
];

export type TechStackItem = TechItem & { note: string };

export const techStackTabs: { id: string; label: string; items: TechStackItem[] }[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", slug: "react", color: "61DAFB", note: "Fast, component-driven interfaces" },
      { name: "Angular", slug: "angular", color: "DD0031", note: "Structured enterprise frontends" },
      { name: "Vue.js", slug: "vuedotjs", color: "4FC08D", note: "Progressive, flexible UI development" },
      { name: "Next.js", slug: "nextdotjs", color: "000000", note: "Production-ready React applications" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "339933", note: "Scalable JavaScript server runtime" },
      { name: ".NET", slug: "dotnet", color: "512BD4", note: "Enterprise-grade Microsoft stack" },
      { name: "Java", slug: "openjdk", color: "437291", note: "Robust systems for large-scale apps" },
      { name: "Python", slug: "python", color: "3776AB", note: "Rapid backend and data services" },
      { name: "PHP", slug: "php", color: "777BB4", note: "Mature web application backends" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: [
      { name: "Swift", slug: "swift", color: "F05138", note: "Native iOS performance" },
      { name: "Kotlin", slug: "kotlin", color: "7F52FF", note: "Modern native Android development" },
      { name: "Flutter", slug: "flutter", color: "02569B", note: "Cross-platform UI from one codebase" },
      { name: "React Native", slug: "react", color: "61DAFB", note: "Shared mobile delivery with React" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    items: [
      { name: "TensorFlow", slug: "tensorflow", color: "FF6F00", note: "Production ML model training" },
      { name: "PyTorch", slug: "pytorch", color: "EE4C2C", note: "Flexible deep learning workflows" },
      { name: "OpenAI", slug: "openai", color: "412991", note: "LLM-powered product features" },
      { name: "LangChain", slug: "langchain", color: "1C3C3C", note: "Composable AI agent workflows" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: [
      { name: "AWS", slug: "amazonaws", color: "232F3E", note: "Global cloud infrastructure" },
      { name: "Azure", slug: "microsoftazure", color: "0078D4", note: "Enterprise Microsoft cloud" },
      { name: "Google Cloud", slug: "googlecloud", color: "4285F4", note: "Scalable GCP deployments" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    items: [
      { name: "Docker", slug: "docker", color: "2496ED", note: "Consistent containerized environments" },
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5", note: "Orchestrated container scaling" },
      { name: "Jenkins", slug: "jenkins", color: "D24939", note: "Automated build pipelines" },
      { name: "GitHub Actions", slug: "githubactions", color: "2088FF", note: "CI/CD integrated with GitHub" },
      { name: "Terraform", slug: "terraform", color: "844FBA", note: "Infrastructure as code" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1", note: "Reliable relational data storage" },
      { name: "MySQL", slug: "mysql", color: "4479A1", note: "Widely adopted SQL databases" },
      { name: "MongoDB", slug: "mongodb", color: "47A248", note: "Flexible document databases" },
      { name: "Redis", slug: "redis", color: "FF4438", note: "High-speed caching and queues" },
    ],
  },
  {
    id: "cms",
    label: "CMS",
    items: [
      { name: "WordPress", slug: "wordpress", color: "21759B", note: "Flexible content publishing" },
      { name: "Sanity", slug: "sanity", color: "F03E2F", note: "Structured headless content" },
      { name: "Strapi", slug: "strapi", color: "4945FF", note: "Customizable headless CMS" },
      { name: "Contentful", slug: "contentful", color: "2478CC", note: "Enterprise content APIs" },
    ],
  },
];

export const techCategories: { group: string; items: TechItem[] }[] = [
  {
    group: "Frontend",
    items: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "Vue.js", slug: "vuedotjs", color: "4FC08D" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Laravel", slug: "laravel", color: "FF2D20" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "PHP", slug: "php", color: "777BB4" },
    ],
  },
  {
    group: "Mobile",
    items: [
      { name: "Flutter", slug: "flutter", color: "02569B" },
      { name: "React Native", slug: "react", color: "61DAFB" },
    ],
  },
  {
    group: "Cloud",
    items: [
      { name: "AWS", slug: "amazonaws", color: "232F3E" },
      { name: "Azure", slug: "microsoftazure", color: "0078D4" },
      { name: "Google Cloud", slug: "googlecloud", color: "4285F4" },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
    ],
  },
  {
    group: "DevOps",
    items: [
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      { name: "GitHub", slug: "github", color: "181717" },
    ],
  },
];

export function techLogoUrl(slug: string, color?: string) {
  return color ? `https://cdn.simpleicons.org/${slug}/${color}` : `https://cdn.simpleicons.org/${slug}`;
}

type TechLogoProps = {
  tech: TechItem;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-12 w-12" };

export function TechLogo({ tech, size = "md", className = "" }: TechLogoProps) {
  return (
    <img
      src={techLogoUrl(tech.slug, tech.color)}
      alt={`${tech.name} logo`}
      loading="lazy"
      width={48}
      height={48}
      className={`${sizeMap[size]} object-contain ${className}`}
    />
  );
}

type TechCardProps = {
  tech: TechItem;
  variant?: "light" | "dark";
};

export function TechCard({ tech, variant = "light" }: TechCardProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={`group flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDark
          ? "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
          : "border-slate-200 bg-white hover:border-[#0f1a4e]/20 hover:shadow-[#0f1a4e]/10"
      }`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-xl transition duration-300 group-hover:scale-110 ${
          isDark ? "bg-white/10 group-hover:bg-white/20" : "bg-slate-50 group-hover:bg-[#0f1a4e]/5"
        }`}
      >
        <TechLogo tech={tech} size="lg" className="transition duration-300 group-hover:scale-105" />
      </div>
      <span className={`text-sm font-semibold ${isDark ? "text-white/90" : "text-[#0b1437]"}`}>{tech.name}</span>
    </div>
  );
}
