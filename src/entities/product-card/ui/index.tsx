import React from 'react';
import cn from 'classnames';
import imagePath from './assets/product-image-1.jpg';
import { Card } from 'shared/ui';
import styles from './styles.module.scss';

const ProductCard = () => {
  const testArr = [...Array(4).fill(null)];

  return (
    <div className={cn('_container', styles.container)}>
      <ul className={styles.list}>
        {testArr.map((item, index) => (
          <li key={index}>
            <Card imagePath={imagePath} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
