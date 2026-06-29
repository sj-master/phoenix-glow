/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: React.ReactNode;
  glow?: "orange" | "pink" | "purple" | "blue" | "cyan" | "green";
  action?: { label: string; onClick: () => void };
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  glow,
  action,
  className = "",
  children,
  ...props
}) => {
  const glowClass = glow ? `phoenix-glow-${glow}` : "";
  return (
    <div
      className={`phoenix-card ${glowClass} ${className}`.trim()}
      data-phoenix-kit="true"
      data-phoenix-component="card"
      {...props}
    >
      {image && <div className="phoenix-card-image">{image}</div>}
      <div className="phoenix-card-inner">
        {title && <h3 className="phoenix-card-title">{title}</h3>}
        {description && <p className="phoenix-card-description">{description}</p>}
        {children}
        {action && (
          <button className="phoenix-btn phoenix-btn-phoenix phoenix-card-cta" onClick={action.onClick}>
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};
