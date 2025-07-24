'use client';

import Image from 'next/image';

export default function HeroCurso() {
  return (
    <section className="relative py-16 bg-[#1C1C1C] text-white overflow-hidden font-['roc-grotesk']">
      {/* Título del curso */}
      <div className="absolute top-0 left-0 right-0 flex justify-center py-4">
        <div className="bg-white text-black px-8 py-2 rounded-full">
          <p className="text-lg font-medium">- Curso Las Reglas del Juego -</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 gap-8 items-start">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Animales Financieros Logo"
              width={180}
              height={180}
              className="rounded-2xl border-4 border-white shadow-lg lg:mx-0"
            />
          </div>
          {/* Texto principal */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-[1.1] text-center">
            Las finanzas tienen un orden.{' '}
            <span className="text-[#FDB813]">Síguelo</span>.
          </h1>
          <p className="text-xl mb-8 text-center">
            Aprovecha la plata gratis, prepara tu futuro y ten claro{' '}
            <span className="text-[#B784A7]">qué hacer con tu próxima luca</span>.
          </p>
          {/* Botón de inscripción */}
          <div className="flex justify-center mb-8">
            <a
              href="https://pay.hotmart.com/N94252329I?off=zvp3xk3v&checkoutMode=10&bid=1745339142690"
              className="inline-block bg-white text-black px-12 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscribirme al curso
            </a>
          </div>
          {/* Texto adicional */}
          <p className="text-gray-400 text-lg text-center">
            Súmate a más de 90 animales ordenados
          </p>
        </div>
      </div>
    </section>
  );
} 