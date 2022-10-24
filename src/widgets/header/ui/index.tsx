import React from 'react';
import { Top } from './Top';
import { Middle } from './Middle';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Top />
      <Middle />
    </header>
  );
};
