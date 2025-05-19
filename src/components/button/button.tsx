import { type FC } from 'react';
import Arrow from '../../assets/arrow.svg?react';
import styles from './Button.module.scss';
import React from 'react';
interface ButtonProps
  extends React.PropsWithChildren<
    Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>
  > {
  htmlType: 'button' | 'submit' | 'reset';
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  extraClass?: string;
}
/**
 * @htmlType 'button' | 'submit' | 'reset' - назначит тип кнопки
 * @type 'primary' | 'secondary' - выбрать вид кнопки
 * @size 'small' | 'medium' | 'large' - выбрать размер кнопки
 * @onClick onClick - назначить функцию на кнопку
 * @extraClass extraClass - добавить дополнительный класс
 */

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[`size-${props.size}`],
    styles[`type-${props.type}`],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <button className={buttonClasses}>
        {props.children} <Arrow className={styles[`${props.type}`]} />
      </button>
    </>
  );
};
