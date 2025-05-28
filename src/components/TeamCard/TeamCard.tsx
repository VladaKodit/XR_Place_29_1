import * as React from 'react';
import styles from './TeamCard.module.scss';
import type { TeamCardProps } from './type';

const TeamCard: React.FC<TeamCardProps> = ({ name, position, imageUrl }) => {
  return (
    <div className={styles.teamCard}>
      <div className={styles.teamCardContent}>
        <img
          src={imageUrl}
          alt={`${name}'s photo`}
          className={styles.teamCardImage}
        />
        <div className={styles.teamCardText}>
          <h3 className={styles.teamCardName}>{name}</h3>
          <p className={styles.teamCardPosition}>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
