import React from 'react';
import cn from 'classnames';
import { Logo } from 'shared/ui';
import { SearchProduct } from 'features/search-product';
import { ToCart } from 'entities/to-cart';
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
            <ToCart />
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
