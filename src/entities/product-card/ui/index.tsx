import React from 'react';
import cn from 'classnames';
import imagePath from './assets/product-image-1.jpg';
import { Card } from 'shared/ui';
import styles from './styles.module.scss';
import { ArrowButton } from 'shared/ui/buttons';

type ProductCardProps = {
  title: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title }) => {
  const testArr = [...Array(4).fill(null)];

  return (
    <div className={cn('_container', styles.container)}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <div className={cn(styles.base__arrows)}>
          <span className={styles.left}>
            <ArrowButton rotate />
          </span>
          <span className={styles.right}>
            <ArrowButton />
          </span>
        </div>
      </div>

      <ul className={styles.list}>
        {testArr.map((item, index) => (
          <li key={index}>
            <Card imagePath={imagePath} />
          </li>
        ))}
      </ul>
      <div className={cn(styles.alternative__arrows)}>
        <span className={styles.left}>
          <ArrowButton rotate />
        </span>
        <span className={styles.right}>
          <ArrowButton />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
