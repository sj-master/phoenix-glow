/* Phoenix UI Kit © Skyler J. Jones */

// PricingCard.tsx
import React from 'react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  period?: string;
  features: PricingFeature[];
  featured?: boolean;
  featuredLabel?: string;
  onSelect: () => void;
  buttonLabel?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  period = '/month',
  features,
  featured = false,
  featuredLabel = 'Most Popular',
  onSelect,
  buttonLabel = 'Get Started'
}) => {
  return (
    <div 
      className={`phoenix-pricing-card phoenix-core relative bg-[#1F1F1F] border-2 rounded-2xl p-8 transition-all hover:border-[#FF4D4F] ${featured ? 'phoenix-pricing-featured border-[#FF4D4F] shadow-xl' : 'phoenix-pricing-default border-[#2D2D2D]'}`}
      data-phoenix-kit="true"
      data-phoenix-component="pricing-card"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
    >
      {featured && (
        <div className="phoenix-pricing-badge absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="phoenix-pricing-badge-text inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF4D4F] to-[#FFAA1D] text-white text-sm font-semibold">
            {featuredLabel}
          </span>
        </div>
      )}
      
      <h3 className="phoenix-pricing-title text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="phoenix-pricing-description text-sm text-gray-400 mb-6">{description}</p>
      
      <div className="phoenix-pricing-price mb-6">
        <span className="phoenix-pricing-amount text-5xl font-bold text-white">${price}</span>
        <span className="phoenix-pricing-period text-gray-400">{period}</span>
      </div>
      
      <ul className="phoenix-pricing-features space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="phoenix-pricing-feature flex items-center gap-2 text-sm text-gray-400">
            <span className="phoenix-pricing-check text-green-600">✓</span>
            {feature.text}
          </li>
        ))}
      </ul>
      
      <button
        onClick={onSelect}
        className="phoenix-pricing-cta phoenix-core w-full bg-gradient-to-r from-[#FF4D4F] to-[#FFAA1D] text-white py-2.5 rounded-lg font-semibold hover:transform hover:-translate-y-0.5 transition-all"
        data-phoenix-kit="true"
      >
        {buttonLabel}
      </button>
    </div>
  );
};