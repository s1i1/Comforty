import React from 'react';
import logoIcon from './assets/logo-icon.svg';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.container}>
        <img className={styles.image} src={logoIcon} alt="logoIcon" />
        <div className={styles.title}>Comforty</div>
      </div>
    </div>
  );
};

export default Logo;
