import styles from './WidgetDetails.module.scss';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '@components';
import { useTranslation } from 'react-i18next';
import { buildFeaturesTabData } from './helpers';
import { TabSwitcher } from '@components';
import { useCallback, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { AnimationParams } from '@types';

const animationParams: AnimationParams = {
  opacityFrom: 0,
  opacityTo: 1,
  yPositionFrom: 50,
  yPositionTo: 0,
  duration: 0.4,
};

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

  const titleRef = useRef(null);
  const descRefs = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    console.log(descRefs);
    const timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: titleRef.current!,
          start: 'top 60%',
          end: 'top 60%',
          scrub: false,
          once: true,
        },
      })
      .fromTo(
        titleRef.current!,
        {
          opacity: animationParams.opacityFrom,
          y: animationParams.yPositionFrom,
        },
        {
          opacity: animationParams.opacityTo,
          y: animationParams.yPositionTo,
          duration: animationParams.duration,
        },
      );
    descRefs.current.forEach((descRef) => {
      timeline.fromTo(
        descRef,
        {
          opacity: animationParams.opacityFrom,
          y: animationParams.yPositionFrom,
        },
        {
          opacity: animationParams.opacityTo,
          y: animationParams.yPositionTo,
          duration: animationParams.duration,
        },
      );
    });
  });

  const setRef = useCallback((el: HTMLElement | null) => {
    if (el && !descRefs.current.includes(el)) {
      descRefs.current.push(el);
    }
  }, []);

  return (
    <div className={styles.sectionWithLines}>
      <DecorativeLines />
      <SectionBase containerClassName={styles.container}>
        <div className={styles.myGridWrapper}>
          <div className={styles.containerHeaderBlock} ref={titleRef}>
            <LabeledTitle
              text={t('widgetSection.title')}
              tag={t('widgetSection.label')}
              highlights={[t('widgetSection.highlight')]}
            />
          </div>
          <div className={styles.containerTextBlock}>
            <p className={styles.textBlockRightSide} ref={setRef}>
              {t('widgetSection.description.0')}
            </p>
            <p className={styles.textBlock} ref={setRef}>
              {t('widgetSection.description.1')}
            </p>
          </div>
          <TabSwitcher tabsData={tabsData} />
        </div>
      </SectionBase>
    </div>
  );
};

export default WidgetDetails;
