'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const benefits = [
  'Acceso completo a todas las clases',
  'Documentos y planillas descargables',
  'Videos aplicados con ejemplos prácticos',
  'Garantía de devolución de dinero',
  'Acceso de por vida al contenido',
  'Actualizaciones futuras incluidas'
];

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-50" id="precios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Invierte en tu futuro financiero
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un pequeño paso hoy puede significar un gran cambio en tu futuro.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 bg-blue-600 sm:p-10 sm:pb-6">
            <div className="flex justify-center">
              <span className="inline-flex px-4 py-1 text-blue-600 text-sm font-semibold leading-5 tracking-wide uppercase bg-white rounded-full">
                Curso Completo
              </span>
            </div>
            <div className="mt-4 flex justify-center text-6xl font-extrabold text-white">
              <span className="ml-1 mr-3 text-xl font-medium">$</span>
              120.000
            </div>
            <p className="mt-4 text-center text-white">
              Pago único - Acceso de por vida
            </p>
          </div>
          <div className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">{benefit}</p>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#inscribirse"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Inscribirme Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 