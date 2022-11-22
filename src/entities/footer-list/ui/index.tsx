import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { baseRoutes } from 'shared/lib';
import { ListItem } from 'shared/ui';
import { categoriesModel } from 'features/categories';
import { useAppDispatch } from 'shared/lib';

import styles from './styles.module.scss';

type categoryNamesItems = {
  title: string;
  category: string;
};

type FooterListProps = {
  header: string;
  categoryNames: categoryNamesItems[];
  setCurrentCategory: ActionCreatorWithPayload<categoriesModel.CategoryItems, string>;
};

const FooterList: React.FC<FooterListProps> = ({ header, categoryNames, setCurrentCategory }) => {
  const dispatch = useAppDispatch();

  const handlerClickCategory = (obj: categoryNamesItems) => {
    dispatch(setCurrentCategory(obj));
  };

  return (
    <div className={styles.footer__list}>
      <h4 className={styles.header}>{header}</h4>
      <ul className={styles.list}>
        {categoryNames.map((obj, index) => (
          <li key={index} className={styles.items} onClick={() => handlerClickCategory(obj)}>
            <Link to={baseRoutes.SHOP}>{<ListItem title={obj.title} />}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
