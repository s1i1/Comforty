import React from 'react';
import { Top } from './Top';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Top />
      </div>
    </header>
  );
};
