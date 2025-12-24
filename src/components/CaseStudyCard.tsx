import React from 'react';
import { motion } from 'framer-motion';
import { Quote, TrendingDown, TrendingUp } from 'lucide-react';

interface Result {
  metric: string;
  before?: string;
  after?: string;
  improvement?: string;
  status?: string;
  count?: string | number;
  blocked?: string | number;
  period?: string;
  detail?: string;
  impact?: string;
}

interface CaseStudyCardProps {
  industry: string;
  type: string;
  challenge: string[];
  solution: string[];
  results: Result[];
  quote: string;
  role: string;
  delay?: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  industry,
  type,
  challenge,
  solution,
  results,
  quote,
  role,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="p-8 rounded-2xl bg-neutral-darkGray border border-neutral-gray/30"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{industry}</h3>
        <p className="text-cyber-lightBlue text-sm font-medium">{type}</p>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <p className="text-xs font-bold text-neutral-lightGray uppercase mb-3">Challenge</p>
        <ul className="space-y-2">
          {challenge.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-neutral-lightGray">
              <TrendingDown className="w-4 h-4 text-status-error flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Solution */}
      <div className="mb-6">
        <p className="text-xs font-bold text-neutral-lightGray uppercase mb-3">Solution Deployed</p>
        <ul className="space-y-2">
          {solution.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-white">
              <TrendingUp className="w-4 h-4 text-maidar-cyan flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Results */}
      <div className="mb-6 p-4 bg-neutral-black/50 rounded-xl">
        <p className="text-xs font-bold text-status-success uppercase mb-3">Results</p>
        <div className="grid grid-cols-2 gap-4">
          {results.map((result, idx) => (
            <div key={idx} className="text-sm">
              <p className="text-neutral-lightGray mb-1">{result.metric}</p>
              {result.before && result.after && (
                <p className="text-white font-bold">
                  {result.before} → {result.after}
                  {result.improvement && (
                    <span className="text-status-success ml-2">({result.improvement})</span>
                  )}
                </p>
              )}
              {result.status && (
                <p className="text-white font-bold">{result.status}</p>
              )}
              {result.improvement && !result.before && (
                <p className="text-status-success font-bold">{result.improvement}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="relative pl-6 border-l-4 border-cyber-lightBlue">
        <Quote className="absolute -left-2 top-0 w-4 h-4 text-cyber-lightBlue" />
        <p className="text-sm text-neutral-lightGray italic mb-2">"{quote}"</p>
        <p className="text-xs text-white font-semibold">— {role}</p>
      </div>
    </motion.div>
  );
};
