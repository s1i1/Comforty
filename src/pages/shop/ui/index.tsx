import React from 'react';
import cn from 'classnames';
import { useAppSelector } from 'shared/lib';
import { OurProducts } from 'entities/our-products';
import { headerModel } from 'widgets/header';
import styles from './styles.module.scss';

export const ShopPage = () => {
  const { scroll } = useAppSelector(headerModel.selectHeader);
  return (
    <div className={cn(styles.container, scroll >= 48 && styles.with__scroll)}>
      <OurProducts />
    </div>
  );
};
