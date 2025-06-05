// GSAP-анимация элементов внутри Hero
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Анимация секции Hero
export function animateHero(container: HTMLElement) {
  // Поиск нужных DOM-элементов внутри переданного контейнера
  const line1 = container.querySelector('.line1');
  const linesOther = container.querySelectorAll('.line2, .line3');
  const header = container.querySelector('.header');
  const subheader = container.querySelector('.subheader');
  const desc = container.querySelector('.description');
  const btn = container.querySelector('.button');
  const img = container.querySelector('.image');
  const svgs = container.querySelectorAll(
    '.cross, .square, .cornerArrow, .circle',
  );

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } }); // Создаём GSAP-таймлайн с плавным значением по умолчанию (ease: 'power2.out') для всех анимаций

  // Масштаб и появление всей секции
  tl.fromTo(
    container,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6 },
  );

  // Анимация вертикальной линии 1
  if (line1)
    tl.from(
      line1,
      { scaleY: 0, transformOrigin: 'center center', duration: 0.5 },
      '-=0.4',
    );

  // Анимация остальных линий горизонтально
  if (linesOther.length)
    tl.from(
      linesOther,
      {
        scaleX: 0,
        transformOrigin: 'center center',
        stagger: 0.1,
        duration: 0.5,
      },
      '-=0.4',
    );

  // Заголовок с маской снизу вверх
  if (header)
    tl.from(
      header,
      { yPercent: 100, clipPath: 'inset(100% 0% 0% 0%)', duration: 0.8 },
      '-=0.4',
    );

  // Подзаголовок
  if (subheader)
    tl.from(subheader, { opacity: 0, y: 40, duration: 0.6 }, '-=0.4');

  // Описание и кнопка
  if (desc && btn)
    tl.from(
      [desc, btn],
      { y: 20, opacity: 0, stagger: 0.2, duration: 0.5 },
      '-=0.3',
    );

  // Второстепенные SVG-фигуры (квадратики, кружки и т.д.)
  if (svgs.length)
    tl.from(
      svgs,
      { scale: 0, opacity: 0, stagger: 0.1, duration: 0.5 },
      '-=0.4',
    );

  // Главное изображение с эффектом «шторки» сверху вниз
  if (img)
    tl.from(
      img,
      {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          // Убираем clipPath после завершения, чтобы оно не мешало дальнейшим эффектам
          gsap.set(img, { clipPath: 'inset(0% 0% 0% 0%)' });
        },
      },
      '-=0.5',
    );

  //  Параллакс: при скролле изображение "поднимается"
  if (img)
    gsap.to(img, {
      y: '13vh',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
}

export function animateCollapseHero(container: HTMLElement) {
  const number = container.querySelector('.loader-number');
  const tl = gsap.timeline();

  // Скрываем цифру
  if (number) {
    tl.to(number, {
      opacity: 0,
      duration: 0.4,
    });
  }

  // Подготовка контейнера
  gsap.set(container, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50,
    width: '100vw',
    height: '100vh',
    clipPath: 'circle(100%)',
    transformOrigin: 'center',
    zIndex: 9999,
  });

  // Сжатие в круг
  tl.to(container, {
    clipPath: 'circle(40px at center)',
    duration: 1,
    ease: 'power2.inOut',
  });

  // Падение вниз + исчезновение
  tl.to(container, {
    y: 200,
    opacity: 0,
    duration: 0.8,
    ease: 'power1.out',
  });

  return tl;
}
