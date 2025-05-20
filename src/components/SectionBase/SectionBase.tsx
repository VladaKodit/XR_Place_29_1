import { type ReactNode, type ReactElement } from 'react';
import styles from './SectionBase.module.scss';

type SectionProps = {
  children: ReactNode;
  titleComponent?: ReactElement;
  containerClassName?: string;
};

export const SectionBase = ({
  children,
  titleComponent,
  containerClassName = '',
}: SectionProps) => {
  return (
    <div className={`${styles.wrapper} ${containerClassName}`}>
      {titleComponent && (
        <div className={styles.title__wrapper}>{titleComponent}</div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
