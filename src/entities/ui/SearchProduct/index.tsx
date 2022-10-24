import React from 'react';
import cn from 'classnames';
import clearIcon from './assets/clear-icon.svg';
import searchIcon from './assets/search-icon.svg';
import styles from './SearchProduct.module.scss';

type SearchProductProps = {
  isValue?: boolean;
};

export const SearchProduct: React.FC<SearchProductProps> = ({ isValue }) => {
  const iconPath = isValue ? clearIcon : searchIcon;

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type="text" placeholder="Search here..." />
        <img
          className={cn(styles.image, isValue && styles.clear)}
          src={iconPath}
          alt="searchIcon"
        />
      </div>
    </div>
  );
};
