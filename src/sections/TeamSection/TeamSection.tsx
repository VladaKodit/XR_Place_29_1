import * as React from 'react';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import TeamCard from '../../components/TeamCard/TeamCard';
import { LabeledTitle } from '../../components/LabeledTitle/LabeledTitle';
import styles from './TeamSection.module.scss';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from './type';

import artemImage from '../../assets/Artem_Tarhanov.png';
import viktorImage from '../../assets/Viktor_Korneev.png';

export const TeamSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const teamMembers = (
    t('teamSection.members', { returnObjects: true }) as TeamMember[]
  ).map((member: TeamMember, index: number) => ({
    ...member,
    imageUrl: index === 0 ? artemImage : viktorImage,
  }));

  // Делим description на части в зависимости от языка
  const sentences = t('teamSection.description')
    .split('.')
    .map((text) => text.trim())
    .filter((text) => text);

  let introText: string, rowText: string;
  if (i18n.language === 'en') {
    // Английский: первые два предложения в introText, третье в rowText
    introText = sentences.slice(0, 2).join('. ');
    rowText = sentences[2] || '';
  } else {
    // Русский: первое в introText, второе в rowText
    introText = sentences[0] || '';
    rowText = sentences[1] || '';
  }

  return (
    <SectionBase containerClassName={styles.teamSection}>
      <LabeledTitle
        text={t('teamSection.title')}
        highlights={[t('teamSection.highlights')]}
        tag={t('teamSection.label')}
      />
      <div className={styles.grid_container}>
        <div className={styles.grid}>
          <p className={`${styles.text} ${styles.intro}`}>{introText}.</p>
          {teamMembers.map((member, index) => (
            <React.Fragment key={index}>
              <div className={styles.cardWrapper} data-index={index}>
                <TeamCard {...member} />
              </div>
              {index < teamMembers.length - 1 && (
                <p className={`${styles.text} ${styles.isRowText}`}>
                  {rowText}.
                </p>
              )}
              {index === teamMembers.length - 1 && (
                <p className={`${styles.text} ${styles.finalText}`}>
                  {t('teamSection.footerNote')}
                </p>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionBase>
  );
};

export default TeamSection;
