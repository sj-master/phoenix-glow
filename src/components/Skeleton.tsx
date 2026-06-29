/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = "1rem", radius = "0.5rem" }) => (
  <span
    className="phoenix-skeleton"
    style={{ width, height, borderRadius: radius }}
    data-phoenix-kit="true"
  />
);
