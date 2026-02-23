import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
