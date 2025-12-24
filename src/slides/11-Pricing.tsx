import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Slide } from '../components';

export const PricingSlide: React.FC = () => {
  const pricingTiers = [
    {
      name: 'SME Starter',
      price: '€2,500',
      period: '/month',
      description: '50-500 employees',
      features: [
        'Maidar Secure Basic SOC (8x5)',
        'Cognitive MFA',
        'Cloud security monitoring',
        'Quarterly vulnerability scans',
      ],
      highlight: false,
    },
    {
      name: 'Enterprise',
      price: '€80k',
      period: '/year',
      description: 'SaaS & Tech Companies',
      features: [
        'Maidar Secure Standard SOC',
        'Cognitive auth for CI/CD',
        'SOAR automation',
        'Vulnerability management',
        'SOC 2 compliance support',
      ],
      highlight: true,
    },
    {
      name: 'Financial Services',
      price: '€150k',
      period: '/year base',
      description: 'Banks & Fintechs',
      features: [
        'Maidar Secure Advanced SOC',
        'PSD2 SCA compliance',
        'Fraud pattern detection',
        'Transaction approval workflows',
        'XTI for fintech',
      ],
      highlight: false,
    },
    {
      name: 'Government',
      price: 'Custom',
      period: '€300k-€1M/year',
      description: 'Ministries & Defense',
      features: [
        'Maidar Secure Enterprise SOC',
        'Cognitive PAM',
        'Post-quantum cryptography',
        'Air-gapped deployment',
        'CIRT retainer',
      ],
      highlight: false,
    },
  ];

  return (
    <Slide
      id="11"
      title="Investment"
      subtitle="Transparent pricing for every organization size"
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border-2 transition-all ${
                tier.highlight
                  ? 'bg-gradient-to-br from-cyber-blue/20 to-maidar-teal/20 border-cyber-lightBlue'
                  : 'bg-neutral-darkGray border-neutral-gray/30 hover:border-cyber-lightBlue/50'
              }`}
            >
              {tier.highlight && (
                <div className="text-xs font-bold text-cyber-lightBlue uppercase mb-2">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
              <p className="text-xs text-neutral-lightGray mb-4">{tier.description}</p>
              
              <div className="mb-4">
                <span className="text-3xl font-black text-white">{tier.price}</span>
                <span className="text-sm text-neutral-lightGray">{tier.period}</span>
              </div>
              
              <ul className="space-y-2">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-lightGray">
                    <Check className="w-4 h-4 text-status-success shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ROI Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 rounded-2xl bg-status-success/10 border border-status-success/30 text-center"
        >
          <p className="text-lg text-white">
            <span className="font-bold text-status-success">Average ROI:</span> 340% over 3 years through breach prevention and compliance cost reduction
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};
