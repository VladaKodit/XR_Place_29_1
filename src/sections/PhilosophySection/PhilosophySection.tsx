import { useTranslation } from 'react-i18next';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '@components';
import styles from './PhilosophySection.module.scss';
import philosophyImage from '../../assets/images/philosophy/philosophyImage.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { AnimationParams } from '@types';
import { useCallback, useRef } from 'react';

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const animationParams: AnimationParams = {
  opacityFrom: 0,
  opacityTo: 1,
  yPositionFrom: 30,
  yPositionTo: 0,
  duration: 1,
};

type PhilosophySectionProps = {
  id?: string;
};

export const PhilosophySection = ({ id }: PhilosophySectionProps) => {
  const { t } = useTranslation();

  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLElement[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const upperSloganRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lowerSloganRefs = useRef<(HTMLSpanElement | null)[]>([]);

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

  useGSAP(() => {
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
    descriptionRef.current.forEach((descriptionRef) => {
      timeline.fromTo(
        descriptionRef,
        {
          opacity: animationParams.opacityFrom,
        },
        {
          opacity: animationParams.opacityTo,
          duration: animationParams.duration,
        },
      );
    });
    timeline.fromTo(
      imageRef.current!,
      {
        y: -animationParams.yPositionFrom!,
        opacity: animationParams.opacityFrom,
      },
      {
        y: animationParams.yPositionTo,
        opacity: animationParams.opacityTo,
        duration: animationParams.duration,
      },
    );

    upperSloganRefs.current.forEach((upperSloganRefs) => {
      if (upperSloganRefs) {
        timeline.fromTo(
          upperSloganRefs,
          {
            y: animationParams.yPositionFrom,
            opacity: animationParams.opacityFrom,
          },
          {
            y: animationParams.yPositionTo,
            opacity: animationParams.opacityTo,
            duration: animationParams.duration,
          },
        );
      }
    });

    lowerSloganRefs.current.forEach((lowerSloganRefs) => {
      if (lowerSloganRefs) {
        timeline.fromTo(
          lowerSloganRefs,
          {
            y: animationParams.yPositionFrom,
            opacity: animationParams.opacityFrom,
          },
          {
            y: animationParams.yPositionTo,
            opacity: animationParams.opacityTo,
            duration: animationParams.duration,
          },
        );
      }
    });
  });

  // Функция для добавления ref'ов в массив
  const addToRefs = useCallback(
    (el: HTMLSpanElement | null, index: number, isUpper: boolean) => {
      if (el) {
        if (isUpper) {
          upperSloganRefs.current[index] = el;
        } else {
          lowerSloganRefs.current[index] = el;
        }
      }
    },
    [],
  );

  const setRef = useCallback((el: HTMLElement | null) => {
    if (el && !descriptionRef.current.includes(el)) {
      descriptionRef.current.push(el);
    }
  }, []);

  return (
    <SectionBase id={id}>
      <div className={styles['philosophy-section']}>
        <div className={styles['philosophy-section-wrapper']}>
          <div ref={titleRef}>
            <LabeledTitle
              tag={sectionTag}
              text={sectionTitle}
              highlights={sectionHighlights}
            />
          </div>
          <div className={styles['philosophy-section__content']}>
            <div className={styles['philosophy-section__content-upper']}>
              <img
                ref={imageRef}
                className={styles['philosophy-section__image']}
                src={philosophyImage}
                alt={t('philosophySection.imageAlt')}
                loading="lazy"
              />
              <p
                className={styles['philosophy-section__description']}
                ref={setRef}
              >
                {description}
              </p>
            </div>
            <div className={styles['philosophy-section__slogan-upper']}>
              {upperSlogan.map((line, idx) => (
                <span
                  key={`slogan__line-${idx}`}
                  ref={(el) => addToRefs(el, idx, true)}
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
                  ref={(el) => addToRefs(el, idx, false)}
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
