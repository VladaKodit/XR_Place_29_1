export type TModalHook = {
  isOpen: boolean;
  openModal: (onClose: () => void) => void;
  closeModal: () => void;
};

export type TContactFormHook = {
  phone: string;
  tg: string;
  email: string;
  name: string;
  setPhone: (val: string) => void;
  setTg: (val: string) => void;
  setEmail: (val: string) => void;
  setName: (val: string) => void;
  clear: () => void;
};
