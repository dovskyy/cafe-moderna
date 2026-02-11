import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/id/1060/600/800", // Barista
  "https://picsum.photos/id/312/600/400",  // Coffee
  "https://picsum.photos/id/63/600/800",   // Interior
  "https://picsum.photos/id/42/600/400",   // Table
  "https://picsum.photos/id/835/600/800",  // People
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-900 text-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
         <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-center md:text-left"
         >
            Vibes
         </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-4 overflow-x-auto no-scrollbar md:justify-center">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex-shrink-0 relative overflow-hidden group ${
              index % 2 === 0 ? 'w-[300px] md:w-[250px] aspect-[3/4]' : 'w-[300px] md:w-[350px] aspect-[4/3]'
            }`}
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
