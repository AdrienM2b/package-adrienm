import React from 'react';
type ModalProps = {
    text: string;
    modalOpen: boolean;
    closeModal: React.MouseEventHandler<HTMLSpanElement>;
};
export declare const Modal: React.FC<ModalProps>;
export {};
