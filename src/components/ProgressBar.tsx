import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentSlide, totalSlides }) => {
  const progress = (currentSlide / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-darkGray/90 backdrop-blur border-t border-neutral-gray/30">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="text-sm text-neutral-lightGray font-mono">
          Slide {currentSlide} of {totalSlides}
        </div>
        
        <div className="flex-1 mx-8 h-1 bg-neutral-gray rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-lightBlue to-maidar-cyan"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="text-xs text-neutral-gray">
          Use ← → arrows
        </div>
      </div>
    </div>
  );
};
