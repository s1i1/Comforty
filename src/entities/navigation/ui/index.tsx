import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type NavigationProps = {
  title: string;
  isActive?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ title, isActive }) => {
  return <li className={cn(styles.title, isActive && styles.active)}>{title}</li>;
};

export default Navigation;
