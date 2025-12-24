import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, MapPin, Award, TrendingUp } from 'lucide-react';
import { Slide } from '../components';
import { companyData, clientLogos, offices } from '../lib/data';

export const CompanySlide: React.FC = () => {
  const stats = [
    { icon: Building2, value: companyData.years, label: 'Years in Business', suffix: '' },
    { icon: TrendingUp, value: `€${companyData.revenue}M`, label: 'Revenue 2024', suffix: '' },
    { icon: Users, value: companyData.employees, label: 'Team Members', suffix: '+' },
    { icon: MapPin, value: companyData.locations, label: 'Locations', suffix: '' },
    { icon: Award, value: companyData.managementExperience, label: 'Years Mgmt Experience', suffix: '+' },
  ];

  return (
    <Slide
      id="13"
      title="About CYBER1 Solutions"
      subtitle="A trusted partner with deep roots in EMEA cybersecurity"
    >
      <div className="w-full max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-4 rounded-xl bg-neutral-darkGray border border-neutral-gray/30 text-center"
            >
              <stat.icon className="w-6 h-6 text-cyber-lightBlue mx-auto mb-2" />
              <p className="text-2xl font-black text-white">{stat.value}{stat.suffix}</p>
              <p className="text-[10px] text-neutral-lightGray">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-xl bg-neutral-darkGray border border-neutral-gray/30"
          >
            <h3 className="text-lg font-bold text-white mb-4">Global Presence</h3>
            <div className="space-y-3">
              {offices.map((office) => (
                <div key={office.city} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-maidar-cyan" />
                    <span className="text-sm text-white">{office.city}, {office.country}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    office.type === 'HQ' 
                      ? 'bg-cyber-lightBlue/20 text-cyber-lightBlue' 
                      : office.type === 'Regional Hub'
                        ? 'bg-maidar-teal/20 text-maidar-cyan'
                        : 'bg-neutral-gray/20 text-neutral-lightGray'
                  }`}>
                    {office.type}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Clients */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {/* Certifications */}
            <div className="p-4 rounded-xl bg-neutral-darkGray border border-neutral-gray/30">
              <h3 className="text-sm font-bold text-white mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {companyData.certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1 text-xs bg-status-success/20 text-status-success rounded-full">
                    {cert}
                  </span>
                ))}
                <span className="px-3 py-1 text-xs bg-cyber-lightBlue/20 text-cyber-lightBlue rounded-full">
                  NASDAQ Listed (8 years)
                </span>
              </div>
            </div>

            {/* Client Categories */}
            <div className="p-4 rounded-xl bg-neutral-darkGray border border-neutral-gray/30">
              <h3 className="text-sm font-bold text-white mb-3">Trusted By</h3>
              <div className="flex flex-wrap gap-2">
                {['Government', 'Financial Services', 'Enterprise', 'Gaming', 'Healthcare'].map((cat) => (
                  <span key={cat} className="px-3 py-1 text-xs bg-neutral-gray/30 text-neutral-lightGray rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample Clients */}
            <div className="p-4 rounded-xl bg-neutral-darkGray border border-neutral-gray/30">
              <h3 className="text-sm font-bold text-white mb-3">Notable Clients</h3>
              <div className="flex flex-wrap gap-2">
                {clientLogos.slice(0, 8).map((client) => (
                  <span key={client.name} className="px-2 py-1 text-[10px] bg-neutral-black text-neutral-lightGray rounded">
                    {client.name}
                  </span>
                ))}
                <span className="px-2 py-1 text-[10px] text-neutral-gray">+{clientLogos.length - 8} more</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};
