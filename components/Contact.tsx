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
              <h2 className="font-serif text-4xl mb-6">Odwiedź Nas</h2>
              <p className="text-stone-600 font-light mb-8">
                Znajdziesz nas w sercu Olsztyna, zaledwie kilka kroków od Wysokiej Bramy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-stone-400 mt-1" size={20} />
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-bold mb-1">Adres</h3>
                  <p className="text-stone-800 font-serif text-lg">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-stone-400 mt-1" size={20} />
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-bold mb-1">Godziny Otwarcia</h3>
                  <div className="text-stone-800 font-serif">
                    <p>Pn - Pt: {CONTACT_INFO.hours.weekdays}</p>
                    <p>Sob - Nd: {CONTACT_INFO.hours.weekends}</p>
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

          {/* Google Maps Embed */}
          <div className="lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] bg-stone-200 relative overflow-hidden">
             <iframe 
               width="100%" 
               height="100%" 
               style={{ border: 0 }}
               loading="lazy" 
               allowFullScreen 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full min-h-[400px]"
               src="https://maps.google.com/maps?q=ul.+Prosta+12,+10-029+Olsztyn&t=&z=15&ie=UTF8&iwloc=&output=embed"
               title="Lokalizacja Cafe Moderna"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;