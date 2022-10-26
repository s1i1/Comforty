import React from 'react';
import cn from 'classnames';
import { CategoriesButton } from 'shared/ui/buttons';
import { Contact } from 'entities/contact';
import { Navigation } from 'entities/navigation';
import styles from './styles.module.scss';

const Bottom = () => {
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
        <div className={styles.contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
