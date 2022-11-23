import React from 'react';
import cn from 'classnames';
import { CategoriesBar } from 'shared/ui';
import { Card, CategoriesModalItem } from 'shared/ui';
import { useGetItemsQuery } from 'shared/api';
import { ArrowButton } from 'shared/ui/buttons';
import { useAppDispatch, useAppSelector, useDebounce } from 'shared/lib';
import { ourProductsModel } from 'entities/our-products';
import { ProductItems } from 'shared/api/mock.api/models';
import { categoriesModel } from 'features/categories';
import { searchModel } from 'features/search-product';
import { SortNamesItems } from '../model';
import ContentLoader from 'react-content-loader';

import styles from './styles.module.scss';

const OurProducts = () => {
  const dispatch = useAppDispatch();

  const {
    productItems,
    pageNumber,
    linkTag,
    activeCategory: activeLink,
  } = useAppSelector(ourProductsModel.selectOurProducts);
  const { currentCategory } = useAppSelector(categoriesModel.selectCategories);
  const { value: searchValue } = useAppSelector(searchModel.selectSearch);

  const debounced = useDebounce(searchValue);

  const {
    sortNames,
    setProductItems,
    filterProductItems,
    setPageNumber,
    setLinkTag,
    setActiveCategory,
  } = ourProductsModel;

  const [showModal, setShowModal] = React.useState(false);
  const [currentSort, setCurrentSort] = React.useState(sortNames[0]);

  const totalPages = [1, 2, 3, 4, 5, 6];

  const {
    data: products,
    isSuccess,
    isFetching,
  } = useGetItemsQuery({
    pageNumber: pageNumber,
    tag: linkTag || currentCategory.category,
    limit: 8,
    searchProduct: debounced,
    sortProduct: currentSort.sortName,
    order: currentSort.order,
  });

  React.useEffect(() => {
    const activeCategory = currentCategory.category;

    if (isSuccess) {
      dispatch(setProductItems(products));
    }

    if (activeCategory && linkTag) {
      dispatch(filterProductItems(activeCategory));
    }
  }, [dispatch, isSuccess, products, currentCategory, linkTag]);

  const onClickIncrementPageNum = () => {
    if (productItems.length === 8 && pageNumber < 6) {
      dispatch(setPageNumber(pageNumber + 1));
    }
  };

  const onClickDecrementPageNum = () => {
    if (pageNumber > 1) {
      dispatch(setPageNumber(pageNumber - 1));
    }
  };

  const onClickPagination = (number: number) => {
    dispatch(setPageNumber(number));
  };

  const handlerClickCategory = (index: number) => {
    dispatch(setLinkTag(ourProductsModel.categoryNames[index].link));
    dispatch(setActiveCategory(index));
    dispatch(searchModel.setSearchValue(''));
    dispatch(setPageNumber(1));
  };

  const handlerClickSortNames = (obj: SortNamesItems) => {
    setCurrentSort(obj);
    setShowModal(false);
  };

  return (
    <div className={cn('_container', styles.container)}>
      <h2 className={styles.header}>Our Products</h2>

      <div className={styles.categories__block}>
        <ul className={styles.categories__list}>
          {ourProductsModel.categoryNames.map((itemsObj, index) => (
            <li key={index} onClick={() => handlerClickCategory(index)}>
              <CategoriesBar title={itemsObj.title} isActive={index === activeLink && true} />
            </li>
          ))}
        </ul>
        <div
          className={styles.sort}
          onMouseOver={() => setShowModal(true)}
          onMouseOut={() => setShowModal(false)}>
          <div className={styles.sort__button_block}>
            <p className={styles.sort__by}>Sort by:</p>
            <div className={styles.current__sort}>
              <p className={styles.title}>{currentSort.title}</p>
              <div className={cn(styles.arrow__icon, showModal && styles.rotate__arrow)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 9 5"
                  fill="none">
                  <path
                    d="M8 0.75L4.5 4.25L1 0.75"
                    stroke="#272343"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.modal}>
            {showModal && (
              <ul className={styles.modal__list}>
                {sortNames.map((obj, index) => (
                  <li key={index} onClick={() => handlerClickSortNames(obj)}>
                    <CategoriesModalItem
                      title={obj.title}
                      isActive={obj.title === currentSort.title}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <ul className={styles.products__list}>
        {productItems?.map((obj: ProductItems) => (
          <li key={obj.id}>
            {isFetching ? (
              <ContentLoader
                speed={1}
                width={312}
                height={422}
                viewBox="0 0 312 422"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="0" y="0" rx="6" ry="6" width="312" height="312" />
                <rect x="0" y="333" rx="6" ry="6" width="267" height="20" />
                <rect x="0" y="395" rx="6" ry="6" width="75" height="24" />
                <rect x="265" y="375" rx="6" ry="6" width="44" height="45" />
              </ContentLoader>
            ) : (
              <Card {...obj} />
            )}
          </li>
        ))}
      </ul>

      <div className={cn(linkTag ? 'hidden' : styles.products__pagination)}>
        <div className={styles.prev__button} onClick={onClickDecrementPageNum}>
          <ArrowButton rotate disabled={pageNumber === 1} />
        </div>
        <ul className={cn(searchValue ? 'hidden' : styles.pagination__list)}>
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
          <ArrowButton disabled={productItems.length < 8 || pageNumber === 6} />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
