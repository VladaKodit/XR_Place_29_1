import React, { useState, useRef, useEffect } from 'react';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '../../components/LabeledTitle';
import { Case } from '../../components/Case';
import type { CaseSectionProps } from './type';
import styles from './CasesSection.module.scss';
import { gsap } from 'gsap';

export const CaseSection: React.FC<CaseSectionProps> = ({
  sectionTitle,
  cases,
  onSeeMoreClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); //currentIndex — индекс текущей активной карточки в карусели.
  const carouselRef = useRef<HTMLDivElement>(null); // реф для получения ссылки на контейнер с каруселью в DOM.
  //логика отображения
  const isCarousel = cases.length > 1 && cases.length <= 4;
  const isGrid = cases.length > 4;

  // Карусель — анимация с GSAP
  useEffect(() => {
    if (!isCarousel || !carouselRef.current) return;

    gsap.to(carouselRef.current, {
      x: `-${currentIndex * 100}%`,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [currentIndex, isCarousel]);

  //Функция переключения на предыдущий слайд
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };
  //Функция переключения на следующий слайд
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionBase containerClassName={styles.wrapper}>
      <LabeledTitle {...sectionTitle} />

      {/*если карточек > 1 и < 4 (карусель) */}
      {isCarousel && (
        <div className={styles.carousel}>
          <div className={styles.carouselInner} ref={carouselRef}>
            {cases.map((caseItem, i) => (
              <div key={i} className={styles.carouselItem}>
                <Case {...caseItem} />
              </div>
            ))}
          </div>

          {/* Стрелки SVG */}

          {/* Левая стрелка */}
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prevSlide}
            aria-label="Предыдущий слайд"
          >
            <svg
              width="47"
              height="8"
              viewBox="0 0 47 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M47 4H1M1 4L5 1M1 4L5 7" stroke="#4D4D4D" />
            </svg>
          </button>

          {/* Правая стрелка */}
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={nextSlide}
            aria-label="Следующий слайд"
          >
            <svg
              width="47"
              height="8"
              viewBox="0 0 47 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 4H46M46 4L42 1M46 4L42 7" stroke="#4D4D4D" />
            </svg>
          </button>
        </div>
      )}
      {/* Если карточек > 4 — рендерим сетку */}
      {isGrid && (
        <>
          <div className={styles.grid}>
            {cases.slice(0, 4).map((caseItem, i) => (
              <Case key={i} {...caseItem} />
            ))}
          </div>
          {onSeeMoreClick && (
            <div className={styles.seeMore} onClick={onSeeMoreClick}>
              Смотреть все проекты
            </div>
          )}
        </>
      )}

      {/* Если одна карточка */}
      {!isCarousel && !isGrid && cases.length === 1 && <Case {...cases[0]} />}
    </SectionBase>
  );
};
