/**
 * Кастомный React-хук для управления каруселью слайдов
 **/

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const GAP = 30;
const PADDING = 100;

export function useCarousel(length: number) {
  // Текущий индекс активного слайда
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    // Ширина видимой области (родителя карусели)
    const containerWidth = carouselRef.current.parentElement?.offsetWidth || 0;

    // Фикс ширина одного слайда
    const slideWidth = 930;

    // Общая ширина всех слайдов с учетом gap между ними и padding по краям
    const totalSlidesWidth =
      length * slideWidth + (length - 1) * GAP + PADDING * 2;

    // Максимальный сдвиг, чтобы последний слайд не ушел за пределы контейнера
    const maxTranslateX = Math.max(totalSlidesWidth - containerWidth, 0);

    // сдвиг
    const targetX = currentIndex * (slideWidth + GAP);

    // Ограничиваем сдвиг максимальным значением, чтобы не было пустого пространства
    const translateX = Math.min(targetX, maxTranslateX);

    console.log({
      currentIndex,
      slideWidth,
      totalSlidesWidth,
      containerWidth,
      maxTranslateX,
      targetX,
      translateX,
    });

    // Анимация сдвига карусели с помощью GSAP
    gsap.to(carouselRef.current, {
      x: `-${translateX}px`,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [currentIndex, length]);

  // Функция перехода к предыдущему слайду
  const prevSlide = () => {
    console.log('prevSlide', currentIndex);
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  // Функция перехода к следующему слайду
  const nextSlide = () => {
    console.log('nextSlide', currentIndex);
    if (currentIndex < length - 1) setCurrentIndex(currentIndex + 1);
  };

  // Флаги, чтобы знать, когда карусель в начале или в конце
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === length - 1;

  return {
    currentIndex,
    carouselRef,
    prevSlide,
    nextSlide,
    isAtStart,
    isAtEnd,
  };
}
