import React from 'react';

import s from './styles.module.css';

type ModalProps = {
  text: string;
  modalOpen: boolean;
  closeModal: any;
};

export const Modal: React.FC<ModalProps> = ({
  text,
  modalOpen,
  closeModal,
}) => {
  const handleClose = closeModal;
  console.log(modalOpen);
  if (modalOpen) {
    return (
      <div className={s.modal_blocker}>
        <div className={s.modal_container}>
          <span
            className={s.close_button}
            onClick={() => {
              handleClose();
            }}
          >
            X
          </span>
          <div className={s.modal_text}>{text}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
