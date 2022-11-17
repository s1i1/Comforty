import React from 'react';
import cn from 'classnames';
import { CategoryCard } from 'shared/ui';
import { useGetTopCategoriesQuery } from 'shared/api';
import styles from './styles.module.scss';

export const ProductPage = () => {
  const { data: product } = useGetTopCategoriesQuery({ limit: 6, pageNumber: 1 });

  return (
    <div className={cn('_container', styles.container)}>
      <h2 className={styles.header}>Our Products</h2>
      <ul className={styles.list}>
        {product?.map((obj) => (
          <li key={obj.id} className={styles.list__item}>
            <CategoryCard {...obj} />
          </li>
        ))}
      </ul>
    </div>
  );
};
