import React from 'react';
import styles from './styles.module.scss';

type BackToButtonProps = {
  title: string;
};

const BackToButton: React.FC<BackToButtonProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.image}
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className={styles.text}>{title}</p>
    </div>
  );
};

export default BackToButton;
