import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface BundleCardProps {
  name: string;
  target: string;
  pricing: string;
  includes: string[];
  benefits: string[];
  gradient: string;
  delay?: number;
}

export const BundleCard: React.FC<BundleCardProps> = ({
  name,
  target,
  pricing,
  includes,
  benefits,
  gradient,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="p-8 rounded-2xl bg-neutral-darkGray border-2 border-neutral-gray/30 hover:border-cyber-lightBlue/50 transition-all"
    >
      <div className={cn('inline-block px-4 py-2 rounded-full bg-gradient-to-r text-white font-bold text-sm mb-4', gradient)}>
        {name}
      </div>
      
      <p className="text-neutral-lightGray text-sm mb-6">{target}</p>
      
      <div className="mb-6">
        <p className="text-2xl font-black text-white">{pricing}</p>
      </div>
      
      <div className="mb-6">
        <p className="text-xs font-bold text-neutral-lightGray uppercase mb-3">Includes</p>
        <ul className="space-y-2">
          {includes.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-neutral-lightGray">
              <Check className="w-4 h-4 text-maidar-cyan flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <p className="text-xs font-bold text-neutral-lightGray uppercase mb-3">Benefits</p>
        <ul className="space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-white font-medium">
              <Check className="w-4 h-4 text-status-success flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
