/* Phoenix UI Kit © Skyler J. Jones */

// GlowButton.tsx
import React from 'react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'phoenix' | 'purple' | 'blue' | 'green';
}

export const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  variant = 'phoenix',
  className = '',
  ...props 
}) => {
  const phoenixGradients = {
    phoenix: 'phoenix-glow-phoenix from-[#FF4D4F] to-[#FFAA1D]',
    purple: 'phoenix-glow-purple from-purple-600 to-pink-600',
    blue: 'phoenix-glow-blue from-blue-600 to-cyan-600',
    green: 'phoenix-glow-green from-green-600 to-emerald-600',
  };

  return (
    <>
      <style>{`
        /* Phoenix UI Kit © Skyler J. Jones */
        @keyframes phoenix-neon-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 77, 79, 0.6), 0 0 40px rgba(255, 77, 79, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 77, 79, 0.8), 0 0 60px rgba(255, 77, 79, 0.6);
          }
        }
        .phoenix-glow-btn {
          animation: phoenix-neon-pulse 2s ease-in-out infinite;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
      `}</style>
      <button 
        className={`phoenix-glow-btn phoenix-core inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r ${phoenixGradients[variant]} ${className}`}
        data-phoenix-kit="true"
        data-phoenix-component="glow-button"
        data-phoenix-author="sjones"
        data-phoenix-version="1.0"
        {...props}
      >
        {children}
      </button>
    </>
  );
};