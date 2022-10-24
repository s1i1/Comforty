import React from 'react';
import cn from 'classnames';
import styles from './CategoriesButton.module.scss';

type CategoriesButtonProps = {
  isActive?: boolean;
};

export const CategoriesButton: React.FC<CategoriesButtonProps> = ({ isActive }) => {
  const checkIsActive = isActive ? styles.active : styles.not__active;

  return (
    <div className={styles.categories__button}>
      <div className={cn(styles.menu, checkIsActive)}>
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2.5H0V0.5H18V2.5Z" fill="#272343" />
          <path d="M18 8.5H0V6.5H18V8.5Z" fill="#272343" />
          <path d="M18 14.5H0V12.5H18V14.5Z" fill="#272343" />
        </svg>
        <div>All Categories</div>
      </div>
    </div>
  );
};
