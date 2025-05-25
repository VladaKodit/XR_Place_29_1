import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ITEM_WIDTH = 800;

export function useCarousel(length: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    gsap.to(carouselRef.current, {
      x: `-${currentIndex * ITEM_WIDTH}px`,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [currentIndex]);

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex < length - 1) setCurrentIndex(currentIndex + 1);
  };

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
