import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Функция анимации секции команды с использованием GSAP и ScrollTrigger.
 * Анимация запускается при прокрутке секции в область видимости.
 *
 * @param sectionRef - ссылка на контейнер секции
 * @param titleRef - ссылка на заголовок секции
 * @param paragraphRefs - ссылки на параграфы
 * @param cardRefs - ссылки на карточки команды
 */

gsap.registerPlugin(ScrollTrigger);

export function animateTeamSection(
  sectionRef: React.RefObject<HTMLDivElement | null>,
  titleRef: React.RefObject<HTMLDivElement | null>,
  paragraphRefs: React.MutableRefObject<(HTMLParagraphElement | null)[]>,
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
) {
  if (!sectionRef.current) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Заголовок
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.4,
      ease: 'power6.out',
      clipPath: 'inset(100% 0 0 0)', // эффект маски снизу вверх
      onComplete() {
        if (titleRef.current) titleRef.current.style.clipPath = 'none';
      },
    });

    // Карточки
    tl.from(cardRefs.current, {
      y: -40,
      opacity: 0,
      stagger: 0,
      duration: 0.6,
      ease: 'power3.out',
      clipPath: 'inset(0 0 100% 0)',
      onComplete() {
        cardRefs.current.forEach((card) => {
          if (card) card.style.clipPath = 'none';
        });
      },
    });

    tl.to(
      cardRefs.current,
      {
        boxShadow: '0 8px 24px rgba(5, 80, 66, 0.4)',
        duration: 0.5,
        stagger: 0,
        ease: 'power1.out',
      },
      '-=0.1',
    );

    // Параграфы
    tl.from(
      paragraphRefs.current.filter(Boolean),
      {
        opacity: 0,
        duration: 0.7,
        ease: 'power5.out',
        stagger: 0,
      },
      '>',
    );
  }, sectionRef.current);

  return () => ctx.revert();
}
