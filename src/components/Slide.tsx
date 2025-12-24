import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SlideProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  background?: 'dark' | 'gradient-blue' | 'white';
  className?: string;
  showBadge?: boolean;
}

export const Slide: React.FC<SlideProps> = ({
  id,
  title,
  subtitle,
  children,
  background = 'dark',
  className,
  showBadge = true,
}) => {
  const backgrounds = {
    dark: 'bg-neutral-black',
    white: 'bg-white',
    'gradient-blue': 'bg-gradient-to-br from-cyber-navy via-cyber-blue to-neutral-black',
  };

  const textColors = {
    dark: 'text-white',
    white: 'text-neutral-black',
    'gradient-blue': 'text-white',
  };

  return (
    <section
      id={`slide-${id}`}
      className={cn(
        'min-h-screen w-full flex flex-col relative overflow-hidden',
        backgrounds[background],
        className
      )}
    >
      {/* 28 Years Badge */}
      {showBadge && (
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
          <img 
            src="/images/Image1.png" 
            alt="28 Years of Excellence" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
      )}

      {/* Hybrid Concepts Logo (top left) */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
        <img 
          src="/images/WhatsApp Image 2025-12-24 at 16.22.42.jpeg" 
          alt="Hybrid Concepts" 
          className="h-20 md:h-24 w-auto object-contain"
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Header */}
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-8 md:px-16 lg:px-24 pt-24 md:pt-28 z-10"
        >
          {title && (
            <h1 className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight',
              textColors[background]
            )}>
              {title}
            </h1>
          )}
          {subtitle && (
            <p className={cn(
              'text-lg md:text-xl lg:text-2xl font-medium max-w-5xl',
              background === 'white' ? 'text-neutral-gray' : 'text-neutral-lightGray'
            )}>
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-24 pb-12 md:pb-16 z-10">
        {children}
      </div>

      {/* Slide number */}
      <div className={cn(
        'absolute bottom-6 md:bottom-8 right-6 md:right-8 text-sm font-mono z-10',
        background === 'white' ? 'text-neutral-gray' : 'text-neutral-gray'
      )}>
        #{id.padStart(2, '0')}
      </div>
    </section>
  );
};
