import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Laptop, Network, Cloud, AlertTriangle, Database,
  UserCheck, Activity, FileCheck, Settings, Brain
} from 'lucide-react';
import { Slide } from '../components';
import { coreServicesGrid } from '../lib/data';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'shield-check': ShieldCheck,
  'laptop': Laptop,
  'network': Network,
  'cloud': Cloud,
  'alert-triangle': AlertTriangle,
  'database': Database,
  'user-check': UserCheck,
  'activity': Activity,
  'file-check': FileCheck,
  'settings': Settings,
  'brain': Brain,
};

export const ServicesGridSlide: React.FC = () => {
  return (
    <Slide
      id="07"
      title="Complete Security Portfolio"
      subtitle="End-to-end cybersecurity services across all domains"
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {coreServicesGrid.map((category, index) => {
            const Icon = iconMap[category.icon] || ShieldCheck;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-4 rounded-xl border transition-all ${
                  category.isNew
                    ? 'bg-gradient-to-br from-maidar-teal/20 to-maidar-cyan/10 border-maidar-cyan/50'
                    : 'bg-neutral-darkGray border-neutral-gray/30 hover:border-cyber-lightBlue/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-5 h-5 ${category.isNew ? 'text-maidar-cyan' : 'text-cyber-lightBlue'}`} />
                  <h4 className="text-sm font-bold text-white leading-tight">{category.category}</h4>
                  {category.isNew && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold bg-maidar-cyan text-white rounded">
                      NEW
                    </span>
                  )}
                </div>
                <ul className="space-y-1">
                  {category.services.slice(0, 4).map((service, idx) => (
                    <li key={idx} className="text-[11px] text-neutral-lightGray flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-neutral-gray mt-1.5 flex-shrink-0" />
                      <span className="line-clamp-1">{service}</span>
                    </li>
                  ))}
                  {category.services.length > 4 && (
                    <li className="text-[10px] text-neutral-gray">
                      +{category.services.length - 4} more
                    </li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-4 text-sm"
        >
          <div className="px-4 py-2 rounded-full bg-cyber-blue/20 text-cyber-lightBlue font-semibold">
            10+ Security Domains
          </div>
          <div className="px-4 py-2 rounded-full bg-maidar-teal/20 text-maidar-cyan font-semibold">
            50+ Services
          </div>
          <div className="px-4 py-2 rounded-full bg-status-success/20 text-status-success font-semibold">
            ISO 27001 Certified
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};
