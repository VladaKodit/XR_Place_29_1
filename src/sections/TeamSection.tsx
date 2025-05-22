import * as React from 'react';
import { SectionBase } from '../components/SectionBase/SectionBase';
import TeamCard from '../components/TeamCard/TeamCard';
import styles from './TeamSection.module.scss';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Артём Тарханов',
      position: 'Co-founder & CEO',
      imageUrl: 'src/assets/Artem_Tarhanov.png',
    },
    {
      name: 'Виктор Корнеев',
      position: 'Co-founder & Production Director',
      imageUrl: 'src/assets/Viktor_Korneev.png',
    },
  ];

  const texts = [
    'Мы понимаем, что каждая компания\nуникальна, поэтому мы работаем\nв тесном сотрудничестве с нашими \nклиентами, чтобы создавать индивидуальные решения, которые\nотвечают их потребностям',
    'Наша команда не только разрабатывает технологии, но и обеспечивает поддержку на каждом этапе сотрудничества',
    'С нами вы получите не только продукт, но и партнерство, основанное на доверии\nи взаимопонимании',
  ];

  return (
    <SectionBase containerClassName={styles.teamSection}>
      <div className={styles.label_name}>
        <h4 className={styles.label}>КТО МЫ</h4>
        <h2 className={styles.title}>
          <span className={styles.accent}>Бизнес</span> команда
        </h2>
      </div>
      <div className={styles.grid}>
        <p className={`${styles.text} ${styles.intro}`}>{texts[0]}</p>
        {teamMembers.map((member, index) => (
          <React.Fragment key={index}>
            <div className={styles.cardWrapper} data-index={index}>
              <TeamCard
                {...member}
                waveType={(index + 1) % 2 === 0 ? 'even' : 'odd'}
              />
            </div>
            {index < teamMembers.length - 1 && (
              <p className={`${styles.text} ${styles.isRowText}`}>{texts[1]}</p>
            )}
            {index === teamMembers.length - 1 && (
              <p className={`${styles.text} ${styles.finalText}`}>{texts[2]}</p>
            )}
          </React.Fragment>
        ))}
      </div>
    </SectionBase>
  );
};

export default TeamSection;
