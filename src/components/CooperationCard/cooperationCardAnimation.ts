import gsap from 'gsap';

export const cooperationCardAnimation = (
  cardRef: React.RefObject<HTMLDivElement | null>,
  delay: number,
) => {
  if (cardRef.current) {
    gsap.fromTo(
      cardRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
      },
    );
  }
};
