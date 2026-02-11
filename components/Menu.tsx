import React from 'react';
import { MENU_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-stone-500 uppercase tracking-widest text-sm"
          >
            Smak
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-serif text-4xl md:text-5xl mt-2"
          >
            Wybrane Menu
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {MENU_ITEMS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-default"
            >
              <div className="flex justify-between items-baseline border-b border-stone-300 pb-2 mb-3">
                <h3 className="font-serif text-xl font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                  {item.name}
                </h3>
                <span className="font-sans text-stone-500 font-medium">{item.price}</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {item.description}
              </p>
              {item.highlight && (
                 <span className="inline-block mt-2 text-[10px] uppercase tracking-wider text-white bg-stone-900 px-2 py-0.5 rounded-full">
                   Polecane
                 </span>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#" className="inline-block border-b border-stone-900 text-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all uppercase tracking-widest text-xs">
                Zobacz Pełne Menu
            </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
