/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "phoenix" | "purple" | "blue" | "green" | "outline" | "secondary";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "phoenix",
  isLoading = false,
  disabled,
  className = "",
  ...props
}) => {
  const variantClass = `phoenix-btn-${variant}`;
  return (
    <button
      className={`phoenix-btn ${variantClass} ${className}`.trim()}
      disabled={disabled || isLoading}
      data-phoenix-kit="true"
      data-phoenix-component="button"
      {...props}
    >
      {isLoading && (
        <svg className="phoenix-spinner" fill="none" viewBox="0 0 24 24">
          <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
};
