import React from 'react';
import cn from 'classnames';
import { CategoryCard } from 'shared/ui';
import { Heading } from 'entities/heading';
import { useGetTopCategoriesQuery } from 'shared/api';
import styles from './styles.module.scss';

const TopCategories = () => {
  const [pageNum, setPageNum] = React.useState(1);

  const { data: products } = useGetTopCategoriesQuery({ limit: 3, pageNumber: pageNum });

  return (
    <div className={cn('_container', styles.container)}>
      <Heading title="Top Categories" pageNum={pageNum} setPageNum={setPageNum} />

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
