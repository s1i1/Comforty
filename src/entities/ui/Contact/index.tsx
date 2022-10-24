import React from 'react';
import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <div>
      <div>
        <p className={styles.title}>Contact:</p>
        <p className={styles.phone}>(808) 555-0111</p>
      </div>
    </div>
  );
};
