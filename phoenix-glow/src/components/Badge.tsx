/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "yellow" | "red" | "phoenix" | "purple" | "blue";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "phoenix",
  size = "md",
}) => {
  const variantClass = variant === "phoenix" ? "phoenix-badge-primary" : `phoenix-badge-${variant}`;
  return (
    <span
      className={`phoenix-badge ${variantClass} phoenix-badge-${size}`}
      data-phoenix-kit="true"
      data-phoenix-component="badge"
    >
      {children}
    </span>
  );
};
