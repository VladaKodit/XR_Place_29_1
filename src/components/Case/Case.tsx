import React from 'react';
import { useTranslation } from 'react-i18next';
import type { CaseProps } from './types';
import styles from './Case.module.scss';

/**
 * Компонент карточки кейса.
 *
 * @component
 * @param {string} image - Путь к изображению .
 * @param {string} [imageAlt] - Альтернативный текст изображения.
 * @param {string} title - Заголовок кейса.
 * @param {string[]} description - Описание кейса.
 * @param {React.CSSProperties} [style] - Дополнительные стили.
 * @returns {JSX.Element} возвращает карточку кейса.
 */

const Case: React.FC<CaseProps> = ({
  title,
  description,
  image,
  imageAlt,
  style,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.case}>
      <img
        loading="lazy"
        src={image}
        alt={imageAlt || title}
        className={styles['case-image']}
        style={style}
      />
      <h3 className={styles['case-title']}>{t(title)}</h3>
      <div className={styles['case-description']}>
        {description.map((paragraph, index) => (
          <p key={index}>{t(paragraph)}</p>
        ))}
      </div>
    </div>
  );
};

export default Case;
