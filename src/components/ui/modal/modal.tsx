import { useEffect, useState, type FC } from 'react';
import styles from './modal.module.css';
import type { TModalUIProps } from './type';
import { ModalOverlayUI } from '../modal-overlay';

/**
 * Компонент модального окна
 * @param {TModalUIProps} props - Пропсы компонента модального окна
 * @param {Function} props.onClose - Функция закрытия модального окна
 * @param {ReactNode} props.children - Содержимое модального окна
 * @param {boolean} props.isOpen - Флаг состояния модального окна (открыто/закрыто)
 * @returns {JSX.Element} - React элемент модального окна
 */
export const ModalUI: FC<TModalUIProps> = ({ onClose, children, isOpen }) => {
  // Состояние для управления классом анимации
  const [animationClass, setAnimationClass] = useState('');

  // Эффект для изменения класса анимации при изменении состояния isOpen
  useEffect(() => {
    if (isOpen) {
      setAnimationClass(styles.visible);
    } else {
      setAnimationClass(styles.hidden);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`${styles.modal} ${animationClass}`}>
        <div className={styles.content}>{children}</div>
      </div>
      <ModalOverlayUI isOpen={isOpen} onClick={onClose} />
    </>
  );
};
