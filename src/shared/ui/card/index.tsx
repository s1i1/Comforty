import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { ProductTag } from 'shared/ui';
import { AddCartButton, FavoriteButton } from '../buttons';

type CardProps = {
  imagePath: string;
  title?: string; //Убрать ?
  price?: number; //Убрать ?
  prevPrice?: number;
  whatTag?: string | boolean;
};

const Card: React.FC<CardProps> = ({ imagePath, title, price, prevPrice, whatTag }) => {
  return (
    <div className={cn(styles.container)}>
      <div className={styles.tag}>
        <ProductTag tag={whatTag} />
      </div>

      <div className={styles.image}>
        <img className={styles.background} src={imagePath} alt="product-background" />
      </div>

      <div className={styles.favorite}>
        <FavoriteButton />
      </div>

      <div className={styles.bottom}>
        <div className={styles.product__info}>
          <p className={styles.text}>{title}</p>

          <div className={styles.prices}>
            <span className={styles.current__price}>${price}</span>
            <span className={styles.prev__price}>{prevPrice && '$' + prevPrice}</span>
          </div>
        </div>

        <div className={styles.cart}>
          <AddCartButton />
        </div>
      </div>
    </div>
  );
};

export default Card;
