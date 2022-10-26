import React from 'react';
import styles from './styles.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div>
        <p className={styles.title}>Contact:</p>
        <p className={styles.phone}>(808) 555-0111</p>
      </div>
    </div>
  );
};

export default Contact;
