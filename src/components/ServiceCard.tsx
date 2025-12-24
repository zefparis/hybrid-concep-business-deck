import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  delay?: number;
  isNew?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
  isNew = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'p-6 rounded-xl bg-neutral-darkGray border border-neutral-gray/30 hover:border-cyber-lightBlue/50 transition-all group',
        isNew && 'border-maidar-cyan/50 bg-gradient-to-br from-neutral-darkGray to-maidar-teal/10'
      )}
    >
      {isNew && (
        <span className="inline-block px-2 py-1 text-xs font-bold bg-maidar-cyan text-white rounded mb-3">
          NEW
        </span>
      )}
      
      {icon && (
        <div className="mb-4 text-cyber-lightBlue group-hover:text-maidar-cyan transition-colors">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      
      {description && (
        <p className="text-sm text-neutral-lightGray">{description}</p>
      )}
    </motion.div>
  );
};
