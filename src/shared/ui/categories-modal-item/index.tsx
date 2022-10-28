import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type ModalItemProps = {
  title: string;
  isActive?: boolean;
};

const CategoriesModalItem: React.FC<ModalItemProps> = ({ title, isActive }) => {
  return (
    <div className={cn(isActive && styles.active, styles.container)}>
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export default CategoriesModalItem;
