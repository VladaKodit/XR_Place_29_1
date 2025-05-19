import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.scss';

/**
 * Корневой DOM-элемент для порталов модальных окон
 * Должен быть определен в HTML-структуре страницы с id="modals"
 */
const modalRoot = document.getElementById('modals');

// Типы пропсов для компонента модального окна
type TModalProps = {
  onClose: () => void;
  children: ReactNode;
  isOpen: boolean;
};

/**
 * Компонент Modal - обертка для создания модального окна через портал React
 * @param {TModalProps} props - Пропсы компонента модального окна
 * @param {Function} props.onClose - Функция закрытия модального окна
 * @param {ReactNode} props.children - Содержимое модального окна
 * @param {boolean} props.isOpen - Флаг состояния модального окна (открыто/закрыто)
 * @returns {ReactPortal} - React портал с модальным окном и оверлеем
 */
export const Modal: FC<TModalProps> = ({ onClose, children, isOpen }) => {
  // Эффект для обработки нажатия клавиши ESC для закрытия модального окна
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Добавляем обработчик события нажатия клавиши
    document.addEventListener('keydown', handleEsc);

    // Функция очистки, удаляющая обработчик при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Состояние для управления классом анимации модального окна
  const [animationClass, setAnimationClass] = useState('');

  // Эффект для изменения класса анимации при изменении состояния isOpen
  useEffect(() => {
    if (isOpen) {
      setAnimationClass(styles['modal--visible']);
    } else {
      setAnimationClass(styles['modal--hidden']);
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <>
      <div className={`${styles.modal} ${animationClass}`}>
        <div className={styles['modal__content']}>{children}</div>
      </div>
      <ModalOverlay isOpen={isOpen} onClick={onClose} />
    </>,
    modalRoot as HTMLDivElement,
  );
};
