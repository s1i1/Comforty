import React from 'react';
import { Card } from 'shared/ui';

import styles from './styles.module.scss';

type productsItems = {
  id: string;
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
        {products?.map((obj, index) => (
          <li key={index} className={styles.items}>
            <Card {...obj} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesBlock;
