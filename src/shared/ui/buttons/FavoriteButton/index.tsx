import React from 'react';
import cn from 'classnames';
import styles from './FavoriteButton.module.scss';

type FavoriteProps = {
  isActive?: boolean;
  inHeader?: boolean;
};

export const FavoriteButton: React.FC<FavoriteProps> = ({ isActive, inHeader }) => {
  const checkIsHeader = inHeader && styles.reactive;
  const checkIsActive = isActive ? styles.active : styles.notActive;

  return (
    <div className={cn(styles.button, checkIsHeader, checkIsActive)}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="8" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6327 21.6315C12.6491 18.5607 13.7977 15.0508 17.0225 14.0122C17.8587 13.7446 18.7468 13.6809 19.6127 13.8263C20.4785 13.9717 21.2971 14.3221 22 14.8482C23.3338 13.8169 25.2743 13.4686 26.9683 14.0122C30.1923 15.0508 31.3491 18.5607 30.3664 21.6315C28.8356 26.499 22 30.2482 22 30.2482C22 30.2482 15.2148 26.5558 13.6327 21.6315V21.6315Z"
          stroke="#272343"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
