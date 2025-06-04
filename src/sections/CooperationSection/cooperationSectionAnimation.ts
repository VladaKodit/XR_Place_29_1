import gsap from 'gsap';

export const cooperationSectionAnimation = (
  sectionRef: React.RefObject<HTMLDivElement | null>,
  titleRef: React.RefObject<HTMLDivElement | null>,
  descriptionRef: React.RefObject<HTMLDivElement | null>,
) => {
  if (!titleRef.current || !descriptionRef.current || !sectionRef.current)
    return;

  // Заголовок поднимается снизу
  gsap.fromTo(
    titleRef.current,
    {
      y: 50, // Смещаем заголовок вниз
      opacity: 0, // Прозрачный
    },
    {
      y: 0, // Перемещаемся на свою позицию
      opacity: 1, // Видимый
      duration: 0.5,
      ease: 'power5.out',
      scrollTrigger: {
        trigger: sectionRef.current, // Используем родительскую секцию как триггер
        start: 'top center', // Начинаем анимацию, когда верх секции достигает центра окна
        toggleActions: 'play none none none', // Воспроизводим анимацию при появлении
      },
    },
  );

  // Описание тоже поднимается снизу
  gsap.fromTo(
    descriptionRef.current,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      ease: 'power5.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        toggleActions: 'play none none none',
      },
    },
  );
};
