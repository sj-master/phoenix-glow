/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface TooltipProps {
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, side = "top", children }) => (
  <span className={`phoenix-tooltip phoenix-tooltip-${side}`} data-phoenix-kit="true">
    {children}
    <span className="phoenix-tooltip-bubble" role="tooltip">{content}</span>
  </span>
);
