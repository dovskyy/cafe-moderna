import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes based on scroll state
  const textColorClass = isScrolled ? 'text-stone-900' : 'text-white';
  const hoverColorClass = isScrolled ? 'hover:text-stone-500' : 'hover:text-stone-200';
  const buttonClass = isScrolled 
    ? 'bg-stone-900 text-stone-50 hover:bg-stone-700' 
    : 'bg-white text-stone-900 hover:bg-stone-200';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 border-b border-stone-200 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className={`font-serif text-2xl font-bold tracking-tighter z-50 relative transition-colors duration-300 ${textColorClass}`}>
            CAFE MODERNA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${textColorClass} ${hoverColorClass}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 text-sm uppercase tracking-wide transition-colors duration-300 ${buttonClass}`}
            >
              Zarezerwuj
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 relative transition-colors duration-300 ${isMobileMenuOpen ? 'text-stone-900' : textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center space-y-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-stone-900 hover:text-stone-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;