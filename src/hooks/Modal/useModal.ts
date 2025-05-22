import { useState } from 'react';

// универсальный хук для управления состоянием модального окна
export const useModal = <T = null>(initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // данные, которые передаются в модальное окно
  const [modalData, setModalData] = useState<T | null>(null);

  // функция для открытия модального окна
  const openModal = (data?: T) => {
    if (data) {
      setModalData(data);
    }
    setIsOpen(true);
  };

  // функция для закрытия модального окна
  const closeModal = () => {
    setIsOpen(false);
    // очищаем данные после закрытия модалки с задержкой (для анимации)
    setTimeout(() => setModalData(null), 300);
  };

  // функция для обработки отправки формы из модального окна
  const handleSubmit = (formData: T) => {
    // пока заглушка; с бэком будет API запрос
    console.log('Отправлено на бэк', formData);
    closeModal();
  };

  return {
    isOpen,
    modalData,
    openModal,
    closeModal,
    handleSubmit,
  };
};
