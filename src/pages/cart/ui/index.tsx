import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'shared/lib';
import { cartPageModel } from 'pages/cart';
import { CartBlock } from 'features/cart-block';
import { headerModel } from 'widgets/header';

import styles from './styles.module.scss';

export const CartPage = () => {
  const { cartProducts } = useAppSelector(cartPageModel.selectCartPage);

  const testArr = [
    { image: 'https://i.imgur.com/X2sAq9u.jpg', price: 100, title: "Barny 78'' Upholstered" },
    { image: 'https://i.imgur.com/X2sAq9u.jpg', price: 100, title: "Barny 78'' Upholstered" },
    { image: 'https://i.imgur.com/X2sAq9u.jpg', price: 100, title: "Barny 78'' Upholstered" },
    { image: 'https://i.imgur.com/X2sAq9u.jpg', price: 100, title: "Barny 78'' Upholstered" },
    { image: 'https://i.imgur.com/X2sAq9u.jpg', price: 100, title: "Barny 78'' Upholstered" },
    { image: 'https://i.imgur.com/X2sAq9u.jpg', price: 100, title: "Barny 78'' Upholstered" },
    { image: 'https://i.imgur.com/X2sAq9u.jpg', price: 100, title: "Barny 78'' Upholstered" },
    { image: 'https://i.imgur.com/X2sAq9u.jpg', price: 100, title: "Barny 78'' Upholstered" },
  ];

  const { scroll } = useAppSelector(headerModel.selectHeader);

  return (
    <div className={cn(styles.container, scroll >= 48 && styles.with__scroll)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Shopping Cart</h2>
      </div>
      <CartBlock products={cartProducts} />
    </div>
  );
};
