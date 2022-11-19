import React from 'react';
import { CardBlock } from 'widgets/card-block';
import styles from './styles.module.scss';

export const FavoritesPage = () => {
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
      <CardBlock header="Your Wishlist" products={testArr} isHideBuyButton />
    </div>
  );
};
