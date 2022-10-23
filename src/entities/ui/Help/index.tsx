import React from 'react';
import alertIcon from './assets/alert-icon.svg';
import styles from './Help.module.scss';

export const Help = () => {
  return (
    <div className={styles.container}>
      <img src={alertIcon} alt="alertIcon" />
      <p>Need Help</p>
    </div>
  );
};
