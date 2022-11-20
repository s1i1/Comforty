import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import { useAppSelector } from 'shared/lib';
import { Card } from 'shared/ui';
import { Button, BackToButton } from 'shared/ui/buttons';
import { headerModel } from 'widgets/header';

import styles from './styles.module.scss';

type productsItems = {
  image: string;
  price: number;
  title: string;
};

type FavoritesBlockProps = {
  header: string;
  products: productsItems[];
};

//Поменять key в products
const FavoritesBlock: React.FC<FavoritesBlockProps> = ({ header, products }) => {
  const { scroll } = useAppSelector(headerModel.selectHeader);

  return (
    <div className={cn('_container', styles.container, scroll >= 48 && styles.with__scroll)}>
      <div className={styles.header}>
        <h2 className={styles.title}>{header}</h2>
        <Link to={baseRoutes.SHOP} className={styles.to__shop}>
          <BackToButton title="Back To Shop" />
        </Link>
      </div>

      <ul className={styles.list}>
        {products?.map((item, index) => (
          <li key={index} className={styles.items}>
            <Card image={item.image} price={item.price} title={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesBlock;
