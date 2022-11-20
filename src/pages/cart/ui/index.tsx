import React from 'react';
import { useAppSelector } from 'shared/lib';
import { cartPageModel } from 'pages/cart';
import { CardBlock } from 'widgets/card-block';
import styles from './styles.module.scss';

export const CartPage = () => {
  const { cartProducts } = useAppSelector(cartPageModel.selectCartPage);

  return (
    <div className={styles.container}>
      <CardBlock header="Your Shopping Cart" products={cartProducts} />
    </div>
  );
};
