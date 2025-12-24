import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface MetricCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color?: 'blue' | 'teal' | 'green';
  delay?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  value,
  label,
  color = 'blue',
  delay = 0,
}) => {
  const colors = {
    blue: 'from-cyber-blue to-cyber-lightBlue',
    teal: 'from-maidar-teal to-maidar-cyan',
    green: 'from-status-success to-emerald-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-2xl bg-neutral-darkGray border border-neutral-gray/30 group relative"
    >
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl',
        colors[color]
      )} />
      
      <div className="relative z-10">
        <div className={cn('p-3 rounded-xl bg-gradient-to-br mb-4 inline-block', colors[color])}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <div className="text-4xl font-black text-white mb-2">{value}</div>
        <div className="text-sm text-neutral-lightGray">{label}</div>
      </div>
    </motion.div>
  );
};
