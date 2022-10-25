import React from 'react';
import { Top } from './Top';
import { Middle } from './Middle';
import { Bottom } from './Bottom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Top />
      <Middle />
      <Bottom />
    </header>
  );
};
