import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MapPin } from 'lucide-react';
import { Slide } from '../components';
import { contacts, offices, companyData } from '../lib/data';

export const ContactSlide: React.FC = () => {
  return (
    <Slide
      id="15"
      title="Let's Connect"
      subtitle="Your trusted cybersecurity partner is ready to help"
      background="gradient-blue"
    >
      <div className="w-full max-w-4xl">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <img 
              src="/images/logo_transparent.png" 
              alt="Hybrid Concepts" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
            Hybrid Concepts
          </h2>
          <p className="text-xl text-cyber-lightBlue font-bold">Cybersecurity Solutions</p>
          <p className="text-neutral-lightGray mt-2">{companyData.tagline}</p>
        </motion.div>

        {/* Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {contacts.map((contact) => (
            <div
              key={contact.email}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20"
            >
              <h3 className="text-lg font-bold text-white mb-1">{contact.name}</h3>
              <p className="text-sm text-cyber-lightBlue mb-3">{contact.role}</p>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-sm text-neutral-lightGray hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {contact.email}
              </a>
            </div>
          ))}
        </motion.div>

        {/* Offices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/20 mb-8"
        >
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-maidar-cyan" />
            Our Offices
          </h3>
          <div className="flex flex-wrap gap-4">
            {offices.map((office) => (
              <div key={office.city} className="text-sm">
                <span className="text-white font-medium">{office.city}</span>
                <span className="text-neutral-lightGray">, {office.country}</span>
                {office.type === 'HQ' && (
                  <span className="ml-2 text-xs text-cyber-lightBlue">(HQ)</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Website */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://hybridconcepts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cyber-navy font-bold rounded-full hover:bg-neutral-lightGray transition-colors"
          >
            <Globe className="w-5 h-5" />
            hybridconcepts.com
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-6 border-t border-white/20 text-center"
        >
          <p className="text-sm text-neutral-lightGray">
            © {new Date().getFullYear()} Hybrid Concepts. All rights reserved.
          </p>
          <p className="text-xs text-neutral-gray mt-2">
            NASDAQ Listed | ISO 27001:2022 Certified | {companyData.years} Years of Excellence
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};
