import { useTranslation } from 'react-i18next';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '../../components';
import styles from './PhilosophySection.module.scss';
import philosophyImage from '../../assets/images/philosophy/philosophyImage.png';
import dotsImage from '../../assets/images/philosophy/dots.png';

export const PhilosophySection = () => {
  const { t } = useTranslation();

  const sectionTag = t('philosophySection.label');
  const sectionTitle = t('philosophySection.title');
  const sectionHighlights = t('philosophySection.highlights', {
    returnObjects: true,
  }) as string[];
  const sectionDescriptionArr = t('philosophySection.description', {
    returnObjects: true,
  }) as string[];
  const description = sectionDescriptionArr[0];
  const sloganLines = t('philosophySection.slogan', {
    returnObjects: true,
  }) as string[];

  return (
    <SectionBase>
      <div className={styles['philosophy-section']}>
        <LabeledTitle
          tag={sectionTag}
          text={sectionTitle}
          highlights={sectionHighlights}
        />
        <div className={styles['philosophy-section__content']}>
          <div className={styles['philosophy-section__content-upper']}>
            <img
              className={styles['philosophy-section__image']}
              src={philosophyImage}
            />
            <p className={styles['philosophy-section__description']}>
              {description}
            </p>
          </div>
          <div className={styles['philosophy-section__slogan']}>
            {sloganLines.map((line, idx) => (
              <span
                key={idx}
                className={styles[`philosophy-section__slogan-span-${idx}`]}
              >
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
        <img className={styles['dots-image']} src={dotsImage} />
      </div>
    </SectionBase>
  );
};
