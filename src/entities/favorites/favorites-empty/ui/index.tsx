import React from 'react';
import styles from './styles.module.scss';

const FavoritesEmpty = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>you have no saved items</p>
    </div>
  );
};

export default FavoritesEmpty;
