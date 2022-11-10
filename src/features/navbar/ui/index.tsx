import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { NavItem } from 'shared/ui';
import { baseRoutes } from 'shared/lib';
import { navbarModel } from 'features/navbar';

import styles from './styles.module.scss';

const Navbar = () => {
  const dispatch = useAppDispatch();

  const { activePage } = useAppSelector((state) => state.navbar);

  const navigation = [
    { title: 'Home', link: baseRoutes.HOME },
    { title: 'Shop', link: baseRoutes.SHOP },
    { title: 'Product', link: '' },
    { title: 'Pages', link: '' },
    { title: 'About', link: '' },
  ];
  const onClickSetActive = (index: number) => {
    dispatch(navbarModel.setActivePage(index));
  };

  return (
    <nav className={styles.container}>
      <ul>
        {navigation.map((obj, index) => {
          return (
            <li key={index} onClick={() => onClickSetActive(index)}>
              <Link to={obj.link}>
                <NavItem title={obj.title} isActive={index === activePage} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
