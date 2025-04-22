'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingSection() {
  return (
    <section className="py-24 bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Precio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-medium mb-8">
              ¿Cuánto cuesta?
            </h2>
            <div className="mb-8">
              <p className="text-3xl font-medium mb-4">
                El curso cuesta <span className="text-[#FAAD0D]">$120.000</span>
              </p>
              <p className="text-lg text-white/80">
                Es un producto que creamos para nuestro yo del pasado. Nos habríamos ahorrado tiempo, incertidumbre y varios errores.
              </p>
            </div>
            <Link
              href="#inscribirse"
              className="inline-block px-8 py-4 bg-[#FAAD0D] text-black rounded-full text-lg font-medium hover:bg-[#FBC252] transition-colors"
            >
              Inscribirme al Curso
            </Link>
          </motion.div>

          {/* Garantía */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#2C2C2C] rounded-2xl p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-6">
                Si no te gusta, te devolvemos tu dinero
              </h3>
              <p className="text-lg text-white/80">
                Si en 7 días no sientes que el curso te ha aportado nada, <span className="text-[#FAAD0D] font-medium">te devolvemos tu dinero</span>.
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl font-medium text-[#FAAD0D]">
                Sin excusas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 