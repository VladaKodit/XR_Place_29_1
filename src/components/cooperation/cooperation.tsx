import { useState } from 'react';
import { type TСooperationCardProps } from './type';
import styles from './Cooperation.module.scss';

export const CooperationCard = ({
  title,
  iconDefault,
  iconHover,
  alt,
  number,
  content,
}: TСooperationCardProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Переключатель состояния, чтобы при клике содержимое карточки можно было менять
  const handleClick = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={styles.card}
        onClick={handleClick}
        // При наведении мыши меняется состояние isHovered для изменения картинки
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!showInfo ? (
          <>
            <h3 className={styles.card__title}>{title}</h3>
            <div className={styles.card__img}>
              <img
                className={styles['card__img-icon']}
                src={isHovered ? iconHover : iconDefault}
                alt={alt}
              />
            </div>
          </>
        ) : (
          <>
            <h4 className={styles.card__number}>{number}%</h4>
            <p className={`${styles.card__title} ${styles.card__content}`}>
              {content}
            </p>
          </>
        )}
      </div>
    </>
  );
};
