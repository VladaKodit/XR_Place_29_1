import * as React from 'react';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import TeamCard from '../../components/TeamCard/TeamCard';
import styles from './TeamSection.module.scss';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from './type';

import artemImage from '../../assets/Artem_Tarhanov.png';
import viktorImage from '../../assets/Viktor_Korneev.png';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = (
    t('teamSection.members', { returnObjects: true }) as TeamMember[]
  ).map((member: TeamMember, index: number) => ({
    ...member,
    imageUrl: index === 0 ? artemImage : viktorImage,
  }));

  // Разделил description на два абзаца
  const [introText, rowText] = t('teamSection.description')
    .split('.')
    .map((text) => text.trim());

  // Выделил "Бизнес" для акцента
  const accentText = t('teamSection.title').startsWith('Бизнес')
    ? 'Бизнес'
    : 'Business';
  const titleRest = t('teamSection.title').replace(accentText, '').trim();

  return (
    <SectionBase containerClassName={styles.teamSection}>
      <div className={styles.label_name}>
        <h4 className={styles.label}>{t('teamSection.label')}</h4>
        <h2 className={styles.title}>
          <span className={styles.accent}>{accentText}</span> {titleRest}
        </h2>
      </div>
      <div className={styles.grid}>
        <p className={`${styles.text} ${styles.intro}`}>{introText}.</p>
        {teamMembers.map((member, index) => (
          <React.Fragment key={index}>
            <div className={styles.cardWrapper} data-index={index}>
              <TeamCard {...member} />
            </div>
            {index < teamMembers.length - 1 && (
              <p className={`${styles.text} ${styles.isRowText}`}>{rowText}.</p>
            )}
            {index === teamMembers.length - 1 && (
              <p className={`${styles.text} ${styles.finalText}`}>
                {t('teamSection.footerNote')}
              </p>
            )}
          </React.Fragment>
        ))}
      </div>
    </SectionBase>
  );
};

export default TeamSection;
