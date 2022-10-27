import React from 'react';
import cn from 'classnames';
import testImage from './assets/test-image.svg';
import { CategoryCard } from 'shared/ui';
import { Heading } from 'entities/heading';
import styles from './styles.module.scss';

const TopCategories = () => {
  const testArr = [...Array(3).fill(null)];

  return (
    <div className={cn('_container', styles.container)}>
      <Heading title="Top Categories" />

      <ul className={styles.list}>
        {testArr.map((item, index) => (
          <li key={index}>
            <CategoryCard imagePath={testImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
