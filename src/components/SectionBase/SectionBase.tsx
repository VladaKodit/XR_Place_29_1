import { type ReactNode } from 'react';
import styles from './SectionBase.module.scss';

type SectionProps = {
  children: ReactNode;
  containerClassName?: string;
};

export const SectionBase = ({
  children,
  containerClassName = '',
}: SectionProps) => {
  return (
    <div className={`${styles.wrapper} ${containerClassName}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
