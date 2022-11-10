import React from 'react';
import cn from 'classnames';
import clearIcon from './assets/clear-icon.svg';
import searchIcon from './assets/search-icon.svg';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { searchModel } from 'features/search-product';

import styles from './styles.module.scss';

const SearchProduct: React.FC = () => {
  const dispatch = useAppDispatch();

  const { value: searchValue } = useAppSelector(searchModel.selectSearch);

  const iconPath = searchValue ? clearIcon : searchIcon;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchModel.setSearchValue(e.target.value));
  };

  const onClickClearSearch = () => {
    dispatch(searchModel.setSearchValue(''));
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
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
