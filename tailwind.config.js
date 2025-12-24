/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // CYBER1 Brand Colors (blue-based)
        cyber: {
          blue: '#1E3A8A',      // Deep blue (main brand)
          lightBlue: '#3B82F6', // Light blue
          navy: '#0F172A',      // Dark navy background
          electric: '#06B6D4',  // Cyan accent
        },
        // Maidar Secure Brand (teal/cyan)
        maidar: {
          teal: '#0891B2',
          cyan: '#06B6D4',
          purple: '#7C3AED',    // Cognitive accent only
        },
        // Status colors
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        // Neutrals
        neutral: {
          black: '#0F172A',
          darkGray: '#1E293B',
          gray: '#475569',
          lightGray: '#94A3B8',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
