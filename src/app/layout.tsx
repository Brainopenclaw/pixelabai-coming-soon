import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    siteName: "Pixelab AI",
    images: [
      {
        url: "https://pixelabai.com/blog/ia-para-emprendedores.jpg",
        width: 1200,
        height: 630,
        alt: "Pixelab AI — Aprende IA para tu negocio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelab AI — Aprende IA para tu negocio",
    description: "Aprende a usar la IA para transformar tu negocio. Guías prácticas, herramientas y cursos en español.",
    images: ["https://pixelabai.com/blog/ia-para-emprendedores.jpg"],
  },
  verification: {
    google: "RUEe9uoBgrXatygAO6enWdIN9j5xxiNrpjs5leiQ_z8",
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
    "https://www.instagram.com/jorgeailab",
    "https://www.tiktok.com/@jorgeailab",
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J8MDGBXNF0"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-J8MDGBXNF0');`}
        </Script>
        <JsonLd data={organizationSchema} />
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
