import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { baseRoutes, useAppDispatch, useAppSelector } from 'shared/lib';
import { ProductTag } from 'shared/ui';
import { AddCartButton, FavoriteButton } from '../buttons';
import { ourProductsModel } from 'entities/our-products';
import { cartPageModel } from 'pages/cart';
import { CartProductsItems } from 'pages/cart/model';
import { favoritesPageModel } from 'pages/favorites';
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

  const { cartProducts } = useAppSelector(cartPageModel.selectCartPage);
  const { favoritesItems } = useAppSelector(favoritesPageModel.selectFavoritesPage);

  const { categoryNames, setLinkTag, setActiveCategory } = ourProductsModel;
  const { setCartProducts, removeCartProduct } = cartPageModel;
  const { addFavorites, removeFavorite } = favoritesPageModel;

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
    const findDuplicate = cartProducts.find((obj: CartProductsItems) => obj.id === id);

    if (findDuplicate) {
      dispatch(removeCartProduct(id));
    } else {
      dispatch(setCartProducts({ id, image, price, title, count: 1 }));
    }
  };

  const addToFavorites = () => {
    const findDuplicate = favoritesItems.find((obj: CartProductsItems) => obj.id === id);

    if (findDuplicate) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorites({ id, image, price, title, count: 1 }));
    }
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

      <div
        className={cn(
          styles.favorite,
          favoritesItems.find((obj: CartProductsItems) => obj.id === id)
            ? 'opacity-100'
            : 'opacity-0',
        )}
        onClick={addToFavorites}>
        <FavoriteButton id={id} />
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
