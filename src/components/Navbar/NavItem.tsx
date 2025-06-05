import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import type { NavItemProps } from './types';

const NavItem = ({ href, label, navBarType }: NavItemProps) => {
  const { t } = useTranslation();
  const navItemStyle =
    navBarType === 'top' ? styles.navItemTop : styles.navItemBottom;

  return (
    <a
      className={`${navItemStyle} menu-item`}
      href={href}
      role="link"
      aria-label={t(label)}
    >
      {t(label)}
    </a>
  );
};

export default NavItem;
