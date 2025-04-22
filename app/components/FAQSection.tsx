'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: '¿Para quién es este curso?',
      answer: 'Quieres aprender y se te nota. Has aprendido de finanzas, pero te confundes con la cantidad de información que tienes disponible. Crees que lo simple le gana a lo perfecto.'
    },
    {
      question: '¿Cuántas horas debo dedicarle al curso?',
      answer: 'En contenido tienes cerca de 4 horas. Con la planilla maestra te puedes entretener otras horas más, pero ahí depende de en qué etapa estás.'
    },
    {
      question: '¿Y si no me gusta?',
      answer: 'Creemos que el contenido vale más de lo que estás pagando. Si haces el curso y no te gusta, te devolvemos lo que pagaste.'
    },
    {
      question: '¿Hace sentido pagar por un curso en vez de ahorrar esa plata?',
      answer: 'Entiendo la lógica de tu duda. Pero si aplicas los conceptos del curso, probablemente vas a generar ahorros o ganancias futuras que serán mayores a lo que pagues. Ojo, PROBABLEMENTE, no te podemos asegurar nada.'
    },
    {
      question: '¿Recibiré tips de inversión?',
      answer: '¿Te refieres a papitas? NO. Con mayúscula. No creemos que ese sea el camino, la mayoría de las personas que quieren ganarle al mercado no lo logran.\n\nTe daremos tips para que seas más eficiente en tus finanzas. Qué deuda pagar, qué beneficios tributarios buscar. Ese tipo de tips, muchos.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#1C1C1C] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium mb-4">
            Preguntas frecuentes
          </h2>
          <div className="flex justify-center">
            <span className="text-[#FAAD0D] text-2xl px-2">✺</span>
            <span className="text-[#FAAD0D] text-2xl px-2">✺</span>
            <span className="text-[#FAAD0D] text-2xl px-2">✺</span>
          </div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2C2C2C] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#3C3C3C] transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-[#FAAD0D] text-2xl transform transition-transform duration-200" style={{
                  transform: openIndex === index ? 'rotate(45deg)' : 'none'
                }}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-200 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-6 py-4 text-white/80">
                  {faq.answer.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center text-sm text-white/60"
        >
          <p>
            El podcast, curso y demases tienen fines educativos y de entretenimiento, no constituyen asesoramiento financiero ni de inversión. La información proporcionada no debe interpretarse como una recomendación para comprar, vender o invertir en activos financieros. Se recomienda consultar a un asesor financiero antes de tomar decisiones de inversión.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 