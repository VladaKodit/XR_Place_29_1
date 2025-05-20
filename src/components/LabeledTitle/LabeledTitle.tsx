import React from 'react';
import type { LabeledTitleProps } from './type';
import styles from './LabeledTitle.module.scss';

const escapeRegExp = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const LabeledTitle: React.FC<LabeledTitleProps> = ({
  text,
  highlights = [],
  tag,
}) => {
  const escapedHighlights = highlights.map(escapeRegExp);
  const regex =
    escapedHighlights.length > 0
      ? new RegExp(`(${escapedHighlights.join('|')})`, 'gi')
      : null;

  const parts = regex ? text.split(regex) : [text];

  const isEmptyTag = !tag;

  return (
    <div className={styles.container}>
      <span className={`${styles.tag} ${isEmptyTag ? styles.tagEmpty : ''}`}>
        {tag || '\u00A0'}
      </span>
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
