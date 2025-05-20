export type NavItemProps = {
  href: string;
  label: string;
  navBarType?: NavBarType | undefined;
};

export type NavBarType = 'top' | 'bottom';
export interface NavListProps {
  items: NavItemProps[];
  navBarType?: NavBarType;
}
