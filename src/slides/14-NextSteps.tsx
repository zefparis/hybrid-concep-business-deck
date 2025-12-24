import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Users, Rocket } from 'lucide-react';
import { Slide } from '../components';

export const NextStepsSlide: React.FC = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Discovery Call',
      description: 'Schedule a 30-minute call to discuss your security challenges and requirements',
      timeline: 'This Week',
    },
    {
      icon: FileText,
      title: 'Technical Assessment',
      description: 'Our team conducts a complimentary security posture review',
      timeline: 'Week 1-2',
    },
    {
      icon: Users,
      title: 'Solution Design',
      description: 'Receive a tailored proposal with Maidar Secure + Cognitive Auth recommendations',
      timeline: 'Week 2-3',
    },
    {
      icon: Rocket,
      title: 'Pilot Launch',
      description: 'Begin with a focused pilot to demonstrate value before full deployment',
      timeline: 'Week 3-6',
    },
  ];

  return (
    <Slide
      id="14"
      title="Next Steps"
      subtitle="Your path to enterprise-grade security starts here"
    >
      <div className="w-full max-w-5xl">
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyber-lightBlue to-transparent z-0" />
              )}
              
              <div className="p-6 rounded-2xl bg-neutral-darkGray border border-neutral-gray/30 hover:border-cyber-lightBlue/50 transition-all relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-lightBlue flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="inline-block px-2 py-1 text-xs font-bold bg-maidar-cyan/20 text-maidar-cyan rounded mb-3">
                  {step.timeline}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-lightGray">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-white mb-6">
            Ready to transform your security posture?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-lightBlue text-white font-bold rounded-full hover:opacity-90 transition-opacity">
              Schedule Discovery Call
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-maidar-cyan text-maidar-cyan font-bold rounded-full hover:bg-maidar-cyan/10 transition-colors">
              Request Technical Assessment
            </button>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-neutral-lightGray"
        >
          <span className="text-status-success font-semibold">No obligation.</span> All initial consultations and assessments are complimentary.
        </motion.p>
      </div>
    </Slide>
  );
};
