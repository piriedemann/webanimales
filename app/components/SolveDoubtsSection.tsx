'use client';

import { motion } from 'framer-motion';

export default function SolveDoubtsSection() {
  const points = [
    {
      title: 'Pensamos este curso como una forma de acelerar tu aprendizaje.',
      description: 'Si tienes el camino claro, se te va a hacer mucho más fácil tomar las decisiones difíciles.'
    },
    {
      title: 'El contenido puedes consumirlo en una o dos tardes.',
      description: 'Prepárate un buen café, prende los audífonos, y saca el cuaderno.'
    },
    {
      title: 'No sirve de nada que consumas contenido si después no lo aplicas.',
      description: 'La planilla maestra te ayudará a implementar la teoría.'
    }
  ];

  return (
    <section className="py-24 bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-medium text-center mb-16"
        >
          Resuelve tus dudas en una tarde
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#2C2C2C] rounded-2xl p-8 hover:bg-[#3C3C3C] transition-colors"
            >
              <h3 className="text-2xl font-medium mb-6 text-[#FAAD0D]">
                {point.title}
              </h3>
              <p className="text-lg text-white/90">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 