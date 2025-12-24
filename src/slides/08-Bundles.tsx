import React from 'react';
import { motion } from 'framer-motion';
import { Slide, BundleCard } from '../components';
import { bundles } from '../lib/data';

export const BundlesSlide: React.FC = () => {
  return (
    <Slide
      id="08"
      title="Industry Bundles"
      subtitle="Pre-configured solutions tailored for specific sectors"
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundles.map((bundle, index) => (
            <BundleCard
              key={bundle.id}
              name={bundle.name}
              target={bundle.target}
              pricing={bundle.pricing}
              includes={bundle.includes}
              benefits={bundle.benefits}
              gradient={bundle.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Custom Solutions Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-neutral-lightGray">
            Need a custom solution? <span className="text-cyber-lightBlue font-semibold">Contact us</span> for tailored packages
          </p>
        </motion.div>
      </div>
    </Slide>
  );
};
