//@ts-nocheck
import React from 'react';
import imagePath from './assets/test-image.svg';
import cn from 'classnames';
import { CategoriesBar } from 'features/categories';
import { Card } from 'shared/ui';
import styles from './styles.module.scss';
import testData from 'data.json';

const OurProducts = () => {
  const categoryNames = ['All', 'Newest', 'Trending', 'Best Sellers', 'Featured'];

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
        {testData.map((item, index) => (
          <li key={index}>
            <Card
              imagePath={item.image}
              title={item.title}
              price={item.price}
              prevPrice={item.prevPrice}
              whatTag={(item.prevPrice && 'sales') || (item.newest && 'new')}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProducts;
