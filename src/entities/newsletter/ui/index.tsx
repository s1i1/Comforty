import React from 'react';
import { Button } from 'shared/ui/buttons';
import styles from './styles.module.scss';

const Newsletter = () => {
  const [value, setValue] = React.useState('');

  const handlerClick = () => {
    setValue('');
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Newsletter</h4>
      <label className={styles.mail} onClick={handlerClick}>
        <input
          type="text"
          placeholder="Your email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button title="Subscribe" />
      </label>
      {/* <p className={styles.text}>Sign up for our newsletter</p> */}
    </div>
  );
};

export default Newsletter;
