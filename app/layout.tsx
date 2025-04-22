import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animales Financieros",
  description: "Aprende a ordenar tus finanzas y prepara tu futuro financiero.",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wpg3grk.css" />
      </head>
      <body className="bg-white">{children}</body>
    </html>
  );
}
