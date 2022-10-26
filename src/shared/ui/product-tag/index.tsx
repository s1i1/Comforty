import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type ProductTagProps = {
  isSales?: boolean;
};

const ProductTag: React.FC<ProductTagProps> = ({ isSales }) => {
  const checkIsSales = isSales ? styles.sales : styles.new;
  const title = isSales ? 'Sales' : 'New';

  return (
    <div className={cn(styles.container, checkIsSales)}>
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export default ProductTag;
