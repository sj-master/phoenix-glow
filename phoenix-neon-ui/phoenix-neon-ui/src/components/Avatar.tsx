/* Phoenix UI Kit © Skyler J. Jones */

// Avatar.tsx
import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  gradient?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = '', 
  initials, 
  size = 'md',
  gradient = true
}) => {
  const phoenixSizeStyles = {
    sm: 'phoenix-avatar-sm w-8 h-8 text-xs',
    md: 'phoenix-avatar-md w-12 h-12 text-sm',
    lg: 'phoenix-avatar-lg w-16 h-16 text-base',
    xl: 'phoenix-avatar-xl w-20 h-20 text-lg',
  };

  const phoenixGradientBg = gradient 
    ? 'phoenix-avatar-gradient bg-gradient-to-br from-[#FF4D4F] to-[#FFAA1D]' 
    : 'phoenix-avatar-default bg-gray-600';

  if (src) {
    return (
      <div 
        className={`phoenix-avatar phoenix-core rounded-full overflow-hidden ${phoenixSizeStyles[size]}`}
        data-phoenix-kit="true"
        data-phoenix-component="avatar"
        data-phoenix-author="sjones"
        data-phoenix-version="1.0"
      >
        <img src={src} alt={alt} className="phoenix-avatar-img w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div 
      className={`phoenix-avatar phoenix-core rounded-full flex items-center justify-center text-white font-semibold ${phoenixSizeStyles[size]} ${phoenixGradientBg}`}
      data-phoenix-kit="true"
      data-phoenix-component="avatar"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
    >
      {initials}
    </div>
  );
};