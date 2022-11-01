import React from 'react';
import arrow from './assets/arrow.svg';
import styles from './styles.module.scss';

const Language = () => {
  return (
    <div className={styles.container}>
      <p>Eng</p>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default Language;
