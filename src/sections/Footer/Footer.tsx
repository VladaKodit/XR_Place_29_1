import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.scss';
import navbarStyles from '../../components/Navbar/Navbar.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import ArrowIcon from '../../assets/footer/arrow.svg?react';
import XrPlaceLogo from '../../assets/footer/xrplace.svg';

gsap.registerPlugin(ScrollTrigger);

// Время можно быстро корректировать

const ANIMATION_CONFIG = {
  titleDuration: 0.5,
  itemDuration: 0.4,
  itemStagger: 0.05,
  backToTopDuration: 0.5,
  logoDuration: 2.0,
  easing: 'power3.out',
};

export const Footer = () => {
  const { t } = useTranslation();

  const menuItems = [
    { href: '#about', label: t('footer.menu.items.0') },
    { href: '#how-it-works', label: t('footer.menu.items.1') },
    { href: '#features', label: t('footer.menu.items.2') },
    { href: '#demo', label: t('footer.menu.items.3') },
  ];

  const socialItems = [
    { href: 'mailto:test@xrlace.io', label: t('footer.socials.items.0') },
    { href: 'https://instagram.com', label: t('footer.socials.items.1') },
    { href: 'https://linkedin.com', label: t('footer.socials.items.2') },
  ];

  useEffect(() => {
    // Начальное состояние для всех анимируемых элементов
    gsap.set(
      [
        `.${styles.section__title}`,
        `.${styles.backToTop__link}`,
        `.${styles.menu} .${navbarStyles.navItemBottom}`,
        `.${styles.social} .${navbarStyles.navItemBottom}`,
        `.${styles.address} p`,
        `.${styles.copyright}`,
      ],
      { autoAlpha: 0, y: 50 },
    );
    gsap.set(`.${styles.logo__image}`, { autoAlpha: 0 });

    // Независимая анимация логотипа
    gsap.fromTo(
      `.${styles.logo__image}`,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: ANIMATION_CONFIG.logoDuration,
        ease: ANIMATION_CONFIG.easing,
        clearProps: 'all',
        scrollTrigger: {
          trigger: `.${styles.footer}`,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    );

    // Анимация остальных элементов
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.footer}`,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Одновременная анимация заголовков и кнопки Back to Top
    tl.fromTo(
      [`.${styles.section__title}`, `.${styles.backToTop__link}`],
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: (i, el) =>
          el.classList.contains(styles.backToTop__link)
            ? ANIMATION_CONFIG.backToTopDuration
            : ANIMATION_CONFIG.titleDuration,
        ease: ANIMATION_CONFIG.easing,
        clearProps: 'all',
      },
    );

    // Анимация элементов по группам (первые, вторые, третьи, четвёртые)
    const animationSteps = [
      [
        `.${styles.menu} .${navbarStyles.navItemBottom}:nth-child(1)`,
        `.${styles.social} .${navbarStyles.navItemBottom}:nth-child(1)`,
        `.${styles.address} p:nth-child(1)`,
      ],
      [
        `.${styles.menu} .${navbarStyles.navItemBottom}:nth-child(2)`,
        `.${styles.social} .${navbarStyles.navItemBottom}:nth-child(2)`,
        `.${styles.address} p:nth-child(2)`,
      ],
      [
        `.${styles.menu} .${navbarStyles.navItemBottom}:nth-child(3)`,
        `.${styles.social} .${navbarStyles.navItemBottom}:nth-child(3)`,
        `.${styles.copyright}`,
      ],
      [`.${styles.menu} .${navbarStyles.navItemBottom}:nth-child(4)`],
    ];

    animationSteps.forEach((selectors) => {
      tl.fromTo(
        selectors,
        { autoAlpha: 0, y: '200%' },
        {
          autoAlpha: 1,
          y: '0%',
          duration: ANIMATION_CONFIG.itemDuration,
          ease: ANIMATION_CONFIG.easing,
          clearProps: 'all',
        },
        `+=${ANIMATION_CONFIG.itemStagger}`,
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.links__container}>
        <div className={styles.contacts}>
          <h3 className={styles.section__title}>
            {t('footer.contacts.title')}
          </h3>
          <address className={styles.address}>
            <p>{t('footer.contacts.address.0')}</p>
            <p>{t('footer.contacts.address.1')}</p>
          </address>
          <p className={styles.copyright}>{t('footer.contacts.copyright')}</p>
        </div>

        <div className={styles.menu}>
          <h3 className={styles.section__title}>{t('footer.menu.title')}</h3>
          <Navbar navItems={menuItems} navBarType="bottom" />
        </div>

        <div className={styles.social}>
          <h3 className={styles.section__title}>{t('footer.socials.title')}</h3>
          <Navbar navItems={socialItems} navBarType="bottom" />
        </div>

        <div className={styles.backToTop}>
          <a href="#top" className={styles.backToTop__link}>
            {t('footer.toTop')}
            <ArrowIcon />
          </a>
        </div>
      </div>

      <div className={styles.logo__container}>
        <img src={XrPlaceLogo} alt="XR Place" className={styles.logo__image} />
      </div>
    </footer>
  );
};

export default Footer;
