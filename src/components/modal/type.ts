import type { ReactNode } from 'react';

// Типы пропсов для компонента модального окна
export type TModalProps = {
  onClose: () => void;
  children: ReactNode;
  isOpen: boolean;
};
