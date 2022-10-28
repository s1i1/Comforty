import React from 'react';
import styles from './styles.module.scss';

type ListItemProps = {
  title: string;
};

const ListItem: React.FC<ListItemProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <p className={styles.list__item}>{title}</p>
    </div>
  );
};

export default ListItem;
