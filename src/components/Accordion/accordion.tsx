import { useState } from 'react';
import type { AccordionProps } from './type';
import './accordion.scss';

export const AccordionItem = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion__item">
      <button className="accordion__button" onClick={() => setIsOpen(!isOpen)}>
        <span className={`accordion__title ${isOpen ? 'accordion__title--up' : ''}`}>
  {title}
</span>
        <div
          className={`accordion__icon ${isOpen ? 'accordion__icon--open' : ''}`}
        ></div>
      </button>
      <div
        className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}
      >
        {content}
      </div>
    </div>
  );
};
