'use client';

import { motion } from 'framer-motion';

export default function StructureSection() {
  const modules = [
    {
      title: 'Primer módulo: Ahorra',
      classes: [
        {
          title: 'Clase 1 – Mi Primer Millón',
          description: 'La primera gran meta, que se transformará en nuestro primer colchón de camping.'
        },
        {
          title: 'Clase 2 – Plata Gratis',
          description: 'Quizás no lo sabes, y estás dejando pasar la oportunidad de que te regalen dinero.'
        },
        {
          title: 'Clase 3 – Mochila Pesada',
          description: 'Una mala deuda es quizás lo que más está retrasando tus avances.'
        },
        {
          title: 'Clase 4 – Fondo Tranquilidad',
          description: 'El colchón de camping tiene que evolucionar.'
        },
        {
          title: 'Clase 5 – Invierte como WB',
          description: 'El señor Buffett ha rentado un 20% al año por décadas. Puedes ser como el, por un tiempo.'
        },
        {
          title: 'Clase 6 – Claudio Bravo',
          description: 'El eterno capitán se preocupa de proteger el arco. Tú te preocupas de proteger a los que te importan.'
        }
      ]
    },
    {
      title: 'Segundo módulo: Invierte',
      classes: [
        {
          title: 'Clase 7 – Viejo Pascuero',
          description: 'Es hora de que te des un regalito, no todo es disciplina.'
        },
        {
          title: 'Clase 8 – Fondo Chao Jefe',
          description: 'Prepara tu situación financiera para renunciar. Incluso si no quieres hacerlo.'
        },
        {
          title: 'Clase 9 – Ponte las Pilas',
          description: '¿Estás ahorrando lo suficiente? ¿Qué pasaría si ahorras el doble?'
        },
        {
          title: 'Clase 10 – Asset Allocation',
          description: 'Define tu estrategia para invertir para el largo plazo según distintos tipos de activos.'
        },
        {
          title: 'Clase 11 – La Casa Propia',
          description: 'Ser dueño del lugar donde vives puede ser un sueño. Da el paso en el momento correcto.'
        },
        {
          title: 'Clase 12 – Máscara de Oxígeno',
          description: 'Con tu situación en orden, es hora de que pienses en cómo ayudar a tu manada.'
        }
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
          Estructura
        </motion.h2>

        <p className="text-lg text-center mb-16 max-w-3xl mx-auto">
          El curso tiene 15 capítulos con más de 3 horas y media de contenido. Complementamos los videos con una planilla maestra que te acompañará en cada etapa. Por ejemplo, podrás calcular qué APV te conviene, o qué casa es recomendable que compres para tu primer hogar.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {modules.map((module, moduleIndex) => (
            <motion.div
              key={moduleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: moduleIndex * 0.2 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-4xl font-medium text-[#FAAD0D]">
                {module.title}
              </h2>
              <div className="space-y-6">
                {module.classes.map((classItem, classIndex) => (
                  <motion.div
                    key={classIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (moduleIndex + classIndex) * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 h-[180px] flex flex-col justify-between"
                  >
                    <h3 className="text-xl font-medium text-gray-900">
                      {classItem.title}
                    </h3>
                    <p className="text-gray-600">
                      {classItem.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 