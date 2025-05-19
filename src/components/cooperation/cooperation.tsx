import styles from './cooperation.module.scss';
import { useState } from 'react';

type TСooperationProps = {
  title: string;
  icon: {
    iconDefault: string;
    iconHover: string;
  };
  alt: string;
  number: number;
  content: string;
};

export const CooperationCard = ({
  title,
  icon,
  alt,
  number,
  content,
}: TСooperationProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Переключатель состояния, чтобы при клике содержимое карточки можно было менять
  const handleClick = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <>
      {!showInfo ? (
        <div
          className={styles.card}
          onClick={handleClick}
          // При наведении мыши меняется состояние isHovered для изменения картинки
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className={styles.card_title}>{title}</h3>
          <div className={styles.card_img}>
            <img
              className={styles.img}
              src={isHovered ? icon.iconHover : icon.iconDefault}
              alt={alt}
            />
          </div>
        </div>
      ) : (
        <div className={styles.card} onClick={handleClick}>
          <h4 className={styles.card_number}>{number}%</h4>
          <p className={`${styles.card_title} ${styles.card_content}`}>
            {content}
          </p>
        </div>
      )}
    </>
  );
};
