// import type { TContactFormHook } from '@types';

// Интерфейс для формы
export interface ContactFormData {
  phone: string;
  tg: string;
  email: string;
  name: string;
}

// Интерфейс для пропсов модального окна формы контактов
export interface ContactFormModalProps {
  onSubmit: (formData: ContactFormData) => void;
  onClose: () => void;
}
