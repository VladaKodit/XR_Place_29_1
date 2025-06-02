import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMouseCustom = () => {
  const mouseWrapperRef = useRef<HTMLDivElement>(null);
  const mouseCustopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circleWrapper = mouseWrapperRef.current;
    const circle = mouseCustopRef.current;

    if (!circleWrapper || !circle) return;

    const moveCircle = (e: MouseEvent) => {
      const tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
          ease: 'power1.out',
          overwrite: true,
        },
      });

      tl.to(circle, {
        duration: 0,
      }).to(circleWrapper, {
        duration: 0.4,
      });
    };

    window.addEventListener('mousemove', moveCircle);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return {
    mouseWrapperRef,
    mouseCustopRef,
  };
};
