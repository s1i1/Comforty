import React from 'react';
import { Shipping, Language, Help } from 'entities/ui';
import styles from './Top.module.scss';

export const Top = () => {
  return (
    <div className={styles.header__top}>
      <div className={styles.container}>
        <Shipping />
        <ul>
          <li>
            <Language />
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
