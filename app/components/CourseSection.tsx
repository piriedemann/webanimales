'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CourseSection() {
  const bulletPoints = [
    'No sé cuánto estoy ahorrando ni cuánto debería.',
    'Invierto, pero la verdad no tengo una estrategia que me guía.',
    'Cuando llega fin de mes, me estreso pensando en lo que tengo que pagar.',
    'No entiendo el mundo financiero, tengo miedo de empezar porque todo es confuso.',
    'Llevo tiempo invirtiendo en depósitos a plazo, pero quiero explorar qué más existe.'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl font-medium text-center mb-16"
        >
          ¿Es el curso para tí?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Lista de puntos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl mb-8">
              Si alguno de los siguientes puntos aplica a tu situación, creemos que el curso{' '}
              <span className="text-[#E5B8F4]">te puede ayudar</span>:
            </p>
            <ul className="space-y-6">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-[#E5B8F4] text-2xl">✓</span>
                  <span className="text-xl">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Texto explicativo y botón */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1C1C1C] text-white p-8 rounded-lg"
          >
            <div className="space-y-6 text-lg">
              <p>
                Después de años en el mundo financiero, notamos que las preguntas y situaciones se repetían.
              </p>
              <p>
                Hoy el problema no es la falta de información. Al contrario, es tanta que no sabemos por donde partir ni en quien confiar.
              </p>
              <p>
                Un día, nos sentamos a estructurar lo que sería el orden de qué hacer con cada peso, partiendo desde cero. Eso se transformó en nuestro capítulo del podcast más exitoso.
              </p>
              <p>
                En el curso, exploramos en profundidad cada regla, para que tengas un camino claro que seguir.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="https://open.spotify.com/episode/45yCTTXHDD5rCRRac8DrAq?si=16f17259a9ef4e46"
                target="_blank"
                className="inline-block px-8 py-4 border border-white rounded-full text-lg hover:bg-white hover:text-black transition-colors"
              >
                Escucha el capítulo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 