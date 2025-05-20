import { type FC, type FunctionComponent, type SVGProps } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  extraClass?: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  IconClassName?: string;
}

/**
 * Универсальный компонент кнопки с поддержкой иконок
 * 
 * @param variant - Стиль кнопки: 'primary' | 'secondary' (по умолчанию 'primary')
 * @param extraClass - Дополнительные CSS-классы
 * @param Icon - Компонент SVG-иконки
 * @param IconClassName - Дополнительные CSS-классы для svg-иконки
 * @param children - Содержимое кнопки
 */
export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  extraClass = '',
  Icon,
  children,
  className,
  IconClassName = '',
  ...rest
}) => {
  const buttonClasses = [
    styles.button,
    styles[`variant-${variant}`],
    extraClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} {...rest}>
      {children}
      {Icon && <Icon className={IconClassName}/>}
    </button>
  );
};