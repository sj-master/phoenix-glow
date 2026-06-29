/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  color?: "phoenix" | "cyan" | "purple" | "green";
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked, defaultChecked, onChange, disabled, color = "phoenix", label,
}) => {
  const [internal, setInternal] = React.useState(defaultChecked ?? false);
  const isOn = checked ?? internal;
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (checked === undefined) setInternal(next);
    onChange?.(next);
  };
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      disabled={disabled}
      onClick={toggle}
      className={`phoenix-switch phoenix-switch-${color} ${isOn ? "is-on" : ""}`}
      data-phoenix-kit="true"
      data-phoenix-component="switch"
    >
      <span className="phoenix-switch-track"><span className="phoenix-switch-thumb" /></span>
      {label && <span className="phoenix-switch-label">{label}</span>}
    </button>
  );
};
