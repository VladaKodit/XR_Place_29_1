import { useRef, useState } from 'react';
import type { TModalHook } from '@types';

// универсальный хук для управления состоянием модального окна
export const useModal: () => TModalHook = () => {
  // инвариант (условие, которое обязательно соблюдается для хука):
  // isOpen === (onCloseRef.current !== null)

  // хранит "true" тогда и только тогда, когда модальное окно открыто
  const [isOpen, setIsOpen] = useState(false);

  // хранит коллбэк для закрытия модального окна
  // (1) если нет коллбэка, значит, модальное окно закрыто
  // (2) если есть коллбэк, значит, он будет вызван после того, как
  // модальное окно исчезнет с экрана
  const onCloseRef = useRef<(() => void) | null>(null);

  // функция для открытия модального окна
  const openModal = (onClose: () => void) => {
    onCloseRef.current = onClose;
    setIsOpen(true);
  };

  // функция для закрытия модального окна
  const closeModal = () => {
    const onClose = onCloseRef.current;
    if (onClose === null) {
      return;
    }
    // помечаем модальное окно как закрытое, чтобы запустилась анимация закрытия
    setIsOpen(false);
    onCloseRef.current = null;
    // вызываем коллбэк после закрытия модального окна с задержкой (для анимации)
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
