'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#1C1C1C] text-white font-['roc-grotesk']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center relative">
          {/* Línea vertical divisoria */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-white/20 hidden lg:block"></div>
          
          {/* Estadística */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-medium leading-tight mx-auto"
          >
            <div>
              El 80% de las personas en
            </div>
            <div className="mt-2">
              Chile{' '}
              <span className="text-[#FAAD0D]">
                no llega a fin de mes
              </span>
            </div>
          </motion.div>

          {/* Texto explicativo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg lg:text-xl font-light leading-relaxed mx-auto max-w-xl"
          >
            <p>
              Tu puedes ser de las que sí llega. El marketing y nuestro cerebro primitivo nos tratan de engañar a cada rato.{' '}
              <span className="text-[#FAAD0D]">
                Saber qué hacer con tu próxima luca
              </span>{' '}
              es la clave para implementar un sistema que aumente tus probabilidades de éxito.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 