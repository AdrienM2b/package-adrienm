import React from 'react';

import s from './styles.module.css';

type ModalProps = {
  text: string;
  modalOpen: boolean;
  closeModal: React.MouseEventHandler<HTMLSpanElement>;
};

export const Modal: React.FC<ModalProps> = ({
  text,
  modalOpen,
  closeModal,
}) => {
  // commentaire
  const handleClose = closeModal;
  if (modalOpen) {
    return (
      <div className={s.modal_blocker}>
        <div className={s.modal_container}>
          <span
            className={s.close_button}
            onClick={(e) => {
              handleClose(e);
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
