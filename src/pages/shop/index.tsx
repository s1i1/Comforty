import React from 'react';
import styles from './styles.module.scss';
import { OurProducts } from 'entities/our-products';

export const ShopPage = () => {
  return (
    <div className={styles.container}>
      <OurProducts />
    </div>
  );
};
