import styles from './Navbar.module.scss';
import NavList from './NavList';
import type { NavBarType, NavItemProps } from './types';

interface NavbarProps {
  navItems?: NavItemProps[];
  navBarType?: NavBarType;
}

const Navbar = ({ navItems, navBarType = 'top' }: NavbarProps) => {
  const containerStyle =
    navBarType === 'top' ? styles.navbarTop : styles.navbarBottom;

  return (
    <nav className={containerStyle} role="navigation">
      <NavList items={navItems ?? []} navBarType={navBarType} />
    </nav>
  );
};

export default Navbar;
