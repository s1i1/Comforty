import React from 'react';
import cn from 'classnames';
import { CategoriesBar } from 'shared/ui/categories-bar';
import { Card } from 'shared/ui';
import { useGetItemsQuery } from 'shared/api/mock.api';
import { ArrowButton } from 'shared/ui/buttons';
import styles from './styles.module.scss';

const OurProducts = () => {
  const categoryNames = ['All', 'Newest', 'Trending', 'Best Sellers', 'Featured'];
  const [pageNumber, setPageNumber] = React.useState(1);
  const totalPages = [1, 2, 3, 4, 5, 6];

  const { data: products } = useGetItemsQuery({ pageNumber: pageNumber, tag: '', limit: 8 });

  const onClickIncrementPageNum = () => {
    if (pageNumber < 6) {
      setPageNumber(pageNumber + 1);
    }
  };

  const onClickDecrementPageNum = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const onClickPagination = (number: number) => {
    setPageNumber(number);
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
            <Card {...obj} />
          </li>
        ))}
      </ul>

      <div className={styles.products__pagination}>
        <div className={styles.prev__button} onClick={onClickDecrementPageNum}>
          <ArrowButton rotate />
        </div>
        <ul className={styles.pagination__list}>
          {totalPages.map((number, index) => (
            <li
              key={index}
              className={cn(styles.page__number, pageNumber === number && styles.active__page)}
              onClick={() => onClickPagination(number)}>
              {number}
            </li>
          ))}
        </ul>
        <div className={styles.next__button} onClick={onClickIncrementPageNum}>
          <ArrowButton />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
