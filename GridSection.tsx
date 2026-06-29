/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface GridItem {
  id: number | string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface GridSectionProps {
  items: GridItem[];
  columns?: 2 | 3 | 4;
}

export const GridSection: React.FC<GridSectionProps> = ({ items, columns = 3 }) => {
  return (
    <div
      className={`phoenix-grid phoenix-grid-${columns}`}
      data-phoenix-kit="true"
      data-phoenix-component="grid-section"
    >
      {items.map((item) => (
        <div key={item.id} className="phoenix-grid-item">
          {item.icon && <div className="phoenix-grid-icon">{item.icon}</div>}
          <h3 className="phoenix-grid-title">{item.title}</h3>
          <p className="phoenix-grid-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
