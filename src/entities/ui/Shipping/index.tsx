import React from 'react';
import checkIcon from './assets/check-icon.svg';
import styles from './Shipping.module.scss';

export const Shipping = () => {
  return (
    <div className={styles.container}>
      <img src={checkIcon} alt="checkIcon" />
      <p>Free shipping on all orders over $50</p>
    </div>
  );
};
