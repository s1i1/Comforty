import React from 'react';
import styles from './styles.module.scss';

const LanguageModal = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.active}>Eng</li>
        <li>Ru</li>
      </ul>
    </div>
  );
};

export default LanguageModal;
