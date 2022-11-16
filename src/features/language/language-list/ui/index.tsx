import React from 'react';
import cn from 'classnames';
import arrow from './assets/arrow.svg';
import styles from './styles.module.scss';

type LanguageProps = {
  whatLanguage: string;
  rotate?: boolean;
};

const Language: React.FC<LanguageProps> = ({ whatLanguage, rotate }) => {
  return (
    <div className={styles.container}>
      <p>{whatLanguage}</p>
      <img src={arrow} alt="arrow" className={cn(rotate && styles.rotate)} />
    </div>
  );
};

export default Language;
