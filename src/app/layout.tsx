import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cursos Online - Aprende con los Mejores",
  description: "Explora una amplia variedad de cursos en línea y obtén certificaciones.",
  keywords: "cursos online, certificaciones, educación, aprendizaje",
  openGraph: {
    title: "Cursos Online - Aprende con los Mejores",
    description: "Explora una amplia variedad de cursos en línea y obtén certificaciones.",
    type: "website",
    url: "https://tu-sitio.com",
    images: [
      {
        url: "https://tu-sitio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cursos Online",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Aquí puedes incluir Navbar si es un layout global */}
          {children}
          {/* Aquí puedes incluir Footer si es un layout global */}
        </div>
      </body>
    </html>
  );
}

