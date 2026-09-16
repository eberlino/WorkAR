import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/ui/Navbar"; // <-- Importamos nuestra Barra

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Actualizamos el título y descripción para el SEO de tu plataforma
export const metadata: Metadata = {
  title: "WorkAR | El nexo definitivo para el Talento IT",
  description: "Marketplace de servicios IT, programación e Inteligencia Artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es" // Cambiamos a español
      className={cn("h-full", "antialiased", "dark", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        {/* Aquí agregamos nuestra Barra de Navegación */}
        <Navbar />
        
        {/* Aquí se carga el resto del contenido (como la portada) */}
        {children}
      </body>
    </html>
  );
}