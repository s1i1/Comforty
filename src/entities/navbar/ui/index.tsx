import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type NavbarProps = {
  title: string;
  isActive?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ title, isActive }) => {
  return <div className={cn(styles.title, isActive && styles.active)}>{title}</div>;
};

export default Navbar;
