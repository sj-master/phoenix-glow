/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface ProgressProps {
  value: number;        // 0-100
  color?: "phoenix" | "cyan" | "purple" | "green";
  showLabel?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({ value, color = "phoenix", showLabel }) => {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="phoenix-progress" data-phoenix-kit="true">
      <div className="phoenix-progress-track">
        <div className={`phoenix-progress-bar phoenix-progress-${color}`} style={{ width: `${clamped}%` }} />
      </div>
      {showLabel && <span className="phoenix-progress-label">{clamped}%</span>}
    </div>
  );
};
