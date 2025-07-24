import Image from 'next/image';
import Link from 'next/link';

export default function Cursos() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-[#1C1C1C] font-['roc-grotesk']">Nuestros Cursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Curso Las Reglas del Juego */}
          <Link href="/cursos/las-reglas-del-juego" className="bg-[#1C1C1C] rounded-2xl p-0 overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
            <div className="relative py-16 bg-[#1C1C1C] text-white overflow-hidden font-['roc-grotesk']">
              <div className="absolute top-0 left-0 right-0 flex justify-center py-4">
                <div className="bg-white text-black px-8 py-2 rounded-full">
                  <p className="text-lg font-medium">- Curso Las Reglas del Juego -</p>
                </div>
              </div>
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <div className="grid grid-cols-1 gap-8 items-start">
                  <div className="mb-8 flex justify-center">
                    <Image src="/images/logo.png" alt="Animales Financieros Logo" width={80} height={80} className="lg:mx-0" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-[1.1] text-center">
                    Las finanzas tienen un orden.{' '}
                    <span className="text-[#FDB813]">Síguelo</span>.
                  </h1>
                  <p className="text-xl mb-8 text-center">
                    Aprovecha la plata gratis, prepara tu futuro y ten claro{' '}
                    <span className="text-[#B784A7]">qué hacer con tu próxima luca</span>.
                  </p>
                  <div className="flex justify-center mb-8">
                    <span className="inline-block bg-white text-black px-12 py-4 rounded-md text-lg font-medium cursor-pointer">Más información</span>
                  </div>
                  <p className="text-gray-400 text-lg text-center">
                    Súmate a más de 90 animales ordenados
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* Curso Introducción a la IA */}
          <a href="https://piriedemann.github.io/curso-ia-animal/" target="_blank" rel="noopener noreferrer" className="bg-[#23272F] rounded-2xl p-0 overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
            <div className="relative py-16 bg-[#23272F] text-white overflow-hidden font-['roc-grotesk']">
              <div className="absolute top-0 left-0 right-0 flex justify-center py-4">
                <div className="bg-white text-black px-8 py-2 rounded-full">
                  <p className="text-lg font-medium">- Curso Introducción a la IA -</p>
                </div>
              </div>
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                <div className="grid grid-cols-1 gap-8 items-start">
                  <div className="mb-8 flex justify-center">
                    <Image src="/images/logo.png" alt="Animales Financieros Logo" width={80} height={80} className="lg:mx-0" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-[1.1] text-center">
                    Trabaja con <span className="text-[#FDB813]">IA</span>, hoy día
                  </h1>
                  <p className="text-xl mb-8 text-center">
                    Aprende a usar las herramientas que te harán una <span className="text-[#B784A7]">máquina de productividad</span>
                  </p>
                  <div className="flex justify-center mb-8">
                    <span className="inline-block bg-white text-black px-12 py-4 rounded-md text-lg font-medium cursor-pointer">Más información</span>
                  </div>
                  <p className="text-gray-400 text-lg text-center">
                    Súmate a más de 150 alumnos
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
} 