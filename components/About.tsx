import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-stone-500 uppercase tracking-widest text-sm mb-4 block"
            >
              Nasza Filozofia
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl leading-tight mb-8"
            >
              Wnosimy sztukę kawy specialty na historyczne ulice Olsztyna.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-stone-600 leading-relaxed mb-6 font-light text-lg"
            >
              W Cafe Moderna wierzymy, że kawa to coś więcej niż poranny rytuał; to zmysłowe doświadczenie. Zlokalizowani w pięknie odrestaurowanej kamienicy na Starym Mieście, łączymy surowy industrialny design z ciepłem polskiej gościnności.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-stone-600 leading-relaxed font-light text-lg"
            >
              Pozyskujemy ziarna z etycznych mikro-plantacji i wypalamy je tak, aby podkreślić ich unikalny charakter. Niezależnie od tego, czy wpadasz na szybkie espresso, czy leniwe niedzielne śniadanie, Moderna to Twoja miejska oaza.
            </motion.p>
          </div>

          {/* Image Grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
             <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="mt-12"
             >
                <img 
                  src="https://picsum.photos/id/225/400/600" 
                  alt="Barista nalewający kawę" 
                  className="w-full h-auto object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                />
             </motion.div>
             <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
             >
                <img 
                  src="https://picsum.photos/id/364/400/600" 
                  alt="Latte Art" 
                  className="w-full h-auto object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
