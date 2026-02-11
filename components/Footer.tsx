import React from 'react';
import { SOCIALS } from '../constants';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl text-stone-100 mb-2">MODERNA</h3>
          <p className="text-xs uppercase tracking-widest">Olsztyn</p>
        </div>

        <div className="flex gap-6">
          {SOCIALS.map((social) => (
            <a 
              key={social.platform} 
              href={social.url} 
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              {social.platform === 'Instagram' ? <Instagram size={18} /> : <Facebook size={18} />}
              <span className="text-sm group-hover:underline decoration-stone-500 underline-offset-4">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="text-xs text-stone-600">
          © {new Date().getFullYear()} Cafe Moderna. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
