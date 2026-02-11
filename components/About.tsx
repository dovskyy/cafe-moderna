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
              Our Philosophy
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl leading-tight mb-8"
            >
              Bringing the art of specialty coffee to the historic streets of Bydgoszcz.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-stone-600 leading-relaxed mb-6 font-light text-lg"
            >
              At Cafe Moderna, we believe that coffee is more than just a morning ritual; it is a sensory experience. Located in a lovingly restored tenement house on Gdańska Street, we merge raw industrial design with the warmth of Polish hospitality.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-stone-600 leading-relaxed font-light text-lg"
            >
              We source our beans from ethical micro-lots and roast them to highlight their unique terroir. Whether you are here for a quick espresso or a lazy Sunday brunch, Moderna is your sanctuary in the city.
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
                  alt="Barista pouring coffee" 
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
