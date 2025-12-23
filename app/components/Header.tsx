'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1C1C1C] border-b border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 font-['roc-grotesk']">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-base sm:text-lg md:text-xl font-bold text-white">Animales Financieros</Link>
        </div>
        <div className="flex gap-6">
          <Link href="/" className="text-lg text-white hover:text-[#FDB813] transition-colors">Home</Link>
          <Link href="/cursos" className="text-lg text-white hover:text-[#FDB813] transition-colors">Cursos</Link>
          <Link href="/manada10" className="text-lg text-white hover:text-[#FDB813] transition-colors">Manada 10%</Link>
          <Link href="/contacto" className="text-lg text-white hover:text-[#FDB813] transition-colors">Contacto</Link>
        </div>
      </nav>
    </header>
  );
} 