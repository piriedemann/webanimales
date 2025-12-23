import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://animalesfinancieros.com'),
  title: "Animales Financieros",
  description: "Aprende a ordenar tus finanzas y prepara tu futuro financiero.",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "Animales Financieros",
    description: "Aprende a ordenar tus finanzas y prepara tu futuro financiero.",
    url: "https://animalesfinancieros.com",
    siteName: "Animales Financieros",
    images: [
      {
        url: '/images/logo-caras.png',
        width: 1200,
        height: 630,
        alt: 'Animales Financieros',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Animales Financieros",
    description: "Aprende a ordenar tus finanzas y prepara tu futuro financiero.",
    images: ['/images/logo-caras.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/wpg3grk.css" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
