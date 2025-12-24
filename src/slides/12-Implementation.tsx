import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Slide } from '../components';
import { implementationPhases } from '../lib/data';

export const ImplementationSlide: React.FC = () => {
  const phaseColors = [
    'from-neutral-gray to-cyber-blue',
    'from-cyber-blue to-cyber-lightBlue',
    'from-cyber-lightBlue to-maidar-teal',
    'from-maidar-teal to-status-success',
  ];

  return (
    <Slide
      id="12"
      title="Implementation"
      subtitle="12-week deployment roadmap for enterprise clients"
    >
      <div className="w-full max-w-6xl">
        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-neutral-gray/30 hidden md:block" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-8 left-0 h-1 bg-gradient-to-r from-cyber-blue via-maidar-teal to-status-success hidden md:block"
          />

          {/* Phases */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {implementationPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Phase Number */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phaseColors[index]} flex items-center justify-center mx-auto mb-4 relative z-10`}>
                  <span className="text-2xl font-black text-white">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="p-4 rounded-xl bg-neutral-darkGray border border-neutral-gray/30">
                  <h3 className="text-lg font-bold text-white text-center mb-1">{phase.phase}</h3>
                  <p className="text-xs text-cyber-lightBlue text-center mb-3">Weeks {phase.weeks}</p>
                  
                  <ul className="space-y-1.5 mb-3">
                    {phase.tasks.slice(0, 4).map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-lightGray">
                        <CheckCircle className="w-3 h-3 text-maidar-cyan shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-3 border-t border-neutral-gray/30">
                    <p className="text-[10px] text-neutral-gray uppercase mb-1">Deliverable</p>
                    <p className="text-xs text-white font-medium">{phase.deliverable}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fast Track Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 p-4 rounded-xl bg-maidar-teal/20 border border-maidar-cyan/30 text-center"
        >
          <p className="text-sm text-white">
            <span className="font-bold text-maidar-cyan">Fast Track Available:</span> SME deployments can be completed in as little as 2 weeks
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};
