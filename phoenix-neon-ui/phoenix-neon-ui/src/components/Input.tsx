/* Phoenix UI Kit © Skyler J. Jones */

// Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: string;
  helper?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  success, 
  helper, 
  className = '',
  ...props 
}) => {
  const phoenixStateClass = error 
    ? 'phoenix-input-error border-red-500' 
    : success 
    ? 'phoenix-input-success border-green-500' 
    : 'phoenix-input-default border-[#2D2D2D]';

  const phoenixLabelClass = error 
    ? 'phoenix-label-error text-red-600' 
    : success 
    ? 'phoenix-label-success text-green-600' 
    : 'phoenix-label-default text-gray-300';

  return (
    <div 
      className="phoenix-input-group phoenix-core flex flex-col gap-2"
      data-phoenix-kit="true"
      data-phoenix-component="input-group"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
    >
      <label className={`phoenix-input-label text-sm font-medium ${phoenixLabelClass}`}>
        {label}
      </label>
      <input
        className={`phoenix-input phoenix-core px-4 py-2.5 rounded-lg border bg-[#0A0A0A] text-white text-sm focus:outline-none focus:border-[#FF4D4F] ${phoenixStateClass} ${className}`}
        data-phoenix-kit="true"
        data-phoenix-component="input"
        {...props}
      />
      {error && (
        <p className="phoenix-input-error-msg text-xs text-red-600 flex items-center gap-1">
          ⚠ {error}
        </p>
      )}
      {success && (
        <p className="phoenix-input-success-msg text-xs text-green-600 flex items-center gap-1">
          ✓ {success}
        </p>
      )}
      {helper && !error && !success && (
        <p className="phoenix-input-helper text-xs text-gray-500">{helper}</p>
      )}
    </div>
  );
};