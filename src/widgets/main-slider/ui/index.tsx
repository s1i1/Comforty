import React from 'react';
import cn from 'classnames';
import { DiscountCard } from 'entities/discount-card';
import { ArrowButton, Button } from 'shared/ui/buttons';
import styles from './styles.module.scss';

const MainSlider = () => {
  return (
    <div className={styles.main}>
      <div className={styles.background}></div>

      <div className={cn('_container', styles.container)}>
        <div className={styles.left__arrow}>
          <ArrowButton rotate green />
        </div>

        <div className={styles.header}>
          <p>Welcome to chairy</p>
          <h1>Best Furniture Collection for your interior.</h1>
          <Button title="Shop Now" isArrow />
        </div>
        <div className={styles.product}>
          <DiscountCard />
        </div>

        <div className={styles.right__arrow}>
          <ArrowButton green />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
