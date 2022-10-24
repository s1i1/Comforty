import React from 'react';
import styles from './Navigation.module.scss';

type NavigationProps = {
  title: string;
};

export const Navigation: React.FC<NavigationProps> = ({ title }) => {
  return <li className={styles.title}>{title}</li>;
};
