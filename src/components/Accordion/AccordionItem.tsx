import { useState } from 'react';
import type { AccordionProps } from './type';
import styles from './Accordion.module.scss';

export const AccordionItem = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles['accordion__item']}>
      <button
        className={styles['accordion__button']}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${styles['accordion__title']} ${
            isOpen ? styles['accordion__title--up'] : ''
          }`}
        >
          {title}
        </span>
        <div
          className={`${styles['accordion__icon']} ${
            isOpen ? styles['accordion__icon--open'] : ''
          }`}
        ></div>
      </button>
      <div
        className={`${styles['accordion__content']} ${
          isOpen ? styles['accordion__content--open'] : ''
        }`}
      >
        {content}
      </div>
    </li>
  );
};
