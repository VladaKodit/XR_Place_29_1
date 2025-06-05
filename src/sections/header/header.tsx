import {
  Navbar,
  type NavBarType,
  type NavItemProps,
} from '../../components/Navbar';
import styles from './header.module.scss';

import Frame from '../../assets/images/Frame49.svg?react';
import Ellipse from '../../assets/images/Ellipse497.svg?react';
import { LanguageSwitcher } from '../../components/languageSwitcher/languageSwitcher';
import { SectionBase } from '../../components/SectionBase/SectionBase';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { animateHeader } from './HeaderAnimation';

interface HeaderProps {
  navItems?: NavItemProps[];
  navBarType?: NavBarType;
  className?: string;
}

export const Header = ({ navBarType = 'top', className }: HeaderProps) => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement>(null);

  // Анимация запускается при монтировании компонента
  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        animateHeader(containerRef.current!);
      });
    }
  }, []);
  const navItems = [
    { href: '#philosophy', label: t('navbar.about') },
    { href: '#howItWorks', label: t('navbar.howItWorks') },
    { href: '#features', label: t('navbar.features') },
  ];

  return (
    <SectionBase containerClassName={className}>
      <div ref={containerRef} className={styles.header}>
        <Frame className={`${styles.frame} frame`} />
        <Navbar navItems={navItems} navBarType={navBarType} />
        <div className={`${styles.header_lang} header_lang`}>
          <Ellipse />
          <LanguageSwitcher />
        </div>
      </div>
    </SectionBase>
  );
};
