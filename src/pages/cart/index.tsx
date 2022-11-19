import React from 'react';
import styles from './styles.module.scss';
import { CardBlock } from 'widgets/card-block';

export const CartPage = () => {
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
  return (
    <div className={styles.container}>
      <CardBlock header="Your Shopping Cart" products={testArr} />
    </div>
  );
};
