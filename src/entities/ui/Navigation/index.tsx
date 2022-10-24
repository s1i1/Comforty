import React from 'react';
import cn from 'classnames';
import styles from './Navigation.module.scss';

type NavigationProps = {
  title: string;
  isActive?: boolean;
};

export const Navigation: React.FC<NavigationProps> = ({ title, isActive }) => {
  return <li className={cn(styles.title, isActive && styles.active)}>{title}</li>;
};
