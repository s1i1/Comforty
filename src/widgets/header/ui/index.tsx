import React from 'react';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Top />
      <Middle />
      <Bottom />
    </header>
  );
};

export default Header;
