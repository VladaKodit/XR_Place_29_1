import { useState, useRef, useEffect } from 'react';
import { type TСooperationCardProps } from './type';
import styles from './CooperationCard.module.scss';
import { cooperationCardAnimation } from './cooperationCardAnimation';

export const CooperationCard = ({
  title,
  icon: IconComponent,
  value,
  description,
  classCard,
  delay,
}: TСooperationCardProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cooperationCardAnimation(cardRef, delay);
  }, [delay]);

  // Переключатель состояния, чтобы при клике содержимое карточки можно было менять
  const handleClick = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`${styles.card} ${classCard}`}
        onClick={handleClick}
        ref={cardRef}
      >
        {!showInfo ? (
          <>
            <h3 className={styles.card__title}>{title}</h3>
            <div className={styles.card__img}>
              {IconComponent && <IconComponent />}
            </div>
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
