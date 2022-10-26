import React from 'react';
import styles from './FeatureCard.module.scss';

type FeatureCardProps = {
  imagePath: string;
  title: string;
  subtitle: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ imagePath, title, subtitle }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="title" />

      <div className={styles.text__block}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};
