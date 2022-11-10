import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type NavItemProps = {
  title: string;
  isActive?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ title, isActive }) => {
  return <div className={cn(styles.title, isActive && styles.active)}>{title}</div>;
};

export default NavItem;
