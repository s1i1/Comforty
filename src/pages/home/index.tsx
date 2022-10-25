import React from 'react';
import { MainSlider } from 'widgets/main-slider';
import { Header } from '../../widgets/header';
import styles from './home.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.header}>
        <Header />
      </div>
      <MainSlider />
    </div>
  );
};
