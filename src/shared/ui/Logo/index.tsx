import React from 'react';
import { useAppDispatch } from 'shared/lib';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import { categoriesModel } from 'features/categories';
import logoIcon from './assets/logo-icon.svg';
import styles from './styles.module.scss';

const Logo = () => {
  const dispatch = useAppDispatch();
  const { categoryNames, setCurrentCategory } = categoriesModel;

  const handlerClickLogo = () => {
    dispatch(setCurrentCategory(categoryNames[0]));
  };

  return (
    <div className={styles.logo}>
      <Link to={baseRoutes.HOME} className={styles.container} onClick={handlerClickLogo}>
        <img className={styles.image} src={logoIcon} alt="logoIcon" />
        <div className={styles.title}>Comforty</div>
      </Link>
    </div>
  );
};

export default Logo;
