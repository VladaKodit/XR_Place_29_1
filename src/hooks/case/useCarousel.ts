/**
 * Кастомный React-хук для управления горизонтальной каруселью слайдов.
 *
 * Логика прокрутки реализована через нативные методы и свойства DOM-элемента:
 * - Прокрутка осуществляется с помощью `scrollBy`, который плавно сдвигает контейнер по горизонтали на ширину одного слайда с учётом отступа.
 * - Текущее положение отслеживается через событие `scroll`, используя свойство `scrollLeft` для определения смещения прокрутки.
 * - Индекс активного слайда вычисляется, округляя текущее смещение к ближайшему шагу (ширина слайда + отступ).
 *
 * Это позволяет синхронизировать состояние с визуальным положением карусели, а также реализовать управление с помощью кнопок "вперед" и "назад".
 *
 * @param {number} length - Количество слайдов в карусели.
 * @returns {{
 *   carouselRef: React.RefObject<HTMLDivElement>, // Ссылка на контейнер карусели для манипуляций скроллом
 *   currentIndex: number,                         // Текущий индекс активного слайда
 *   scrollNext: () => void,                       // Функция прокрутки к следующему слайду
 *   scrollPrev: () => void,                       // Функция прокрутки к предыдущему слайду
 *   isAtStart: boolean,                           // Флаг — находится ли карусель на первом слайде
 *   isAtEnd: boolean                              // Флаг — находится ли карусель на последнем слайде
 * }}
 */

import { useRef, useState, useEffect, useCallback } from 'react';

const SLIDE_WIDTH = 930;
const GAP = 30;
const STEP = SLIDE_WIDTH + GAP;

export function useCarousel(length: number) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Скролл к следующему слайду
  const scrollNext = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: STEP, behavior: 'smooth' });
  };

  // Скролл к предыдущему слайду
  const scrollPrev = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -STEP, behavior: 'smooth' });
  };

  // Обработка scroll-события для отслеживания текущего слайда
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;

    // Получает количество пикселей, на которое контейнер прокручен
    const scrollLeft = carouselRef.current.scrollLeft;

    // Определяем индекс слайда по текущему скроллу
    const index = Math.round(scrollLeft / STEP);
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const ref = carouselRef.current;
    if (!ref) return;

    ref.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ref.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === length - 1;

  return {
    carouselRef,
    currentIndex,
    scrollNext,
    scrollPrev,
    isAtStart,
    isAtEnd,
  };
}
