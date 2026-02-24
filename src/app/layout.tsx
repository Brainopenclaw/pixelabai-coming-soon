import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelabai.com"),
  title: "Pixelab AI — Aprende IA para tu negocio",
  description: "Aprende a usar la Inteligencia Artificial para transformar tu negocio. Guías prácticas, herramientas y cursos en español.",
  openGraph: {
    title: "Pixelab AI — Aprende IA para tu negocio",
    description: "Aprende a usar la IA para transformar tu negocio. Guías prácticas, herramientas y cursos en español.",
    type: "website",
    url: "https://pixelabai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelab AI — Aprende IA para tu negocio",
    description: "Aprende a usar la IA para transformar tu negocio. Guías prácticas, herramientas y cursos en español.",
  },
  alternates: {
    canonical: "https://pixelabai.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pixelab AI",
  url: "https://pixelabai.com",
  description: "Aprende a usar la Inteligencia Artificial para transformar tu negocio. Guías prácticas, herramientas y cursos en español.",
  sameAs: [
    "https://instagram.com/pixelabai",
    "https://tiktok.com/@pixelabai",
    "https://youtube.com/@pixelabai"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
