import React from 'react';
import styles from './styles.module.scss';

type CategoryCardProps = {
  image: string;
  category: string;
  total: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ image, category, total, ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="CategoryCardImage" />
      </div>
      <div className={styles.info}>
        <p className={styles.category__name}>{category}</p>
        <p className={styles.products__count}>{total} Products</p>
      </div>
    </div>
  );
};

export default CategoryCard;
