/* Phoenix UI Kit © Skyler J. Jones */

// Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const Card: React.FC<CardProps> = ({ title, description, image, action }) => {
  return (
    <div 
      className="phoenix-card phoenix-core w-64 bg-[#1F1F1F] border border-[#2D2D2D] rounded-xl overflow-hidden shadow-lg"
      data-phoenix-kit="true"
      data-phoenix-component="card"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
    >
      {image && (
        <div className="phoenix-card-image h-40 bg-gradient-to-br from-[#FF4D4F]/20 to-[#FFAA1D]/20 flex items-center justify-center">
          {image}
        </div>
      )}
      <div className="phoenix-card-body p-4">
        <h3 className="phoenix-card-title font-semibold text-white mb-2">{title}</h3>
        <p className="phoenix-card-description text-sm text-gray-400 mb-4">{description}</p>
        {action && (
          <button 
            onClick={action.onClick}
            className="phoenix-card-cta phoenix-core w-full bg-gradient-to-r from-[#FF4D4F] to-[#FFAA1D] text-white py-2 rounded-lg font-semibold hover:transform hover:-translate-y-0.5 transition-all"
            data-phoenix-kit="true"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};