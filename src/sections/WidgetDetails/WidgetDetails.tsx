import styles from './WidgetDetails.module.scss';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '@components';
import { useTranslation } from 'react-i18next';
import { buildFeaturesTabData } from './helpers';
import { TabSwitcher } from '@components';
import { useMemo } from 'react';

const DecorativeLines = () => (
  <>
    <div className={styles.leftLine} aria-hidden />
    <div className={styles.topLine} aria-hidden />
    <div className={styles.rightLine} aria-hidden>
      <span className={styles.lineDot} aria-hidden />
    </div>
  </>
);

const WidgetDetails = () => {
  const { t } = useTranslation();
  const tabsData = useMemo(() => buildFeaturesTabData(t), [t]);

  return (
    <div className={styles.sectionWithLines}>
      <DecorativeLines />
      <SectionBase containerClassName={styles.container}>
        <div className={styles.containerHeaderBlock}>
          <LabeledTitle
            text={t('widgetSection.title')}
            tag={t('widgetSection.label')}
            highlights={[t('widgetSection.highlight')]}
          />
        </div>
        <div className={styles.containerTextBlock}>
          <p className={styles.textBlockRightSide}>
            {t('widgetSection.description.0')}
          </p>
          <p className={styles.textBlock}>{t('widgetSection.description.1')}</p>
        </div>
        <TabSwitcher tabsData={tabsData} />
      </SectionBase>
    </div>
  );
};

export default WidgetDetails;
