import React from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { baseRoutes, useAppDispatch, useAppSelector } from 'shared/lib';
import { ourProductsModel } from 'entities/our-products';
import { categoriesModel } from 'features/categories';
import { searchModel } from 'features/search-product';
import { Routing } from 'pages';
import { Header, headerModel } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { ToTopButton } from 'shared/ui/buttons';

import styles from './styles.module.scss';
import './styles/index.scss';

const App = () => {
  const dispatch = useAppDispatch();

  const {
    categoryNames: ourProductCategoryNames,
    setLinkTag,
    setActiveCategory,
  } = ourProductsModel;
  const { categoryNames, setCurrentCategory } = categoriesModel;
  const { setSearchValue } = searchModel;
  const { scroll } = useAppSelector(headerModel.selectHeader);

  const { pathname } = useLocation();

  React.useEffect(() => {
    window?.scrollTo(0, 0);

    if (pathname !== baseRoutes.SHOP) {
      dispatch(setActiveCategory(0));
      dispatch(setCurrentCategory(categoryNames[0]));
      dispatch(setSearchValue(''));
      dispatch(setLinkTag(ourProductCategoryNames[0].link));
    }
  }, [pathname]);

  return (
    <div className="wrapper">
      <div className="App">
        <div className={cn(styles.to__top_button, scroll < window.innerHeight && 'hidden')}>
          <ToTopButton />
        </div>

        <Header />

        <Routing />

        <Footer />
      </div>
    </div>
  );
};

export default App;
