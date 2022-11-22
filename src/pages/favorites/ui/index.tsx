import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'shared/lib';
import { FavoritesBlock, FavoritesEmpty } from 'entities/favorites';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import { BackToButton } from 'shared/ui/buttons';
import { headerModel } from 'widgets/header';
import { favoritesPageModel } from 'pages/favorites';

import styles from './styles.module.scss';

export const FavoritesPage = () => {
  const { favoritesItems } = useAppSelector(favoritesPageModel.selectFavoritesPage);

  const { scroll } = useAppSelector(headerModel.selectHeader);

  return (
    <div className={cn('_container', styles.container, scroll >= 48 && styles.with__scroll)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Wishlist</h2>
        <Link to={baseRoutes.SHOP} className={styles.to__shop}>
          <BackToButton title="Back To Shop" />
        </Link>
      </div>

      {favoritesItems.length >= 1 ? (
        <FavoritesBlock products={favoritesItems} />
      ) : (
        <FavoritesEmpty />
      )}
    </div>
  );
};
