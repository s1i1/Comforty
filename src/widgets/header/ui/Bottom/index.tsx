import React from 'react';
import cn from 'classnames';
import { CategoriesButton } from 'shared/ui/buttons';
import { Contact, Navigation } from 'entities/ui';
import styles from './Bottom.module.scss';

export const Bottom = () => {
  const navTitles: string[] = ['Home', 'Shop', 'Product', 'Pages', 'About'];

  return (
    <div className={styles.header__bottom}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.categories}>
          <CategoriesButton />
          <nav>
            {navTitles.map((item, index) => {
              return (
                <ul key={index}>
                  <Navigation title={item} isActive={index === 0 && true} />
                </ul>
              );
            })}
          </nav>
        </div>
        <Contact />
      </div>
    </div>
  );
};
