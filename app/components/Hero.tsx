'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1C1C1C] text-white overflow-hidden font-['roc-grotesk']">
      {/* Título del curso */}
      <div className="absolute top-0 left-0 right-0 flex justify-center py-4">
        <div className="bg-white text-black px-8 py-2 rounded-full">
          <p className="text-lg font-medium">- Curso Las Reglas del Juego -</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Animales Financieros Logo"
                width={80}
                height={80}
                className="lg:mx-0"
              />
            </div>

            {/* Texto principal */}
            <h1 className="text-5xl sm:text-[64px] font-bold mb-6 leading-[1.1]">
              Las finanzas tienen un orden.{' '}
              <span className="text-[#FDB813]">Síguelo</span>.
            </h1>
            
            <p className="text-xl mb-8">
              Aprovecha la plata gratis, prepara tu futuro y ten claro{' '}
              <span className="text-[#B784A7]">qué hacer con tu próxima luca</span>.
            </p>

            {/* Botón de inscripción */}
            <a
              href="https://pay.hotmart.com/N94252329I?off=zvp3xk3v&checkoutMode=10&bid=1745339142690"
              className="inline-block bg-white text-black px-12 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors mb-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscribirme al curso
            </a>

            {/* Texto adicional */}
            <p className="text-gray-400 text-lg">
              Súmate a más de 90 animales ordenados
            </p>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            {/* Imagen de las escaleras */}
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-8">
              <Image
                src="/images/hero-image.jpg"
                alt="Escaleras"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>

            {/* Logo CAMV */}
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Acreditados por</p>
              <div className="flex justify-center">
                <Image
                  src="/images/camv-logo.png"
                  alt="CAMV Logo"
                  width={140}
                  height={24}
                  className="opacity-70"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 