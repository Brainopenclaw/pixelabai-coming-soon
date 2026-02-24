import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixelab AI — Próximamente",
  description: "Aprende a usar la Inteligencia Artificial para transformar tu negocio y tu vida.",
  openGraph: {
    title: "Pixelab AI — Próximamente",
    description: "Aprende a usar la IA para transformar tu negocio y tu vida.",
    type: "website",
    url: "https://pixelabai.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pixelab AI",
  url: "https://pixelabai.com",
  logo: "https://pixelabai.com/logo.png",
  description: "Aprende a usar la Inteligencia Artificial para transformar tu negocio y tu vida.",
  sameAs: [
    "https://linkedin.com/company/pixelabai",
    "https://twitter.com/pixelabai",
    "https://instagram.com/pixelabai",
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
        {children}
      </body>
    </html>
  );
}
