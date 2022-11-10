import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { DiscountCard } from 'entities/discount-card';
import { ArrowButton, Button } from 'shared/ui/buttons';
import { useGetDiscountItemsQuery } from 'shared/api';
import { baseRoutes, useAppDispatch } from 'shared/lib';
import { navbarModel } from 'features/navbar';
import styles from './styles.module.scss';

const MainSlider = () => {
  const dispatch = useAppDispatch();

  const [pageNumber, setPageNumber] = React.useState(1);
  const totalPages = ['1', '2', '3'];

  const { data: discountItems } = useGetDiscountItemsQuery({ limit: 1, pageNumber: pageNumber });

  const onClickIncrementPageNum = () => {
    if (pageNumber < 3) {
      setPageNumber(pageNumber + 1);
    } else {
      setPageNumber(1);
    }
  };
  const onClickDecrementPageNum = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    } else {
      setPageNumber(3);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.background}></div>

      <div className={cn('_container', styles.container)}>
        <div className={styles.prev__page} onClick={onClickDecrementPageNum}>
          <ArrowButton rotate green />
        </div>

        <div className={styles.header}>
          <p>Welcome to Comforty</p>
          <h1>Best Furniture Collection for your interior.</h1>
          <Link to={baseRoutes.SHOP} onClick={() => dispatch(navbarModel.setActivePage(1))}>
            <Button title="Shop Now" isArrow />
          </Link>
        </div>
        <div className={styles.product}>
          {discountItems?.map((discountObj, index) => (
            <div key={index}>
              <DiscountCard {...discountObj} />
            </div>
          ))}
        </div>

        <div className={styles.product__pagination}>
          <ul className={styles.pagination__list}>
            {totalPages.map((_, index) => (
              <li
                key={index}
                className={cn(
                  styles.number__page,
                  pageNumber === index + 1 && styles.active__page,
                )}></li>
            ))}
          </ul>
        </div>

        <div className={styles.next__page} onClick={onClickIncrementPageNum}>
          <ArrowButton green />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
