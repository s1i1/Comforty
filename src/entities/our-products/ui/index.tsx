import React from 'react';
import imagePath from './assets/test-image.svg';
import cn from 'classnames';
import { CategoriesBar } from 'features/categories';
import { Card } from 'shared/ui';
import styles from './styles.module.scss';

const OurProducts = () => {
  const categoryNames = ['All', 'Newest', 'Trending', 'Best Sellers', 'Featured'];
  const testArr = [...Array(8).fill(null)];

  return (
    <div className={cn('_container', styles.container)}>
      <h2 className={styles.header}>Our Products</h2>

      <ul className={styles.categories__list}>
        {categoryNames.map((items, index) => (
          <li key={index}>
            <CategoriesBar title={items} isActive={index === 0 && true} />
          </li>
        ))}
      </ul>

      <ul className={styles.products__list}>
        {testArr.map((_, index) => (
          <li key={index}>
            <Card imagePath={imagePath} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProducts;
