import type { FC } from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.scss';
import type { TModalProps } from './type';

/**
 * Корневой DOM-элемент для порталов модальных окон
 * Должен быть определен в HTML-структуре страницы с id="modals"
 */
const modalRoot = document.getElementById('modals');

/**
 * Компонент Modal - обертка для создания модального окна через портал React
 * @param {TModalProps} props - Пропсы компонента модального окна
 * @param {ReactNode} props.children - Содержимое модального окна
 * @param {TModalHook} props.modalHook - Хук модального окна
 * @returns {ReactPortal} - React портал с модальным окном и оверлеем
 */
export const Modal: FC<TModalProps> = ({ children, modalHook }) => {
  // Эффект для обработки нажатия клавиши ESC для закрытия модального окна
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        modalHook.closeModal();
      }
    };

    // Добавляем обработчик события нажатия клавиши
    document.addEventListener('keydown', handleEsc);

    // Функция очистки, удаляющая обработчик при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [modalHook]);

  // Состояние для управления классом анимации модального окна
  const [animationClass, setAnimationClass] = useState('');

  // Эффект для изменения класса анимации при изменении состояния isOpen
  useEffect(() => {
    if (modalHook.isOpen) {
      setAnimationClass(styles['modal--visible']);
    } else {
      setAnimationClass(styles['modal--hidden']);
    }
  }, [modalHook.isOpen]);

  return ReactDOM.createPortal(
    <>
      <div className={`${styles.modal} ${animationClass}`}>
        <div className={styles['modal__content']}>{children}</div>
      </div>
      <ModalOverlay isOpen={modalHook.isOpen} onClick={modalHook.closeModal} />
    </>,
    modalRoot as HTMLDivElement,
  );
};
