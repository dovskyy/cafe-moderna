import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="font-serif text-4xl mb-6">Visit Us</h2>
              <p className="text-stone-600 font-light mb-8">
                We are located in the heart of Bydgoszcz, just a few steps from the Old Market Square.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-stone-400 mt-1" size={20} />
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-bold mb-1">Address</h3>
                  <p className="text-stone-800 font-serif text-lg">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-stone-400 mt-1" size={20} />
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-bold mb-1">Opening Hours</h3>
                  <div className="text-stone-800 font-serif">
                    <p>Mon - Fri: {CONTACT_INFO.hours.weekdays}</p>
                    <p>Sat - Sun: {CONTACT_INFO.hours.weekends}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <Phone className="text-stone-400" size={20} />
                        <p className="text-stone-800">{CONTACT_INFO.phone}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="text-stone-400" size={20} />
                        <p className="text-stone-800">{CONTACT_INFO.email}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Image Placeholder (Simulated Map) */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto bg-stone-200 relative overflow-hidden group">
             {/* This would be a real Google Map embed in production */}
             <img 
                src="https://picsum.photos/id/1031/1200/800" 
                alt="Map Location" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded shadow-lg text-center">
                    <p className="font-serif text-xl">Cafe Moderna</p>
                    <p className="text-xs text-stone-500 uppercase">Click to navigate</p>
                </div>
             </div>
             <a 
                href="https://www.google.com/maps/search/?api=1&query=ul.+Gdańska+10,+Bydgoszcz" 
                target="_blank" 
                rel="noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Open Map"
             ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
