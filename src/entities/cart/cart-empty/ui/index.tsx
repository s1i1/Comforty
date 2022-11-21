import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import { BackToButton } from 'shared/ui/buttons';
import styles from './styles.module.scss';

const CartEmpty = () => {
  return (
    <div className={cn('_container', styles.container)}>
      <p className={styles.text}>Cart is empty</p>
      <Link to={baseRoutes.SHOP} className={styles.back__to_button}>
        <BackToButton title="continue shopping" />
      </Link>
    </div>
  );
};

export default CartEmpty;
