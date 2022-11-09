import React from 'react';
import cn from 'classnames';
import clearIcon from './assets/clear-icon.svg';
import searchIcon from './assets/search-icon.svg';
import styles from './styles.module.scss';

const SearchProduct: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const iconPath = searchValue ? clearIcon : searchIcon;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const onClickClearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search here..."
          value={searchValue}
          onChange={(e) => onChangeSearch(e)}
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
