import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { baseRoutes, useAppDispatch } from 'shared/lib';
import { ProductTag } from 'shared/ui';
import { AddCartButton, FavoriteButton } from '../buttons';
import { ourProductsModel } from 'entities/our-products';
import { cartPageModel } from 'pages/cart';
import styles from './styles.module.scss';

type CardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  prevPrice?: number;
  newest?: boolean;
  searchTag?: string;
};

const Card: React.FC<CardProps> = ({ id, image, title, price, prevPrice, newest, searchTag }) => {
  const dispatch = useAppDispatch();

  const { categoryNames, setLinkTag, setActiveCategory } = ourProductsModel;
  const { setCartProducts } = cartPageModel;

  const tagCheck = (newest?: boolean, prevPrice?: number) => {
    return (prevPrice && 'sales') || (newest && 'new');
  };
  const handlerClickImage = () => {
    categoryNames.forEach((obj, index) => {
      if (obj.link === searchTag) {
        dispatch(setLinkTag(searchTag));
        dispatch(setActiveCategory(index));
      }
    });
  };

  const addToCart = () => {
    dispatch(setCartProducts({ id, image, price, title, count: 1 }));
  };

  return (
    <div className={cn(styles.container)}>
      <div className={styles.tag}>
        <ProductTag tag={tagCheck(newest, prevPrice)} />
      </div>

      <Link to={baseRoutes.SHOP} onClick={handlerClickImage}>
        <div className={styles.image}>
          <img className={styles.background} src={image} alt="product-background" />
        </div>
      </Link>

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

        <div className={styles.add__to_cart} onClick={addToCart}>
          <AddCartButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
