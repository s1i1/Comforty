import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'shared/ui';
import { baseRoutes } from 'shared/lib';

import styles from './styles.module.scss';

export const Navbar = () => {
  const [isActiveNav, setIsActiveNav] = React.useState(0);

  const navigation = [
    { title: 'Home', link: baseRoutes.HOME },
    { title: 'Shop', link: baseRoutes.SHOP },
    { title: 'Product', link: '' },
    { title: 'Pages', link: '' },
    { title: 'About', link: '' },
  ];
  const onClickSetActive = (index: number) => {
    setIsActiveNav(index);
  };

  return (
    <nav className={styles.container}>
      <ul>
        {navigation.map((obj, index) => {
          return (
            <li key={index} onClick={() => onClickSetActive(index)}>
              <Link to={obj.link}>
                <NavItem title={obj.title} isActive={index === isActiveNav} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
