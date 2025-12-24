import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Zap, Users } from 'lucide-react';
import { Slide } from '../components';
import { socTiers } from '../lib/data';

export const CoreServicesSlide: React.FC = () => {
  const tierIcons = [Shield, Clock, Zap, Users];
  const tierColors = [
    'from-neutral-gray to-neutral-darkGray',
    'from-cyber-blue to-cyber-lightBlue',
    'from-maidar-teal to-maidar-cyan',
    'from-maidar-purple to-cyber-lightBlue',
  ];

  return (
    <Slide
      id="04"
      title="Maidar Secure SOC"
      subtitle="Tiered SOC-as-a-Service for every organization size and need"
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socTiers.map((tier, index) => {
            const Icon = tierIcons[index];
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-darkGray border border-neutral-gray/30 hover:border-cyber-lightBlue/50 transition-all flex flex-col"
              >
                {/* Header */}
                <div className={`p-3 rounded-xl bg-gradient-to-br ${tierColors[index]} mb-4 inline-block self-start`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-cyber-electric/20 text-cyber-electric text-xs font-semibold mb-3">
                  {tier.coverage}
                </div>
                
                <p className="text-sm text-neutral-lightGray mb-4 flex-grow">{tier.description}</p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-lightGray">
                      <div className="w-1.5 h-1.5 rounded-full bg-maidar-cyan mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyber-blue/20 to-maidar-teal/20 border border-cyber-lightBlue/30 text-center"
        >
          <p className="text-lg text-white">
            All tiers include <span className="font-bold text-cyber-lightBlue">ISO 27001 certified operations</span> and <span className="font-bold text-maidar-cyan">seasoned cybersecurity experts</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};
