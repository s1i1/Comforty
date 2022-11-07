import React from 'react';
import cn from 'classnames';
import { CategoryCard } from 'shared/ui';
import { Heading } from 'entities/heading';
import { useGetTopCategoriesQuery } from 'shared/api/mock.api';
import styles from './styles.module.scss';

const TopCategories = () => {
  const { data: products } = useGetTopCategoriesQuery({ limit: 3, pageNumber: 1 });

  return (
    <div className={cn('_container', styles.container)}>
      <Heading title="Top Categories" />

      <ul className={styles.list}>
        {products?.map((product, index) => (
          <li key={index}>
            <CategoryCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
