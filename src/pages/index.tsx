import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './home';
import { ShopPage } from './shop';
import { ProductPage } from './product';

export const Routing = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    document.querySelector('#root')?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};
