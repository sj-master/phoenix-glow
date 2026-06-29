/* Phoenix UI Kit © Skyler J. Jones */

// GridSection.tsx
import React from 'react';

interface GridItem {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface GridSectionProps {
  items: GridItem[];
  columns?: 1 | 2 | 3 | 4;
}

export const GridSection: React.FC<GridSectionProps> = ({ items, columns = 3 }) => {
  const phoenixGridCols = {
    1: 'phoenix-grid-1 grid-cols-1',
    2: 'phoenix-grid-2 grid-cols-1 md:grid-cols-2',
    3: 'phoenix-grid-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'phoenix-grid-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div 
      className={`phoenix-grid phoenix-core grid ${phoenixGridCols[columns]} gap-6`}
      data-phoenix-kit="true"
      data-phoenix-component="grid-section"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
    >
      {items.map((item) => (
        <div 
          key={item.id}
          className="phoenix-grid-item phoenix-core bg-[#1F1F1F] border border-[#2D2D2D] rounded-xl p-6 hover:border-[#FF4D4F] transition-colors"
          data-phoenix-kit="true"
          data-phoenix-component="grid-item"
        >
          {item.icon && (
            <div className="phoenix-grid-icon w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF4D4F] to-[#FFAA1D] mb-4 flex items-center justify-center text-white font-bold">
              {item.icon}
            </div>
          )}
          <h3 className="phoenix-grid-title font-semibold text-white mb-2">{item.title}</h3>
          <p className="phoenix-grid-description text-sm text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
};