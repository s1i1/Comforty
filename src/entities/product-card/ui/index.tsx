import React from 'react';
import cn from 'classnames';
import imagePath from './assets/product-image-1.svg';
import { Card } from 'shared/ui';
import { Heading } from 'entities/heading';
import styles from './styles.module.scss';

type ProductCardProps = {
  headerTitle: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ headerTitle }) => {
  const testArr = [...Array(4).fill(null)];

  return (
    <div className={cn('_container', styles.container)}>
      <Heading title={headerTitle} />
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
