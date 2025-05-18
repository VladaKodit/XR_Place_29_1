import React from 'react';
import type { LabeledTitleProps } from './type';
import styles from './LabeledTitle.module.css';

export const LabeledTitle: React.FC<LabeledTitleProps> = ({
  text,
  highlights,
  tag,
}) => {
  const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <div className={styles.container}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h2 className={styles.title}>
        {parts.map((part, index) =>
          highlights.some(
            (word) => word.toLowerCase() === part.toLowerCase(),
          ) ? (
            <span key={index} className={styles.highlight}>
              {part}
            </span>
          ) : (
            <React.Fragment key={index}>{part}</React.Fragment>
          ),
        )}
      </h2>
    </div>
  );
};
