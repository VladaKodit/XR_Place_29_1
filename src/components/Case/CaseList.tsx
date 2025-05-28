import React from 'react';
import { Case } from '../Case';
import styles from './Case.module.scss';
import { useCarousel } from '@hooks';

import type { CaseListProps } from './types';

import ArrowIcon from '../../assets/svg/arrow-icon.svg?react';
import LeftArrow from '../../assets/svg/arrow-left.svg?react';
import RightArrow from '../../assets/svg/arrow-right.svg?react';

/**
 * Компонент с кейсами, отображающий их в виде карусели или сетки в зависимости от количества.
 *
 * @component
 * @param {CaseProps[]} cases - Массив кейсов.
 * @param {() => void} [onSeeMoreClick] - Обработчик клика по ссылке "Смотреть все проекты".
 * @returns {JSX.Element} Элемент секцию с кейсами.
 */

const CaseList: React.FC<CaseListProps> = ({ cases, onSeeMoreClick }) => {
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
    <>
      {/* Если карточек > 1 и <= 4 (карусель) */}
      {isCarousel && (
        <div className={styles['case-list__carousel']}>
          {/* Кнопки переключения */}
          <div className={styles['case-list__carousel-buttons']}>
            <button
              type="button"
              className={`
                  ${styles['case-list__button']} 
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
                  ${styles['case-list__button']} 
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
            className={styles['case-list__carousel-inner']}
            ref={carouselRef}
          >
            {cases.map((caseItem, i) => (
              <div
                key={i}
                className={`${styles['case-list__carousel-item']} ${
                  i === currentIndex
                    ? styles['case-list__carousel-item_active']
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
        <div className={styles['case-list__grid-wrapper']}>
          {onSeeMoreClick && (
            <a
              href="/"
              className={styles['case-list__link']}
              onClick={onSeeMoreClick}
            >
              <span>Смотреть все проекты</span>
              <ArrowIcon className={styles['case-list__link-icon']} />
            </a>
          )}

          <div className={styles['case-list__grid']}>
            {cases.slice(0, 4).map((caseItem, i) => (
              <div key={i} className={styles['case-list__grid-item']}>
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
        <div className={styles['case-list__single']}>
          <Case {...cases[0]} />
        </div>
      )}
    </>
  );
};

export default CaseList;
