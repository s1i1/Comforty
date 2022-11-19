import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import { Logo } from 'shared/ui';
import { SearchProduct } from 'features/search-product';
import { ToCart } from 'features/to-cart';
import { FavoriteButton, ProfileButton } from 'shared/ui/buttons';
import styles from './styles.module.scss';

const Middle = () => {
  return (
    <div className={styles.header__middle}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <SearchProduct />
        <ul>
          <li>
            <Link to={baseRoutes.CART}>
              <ToCart />
            </Link>
          </li>
          <li>
            <FavoriteButton inHeader />
          </li>
          <li>
            <ProfileButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Middle;
