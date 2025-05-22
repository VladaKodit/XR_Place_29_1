import { useState } from 'react';
import { type TСooperationCardProps } from './type';
import styles from './CooperationCard.module.scss';

export const CooperationCard = ({
  title,
  Icon,
  value,
  description,
  classCard,
}: TСooperationCardProps) => {
  const [showInfo, setShowInfo] = useState(false);

  // Переключатель состояния, чтобы при клике содержимое карточки можно было менять
  const handleClick = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <>
      <div className={`${styles.card} ${classCard}`} onClick={handleClick}>
        {!showInfo ? (
          <>
            <h3 className={styles.card__title}>{title}</h3>
            <div className={styles.card__img}>{Icon && <Icon />}</div>
          </>
        ) : (
          <>
            <h4 className={styles.card__number}>{value}</h4>
            <p className={`${styles.card__title} ${styles.card__content}`}>
              {description}
            </p>
          </>
        )}
      </div>
    </>
  );
};
