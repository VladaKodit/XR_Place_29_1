import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import ArrowIcon from '../../assets/footer/arrow.svg?react';
import XrPlaceLogo from '../../assets/footer/xrplace.svg';

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

  return (
    <footer className={styles.footer}>
      <div className={styles.links__container}>
        <div className={styles.contacts}>
          <h3 className={styles.section__title}>
            {t('footer.contacts.title')}
          </h3>
          <address className={styles.address}>
            <p>{t('footer.contacts.address.0')}</p>
            <p> {t('footer.contacts.address.1')}</p>
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
            <ArrowIcon></ArrowIcon>
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
