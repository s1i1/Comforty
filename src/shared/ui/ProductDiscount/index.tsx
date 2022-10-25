import React from 'react';
import circleIcon from './assets/circle-icon.svg';
import styles from './ProductDiscount.module.scss';

export const ProductDiscount = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={circleIcon} alt="circleIcon" />
        <p className={styles.percent}>54%</p>
        <p className={styles.discount}>Discount</p>
      </div>
    </div>
  );
};