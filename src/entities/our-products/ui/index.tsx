import React from 'react';
import cn from 'classnames';
import { CategoriesBar } from 'features/categories';
import { Card } from 'shared/ui';
import styles from './styles.module.scss';
import { useGetItemsQuery } from 'shared/api/mock.api';

const OurProducts = () => {
  const categoryNames = ['All', 'Newest', 'Trending', 'Best Sellers', 'Featured'];

  const { data: products } = useGetItemsQuery({ pageNumber: 1, tag: '', limit: 8 });

  const tagCheck = (newest: boolean, prevPrice?: number) => {
    return (prevPrice && 'sales') || (newest && 'new');
  };

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
        {products?.map((obj) => (
          <li key={obj.id}>
            <Card
              imagePath={obj.image}
              title={obj.title}
              price={obj.price}
              prevPrice={obj.prevPrice}
              whatTag={tagCheck(obj.newest, obj.prevPrice)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProducts;
