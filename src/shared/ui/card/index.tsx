import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { ProductTag } from 'shared/ui';
import { AddCartButton, FavoriteButton } from '../buttons';

type CardProps = {
  imagePath: string;
  isNew?: boolean;
  isSales?: boolean;
};

const Card: React.FC<CardProps> = ({ imagePath, isNew, isSales }) => {
  return (
    <div className={cn(styles.container)}>
      <div className={styles.tag}>{isNew && <ProductTag isSales={isSales && true} />}</div>
      <div className={styles.favorite}>
        <FavoriteButton />
      </div>

      <img className={styles.background} src={imagePath} alt="product-background" />

      <div className={styles.bottom}>
        <div className={styles.product__info}>
          <p className={styles.text}>Library Stool Chair</p>
          <span className={styles.current__price}>$20</span>
          <span className={styles.prev__price}>$39</span>
        </div>

        <div className={styles.cart}>
          <AddCartButton isActive />
        </div>
      </div>
    </div>
  );
};

export default Card;
