import React from 'react';
import cn from 'classnames';
import { Shipping } from 'entities/shipping';
import { Language, LanguageModal } from 'features/language';
import { Help } from 'entities/help';
import styles from './styles.module.scss';

const Top = () => {
  return (
    <div className={styles.header__top}>
      <div className={cn('_container', styles.container)}>
        <div className={styles.shipping}>
          <Shipping />
        </div>
        <ul>
          <li className={styles.language}>
            <Language />
            <div className={styles.modal}>
              <LanguageModal />
            </div>
          </li>
          <li className={styles.faq}>Faqs</li>
          <li>
            <Help />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
