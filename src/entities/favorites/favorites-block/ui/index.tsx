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

const FavoritesBlock: React.FC<FavoritesBlockProps> = ({ products }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {products?.map((obj) => (
          <li key={obj.id} className={styles.items}>
            <Card {...obj} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesBlock;
