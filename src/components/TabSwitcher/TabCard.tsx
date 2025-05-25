import type { FeatureData } from './types.ts';
import styles from './TabSwitcher.module.scss';

interface TabCardProps {
  cardObj: FeatureData;
}

const renderTabIndex = (index: number) =>
  index !== 0 && `${index.toString().padStart(2, '0')}.`;

const TabCard = ({ cardObj }: TabCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.cardImage}
        src={cardObj.imageUrl}
        alt={cardObj.name}
      />
      <div className={styles.cardContent}>
        <span className={styles.cardIndex}>
          {renderTabIndex(cardObj.index)}
        </span>
        <p className={styles.cardDescription}>{cardObj.description}</p>
      </div>
    </div>
  );
};

export default TabCard;
