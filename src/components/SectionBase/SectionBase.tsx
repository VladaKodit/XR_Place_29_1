import { type ReactNode } from 'react';
import styles from './SectionBase.module.scss';

type SectionProps = {
  children: ReactNode;
  containerClassName?: string;
  id?: string | null;
};

export const SectionBase = ({
  children,
  containerClassName = '',
  id,
}: SectionProps) => {
  return (
    <section
      {...(id ? { id } : {})}
      className={`${styles.wrapper} ${containerClassName}`}
    >
      <div className={styles.content}>{children}</div>
    </section>
  );
};
