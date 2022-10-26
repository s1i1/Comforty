import React from 'react';
import cn from 'classnames';
import { imagesPath } from './images-path';
import styles from './styles.module.scss';

const CompaniesLogo = () => {
  return (
    <div className={cn('_container', styles.container)}>
      <ul className={styles.list}>
        {imagesPath.map((item, index) => (
          <li key={index}>
            <img src={item} alt="companiesLogo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesLogo;
