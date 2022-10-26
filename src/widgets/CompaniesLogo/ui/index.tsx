import React from 'react';
import cn from 'classnames';
import { imagesPath } from './imagesPath';

import styles from './CompaniesLogo.module.scss';

export const CompaniesLogo = () => {
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
