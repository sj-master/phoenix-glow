/* Phoenix UI Kit © Skyler J. Jones */

// Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false,
  disabled,
  className = '',
  ...props 
}) => {
  const phoenixBaseStyles = "phoenix-btn phoenix-core inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const phoenixVariantStyles = {
    primary: "phoenix-btn-primary bg-gradient-to-r from-[#FF4D4F] to-[#FFAA1D] text-white border-0 hover:transform hover:-translate-y-0.5 hover:shadow-lg",
    secondary: "phoenix-btn-secondary bg-transparent border border-[#2D2D2D] text-white hover:bg-[#2D2D2D]"
  };

  return (
    <button 
      className={`${phoenixBaseStyles} ${phoenixVariantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      data-phoenix-kit="true"
      data-phoenix-component="button"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
      {...props}
    >
      {isLoading && (
        <svg className="phoenix-spinner animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
};