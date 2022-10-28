import React from 'react';
import { Button } from 'shared/ui/buttons';
import styles from './styles.module.scss';

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Newsletter</h4>
      <label className={styles.mail}>
        <input type="text" placeholder="Your email" />
        <Button title="Subscribe" />
      </label>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
      </p>
    </div>
  );
};

export default Newsletter;
