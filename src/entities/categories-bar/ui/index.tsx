import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type CategoriesBarProps = {
  title: string;
  isActive?: boolean;
};

const CategoriesBar: React.FC<CategoriesBarProps> = ({ title, isActive }) => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.title, isActive && styles.active)}>{title}</div>
    </div>
  );
};

export default CategoriesBar;
