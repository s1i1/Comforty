import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { OurProducts } from 'entities/our-products';

export const ShopPage = () => {
  return (
    <div className={cn('_container', styles.container)}>
      <OurProducts />
    </div>
  );
};
