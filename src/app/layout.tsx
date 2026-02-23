import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pixelab AI — Próximamente",
    template: "%s | Pixelab AI",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Pixelab AI — Próximamente",
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pixelab AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelab AI — Próximamente",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <StructuredData data={[getOrganizationSchema(), getWebsiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
