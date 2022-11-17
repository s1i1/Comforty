import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib';
import { NavItem } from 'shared/ui';
import { baseRoutes } from 'shared/lib';
import { navbarModel } from 'features/navbar';

import styles from './styles.module.scss';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { HOME, SHOP, PRODUCT, ABOUT } = baseRoutes;

  React.useEffect(() => {
    dispatch(navbarModel.setActivePage(location.pathname));
  }, [dispatch, location]);

  const navigation = [
    { title: 'Home', link: HOME },
    { title: 'Shop', link: SHOP },
    { title: 'Product', link: PRODUCT },
    { title: 'About', link: ABOUT },
  ];

  return (
    <nav className={styles.container}>
      <ul>
        {navigation.map((obj, index) => {
          return (
            <li key={index}>
              <Link to={obj.link}>
                <NavItem title={obj.title} isActive={location.pathname === obj.link} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
