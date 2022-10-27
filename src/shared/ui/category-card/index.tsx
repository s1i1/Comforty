import React from 'react';
import styles from './styles.module.scss';

type CategoryCardProps = {
  imagePath: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ imagePath }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imagePath} alt="CategoryCardImage" />
      </div>
      <div className={styles.info}>
        <p className={styles.category__name}>Wing Chair</p>
        <p className={styles.products__count}>3,584 Products</p>
      </div>
    </div>
  );
};

export default CategoryCard;
