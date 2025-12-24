import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { companyData } from '../lib/data';

export const CoverSlide: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyber-navy via-cyber-blue to-neutral-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-electric rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* 28 Years Badge - Prominent */}
      <div className="absolute top-8 right-8 z-30">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="/images/Image1.png" 
            alt="28 Years of Excellence" 
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />
        </motion.div>
      </div>

      {/* Logo top left */}
      <div className="absolute top-8 left-8 z-30">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/images/logo_transparent.png" 
            alt="Hybrid Concepts" 
            className="h-24 md:h-32 w-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Company name */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
              Hybrid Concepts
            </h1>
            <p className="text-2xl text-cyber-lightBlue font-bold">Cybersecurity Solutions</p>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-neutral-lightGray font-semibold mb-4">
            {companyData.tagline}
          </p>

          {/* Maidar Secure */}
          <div className="mb-12">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-maidar-teal to-maidar-cyan rounded-full">
              <p className="text-white font-bold text-lg">
                Maidar Secure | Hybrid Concepts
              </p>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mb-12 text-neutral-lightGray"
          >
            <div className="text-center">
              <p className="text-3xl font-black text-white">€{companyData.revenue}M</p>
              <p className="text-sm">Revenue 2024</p>
            </div>
            <div className="w-px h-12 bg-neutral-gray" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">{companyData.employees}</p>
              <p className="text-sm">Team</p>
            </div>
            <div className="w-px h-12 bg-neutral-gray" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">{companyData.locations}</p>
              <p className="text-sm">Locations</p>
            </div>
            <div className="w-px h-12 bg-neutral-gray" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">ISO 27001</p>
              <p className="text-sm">Certified</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => document.getElementById('slide-02')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-cyber-electric text-neutral-black font-bold rounded-full flex items-center gap-2 mx-auto group"
          >
            Begin Presentation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
