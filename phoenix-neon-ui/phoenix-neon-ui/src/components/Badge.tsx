/* Phoenix UI Kit © Skyler J. Jones */

// Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'yellow' | 'red' | 'phoenix' | 'purple' | 'blue';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'phoenix',
  size = 'md'
}) => {
  const phoenixVariantStyles = {
    green: 'phoenix-badge-green bg-green-100/10 text-green-400 border-green-500/20',
    yellow: 'phoenix-badge-yellow bg-yellow-100/10 text-yellow-400 border-yellow-500/20',
    red: 'phoenix-badge-red bg-red-100/10 text-red-400 border-red-500/20',
    phoenix: 'phoenix-badge-primary bg-[#FF4D4F]/10 text-[#FF4D4F] border-[#FF4D4F]/20',
    purple: 'phoenix-badge-purple bg-purple-500/10 text-purple-400 border-purple-500/20',
    blue: 'phoenix-badge-blue bg-blue-500/10 text-blue-400 border-blue-500/20',
  };

  const phoenixSizeStyles = {
    sm: 'phoenix-badge-sm text-xs px-2 py-0.5',
    md: 'phoenix-badge-md text-sm px-2.5 py-0.5',
    lg: 'phoenix-badge-lg text-base px-3 py-1',
  };

  return (
    <span 
      className={`phoenix-badge phoenix-core inline-flex items-center rounded-md border font-semibold ${phoenixVariantStyles[variant]} ${phoenixSizeStyles[size]}`}
      data-phoenix-kit="true"
      data-phoenix-component="badge"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
    >
      {children}
    </span>
  );
};