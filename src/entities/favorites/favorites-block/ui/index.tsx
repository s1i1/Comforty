import React from 'react';
import { Card } from 'shared/ui';

import styles from './styles.module.scss';

type productsItems = {
  image: string;
  price: number;
  title: string;
};

type FavoritesBlockProps = {
  products: productsItems[];
};

//Поменять key в products
const FavoritesBlock: React.FC<FavoritesBlockProps> = ({ products }) => {
  return (
    <div className={styles.container}>
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
