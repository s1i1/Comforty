import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { baseRoutes, useAppDispatch, useAppSelector } from 'shared/lib';
import { Logo } from 'shared/ui';
import { SearchProduct } from 'features/search-product';
import { ToCart } from 'features/to-cart';
import { FavoriteButton } from 'shared/ui/buttons';
import { CartProductsItems } from 'pages/cart/model';
import { cartPageModel } from 'pages/cart';
import styles from './styles.module.scss';

const Middle = () => {
  const dispatch = useAppDispatch();

  const { setTotalCount } = cartPageModel;

  const { cartProducts } = useAppSelector(cartPageModel.selectCartPage);

  React.useEffect(() => {
    let counts = 0;

    cartProducts.forEach((obj: CartProductsItems) => {
      counts += obj.count;
    });

    dispatch(setTotalCount(counts));
    counts = 0;
  }, [cartProducts]);

  return (
    <div className={styles.header__middle}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <SearchProduct />
        <ul>
          <li>
            <Link to={baseRoutes.CART}>
              <ToCart />
            </Link>
          </li>
          <li>
            <Link to={baseRoutes.FAVORITES}>
              <FavoriteButton inHeader />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Middle;
