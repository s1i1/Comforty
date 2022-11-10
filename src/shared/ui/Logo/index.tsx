import React from 'react';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import logoIcon from './assets/logo-icon.svg';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={baseRoutes.HOME} className={styles.container}>
        <img className={styles.image} src={logoIcon} alt="logoIcon" />
        <div className={styles.title}>Comforty</div>
      </Link>
    </div>
  );
};

export default Logo;
