import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type ProductTagProps = {
  tag?: string;
};

const ProductTag: React.FC<ProductTagProps> = ({ tag }) => {
  if (!tag) {
    return null;
  }

  const checkIsSales = tag === 'sales' ? styles.sales : styles.new;
  const title = tag === 'sales' ? 'Sales' : 'New';

  return (
    <div className={cn(styles.container, checkIsSales)}>
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export default ProductTag;
