import { type FC } from 'react';

import { useMouseCustom } from '@hooks';
import styles from './CustomMouse.module.scss';

export const CustomMouse: FC = () => {
  const { mouseWrapperRef, mouseCustopRef } = useMouseCustom();

  return (
    <>
      <div
        ref={mouseCustopRef}
        className={`${styles['custom-mouse']} ${styles['custom-mouse__cursor']}`}
        role="presentation"
      />
      <div
        ref={mouseWrapperRef}
        className={`${styles['custom-mouse__wrapper']} ${styles['custom-mouse']}`}
        role="presentation"
      />
    </>
  );
};
