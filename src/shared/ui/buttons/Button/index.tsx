import React from 'react';
import cn from 'classnames';
import arrowPath from './assets/arrow.svg';
import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  isArrow?: boolean;
  isLarge?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ title, isArrow, isLarge }) => {
  return (
    <div className={styles.button}>
      <div className={cn(styles.container, isLarge && styles.largeButton)}>
        <div className={styles.title}>{title}</div>
        {isArrow && <img className={styles.image} src={arrowPath} alt="arrow" />}
      </div>
    </div>
  );
};
