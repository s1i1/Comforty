import React from 'react';
import { useLocation } from 'react-router-dom';
import { baseRoutes, useAppDispatch } from 'shared/lib';
import { ourProductsModel } from 'entities/our-products';
import { categoriesModel } from 'features/categories';
import { searchModel } from 'features/search-product';
import { Routing } from 'pages';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';

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

  const { pathname } = useLocation();

  React.useEffect(() => {
    window?.scrollTo(0, 0);
    dispatch(setActiveCategory(0));
    dispatch(setLinkTag(ourProductCategoryNames[0].link));

    if (pathname !== baseRoutes.SHOP) {
      dispatch(setCurrentCategory(categoryNames[0]));
      dispatch(setSearchValue(''));
    }
  }, [pathname]);

  return (
    <div className="wrapper">
      <div className="App">
        <Header />

        <Routing />

        <Footer />
      </div>
    </div>
  );
};

export default App;
