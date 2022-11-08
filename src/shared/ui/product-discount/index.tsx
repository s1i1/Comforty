import React from 'react';
import circleIcon from './assets/circle-icon.svg';
import styles from './styles.module.scss';

type ProductDiscountProps = {
  discount: string;
};

const ProductDiscount: React.FC<ProductDiscountProps> = ({ discount }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={circleIcon} alt="circleIcon" />
        <p className={styles.percent}>{discount}</p>
        <p className={styles.discount}>Discount</p>
      </div>
    </div>
  );
};

export default ProductDiscount;
