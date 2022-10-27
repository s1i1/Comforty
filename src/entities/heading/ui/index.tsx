import React from 'react';
import cn from 'classnames';
import { ArrowButton } from 'shared/ui/buttons';
import styles from './styles.module.scss';

type HeadingProps = {
  title: string;
};

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className={cn('_container', styles.container)}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <div className={styles.base__arrows}>
          <span className={styles.left}>
            <ArrowButton rotate />
          </span>
          <span className={styles.right}>
            <ArrowButton />
          </span>
        </div>
      </div>
      <div className={styles.alternative__arrows}>
        <span className={styles.left}>
          <ArrowButton rotate />
        </span>
        <span className={styles.right}>
          <ArrowButton />
        </span>
      </div>
    </div>
  );
};

export default Heading;
