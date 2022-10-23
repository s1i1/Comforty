import React from 'react';
import arrow from './assets/arrow.svg';
import styles from './Language.module.scss';

export const Language = () => {
  return (
    <div className={styles.container}>
      <p>Eng</p>
      <img src={arrow} alt="arrow" />
    </div>
  );
};
