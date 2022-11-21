import React from 'react';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import { useAppSelector } from 'shared/lib';
import { BackToButton } from 'shared/ui/buttons';
import { headerModel } from 'widgets/header';
import styles from './styles.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => navigate(baseRoutes.HOME, { replace: true });

  const { scroll } = useAppSelector(headerModel.selectHeader);

  return (
    <div className={cn('_container', styles.container, scroll >= 48 && styles.with__scroll)}>
      <h2 className={styles.title}>page not found</h2>
      <p className={styles.text}>
        Uh oh, we can`t seem to find the page you`re looking for. Try going back to the previous
        page
      </p>
      <div className={styles.back__to_button} onClick={goHome}>
        <BackToButton title="Go Back Home" />
      </div>
    </div>
  );
};
