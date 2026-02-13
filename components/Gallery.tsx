import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?q=80&w=600&auto=format&fit=crop", // Barista
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop", // Coffee
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=600&auto=format&fit=crop",   // Interior
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop", // Table
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop", // People
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
            Klimat
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
