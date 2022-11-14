import React from 'react';
import cn from 'classnames';
import clearIcon from './assets/clear-icon.svg';
import searchIcon from './assets/search-icon.svg';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { searchModel } from 'features/search-product';
import { ourProductsModel } from 'entities/our-products';
import { categoriesModel } from 'features/categories';

import styles from './styles.module.scss';

const SearchProduct: React.FC = () => {
  const dispatch = useAppDispatch();

  const { value: searchValue } = useAppSelector(searchModel.selectSearch);
  const { linkTag } = useAppSelector(ourProductsModel.selectOurProducts);

  const { setSearchValue } = searchModel;

  const iconPath = searchValue ? clearIcon : searchIcon;

  const refSearch = React.useRef<HTMLInputElement>(null);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setLinkTag, setActiveCategory, setPageNumber } = ourProductsModel;
    const { setCurrentCategory, categoryNames } = categoriesModel;

    if (linkTag) {
      dispatch(setLinkTag(''));
      dispatch(setActiveCategory(0));
      dispatch(setCurrentCategory(categoryNames[0]));
    }

    dispatch(setPageNumber(1));
    dispatch(setSearchValue(e.target.value));
  };

  const onClickClearSearch = () => {
    dispatch(setSearchValue(''));
    refSearch.current?.focus();
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          ref={refSearch}
          type="text"
          placeholder="Search here..."
          value={searchValue}
          onChange={onChangeSearch}
        />
        <img
          className={cn(styles.image, searchValue && styles.clear)}
          src={iconPath}
          alt="searchIcon"
          onClick={onClickClearSearch}
        />
      </div>
    </div>
  );
};

export default SearchProduct;
