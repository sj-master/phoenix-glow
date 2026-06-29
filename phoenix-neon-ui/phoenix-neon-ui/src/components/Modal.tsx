/* Phoenix UI Kit © Skyler J. Jones */

// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  children, 
  actions 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="phoenix-modal-overlay phoenix-core fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      data-phoenix-kit="true"
      data-phoenix-component="modal-overlay"
      data-phoenix-author="sjones"
      data-phoenix-version="1.0"
    >
      <div 
        className="phoenix-modal phoenix-core bg-[#1F1F1F] rounded-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
        data-phoenix-kit="true"
        data-phoenix-component="modal"
        data-phoenix-author="sjones"
        data-phoenix-version="1.0"
      >
        <button
          onClick={onClose}
          className="phoenix-modal-close absolute top-4 right-4 text-gray-400 hover:text-white text-2xl leading-none"
          data-phoenix-kit="true"
        >
          ×
        </button>
        <h2 className="phoenix-modal-title text-2xl font-bold text-white mb-2">{title}</h2>
        {description && (
          <p className="phoenix-modal-description text-gray-400 mb-6">{description}</p>
        )}
        <div className="phoenix-modal-body">{children}</div>
        {actions && (
          <div className="phoenix-modal-actions flex gap-3 mt-6">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};