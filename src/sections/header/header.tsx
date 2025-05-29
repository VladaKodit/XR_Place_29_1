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

interface HeaderProps {
  navItems?: NavItemProps[];
  navBarType?: NavBarType;
}

export const Header = ({ navBarType = 'top' }: HeaderProps) => {
  const { t } = useTranslation();

  const navItems = [
    { href: '#', label: t('navbar.about') },
    { href: '#', label: t('navbar.howItWorks') },
    { href: '#', label: t('navbar.features') },
  ];

  return (
    <SectionBase>
      {
        <div className={styles.header}>
          <Frame style={{ paddingRight: '387px' }} />
          <Navbar navItems={navItems} navBarType={navBarType} />
          <div className={styles.header_lang}>
            <Ellipse />
            <LanguageSwitcher />
          </div>
        </div>
      }
    </SectionBase>
  );
};
