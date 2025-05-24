import { AccordionItem } from './AccordionItem';
import type { AccordionProps } from './type';
import styles from './Accordion.module.scss';

interface AccordionListProps {
  data: AccordionProps[];
}

export const AccordionList = ({ data }: AccordionListProps) => {
  return (
    <ul className={styles['accordion']}>
      {data.map((item) => (
        <AccordionItem title={item.title} content={item.content} />
      ))}
    </ul>
  );
};
