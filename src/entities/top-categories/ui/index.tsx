import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, baseRoutes } from 'shared/lib';
import { CategoryCard } from 'shared/ui';
import { Heading } from 'entities/heading';
import { useGetTopCategoriesQuery } from 'shared/api';
import { categoriesModel } from 'features/categories';
import styles from './styles.module.scss';

const TopCategories = () => {
  const dispatch = useAppDispatch();

  const [pageNum, setPageNum] = React.useState(1);

  const { data: products } = useGetTopCategoriesQuery({ limit: 3, pageNumber: pageNum });

  const handlerClickCategory = (categoryName: string) => {
    categoriesModel.categoryNames.forEach((obj) => {
      if (obj.title === categoryName) {
        dispatch(categoriesModel.setCurrentCategory(obj));
      }
    });
  };

  return (
    <div className={cn('_container', styles.container)}>
      <Heading title="Top Categories" pageNum={pageNum} setPageNum={setPageNum} />

      <ul className={styles.list}>
        {products?.map((product, index) => (
          <li key={index} onClick={() => handlerClickCategory(product.category)}>
            <Link to={baseRoutes.SHOP}>
              <CategoryCard {...product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
