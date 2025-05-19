import styles from './clients-trust-us.module.scss';
import { useState } from 'react';
// import {ReactComponent as ClientsTrustIcon1} from '../../assets/images/clientsTrustIcon1.svg';
// import ReactComponent from "*.svg"

type TClientsTrustUsProps = {
  title: string;
  icon: React.ReactNode;
  alt: string;
  number: number;
  content: string;
};

export const ClientsTrustUsCard = ({
  title,
  icon,
  number,
  content,
}: TClientsTrustUsProps) => {
  const [showInfo, setShowInfo] = useState(false);

  // Переключатель состояния, чтобы при клике содержимое карточки можно было менять
  const handleClick = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <>
      {!showInfo ? (
        <div className={styles.card} onClick={handleClick}>
          <h3 className={styles.card_title}>{title}</h3>
          <div className={styles.card_img}>
            {icon}

            {/* <ClientsTrustIcon1 /> */}
            {/* <img className={styles.img} src={image} alt={alt} /> */}
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
