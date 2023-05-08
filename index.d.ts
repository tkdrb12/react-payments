import React from "react";
interface ModalProps {
    closeModal: () => void;
    canBackdropClickClose?: boolean;
}
declare const _default: React.MemoExoticComponent<({ children, closeModal, canBackdropClickClose }: React.PropsWithChildren<ModalProps>) => React.ReactPortal>;
export default _default;
