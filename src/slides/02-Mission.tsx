import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Globe } from 'lucide-react';
import { Slide } from '../components';
import { companyData } from '../lib/data';

export const MissionSlide: React.FC = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Protect',
      description: 'Enterprise-grade security for organizations of all sizes',
    },
    {
      icon: Target,
      title: 'Detect',
      description: '24/7 threat monitoring through Maidar Secure SOC',
    },
    {
      icon: Users,
      title: 'Respond',
      description: 'Expert incident response with CIRT team',
    },
    {
      icon: Globe,
      title: 'Innovate',
      description: 'Proprietary cognitive authentication technology',
    },
  ];

  return (
    <Slide
      id="02"
      title="Our Mission"
      subtitle="Empowering organizations across EMEA with trusted cybersecurity solutions"
    >
      <div className="w-full max-w-6xl">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl text-neutral-lightGray leading-relaxed max-w-4xl mx-auto">
            For <span className="text-cyber-lightBlue font-bold">{companyData.years} years</span>, {companyData.name} has been the trusted cybersecurity partner for governments, financial institutions, and enterprises across EMEA.
          </p>
        </motion.div>

        {/* Four Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-darkGray border border-neutral-gray/30 hover:border-cyber-lightBlue/50 transition-all group"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyber-blue to-cyber-lightBlue mb-4 inline-block group-hover:scale-110 transition-transform">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-neutral-lightGray">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Maidar Secure Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-maidar-teal/20 to-maidar-cyan/20 border border-maidar-cyan/30 text-center"
        >
          <p className="text-lg text-white">
            <span className="font-bold text-maidar-cyan">Maidar Secure</span> — Our flagship SOC-as-a-Service platform delivering 24/7 protection
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};
