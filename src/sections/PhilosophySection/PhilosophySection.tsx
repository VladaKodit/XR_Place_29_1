import { useTranslation } from 'react-i18next';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '@components';
import styles from './PhilosophySection.module.scss';
import philosophyImage from '../../assets/images/philosophy/philosophyImage.png';

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

  const upperSlogan = sloganLines.slice(0, 2);
  const lowerSlogan = sloganLines.slice(2);

  return (
    <SectionBase>
      <div className={styles['philosophy-section']}>
        <div className={styles['philosophy-section-wrapper']}>
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
                alt={t('philosophySection.imageAlt')}
                loading="lazy"
              />
              <p className={styles['philosophy-section__description']}>
                {description}
              </p>
            </div>
            <div className={styles['philosophy-section__slogan-upper']}>
              {upperSlogan.map((line, idx) => (
                <span
                  key={`slogan__line-${idx}`}
                  className={styles[`philosophy-section__slogan-span-${idx}`]}
                >
                  {line}
                </span>
              ))}
            </div>
            <div className={styles['philosophy-section__slogan-lower']}>
              {lowerSlogan.map((line, idx) => (
                <span
                  key={idx}
                  className={
                    styles[`philosophy-section__slogan-lower-span-${idx}`]
                  }
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionBase>
  );
};
