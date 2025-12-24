import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, Key } from 'lucide-react';
import { Slide } from '../components';
import { problemStats } from '../lib/data';

export const ProblemSlide: React.FC = () => {
  const icons = [Key, DollarSign, Clock];

  return (
    <Slide
      id="03"
      title="The Challenge"
      subtitle="Why organizations need comprehensive cybersecurity now more than ever"
    >
      <div className="w-full max-w-6xl">
        {/* Problem Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problemStats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-status-error/10 to-neutral-darkGray border border-status-error/30 text-center"
              >
                <Icon className="w-12 h-12 text-status-error mx-auto mb-4" />
                <div className="text-5xl font-black text-white mb-3">{stat.value}</div>
                <p className="text-neutral-lightGray mb-2">{stat.label}</p>
                <p className="text-xs text-neutral-gray">{stat.source}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Key Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-xl bg-neutral-darkGray border border-neutral-gray/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-status-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Evolving Threat Landscape</h3>
                <p className="text-sm text-neutral-lightGray">
                  Sophisticated attacks targeting credentials, ransomware, and supply chain vulnerabilities require 24/7 vigilance.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-neutral-darkGray border border-neutral-gray/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-status-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Compliance Pressure</h3>
                <p className="text-sm text-neutral-lightGray">
                  NIS2, GDPR, PSD2, and industry regulations demand robust security controls and audit trails.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-neutral-darkGray border border-neutral-gray/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-status-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Talent Shortage</h3>
                <p className="text-sm text-neutral-lightGray">
                  3.4 million unfilled cybersecurity positions globally make in-house SOC teams impractical for most organizations.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-neutral-darkGray border border-neutral-gray/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-status-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Authentication Weakness</h3>
                <p className="text-sm text-neutral-lightGray">
                  Traditional MFA (SMS, TOTP) is vulnerable to SIM swap, phishing, and session hijacking attacks.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solution Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-xl text-cyber-lightBlue font-semibold">
            Hybrid Concepts addresses all these challenges with Maidar Secure + Cognitive Authentication
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};
