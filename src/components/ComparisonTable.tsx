import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComparisonRow {
  feature: string;
  cyber1: boolean;
  traditionalMFA: boolean;
  pureSOC: boolean;
  globalGiants: boolean;
}

interface ComparisonTableProps {
  data: ComparisonRow[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  const headers = ['Feature', 'CYBER1 Solutions', 'Traditional MFA', 'Pure SOC', 'Global Giants'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full overflow-hidden rounded-2xl border border-neutral-gray/30"
    >
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-cyber-blue to-cyber-lightBlue">
            {headers.map((header, i) => (
              <th
                key={i}
                className={`px-6 py-4 text-sm font-bold text-white uppercase ${
                  i === 0 ? 'text-left w-2/5' : 'text-center'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-gray/30">
          {data.map((row, i) => (
            <tr key={i} className="bg-neutral-darkGray hover:bg-neutral-gray transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white">{row.feature}</td>
              <td className="px-6 py-4 text-center">
                {row.cyber1 ? (
                  <Check className="w-5 h-5 text-status-success mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-status-error mx-auto" />
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {row.traditionalMFA ? (
                  <Check className="w-5 h-5 text-status-success mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-status-error mx-auto" />
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {row.pureSOC ? (
                  <Check className="w-5 h-5 text-status-success mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-status-error mx-auto" />
                )}
              </td>
              <td className="px-6 py-4 text-center">
                {row.globalGiants ? (
                  <Check className="w-5 h-5 text-status-success mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-status-error mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};
