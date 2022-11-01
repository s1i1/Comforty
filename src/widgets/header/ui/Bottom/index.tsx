import React from 'react';
import cn from 'classnames';
import { CategoriesButton } from 'shared/ui/buttons';
import { Contact } from 'entities/contact';
import { Navbar } from 'entities/navbar';
import { CategoriesModal } from 'features/categories';

import styles from './styles.module.scss';

const Bottom = () => {
  const navTitles: string[] = ['Home', 'Shop', 'Product', 'Pages', 'About'];

  return (
    <div className={styles.header__bottom}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.categories}>
          <div className={styles.categories__block}>
            <CategoriesButton />
            <div className={styles.modal}>
              <CategoriesModal />
            </div>
          </div>
          <nav>
            {navTitles.map((item, index) => {
              return (
                <ul key={index}>
                  <Navbar title={item} isActive={index === 0 && true} />
                </ul>
              );
            })}
          </nav>
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
