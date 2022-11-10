import React from 'react';
import { Link } from 'react-router-dom';
import { baseRoutes, useAppDispatch } from 'shared/lib';
import { navbarModel } from 'features/navbar';
import logoIcon from './assets/logo-icon.svg';
import styles from './styles.module.scss';

const Logo = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.logo}>
      <Link
        to={baseRoutes.HOME}
        className={styles.container}
        onClick={() => dispatch(navbarModel.setActivePage(0))}>
        <img className={styles.image} src={logoIcon} alt="logoIcon" />
        <div className={styles.title}>Comforty</div>
      </Link>
    </div>
  );
};

export default Logo;
