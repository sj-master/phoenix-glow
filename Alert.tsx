/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
}

export const Alert: React.FC<AlertProps> = ({ variant = "info", title, className = "", children, ...props }) => (
  <div className={`phoenix-alert phoenix-alert-${variant} ${className}`.trim()} role="alert" data-phoenix-kit="true" {...props}>
    {title && <div className="phoenix-alert-title">{title}</div>}
    <div className="phoenix-alert-body">{children}</div>
  </div>
);
