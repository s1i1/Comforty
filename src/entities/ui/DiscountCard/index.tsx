import React from 'react';
import { ProductDiscount } from 'shared/ui';
import productImage from './assets/product-image.png';
import styles from './DiscountCard.module.scss';

export const DiscountCard = () => {
  return (
    <div className={styles.container}>
      <img src={productImage} alt="productImage" />
      <div className={styles.discount}>
        <ProductDiscount />
      </div>
    </div>
  );
};
