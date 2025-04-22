'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Realmente bueno, claro y práctico de aplicar. Fue muy fácil poder terminarlo porque cada video era muy entretenido. Al igual que con su podcast aprendí muchísimo y el bonus final se agradece ya que llegué a conocerlos después de que lo habían impartido. Hoy después de conocerlos en rankia y escuchar la presentación de Pablo me motivé a realizar el último modulo que me faltaba y ser del 5-15 % que termina un curso online :). Estaré atenta a lo que se venga en esta hermosa comunidad que han formado Recomendadisimo el curso! muchas gracias ….Animales !",
      author: "Maryorie"
    },
    {
      text: "Gracias chicos, me ordenaron mucho la película y estoy re asignando el dinero que tengo. Excelente curso, muy concreto y aplicable. Lo que más tengo pendiente es averiguar más sobre los seguros. Gracias!",
      author: "Jacqueline"
    },
    {
      text: "Muchas gracias por los videos, el material y los consejos (o perspectivas) de las finanzas personales. Compré este curso para confirmar y saber si lo estoy haciendo bien o no, cómo voy encaminado, qué me falta y qué me sobra, y la verdad es que sin su ayuda no podría responder ninguna de estos cuestionamientos.",
      author: "Dave"
    },
    {
      text: "Terminé el curso 🎉. Muy buen curso y el material complementario vale oro.",
      author: "Harry"
    },
    {
      text: "Muchas gracias por hacer Las reglas del juego y agregar el bonus de X (censurado), todo muy claro, las ideas y conceptos se entendían de manera muy amena. Los conocí por otro podcast y no saben lo genial que ha sido aprender de ustedes tanto en finanzas como en el ámbito personal, además de formar parte de esta gran comunidad. Sigan así, Animales!!!",
      author: "Eduardo"
    },
    {
      text: "Francisco y Pablo, muchas gracias por haberse dado el tiempo de hacer este curso. Me resultó tremendamente útil. Siempre escucho su podcast y en este curso pude ordenar un poco lo que voy escuchando que a veces puede ser mas disperso. Me lo tomé como una evaluación para saber como voy y cuanta atención les puse mientras los escuchaba!",
      author: "Jose"
    },
    {
      text: "Un muy buen curso, realmente vale la pena tomarlo, la información fue clara y muy útil, bien estructurada y con recursos para poder desarrollar cada propuesta de las Reglas del Juego! Muchas Gracias ¡Animales!",
      author: "Rocío"
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
          Lo que dicen nuestros Animales
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-lg mb-6 italic text-gray-600">
                    "{testimonial.text}"
                  </p>
                </div>
                <p className="text-lg font-medium text-[#FAAD0D]">
                  — {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 