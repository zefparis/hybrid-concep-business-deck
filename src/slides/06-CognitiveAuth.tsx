import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Timer, ShieldCheck, Fingerprint, Lock, Cpu } from 'lucide-react';
import { Slide } from '../components';
import { metrics } from '../lib/data';

export const CognitiveAuthSlide: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Brain-Pattern Recognition',
      description: 'Analyzes unique cognitive responses to visual stimuli',
    },
    {
      icon: Timer,
      title: '15-Second Authentication',
      description: 'Fast, frictionless user experience with no productivity impact',
    },
    {
      icon: ShieldCheck,
      title: 'Mathematically Unforgeable',
      description: 'Cannot be replicated by bots, deepfakes, or stolen credentials',
    },
    {
      icon: Lock,
      title: 'Post-Quantum Security',
      description: 'Kyber-768 encryption protects against future quantum attacks',
    },
    {
      icon: Fingerprint,
      title: 'PSD2 SCA Compliant',
      description: 'Meets Strong Customer Authentication requirements',
    },
    {
      icon: Cpu,
      title: 'Anti-Bot Defense',
      description: 'Proof-of-Work + Replay protection blocks automated attacks',
    },
  ];

  return (
    <Slide
      id="06"
      title="Cognitive Authentication"
      subtitle="The future of identity verification — proving human presence, not just credentials"
    >
      <div className="w-full max-w-6xl">
        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-maidar-purple/20 to-maidar-cyan/20 border border-maidar-cyan/30"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">How It Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-maidar-teal flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-black text-white">1</span>
              </div>
              <p className="text-sm text-neutral-lightGray">User views<br />visual stimulus</p>
            </div>
            <div className="hidden md:block text-neutral-gray">→</div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-maidar-cyan flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-black text-white">2</span>
              </div>
              <p className="text-sm text-neutral-lightGray">Brain response<br />captured (15s)</p>
            </div>
            <div className="hidden md:block text-neutral-gray">→</div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyber-lightBlue flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-black text-white">3</span>
              </div>
              <p className="text-sm text-neutral-lightGray">Pattern verified<br />against profile</p>
            </div>
            <div className="hidden md:block text-neutral-gray">→</div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-status-success flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-black text-white">✓</span>
              </div>
              <p className="text-sm text-neutral-lightGray">Human presence<br />confirmed</p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-xl bg-neutral-darkGray border border-neutral-gray/30 hover:border-maidar-cyan/50 transition-all"
            >
              <feature.icon className="w-8 h-8 text-maidar-cyan mb-3" />
              <h4 className="text-base font-bold text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-neutral-lightGray">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="p-4 rounded-xl bg-neutral-darkGray text-center">
            <p className="text-3xl font-black text-status-success">{metrics.uptime}%</p>
            <p className="text-xs text-neutral-lightGray">Uptime</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-darkGray text-center">
            <p className="text-3xl font-black text-cyber-lightBlue">{metrics.authLatency}ms</p>
            <p className="text-xs text-neutral-lightGray">Auth Latency</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-darkGray text-center">
            <p className="text-3xl font-black text-maidar-cyan">{metrics.securityScore}%</p>
            <p className="text-xs text-neutral-lightGray">Security Score</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-darkGray text-center">
            <p className="text-3xl font-black text-status-error">{metrics.attacksBlocked}</p>
            <p className="text-xs text-neutral-lightGray">Attacks Blocked</p>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};
