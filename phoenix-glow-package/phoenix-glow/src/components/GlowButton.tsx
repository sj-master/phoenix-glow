/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "phoenix" | "purple" | "blue" | "green";
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  variant = "phoenix",
  className = "",
  ...props
}) => {
  const glowClass = `phoenix-glow-${variant === "phoenix" ? "orange" : variant}`;
  return (
    <button
      className={`phoenix-btn phoenix-btn-${variant} ${glowClass} ${className}`.trim()}
      data-phoenix-kit="true"
      data-phoenix-component="glow-button"
      {...props}
    >
      {children}
    </button>
  );
};
