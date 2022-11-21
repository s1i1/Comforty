import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'shared/lib';
import { FavoritesBlock } from 'entities/favorites';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import { BackToButton } from 'shared/ui/buttons';
import { headerModel } from 'widgets/header';

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

  const { scroll } = useAppSelector(headerModel.selectHeader);

  return (
    <div className={cn('_container', styles.container, scroll >= 48 && styles.with__scroll)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Wishlist</h2>
        <Link to={baseRoutes.SHOP} className={styles.to__shop}>
          <BackToButton title="Back To Shop" />
        </Link>
      </div>

      <FavoritesBlock products={testArr} />
    </div>
  );
};
