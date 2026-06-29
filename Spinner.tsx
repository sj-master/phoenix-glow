/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "phoenix" | "cyan" | "purple" | "green";
}

export const Spinner: React.FC<SpinnerProps> = ({ size = "md", color = "phoenix" }) => (
  <span
    className={`phoenix-spinner-ring phoenix-spinner-${size} phoenix-spinner-${color}`}
    role="status"
    aria-label="loading"
    data-phoenix-kit="true"
  />
);
