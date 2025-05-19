import type { ReactNode } from 'react';

// Типы пропсов для компонента модального окна
export type TModalUIProps = {
  onClose: () => void;
  children: ReactNode;
  isOpen: boolean;
};
