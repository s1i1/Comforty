import React from 'react';
import cn from 'classnames';
import styles from './Middle.module.scss';
import { Logo } from 'shared/ui';
import { SearchProduct, ToCart } from 'entities/ui';
import { FavoriteButton, ProfileButton } from 'shared/ui/buttons';

export const Middle = () => {
  return (
    <div className={styles.header__middle}>
      <div className={cn('_container', styles.container)}>
        <Logo />
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
