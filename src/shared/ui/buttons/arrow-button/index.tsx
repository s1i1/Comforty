import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type ArrowProps = {
  rotate?: boolean;
  green?: boolean;
  disabled?: boolean;
};

const ArrowButton: React.FC<ArrowProps> = ({ rotate, green, disabled }) => {
  const isGreenCheck = green ? styles.green : styles.grey;

  return (
    <div className={styles.arrow}>
      <svg
        className={cn(isGreenCheck, rotate && styles.rotate__arrow, disabled && styles.disabled)}
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="22" fill="#F0F2F3" />
        <path
          d="M25.5 17.5L30 22M30 22L25.5 26.5M30 22H14"
          stroke="#272343"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowButton;
