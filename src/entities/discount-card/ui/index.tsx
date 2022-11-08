import React from 'react';
import { ProductDiscount } from 'shared/ui';
import styles from './styles.module.scss';

type DiscountCardProps = {
  image: string;
  discount: string;
};

const DiscountCard: React.FC<DiscountCardProps> = ({ image, discount }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="productImage" />
      <div className={styles.discount}>
        <ProductDiscount discount={discount} />
      </div>
    </div>
  );
};

export default DiscountCard;
