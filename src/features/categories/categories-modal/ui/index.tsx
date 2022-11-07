import React, { Dispatch, SetStateAction } from 'react';
import { CategoriesModalItem } from 'shared/ui';
import styles from './styles.module.scss';

type CategoriesModalProps = {
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
};

const CategoriesModal: React.FC<CategoriesModalProps> = ({
  currentCategory,
  setCurrentCategory,
}) => {
  const categoryNames = [
    'All Categories',
    'Sofa',
    'Armchair',
    'Wing Chair',
    'Desk Chair',
    'Wooden Chair',
    'Park Bench',
  ];

  const handlerClick = (categoryName: string) => {
    setCurrentCategory(categoryName);
  };

  return (
    <ul className={styles.container}>
      {categoryNames.map((name, index) => (
        <li key={index} onClick={() => handlerClick(name)}>
          <CategoriesModalItem title={name} isActive={name === currentCategory && true} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesModal;
