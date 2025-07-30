'use client';

import { motion } from 'framer-motion';
import ShopifyButtonWrapper from './ShopifyButtonWrapper';

const features = [
  { text: '15 Clases Grabadas' },
  { text: '12 Documentos claves' },
  { text: '12 Videos Aplicados' },
  { text: '1 Bonus' },
  { text: 'Garantía sin excusas' }
];

export default function VideoSection() {
  return (
    <section className="py-16 bg-[#dcdcdc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1C1C1C] p-8 rounded-[32px] shadow-2xl"
        >
          <div className="relative w-full rounded-2xl overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/2qcMfYxZ9TQ"
              title="Video del curso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1C1C1C] px-6 py-2 rounded-full"
            >
              <span className="text-white font-['roc-grotesk']">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <ShopifyButtonWrapper />
        </motion.div>
      </div>
    </section>
  );
} 