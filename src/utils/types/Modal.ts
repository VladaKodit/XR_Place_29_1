export type TModalHook = {
  isOpen: boolean;
  openModal: (onClose: () => void) => void;
  closeModal: () => void;
};
