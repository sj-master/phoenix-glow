/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, footer }) => {
  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="phoenix-modal-overlay" onClick={onClose} data-phoenix-kit="true">
      <div className="phoenix-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="phoenix-modal-close" onClick={onClose} aria-label="Close">×</button>
        {title && <h2 className="phoenix-modal-title">{title}</h2>}
        <div className="phoenix-modal-body">{children}</div>
        {footer && <div className="phoenix-modal-footer">{footer}</div>}
      </div>
    </div>
  );
};
