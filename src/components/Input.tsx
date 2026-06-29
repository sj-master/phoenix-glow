/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  help?: string;
  status?: "default" | "error" | "success";
}

export const Input: React.FC<InputProps> = ({ label, help, status = "default", className = "", id, ...props }) => {
  const autoId = id || (label ? `phx-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const helpClass = status === "error" ? "phoenix-help-error" : status === "success" ? "phoenix-help-success" : "phoenix-help";
  return (
    <div className="phoenix-field" data-phoenix-kit="true">
      {label && <label className="phoenix-label" htmlFor={autoId}>{label}</label>}
      <input id={autoId} className={`phoenix-input ${className}`.trim()} {...props} />
      {help && <span className={helpClass}>{help}</span>}
    </div>
  );
};
