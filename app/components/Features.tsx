'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const features = [
  {
    title: '15 Clases Grabadas',
    description: 'Accede al contenido cuando quieras y a tu ritmo'
  },
  {
    title: 'Garantía sin excusas',
    description: 'Si no te gusta, te devolvemos tu dinero'
  },
  {
    title: '12 Documentos claves',
    description: 'Material complementario para implementar lo aprendido'
  },
  {
    title: '12 Videos Aplicados',
    description: 'Ejemplos prácticos para entender mejor cada concepto'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white" id="curso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            ¿Qué incluye el curso?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para ordenar tus finanzas y preparar tu futuro financiero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 