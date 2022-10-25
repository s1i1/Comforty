import React from 'react';
import { MainSlider } from 'widgets/MainSlider';
import { Header } from 'widgets/Header';
import styles from './HomePage.module.scss';

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
