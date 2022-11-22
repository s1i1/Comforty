import React from 'react';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from 'shared/lib';
import { cartPageModel } from 'pages/cart';
import { CartProductsItems } from 'pages/cart/model';
import { CartEmpty, CartBlock } from 'entities/cart';
import { headerModel } from 'widgets/header';

import styles from './styles.module.scss';

export const CartPage = () => {
  const dispatch = useAppDispatch();

  const { cartProducts } = useAppSelector(cartPageModel.selectCartPage);
  const { scroll } = useAppSelector(headerModel.selectHeader);

  const { setTotalPrice } = cartPageModel;

  React.useEffect(() => {
    let totalPrice = 0;

    cartProducts.forEach((obj: CartProductsItems) => {
      totalPrice += obj.price * obj.count;
    });

    dispatch(setTotalPrice(totalPrice));
    totalPrice = 0;
  }, [cartProducts]);

  return (
    <div className={cn(styles.container, scroll >= 48 && styles.with__scroll)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Shopping Cart</h2>
      </div>
      {cartProducts.length >= 1 ? <CartBlock products={cartProducts} /> : <CartEmpty />}
    </div>
  );
};
