import type { Metadata } from "next";
import "./globals.css";

const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4632d83e-4f5c-44d5-a957-5809e47f1d79/id-preview-15ff5f67--24d6ec18-c1e3-4bcb-b3e0-3b9fd17550a5.lovable.app-1784355118949.png";

const SITE_TITLE = "Custom Software Development Company | The Runner Software Solutions";
const SITE_DESCRIPTION =
  "The Runner Software Solutions builds custom software, ERP, CRM, SaaS, AI, web and mobile applications for businesses in the USA, UK, Canada, UAE, Saudi Arabia, Australia and Europe.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
