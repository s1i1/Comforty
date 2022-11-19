import React from 'react';
import styles from './styles.module.scss';

const ToTopButton = () => {
  const handlerClick = () => {
    window?.scrollTo(0, 0);
  };

  return (
    <div className={styles.container} onClick={handlerClick}>
      <svg width="30" height="30" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 0.75L4.5 4.25L1 0.75"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ToTopButton;
