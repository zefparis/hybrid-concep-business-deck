import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Lock } from 'lucide-react';
import { Slide } from '../components';
import { companyData, metrics } from '../lib/data';

export const InnovationSlide: React.FC = () => {
  const innovations = [
    {
      icon: Brain,
      title: 'Cognitive Authentication',
      description: 'Brain-pattern recognition that proves human presence in 15 seconds',
      highlight: '3 Patents Filed',
    },
    {
      icon: Lock,
      title: 'Post-Quantum Cryptography',
      description: 'Kyber-768 encryption protecting data for 10+ years against quantum threats',
      highlight: 'Future-Proof',
    },
    {
      icon: Shield,
      title: 'Anti-Bot Defense',
      description: 'Proof-of-Work + Replay protection eliminates automated attacks',
      highlight: '100% Bot Block',
    },
    {
      icon: Zap,
      title: 'Real-Time Integration',
      description: 'Seamless integration with Maidar Secure SOC for unified security',
      highlight: '<200ms Latency',
    },
  ];

  return (
    <Slide
      id="05"
      title="Innovation Edge"
      subtitle="Proprietary technology that sets Hybrid Concepts apart"
    >
      <div className="w-full max-w-6xl">
        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {innovations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-darkGray border border-neutral-gray/30 hover:border-maidar-cyan/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-maidar-teal to-maidar-cyan group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <span className="px-2 py-1 text-xs font-bold bg-maidar-cyan/20 text-maidar-cyan rounded">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-lightGray">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-cyber-navy to-neutral-darkGray border border-cyber-lightBlue/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-white mb-2">${metrics.authMarket2025}B</p>
              <p className="text-sm text-neutral-lightGray">Authentication Market 2025</p>
            </div>
            <div>
              <p className="text-4xl font-black text-cyber-lightBlue mb-2">${metrics.authMarket2030}B</p>
              <p className="text-sm text-neutral-lightGray">Projected Market 2030</p>
            </div>
            <div>
              <p className="text-4xl font-black text-maidar-cyan mb-2">{companyData.patents}</p>
              <p className="text-sm text-neutral-lightGray">Patents Filed</p>
            </div>
          </div>
        </motion.div>

        {/* Differentiator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-center text-lg text-neutral-lightGray"
        >
          <span className="text-white font-bold">Only Hybrid Concepts</span> combines 28 years of SOC expertise with next-generation cognitive authentication
        </motion.p>
      </div>
    </Slide>
  );
};
