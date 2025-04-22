'use client';

import { motion } from 'framer-motion';

export default function OrderSection() {
  return (
    <section className="py-24 bg-[#1C1C1C] text-white font-['roc-grotesk']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center relative">
          {/* Línea vertical divisoria */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-white/20"></div>
          
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-medium leading-tight mx-auto"
          >
            <div>
              ¿Estás haciendo las
            </div>
            <div className="mt-2">
              cosas en
            </div>
            <div className="mt-2">
              el <span className="text-[#FAAD0D]">orden correcto</span>?
            </div>
          </motion.div>

          {/* Texto explicativo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg lg:text-xl font-light leading-relaxed mx-auto max-w-xl"
          >
            <p className="mb-6">
              En Chile el Estado te regala plata si ahorras de cierta manera. ¿Lo estás aprovechando a tu favor?
            </p>
            <p className="mb-6">
              Si tienes una deuda cara, no deberías estar invirtiendo, deberías pagarla lo antes posible.
            </p>
            <p>
              En las finanzas, el <span className="text-[#FAAD0D]">orden de los factores sí altera el producto</span>. Evita los errores y avanza más rápido.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 