import React from 'react';
import { motion } from 'framer-motion';
import { Slide, ComparisonTable } from '../components';
import { competitionMatrix } from '../lib/data';

export const CompetitionSlide: React.FC = () => {
  return (
    <Slide
      id="10"
      title="Competitive Advantage"
      subtitle="Why CYBER1 Solutions stands apart in the market"
    >
      <div className="w-full max-w-5xl">
        <ComparisonTable data={competitionMatrix} />

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="p-4 rounded-xl bg-cyber-blue/20 border border-cyber-lightBlue/30 text-center">
            <p className="text-2xl font-black text-cyber-lightBlue mb-1">28 Years</p>
            <p className="text-xs text-neutral-lightGray">Proven Track Record</p>
          </div>
          <div className="p-4 rounded-xl bg-maidar-teal/20 border border-maidar-cyan/30 text-center">
            <p className="text-2xl font-black text-maidar-cyan mb-1">Only Provider</p>
            <p className="text-xs text-neutral-lightGray">SOC + Cognitive Auth Combined</p>
          </div>
          <div className="p-4 rounded-xl bg-status-success/20 border border-status-success/30 text-center">
            <p className="text-2xl font-black text-status-success mb-1">EMEA Focus</p>
            <p className="text-xs text-neutral-lightGray">Local Presence & Compliance</p>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-neutral-lightGray"
        >
          <span className="text-white font-bold">CYBER1 Solutions</span> is the only provider combining enterprise SOC expertise with next-generation cognitive authentication
        </motion.p>
      </div>
    </Slide>
  );
};
