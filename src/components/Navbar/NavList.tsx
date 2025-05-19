import { Fragment } from 'react';
import NavItem from './NavItem.tsx';
import type { NavListProps, NavItemProps } from './types';
import styles from './Navbar.module.scss';

const NavList = ({ items, navBarType }: NavListProps) => {
  return items.map((props: NavItemProps, index: number) => (
    <Fragment key={props.href}>
      <NavItem href={props.href} label={props.label} navBarType={navBarType} />
      {navBarType && navBarType === 'top' && index < items.length - 1 && (
        <span className={styles.separator} aria-hidden="true" />
      )}
    </Fragment>
  ));
};

export default NavList;
