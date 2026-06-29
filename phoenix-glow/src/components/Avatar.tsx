/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
  gradient?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  initials,
  size = "md",
  gradient = true,
}) => {
  const bg = gradient ? "phoenix-avatar-gradient" : "phoenix-avatar-default";
  if (src) {
    return (
      <div
        className={`phoenix-avatar phoenix-avatar-${size}`}
        data-phoenix-kit="true"
        data-phoenix-component="avatar"
      >
        <img src={src} alt={alt} className="phoenix-avatar-img" />
      </div>
    );
  }
  return (
    <div
      className={`phoenix-avatar phoenix-avatar-${size} ${bg}`}
      data-phoenix-kit="true"
      data-phoenix-component="avatar"
    >
      {initials}
    </div>
  );
};
