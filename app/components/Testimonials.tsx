'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "Realmente bueno, claro y práctico de aplicar. Fue muy fácil poder terminarlo porque cada video era muy entretenido. Al igual que con su podcast aprendí muchísimo.",
    author: "Maryorie"
  },
  {
    content: "Gracias chicos, me ordenaron mucho la película y estoy re asignando el dinero que tengo. Excelente curso, muy concreto y aplicable.",
    author: "Jacqueline"
  },
  {
    content: "Terminé el curso 🎉. Muy buen curso y el material complementario vale oro.",
    author: "Harry"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Lo que dicen nuestros Animales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Únete a nuestra comunidad de estudiantes satisfechos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 h-8 w-8 text-blue-600 transform -rotate-12"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-lg text-gray-600 mb-4">
                  {testimonial.content}
                </p>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 