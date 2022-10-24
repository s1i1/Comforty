import React from 'react';
import { Header } from '../../widgets/header';
import styles from './home.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Header />
    </div>
  );
};
