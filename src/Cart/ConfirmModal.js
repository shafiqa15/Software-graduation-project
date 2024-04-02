import React from 'react';
import ReactDOM from 'react-dom';
import '../Cart/ConfirmModal.css'; // Adjust this path to your CSS file for styling the modal

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
