import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manada 10% - Animales Financieros",
  description: "Súmate a la manada",
  openGraph: {
    title: "Manada 10% - Animales Financieros",
    description: "Súmate a la manada",
    url: "https://animalesfinancieros.com/manada10",
    siteName: "Animales Financieros",
    images: [
      {
        url: '/images/manada10.png',
        width: 1200,
        height: 630,
        alt: 'Manada 10%',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Manada 10% - Animales Financieros",
    description: "Súmate a la manada",
    images: ['/images/manada10.png'],
  },
};

export default function ImpulsoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}

