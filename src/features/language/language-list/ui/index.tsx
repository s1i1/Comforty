import React from 'react';
import arrow from './assets/arrow.svg';
import styles from './styles.module.scss';

type LanguageProps = {
  whatLanguage: string;
};

const Language: React.FC<LanguageProps> = ({ whatLanguage }) => {
  return (
    <div className={styles.container}>
      <p>{whatLanguage}</p>
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default Language;
