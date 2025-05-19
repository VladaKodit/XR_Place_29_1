import { useEffect, useState } from 'react';
import styles from './ModalOverlay.module.scss';

/**
 * Компонент оверлея модального окна
 * @param {Object} props - Пропсы компонента
 * @param {Function} props.onClick - Функция-обработчик клика по оверлею
 * @param {boolean} props.isOpen - Флаг, указывающий открыто ли модальное окно
 * @returns {JSX.Element} - React элемент оверлея
 */
export const ModalOverlay = ({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) => {
  // Состояние для управления классом анимации
  const [animationClass, setAnimationClass] = useState('');

  // Эффект для изменения класса анимации при изменении состояния isOpen
  useEffect(() => {
    if (isOpen) {
      setAnimationClass(styles['overlay--visible']);
    } else {
      setAnimationClass(styles['overlay--hidden']);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.overlay} ${animationClass}`} onClick={onClick} />
  );
};
