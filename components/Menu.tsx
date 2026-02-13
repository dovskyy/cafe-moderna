import React, { useState, useEffect } from 'react';
import { MENU_ITEMS, SEASONAL_MENU, PERMANENT_MENU } from '../constants';
import { MenuSection } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf, Coffee } from 'lucide-react';

const MenuSectionBlock: React.FC<{ section: MenuSection }> = ({ section }) => (
  <div className="mb-10">
    <h3 className="font-serif text-xl md:text-2xl text-stone-900 mb-5 pb-2 border-b border-stone-200">
      {section.title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
      {section.items.map((item) => (
        <div key={item.id} className="group cursor-default">
          <div className="flex justify-between items-baseline border-b border-stone-200 pb-2 mb-2">
            <h4 className="font-serif text-base md:text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
              {item.name}
            </h4>
            <span className="font-sans text-stone-500 text-sm font-medium ml-4 shrink-0">
              {item.price}
            </span>
          </div>
          <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light">
            {item.description}
          </p>
          {item.highlight && (
            <span className="inline-block mt-2 text-[9px] uppercase tracking-wider text-white bg-stone-900 px-2 py-0.5 rounded-full">
              Polecane
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const FullMenuModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'seasonal' | 'permanent'>('seasonal');

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-stone-900/75 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative w-full md:max-w-4xl max-h-[92dvh] md:max-h-[88vh] bg-stone-50 rounded-t-2xl md:rounded-2xl flex flex-col z-10 overflow-hidden shadow-2xl"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 32, stiffness: 320 }}
      >
        {/* Drag handle (mobile only) */}
        <div className="md:hidden flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 bg-stone-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 shrink-0">
          <div>
            <p className="text-stone-400 uppercase tracking-widest text-[10px]">Cafe Moderna</p>
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 leading-tight">
              Pełne Menu
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500 hover:text-stone-900"
            aria-label="Zamknij menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-stone-200 px-6 shrink-0">
          <button
            onClick={() => setActiveTab('seasonal')}
            className={`flex items-center gap-1.5 py-3 mr-7 text-xs uppercase tracking-widest border-b-2 transition-all duration-200 ${
              activeTab === 'seasonal'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent text-stone-400 hover:text-stone-600'
            }`}
          >
            <Leaf size={12} />
            Sezonowe
          </button>
          <button
            onClick={() => setActiveTab('permanent')}
            className={`flex items-center gap-1.5 py-3 text-xs uppercase tracking-widest border-b-2 transition-all duration-200 ${
              activeTab === 'permanent'
                ? 'border-stone-900 text-stone-900'
                : 'border-transparent text-stone-400 hover:text-stone-600'
            }`}
          >
            <Coffee size={12} />
            Stałe
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 px-6 pt-6 pb-8">
          <AnimatePresence mode="wait">
            {activeTab === 'seasonal' && (
              <motion.div
                key="seasonal"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Leaf size={14} className="text-stone-500" />
                  <p className="text-stone-500 text-xs uppercase tracking-widest">
                    Oferta sezonowa · Wiosna 2025
                  </p>
                </div>
                {SEASONAL_MENU.map((section) => (
                  <MenuSectionBlock key={section.title} section={section} />
                ))}
              </motion.div>
            )}
            {activeTab === 'permanent' && (
              <motion.div
                key="permanent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {PERMANENT_MENU.map((section) => (
                  <MenuSectionBlock key={section.title} section={section} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Menu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <>
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
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setIsModalOpen(true)}
              className="inline-block border-b border-stone-900 text-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all uppercase tracking-widest text-xs cursor-pointer bg-transparent"
            >
              Zobacz Pełne Menu
            </motion.button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && <FullMenuModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Menu;
