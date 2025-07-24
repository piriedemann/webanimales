'use client';

import Link from 'next/link';

export default function Contacto() {
  return (
    <main className="bg-white min-h-screen py-16 font-['roc-grotesk']">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[#1C1C1C] text-center">Contacto</h1>
        <div className="bg-[#1C1C1C] p-8 rounded-2xl shadow-lg flex flex-col gap-8 items-center">
          <p className="text-lg text-white text-center">
            Escríbenos por Instagram <br />
            <Link href="https://www.instagram.com/animales_financieros/" target="_blank" rel="noopener noreferrer" className="text-[#FDB813] underline">@animales_financieros</Link>
            <br />
            o envíanos un correo a <br />
            <a href="mailto:animaaalesfinancieros@gmail.com" className="text-[#B784A7] underline">animaaalesfinancieros@gmail.com</a>
          </p>
          <a
            href="mailto:animaaalesfinancieros@gmail.com"
            className="bg-[#FDB813] text-black font-bold py-3 px-8 rounded-md hover:bg-[#FFD966] transition-colors text-lg"
          >
            Enviar correo
          </a>
        </div>
      </div>
    </main>
  );
} 