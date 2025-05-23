import type { ReactNode } from 'react';
import type { TModalHook } from '@types';

// Типы пропсов для компонента модального окна
export type TModalProps = {
  children: ReactNode;
  modalHook: TModalHook;
};
