import React from 'react';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { LabeledTitle } from '../../components/LabeledTitle';
import { Case } from '../../components/Case';
import type { CaseSectionProps } from './type';
import styles from './CaseSection.module.scss';
import { useCarousel } from '@hooks';

import LeftArrow from '../../assets/svg/arrow-left.svg?react';
import RightArrow from '../../assets/svg/arrow-right.svg?react';
import ArrowIcon from '../../assets/svg/arrow-icon.svg?react';

/**
 * Секция с кейсами, отображающая их в виде карусели или сетки в зависимости от количества.
 *
 * @component
 * @param {LabeledTitleProps} sectionTitle - Заголовок секции.
 * @param {CaseProps[]} cases - Массив кейсов.
 * @param {() => void} [onSeeMoreClick] - Обработчик клика по ссылке "Смотреть все проекты".
 * @returns {JSX.Element} Элемент секцию с кейсами.
 */
export const CaseSection: React.FC<CaseSectionProps> = ({
  sectionTitle,
  cases,
  onSeeMoreClick,
}) => {
  //логика отображения
  const isCarousel = cases.length > 1 && cases.length < 4;
  const isGrid = cases.length >= 4;

  const {
    currentIndex,
    carouselRef,
    prevSlide,
    nextSlide,
    isAtStart,
    isAtEnd,
  } = useCarousel(cases.length);

  return (
    <SectionBase containerClassName={styles['case-section']}>
      <LabeledTitle {...sectionTitle} />

      {/* Если карточек > 1 и <= 4 (карусель) */}
      {isCarousel && (
        <div className={styles['case-section__carousel']}>
          {/* Кнопки переключения */}
          <div className={styles['case-section__carousel-buttons']}>
            <button
              type="button"
              className={`
                ${styles['case-section__button']} 
                ${isAtStart ? styles.disabled : ''}
              `}
              onClick={prevSlide}
              aria-label="Предыдущий слайд"
              disabled={isAtStart}
            >
              <LeftArrow />
            </button>

            <button
              type="button"
              className={`
                ${styles['case-section__button']} 
                ${isAtEnd ? styles.disabled : ''}
              `}
              onClick={nextSlide}
              aria-label="Следующий слайд"
              disabled={isAtEnd}
            >
              <RightArrow />
            </button>
          </div>

          {/* Карусель */}
          <div
            className={styles['case-section__carousel-inner']}
            ref={carouselRef}
          >
            {cases.map((caseItem, i) => (
              <div
                key={i}
                className={`${styles['case-section__carousel-item']} ${
                  i === currentIndex
                    ? styles['case-section__carousel-item_active']
                    : ''
                }`}
              >
                <Case {...caseItem} />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Если карточек >= 4 — рендерим сетку */}
      {isGrid && (
        <div className={styles['case-section__grid-wrapper']}>
          {onSeeMoreClick && (
            <a
              href="/"
              className={styles['case-section__link']}
              onClick={onSeeMoreClick}
            >
              <span>Смотреть все проекты</span>
              <ArrowIcon className={styles['case-section__link-icon']} />
            </a>
          )}

          <div className={styles['case-section__grid']}>
            {cases.slice(0, 4).map((caseItem, i) => (
              <div key={i} className={styles['case-section__grid-item']}>
                <Case
                  {...caseItem}
                  style={{
                    width: '612px',
                    height: '370px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Если одна карточка */}
      {!isCarousel && !isGrid && cases.length === 1 && (
        <Case {...cases[0]} style={{ marginTop: '60px' }} />
      )}
    </SectionBase>
  );
};
