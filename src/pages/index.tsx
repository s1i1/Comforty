import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './home';
import { ShopPage } from './shop';

export const Routing = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    document.querySelector('#root')?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
    </Routes>
  );
};
