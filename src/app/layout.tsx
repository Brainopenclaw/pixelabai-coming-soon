import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixelab AI — Aprende IA para tu negocio",
  description: "Aprende a usar la Inteligencia Artificial para transformar tu negocio. Guías prácticas, herramientas y cursos en español.",
  metadataBase: new URL("https://pixelabai.com"),
  openGraph: {
    title: "Pixelab AI — Aprende IA para tu negocio",
    description: "Aprende a usar la Inteligencia Artificial para transformar tu negocio. Guías prácticas, herramientas y cursos en español.",
    type: "website",
    url: "https://pixelabai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelab AI — Aprende IA para tu negocio",
    description: "Aprende a usar la Inteligencia Artificial para transformar tu negocio. Guías prácticas, herramientas y cursos en español.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
