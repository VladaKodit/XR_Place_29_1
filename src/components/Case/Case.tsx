import React from 'react';
import type { CaseProps } from './type';
import styles from './Case.module.scss';

export const Case: React.FC<CaseProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className={styles.case}>
      <img
        loading="lazy"
        src={imageUrl}
        alt={imageAlt || title}
        className={styles['case-image']}
      />
      <h3 className={styles['case-title']}>{title}</h3>
      <div className={styles['case-description']}>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
