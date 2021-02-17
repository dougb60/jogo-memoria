import { FC } from 'react';
import Modal, { Props } from 'react-modal';

const AlertModal: FC<Props> = ({ isOpen, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(38, 4, 48, 0.9)',
        },
        content: {
          position: 'relative',
          maxWidth: '600px',
          maxHeight: '400px',
          minHeight: '250px',
          margin: '5rem auto',
          border: '1px solid #13e5ed',
          boxShadow: `-0.9rem 1.2rem 3.2rem #13e5ed`,
          background: 'rgba(12, 15, 17, 0.3)',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default AlertModal;
