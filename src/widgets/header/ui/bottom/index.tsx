import React from 'react';
import cn from 'classnames';
import { Categories } from 'features/categories';
import { Contact } from 'entities/contact';
import { Navbar } from 'features/navbar';

import styles from './styles.module.scss';

const Bottom = () => {
  return (
    <div className={styles.header__bottom}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.categories}>
          <Categories />
          <Navbar />
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
