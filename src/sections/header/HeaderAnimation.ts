import { gsap } from 'gsap';

export function animateHeader(container: HTMLElement) {
  const frame = container.querySelector('.frame');
  const menuItems = container.querySelectorAll('.menu-item');
  const lang = container.querySelector('.header_lang');

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  // Логотип: слева направо + появление
  if (frame) {
    tl.fromTo(
      frame,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
    );
  }

  // Пункты меню: слева направо + появление
  if (menuItems.length) {
    tl.fromTo(
      menuItems,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      '-=0.4', // начинается чуть раньше окончания логотипа
    );
  }

  // Переключатель языка: справа налево + появление
  if (lang) {
    tl.fromTo(
      lang,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      '-=0.5',
    );
  }
}
