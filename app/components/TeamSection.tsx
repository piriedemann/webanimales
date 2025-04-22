'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamSection() {
  const team = [
    {
      name: 'Pablo Riedemann H.',
      image: '/images/foto-pr.jpg',
      points: [
        'Soy un CFA Charterholder, la mayor certificación en el área de finanzas global. Estudié más de 1.000 horas para obtenerla, y tiene un código de ética muy rígido.',
        'Tengo 5 años de experiencia en la industria financiera entre una compañía de inversiones en Chile y una productora de contenido financiero en EEUU.',
        'He leído más de 30 libros de finanzas personales, y perdí la cuenta de artículos y podcasts. Me fascina este mundo.'
      ]
    },
    {
      name: 'Francisco Verdugo U.',
      image: '/images/foto-fv.jpg',
      points: [
        'Soy el Gerente Comercial de DVA Capital y tengo más de 12 años de experiencia en inversiones.',
        'Aprendí la reglas del dinero a la fuerza, después de estar muy endeudado por tener que apoyar a mi familia.',
        'Estoy acreditado por el Comité de Acreditación de Conocimientos en el Mercado de Valores.'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-medium text-center mb-16"
        >
          ¿Quiénes somos?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-8 relative w-64 h-64 mx-auto overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-2xl font-medium mb-6">{member.name}</h3>
              <ul className="text-left space-y-4">
                {member.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#FAAD0D] text-xl">•</span>
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 