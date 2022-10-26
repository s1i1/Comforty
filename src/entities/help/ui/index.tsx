import React from 'react';
import alertIcon from './assets/alert-icon.svg';
import styles from './styles.module.scss';

const Help = () => {
  return (
    <div className={styles.container}>
      <img src={alertIcon} alt="alertIcon" />
      <p>Need Help</p>
    </div>
  );
};

export default Help;
