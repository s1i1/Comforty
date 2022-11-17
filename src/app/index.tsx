import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib';
import { ourProductsModel } from 'entities/our-products';
import { Routing } from 'pages';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';

import './styles/index.scss';

const App = () => {
  const dispatch = useAppDispatch();

  const { categoryNames, setLinkTag, setActiveCategory } = ourProductsModel;

  const { pathname } = useLocation();

  React.useEffect(() => {
    document.querySelector('#root')?.scrollTo(0, 0);
    dispatch(setActiveCategory(0));
    dispatch(setLinkTag(categoryNames[0].link));
  }, [pathname]);

  return (
    <div className="App">
      <Header />

      <Routing />

      <Footer />
    </div>
  );
};

export default App;
