import type { FC } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalUI } from '../ui/modal';
import type { TModalUIProps } from '../ui/modal/type';

/**
 * Корневой DOM-элемент для порталов модальных окон
 * Должен быть определен в HTML-структуре страницы с id="modals"
 */
const modalRoot = document.getElementById('modals');

/**
 * Компонент Modal - обертка для создания модального окна через портал React
 * @param {TModalUIProps} props - Пропсы компонента модального окна
 * @param {Function} props.onClose - Функция закрытия модального окна
 * @param {ReactNode} props.children - Содержимое модального окна
 * @param {boolean} props.isOpen - Флаг состояния модального окна (открыто/закрыто)
 * @returns {ReactPortal} - React портал с модальным окном
 */
export const Modal: FC<TModalUIProps> = ({ onClose, children, isOpen }) => {
  // Эффект для обработки нажатия клавиши ESC для закрытия модального окна
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Добавляем обработчик события нажатия клавиши
    document.addEventListener('keydown', handleEsc);

    // Функция очистки, удаляющая обработчик при отсоединении компонента
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose} isOpen={isOpen}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement,
  );
};
