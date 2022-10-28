import React from 'react';
import { CategoriesModalItem } from 'shared/ui';
import styles from './styles.module.scss';

const CategoriesModal = () => {
  const testCategoriesData = [
    'All Categories',
    'Sofa',
    'Armchair',
    'Wing Chair',
    'Desk Chair',
    'Wooden Chair',
    'Park Bench',
  ];

  return (
    <ul className={styles.container}>
      {testCategoriesData.map((item, index) => (
        <li key={index}>
          <CategoriesModalItem title={item} isActive={index === 0 && true} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesModal;
