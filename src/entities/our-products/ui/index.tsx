import React from 'react';
import cn from 'classnames';
import { CategoriesBar } from 'shared/ui/categories-bar';
import { Card } from 'shared/ui';
import { useGetItemsQuery } from 'shared/api';
import { ArrowButton } from 'shared/ui/buttons';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { ourProductsModel } from 'entities/our-products';
import { ProductItems } from 'shared/api/mock.api/models';
import { categoriesModel } from 'features/categories';
import { searchModel } from 'features/search-product';
import styles from './styles.module.scss';

const OurProducts = () => {
  const dispatch = useAppDispatch();

  const { productItems, pageNumber, linkTag } = useAppSelector(ourProductsModel.selectOurProducts);
  const { currentCategory } = useAppSelector(categoriesModel.selectCategories);
  const { value: searchValue } = useAppSelector(searchModel.selectSearch);

  const [activeLink, setActiveLink] = React.useState(0);

  const totalPages = [1, 2, 3, 4, 5, 6];

  const { data: products, isSuccess } = useGetItemsQuery({
    pageNumber: pageNumber,
    tag: linkTag,
    limit: 8,
    searchProduct: searchValue,
  });

  React.useEffect(() => {
    const activeCategory = currentCategory.category;

    if (isSuccess) {
      dispatch(ourProductsModel.setProductItems(products));
    }

    if (activeCategory && linkTag) {
      dispatch(ourProductsModel.filterProductItems(activeCategory));
    }
  }, [dispatch, products, currentCategory, linkTag]);

  const onClickIncrementPageNum = () => {
    if (pageNumber < 6) {
      dispatch(ourProductsModel.setPageNumber(pageNumber + 1));
    }
  };

  const onClickDecrementPageNum = () => {
    if (pageNumber > 1) {
      dispatch(ourProductsModel.setPageNumber(pageNumber - 1));
    }
  };

  const onClickPagination = (number: number) => {
    dispatch(ourProductsModel.setPageNumber(number));
  };

  const handlerClickCategory = (index: number) => {
    dispatch(ourProductsModel.setLinkTag(ourProductsModel.categoryNames[index].link));
    setActiveLink(index);
  };

  return (
    <div className={cn('_container', styles.container)}>
      <h2 className={styles.header}>Our Products</h2>

      <ul className={styles.categories__list}>
        {ourProductsModel.categoryNames.map((itemsObj, index) => (
          <li key={index} onClick={() => handlerClickCategory(index)}>
            <CategoriesBar title={itemsObj.title} isActive={index === activeLink && true} />
          </li>
        ))}
      </ul>

      <ul className={styles.products__list}>
        {productItems?.map((obj: ProductItems) => (
          <li key={obj.id}>
            <Card {...obj} />
          </li>
        ))}
      </ul>

      <div className={styles.products__pagination}>
        <div className={styles.prev__button} onClick={onClickDecrementPageNum}>
          <ArrowButton rotate disabled={pageNumber === 1} />
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
          <ArrowButton disabled={pageNumber === 6} />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
