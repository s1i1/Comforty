import React from 'react';
import { ListItem } from 'shared/ui';

import styles from './styles.module.scss';

type FooterListProps = {
  header: string;
  titles: string[];
};

const FooterList: React.FC<FooterListProps> = ({ header, titles }) => {
  return (
    <div className={styles.footer__list}>
      <h4 className={styles.header}>{header}</h4>
      <ul className={styles.list}>
        {titles.map((item, index) => (
          <li key={index}>
            <ListItem title={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
