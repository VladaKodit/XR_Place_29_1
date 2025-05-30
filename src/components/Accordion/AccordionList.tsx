import { AccordionItem } from './AccordionItem';
import type { AccordionProps } from './type';
import styles from './Accordion.module.scss';
import { useState } from 'react';

interface AccordionListProps {
  data: AccordionProps[];
}

export const AccordionList = ({ data }: AccordionListProps) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index)); // если текущее состояние isOpen(prevIndex) уже открыто то возвращает null чтобы его закрыть, если не текущий индекс (prevIndex !== index) который сейчас не открыт то возвращием его index, чтобы открыть его и закрыть предыдущий
  };
  return (
    <ul className={styles['accordion']}>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={isOpen === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </ul>
  );
};
