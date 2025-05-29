import { type FC, Fragment } from 'react';
import { escapeRegExp } from './helpers';
import type { LabeledTitleProps } from './type';
import styles from './LabeledTitle.module.scss';

export const LabeledTitle: FC<LabeledTitleProps> = ({
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
            <Fragment key={index}>{part}</Fragment>
          ),
        )}
      </h2>
    </div>
  );
};
