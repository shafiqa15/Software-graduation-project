import React from 'react';
import ReactDOM from 'react-dom';
import '../Cart/ConfirmModal.css'; 

const ConfirmModal = ({ isOpen, onCancel, onConfirm, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="confirm-modal-overlay">
      <div className="confirm-modal">
        <div className="confirm-modal-content">{children}</div>
        <div className="confirm-modal-actions">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmModal;
